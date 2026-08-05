from django.utils import timezone
from rest_framework import serializers

from .models import NewsletterSubscription


class NewsletterSubscriptionSerializer(serializers.ModelSerializer):
    captcha_token = serializers.CharField(write_only=True, required=False, allow_blank=True)

    class Meta:
        model = NewsletterSubscription
        fields = ("email", "consent", "source_page", "captcha_token")

    def validate_consent(self, value):
        if value is not True:
            raise serializers.ValidationError("Consent is required.")
        return value

    def create(self, validated_data):
        validated_data.pop("captcha_token", None)
        email = validated_data.pop("email").lower()
        subscription, _ = NewsletterSubscription.objects.update_or_create(
            email=email,
            defaults={**validated_data, "consent_at": timezone.now(), "is_active": True},
        )
        return subscription
