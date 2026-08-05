import uuid

from django.db import models

from apps.core.models import TimeStampedModel


def new_reference(prefix="sub"):
    return f"{prefix}_{uuid.uuid4().hex[:20]}"


class SubmissionBase(TimeStampedModel):
    class DeliveryStatus(models.TextChoices):
        RECEIVED = "received", "Received"
        DELIVERED = "delivered", "Delivered"
        FAILED = "failed", "Failed"

    reference = models.CharField(max_length=32, unique=True, default=new_reference, editable=False)
    name = models.CharField(max_length=200)
    email = models.EmailField(db_index=True)
    phone = models.CharField(max_length=50, blank=True)
    message = models.TextField(blank=True)
    source_page = models.CharField(max_length=300, blank=True)
    consent = models.BooleanField(default=False)
    consent_at = models.DateTimeField()
    delivery_status = models.CharField(max_length=16, choices=DeliveryStatus.choices, default=DeliveryStatus.RECEIVED, db_index=True)

    class Meta:
        abstract = True
        ordering = ["-created_at"]


class ContactSubmission(SubmissionBase):
    organisation = models.CharField(max_length=200, blank=True)
    interest = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.reference


class SupportSubmission(SubmissionBase):
    subject = models.CharField(max_length=200)

    def __str__(self):
        return self.reference


class EligibilitySubmission(SubmissionBase):
    programme = models.ForeignKey("programmes.Programme", blank=True, null=True, on_delete=models.SET_NULL)
    employment_status = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.reference


class EmployerAgreementSubmission(SubmissionBase):
    organisation = models.CharField(max_length=200)
    job_title = models.CharField(max_length=200, blank=True)
    employee_count = models.PositiveIntegerField(blank=True, null=True)

    def __str__(self):
        return self.reference
