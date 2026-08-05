from rest_framework.generics import ListAPIView, RetrieveAPIView

from .filters import ProgrammeFilter
from .models import Programme
from .serializers import ProgrammeDetailSerializer, ProgrammeListSerializer


class ProgrammeListView(ListAPIView):
    serializer_class = ProgrammeListSerializer
    filterset_class = ProgrammeFilter
    search_fields = ("title", "summary", "description")
    ordering_fields = ("sort_order", "title", "level", "published_at")
    queryset = Programme.published.select_related("college", "image")


class ProgrammeDetailView(RetrieveAPIView):
    serializer_class = ProgrammeDetailSerializer
    lookup_field = "slug"
    queryset = Programme.published.select_related("college", "image").prefetch_related("modules", "certifications", "eligibility_items")
