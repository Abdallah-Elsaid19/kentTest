from django.contrib import admin

from .models import Event, EventAgendaItem, EventCategory, EventSpeaker


class EventSpeakerInline(admin.TabularInline):
    model = EventSpeaker
    extra = 0


class EventAgendaInline(admin.TabularInline):
    model = EventAgendaItem
    extra = 0


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ("title", "starts_at", "ends_at", "event_status", "is_online_event", "is_published", "updated_at")
    list_filter = ("status", "is_online_event", "is_published", "is_featured", "is_hidden_on_site", "event_type")
    search_fields = ("title", "slug", "description", "location", "venue_name", "eventbrite_id")
    prepopulated_fields = {"slug": ("title",)}
    readonly_fields = ("eventbrite_id", "created_at", "updated_at")
    date_hierarchy = "starts_at"

    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser


@admin.register(EventCategory)
class EventCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "updated_at")
    search_fields = ("name", "slug")
    prepopulated_fields = {"slug": ("name",)}
