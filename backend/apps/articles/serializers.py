from rest_framework import serializers

from apps.media_library.serializers import MediaAssetSerializer
from apps.seo.serializers import serialize_seo
from .models import Article, ArticleCategory, ArticleTag


class ArticleCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleCategory
        fields = ("slug", "name")


class ArticleTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleTag
        fields = ("slug", "name")


class ArticleSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()
    categories = ArticleCategorySerializer(many=True, read_only=True)
    tags = ArticleTagSerializer(many=True, read_only=True)
    image = MediaAssetSerializer(read_only=True)
    seo = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = ("id", "slug", "title", "summary", "body", "author", "categories", "tags", "image", "is_featured", "seo", "published_at", "updated_at")

    def get_author(self, obj) -> dict | None:
        return {"slug": obj.author.slug, "name": obj.author.name} if obj.author else None

    def get_seo(self, obj) -> dict:
        return serialize_seo(obj, self.context.get("request"))
