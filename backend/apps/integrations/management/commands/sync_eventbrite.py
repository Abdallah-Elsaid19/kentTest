from django.core.management.base import BaseCommand, CommandError

from apps.integrations.eventbrite import EventbriteAPIError, EventbriteConfigurationError, sync_eventbrite_events


class Command(BaseCommand):
    help = "Synchronise Kent Business College events from Eventbrite."

    def add_arguments(self, parser):
        parser.add_argument("--dry-run", action="store_true", help="Validate the Eventbrite response without saving events.")

    def handle(self, *args, **options):
        try:
            result = sync_eventbrite_events(dry_run=options["dry_run"])
        except (EventbriteConfigurationError, EventbriteAPIError) as exc:
            raise CommandError(str(exc)) from exc
        mode = "Validated" if options["dry_run"] else "Synchronised"
        self.stdout.write(self.style.SUCCESS(f"{mode} Eventbrite events: {result.created} created, {result.updated} updated, {result.skipped} skipped."))
