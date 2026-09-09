from copy import deepcopy
from importlib import import_module
from types import SimpleNamespace

from django.contrib.auth import get_user_model
from django.core.cache import cache
from django.test import TestCase
from rest_framework.test import APIClient

from apps.audit.models import AuditLog
from .models import ContentEntry
from .schemas import validate_content


class CMSTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.admin = get_user_model().objects.create_user(username="cms-test-admin", password="test-pass-482!", role="admin", is_staff=True)
        cls.editor = get_user_model().objects.create_user(username="cms-test-editor", password="test-pass-482!", role="editor", is_staff=True)

    def setUp(self):
        cache.clear()
        self.client = APIClient(enforce_csrf_checks=True)
        self.entry = ContentEntry.objects.get(key="home.hero")

    def login(self):
        token = self.client.get("/api/v1/cms/session/").json()["csrfToken"]
        response = self.client.post("/api/v1/cms/login/", {"username": self.admin.username, "password": "test-pass-482!"}, format="json", HTTP_X_CSRFTOKEN=token)
        self.assertEqual(response.status_code, 200, response.content)
        self.client.credentials(HTTP_X_CSRFTOKEN=response.json()["csrfToken"])

    def mutate(self, action, content=None, version=None):
        self.entry.refresh_from_db()
        return self.client.patch(f"/api/v1/cms/entries/{self.entry.key}/", {"version": version or self.entry.version, "action": action, **({"content": content} if content is not None else {})}, format="json")

    def public_hero(self):
        response = APIClient().get("/api/v1/content/home/")
        self.assertEqual(response.status_code, 200)
        self.assertIn("no-store", response["Cache-Control"])
        for item in response.json()["sections"]:
            self.assertNotIn("publishedContent", item)
            if item["section"] == "hero":
                return item["content"]

    def test_migration_imports_all_sections_and_is_idempotent(self):
        self.assertEqual(ContentEntry.objects.filter(page="home").count(), 15)
        for entry in ContentEntry.objects.all():
            validate_content(entry.page, entry.section, entry.content)
        self.login()
        changed = deepcopy(self.entry.content)
        changed["copy"]["heading"] = "An editorial update"
        self.assertEqual(self.mutate("draft", changed).status_code, 200)
        from django.apps import apps
        from django.db import connection
        import_module("apps.cms.migrations.0002_import_home").seed_home(apps, SimpleNamespace(connection=connection))
        self.entry.refresh_from_db()
        self.assertEqual(self.entry.content, changed)
        self.assertEqual(ContentEntry.objects.filter(page="home").count(), 15)

    def test_filtered_public_content_only_returns_requested_published_section(self):
        entry = ContentEntry.objects.get(key="home.recognition")
        published = deepcopy(entry.published_content)
        entry.content = {"draft": "This must not be exposed"}
        entry.save(update_fields=["content"])
        response = APIClient().get("/api/v1/content/home/?section=recognition")
        self.assertEqual(response.status_code, 200)
        self.assertIn("no-store", response["Cache-Control"])
        self.assertEqual(response.json()["sections"], [{"key": entry.key, "section": "recognition", "content": published}])
        entry.is_active = False
        entry.save(update_fields=["is_active"])
        self.assertEqual(APIClient().get("/api/v1/content/home/?section=recognition").json()["sections"], [])
        entry.is_active = True
        entry.published_content = None
        entry.save(update_fields=["is_active", "published_content"])
        self.assertEqual(APIClient().get("/api/v1/content/home/?section=recognition").json()["sections"], [])

    def test_filtered_public_content_rejects_unknown_section(self):
        for section in ["unknown", "", "recognition,hero"]:
            with self.subTest(section=section):
                self.assertEqual(APIClient().get("/api/v1/content/home/", {"section": section}).status_code, 422)

    def test_draft_publish_persistence_preview_visibility_and_audit(self):
        self.login()
        original = self.public_hero()
        changed = deepcopy(original)
        changed["copy"]["heading"] = "Saved in the database"
        response = self.mutate("draft", changed)
        self.assertEqual(response.status_code, 200, response.content)
        self.assertTrue(response.json()["hasDraft"])
        self.assertEqual(ContentEntry.objects.get(pk=self.entry.pk).content, changed)
        self.assertEqual(self.public_hero(), original)
        preview = self.client.get("/api/v1/cms/entries/home.hero/preview/")
        self.assertIn("Saved in the database", preview.content.decode())
        self.assertEqual(APIClient().get("/api/v1/cms/entries/home.hero/preview/").status_code, 403)
        response = self.mutate("publish", changed)
        self.assertEqual(response.status_code, 200, response.content)
        self.assertEqual(self.public_hero(), changed)
        self.assertEqual(ContentEntry.objects.get(pk=self.entry.pk).updated_by, self.admin)
        self.assertEqual(self.entry.revisions.filter(action="publish").count(), 1)
        self.assertTrue(AuditLog.objects.filter(model_label="cms.ContentEntry", action="publish", actor=self.admin).exists())
        self.assertEqual(self.mutate("deactivate").status_code, 200)
        self.assertIsNone(self.public_hero())
        self.assertEqual(self.mutate("activate").status_code, 200)
        self.assertEqual(self.public_hero(), changed)

    def test_permissions_for_anonymous_editor_and_inactive_admin(self):
        for url in ["/api/v1/cms/collections/", "/api/v1/cms/entries/", "/api/v1/cms/entries/home.hero/", "/api/v1/cms/entries/home.hero/revisions/"]:
            self.assertEqual(self.client.get(url).status_code, 403)
        self.assertEqual(self.mutate("deactivate").status_code, 403)
        self.client.force_authenticate(self.editor)
        self.assertEqual(self.client.get("/api/v1/cms/entries/").status_code, 403)
        self.assertEqual(self.mutate("deactivate").status_code, 403)
        self.admin.is_active = False
        self.client.force_authenticate(self.admin)
        self.assertEqual(self.client.get("/api/v1/cms/entries/").status_code, 403)
        self.admin.is_active = True

    def test_login_and_mutations_require_csrf_and_logout_revokes_session(self):
        response = self.client.post("/api/v1/cms/login/", {"username": self.admin.username, "password": "test-pass-482!"}, format="json")
        self.assertEqual(response.status_code, 403)
        self.login()
        token = self.client._credentials["HTTP_X_CSRFTOKEN"]
        self.client.credentials()
        self.assertEqual(self.mutate("deactivate").status_code, 403)
        self.client.credentials(HTTP_X_CSRFTOKEN=token)
        self.assertEqual(self.client.post("/api/v1/cms/logout/", {}, format="json").status_code, 200)
        self.assertEqual(self.client.get("/api/v1/cms/entries/").status_code, 403)

    def test_invalid_schema_urls_and_unknown_fields_cannot_be_saved(self):
        self.login()
        for url in ["javascript:alert(1)", "//evil.example", "/\\evil.example", "https://user:pass@example.com", " https://example.com", "data:text/html,unsafe"]:
            changed = deepcopy(self.entry.content)
            changed["copy"]["to"] = url
            self.assertEqual(self.mutate("publish", changed).status_code, 422)
        for value in [[], None, {"copy": []}, {"unexpected": "field"}]:
            response = self.client.patch("/api/v1/cms/entries/home.hero/", {"version": 1, "action": "draft", "content": value}, format="json")
            self.assertEqual(response.status_code, 422, response.content)
        self.assertEqual(self.entry.revisions.count(), 1)
        self.assertEqual(self.client.patch("/api/v1/cms/entries/home.hero/", {"version": 1, "action": "deactivate", "isStaff": True}, format="json").status_code, 422)

    def test_conflicting_version_is_rejected_without_losing_saved_draft(self):
        self.login()
        first = deepcopy(self.entry.content)
        first["copy"]["heading"] = "First editor"
        self.assertEqual(self.mutate("draft", first, version=1).status_code, 200)
        second = deepcopy(first)
        second["copy"]["heading"] = "Stale editor"
        self.assertEqual(self.mutate("publish", second, version=1).status_code, 409)
        self.entry.refresh_from_db()
        self.assertEqual(self.entry.content, first)
        self.assertNotEqual(self.public_hero(), second)

    def test_pagination_filters_and_collections_are_database_backed(self):
        self.login()
        data = self.client.get("/api/v1/cms/entries/?collection=home&perPage=3&page=2").json()
        self.assertEqual(len(data["items"]), 3)
        self.assertEqual(data["pagination"]["totalItems"], 15)
        self.assertEqual(self.mutate("deactivate").status_code, 200)
        data = self.client.get("/api/v1/cms/entries/?status=inactive&search=hero").json()
        self.assertEqual([item["key"] for item in data["items"]], ["home.hero"])
        collection = next(item for item in self.client.get("/api/v1/cms/collections/").json()["items"] if item["key"] == "home")
        self.assertEqual(collection["live"], 14)
        self.assertEqual(collection["inactive"], 1)

    def test_activation_does_not_publish_a_new_draft(self):
        self.login()
        original = self.public_hero()
        self.mutate("deactivate")
        changed = deepcopy(original)
        changed["copy"]["heading"] = "Still private"
        self.mutate("draft", changed)
        self.mutate("activate")
        self.assertEqual(self.public_hero(), original)

    def test_login_attempts_are_throttled(self):
        token = self.client.get("/api/v1/cms/session/").json()["csrfToken"]
        for _ in range(10):
            self.client.post("/api/v1/cms/login/", {"username": "unknown", "password": "invalid"}, format="json", HTTP_X_CSRFTOKEN=token)
        self.assertEqual(self.client.post("/api/v1/cms/login/", {"username": "unknown", "password": "invalid"}, format="json", HTTP_X_CSRFTOKEN=token).status_code, 429)

