from django.core.exceptions import ValidationError
from django.db import models

from apps.core.models import TimeStampedModel


class RedirectRule(TimeStampedModel):
    source_path = models.CharField(max_length=500, unique=True)
    target_path = models.CharField(max_length=1000)
    status_code = models.PositiveSmallIntegerField(default=301)
    is_active = models.BooleanField(default=True, db_index=True)
    preserve_query_string = models.BooleanField(default=True)
    notes = models.TextField(blank=True)

    class Meta:
        ordering = ["source_path"]
        constraints = [models.CheckConstraint(condition=models.Q(status_code__in=[301, 302, 307, 308]), name="valid_redirect_status")]

    def __str__(self):
        return f"{self.source_path} -> {self.target_path}"

    def clean(self):
        if not self.source_path.startswith("/") or not self.target_path.startswith(("/", "https://")):
            raise ValidationError("Redirects require an absolute source path and internal path or HTTPS target.")
        if self.source_path == self.target_path:
            raise ValidationError("Redirect source and target cannot be identical.")
