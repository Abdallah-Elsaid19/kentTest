from django.core.exceptions import ValidationError
from django.db import models
from django.utils import timezone

from apps.core.models import PublicationModel, PublishedManager, TimeStampedModel
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


class Event(PublicationModel):
    slug = models.SlugField(max_length=180, unique=True)
    title = models.CharField(max_length=250)
    start_at = models.DateTimeField(db_index=True)
    end_at = models.DateTimeField(db_index=True)
    timezone = models.CharField(max_length=50, default="Europe/London", editable=False)
    location = models.CharField(max_length=250, blank=True)
    address = models.TextField(blank=True)
    is_online = models.BooleanField(default=False)
    booking_url = models.URLField(blank=True, validators=[validate_external_booking_url])
    categories = models.ManyToManyField(EventCategory, blank=True, related_name="events")
    summary = models.TextField(blank=True)
    description = models.TextField(blank=True)
    image = models.ForeignKey("media_library.MediaAsset", blank=True, null=True, on_delete=models.SET_NULL)
    is_cancelled = models.BooleanField(default=False, db_index=True)
    legacy_source_id = models.CharField(max_length=64, blank=True, db_index=True)
    objects = models.Manager()
    published = PublishedManager()

    class Meta:
        ordering = ["start_at", "title"]
        indexes = [models.Index(fields=["status", "start_at", "is_cancelled"])]
        constraints = [models.CheckConstraint(condition=models.Q(end_at__gte=models.F("start_at")), name="event_end_after_start")]

    def __str__(self):
        return self.title

    @property
    def event_status(self):
        if self.is_cancelled:
            return "cancelled"
        return "ended" if self.end_at < timezone.now() else "upcoming"

    def clean(self):
        if self.end_at and self.start_at and self.end_at < self.start_at:
            raise ValidationError({"end_at": "End time must not be before start time."})
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
