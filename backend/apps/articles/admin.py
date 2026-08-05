from django.contrib import admin

from .models import Article, ArticleCategory, ArticleTag


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ("title", "author", "status", "is_featured", "published_at", "updated_at")
    list_filter = ("status", "is_featured", "categories", "tags")
    search_fields = ("title", "slug", "summary", "body", "author__name")
    prepopulated_fields = {"slug": ("title",)}
    readonly_fields = ("created_at", "updated_at", "created_by", "updated_by")
    filter_horizontal = ("categories", "tags")
    date_hierarchy = "published_at"

    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser


@admin.register(ArticleCategory)
class ArticleCategoryAdmin(admin.ModelAdmin):
    search_fields = ("name", "slug")
    prepopulated_fields = {"slug": ("name",)}


@admin.register(ArticleTag)
class ArticleTagAdmin(admin.ModelAdmin):
    search_fields = ("name", "slug")
    prepopulated_fields = {"slug": ("name",)}
