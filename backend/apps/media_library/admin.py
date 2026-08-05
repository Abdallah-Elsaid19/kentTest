from django.contrib import admin

from .models import MediaAsset


@admin.register(MediaAsset)
class MediaAssetAdmin(admin.ModelAdmin):
    list_display = ("title", "kind", "mime_type", "file_size", "updated_at")
    list_filter = ("kind", "mime_type", "updated_at")
    search_fields = ("title", "alt_text", "caption", "legacy_source_id", "checksum")
    readonly_fields = ("file_size", "width", "height", "checksum", "created_at", "updated_at")
    date_hierarchy = "created_at"
