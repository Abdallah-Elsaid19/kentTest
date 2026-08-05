from rest_framework import serializers

from apps.media_library.serializers import MediaAssetSerializer
from .models import SocialPost


class SocialPostSerializer(serializers.ModelSerializer):
    media = MediaAssetSerializer(read_only=True)

    class Meta:
        model = SocialPost
        fields = ("id", "platform", "content", "url", "media", "platform_published_at")
