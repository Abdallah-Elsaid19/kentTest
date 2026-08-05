from django.contrib import admin

from .models import NewsletterSubscription


@admin.register(NewsletterSubscription)
class NewsletterSubscriptionAdmin(admin.ModelAdmin):
    list_display = ("email", "is_active", "consent", "created_at")
    list_filter = ("is_active", "consent", "created_at")
    search_fields = ("email", "reference")
    readonly_fields = ("email", "consent", "consent_at", "source_page", "reference", "created_at", "updated_at")

    def has_add_permission(self, request):
        return False
