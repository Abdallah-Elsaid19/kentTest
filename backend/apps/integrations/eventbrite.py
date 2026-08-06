from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from typing import Any, Iterator

import requests
from django.conf import settings
from django.db import transaction
from django.utils import timezone
from django.utils.dateparse import parse_datetime
from django.utils.text import slugify

from apps.core.sanitization import sanitize_html
from apps.events.models import Event
from apps.integrations.models import IntegrationLog


EVENTBRITE_API_ROOT = "https://www.eventbriteapi.com/v3"


class EventbriteConfigurationError(RuntimeError):
    pass


class EventbriteAPIError(RuntimeError):
    pass


@dataclass(frozen=True)
class SyncResult:
    created: int = 0
    updated: int = 0
    skipped: int = 0


class EventbriteClient:
    def __init__(self, token: str | None = None, organization_id: str | None = None):
        self.token = (token or settings.EVENTBRITE_PRIVATE_TOKEN).strip()
        self.organization_id = (organization_id or settings.EVENTBRITE_ORGANIZATION_ID).strip()
        if not self.token:
            raise EventbriteConfigurationError("EVENTBRITE_PRIVATE_TOKEN is not configured.")
        self.session = requests.Session()
        self.session.headers.update({"Authorization": f"Bearer {self.token}", "Accept": "application/json"})

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
