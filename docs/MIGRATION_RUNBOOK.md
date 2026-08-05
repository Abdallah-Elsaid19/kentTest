# One-time content migration runbook

1. Obtain owner-approved JSON/CSV exports, media archive, route list and privacy approval list.
2. Place sensitive inputs under ignored `migration-data/input/` and media under ignored `migration-data/media/`.
3. Create a fresh Neon branch or encrypted local PostgreSQL database.
4. Run `build_route_inventory` and return the CSV to content owners. Do not implement redirects marked `REVIEW`.
5. Run `import_legacy_content` without `--commit`; inspect every warning/error in the generated report.
6. Manually restructure every page flagged as transitional Elementor rich text. Remove scripts, shortcodes and obsolete embeds.
7. Resolve missing alt text, malformed dates, duplicate slugs, privacy approvals and unmatched related records.
8. Re-run dry-run until clean, then take a database restore point and run with `--commit`.
9. Compare record counts and sampled content against the approved exports.
10. Upload/verify media in approved object storage and confirm no published record uses a legacy upload URL.
11. Enter approved SEO records and redirects, then complete route/content/form/accessibility/security acceptance.
12. Remove migration inputs and all temporary legacy access configuration from deployment systems.

The importer is idempotent by source ID and checksum, logs each attempt, defaults to rollback, and refuses to overwrite a target modified after its last committed import.
