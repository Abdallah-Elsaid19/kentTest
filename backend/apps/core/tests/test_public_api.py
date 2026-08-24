from datetime import timedelta

from django.core.exceptions import ValidationError
from django.test import TestCase, override_settings
from django.utils import timezone
from rest_framework.test import APIClient

from apps.colleges.models import College
from apps.events.models import Event
from apps.pages.models import Page, PageSection
from apps.people.models import Person
from apps.programmes.models import Programme
from apps.redirects.models import RedirectRule


class PublicApiContractTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.college = College.objects.create(slug="approved-college", title="Approved College", status="published", published_at=timezone.now())
        College.objects.create(slug="draft-college", title="Draft College", status="draft")
        self.programme = Programme.objects.create(
            slug="approved-programme",
            title="Approved Programme",
            college=self.college,
            level=6,
            funding_type="fully-funded",
            funding_label="Fully funded",
            summary="Approved summary",
            delivery_mode="online",
            status="published",
            published_at=timezone.now(),
        )

    def test_collection_contract_is_camel_case_and_published_only(self):
        response = self.client.get("/api/v1/colleges/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()["items"]), 1)
        self.assertEqual(response.json()["pagination"]["totalItems"], 1)
        self.assertIn("X-Request-ID", response.headers)

    def test_programme_filters_and_detail_contract(self):
        response = self.client.get("/api/v1/programmes/?college=approved-college&level=6&funding=fully-funded")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["items"][0]["slug"], "approved-programme")
        detail = self.client.get("/api/v1/programmes/approved-programme/")
        self.assertEqual(detail.status_code, 200)
        self.assertEqual(detail.json()["funding"]["type"], "fully-funded")

    def test_page_returns_only_published_enabled_sections(self):
        page = Page.objects.create(slug="about", title="About", status="published", published_at=timezone.now())
        PageSection.objects.create(page=page, section_type="hero", sort_order=0, data={"heading": "About"}, status="published", published_at=timezone.now())
        PageSection.objects.create(page=page, section_type="CTA", sort_order=1, data={"heading": "Hidden"}, status="draft")
        response = self.client.get("/api/v1/pages/about/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()["sections"]), 1)
        self.assertEqual(response.json()["sections"][0]["type"], "hero")

    def test_seeded_about_page_exposes_structured_published_content(self):
        response = self.client.get("/api/v1/pages/who-we-are/")
        self.assertEqual(response.status_code, 200)
        payload = response.json()
        self.assertEqual(payload["slug"], "who-we-are")
        self.assertGreaterEqual(len(payload["sections"]), 14)
        self.assertEqual(payload["sections"][0]["type"], "aboutHero")
        self.assertEqual(payload["sections"][0]["data"]["primaryCta"]["href"], "/colleges")
        self.assertEqual(payload["sections"][0]["data"]["highlight"], "workplace capability.")
        domains = next(section for section in payload["sections"] if section["type"] == "aboutDomains")
        self.assertEqual(domains["data"]["items"][0]["id"], "project-management")
        partners = next(section for section in payload["sections"] if section["type"] == "aboutPartners")
        self.assertEqual([item["name"] for item in partners["data"]["items"]], ["Watts", "VIRTUS", "Shell", "Wincanton", "BMT", "Mercedes-Benz", "University of Hull", "Indeed Flex"])
        self.assertEqual(payload["seo"]["robots"], "index,follow")

    def test_seeded_about_sections_pass_editor_validation(self):
        page = Page.objects.get(slug="who-we-are")
        for section in page.sections.all():
            section.full_clean()

    def test_pdf_approved_expert_copy_is_published(self):
        expert = Person.published.get(slug="ray-mead")
        self.assertEqual(expert.name, "Dr. Ray Maed")
        self.assertIn("sustainable change", expert.bio)

    def test_about_section_schema_rejects_incomplete_editor_data(self):
        section = PageSection(
            page=Page.objects.get(slug="who-we-are"), section_type="aboutHero", sort_order=999,
            data={"heading": "Incomplete"}, status="draft",
        )
        with self.assertRaises(ValidationError) as raised:
            section.full_clean()
        self.assertIn("data", raised.exception.message_dict)

    def test_about_section_schema_rejects_unsafe_cta_targets(self):
        section = PageSection(
            page=Page.objects.get(slug="who-we-are"), section_type="aboutHero", sort_order=999,
            data={
                "eyebrow": "Who we are", "heading": "Heading", "highlight": "Highlight", "body": "Body",
                "image": {"src": "/safe-image.webp", "alt": "Useful description"},
                "glance": [{"id": "provider", "label": "Provider", "value": "UKPRN 10093689"}],
                "stats": [{"id": "learners", "value": "500+", "label": "Students enrolled"}],
                "primaryCta": {"label": "Unsafe", "href": "javascript:alert(1)"},
                "secondaryCta": {"label": "Safe", "href": "/programmes"},
            }, status="draft",
        )
        with self.assertRaises(ValidationError):
            section.full_clean()

    def test_public_page_endpoint_does_not_allow_content_mutation(self):
        response = self.client.post("/api/v1/pages/who-we-are/", {"title": "Changed"}, format="json")
        self.assertEqual(response.status_code, 405)

    def test_event_status_is_derived_from_dates(self):
        event = Event.objects.create(
            slug="past-event",
            title="Past Event",
            starts_at=timezone.now() - timedelta(days=2),
            ends_at=timezone.now() - timedelta(days=1),
            status="completed",
            is_published=True,
            event_type="Workshop",
            eventbrite_url="https://www.eventbrite.co.uk/e/past-event-123",
            image_url="https://img.evbuc.com/past-event.jpg",
            venue_name="Kent Business College",
            location="Maidstone, Kent",
            details_content={"summary": "A completed Eventbrite workshop."},
        )
        response = self.client.get(f"/api/v1/events/{event.slug}/")
        self.assertEqual(response.status_code, 200)
        payload = response.json()
        self.assertEqual(payload["status"], "ended")
        self.assertEqual(payload["bookingUrl"], "https://www.eventbrite.co.uk/e/past-event-123")
        self.assertEqual(payload["categories"], [{"slug": "workshop", "name": "Workshop"}])
        self.assertEqual(payload["image"]["url"], "https://img.evbuc.com/past-event.jpg")
        self.assertEqual(payload["summary"], "A completed Eventbrite workshop.")

    def test_event_list_uses_thumbnail_and_detail_uses_original_image(self):
        event = Event.objects.create(
            slug="event-with-image-renditions",
            title="Event with image renditions",
            starts_at=timezone.now() + timedelta(days=2),
            ends_at=timezone.now() + timedelta(days=2, hours=2),
            status="live",
            is_published=True,
            image_url="https://img.evbuc.com/event-original.jpg",
            image_thumbnail_url="https://img.evbuc.com/event-thumbnail.jpg",
        )

        list_response = self.client.get("/api/v1/events/?status=upcoming")
        detail_response = self.client.get(f"/api/v1/events/{event.slug}/")

        self.assertEqual(list_response.status_code, 200)
        listed_event = next(item for item in list_response.json()["items"] if item["id"] == event.pk)
        self.assertEqual(listed_event["image"]["url"], "https://img.evbuc.com/event-thumbnail.jpg")
        self.assertEqual(listed_event["imageFeaturedUrl"], "https://img.evbuc.com/event-original.jpg")
        self.assertEqual(detail_response.status_code, 200)
        self.assertEqual(detail_response.json()["image"]["url"], "https://img.evbuc.com/event-original.jpg")

    def test_missing_resource_uses_error_contract(self):
        response = self.client.get("/api/v1/programmes/not-found/")
        self.assertEqual(response.status_code, 404)
        self.assertEqual(response.json()["error"]["code"], "not_found")
        self.assertTrue(response.json()["requestId"].startswith("req_"))

    def test_legacy_redirect_preserves_query_string(self):
        RedirectRule.objects.create(source_path="/old-programme", target_path="/programmes/approved-programme", status_code=301)
        response = self.client.get("/old-programme?campaign=legacy")
        self.assertEqual(response.status_code, 301)
        self.assertEqual(response.headers["Location"], "/programmes/approved-programme?campaign=legacy")


@override_settings(DEBUG=True, TURNSTILE_SECRET_KEY="")
class FormApiTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.payload = {
            "name": "Jane Smith",
            "email": "jane@example.com",
            "message": "Please contact me about the published programme.",
            "consent": True,
            "sourcePage": "/contact",
            "captchaToken": "development-token",
        }

    def test_contact_submission_is_stored_and_returns_reference(self):
        response = self.client.post("/api/v1/forms/contact/", self.payload, format="json")
        self.assertEqual(response.status_code, 201)
        self.assertTrue(response.json()["submissionId"].startswith("sub_"))

    def test_duplicate_submission_is_rejected(self):
        self.client.post("/api/v1/forms/contact/", self.payload, format="json")
        response = self.client.post("/api/v1/forms/contact/", self.payload, format="json")
        self.assertEqual(response.status_code, 409)
        self.assertEqual(response.json()["error"]["code"], "duplicate_submission")

    def test_consent_is_required(self):
        payload = {**self.payload, "email": "other@example.com", "consent": False}
        response = self.client.post("/api/v1/forms/contact/", payload, format="json")
        self.assertEqual(response.status_code, 422)
        self.assertIn("consent", response.json()["error"]["details"])

    def test_invalid_email_returns_field_level_validation_error(self):
        payload = {**self.payload, "email": "not-an-email"}
        response = self.client.post("/api/v1/forms/contact/", payload, format="json")
        self.assertEqual(response.status_code, 422)
        self.assertIn("email", response.json()["error"]["details"])
