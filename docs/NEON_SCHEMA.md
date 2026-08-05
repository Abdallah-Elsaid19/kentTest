# Neon/PostgreSQL schema map

Production schema ownership remains in Django migrations. Neon is the PostgreSQL host, not a second application data model.

## Core relationships

- colleges have many programmes
- programmes have ordered modules, certifications and eligibility items
- events belong to optional categories and have ordered speakers and agenda items
- people have one or more controlled roles
- pages have ordered, publication-controlled structured sections
- stories require privacy approval before publication
- articles have categories and tags
- navigation menus have ordered, nested items
- SEO records attach to content through Django content types
- media assets can be referenced by structured content and domain records
- submissions and newsletter subscriptions create non-sensitive integration logs
- audit logs record actor and request ID when changes occur during a request
- migration logs retain source IDs and checksums for idempotence and overwrite protection

## Database safeguards

- unique public slugs and source IDs
- indexed publication states, dates and common filter fields
- story publication/privacy check constraint
- redirect status-code check constraint
- foreign-key integrity and explicit delete behavior
- production-only PostgreSQL enforcement with TLS in the connection URL

Run `python manage.py makemigrations --check --dry-run` in CI. Apply migrations from a dedicated release job after creating a Neon branch or restore point; never mutate the schema from frontend code.
