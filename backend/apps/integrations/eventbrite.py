from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from hashlib import sha256
from html import unescape
from io import BytesIO
import re
from typing import Any, Iterator
from urllib.parse import urlparse

import requests
from PIL import Image, ImageOps, UnidentifiedImageError
from django.conf import settings
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage
from django.db import transaction
from django.utils import timezone
from django.utils.dateparse import parse_datetime
from django.utils.text import slugify

from apps.core.sanitization import sanitize_html
from apps.events.models import Event
from apps.media_library.models import ALLOWED_MIME_TYPES


EVENTBRITE_API_ROOT = "https://www.eventbriteapi.com/v3"
EVENTBRITE_IMAGE_HOST_SUFFIXES = ("evbuc.com", "eventbrite.com", "eventbrite.co.uk")
MAX_EVENT_IMAGE_BYTES = 10 * 1024 * 1024
FEATURED_IMAGE_MAX_WIDTH = 1200
FEATURED_IMAGE_QUALITY = 72
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


def _optimise_featured_image(image: EventbriteImage) -> bytes:
    try:
        with Image.open(BytesIO(image.content)) as source:
            transformed = ImageOps.exif_transpose(source)
            if transformed.width > FEATURED_IMAGE_MAX_WIDTH:
                height = max(1, round(transformed.height * FEATURED_IMAGE_MAX_WIDTH / transformed.width))
                transformed = transformed.resize(
                    (FEATURED_IMAGE_MAX_WIDTH, height),
                    Image.Resampling.LANCZOS,
                )
            if transformed.mode not in {"RGB", "RGBA"}:
                transformed = transformed.convert("RGBA" if "transparency" in transformed.info else "RGB")
            output = BytesIO()
            transformed.save(
                output,
                format="WEBP",
                quality=FEATURED_IMAGE_QUALITY,
                method=6,
                optimize=True,
            )
            return output.getvalue()
    except (OSError, UnidentifiedImageError, Image.DecompressionBombError) as exc:
        raise EventbriteAPIError("Eventbrite image could not be optimised.") from exc


def _store_featured_image(image_client: EventbriteImageClient, eventbrite_id: str, source_url: str) -> str:
    digest = sha256(source_url.encode("utf-8")).hexdigest()[:12]
    storage_path = f"events/featured/{eventbrite_id}-{digest}.webp"
    if not default_storage.exists(storage_path):
        image = image_client.download_image(source_url)
        default_storage.save(storage_path, ContentFile(_optimise_featured_image(image)))
    return default_storage.url(storage_path)


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
            params: dict[str, Any] = {"status": "all", "expand": "venue,category,format", "page_size": 50}
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

    def event_description(self, event_id: str) -> str:
        payload = self._get(f"/events/{event_id}/description/")
        return str(payload.get("description") or "")

    def download_image(self, url: str) -> EventbriteImage:
        return self.image_client.download_image(url)


def _event_datetime(payload: dict[str, Any], field: str) -> datetime:
    date_payload = payload.get(field) or {}
    date_payload = date_payload if isinstance(date_payload, dict) else {}
    value = date_payload.get("utc") or date_payload.get("local")
    parsed = parse_datetime(value or "")
    if parsed is None:
        raise EventbriteAPIError(f"Event {payload.get('id', '')} has no valid {field} date.")
    if timezone.is_naive(parsed):
        parsed = timezone.make_aware(parsed)
    return parsed


def _unique_slug_from_set(title: str, eventbrite_id: str, used_slugs: set[str]) -> str:
    base = slugify(title)[:220] or f"eventbrite-event-{eventbrite_id}"
    candidate = base
    counter = 2
    while candidate in used_slugs:
        suffix = f"-{counter}"
        candidate = f"{base[:240 - len(suffix)]}{suffix}"
        counter += 1
    used_slugs.add(candidate)
    return candidate


def _event_type(payload: dict[str, Any], title: str) -> str:
    for field in ("format", "category"):
        value = payload.get(field) or {}
        name = str(value.get("name") or "").strip() if isinstance(value, dict) else ""
        if name:
            return name[:40]
    lowered_title = title.lower()
    for needle, label in (
        ("information session", "Information Session"),
        ("masterclass", "Masterclass"),
        ("master class", "Masterclass"),
        ("workshop", "Workshop"),
        ("networking", "Networking Event"),
        ("webinar", "Webinar"),
    ):
        if needle in lowered_title:
            return label
    return "Event"


def _positive_integer(value: Any) -> int | None:
    try:
        parsed = int(value)
    except (TypeError, ValueError):
        return None
    return parsed if parsed >= 0 else None


