from django.apps import apps
from django.db import connection
from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver

from .context import current_request


def request_metadata():
    request = current_request.get()
    if request is None:
        return {"actor": None, "request_id": ""}
    user = getattr(request, "user", None)
    return {
        "actor": user if user and user.is_authenticated else None,
        "request_id": getattr(request, "request_id", ""),
    }


@receiver(post_save)
def record_save(sender, instance, created, **kwargs):
    if sender._meta.app_label in {"audit", "contenttypes", "sessions", "admin", "migrations"} or sender._meta.db_table == "django_migrations" or not apps.ready:
        return
    AuditLog = apps.get_model("audit", "AuditLog")
    if AuditLog._meta.db_table not in connection.introspection.table_names():
        return
    AuditLog.objects.create(
        action="create" if created else "update",
        model_label=sender._meta.label,
        object_id=str(getattr(instance, "pk", "")),
        object_repr=str(instance)[:300],
        **request_metadata(),
    )


@receiver(post_delete)
def record_delete(sender, instance, **kwargs):
    if sender._meta.app_label in {"audit", "contenttypes", "sessions", "admin", "migrations"} or sender._meta.db_table == "django_migrations" or not apps.ready:
        return
    AuditLog = apps.get_model("audit", "AuditLog")
    if AuditLog._meta.db_table not in connection.introspection.table_names():
        return
    AuditLog.objects.create(
        action="delete",
        model_label=sender._meta.label,
        object_id=str(getattr(instance, "pk", "")),
        object_repr=str(instance)[:300],
        **request_metadata(),
    )
