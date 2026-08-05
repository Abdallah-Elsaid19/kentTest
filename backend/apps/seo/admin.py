from django.contrib import admin

from .models import SEORecord


@admin.register(SEORecord)
class SEORecordAdmin(admin.ModelAdmin):
    list_display = ("title", "content_type", "object_id", "robots", "updated_at")
    list_filter = ("content_type", "robots")
    search_fields = ("title", "description", "canonical_url")
    readonly_fields = ("created_at", "updated_at")
