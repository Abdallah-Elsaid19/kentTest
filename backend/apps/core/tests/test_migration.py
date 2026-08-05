import json
from pathlib import Path
from tempfile import TemporaryDirectory

from django.core.management import call_command
from django.test import TestCase

from apps.integrations.models import MigrationLog
from apps.pages.models import Page


class LegacyImportCommandTests(TestCase):
    def test_dry_run_validates_and_rolls_back(self):
        payload = {
            "pages": [{
                "id": "fixture-page-1",
                "slug": "migration-fixture",
                "title": "Migration Fixture",
                "status": "draft",
                "elementorHtml": "<p>Approved fixture body</p><script>alert(1)</script>",
            }]
        }
        with TemporaryDirectory() as temp_directory:
            source = Path(temp_directory) / "export.json"
            report = Path(temp_directory) / "report.json"
            source.write_text(json.dumps(payload), encoding="utf-8")
            call_command("import_legacy_content", source, report=report)
            result = json.loads(report.read_text(encoding="utf-8"))

        self.assertTrue(result["dryRun"])
        self.assertEqual(result["imported"]["pages"], 1)
        self.assertFalse(result["errors"])
        self.assertFalse(Page.objects.filter(slug="migration-fixture").exists())
        self.assertFalse(MigrationLog.objects.filter(source_id="fixture-page-1").exists())
