# API v1 reference

Base path: `/api/v1/`

## Public reads

- `GET site/`
- `GET navigation/`
- `GET pages/{slug}/`
- `GET colleges/`
- `GET colleges/{slug}/`
- `GET programmes/`
- `GET programmes/{slug}/`
- `GET events/`
- `GET events/{slug}/`
- `GET people/`
- `GET stories/`
- `GET stories/{slug}/`
- `GET articles/`
- `GET articles/{slug}/`
- `GET social-posts/`
- `GET search/?q=...`
- `GET health/`

Global health: `GET /health/`. Dynamic sitemap: `GET /sitemap.xml`.

Programme filters: `college`, `level`, `funding`, `featured`, `search`, `ordering`, `page`, `perPage`.

Event filters: `status`, `category`, `from`, `to`, `isOnline`, `search`, `ordering`, `page`, `perPage`. Upcoming/ended status is derived from dates; cancelled takes precedence.

## Public writes

- `POST forms/contact/`
- `POST forms/support/`
- `POST forms/eligibility/`
- `POST forms/employer-agreement/`
- `POST newsletter/subscribe/`

Writes require explicit consent and a `captchaToken` in production. They return a non-sequential public reference. CRM/email delivery is represented by a pending integration log until an approved provider and credentials are configured.

## Status codes

Reads return 200, creates return 201, validation uses 422, duplicate submissions use 409, throttles use 429, missing content uses 404, and unavailable upstream services use 502/503. Production never returns stack traces or database errors.

The generated, machine-readable contract is checked in at `docs/openapi.yaml` (22 paths in this build).
