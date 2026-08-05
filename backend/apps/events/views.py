from rest_framework.generics import ListAPIView, RetrieveAPIView

from .filters import EventFilter
from .models import Event
from .serializers import EventDetailSerializer, EventListSerializer


class EventListView(ListAPIView):
    serializer_class = EventListSerializer
    filterset_class = EventFilter
    search_fields = ("title", "summary", "description", "location")
    ordering_fields = ("start_at", "title", "published_at")
    queryset = Event.published.select_related("image").prefetch_related("categories")


class EventDetailView(RetrieveAPIView):
    serializer_class = EventDetailSerializer
    lookup_field = "slug"
    queryset = Event.published.select_related("image").prefetch_related("categories", "event_speakers__person__photo", "event_speakers__person__roles", "agenda__speaker__photo", "agenda__speaker__roles")
