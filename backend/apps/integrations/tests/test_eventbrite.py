from unittest.mock import patch

from django.test import TestCase, override_settings

from apps.events.models import Event
from apps.integrations.eventbrite import EventbriteClient, EventbriteConfigurationError, sync_eventbrite_events


class EventbriteIntegrationTests(TestCase):
    @override_settings(EVENTBRITE_PRIVATE_TOKEN="", EVENTBRITE_ORGANIZATION_ID="")
    def test_token_is_required(self):
        with self.assertRaises(EventbriteConfigurationError):
            EventbriteClient()

    @override_settings(EVENTBRITE_PRIVATE_TOKEN="test-token", EVENTBRITE_ORGANIZATION_ID="123")
    @patch("apps.integrations.eventbrite.EventbriteClient.events")
    def test_sync_creates_published_event(self, events):
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
        }])
        result = sync_eventbrite_events()
        event = Event.objects.get(legacy_source_id="eventbrite:456")
        self.assertEqual(result.created, 1)
        self.assertEqual(event.status, "published")
        self.assertTrue(event.is_online)
        self.assertEqual(event.booking_url, "https://www.eventbrite.co.uk/e/example-tickets-456")
