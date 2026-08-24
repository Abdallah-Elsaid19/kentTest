from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from html import unescape
from pathlib import Path
import re
from typing import Any, Iterator
from urllib.parse import urlparse

import requests
from django.conf import settings
from django.core.files.base import ContentFile
from django.db import transaction
from django.utils import timezone
from django.utils.dateparse import parse_datetime
from django.utils.text import slugify

from apps.core.sanitization import sanitize_html
from apps.events.models import Event
from apps.integrations.models import IntegrationLog
from apps.media_library.models import ALLOWED_MIME_TYPES, MediaAsset


EVENTBRITE_API_ROOT = "https://www.eventbriteapi.com/v3"
EVENTBRITE_IMAGE_HOST_SUFFIXES = ("evbuc.com", "eventbrite.com", "eventbrite.co.uk")
MAX_EVENT_IMAGE_BYTES = 10 * 1024 * 1024
IMAGE_EXTENSIONS = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "image/gif": ".gif",
}


class EventbriteConfigurationError(RuntimeError):
    pass


class EventbriteAPIError(RuntimeError):
    pass


@dataclass(frozen=True)
class SyncResult:
    created: int = 0
    updated: int = 0
    skipped: int = 0


@dataclass(frozen=True)
class EventbriteImage:
    content: bytes
    mime_type: str


def _is_approved_eventbrite_url(url: str) -> bool:
    parsed = urlparse(url)
    hostname = (parsed.hostname or "").lower()
    return parsed.scheme == "https" and any(
        hostname == suffix or hostname.endswith(f".{suffix}")
        for suffix in EVENTBRITE_IMAGE_HOST_SUFFIXES
    )


class EventbriteImageClient:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/140.0.0.0 Safari/537.36",
            "Accept-Language": "en-GB,en;q=0.9",
        })

    def page_image_url(self, page_url: str) -> str:
        if not _is_approved_eventbrite_url(page_url):
            raise EventbriteAPIError("Eventbrite event has an unapproved public URL.")
        try:
            response = self.session.get(page_url, headers={"Accept": "text/html,application/xhtml+xml"}, timeout=(5, 25))
        except requests.RequestException as exc:
            raise EventbriteAPIError("Eventbrite page could not be reached.") from exc
        if response.status_code >= 400:
            raise EventbriteAPIError(f"Eventbrite page returned HTTP {response.status_code}.")
        patterns = (
            r'<meta[^>]+(?:property|name)=["\u0027]og:image["\u0027][^>]+content=["\u0027]([^"\u0027]+)',
            r'<meta[^>]+content=["\u0027]([^"\u0027]+)["\u0027][^>]+(?:property|name)=["\u0027]og:image["\u0027]',
        )
        match = next((found for pattern in patterns if (found := re.search(pattern, response.text, re.IGNORECASE))), None)
        if not match:
            raise EventbriteAPIError("Eventbrite page has no event image metadata.")
        image_url = unescape(match.group(1)).strip()
        if not _is_approved_eventbrite_url(image_url):
            raise EventbriteAPIError("Eventbrite page returned an unapproved image URL.")
        return image_url

    def download_image(self, url: str) -> EventbriteImage:
        if not _is_approved_eventbrite_url(url):
            raise EventbriteAPIError("Eventbrite returned an unapproved image URL.")
        try:
            response = self.session.get(
                url,
                headers={"Accept": "image/webp,image/png,image/jpeg,image/gif"},
                timeout=(5, 25),
            )
        except requests.RequestException as exc:
            raise EventbriteAPIError("Eventbrite image could not be reached.") from exc
        if response.status_code >= 400:
            raise EventbriteAPIError(f"Eventbrite image returned HTTP {response.status_code}.")
        content = response.content
        if not content or len(content) > MAX_EVENT_IMAGE_BYTES:
            raise EventbriteAPIError("Eventbrite image is empty or exceeds the size limit.")
        mime_type = response.headers.get("Content-Type", "").split(";", 1)[0].strip().lower()
        if mime_type not in ALLOWED_MIME_TYPES or mime_type not in IMAGE_EXTENSIONS:
            raise EventbriteAPIError("Eventbrite returned an unsupported image type.")
        return EventbriteImage(content=content, mime_type=mime_type)


