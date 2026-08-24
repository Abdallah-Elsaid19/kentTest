from django.core.management.base import BaseCommand
from django.utils import timezone

from apps.events.models import Event
from apps.integrations.eventbrite import EventbriteAPIError, EventbriteImageClient


class Command(BaseCommand):
    help = "Backfill Eventbrite image URLs for imported events that do not have an image."

    def add_arguments(self, parser):
        parser.add_argument("--upcoming-only", action="store_true", help="Only update upcoming published events.")
        parser.add_argument("--limit", type=int, default=0, help="Maximum number of events to process (zero means all).")

    def handle(self, *args, **options):
        queryset = Event.published.filter(
            image_url="",
        ).exclude(eventbrite_url="").order_by("starts_at")
        if options["upcoming_only"]:
            queryset = queryset.filter(ends_at__gte=timezone.now()).exclude(status__in=("canceled", "cancelled"))
        if options["limit"] > 0:
            queryset = queryset[:options["limit"]]

        client = EventbriteImageClient()
        updated = failed = 0
        for event in queryset:
            try:
                image_url = client.page_image_url(event.eventbrite_url)
                event.image_url = image_url[:500]
                event.image_thumbnail_url = image_url[:500]
                event.save(update_fields=["image_url", "image_thumbnail_url", "updated_at"])
                updated += 1
                self.stdout.write(self.style.SUCCESS(f"Added image: {event.title}"))
            except EventbriteAPIError as exc:
                failed += 1
                self.stdout.write(self.style.WARNING(f"Skipped {event.title}: {exc}"))

        self.stdout.write(self.style.SUCCESS(f"Eventbrite image backfill complete: {updated} updated, {failed} failed."))
