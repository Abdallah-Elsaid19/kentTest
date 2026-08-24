from io import BytesIO
from unittest.mock import patch

from django.test import TestCase, override_settings
from PIL import Image

from apps.events.models import Event
from apps.integrations.eventbrite import (
    EventbriteClient,
    EventbriteConfigurationError,
    EventbriteImage,
    _optimise_featured_image,
    sync_eventbrite_events,
)


class EventbriteIntegrationTests(TestCase):
    @override_settings(EVENTBRITE_PRIVATE_TOKEN="", EVENTBRITE_ORGANIZATION_ID="")
    def test_token_is_required(self):
        with self.assertRaises(EventbriteConfigurationError):
            EventbriteClient()

    @override_settings(EVENTBRITE_PRIVATE_TOKEN="test-token", EVENTBRITE_ORGANIZATION_ID="123")
    @patch("apps.integrations.eventbrite.EventbriteClient.event_description")
    @patch("apps.integrations.eventbrite.EventbriteClient.events")
    @patch("apps.integrations.eventbrite._store_featured_image", return_value="/media/events/featured/456.webp")
    def test_sync_creates_published_event(self, store_featured_image, events, event_description):
        event_description.return_value = (
            '<div><h2>Full event programme</h2>'
            '<img src="https://img.evbuc.com/inside-event.jpg" alt="Learners">'
            '<script>alert(1)</script></div>'
        )
        events.return_value = iter([{
            "id": "456",
            "name": {"text": "Information Session"},
            "summary": "Learn about the programme.",
            "description": {"html": "<p>Details</p>"},
            "start": {"utc": "2026-09-15T12:00:00Z"},
            "end": {"utc": "2026-09-15T14:00:00Z"},
            "status": "live",
            "listed": True,
            "online_event": True,
            "url": "https://www.eventbrite.co.uk/e/example-tickets-456",
            "format": {"name": "Seminar or Talk"},
            "logo": {
                "id": "logo-456",
                "url": "https://img.evbuc.com/example-thumbnail.jpg",
                "original": {
                    "url": "https://img.evbuc.com/example.jpg",
                    "width": 2160,
                    "height": 1080,
                },
            },
        }])
        result = sync_eventbrite_events()
        event = Event.objects.get(eventbrite_id="456")
        self.assertEqual(result.created, 1)
        self.assertEqual(event.status, "live")
        self.assertTrue(event.is_published)
        self.assertTrue(event.is_online_event)
        self.assertEqual(event.eventbrite_url, "https://www.eventbrite.co.uk/e/example-tickets-456")
        self.assertEqual(event.image_url, "https://img.evbuc.com/example.jpg")
        self.assertEqual(event.image_thumbnail_url, "https://img.evbuc.com/example-thumbnail.jpg")
        self.assertEqual(event.event_type, "Seminar or Talk")
        self.assertEqual(event.details_content["summary"], "Learn about the programme.")
        self.assertEqual(event.details_content["featured_image_url"], "/media/events/featured/456.webp")
        self.assertIn("Full event programme", event.description)
        self.assertIn(
            '<img loading="lazy" decoding="async" src="https://img.evbuc.com/inside-event.jpg" alt="Learners">',
            event.description,
        )
        self.assertNotIn("<script", event.description)
        event_description.assert_called_once_with("456")
        store_featured_image.assert_called_once()
        self.assertEqual(
            store_featured_image.call_args.args[1:],
            ("456", "https://img.evbuc.com/example.jpg"),
        )

    def test_featured_image_is_resized_and_encoded_as_webp(self):
        source = BytesIO()
        Image.new("RGB", (2000, 1000), "#4b176d").save(source, format="PNG")

        result = _optimise_featured_image(EventbriteImage(source.getvalue(), "image/png"))

        with Image.open(BytesIO(result)) as optimised:
            self.assertEqual(optimised.format, "WEBP")
            self.assertEqual(optimised.size, (1200, 600))
