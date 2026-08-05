from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import College
from .serializers import CollegeSerializer


class CollegeListView(ListAPIView):
    serializer_class = CollegeSerializer
    queryset = College.published.select_related("image")
    filterset_fields = ("is_featured",)
    search_fields = ("title", "summary")
    ordering_fields = ("sort_order", "title", "published_at")


class CollegeDetailView(RetrieveAPIView):
    serializer_class = CollegeSerializer
    lookup_field = "slug"
    queryset = College.published.select_related("image")
