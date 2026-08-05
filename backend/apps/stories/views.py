from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Story
from .serializers import StorySerializer


class StoryListView(ListAPIView):
    serializer_class = StorySerializer
    queryset = Story.published.filter(privacy_approved=True).select_related("image", "person", "programme")
    filterset_fields = ("story_type", "is_featured", "programme__slug")
    search_fields = ("title", "summary", "body", "employer", "role")
    ordering_fields = ("sort_order", "published_at", "title")


class StoryDetailView(RetrieveAPIView):
    serializer_class = StorySerializer
    lookup_field = "slug"
    queryset = Story.published.filter(privacy_approved=True).select_related("image", "person", "programme").prefetch_related("testimonials")
