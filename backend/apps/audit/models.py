from django.conf import settings
from django.db import models

from apps.core.models import TimeStampedModel


class AuditLog(TimeStampedModel):
    actor = models.ForeignKey(settings.AUTH_USER_MODEL, blank=True, null=True, on_delete=models.SET_NULL)
    action = models.CharField(max_length=50, db_index=True)
    model_label = models.CharField(max_length=150, db_index=True)
    object_id = models.CharField(max_length=64, blank=True)
    object_repr = models.CharField(max_length=300, blank=True)
    request_id = models.CharField(max_length=80, blank=True, db_index=True)
    changes = models.JSONField(default=dict, blank=True)

    class Meta:
        ordering = ["-created_at"]
        indexes = [models.Index(fields=["model_label", "object_id", "created_at"])]

    def __str__(self):
        return f"{self.action}: {self.model_label} {self.object_id}"
