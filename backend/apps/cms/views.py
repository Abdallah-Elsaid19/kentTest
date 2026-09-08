from django.contrib.auth import authenticate, login, logout
from django.db import transaction
from django.db.models import F, Q
from django.middleware.csrf import get_token
from django.shortcuts import get_object_or_404
from django.utils import timezone
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_protect
from rest_framework import serializers
from rest_framework.exceptions import APIException, PermissionDenied, ValidationError
from rest_framework.generics import ListAPIView
from rest_framework.parsers import JSONParser
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.throttling import SimpleRateThrottle
from rest_framework.views import APIView

from apps.audit.models import AuditLog
from .models import ContentEntry, ContentRevision
from .permissions import IsCMSAdmin, is_cms_admin
from .schemas import COLLECTIONS, validate_content
from .serializers import EntryMutationSerializer, EntrySerializer, RevisionSerializer


class Conflict(APIException):
    status_code = 409
    default_detail = "Another administrator changed this section. Reload the latest version before saving."
    default_code = "conflict"


@method_decorator(never_cache, name="dispatch")
class CMSView(APIView):
    permission_classes = [IsCMSAdmin]
    # Preserve the schema's JSON keys; the public project renderer still camelizes envelope fields.
    parser_classes = [JSONParser]


def session_user(user):
    if not user.is_authenticated:
        return None
    return {"username": user.username, "name": user.get_full_name() or user.username,
            "is_admin": is_cms_admin(user), "can_manage_users": user.has_perm("users.view_user"),
            "can_manage_media": user.has_perm("media_library.view_mediaasset")}


class SessionView(CMSView):
    permission_classes = [AllowAny]

    def get(self, request):
        user = request.user
        return Response({"csrf_token": get_token(request), "user": session_user(user)})


class LoginThrottle(SimpleRateThrottle):
    scope = "cms_login"
    rate = "10/min"

    def get_cache_key(self, request, view):
        return self.cache_format % {"scope": self.scope, "ident": self.get_ident(request)}


@method_decorator(csrf_protect, name="dispatch")
class LoginView(CMSView):
    permission_classes = [AllowAny]
    throttle_classes = [LoginThrottle]

    def post(self, request):
        class Credentials(serializers.Serializer):
            username = serializers.CharField(max_length=150)
            password = serializers.CharField(max_length=1024, trim_whitespace=False)

        credentials = Credentials(data=request.data)
        credentials.is_valid(raise_exception=True)
        user = authenticate(request, **credentials.validated_data)
        if not is_cms_admin(user):
            raise PermissionDenied("Unable to sign in with these administrator credentials.")
        login(request, user)
        return Response({"csrf_token": get_token(request), "user": session_user(user)})


class LogoutView(CMSView):
    permission_classes = [AllowAny]

    def post(self, request):
        logout(request)
        return Response({"ok": True})


class CollectionView(CMSView):
    def get(self, request):
        result = []
        for key, schemas in COLLECTIONS.items():
            entries = ContentEntry.objects.filter(page=key)
            live = entries.filter(is_active=True, published_content__isnull=False).count()
            drafts = entries.filter(Q(published_content__isnull=True) | ~Q(content=F("published_content"))).count()
            result.append({"key": key, "title": f"{key.title()} Content", "total": entries.count(), "live": live, "drafts": drafts, "inactive": entries.filter(is_active=False).count(), "schemas": schemas})
        return Response({"items": result})


@method_decorator(never_cache, name="dispatch")
class EntryListView(ListAPIView):
    permission_classes = [IsCMSAdmin]
    serializer_class = EntrySerializer
    filter_backends = []

    def get_queryset(self):
        query = ContentEntry.objects.select_related("updated_by").all()
        if page := self.request.query_params.get("collection"):
            query = query.filter(page=page)
        if search := self.request.query_params.get("search"):
            query = query.filter(Q(title__icontains=search) | Q(key__icontains=search) | Q(content__icontains=search))
        status = self.request.query_params.get("status")
        if status == "inactive":
            query = query.filter(is_active=False)
        elif status == "published":
            query = query.filter(is_active=True, published_content__isnull=False)
        elif status == "draft":
            query = query.filter(Q(published_content__isnull=True) | ~Q(content=F("published_content")))
        elif status:
            raise ValidationError({"status": "Unknown filter."})
        return query


class EntryDetailView(CMSView):
    def get(self, request, key):
        entry = get_object_or_404(ContentEntry.objects.select_related("updated_by"), key=key)
        return Response(EntrySerializer(entry).data)

    @transaction.atomic
    def patch(self, request, key):
        entry = get_object_or_404(ContentEntry.objects.select_for_update(), key=key)
        mutation = EntryMutationSerializer(data=request.data)
        mutation.is_valid(raise_exception=True)
        data = mutation.validated_data
        if data["version"] != entry.version:
            raise Conflict()
        action = data["action"]
        changes = {"updated_at": timezone.now(), "updated_by": request.user, "version": entry.version + 1}
        if action in {"draft", "publish"}:
            validate_content(entry.page, entry.section, data["content"])
            changes["content"] = data["content"]
        if action == "publish":
            changes.update(published_content=data["content"], published_at=timezone.now(), is_active=True)
        elif action == "activate":
            if entry.published_content is None:
                raise ValidationError({"action": "Publish this section before activating it."})
            changes["is_active"] = True
        elif action == "deactivate":
            if entry.section == "metadata":
                raise ValidationError({"action": "Page metadata must remain active."})
            changes["is_active"] = False
        if not ContentEntry.objects.filter(pk=entry.pk, version=data["version"]).update(**changes):
            raise Conflict()
        entry.refresh_from_db()
        ContentRevision.objects.create(entry=entry, version=entry.version, action=action, content=entry.content, published_content=entry.published_content, is_active=entry.is_active, actor=request.user)
        AuditLog.objects.create(action=action, model_label=entry._meta.label, object_id=str(entry.pk), object_repr=entry.key, actor=request.user, request_id=getattr(request, "request_id", ""))
        return Response(EntrySerializer(entry).data)


@method_decorator(never_cache, name="dispatch")
class RevisionListView(ListAPIView):
    permission_classes = [IsCMSAdmin]
    serializer_class = RevisionSerializer
    filter_backends = []

    def get_queryset(self):
        entry = get_object_or_404(ContentEntry, key=self.kwargs["key"])
        return entry.revisions.select_related("actor").all()


class PublicContentView(CMSView):
    permission_classes = [AllowAny]
    authentication_classes = []

    def get(self, request, page):
        if page not in COLLECTIONS:
            return Response({"detail": "Collection not found."}, status=404)
        entries = ContentEntry.objects.filter(page=page, is_active=True, published_content__isnull=False)
        section = request.query_params.get("section")
        if section is not None:
            if section not in COLLECTIONS[page]:
                raise ValidationError({"section": "Unknown section."})
            entries = entries.filter(section=section)
        return Response({"page": page, "sections": [{"key": e.key, "section": e.section, "content": e.published_content} for e in entries]})


class PreviewView(CMSView):
    def get(self, request, key):
        target = get_object_or_404(ContentEntry, key=key)
        entries = ContentEntry.objects.filter(page=target.page)
        return Response({"page": target.page, "sections": [{"key": e.key, "section": e.section, "content": e.content if e.pk == target.pk else e.published_content} for e in entries if e.pk == target.pk or (e.is_active and e.published_content is not None)]})
