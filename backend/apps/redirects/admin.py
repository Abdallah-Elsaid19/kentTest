from django.contrib import admin

from .models import RedirectRule


@admin.register(RedirectRule)
class RedirectRuleAdmin(admin.ModelAdmin):
    list_display = ("source_path", "target_path", "status_code", "is_active", "updated_at")
    list_filter = ("status_code", "is_active")
    search_fields = ("source_path", "target_path", "notes")
    readonly_fields = ("created_at", "updated_at")
