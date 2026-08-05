# Production architecture

## Request flow

```text
Browser
  -> React 19 + TypeScript + Vite
  -> /api/v1/ Django REST Framework
  -> Neon PostgreSQL (SSL required)

Django
  -> approved S3-compatible object storage
  -> approved email/CRM provider
  -> Turnstile verification
  -> outbound Eventbrite/Microsoft Bookings links
```

No production component calls WordPress, `/wp-json/`, Elementor, PHP, WordPress media, WordPress authentication or WooCommerce.

## Content domains

- `site_config`: singleton organisation, contact, policy and external-system settings
- `navigation`: explicit header/footer/utility menu trees
- `pages`: page records and validated, ordered structured sections
- `colleges`: college taxonomy and landing content
- `programmes`: programmes, modules, certifications and eligibility items
- `events`: categories, events, speakers and agenda items
- `people`: one person model with coach/instructor/expert/staff/speaker roles
- `stories`: privacy-approved learner stories, case studies, star learners and testimonials
- `articles`: articles, categories and tags
- `media_library`: validated media metadata and object-storage files
- `seo`: generic SEO records, social metadata and JSON-LD
- `redirects`: exact owner-approved redirects evaluated only after a 404
- `forms` and `newsletter`: consent-bearing submissions with throttling and duplicate protection
- `social`: curated, approved public social posts without analytics leakage
- `integrations`: delivery and migration logs without sensitive payloads
- `audit`: immutable audit events

Commerce models are intentionally absent while commerce remains unapproved. The frontend store/cart/checkout routes explain that purchases are disabled.

## Publication and privacy

Public content queries use `published` managers and never return draft or archived records. Stories additionally require `privacy_approved=true`; the database prevents a story from entering published state without that approval.

All publication-capable records carry status, publication timestamp, created/updated timestamps and actor relationships. Django Admin limits destructive deletion of core editorial content to superusers.

## API contract

All documented routes use trailing slashes. JSON request and response keys are camelCase at the boundary while Python and database fields remain snake_case.

Collections:

```json
{
  "items": [],
  "pagination": {
    "page": 1,
    "perPage": 12,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

Errors:

```json
{
  "error": {
    "code": "validation_error",
    "message": "Please correct the highlighted fields.",
    "details": { "email": "Enter a valid email address." }
  },
  "requestId": "req_..."
}
```

API documentation is exposed at `/api/docs/` and the OpenAPI document at `/api/schema/`.

## Page sections

Allowed section types are `hero`, `richText`, `programmeCards`, `benefits`, `testimonials`, `events`, `people`, `stories`, `logoCloud`, `CTA`, `contactDetails`, `statistics`, `FAQ`, `form`, `media`, and `externalEmbed`. Each section is ordered, enabled/disabled, publication-controlled and validated as an object. Rich HTML is sanitized in Django and again at the React rendering boundary.

## Security controls

- production settings require a strong secret, explicit hosts and a PostgreSQL URL
- SSL redirect, secure cookies, HSTS and strict referrer policy
- CORS/CSRF allowlists
- request IDs in responses and errors
- structured logs without submission bodies
- CSP and permissions policy headers
- Turnstile verification on public writes outside development
- route-scoped DRF throttles
- consent timestamps and duplicate suppression
- HTTPS and approved-host validation for booking URLs
- allowlisted media MIME types and blocked executable/web content extensions
- no secrets or database credentials in React
- production source maps disabled

## Neon

Production uses Django's PostgreSQL backend through `DATABASE_URL`, including `sslmode=require`, health checks and 60-second connection reuse. SQLite is confined to local/test operation when no database URL is supplied and cannot be selected by production settings.
