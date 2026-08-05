from django.urls import path

from .views import ContactSubmissionView, EligibilitySubmissionView, EmployerAgreementSubmissionView, SupportSubmissionView

urlpatterns = [
    path("forms/contact/", ContactSubmissionView.as_view(), name="form-contact"),
    path("forms/support/", SupportSubmissionView.as_view(), name="form-support"),
    path("forms/eligibility/", EligibilitySubmissionView.as_view(), name="form-eligibility"),
    path("forms/employer-agreement/", EmployerAgreementSubmissionView.as_view(), name="form-employer-agreement"),
]
