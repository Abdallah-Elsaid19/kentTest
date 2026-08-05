from pathlib import Path

from django.core.exceptions import ValidationError
from django.db import models

from apps.core.models import TimeStampedModel


ALLOWED_MIME_TYPES = {
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
    "application/pdf",
    "video/mp4",
    "video/webm",
}


class MediaAsset(TimeStampedModel):
    class Kind(models.TextChoices):
        IMAGE = "image", "Image"
        DOCUMENT = "document", "Document"
        VIDEO = "video", "Video"

    title = models.CharField(max_length=200)
    file = models.FileField(upload_to="media/%Y/%m/")
    kind = models.CharField(max_length=16, choices=Kind.choices)
    alt_text = models.CharField(max_length=250, blank=True)
    caption = models.TextField(blank=True)
    mime_type = models.CharField(max_length=100)
    file_size = models.PositiveBigIntegerField(default=0)
    width = models.PositiveIntegerField(blank=True, null=True)
    height = models.PositiveIntegerField(blank=True, null=True)
    legacy_source_id = models.CharField(max_length=64, blank=True, db_index=True)
    checksum = models.CharField(max_length=64, blank=True, db_index=True)

    class Meta:
        ordering = ["-created_at"]
        indexes = [models.Index(fields=["kind", "created_at"])]

    def __str__(self):
        return self.title

    def clean(self):
        if self.mime_type not in ALLOWED_MIME_TYPES:
            raise ValidationError({"mime_type": "Unsupported media type."})
        if self.kind == self.Kind.IMAGE and not self.alt_text:
            raise ValidationError({"alt_text": "Alt text is required for images."})
        if self.file and Path(self.file.name).suffix.lower() in {".php", ".js", ".html", ".svg"}:
            raise ValidationError({"file": "This file type is not permitted."})
