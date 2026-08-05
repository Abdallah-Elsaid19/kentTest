from datetime import timedelta

from django.test import TestCase, override_settings
from django.utils import timezone
from rest_framework.test import APIClient

from apps.colleges.models import College
from apps.events.models import Event
from apps.pages.models import Page, PageSection
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

    def test_event_status_is_derived_from_dates(self):
        event = Event.objects.create(
            slug="past-event",
            title="Past Event",
            start_at=timezone.now() - timedelta(days=2),
            end_at=timezone.now() - timedelta(days=1),
            status="published",
            published_at=timezone.now(),
        )
        response = self.client.get(f"/api/v1/events/{event.slug}/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["status"], "ended")

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
