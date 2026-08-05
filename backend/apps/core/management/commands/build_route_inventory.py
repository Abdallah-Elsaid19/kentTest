import csv
from pathlib import Path

from django.core.management.base import BaseCommand, CommandError


class Command(BaseCommand):
    help = "Create an owner-review route inventory from a local newline-delimited URL export."

    def add_arguments(self, parser):
        parser.add_argument("source", type=Path)
        parser.add_argument("destination", type=Path)

    def handle(self, *args, **options):
        source = options["source"].resolve()
        destination = options["destination"].resolve()
        if not source.is_file():
            raise CommandError("Source route list does not exist.")
        routes = sorted({line.strip() for line in source.read_text(encoding="utf-8").splitlines() if line.strip()})
        destination.parent.mkdir(parents=True, exist_ok=True)
        with destination.open("w", newline="", encoding="utf-8") as stream:
            writer = csv.DictWriter(stream, fieldnames=["legacyUrl", "path", "classification", "target", "ownerApproved", "notes"])
            writer.writeheader()
            for route in routes:
                path = "/" + route.split("//", 1)[-1].split("/", 1)[-1] if "://" in route else route
                writer.writerow({"legacyUrl": route, "path": path, "classification": "REVIEW", "target": "", "ownerApproved": "false", "notes": ""})
        self.stdout.write(self.style.SUCCESS(f"Wrote {len(routes)} routes to {destination}"))
