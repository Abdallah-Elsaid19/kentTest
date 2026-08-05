from django.db import models

from apps.core.models import TimeStampedModel


class IntegrationLog(TimeStampedModel):
    class Status(models.TextChoices):
        PENDING = "pending", "Pending"
        DELIVERED = "delivered", "Delivered"
        FAILED = "failed", "Failed"

    integration = models.CharField(max_length=50, db_index=True)
    operation = models.CharField(max_length=100)
    reference = models.CharField(max_length=100, db_index=True)
    status = models.CharField(max_length=16, choices=Status.choices, default=Status.PENDING, db_index=True)
    response_code = models.PositiveSmallIntegerField(blank=True, null=True)
    error_code = models.CharField(max_length=100, blank=True)
    attempts = models.PositiveSmallIntegerField(default=0)
    last_attempt_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        ordering = ["-created_at"]
        indexes = [models.Index(fields=["integration", "status", "created_at"])]

    def __str__(self):
        return f"{self.integration}: {self.reference}"


class MigrationLog(TimeStampedModel):
    source_system = models.CharField(max_length=50, default="legacy-wordpress")
    source_type = models.CharField(max_length=80, db_index=True)
    source_id = models.CharField(max_length=100, db_index=True)
    target_model = models.CharField(max_length=120, blank=True)
    target_id = models.CharField(max_length=64, blank=True)
    checksum = models.CharField(max_length=64, blank=True)
    status = models.CharField(max_length=30, db_index=True)
    message = models.TextField(blank=True)
    dry_run = models.BooleanField(default=True)

    class Meta:
        ordering = ["-created_at"]
        constraints = [models.UniqueConstraint(fields=["source_system", "source_type", "source_id", "checksum", "dry_run"], name="unique_migration_log_attempt")]

    def __str__(self):
        return f"{self.source_type}:{self.source_id}"
