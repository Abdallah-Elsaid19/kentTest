from rest_framework.generics import ListAPIView

from .models import SocialPost
from .serializers import SocialPostSerializer


class SocialPostListView(ListAPIView):
    serializer_class = SocialPostSerializer
    queryset = SocialPost.published.select_related("media")
    filterset_fields = ("platform",)
    ordering_fields = ("platform_published_at",)
