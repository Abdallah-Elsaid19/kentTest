from rest_framework import serializers

from .models import ContentEntry, ContentRevision


class EntrySerializer(serializers.ModelSerializer):
    status = serializers.CharField(read_only=True)
    has_draft = serializers.BooleanField(read_only=True)
    updated_by_name = serializers.CharField(source="updated_by.username", read_only=True, default=None)

    class Meta:
        model = ContentEntry
        fields = ["key", "page", "section", "title", "sort_order", "content", "published_content", "is_active", "status", "has_draft", "version", "created_at", "updated_at", "published_at", "updated_by_name"]
        read_only_fields = fields


class RevisionSerializer(serializers.ModelSerializer):
    actor_name = serializers.CharField(source="actor.username", read_only=True, default=None)

    class Meta:
        model = ContentRevision
        fields = ["version", "action", "created_at", "actor_name"]


class EntryMutationSerializer(serializers.Serializer):
    version = serializers.IntegerField(min_value=1)
    action = serializers.ChoiceField(choices=["draft", "publish", "activate", "deactivate"])
    content = serializers.JSONField(required=False)

    def validate(self, attrs):
        if set(self.initial_data) - set(self.fields):
            raise serializers.ValidationError("Unknown request fields.")
        if attrs["action"] in {"draft", "publish"} and "content" not in attrs:
            raise serializers.ValidationError({"content": "Content is required."})
        if attrs["action"] in {"activate", "deactivate"} and "content" in attrs:
            raise serializers.ValidationError({"content": "Save content separately before changing visibility."})
        return attrs
