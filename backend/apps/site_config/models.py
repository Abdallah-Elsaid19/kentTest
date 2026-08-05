from django.core.exceptions import ValidationError
from django.db import models

from apps.core.models import TimeStampedModel
from apps.core.validators import validate_https_url


class SiteSettings(TimeStampedModel):
    organisation_name = models.CharField(max_length=200)
    tagline = models.CharField(max_length=300, blank=True)
    logo = models.ForeignKey("media_library.MediaAsset", blank=True, null=True, on_delete=models.SET_NULL, related_name="site_logos")
    alternate_logo = models.ForeignKey("media_library.MediaAsset", blank=True, null=True, on_delete=models.SET_NULL, related_name="alternate_site_logos")
    contact_email = models.EmailField(blank=True)
    phone = models.CharField(max_length=50, blank=True)
    address = models.TextField(blank=True)
    social_links = models.JSONField(default=dict, blank=True)
    microsoft_bookings_url = models.URLField(blank=True, validators=[validate_https_url])
    lms_url = models.URLField(blank=True, validators=[validate_https_url])
    aptem_url = models.URLField(blank=True, validators=[validate_https_url])
    employer_dashboard_url = models.URLField(blank=True, validators=[validate_https_url])
    privacy_policy_url = models.CharField(max_length=300, blank=True)
    terms_url = models.CharField(max_length=300, blank=True)
    cookie_policy_url = models.CharField(max_length=300, blank=True)
    default_seo_title = models.CharField(max_length=70, blank=True)
    default_seo_description = models.CharField(max_length=170, blank=True)
    default_open_graph_image = models.ForeignKey("media_library.MediaAsset", blank=True, null=True, on_delete=models.SET_NULL, related_name="site_og_defaults")

    class Meta:
        verbose_name_plural = "site settings"

    def __str__(self):
        return self.organisation_name

    def clean(self):
        if self.pk and SiteSettings.objects.exclude(pk=self.pk).exists():
            raise ValidationError("Only one site settings record is permitted.")
        if not self.pk and SiteSettings.objects.exists():
            raise ValidationError("Only one site settings record is permitted.")
