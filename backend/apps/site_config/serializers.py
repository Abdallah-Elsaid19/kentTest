from rest_framework import serializers

from apps.media_library.serializers import MediaAssetSerializer
from .models import SiteSettings


class SiteSettingsSerializer(serializers.ModelSerializer):
    logo = MediaAssetSerializer(read_only=True)
    alternate_logo = MediaAssetSerializer(read_only=True)
    default_open_graph_image = MediaAssetSerializer(read_only=True)
    contact = serializers.SerializerMethodField()
    external_links = serializers.SerializerMethodField()

    class Meta:
        model = SiteSettings
        fields = (
            "organisation_name", "tagline", "logo", "alternate_logo", "contact", "social_links",
            "external_links", "privacy_policy_url", "terms_url", "cookie_policy_url",
            "default_seo_title", "default_seo_description", "default_open_graph_image", "updated_at",
        )

    def get_contact(self, obj) -> dict:
        return {"email": obj.contact_email, "phone": obj.phone, "address": obj.address}

    def get_external_links(self, obj) -> dict:
        return {
            "microsoft_bookings": obj.microsoft_bookings_url,
            "lms": obj.lms_url,
            "aptem": obj.aptem_url,
            "employer_dashboard": obj.employer_dashboard_url,
        }
