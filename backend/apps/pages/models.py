from django.core.exceptions import ValidationError
from django.db import models

from apps.core.models import PublicationModel, PublishedManager
from apps.core.sanitization import sanitize_html
from .schemas import ABOUT_SECTION_SCHEMAS, validate_page_section_data


SECTION_TYPES = {
    "hero", "richText", "programmeCards", "benefits", "testimonials", "events", "people",
    "stories", "logoCloud", "CTA", "contactDetails", "statistics", "FAQ", "form", "media", "externalEmbed",
    *ABOUT_SECTION_SCHEMAS.keys(),
}


class Page(PublicationModel):
    slug = models.SlugField(max_length=200, unique=True)
    title = models.CharField(max_length=250)
    summary = models.TextField(blank=True)
    is_featured = models.BooleanField(default=False, db_index=True)
    sort_order = models.PositiveIntegerField(default=0)
    legacy_source_id = models.CharField(max_length=64, blank=True, db_index=True)
    objects = models.Manager()
    published = PublishedManager()

    class Meta:
        ordering = ["sort_order", "title"]

    def __str__(self):
        return self.title


class PageSection(PublicationModel):
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name="sections")
    section_type = models.CharField(max_length=40)
    sort_order = models.PositiveIntegerField(default=0)
    is_enabled = models.BooleanField(default=True)
    data = models.JSONField(default=dict)

    class Meta:
        ordering = ["sort_order", "id"]
        constraints = [models.UniqueConstraint(fields=["page", "sort_order"], name="unique_page_section_order")]

    def __str__(self):
        return f"{self.page}: {self.section_type}"

    def clean(self):
        if self.section_type not in SECTION_TYPES:
            raise ValidationError({"section_type": "Unsupported page section type."})
        if not isinstance(self.data, dict):
            raise ValidationError({"data": "Section data must be an object."})
        if self.section_type == "richText" and "html" in self.data:
            self.data["html"] = sanitize_html(str(self.data["html"]))
        validate_page_section_data(self.section_type, self.data)
