from django.core.exceptions import ValidationError
from django.db import models

from apps.core.models import TimeStampedModel
from apps.core.validators import validate_https_url


class NavigationMenu(TimeStampedModel):
    class Location(models.TextChoices):
        HEADER = "header", "Header"
        FOOTER = "footer", "Footer"
        UTILITY = "utility", "Utility"

    name = models.CharField(max_length=100)
    location = models.CharField(max_length=16, choices=Location.choices, unique=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class NavigationItem(TimeStampedModel):
    menu = models.ForeignKey(NavigationMenu, on_delete=models.CASCADE, related_name="items")
    parent = models.ForeignKey("self", blank=True, null=True, on_delete=models.CASCADE, related_name="children")
    label = models.CharField(max_length=100)
    internal_path = models.CharField(max_length=300, blank=True)
    external_url = models.URLField(blank=True, validators=[validate_https_url])
    accessible_label = models.CharField(max_length=150, blank=True)
    sort_order = models.PositiveIntegerField(default=0, db_index=True)
    is_visible = models.BooleanField(default=True)

    class Meta:
        ordering = ["sort_order", "id"]
        constraints = [
            models.CheckConstraint(
                condition=(models.Q(internal_path__gt="") & models.Q(external_url="")) | (models.Q(internal_path="") & models.Q(external_url__gt="")),
                name="navigation_item_exactly_one_destination",
            )
        ]

    def __str__(self):
        return self.label

    def clean(self):
        if self.parent_id and self.parent.menu_id != self.menu_id:
            raise ValidationError({"parent": "Parent must belong to the same menu."})
