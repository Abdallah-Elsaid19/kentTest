from datetime import timedelta

from django.utils import timezone
from rest_framework import serializers
from rest_framework.exceptions import APIException

from .models import ContactSubmission, EligibilitySubmission, EmployerAgreementSubmission, SupportSubmission


class DuplicateSubmission(APIException):
    status_code = 409
    default_detail = "A similar submission was received recently."
    default_code = "duplicate_submission"


class SubmissionSerializerBase(serializers.ModelSerializer):
    captcha_token = serializers.CharField(write_only=True, required=False, allow_blank=True)

    def validate_consent(self, value):
        if value is not True:
            raise serializers.ValidationError("Consent is required for this enquiry.")
        return value

    def validate(self, attrs):
        attrs = super().validate(attrs)
        model = self.Meta.model
        cutoff = timezone.now() - timedelta(minutes=15)
        duplicate = model.objects.filter(email__iexact=attrs.get("email", ""), created_at__gte=cutoff).exists()
        if duplicate:
            raise DuplicateSubmission()
        return attrs

    def create(self, validated_data):
        validated_data.pop("captcha_token", None)
        validated_data["consent_at"] = timezone.now()
        return super().create(validated_data)


class ContactSubmissionSerializer(SubmissionSerializerBase):
    class Meta:
        model = ContactSubmission
        fields = ("name", "email", "phone", "organisation", "interest", "message", "consent", "source_page", "captcha_token")


class SupportSubmissionSerializer(SubmissionSerializerBase):
    class Meta:
        model = SupportSubmission
        fields = ("name", "email", "phone", "subject", "message", "consent", "source_page", "captcha_token")


class EligibilitySubmissionSerializer(SubmissionSerializerBase):
    class Meta:
        model = EligibilitySubmission
        fields = ("name", "email", "phone", "programme", "employment_status", "message", "consent", "source_page", "captcha_token")


class EmployerAgreementSubmissionSerializer(SubmissionSerializerBase):
    class Meta:
        model = EmployerAgreementSubmission
        fields = ("name", "email", "phone", "organisation", "job_title", "employee_count", "message", "consent", "source_page", "captcha_token")
