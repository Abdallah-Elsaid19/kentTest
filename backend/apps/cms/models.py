from django.conf import settings
from django.db import models

from apps.core.models import TimeStampedModel


class ContentPage(TimeStampedModel):
    """Page identity; editable sections retain the existing publication workflow."""

    key = models.SlugField(max_length=100, unique=True)
    title = models.CharField(max_length=200)
    route = models.CharField(max_length=255, unique=True)
    group = models.CharField(max_length=100)

    class Meta:
        ordering = ["group", "title"]

    def __str__(self):
        return self.title


class ContentEntry(TimeStampedModel):
    """Working copy and live snapshot have independent publication lifecycles."""

    key = models.CharField(max_length=150, unique=True)
    page = models.CharField(max_length=100, db_index=True)
    content_page = models.ForeignKey(ContentPage, null=True, on_delete=models.PROTECT, related_name="entries")
    section = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    sort_order = models.PositiveIntegerField(default=0)
    content = models.JSONField(default=dict)
    published_content = models.JSONField(null=True, blank=True)
    is_active = models.BooleanField(default=True)
    version = models.PositiveIntegerField(default=1)
    published_at = models.DateTimeField(null=True, blank=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL, related_name="cms_created")
    updated_by = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL, related_name="cms_updated")

    class Meta:
        ordering = ["sort_order", "key"]
        constraints = [models.UniqueConstraint(fields=["page", "section"], name="cms_unique_page_section")]

    @property
    def has_draft(self):
        return self.content != self.published_content

    @property
    def status(self):
        if not self.is_active:
            return "inactive"
        return "draft" if self.has_draft else "published"

    def __str__(self):
        return self.key


class ContentRevision(models.Model):
    entry = models.ForeignKey(ContentEntry, on_delete=models.CASCADE, related_name="revisions")
    version = models.PositiveIntegerField()
    action = models.CharField(max_length=20)
    content = models.JSONField()
    published_content = models.JSONField(null=True)
    is_active = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    actor = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL)

    class Meta:
        ordering = ["-version"]
        constraints = [models.UniqueConstraint(fields=["entry", "version"], name="cms_unique_revision")]

    def __str__(self):
        return f"{self.entry_id} v{self.version}: {self.action}"
