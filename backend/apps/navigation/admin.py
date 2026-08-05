from django.contrib import admin

from .models import NavigationItem, NavigationMenu


class NavigationItemInline(admin.TabularInline):
    model = NavigationItem
    extra = 0
    fields = ("label", "parent", "internal_path", "external_url", "sort_order", "is_visible", "accessible_label")


@admin.register(NavigationMenu)
class NavigationMenuAdmin(admin.ModelAdmin):
    list_display = ("name", "location", "is_active", "updated_at")
    list_filter = ("location", "is_active")
    search_fields = ("name",)
    inlines = (NavigationItemInline,)


@admin.register(NavigationItem)
class NavigationItemAdmin(admin.ModelAdmin):
    list_display = ("label", "menu", "parent", "sort_order", "is_visible")
    list_filter = ("menu", "is_visible")
    search_fields = ("label", "internal_path", "external_url")
    ordering = ("menu", "sort_order")
