from django.core.management.base import BaseCommand
from django.utils import timezone

from apps.events.models import Event
from apps.integrations.eventbrite import EventbriteAPIError, EventbriteImageClient, _event_image_asset


class Command(BaseCommand):
    help = "Download original Eventbrite images for imported events that do not have an image."

    def add_arguments(self, parser):
        parser.add_argument("--upcoming-only", action="store_true", help="Only update upcoming published events.")
        parser.add_argument("--limit", type=int, default=0, help="Maximum number of events to process (zero means all).")

    def handle(self, *args, **options):
        queryset = Event.published.filter(
            legacy_source_id__startswith="eventbrite:",
            image__isnull=True,
        ).exclude(booking_url="").order_by("start_at")
        if options["upcoming_only"]:
            queryset = queryset.filter(end_at__gte=timezone.now(), is_cancelled=False)
        if options["limit"] > 0:
            queryset = queryset[:options["limit"]]

        client = EventbriteImageClient()
        updated = failed = 0
        for event in queryset:
            eventbrite_id = event.legacy_source_id.partition(":")[2]
            try:
                image_url = client.page_image_url(event.booking_url)
                asset = _event_image_asset(
                    client,
                    {"logo": {"id": f"event-{eventbrite_id}", "original": {"url": image_url}}},
                    event.title,
                    eventbrite_id,
                )
                if not asset:
                    raise EventbriteAPIError("Eventbrite image could not be saved.")
                event.image = asset
                event.save(update_fields=["image", "updated_at"])
                updated += 1
                self.stdout.write(self.style.SUCCESS(f"Added image: {event.title}"))
            except EventbriteAPIError as exc:
                failed += 1
                self.stdout.write(self.style.WARNING(f"Skipped {event.title}: {exc}"))

        self.stdout.write(self.style.SUCCESS(f"Eventbrite image backfill complete: {updated} updated, {failed} failed."))
