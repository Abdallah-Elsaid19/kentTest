from django.db import models

from apps.core.models import PublicationModel, PublishedManager, TimeStampedModel
from apps.core.sanitization import sanitize_html


class ArticleCategory(TimeStampedModel):
    slug = models.SlugField(max_length=120, unique=True)
    name = models.CharField(max_length=150)

    class Meta:
        ordering = ["name"]
        verbose_name_plural = "article categories"

    def __str__(self):
        return self.name


class ArticleTag(TimeStampedModel):
    slug = models.SlugField(max_length=120, unique=True)
    name = models.CharField(max_length=150)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class Article(PublicationModel):
    slug = models.SlugField(max_length=180, unique=True)
    title = models.CharField(max_length=250)
    summary = models.TextField(blank=True)
    body = models.TextField(blank=True)
    author = models.ForeignKey("people.Person", blank=True, null=True, on_delete=models.SET_NULL, related_name="articles")
    categories = models.ManyToManyField(ArticleCategory, blank=True, related_name="articles")
    tags = models.ManyToManyField(ArticleTag, blank=True, related_name="articles")
    image = models.ForeignKey("media_library.MediaAsset", blank=True, null=True, on_delete=models.SET_NULL)
    is_featured = models.BooleanField(default=False, db_index=True)
    legacy_source_id = models.CharField(max_length=64, blank=True, db_index=True)
    objects = models.Manager()
    published = PublishedManager()

    class Meta:
        ordering = ["-published_at", "title"]
        indexes = [models.Index(fields=["status", "published_at", "is_featured"])]

    def __str__(self):
        return self.title

    def clean(self):
        self.body = sanitize_html(self.body)