class DropdownCMSTests(CMSTests):
    """Exercise the same authorization/publication contract for every registered page."""
    def test_complete_inventory_and_no_excluded_editors(self):
        from .models import ContentPage
        from .schemas import COLLECTIONS, PAGE_CONTRACT
        self.assertEqual(set(ContentPage.objects.values_list("key", flat=True)), set(COLLECTIONS))
        self.assertEqual(len(PAGE_CONTRACT["pages"]), 23)
        excluded = ["/employer-agreement", "/book-session", "/book-consultation", "/careers", "/college-of-leadership", "/explore-jobs", "/login-lms", "/login-aptem"]
        self.assertFalse(ContentPage.objects.filter(route__in=excluded).exists())
        self.assertFalse(ContentEntry.objects.filter(content_page__isnull=True).exists())
        for entry in ContentEntry.objects.select_related("content_page"):
            self.assertEqual(entry.page, entry.content_page.key)
            self.assertLessEqual(len(entry.key), 150)

    def test_every_page_preserves_keys_and_isolates_drafts(self):
        from .schemas import PAGE_CONTRACT
        self.login()
        for page in PAGE_CONTRACT["pages"]:
            with self.subTest(page=page):
                self.entry = ContentEntry.objects.filter(page=page).first()
                original = deepcopy(self.entry.content)
                field = next(iter(original))
                # Use a text field so this checks publication rather than URL validation.
                from .schemas import COLLECTIONS
                field = next((k for k, v in COLLECTIONS[page][self.entry.section]["properties"].items() if not v.get("format")), None)
                if field is None:
                    continue
                changed = {**original, field: "Private page draft"}
                version = self.entry.version
                self.assertEqual(self.mutate("draft", changed).status_code, 200)
                public = self.client.get(f"/api/v1/content/{page}/").json()
                published = next(e["content"] for e in public["sections"] if e["key"] == self.entry.key)
                self.assertEqual(published, original)
                private = self.client.get(f"/api/v1/cms/pages/{page}/preview/").json()
                self.assertEqual(next(e["content"] for e in private["sections"] if e["key"] == self.entry.key), changed)
                self.assertEqual(self.mutate("publish", changed, version=version).status_code, 409)
                self.assertEqual(self.mutate("publish", changed).status_code, 200)
                public = self.client.get(f"/api/v1/content/{page}/").json()
                self.assertEqual(next(e["content"] for e in public["sections"] if e["key"] == self.entry.key), changed)
                self.assertEqual(self.entry.revisions.count(), 3)

    def test_page_preview_and_section_schema_require_admin(self):
        page = "faq"
        self.entry = ContentEntry.objects.filter(page=page).first()
        for client in [APIClient()]:
            self.assertEqual(client.get(f"/api/v1/cms/pages/{page}/preview/").status_code, 403)
            self.assertEqual(client.get(f"/api/v1/cms/entries/{self.entry.key}/").status_code, 403)
        self.login()
        response = self.client.get(f"/api/v1/cms/entries/{self.entry.key}/").json()
        self.assertEqual(set(response["schema"]["properties"]), set(response["content"]))
        self.assertEqual(self.client.get("/api/v1/content/employer_agreement/").status_code, 404)

    def test_page_search_filters_and_last_editor(self):
        self.login()
        self.entry = ContentEntry.objects.filter(page="faq").first()
        self.assertEqual(self.mutate("draft", self.entry.content).status_code, 200)
        items = self.client.get("/api/v1/cms/collections/?group=Information&search=/faq").json()["items"]
        self.assertEqual([item["key"] for item in items], ["faq"])
        self.assertEqual(items[0]["updatedByName"], self.admin.username)
        self.assertEqual(items[0]["route"], "/faq")
        self.assertTrue(items[0]["sectionNames"])

    def test_dropdown_import_never_overwrites_editorial_content(self):
        from django.apps import apps
        from django.db import connection
        from .models import ContentPage, ContentRevision
        self.login()
        self.entry = ContentEntry.objects.filter(page="faq").first()
        content = {k: "Preserved editorial text" for k in self.entry.content}
        self.assertEqual(self.mutate("draft", content).status_code, 200)
        counts = (ContentPage.objects.count(), ContentEntry.objects.count(), ContentRevision.objects.count())
        import_module("apps.cms.migrations.0004_import_dropdown_pages").import_pages(apps, SimpleNamespace(connection=connection))
        self.entry.refresh_from_db()
        self.assertEqual(self.entry.content, content)
        self.assertEqual(counts, (ContentPage.objects.count(), ContentEntry.objects.count(), ContentRevision.objects.count()))
