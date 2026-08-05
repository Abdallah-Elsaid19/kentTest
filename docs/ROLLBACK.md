# Rollback plan

Rollback remains inside the React/Django/Neon architecture. WordPress is not a production fallback.

## Application rollback

1. Keep the previous frontend artifact and Django container image immutable.
2. If a release fails health or critical-route checks, route traffic back to the previous frontend/backend release.
3. Preserve request and integration logs for incident review.

## Database rollback

1. Before migrations or content import, create a Neon branch/restore point and record the migration version.
2. Prefer a forward corrective migration for non-destructive schema defects.
3. If restoration is required, stop writes, restore/reattach the recorded Neon branch, deploy the matching prior backend image, then re-run health and content checks.
4. Never reverse a destructive migration without a verified restore point and data-owner approval.

## Content-import rollback

Dry-runs roll back automatically. For committed imports, restore the pre-import Neon branch or use the migration log to identify imported records. Do not bulk-delete records that staff have edited after import.

## Rollback triggers

- database migration failure
- health checks fail or error rate exceeds the agreed threshold
- published programme/event routes unavailable
- critical form delivery fails beyond the agreed window
- redirects cause loops or high-value URLs become unavailable
- evidence of personal-data exposure or credential leakage
