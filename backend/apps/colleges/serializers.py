from rest_framework import serializers

from apps.media_library.serializers import MediaAssetSerializer
from apps.seo.serializers import serialize_seo
from .models import College


class CollegeSerializer(serializers.ModelSerializer):
    image = MediaAssetSerializer(read_only=True)
    seo = serializers.SerializerMethodField()

    class Meta:
        model = College
        fields = ("id", "slug", "title", "summary", "description", "image", "sort_order", "is_featured", "seo", "published_at", "updated_at")

    def get_seo(self, obj) -> dict:
        return serialize_seo(obj, self.context.get("request"))
