from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .models import SiteSettings
from .serializers import SiteSettingsSerializer


class SiteSettingsView(GenericAPIView):
    serializer_class = SiteSettingsSerializer
    def get(self, request):
        settings = SiteSettings.objects.select_related("logo", "alternate_logo", "default_open_graph_image").first()
        if settings is None:
            return Response({"organisation_name": "", "tagline": "", "contact": {}, "external_links": {}, "social_links": {}})
        return Response(SiteSettingsSerializer(settings, context={"request": request}).data)
