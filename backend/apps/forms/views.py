from rest_framework import status
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from rest_framework.views import APIView

from apps.integrations.models import IntegrationLog
from .captcha import verify_turnstile
from .serializers import ContactSubmissionSerializer, EligibilitySubmissionSerializer, EmployerAgreementSubmissionSerializer, SupportSubmissionSerializer


class FormThrottle(AnonRateThrottle):
    scope = "forms"


class SubmissionView(APIView):
    serializer_class = None
    throttle_classes = (FormThrottle,)

    def post(self, request):
        verify_turnstile(request.data.get("captcha_token", ""), request.META.get("REMOTE_ADDR"))
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        submission = serializer.save()
        IntegrationLog.objects.create(
            integration="forms",
            operation=submission._meta.model_name,
            reference=submission.reference,
            status=IntegrationLog.Status.PENDING,
        )
        return Response(
            {"submission_id": submission.reference, "status": "received", "message": "Thank you. Your submission has been received."},
            status=status.HTTP_201_CREATED,
        )


class ContactSubmissionView(SubmissionView):
    serializer_class = ContactSubmissionSerializer


class SupportSubmissionView(SubmissionView):
    serializer_class = SupportSubmissionSerializer


class EligibilitySubmissionView(SubmissionView):
    serializer_class = EligibilitySubmissionSerializer


class EmployerAgreementSubmissionView(SubmissionView):
    serializer_class = EmployerAgreementSubmissionSerializer
