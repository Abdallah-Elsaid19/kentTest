from django.db import models

from apps.core.models import PublicationModel, PublishedManager
from apps.core.validators import validate_https_url


class SocialPost(PublicationModel):
    class Platform(models.TextChoices):
        LINKEDIN = "linkedin", "LinkedIn"
        INSTAGRAM = "instagram", "Instagram"
        FACEBOOK = "facebook", "Facebook"
        X = "x", "X"

    platform = models.CharField(max_length=20, choices=Platform.choices, db_index=True)
    source_id = models.CharField(max_length=150)
    content = models.TextField()
    url = models.URLField(validators=[validate_https_url])
    media = models.ForeignKey("media_library.MediaAsset", blank=True, null=True, on_delete=models.SET_NULL)
    platform_published_at = models.DateTimeField(db_index=True)
    objects = models.Manager()
    published = PublishedManager()

    class Meta:
        ordering = ["-platform_published_at"]
        constraints = [models.UniqueConstraint(fields=["platform", "source_id"], name="unique_social_source_post")]

    def __str__(self):
        return f"{self.platform}: {self.source_id}"
