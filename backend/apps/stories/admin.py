from django.contrib import admin

from .models import Story, Testimonial


class TestimonialInline(admin.StackedInline):
    model = Testimonial
    extra = 0


@admin.register(Story)
class StoryAdmin(admin.ModelAdmin):
    list_display = ("title", "story_type", "status", "privacy_approved", "is_featured", "updated_at")
    list_filter = ("status", "story_type", "privacy_approved", "is_featured")
    search_fields = ("title", "slug", "summary", "body", "employer", "person__name")
    prepopulated_fields = {"slug": ("title",)}
    readonly_fields = ("created_at", "updated_at", "created_by", "updated_by")
    date_hierarchy = "published_at"
    inlines = (TestimonialInline,)

    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ("name", "organisation", "is_approved", "sort_order", "updated_at")
    list_filter = ("is_approved",)
    search_fields = ("name", "role", "organisation", "quote")
