from django.contrib import admin

from .models import Page, PageSection


@admin.action(description="Publish selected pages")
def publish_pages(modeladmin, request, queryset):
    queryset.update(status="published")


class PageSectionInline(admin.StackedInline):
    model = PageSection
    extra = 0
    fields = ("section_type", "sort_order", "is_enabled", "status", "data")
    ordering = ("sort_order",)


@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    list_display = ("title", "slug", "status", "is_featured", "published_at", "updated_at")
    list_filter = ("status", "is_featured", "published_at")
    search_fields = ("title", "slug", "summary")
    prepopulated_fields = {"slug": ("title",)}
    readonly_fields = ("created_at", "updated_at", "created_by", "updated_by")
    date_hierarchy = "published_at"
    actions = (publish_pages,)
    inlines = (PageSectionInline,)

    def save_model(self, request, obj, form, change):
        if not obj.pk:
            obj.created_by = request.user
        obj.updated_by = request.user
        super().save_model(request, obj, form, change)

    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser


@admin.register(PageSection)
class PageSectionAdmin(admin.ModelAdmin):
    list_display = ("page", "section_type", "sort_order", "status", "is_enabled")
    list_filter = ("section_type", "status", "is_enabled")
    search_fields = ("page__title",)
