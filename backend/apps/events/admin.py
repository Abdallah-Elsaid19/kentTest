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
    list_display = ("title", "start_at", "end_at", "event_status", "is_online", "status", "updated_at")
    list_filter = ("status", "is_online", "is_cancelled", "categories")
    search_fields = ("title", "slug", "summary", "description", "location")
    prepopulated_fields = {"slug": ("title",)}
    readonly_fields = ("timezone", "created_at", "updated_at", "created_by", "updated_by")
    date_hierarchy = "start_at"
    inlines = (EventSpeakerInline, EventAgendaInline)

    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser


@admin.register(EventCategory)
class EventCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "updated_at")
    search_fields = ("name", "slug")
    prepopulated_fields = {"slug": ("name",)}
