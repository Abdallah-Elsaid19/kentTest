from django.contrib import admin

from .models import ContentEntry, ContentRevision


class CMSReadOnlyAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False

    def has_delete_permission(self, request, obj=None):
        return False


@admin.register(ContentEntry)
class ContentEntryAdmin(CMSReadOnlyAdmin):
    list_display = ["key", "title", "status", "version", "updated_at"]
    search_fields = ["key", "title"]
    list_filter = ["page", "is_active"]


@admin.register(ContentRevision)
class ContentRevisionAdmin(CMSReadOnlyAdmin):
    list_display = ["entry", "version", "action", "actor", "created_at"]
