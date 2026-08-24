from unittest.mock import patch
from tempfile import TemporaryDirectory

from django.test import TestCase, override_settings

from apps.events.models import Event
from apps.integrations.eventbrite import EventbriteClient, EventbriteConfigurationError, EventbriteImage, sync_eventbrite_events


class EventbriteIntegrationTests(TestCase):
    @override_settings(EVENTBRITE_PRIVATE_TOKEN="", EVENTBRITE_ORGANIZATION_ID="")
    def test_token_is_required(self):
        with self.assertRaises(EventbriteConfigurationError):
            EventbriteClient()

    @override_settings(EVENTBRITE_PRIVATE_TOKEN="test-token", EVENTBRITE_ORGANIZATION_ID="123")
    @patch("apps.integrations.eventbrite.EventbriteClient.events")
    @patch("apps.integrations.eventbrite.EventbriteClient.download_image")
    def test_sync_creates_published_event(self, download_image, events):
        download_image.return_value = EventbriteImage(content=b"event-image", mime_type="image/jpeg")
        events.return_value = iter([{
            "id": "456",
            "name": {"text": "Information Session"},
            "summary": "Learn about the programme.",
            "description": {"html": "<p>Details</p>"},
            "start": {"utc": "2026-09-15T12:00:00Z"},
            "end": {"utc": "2026-09-15T14:00:00Z"},
            "status": "live",
            "online_event": True,
            "url": "https://www.eventbrite.co.uk/e/example-tickets-456",
            "logo": {
                "id": "logo-456",
                "original": {
                    "url": "https://img.evbuc.com/example.jpg",
                    "width": 2160,
                    "height": 1080,
                },
            },
        }])
        with TemporaryDirectory() as media_root, self.settings(MEDIA_ROOT=media_root):
            result = sync_eventbrite_events()
        event = Event.objects.get(legacy_source_id="eventbrite:456")
        self.assertEqual(result.created, 1)
        self.assertEqual(event.status, "published")
        self.assertTrue(event.is_online)
        self.assertEqual(event.booking_url, "https://www.eventbrite.co.uk/e/example-tickets-456")
        self.assertIsNotNone(event.image)
        self.assertEqual(event.image.legacy_source_id, "eventbrite-logo:logo-456")
        self.assertEqual(event.image.width, 2160)
