import requests
from django.conf import settings
from rest_framework.exceptions import ValidationError


def verify_turnstile(token: str, remote_ip: str | None = None) -> None:
    if not settings.TURNSTILE_SECRET_KEY:
        if settings.DEBUG:
            return
        raise ValidationError({"captcha_token": "CAPTCHA service is not configured."})
    if not token:
        raise ValidationError({"captcha_token": "CAPTCHA verification is required."})
    try:
        response = requests.post(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            data={"secret": settings.TURNSTILE_SECRET_KEY, "response": token, "remoteip": remote_ip or ""},
            timeout=5,
        )
        result = response.json()
    except (requests.RequestException, ValueError) as exc:
        raise ValidationError({"captcha_token": "CAPTCHA verification is temporarily unavailable."}) from exc
    if not result.get("success"):
        raise ValidationError({"captcha_token": "CAPTCHA verification failed."})
