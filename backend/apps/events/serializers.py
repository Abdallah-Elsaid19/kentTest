from django.utils.text import slugify
from rest_framework import serializers

from apps.people.serializers import PersonSerializer
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
    start_at = serializers.DateTimeField(source="starts_at", read_only=True)
    end_at = serializers.DateTimeField(source="ends_at", read_only=True)
    is_online = serializers.BooleanField(source="is_online_event", read_only=True)
    booking_url = serializers.URLField(source="eventbrite_url", read_only=True)
    address = serializers.CharField(source="location", read_only=True)
    location = serializers.SerializerMethodField()
    categories = serializers.SerializerMethodField()
    summary = serializers.CharField(read_only=True)
    image = serializers.SerializerMethodField()
    image_featured_url = serializers.SerializerMethodField()

    class Meta:
        model = Event
        fields = ("id", "slug", "title", "status", "start_at", "end_at", "timezone", "location", "address", "is_online", "booking_url", "categories", "summary", "image", "image_featured_url", "updated_at")

    def get_location(self, obj) -> str:
        if obj.is_online_event:
            return "Online"
        return obj.venue_name or obj.location

    def get_categories(self, obj) -> list[dict[str, str]]:
        if not obj.event_type:
            return []
        return [{"slug": slugify(obj.event_type), "name": obj.event_type}]

    def get_image(self, obj) -> dict | None:
        # Eventbrite's original image can be several megabytes. Cards use the
        # supplied rendition and the detail serializer opts back into original.
        image_url = obj.image_thumbnail_url or obj.image_url
        if not image_url:
            return None
        return {
            "id": obj.pk,
            "url": image_url,
            "alt_text": f"{obj.title} event image",
            "caption": "",
            "width": None,
            "height": None,
            "mime_type": "",
            "file_size": 0,
        }

    def get_image_featured_url(self, obj) -> str:
        details = obj.details_content if isinstance(obj.details_content, dict) else {}
        return str(details.get("featured_image_url") or obj.image_url or obj.image_thumbnail_url or "")


class EventDetailSerializer(EventListSerializer):
    speakers = serializers.SerializerMethodField()
    agenda = serializers.SerializerMethodField()
    seo = serializers.SerializerMethodField()
    published_at = serializers.DateTimeField(source="created_at", read_only=True)

    class Meta(EventListSerializer.Meta):
        fields = EventListSerializer.Meta.fields + ("description", "speakers", "agenda", "seo", "published_at")

    def get_image(self, obj) -> dict | None:
        image_url = obj.image_url or obj.image_thumbnail_url
        if not image_url:
            return None
        return {
            "id": obj.pk,
            "url": image_url,
            "alt_text": f"{obj.title} event image",
            "caption": "",
            "width": None,
            "height": None,
            "mime_type": "",
            "file_size": 0,
        }

    def get_seo(self, obj) -> dict:
        return {
            "title": obj.title,
            "description": obj.summary,
            "robots": "index,follow",
            "open_graph": {
                "title": obj.title,
                "description": obj.summary,
                "image": self.get_image(obj),
            },
            "twitter_card": "summary_large_image",
            "schema": [],
        }

    def get_speakers(self, obj) -> list:
        return []

    def get_agenda(self, obj) -> list:
        return []
