# Final build report

Build date: 4 August 2026

## Delivered

- Root monorepo with React/TypeScript/Vite frontend and Django/DRF backend
- PostgreSQL/Neon-ready schema and Django Admin CMS
- Versioned camelCase JSON API, filtering, pagination, search, health, sitemap and OpenAPI contract
- Structured pages, colleges, programmes, people, events, stories, articles, navigation, SEO and media models
- Consent-bearing public forms, newsletter subscription, Turnstile support, throttling and duplicate detection
- Request IDs, structured errors, audit context, sanitization, upload/link validation and production security settings
- Local-only, dry-run-first legacy importer with checksums, reports and manual-change protection
- Route inventory and redirect support with rollback/deployment runbooks
- Responsive route-split frontend with loading/error/empty states and disabled commerce routes
- Generated 1200×630 Kent Business College social-preview image

## Verification evidence

- Frontend TypeScript check: passed
- Frontend ESLint: passed with zero warnings
- Frontend Vitest: 3 tests passed
- Frontend production build: passed; route chunks generated, main bundle 438.19 kB (134.80 kB gzip)
- Django tests: 13 passed
- Django development check: no issues
- Django production `check --deploy`: no issues
- Migration drift check: no changes detected
- Python dependency consistency: no broken requirements
- OpenAPI generation: passed, 22 paths
- Local HTTP smoke test: health, seven collections/search, sitemap and direct SPA programme route returned 200

The in-app browser runtime had no browser backend available, so screenshot-based responsive and keyboard QA could not be executed in this environment. The asset itself was visually inspected with the image viewer.

## Not launch-complete without owner inputs

- No approved content/media export was supplied, so live records and the 1,556 referenced media assets were not imported.
- No Neon project, production domains, object-storage credentials, Turnstile keys or approved CRM/email credentials were supplied, so staging/production deployment and downstream delivery were not executed.
- Redirect Keep/Merge/Redirect/Archive/Delete decisions remain owner-controlled.
- Commerce remains disabled pending approval of a non-WordPress provider or Django scope.
- Learner-story privacy approvals, integration ownership, retention rules and external URLs remain unresolved in `DECISIONS_REQUIRED.md`.

The repository is implementation-complete for the approved architecture, but production migration and launch remain gated by those inputs rather than being simulated with fabricated data.
