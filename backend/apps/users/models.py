from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    class Role(models.TextChoices):
        ADMIN = "admin", "Administrator"
        EDITOR = "editor", "Editor"
        AUTHOR = "author", "Author"
        REVIEWER = "reviewer", "Reviewer"

    role = models.CharField(max_length=16, choices=Role.choices, default=Role.AUTHOR, db_index=True)
