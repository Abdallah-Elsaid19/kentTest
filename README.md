# Kent Business College platform

Production architecture:

```text
Browser -> React + TypeScript + Vite -> Django REST Framework -> Neon PostgreSQL
```

WordPress is not a runtime dependency. Legacy WordPress exports may be read only by isolated migration commands under `backend/apps/core/management/commands/` and `scripts/`.

## Repository layout

- `frontend/` - React, TypeScript, Vite, React Router, TanStack Query and React Hook Form
- `backend/` - Django, Django REST Framework, Django Admin and PostgreSQL models
- `docs/` - assessment, architecture, deployment, migration and rollback guidance
- `scripts/` - operational helpers that do not run in the production request path
- `infrastructure/` - deployment examples
- `migration-data/` - ignored input/media/report staging directories

## Local setup

1. Copy `backend/.env.example` to `backend/.env` and set a development secret.
2. Copy `frontend/.env.example` to `frontend/.env`.
3. Start PostgreSQL and the applications with `docker compose up --build`.
4. Open `http://localhost:5173`; the API is at `http://localhost:8000/api/v1/` and schema at `http://localhost:8000/api/schema/`.
5. Create a staff user with `docker compose exec backend python manage.py createsuperuser`.

Without Docker, create a Python virtual environment, install `backend/requirements.txt`, run migrations, then use the existing npm lockfile in `frontend/`.

## Production rules

- Production settings reject missing `DATABASE_URL`, non-PostgreSQL database URLs, missing secret keys, wildcard hosts and insecure HTTP origins.
- Set `DJANGO_SETTINGS_MODULE=config.settings.production`.
- Run `python manage.py migrate --check` in CI and `python manage.py migrate` as a release task.
- Run `python manage.py collectstatic --noinput` during the image build.
- Configure media object storage before importing legacy media.
- Keep `COMMERCE_ENABLED=false` until the owner approves a non-WordPress commerce solution.

See `docs/` for the detailed assessment and runbooks.

## Homepage rebuild

The React homepage now mirrors the current Kent Business College public homepage with reusable sections for the hero, trusted organisations, colleges, funded programmes, learner benefits, achievers, case studies, help routes, events, testimonials and the final call to action. The navigation includes keyboard-accessible desktop dropdowns and a touch-friendly mobile hierarchy.

Run the frontend locally:

```bash
cd frontend
npm install
npm run dev
```

The page uses the API at `http://localhost:8000/api/v1` by default. If the API is not running, the homepage remains usable and shows the latest known event fallback data.

### Eventbrite event sync

Eventbrite credentials are server-only. Set these variables in `backend/.env`; Docker Compose reads that file directly:

```text
EVENTBRITE_PRIVATE_TOKEN=your-private-token
EVENTBRITE_ORGANIZATION_ID=your-organisation-id
```

The organisation ID is optional; the sync discovers the Kent Business College organisation attached to the token when it is omitted.

```bash
cd backend
python manage.py sync_eventbrite --dry-run
python manage.py sync_eventbrite
```

Run `sync_eventbrite` from the deployment scheduler at the cadence required by the events team. The command paginates through Eventbrite, validates and sanitises event content, and safely updates records by Eventbrite event ID.
