from rest_framework import serializers
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from apps.articles.models import Article
from apps.events.models import Event
from apps.pages.models import Page
from apps.programmes.models import Programme
from apps.stories.models import Story


class SearchResultSerializer(serializers.Serializer):
    type = serializers.CharField()
    title = serializers.CharField()
    summary = serializers.CharField()
    path = serializers.CharField()


class SearchView(GenericAPIView):
    serializer_class = SearchResultSerializer
    def get(self, request):
        query = request.query_params.get("q", "").strip()
        if len(query) < 2:
            return Response({"items": [], "pagination": {"page": 1, "per_page": 20, "total_items": 0, "total_pages": 0}})
        items = []
        sources = [
            ("page", Page.published.filter(title__icontains=query)[:20], "/"),
            ("programme", Programme.published.filter(title__icontains=query)[:20], "/programmes/"),
            ("event", Event.published.filter(title__icontains=query)[:20], "/events/"),
            ("story", Story.published.filter(privacy_approved=True, title__icontains=query)[:20], "/stories/"),
            ("article", Article.published.filter(title__icontains=query)[:20], "/blog/"),
        ]
        for result_type, records, prefix in sources:
            for record in records:
                items.append({"type": result_type, "title": record.title, "summary": getattr(record, "summary", ""), "path": f"{prefix}{record.slug}/"})
        items = items[:20]
        return Response({"items": items, "pagination": {"page": 1, "per_page": 20, "total_items": len(items), "total_pages": 1 if items else 0}})