def _eventbrite_values(
    payload: dict[str, Any],
    event: Event,
    title: str,
    *,
    full_description: str = "",
    description_version: str | None = None,
) -> dict[str, Any]:
    eventbrite_id = str(payload.get("id") or "").strip()
    venue = payload.get("venue") or {}
    venue = venue if isinstance(venue, dict) else {}
    address = venue.get("address") or {}
    address = address if isinstance(address, dict) else {}
    logo = payload.get("logo") or {}
    logo = logo if isinstance(logo, dict) else {}
    original_logo = logo.get("original") or {}
    original_logo = original_logo if isinstance(original_logo, dict) else {}
    description = payload.get("description") or {}
    description = description if isinstance(description, dict) else {}
    start = payload.get("start") or {}
    start = start if isinstance(start, dict) else {}
    summary = str(payload.get("summary") or "").strip()
    status = str(payload.get("status") or "draft").strip().lower()[:32]
    details_content = dict(event.details_content) if isinstance(event.details_content, dict) else {}
    details_content.update({"source": "eventbrite", "summary": summary})
    if description_version is not None:
        details_content["eventbrite_changed"] = description_version
    return {
        "title": title[:220],
        "event_type": _event_type(payload, title),
        "description": sanitize_html(full_description or str(description.get("html") or "")),
        "location": str(address.get("localized_address_display") or address.get("localized_address") or "")[:220],
        "region": str(address.get("region") or "")[:120],
        "starts_at": _event_datetime(payload, "start"),
        "ends_at": _event_datetime(payload, "end"),
        "capacity": _positive_integer(payload.get("capacity")),
        "is_published": status in {"live", "started", "ended", "completed", "canceled", "cancelled"},
        "eventbrite_id": eventbrite_id[:64],
        "eventbrite_url": str(payload.get("url") or "")[:500],
        "image_url": str(original_logo.get("url") or logo.get("url") or "")[:500],
        "image_thumbnail_url": str(logo.get("url") or original_logo.get("url") or "")[:500],
        "venue_name": str(venue.get("name") or "")[:220],
        "status": status,
        "is_online_event": bool(payload.get("online_event")),
        "timezone": str(start.get("timezone") or "Europe/London")[:64],
        "details_content": details_content,
    }


def sync_eventbrite_events(*, dry_run: bool = False, token: str | None = None, organization_id: str | None = None) -> SyncResult:
    client = EventbriteClient(token=token, organization_id=organization_id)
    created = updated = skipped = 0
    payloads = list(client.events())
    eventbrite_ids = [str(payload.get("id") or "").strip() for payload in payloads]
    existing_events = {
        event.eventbrite_id: event
        for event in Event.objects.filter(eventbrite_id__in=eventbrite_ids)
    }
    full_descriptions: dict[str, str] = {}
    description_versions: dict[str, str] = {}
    for payload in payloads:
        eventbrite_id = str(payload.get("id") or "").strip()
        if not eventbrite_id:
            continue
        existing_event = existing_events.get(eventbrite_id)
        existing_content = (
            existing_event.details_content
            if existing_event is not None and isinstance(existing_event.details_content, dict)
            else {}
        )
        eventbrite_changed = str(payload.get("changed") or "")
        if (
            existing_event is not None
            and existing_event.description
            and eventbrite_changed
            and existing_content.get("eventbrite_changed") == eventbrite_changed
        ):
            full_descriptions[eventbrite_id] = existing_event.description
            description_versions[eventbrite_id] = eventbrite_changed
            continue
        try:
            full_descriptions[eventbrite_id] = client.event_description(eventbrite_id)
            description_versions[eventbrite_id] = eventbrite_changed
        except EventbriteAPIError:
            if existing_event is not None and existing_event.description:
                full_descriptions[eventbrite_id] = existing_event.description
            else:
                description = payload.get("description") or {}
                description = description if isinstance(description, dict) else {}
                full_descriptions[eventbrite_id] = str(description.get("html") or "")

    with transaction.atomic():
        used_slugs = set(Event.objects.values_list("slug", flat=True))
        seen_eventbrite_ids: set[str] = set()
        to_create: list[Event] = []
        to_update: list[Event] = []
        now = timezone.now()

        for payload in payloads:
            eventbrite_id = str(payload.get("id") or "").strip()
            title = str((payload.get("name") or {}).get("text") or "").strip()
            if not eventbrite_id or not title or eventbrite_id in seen_eventbrite_ids:
                skipped += 1
                continue
            seen_eventbrite_ids.add(eventbrite_id)

            event = existing_events.get(eventbrite_id)
            was_created = event is None
            if event is None:
                event = Event(eventbrite_id=eventbrite_id)
                event.slug = _unique_slug_from_set(title, eventbrite_id, used_slugs)
                event.is_hidden_on_site = not bool(payload.get("listed", True))

            previous_image_url = event.image_url

            for field, value in _eventbrite_values(
                payload,
                event,
                title,
                full_description=full_descriptions.get(eventbrite_id, ""),
                description_version=description_versions.get(eventbrite_id),
            ).items():
                setattr(event, field, value)
            details_content = dict(event.details_content) if isinstance(event.details_content, dict) else {}
            if (
                not dry_run
                and event.image_url
                and (
                    previous_image_url != event.image_url
                    or not details_content.get("featured_image_url")
                )
            ):
                try:
                    details_content["featured_image_url"] = _store_featured_image(
                        client.image_client,
                        eventbrite_id,
                        event.image_url,
                    )
                except EventbriteAPIError:
                    details_content.pop("featured_image_url", None)
            event.details_content = details_content
            if event.starts_at and event.ends_at and event.ends_at < event.starts_at:
                raise EventbriteAPIError(f"Event {eventbrite_id} ends before it starts.")
            event.updated_at = now
            if was_created:
                event.created_at = now
            event.full_clean(validate_unique=False, validate_constraints=False)
            (to_create if was_created else to_update).append(event)
            created += int(was_created)
            updated += int(not was_created)

        if to_create:
            Event.objects.bulk_create(to_create)
        if to_update:
            Event.objects.bulk_update(
                to_update,
                fields=[
                    "title",
                    "event_type",
                    "description",
                    "location",
                    "region",
                    "starts_at",
                    "ends_at",
                    "capacity",
                    "is_published",
                    "eventbrite_url",
                    "image_url",
                    "image_thumbnail_url",
                    "venue_name",
                    "status",
                    "is_online_event",
                    "timezone",
                    "details_content",
                    "updated_at",
                ],
            )

        if dry_run:
            transaction.set_rollback(True)

    return SyncResult(created=created, updated=updated, skipped=skipped)
