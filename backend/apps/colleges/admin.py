from django.contrib import admin

from .models import College


@admin.register(College)
class CollegeAdmin(admin.ModelAdmin):
    list_display = ("title", "slug", "status", "is_featured", "sort_order", "updated_at")
    list_filter = ("status", "is_featured")
    search_fields = ("title", "slug", "summary", "description")
    prepopulated_fields = {"slug": ("title",)}
    readonly_fields = ("created_at", "updated_at", "created_by", "updated_by")
    ordering = ("sort_order", "title")

    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser
