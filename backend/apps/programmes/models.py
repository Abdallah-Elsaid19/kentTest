from django.db import models

from apps.core.models import PublicationModel, PublishedManager, TimeStampedModel
from apps.core.sanitization import sanitize_html
from apps.core.validators import validate_https_url


class Programme(PublicationModel):
    class FundingType(models.TextChoices):
        FULLY_FUNDED = "fully-funded", "Fully funded"
        CO_FUNDED = "co-funded", "Co-funded"
        COMMERCIAL = "commercial", "Commercial"

    class DeliveryMode(models.TextChoices):
        ONLINE = "online", "Online"
        IN_PERSON = "in-person", "In person"
        BLENDED = "blended", "Blended"

    slug = models.SlugField(max_length=180, unique=True)
    title = models.CharField(max_length=250)
    college = models.ForeignKey("colleges.College", on_delete=models.PROTECT, related_name="programmes")
    level = models.PositiveSmallIntegerField(db_index=True)
    funding_type = models.CharField(max_length=20, choices=FundingType.choices, db_index=True)
    funding_label = models.CharField(max_length=100)
    duration_months = models.PositiveSmallIntegerField(blank=True, null=True)
    duration_label = models.CharField(max_length=100, blank=True)
    summary = models.TextField()
    description = models.TextField(blank=True)
    delivery_mode = models.CharField(max_length=20, choices=DeliveryMode.choices)
    delivery_schedule = models.CharField(max_length=250, blank=True)
    image = models.ForeignKey("media_library.MediaAsset", blank=True, null=True, on_delete=models.SET_NULL)
    cta_label = models.CharField(max_length=80, default="Enquire now")
    cta_url = models.CharField(max_length=300, default="/eligibility")
    is_featured = models.BooleanField(default=False, db_index=True)
    sort_order = models.PositiveIntegerField(default=0, db_index=True)
    legacy_source_id = models.CharField(max_length=64, blank=True, db_index=True)
    objects = models.Manager()
    published = PublishedManager()

    class Meta:
        ordering = ["sort_order", "title"]
        indexes = [
            models.Index(fields=["status", "college", "level"]),
            models.Index(fields=["status", "funding_type", "is_featured"]),
        ]
        constraints = [models.CheckConstraint(condition=models.Q(level__gte=1), name="programme_level_positive")]

    def __str__(self):
        return self.title

    def clean(self):
        self.description = sanitize_html(self.description)


class ProgrammeModule(TimeStampedModel):
    programme = models.ForeignKey(Programme, on_delete=models.CASCADE, related_name="modules")
    title = models.CharField(max_length=200)
    summary = models.TextField(blank=True)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]
        constraints = [models.UniqueConstraint(fields=["programme", "sort_order"], name="unique_programme_module_order")]

    def __str__(self):
        return self.title


class ProgrammeCertification(TimeStampedModel):
    programme = models.ForeignKey(Programme, on_delete=models.CASCADE, related_name="certifications")
    title = models.CharField(max_length=200)
    awarding_body = models.CharField(max_length=150, blank=True)
    url = models.URLField(blank=True, validators=[validate_https_url])
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]

    def __str__(self):
        return self.title


class ProgrammeEligibilityItem(TimeStampedModel):
    programme = models.ForeignKey(Programme, on_delete=models.CASCADE, related_name="eligibility_items")
    text = models.CharField(max_length=400)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]

    def __str__(self):
        return self.text
