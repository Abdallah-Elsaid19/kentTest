from django.contrib import admin

from .models import SiteSettings


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Organisation", {"fields": ("organisation_name", "tagline", "logo", "alternate_logo")}),
        ("Contact", {"fields": ("contact_email", "phone", "address", "social_links")}),
        ("External systems", {"fields": ("microsoft_bookings_url", "lms_url", "aptem_url", "employer_dashboard_url")}),
        ("Policies", {"fields": ("privacy_policy_url", "terms_url", "cookie_policy_url")}),
        ("Default SEO", {"fields": ("default_seo_title", "default_seo_description", "default_open_graph_image")}),
        ("Audit", {"fields": ("created_at", "updated_at")}),
    )
    readonly_fields = ("created_at", "updated_at")

    def has_add_permission(self, request):
        return not SiteSettings.objects.exists()

    def has_delete_permission(self, request, obj=None):
        return False
