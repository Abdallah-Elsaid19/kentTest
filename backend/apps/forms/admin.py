from django.contrib import admin

from .models import ContactSubmission, EligibilitySubmission, EmployerAgreementSubmission, SupportSubmission


class SubmissionAdmin(admin.ModelAdmin):
    list_display = ("reference", "name", "email", "delivery_status", "consent", "created_at")
    list_filter = ("delivery_status", "consent", "created_at")
    search_fields = ("reference", "name", "email", "phone")
    date_hierarchy = "created_at"

    def get_readonly_fields(self, request, obj=None):
        model = obj.__class__ if obj is not None else self.model
        return tuple(field.name for field in model._meta.fields if field.name != "delivery_status")

    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser


admin.site.register(ContactSubmission, SubmissionAdmin)
admin.site.register(SupportSubmission, SubmissionAdmin)
admin.site.register(EligibilitySubmission, SubmissionAdmin)
admin.site.register(EmployerAgreementSubmission, SubmissionAdmin)