class EventbriteClient:
    def __init__(self, token: str | None = None, organization_id: str | None = None):
        self.token = (token or settings.EVENTBRITE_PRIVATE_TOKEN).strip()
        self.organization_id = (organization_id or settings.EVENTBRITE_ORGANIZATION_ID).strip()
        if not self.token:
            raise EventbriteConfigurationError("EVENTBRITE_PRIVATE_TOKEN is not configured.")
        self.session = requests.Session()
        self.session.headers.update({"Authorization": f"Bearer {self.token}", "Accept": "application/json"})
        self.image_client = EventbriteImageClient()

    def _get(self, path: str, params: dict[str, Any] | None = None) -> dict[str, Any]:
        response = self.session.get(f"{EVENTBRITE_API_ROOT}{path}", params=params, timeout=(5, 25))
        if response.status_code >= 400:
            error_code = "eventbrite_http_error"
            try:
                payload = response.json()
                error_code = str(payload.get("error") or payload.get("error_description") or error_code)
            except ValueError:
                pass
            raise EventbriteAPIError(f"Eventbrite returned HTTP {response.status_code}: {error_code}")
        try:
            return response.json()
        except ValueError as exc:
            raise EventbriteAPIError("Eventbrite returned malformed JSON.") from exc

    def resolve_organization_id(self) -> str:
        if self.organization_id:
            return self.organization_id
        payload = self._get("/users/me/organizations/")
        organisations = payload.get("organizations") or []
        if not organisations:
            raise EventbriteAPIError("The Eventbrite account has no organisations.")
        preferred = next((item for item in organisations if str(item.get("name", "")).lower() == "kent business college"), organisations[0])
        self.organization_id = str(preferred["id"])
        return self.organization_id

    def events(self) -> Iterator[dict[str, Any]]:
        organisation_id = self.resolve_organization_id()
        continuation: str | None = None
        while True:
            params: dict[str, Any] = {"status": "all", "expand": "venue", "page_size": 50}
            if continuation:
                params["continuation"] = continuation
            payload = self._get(f"/organizations/{organisation_id}/events/", params=params)
            yield from payload.get("events") or []
            pagination = payload.get("pagination") or {}
            if not pagination.get("has_more_items"):
                break
            continuation = pagination.get("continuation")
            if not continuation:
                break

    def download_image(self, url: str) -> EventbriteImage:
        return self.image_client.download_image(url)


def _event_datetime(payload: dict[str, Any], field: str) -> datetime:
    value = (payload.get(field) or {}).get("utc") or (payload.get(field) or {}).get("local")
    parsed = parse_datetime(value or "")
    if parsed is None:
        raise EventbriteAPIError(f"Event {payload.get('id', '')} has no valid {field} date.")
    if timezone.is_naive(parsed):
        parsed = timezone.make_aware(parsed)
    return parsed


def _unique_slug(title: str, eventbrite_id: str, current: Event | None = None) -> str:
    base = slugify(title)[:145] or f"eventbrite-event-{eventbrite_id}"
    candidate = base
    counter = 2
    queryset = Event.objects.exclude(pk=current.pk) if current else Event.objects.all()
    while queryset.filter(slug=candidate).exists():
        suffix = f"-{counter}"
        candidate = f"{base[:180 - len(suffix)]}{suffix}"
        counter += 1
    return candidate


def _event_image_asset(client: EventbriteClient | EventbriteImageClient, payload: dict[str, Any], title: str, eventbrite_id: str) -> MediaAsset | None:
    logo = payload.get("logo") or {}
    original = logo.get("original") or {}
    image_url = str(original.get("url") or logo.get("url") or "").strip()
    if not image_url:
        return None

    logo_id = str(logo.get("id") or eventbrite_id).strip()
    source_id = f"eventbrite-logo:{logo_id}"[:64]
    existing = MediaAsset.objects.filter(legacy_source_id=source_id).first()
    if existing:
        return existing

    try:
        downloaded = client.download_image(image_url)
    except EventbriteAPIError:
        return None

    extension = IMAGE_EXTENSIONS[downloaded.mime_type]
    source_name = Path(urlparse(image_url).path).stem[:80] or f"eventbrite-{eventbrite_id}"
    asset = MediaAsset(
        title=title[:200],
        kind=MediaAsset.Kind.IMAGE,
        alt_text=f"{title} event image"[:250],
        mime_type=downloaded.mime_type,
        file_size=len(downloaded.content),
        width=original.get("width") or logo.get("width"),
        height=original.get("height") or logo.get("height"),
        legacy_source_id=source_id,
    )
    asset.file.save(f"{source_name}{extension}", ContentFile(downloaded.content), save=False)
    asset.full_clean()
    asset.save()
    return asset


def sync_eventbrite_events(*, dry_run: bool = False, token: str | None = None, organization_id: str | None = None) -> SyncResult:
    client = EventbriteClient(token=token, organization_id=organization_id)
    created = updated = skipped = 0
    operation_log = IntegrationLog.objects.create(integration="eventbrite", operation="sync_events", reference=client.organization_id or "auto", status=IntegrationLog.Status.PENDING, attempts=1, last_attempt_at=timezone.now())
    try:
        with transaction.atomic():
            for payload in client.events():
                eventbrite_id = str(payload.get("id") or "").strip()
                title = str((payload.get("name") or {}).get("text") or "").strip()
                if not eventbrite_id or not title:
                    skipped += 1
                    continue
                source_id = f"eventbrite:{eventbrite_id}"
                eventbrite_status = str(payload.get("status") or "").lower()
                if eventbrite_status == "draft":
                    Event.objects.filter(legacy_source_id=source_id).update(status="draft")
                    skipped += 1
                    continue
                event = Event.objects.filter(legacy_source_id=source_id).first()
                was_created = event is None
                if event is None:
                    event = Event(legacy_source_id=source_id)
                venue = payload.get("venue") or {}
                address = venue.get("address") or {}
                event.title = title
                event.slug = _unique_slug(title, eventbrite_id, event)
                event.start_at = _event_datetime(payload, "start")
                event.end_at = _event_datetime(payload, "end")
                event.location = str(venue.get("name") or "")
                event.address = str(address.get("localized_address_display") or address.get("localized_address") or "")
                event.is_online = bool(payload.get("online_event"))
                event.booking_url = str(payload.get("url") or "")
                event.summary = str(payload.get("summary") or "")
                event.description = sanitize_html(str((payload.get("description") or {}).get("html") or ""))
                event.is_cancelled = eventbrite_status in {"canceled", "cancelled"}
                event.status = "published"
                event.published_at = event.published_at or timezone.now()
                image_asset = _event_image_asset(client, payload, title, eventbrite_id)
                if image_asset and (event.image_id is None or event.image.legacy_source_id.startswith("eventbrite-logo:")):
                    event.image = image_asset
                event.full_clean()
                event.save()
                created += int(was_created)
                updated += int(not was_created)
            if dry_run:
                transaction.set_rollback(True)
        operation_log.reference = client.organization_id
        operation_log.status = IntegrationLog.Status.DELIVERED
        operation_log.response_code = 200
        operation_log.save(update_fields=["reference", "status", "response_code", "updated_at"])
        return SyncResult(created=created, updated=updated, skipped=skipped)
    except Exception as exc:
        operation_log.status = IntegrationLog.Status.FAILED
        operation_log.error_code = exc.__class__.__name__[:100]
        operation_log.save(update_fields=["status", "error_code", "updated_at"])
        raise
