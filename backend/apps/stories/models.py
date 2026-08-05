from django.db import models

from apps.core.models import PublicationModel, PublishedManager, TimeStampedModel


class Story(PublicationModel):
    class StoryType(models.TextChoices):
        LEARNER = "learner-story", "Learner story"
        CASE_STUDY = "case-study", "Case study"
        STAR_LEARNER = "star-learner", "Star learner"

    slug = models.SlugField(max_length=180, unique=True)
    title = models.CharField(max_length=250)
    story_type = models.CharField(max_length=24, choices=StoryType.choices, db_index=True)
    summary = models.TextField(blank=True)
    body = models.TextField(blank=True)
    person = models.ForeignKey("people.Person", blank=True, null=True, on_delete=models.SET_NULL, related_name="stories")
    programme = models.ForeignKey("programmes.Programme", blank=True, null=True, on_delete=models.SET_NULL, related_name="stories")
    employer = models.CharField(max_length=200, blank=True)
    role = models.CharField(max_length=200, blank=True)
    quote = models.TextField(blank=True)
    image = models.ForeignKey("media_library.MediaAsset", blank=True, null=True, on_delete=models.SET_NULL)
    is_featured = models.BooleanField(default=False, db_index=True)
    sort_order = models.PositiveIntegerField(default=0)
    legacy_source_id = models.CharField(max_length=64, blank=True, db_index=True)
    privacy_approved = models.BooleanField(default=False, help_text="Required before public publication.")
    objects = models.Manager()
    published = PublishedManager()

    class Meta:
        ordering = ["sort_order", "-published_at"]
        constraints = [
            models.CheckConstraint(
                condition=~models.Q(status="published") | models.Q(privacy_approved=True),
                name="published_story_requires_privacy_approval",
            )
        ]

    def __str__(self):
        return self.title


class Testimonial(TimeStampedModel):
    story = models.ForeignKey(Story, blank=True, null=True, on_delete=models.SET_NULL, related_name="testimonials")
    name = models.CharField(max_length=200)
    role = models.CharField(max_length=200, blank=True)
    organisation = models.CharField(max_length=200, blank=True)
    quote = models.TextField()
    is_approved = models.BooleanField(default=False, db_index=True)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["sort_order", "id"]

    def __str__(self):
        return self.name
