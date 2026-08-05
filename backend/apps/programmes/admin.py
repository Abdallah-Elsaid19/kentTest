from django.contrib import admin

from .models import Programme, ProgrammeCertification, ProgrammeEligibilityItem, ProgrammeModule


class ProgrammeModuleInline(admin.TabularInline):
    model = ProgrammeModule
    extra = 0
    ordering = ("sort_order",)


class ProgrammeCertificationInline(admin.TabularInline):
    model = ProgrammeCertification
    extra = 0
    ordering = ("sort_order",)


class ProgrammeEligibilityInline(admin.TabularInline):
    model = ProgrammeEligibilityItem
    extra = 0
    ordering = ("sort_order",)


@admin.register(Programme)
class ProgrammeAdmin(admin.ModelAdmin):
    list_display = ("title", "college", "level", "funding_type", "status", "is_featured", "updated_at")
    list_filter = ("status", "college", "level", "funding_type", "delivery_mode", "is_featured")
    search_fields = ("title", "slug", "summary", "description", "legacy_source_id")
    prepopulated_fields = {"slug": ("title",)}
    readonly_fields = ("created_at", "updated_at", "created_by", "updated_by")
    date_hierarchy = "published_at"
    inlines = (ProgrammeModuleInline, ProgrammeCertificationInline, ProgrammeEligibilityInline)
    fieldsets = (
        ("Identity", {"fields": ("title", "slug", "college", "status", "published_at")}),
        ("Programme", {"fields": ("level", "funding_type", "funding_label", "duration_months", "duration_label", "summary", "description")}),
        ("Delivery", {"fields": ("delivery_mode", "delivery_schedule")}),
        ("Presentation", {"fields": ("image", "cta_label", "cta_url", "is_featured", "sort_order")}),
        ("Migration and audit", {"fields": ("legacy_source_id", "created_at", "updated_at", "created_by", "updated_by")}),
    )

    def save_model(self, request, obj, form, change):
        if not obj.pk:
            obj.created_by = request.user
        obj.updated_by = request.user
        super().save_model(request, obj, form, change)

    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser
