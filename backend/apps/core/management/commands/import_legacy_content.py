"""One-time importer for approved legacy WordPress exports.

This command is deliberately isolated from the production request path. It reads
local JSON and local media files only; it never calls a WordPress API.
"""

from __future__ import annotations

import hashlib
import json
import mimetypes
import re
from pathlib import Path

from django.core.files import File
from django.core.management.base import BaseCommand, CommandError
from django.db import transaction
from django.utils.dateparse import parse_datetime

from apps.articles.models import Article
from apps.colleges.models import College
from apps.core.sanitization import sanitize_html
from apps.events.models import Event
from apps.integrations.models import MigrationLog
from apps.media_library.models import MediaAsset
from apps.pages.models import Page, PageSection
from apps.people.models import Person, PersonRole
from apps.programmes.models import Programme
from apps.stories.models import Story


SHORTCODE_RE = re.compile(r"\[[^\]]+\]")


def checksum(record: dict) -> str:
    return hashlib.sha256(json.dumps(record, sort_keys=True, ensure_ascii=False).encode("utf-8")).hexdigest()


def clean_legacy_html(value: str) -> str:
    return sanitize_html(SHORTCODE_RE.sub("", value or ""))


class Command(BaseCommand):
    help = "Import an approved local legacy JSON export. Defaults to dry-run."

    def add_arguments(self, parser):
        parser.add_argument("source", type=Path)
        parser.add_argument("--commit", action="store_true", help="Persist changes. Without this flag the transaction is rolled back.")
        parser.add_argument("--report", type=Path, help="Write a JSON import report.")

    def handle(self, *args, **options):
        source = options["source"].resolve()
        if not source.is_file() or source.suffix.lower() != ".json":
            raise CommandError("Source must be an existing JSON file.")
        try:
            payload = json.loads(source.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError) as exc:
            raise CommandError(f"Could not read JSON export: {exc}") from exc
        if not isinstance(payload, dict):
            raise CommandError("The export root must be an object.")

        report = {"dryRun": not options["commit"], "source": str(source), "imported": {}, "skipped": [], "warnings": [], "errors": []}
        handlers = {
            "media": self.import_media,
            "colleges": self.import_college,
            "programmes": self.import_programme,
            "people": self.import_person,
            "events": self.import_event,
            "stories": self.import_story,
            "articles": self.import_article,
            "pages": self.import_page,
        }

        with transaction.atomic():
            for source_type, handler in handlers.items():
                records = payload.get(source_type, [])
                if not isinstance(records, list):
                    report["errors"].append({"type": source_type, "message": "Expected a list."})
                    continue
                count = 0
                for record in records:
                    if not isinstance(record, dict):
                        report["warnings"].append({"type": source_type, "message": "Skipped non-object record."})
                        continue
                    try:
                        target = self.import_record(source_type, record, handler, source.parent, not options["commit"], report)
                        if target:
                            count += 1
                    except Exception as exc:
                        report["errors"].append({"type": source_type, "sourceId": str(record.get("id", "")), "message": str(exc)})
                report["imported"][source_type] = count
            if not options["commit"]:
                transaction.set_rollback(True)

        if options["report"]:
            destination = options["report"].resolve()
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8")
        self.stdout.write(json.dumps(report, indent=2, ensure_ascii=False))
        if report["errors"]:
            raise CommandError("Import completed with errors; review the report.")

    def import_record(self, source_type, record, handler, base_dir, dry_run, report):
        source_id = str(record.get("id", "")).strip()
        if not source_id:
            raise ValueError("Missing source id.")
        digest = checksum(record)
        if MigrationLog.objects.filter(source_type=source_type, source_id=source_id, checksum=digest, dry_run=False, status="imported").exists():
            report["skipped"].append({"type": source_type, "sourceId": source_id, "reason": "already imported"})
            return None
        target = handler(record, base_dir, report)
        target.full_clean()
        target.save()
        MigrationLog.objects.create(
            source_type=source_type,
            source_id=source_id,
            target_model=target._meta.label,
            target_id=str(target.pk),
            checksum=digest,
            status="imported",
            dry_run=dry_run,
        )
        return target

    def import_media(self, record, base_dir, report):
        path_value = str(record.get("filePath", ""))
        media_path = (base_dir / path_value).resolve()
        if not path_value or base_dir not in media_path.parents or not media_path.is_file():
            raise ValueError("Media file is missing or outside the export directory.")
        mime_type = record.get("mimeType") or mimetypes.guess_type(media_path.name)[0] or "application/octet-stream"
        kind = "image" if mime_type.startswith("image/") else "video" if mime_type.startswith("video/") else "document"
        alt_text = str(record.get("altText", "")).strip()
        if kind == "image" and not alt_text:
            report["warnings"].append({"type": "media", "sourceId": str(record.get("id")), "message": "Missing alt text; record requires manual remediation."})
            alt_text = str(record.get("title") or media_path.stem)
        asset, _ = MediaAsset.objects.get_or_create(legacy_source_id=str(record["id"]), defaults={"title": record.get("title") or media_path.stem, "kind": kind, "alt_text": alt_text, "caption": record.get("caption", ""), "mime_type": mime_type, "file_size": media_path.stat().st_size})
        if not asset.file:
            with media_path.open("rb") as stream:
                asset.file.save(media_path.name, File(stream), save=False)
        return asset

    def import_college(self, record, base_dir, report):
        obj, _ = College.objects.get_or_create(legacy_source_id=str(record["id"]), defaults={"slug": record["slug"], "title": record["title"]})
        self.guard_manual_changes(obj)
        obj.slug, obj.title = record["slug"], record["title"]
        obj.summary, obj.description = record.get("summary", ""), clean_legacy_html(record.get("description", ""))
        obj.status, obj.published_at = record.get("status", "draft"), parse_datetime(record.get("publishedAt", ""))
        return obj

    def import_programme(self, record, base_dir, report):
        college = College.objects.get(slug=record["collegeSlug"])
        obj, _ = Programme.objects.get_or_create(legacy_source_id=str(record["id"]), defaults={"slug": record["slug"], "title": record["title"], "college": college, "level": record["level"], "funding_type": record["fundingType"], "funding_label": record["fundingLabel"], "summary": record.get("summary", ""), "delivery_mode": record.get("deliveryMode", "online")})
        self.guard_manual_changes(obj)
        for field, value in {"slug": record["slug"], "title": record["title"], "college": college, "level": record["level"], "funding_type": record["fundingType"], "funding_label": record["fundingLabel"], "duration_months": record.get("durationMonths"), "duration_label": record.get("durationLabel", ""), "summary": record.get("summary", ""), "description": clean_legacy_html(record.get("description", "")), "delivery_mode": record.get("deliveryMode", "online"), "delivery_schedule": record.get("deliverySchedule", ""), "status": record.get("status", "draft"), "published_at": parse_datetime(record.get("publishedAt", ""))}.items():
            setattr(obj, field, value)
        return obj

    def import_person(self, record, base_dir, report):
        obj, _ = Person.objects.get_or_create(legacy_source_id=str(record["id"]), defaults={"slug": record["slug"], "name": record["name"]})
        self.guard_manual_changes(obj)
        obj.slug, obj.name, obj.job_title, obj.bio = record["slug"], record["name"], record.get("jobTitle", ""), record.get("bio", "")
        obj.status, obj.published_at = record.get("status", "draft"), parse_datetime(record.get("publishedAt", ""))
        obj.save()
        for role in record.get("roles", []):
            PersonRole.objects.get_or_create(person=obj, role=role)
        return obj

    def import_event(self, record, base_dir, report):
        start_at, end_at = parse_datetime(record.get("startAt", "")), parse_datetime(record.get("endAt", ""))
        if not start_at or not end_at:
            raise ValueError("Malformed event date; ISO 8601 startAt and endAt are required.")
        obj, _ = Event.objects.get_or_create(slug=record["slug"], defaults={"title": record["title"], "starts_at": start_at, "ends_at": end_at})
        self.guard_manual_changes(obj)
        legacy_status = record.get("status", "draft")
        event_status = "canceled" if record.get("isCancelled") else ("live" if legacy_status == "published" else legacy_status)
        for field, value in {"slug": record["slug"], "title": record["title"], "starts_at": start_at, "ends_at": end_at, "venue_name": record.get("location", ""), "location": record.get("address", ""), "is_online_event": bool(record.get("isOnline")), "eventbrite_url": record.get("bookingUrl", ""), "details_content": {"summary": record.get("summary", ""), "source": "legacy"}, "description": clean_legacy_html(record.get("description", "")), "status": event_status, "is_published": legacy_status == "published"}.items():
            setattr(obj, field, value)
        return obj

    def import_story(self, record, base_dir, report):
        obj, _ = Story.objects.get_or_create(legacy_source_id=str(record["id"]), defaults={"slug": record["slug"], "title": record["title"], "story_type": record.get("storyType", "learner-story")})
        self.guard_manual_changes(obj)
        for field in ("slug", "title", "summary", "employer", "role", "quote"):
            setattr(obj, field, record.get(field, ""))
        obj.body = clean_legacy_html(record.get("body", ""))
        obj.story_type, obj.privacy_approved, obj.status = record.get("storyType", "learner-story"), bool(record.get("privacyApproved")), record.get("status", "draft")
        obj.published_at = parse_datetime(record.get("publishedAt", ""))
        return obj

    def import_article(self, record, base_dir, report):
        obj, _ = Article.objects.get_or_create(legacy_source_id=str(record["id"]), defaults={"slug": record["slug"], "title": record["title"]})
        self.guard_manual_changes(obj)
        obj.slug, obj.title, obj.summary, obj.body = record["slug"], record["title"], record.get("summary", ""), clean_legacy_html(record.get("body", ""))
        obj.status, obj.published_at = record.get("status", "draft"), parse_datetime(record.get("publishedAt", ""))
        return obj

    def import_page(self, record, base_dir, report):
        obj, _ = Page.objects.get_or_create(legacy_source_id=str(record["id"]), defaults={"slug": record["slug"], "title": record["title"]})
        self.guard_manual_changes(obj)
        obj.slug, obj.title, obj.summary = record["slug"], record["title"], record.get("summary", "")
        obj.status, obj.published_at = record.get("status", "draft"), parse_datetime(record.get("publishedAt", ""))
        obj.save()
        sections = record.get("sections")
        if not sections and record.get("elementorHtml"):
            sections = [{"type": "richText", "data": {"html": clean_legacy_html(record["elementorHtml"])} }]
            report["warnings"].append({"type": "pages", "sourceId": str(record["id"]), "message": "Elementor HTML converted to transitional richText; manual restructuring required."})
        for index, section in enumerate(sections or []):
            PageSection.objects.update_or_create(page=obj, sort_order=index, defaults={"section_type": section["type"], "data": section.get("data", {}), "is_enabled": True, "status": obj.status, "published_at": obj.published_at})
        return obj

    def guard_manual_changes(self, obj):
        log = MigrationLog.objects.filter(target_model=obj._meta.label, target_id=str(obj.pk), dry_run=False, status="imported").order_by("-created_at").first()
        if log and obj.updated_at > log.created_at:
            raise ValueError("Target was updated after its last import; refusing to overwrite manual changes.")
