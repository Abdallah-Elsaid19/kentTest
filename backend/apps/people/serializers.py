from rest_framework import serializers

from apps.media_library.serializers import MediaAssetSerializer
from .models import Person


class PersonSerializer(serializers.ModelSerializer):
    photo = MediaAssetSerializer(read_only=True)
    roles = serializers.SlugRelatedField(many=True, read_only=True, slug_field="role")

    class Meta:
        model = Person
        fields = ("id", "slug", "name", "job_title", "bio", "photo", "linkedin_url", "roles", "updated_at")
