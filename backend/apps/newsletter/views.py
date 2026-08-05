from rest_framework import status
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from rest_framework.generics import GenericAPIView

from apps.forms.captcha import verify_turnstile
from apps.integrations.models import IntegrationLog
from .serializers import NewsletterSubscriptionSerializer


class NewsletterThrottle(AnonRateThrottle):
    scope = "newsletter"


class NewsletterSubscribeView(GenericAPIView):
    serializer_class = NewsletterSubscriptionSerializer
    throttle_classes = (NewsletterThrottle,)

    def post(self, request):
        verify_turnstile(request.data.get("captcha_token", ""), request.META.get("REMOTE_ADDR"))
        serializer = NewsletterSubscriptionSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        subscription = serializer.save()
        IntegrationLog.objects.create(
            integration="newsletter",
            operation="subscribe",
            reference=subscription.reference,
            status=IntegrationLog.Status.PENDING,
        )
        return Response({"subscription_id": subscription.reference, "status": "subscribed"}, status=status.HTTP_201_CREATED)
