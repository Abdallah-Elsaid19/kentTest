from rest_framework.generics import ListAPIView

from .models import Person
from .serializers import PersonSerializer


class PersonListView(ListAPIView):
    serializer_class = PersonSerializer
    search_fields = ("name", "job_title", "bio")
    ordering_fields = ("sort_order", "name", "published_at")

    def get_queryset(self):
        queryset = Person.published.select_related("photo").prefetch_related("roles")
        role = self.request.query_params.get("role")
        return queryset.filter(roles__role=role).distinct() if role else queryset
