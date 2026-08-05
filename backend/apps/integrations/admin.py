from django.contrib import admin

from .models import IntegrationLog, MigrationLog


@admin.register(IntegrationLog)
class IntegrationLogAdmin(admin.ModelAdmin):
    list_display = ("integration", "operation", "reference", "status", "attempts", "created_at")
    list_filter = ("integration", "status", "created_at")
    search_fields = ("reference", "operation", "error_code")
    readonly_fields = tuple(field.name for field in IntegrationLog._meta.fields)
    date_hierarchy = "created_at"

    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False


@admin.register(MigrationLog)
class MigrationLogAdmin(admin.ModelAdmin):
    list_display = ("source_type", "source_id", "target_model", "status", "dry_run", "created_at")
    list_filter = ("source_type", "status", "dry_run")
    search_fields = ("source_id", "target_id", "message", "checksum")
    readonly_fields = tuple(field.name for field in MigrationLog._meta.fields)

    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False
