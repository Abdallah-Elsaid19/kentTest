from django.core.exceptions import ValidationError
from django.test import SimpleTestCase

from apps.core.sanitization import sanitize_html
from apps.core.validators import validate_external_booking_url


class SecurityUtilityTests(SimpleTestCase):
    def test_html_sanitizer_removes_scripts_and_event_handlers(self):
        result = sanitize_html('<p onclick="alert(1)">Safe</p><script>alert(1)</script>')
        self.assertNotIn("onclick", result)
        self.assertNotIn("<script", result)
        self.assertIn("Safe", result)

    def test_allows_https_event_images_but_rejects_unsafe_sources(self):
        result = sanitize_html(
            '<img src="https://img.evbuc.com/event.jpg" alt="Event">'
            '<img src="javascript:alert(1)" alt="Unsafe" loading="eager">'
        )

        self.assertIn('src="https://img.evbuc.com/event.jpg"', result)
        self.assertNotIn("javascript:", result)
        self.assertEqual(result.count('loading="lazy"'), 2)
        self.assertNotIn('loading="eager"', result)
        self.assertEqual(result.count('decoding="async"'), 2)

    def test_booking_url_rejects_unapproved_hosts(self):
        with self.assertRaises(ValidationError):
            validate_external_booking_url("https://example.com/book")

    def test_booking_url_accepts_eventbrite(self):
        validate_external_booking_url("https://www.eventbrite.com/e/approved-event")
