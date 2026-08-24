from django.db import models
from django.utils import timezone
from django.utils.html import strip_tags

from apps.core.models import TimeStampedModel
from apps.core.sanitization import sanitize_html
from apps.core.validators import validate_external_booking_url


class EventCategory(TimeStampedModel):
    slug = models.SlugField(max_length=120, unique=True)
    name = models.CharField(max_length=150)

    class Meta:
        ordering = ["name"]
        verbose_name_plural = "event categories"

    def __str__(self):
        return self.name


class PublishedEventManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(
            is_published=True,
            is_hidden_on_site=False,
            starts_at__isnull=False,
            ends_at__isnull=False,
        )


class Event(models.Model):
    title = models.CharField(max_length=220)
    slug = models.SlugField(max_length=240, unique=True)
    event_type = models.CharField(max_length=40, default="Event", blank=True)
    description = models.TextField(blank=True)
    location = models.CharField(max_length=220, blank=True)
    region = models.CharField(max_length=120, blank=True)
    starts_at = models.DateTimeField(blank=True, null=True)
    ends_at = models.DateTimeField(blank=True, null=True)
    capacity = models.PositiveIntegerField(blank=True, null=True)
    is_published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    eventbrite_id = models.CharField(max_length=64, blank=True, null=True, unique=True)
    eventbrite_url = models.URLField(max_length=500, blank=True, validators=[validate_external_booking_url])
    image_url = models.URLField(max_length=500, blank=True)
    venue_name = models.CharField(max_length=220, blank=True)
    status = models.CharField(max_length=32, default="draft", blank=True)
    is_online_event = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)
    is_hidden_on_site = models.BooleanField(default=False)
    max_tickets_per_registration = models.PositiveSmallIntegerField(default=10)
    registration_closes_at = models.DateTimeField(blank=True, null=True)
    registration_description = models.TextField(blank=True)
    registration_opens_at = models.DateTimeField(blank=True, null=True)
    registration_title = models.CharField(max_length=120, default="Register for this event", blank=True)
    timezone = models.CharField(max_length=64, default="Europe/London")
    image_thumbnail_url = models.URLField(max_length=500, blank=True)
    details_content = models.JSONField(default=dict, blank=True)
    objects = models.Manager()
    published = PublishedEventManager()

    class Meta:
        ordering = ["starts_at", "title"]
        indexes = [
            models.Index(fields=["event_type", "starts_at"], name="events_even_event_t_3fa0e1_idx"),
            models.Index(fields=["eventbrite_id"], name="events_even_eventbr_b0f256_idx"),
            models.Index(fields=["is_published", "starts_at"], name="events_even_is_publ_415ff6_idx"),
            models.Index(fields=["slug"], name="events_even_slug_30eb0f_idx"),
        ]
        constraints = [
            models.CheckConstraint(
                condition=models.Q(ends_at__isnull=True)
                | models.Q(starts_at__isnull=True)
                | models.Q(ends_at__gte=models.F("starts_at")),
                name="event_ends_at_gte_starts_at",
            )
        ]

    def __str__(self):
        return self.title

    @property
    def event_status(self):
        if self.status.lower() in {"canceled", "cancelled"}:
            return "cancelled"
        if self.ends_at and self.ends_at < timezone.now():
            return "ended"
        return "upcoming"

    @property
    def summary(self) -> str:
        configured_summary = self.details_content.get("summary", "") if isinstance(self.details_content, dict) else ""
        if configured_summary:
            return str(configured_summary)
        return strip_tags(self.description).strip()[:500]

    def clean(self):
        self.description = sanitize_html(self.description)


class EventSpeaker(TimeStampedModel):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name="event_speakers")
    person = models.ForeignKey("people.Person", on_delete=models.PROTECT, related_name="speaking_events")
    role = models.CharField(max_length=150, blank=True)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]
        constraints = [models.UniqueConstraint(fields=["event", "person"], name="unique_event_speaker")]

    def __str__(self):
        return f"{self.event}: {self.person}"


class EventAgendaItem(TimeStampedModel):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name="agenda")
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    starts_at = models.DateTimeField()
    ends_at = models.DateTimeField()
    speaker = models.ForeignKey("people.Person", blank=True, null=True, on_delete=models.SET_NULL)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "starts_at"]
        constraints = [models.CheckConstraint(condition=models.Q(ends_at__gte=models.F("starts_at")), name="agenda_end_after_start")]

    def __str__(self):
        return self.title
