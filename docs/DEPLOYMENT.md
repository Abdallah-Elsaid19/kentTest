# Production deployment

## Prerequisites

- Neon project and pooled PostgreSQL connection string with `sslmode=require`
- approved frontend and API domains
- approved S3-compatible media bucket/CDN
- Turnstile keys
- approved email/CRM provider and workflow mappings
- HTTPS termination and secret manager

## Backend release

1. Build `backend/Dockerfile`.
2. Set `DJANGO_SETTINGS_MODULE=config.settings.production` and every required environment value from `backend/.env.example` in the platform secret manager.
3. Run `python manage.py check --deploy`.
4. Run `python manage.py migrate --check`, take a Neon restore point/branch, then run `python manage.py migrate` as a single release job.
5. Run `python manage.py collectstatic --noinput`.
6. Start Gunicorn and verify `/health/`, `/api/v1/health/`, `/api/schema/` and `/sitemap.xml`.

Neon should use the pooled connection endpoint, TLS, a least-privilege application role and a separate migration role where the platform permits it.

## Frontend release

1. Set `VITE_API_BASE_URL`, `VITE_SITE_URL`, `VITE_TURNSTILE_SITE_KEY` and `VITE_COMMERCE_ENABLED=false` at build time.
2. Run type-check, lint, tests and the Vite production build.
3. Publish `frontend/out/` behind the route-aware edge configuration in `infrastructure/nginx.conf` or an equivalent host rule.
4. Proxy `/api/`, `/health/`, `/admin/`, `/media/`, `/static/` and `/sitemap.xml` to Django.
5. Verify that known client routes return 200 and an unknown URL returns HTTP 404, not a soft 404.

## Post-release checks

- published programme/event/page/navigation reads
- contact/support/eligibility/employer form receipt and downstream delivery
- Turnstile failure and throttle behaviour
- CSP/CORS/CSRF headers
- admin role permissions and audit history
- redirects and query-string preservation
- canonical metadata, JSON-LD, robots and sitemap
- object-storage media URLs and alt text
- structured logging/request ID correlation
