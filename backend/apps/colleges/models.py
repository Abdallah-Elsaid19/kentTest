from django.db import models

from apps.core.models import PublicationModel, PublishedManager


class College(PublicationModel):
    slug = models.SlugField(max_length=160, unique=True)
    title = models.CharField(max_length=200)
    summary = models.TextField(blank=True)
    description = models.TextField(blank=True)
    image = models.ForeignKey("media_library.MediaAsset", blank=True, null=True, on_delete=models.SET_NULL)
    sort_order = models.PositiveIntegerField(default=0, db_index=True)
    is_featured = models.BooleanField(default=False, db_index=True)
    legacy_source_id = models.CharField(max_length=64, blank=True, db_index=True)
    objects = models.Manager()
    published = PublishedManager()

    class Meta:
        ordering = ["sort_order", "title"]

    def __str__(self):
        return self.title
