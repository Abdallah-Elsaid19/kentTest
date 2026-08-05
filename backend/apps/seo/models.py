from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models

from apps.core.models import TimeStampedModel


class SEORecord(TimeStampedModel):
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveBigIntegerField()
    content_object = GenericForeignKey("content_type", "object_id")
    title = models.CharField(max_length=70)
    description = models.CharField(max_length=170, blank=True)
    canonical_url = models.URLField(blank=True)
    robots = models.CharField(max_length=50, default="index,follow")
    open_graph_title = models.CharField(max_length=100, blank=True)
    open_graph_description = models.CharField(max_length=200, blank=True)
    open_graph_image = models.ForeignKey("media_library.MediaAsset", blank=True, null=True, on_delete=models.SET_NULL)
    twitter_card = models.CharField(max_length=30, default="summary_large_image")
    structured_data = models.JSONField(default=list, blank=True)

    class Meta:
        constraints = [models.UniqueConstraint(fields=["content_type", "object_id"], name="unique_seo_record_per_object")]
        indexes = [models.Index(fields=["content_type", "object_id"])]

    def __str__(self):
        return self.title
