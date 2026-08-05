from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Article
from .serializers import ArticleSerializer


class ArticleListView(ListAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.published.select_related("author", "image").prefetch_related("categories", "tags")
    filterset_fields = ("categories__slug", "tags__slug", "is_featured")
    search_fields = ("title", "summary", "body")
    ordering_fields = ("published_at", "title")


class ArticleDetailView(RetrieveAPIView):
    serializer_class = ArticleSerializer
    lookup_field = "slug"
    queryset = Article.published.select_related("author", "image").prefetch_related("categories", "tags")
