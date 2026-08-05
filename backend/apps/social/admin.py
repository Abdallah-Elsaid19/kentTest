from django.contrib import admin

from .models import SocialPost


@admin.register(SocialPost)
class SocialPostAdmin(admin.ModelAdmin):
    list_display = ("platform", "source_id", "status", "platform_published_at", "updated_at")
    list_filter = ("platform", "status")
    search_fields = ("source_id", "content", "url")
    date_hierarchy = "platform_published_at"
