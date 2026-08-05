from django.db import models

from apps.core.models import PublicationModel, PublishedManager, TimeStampedModel
from apps.core.validators import validate_https_url


class Person(PublicationModel):
    slug = models.SlugField(max_length=180, unique=True)
    name = models.CharField(max_length=200)
    job_title = models.CharField(max_length=200, blank=True)
    bio = models.TextField(blank=True)
    photo = models.ForeignKey("media_library.MediaAsset", blank=True, null=True, on_delete=models.SET_NULL)
    linkedin_url = models.URLField(blank=True, validators=[validate_https_url])
    sort_order = models.PositiveIntegerField(default=0)
    legacy_source_id = models.CharField(max_length=64, blank=True, db_index=True)
    objects = models.Manager()
    published = PublishedManager()

    class Meta:
        ordering = ["sort_order", "name"]

    def __str__(self):
        return self.name


class PersonRole(TimeStampedModel):
    class Role(models.TextChoices):
        COACH = "coach", "Coach"
        INSTRUCTOR = "instructor", "Instructor"
        EXPERT = "expert", "Expert"
        STAFF = "staff", "Staff"
        SPEAKER = "speaker", "Speaker"

    person = models.ForeignKey(Person, on_delete=models.CASCADE, related_name="roles")
    role = models.CharField(max_length=20, choices=Role.choices, db_index=True)

    class Meta:
        constraints = [models.UniqueConstraint(fields=["person", "role"], name="unique_person_role")]

    def __str__(self):
        return f"{self.person} - {self.role}"
