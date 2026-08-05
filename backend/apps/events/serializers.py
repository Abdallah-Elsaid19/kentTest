from rest_framework import serializers

from apps.media_library.serializers import MediaAssetSerializer
from apps.people.serializers import PersonSerializer
from apps.seo.serializers import serialize_seo
from .models import Event, EventAgendaItem, EventCategory, EventSpeaker


class EventCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = EventCategory
        fields = ("slug", "name")


class EventSpeakerSerializer(serializers.ModelSerializer):
    person = PersonSerializer(read_only=True)

    class Meta:
        model = EventSpeaker
        fields = ("person", "role", "sort_order")


class EventAgendaSerializer(serializers.ModelSerializer):
    speaker = PersonSerializer(read_only=True)

    class Meta:
        model = EventAgendaItem
        fields = ("id", "title", "description", "starts_at", "ends_at", "speaker", "sort_order")


class EventListSerializer(serializers.ModelSerializer):
    status = serializers.CharField(source="event_status", read_only=True)
    categories = EventCategorySerializer(many=True, read_only=True)
    image = MediaAssetSerializer(read_only=True)

    class Meta:
        model = Event
        fields = ("id", "slug", "title", "status", "start_at", "end_at", "timezone", "location", "address", "is_online", "booking_url", "categories", "summary", "image", "updated_at")


class EventDetailSerializer(EventListSerializer):
    speakers = EventSpeakerSerializer(source="event_speakers", many=True, read_only=True)
    agenda = EventAgendaSerializer(many=True, read_only=True)
    seo = serializers.SerializerMethodField()

    class Meta(EventListSerializer.Meta):
        fields = EventListSerializer.Meta.fields + ("description", "speakers", "agenda", "seo", "published_at")

    def get_seo(self, obj) -> dict:
        return serialize_seo(obj, self.context.get("request"))
