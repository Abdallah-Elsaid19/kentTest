from django.contrib import admin

from .models import Person, PersonRole


class PersonRoleInline(admin.TabularInline):
    model = PersonRole
    extra = 0


@admin.register(Person)
class PersonAdmin(admin.ModelAdmin):
    list_display = ("name", "job_title", "status", "published_at", "updated_at")
    list_filter = ("status", "roles__role")
    search_fields = ("name", "slug", "job_title", "bio")
    prepopulated_fields = {"slug": ("name",)}
    readonly_fields = ("created_at", "updated_at", "created_by", "updated_by")
    inlines = (PersonRoleInline,)

    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser
