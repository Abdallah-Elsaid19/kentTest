import uuid

from django.db import models

from apps.core.models import TimeStampedModel


def new_newsletter_reference():
    return f"news_{uuid.uuid4().hex[:20]}"


class NewsletterSubscription(TimeStampedModel):
    email = models.EmailField(unique=True)
    consent = models.BooleanField(default=False)
    consent_at = models.DateTimeField()
    is_active = models.BooleanField(default=True, db_index=True)
    source_page = models.CharField(max_length=300, blank=True)
    reference = models.CharField(max_length=32, unique=True, default=new_newsletter_reference, editable=False)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.email
