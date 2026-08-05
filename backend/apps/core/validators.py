from urllib.parse import urlparse

from django.core.exceptions import ValidationError


def validate_https_url(value: str) -> None:
    if not value:
        return
    parsed = urlparse(value)
    if parsed.scheme != "https" or not parsed.netloc:
        raise ValidationError("Enter a valid HTTPS URL.")


def validate_external_booking_url(value: str) -> None:
    validate_https_url(value)
    host = (urlparse(value).hostname or "").lower()
    allowed = ("eventbrite.com", "eventbrite.co.uk", "outlook.office.com", "microsoft.com")
    if not any(host == domain or host.endswith(f".{domain}") for domain in allowed):
        raise ValidationError("Booking URL host is not approved.")
