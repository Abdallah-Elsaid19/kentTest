from rest_framework import serializers

from .models import MediaAsset


class MediaAssetSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField()

    class Meta:
        model = MediaAsset
        fields = ("id", "url", "alt_text", "caption", "width", "height", "mime_type", "file_size")

    def get_url(self, obj) -> str:
        if not obj.file:
            return ""
        return obj.file.url
