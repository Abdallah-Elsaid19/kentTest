from io import BytesIO
from tempfile import TemporaryDirectory

from PIL import Image
from django.contrib.auth import get_user_model
from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import TestCase, override_settings
from rest_framework.test import APIClient

from apps.audit.models import AuditLog

from .models import MediaAsset


class MediaUploadTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.admin = get_user_model().objects.create_user(
            username="media-test-admin",
            password="test-pass-482!",
            role="admin",
            is_staff=True,
        )
        cls.editor = get_user_model().objects.create_user(
            username="media-test-editor",
            password="test-pass-482!",
            role="editor",
            is_staff=True,
        )

    def setUp(self):
        self.media_directory = TemporaryDirectory()
        self.settings_override = override_settings(MEDIA_ROOT=self.media_directory.name)
        self.settings_override.enable()
        self.addCleanup(self.settings_override.disable)
        self.addCleanup(self.media_directory.cleanup)
        self.client = APIClient(enforce_csrf_checks=True)

    def login(self):
        token = self.client.get("/api/v1/cms/session/").json()["csrfToken"]
        response = self.client.post(
            "/api/v1/cms/login/",
            {"username": self.admin.username, "password": "test-pass-482!"},
            format="json",
            HTTP_X_CSRFTOKEN=token,
        )
        self.assertEqual(response.status_code, 200, response.content)
        self.client.credentials(HTTP_X_CSRFTOKEN=response.json()["csrfToken"])

    @staticmethod
    def image_file(name="poster.png"):
        content = BytesIO()
        Image.new("RGB", (8, 6), "purple").save(content, format="PNG")
        return SimpleUploadedFile(name, content.getvalue(), content_type="image/png")

    def test_admin_can_upload_validated_image(self):
        self.login()
        response = self.client.post(
            "/api/v1/cms/media/upload/",
            {"file": self.image_file(), "kind": "image", "title": "Hero poster", "alt_text": "Learners at KBC"},
            format="multipart",
        )
        self.assertEqual(response.status_code, 201, response.content)
        self.assertTrue(response.json()["url"].startswith("/media/media/"))
        self.assertEqual(response.json()["mimeType"], "image/png")
        self.assertEqual((response.json()["width"], response.json()["height"]), (8, 6))
        asset = MediaAsset.objects.get()
        self.assertEqual(asset.alt_text, "Learners at KBC")
        self.assertEqual(len(asset.checksum), 64)
        self.assertTrue(AuditLog.objects.filter(action="upload", object_id=str(asset.pk)).exists())

    def test_upload_requires_admin_session_and_csrf(self):
        payload = {"file": self.image_file(), "kind": "image"}
        self.assertEqual(self.client.post("/api/v1/cms/media/upload/", payload, format="multipart").status_code, 403)
        self.client.force_authenticate(self.editor)
        self.assertEqual(self.client.post("/api/v1/cms/media/upload/", {"file": self.image_file(), "kind": "image"}, format="multipart").status_code, 403)
        self.client.force_authenticate(user=None)
        self.login()
        self.client.credentials()
        self.assertEqual(self.client.post("/api/v1/cms/media/upload/", {"file": self.image_file(), "kind": "image"}, format="multipart").status_code, 403)

    def test_upload_rejects_content_that_does_not_match_media_kind(self):
        self.login()
        fake_image = SimpleUploadedFile("unsafe.png", b"not an image", content_type="image/png")
        response = self.client.post("/api/v1/cms/media/upload/", {"file": fake_image, "kind": "image"}, format="multipart")
        self.assertEqual(response.status_code, 422, response.content)
        self.assertEqual(MediaAsset.objects.count(), 0)

        fake_video = SimpleUploadedFile("unsafe.mp4", b"not a video", content_type="video/mp4")
        response = self.client.post("/api/v1/cms/media/upload/", {"file": fake_video, "kind": "video"}, format="multipart")
        self.assertEqual(response.status_code, 422, response.content)
        self.assertEqual(MediaAsset.objects.count(), 0)
