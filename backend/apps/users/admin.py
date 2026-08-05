from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User


@admin.register(User)
class KBCUserAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + (("Editorial role", {"fields": ("role",)}),)
    add_fieldsets = UserAdmin.add_fieldsets + (("Editorial role", {"fields": ("role",)}),)
    list_filter = UserAdmin.list_filter + ("role",)
