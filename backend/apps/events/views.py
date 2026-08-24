from django.conf import settings
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from rest_framework.generics import ListAPIView, RetrieveAPIView

from .filters import EventFilter
from .models import Event
from .serializers import EventDetailSerializer, EventListSerializer


@method_decorator(cache_page(settings.EVENTS_API_CACHE_SECONDS), name="dispatch")
class EventListView(ListAPIView):
    serializer_class = EventListSerializer
    filterset_class = EventFilter
    search_fields = ("title", "description", "location", "venue_name", "event_type")
    ordering_fields = ("starts_at", "title", "created_at")
    queryset = Event.published.all()


@method_decorator(cache_page(settings.EVENTS_API_CACHE_SECONDS), name="dispatch")
class EventDetailView(RetrieveAPIView):
    serializer_class = EventDetailSerializer
    lookup_field = "slug"
    queryset = Event.published.all()
