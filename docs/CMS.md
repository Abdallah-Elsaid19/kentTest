# KBC content dashboard

The React dashboard is at `/dashboard`. It uses the existing Django session authentication and REST Framework API. CMS working copies, published snapshots, revision history, actors and timestamps are stored in the existing **Neon PostgreSQL** database.

## Scope

The first collection is **Home Content**: page metadata and all 14 visible Home sections. Editable fields include headings, body copy, links, images, logos, cards, pathway content, testimonials and section visibility. Array fields support adding, removing and reordering within the layout's validated limits. Some layout-sensitive arrays have a fixed length.

Recognition, trusted organisations and KBC experience are shared with existing programme, learner and employer pages. Those components also consume the same published Home records, so changes to these sections affect their shared appearances. The dashboard's Home event section manages its heading, calls to action and fallback imagery; event records continue to come from the existing Neon-backed Events API and Eventbrite sync. It does not invent fallback events.

Other collections can be registered in `apps.cms.schemas.COLLECTIONS`, with matching serializers/contracts and React renderers. Programmes, News, Awards, Bookshop and global-content editing have not been added to this initial dashboard scope. Existing Django models/admin for other collections remain available.

## Database and initial migration

`backend/.env` supplies the project's existing `DATABASE_URL`. Development, migration commands and production require a PostgreSQL hostname ending in `.neon.tech` and `sslmode=require`, `verify-ca` or `verify-full`. There is one database configuration and no runtime SQLite fallback. Never commit the connection string.

Docker Compose reads that same environment file; it no longer provisions or overrides it with another database. Migrations are explicit setup/release operations, not an application startup hook.

```sh
cd backend
python manage.py migrate cms --plan
python manage.py migrate cms
```

`cms.0001_initial` creates `cms_contententry` and `cms_contentrevision`, their foreign keys and uniqueness constraints. `cms.0002_import_home` is a frozen, one-time data migration from the previous React source. It inserts only missing entries and creates their initial revisions. It preserves existing editorial content and makes no changes to existing public-content tables. Do not edit an applied migration to change website copy.

**There are no runtime content JSON files.** `backend/apps/cms/home_contract.json` is the single editable definition of field types, required fields, limits and allowed values. It is a validation contract, not persistence or fallback content. The sole initial copy snapshot is inside the Django data migration. PostgreSQL stores `models.JSONField` content as `jsonb`. Only isolated unit tests use an in-memory test database; they never connect to Neon.

### Updating the field contract

Edit only `backend/apps/cms/home_contract.json`. The frontend generates `src/features/cms/generated/homeContract.ts` automatically before `npm run dev`, `npm run build`, `npm test`, `npm run lint` and `npm run type-check`. This generated file is ignored by Git and must not be edited manually. A missing or invalid source stops generation instead of using a stale copy.

For an already-running development server, run `npm run cms:generate` from `frontend` after changing the source (or restart `npm run dev`). Vite picks up the generated module change. Restart Django as well so it reloads its schema. Changing field rules does not migrate or rewrite existing Neon content; coordinate incompatible field changes with an explicit data migration.

Frontend build environments must check out the backend contract at its repository-relative path alongside `frontend`. Docker Compose mounts just that source file read-only into the frontend container. No backend environment file or database credentials are needed for generation.

## Administrator access

An account must be active and either a superuser or a staff user whose existing `role` is `admin`. Editors, authors, reviewers, nonstaff administrators and inactive users cannot access CMS records or preview endpoints. Hiding the dashboard is not the permission boundary: every protected API checks authorization.

No default administrator password or account is installed. If there is no administrator, the owner can create one interactively:

```sh
cd backend
python manage.py createsuperuser
```

Use that account to sign in at `/dashboard`. Existing Django administration remains under `/admin/`; its own model-level permissions still apply to media and user-management links. The CMS tables are read-only in Django Admin to prevent bypassing publication/version checks.

For the default Vite HTTPS setup, configure `CSRF_TRUSTED_ORIGINS` and `CORS_ALLOWED_ORIGINS` to include `https://localhost:5173`. Prefer `VITE_API_BASE_URL=/api/v1`; Vite proxies API, media and Django-admin requests. Production should route the SPA and API through the same HTTPS origin and use the existing production settings for secure cookies. A cross-origin deployment must explicitly configure trusted origins and cookie policy. Do not disable CSRF or use browser storage for authentication.

## Editorial workflow

1. Open **All content → Home Content**, search or filter the collection, and select **Edit content**.
2. Change the structured fields. Validation runs in React and again in Django.
3. **Save draft** writes only the working copy. The public site continues displaying the last published snapshot.
4. **Preview saved draft** opens an authenticated preview of that section together with the other published sections. Unsaved edits are not previewed. Preview data is never exposed by the public endpoint.
5. **Publish** atomically stores the working copy as the published snapshot, activates the section, records the actor, adds a revision and updates the audit log.
6. **Deactivate** hides a section while retaining its published snapshot and draft. **Activate published version** restores only the existing published snapshot; it does not publish a newer draft. Page metadata cannot be deactivated.

Each mutation supplies the last-read version. The API locks the row and checks that version before updating. A stale request receives `409`; the UI keeps the user's edits and offers an explicit reload. Drafts are valid structured content, not incomplete arbitrary JSON. Unknown properties, unsafe URLs, invalid icons, oversized content and invalid card counts are rejected.

The public React query refreshes on focus and every 15 seconds while active. A successful dashboard publication invalidates the public query in that application instance. The public endpoint reads current Neon records and sends `Cache-Control: no-store`; no local TypeScript or JSON snapshot substitutes for an API failure. The API returning no active record hides that section.

The 15-second refresh applies to the Home page. Shared sections on other pages request only their own published record, for example `/content/home/?section=recognition`, and do not poll. Their queries refresh on mounting and window focus, share in-flight requests by section, and participate in dashboard publication invalidation. The `home` URL identifies the record's CMS collection; it does not load the Home page or its hero media. A filtered response omits inactive/unpublished sections and rejects unknown section names.

## API

All paths are under `/api/v1/`. Envelope fields use the project's camelCase renderer. The CMS JSON parser preserves the schema's content keys.

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `cms/session/` | Current user and CSRF token |
| POST | `cms/login/` | CSRF-protected administrator session login |
| POST | `cms/logout/` | Revoke current session |
| GET | `cms/collections/` | Real collection counts and schema registry |
| GET | `cms/entries/` | Search/filter/paginate sections (`collection`, `search`, `status`, `page`, `perPage`) |
| GET | `cms/entries/home.hero/` | Working and published snapshots, status, actor and version |
| PATCH | `cms/entries/home.hero/` | `{version, action, content}` for draft/publish; omit content for activate/deactivate |
| GET | `cms/entries/home.hero/revisions/` | Paginated version/action/actor history |
| GET | `cms/entries/home.hero/preview/` | Private saved-section preview |
| GET | `content/home/` | Anonymous active published content only |

Login is limited to 10 attempts per minute per client IP using DRF's throttle cache. For multiple application processes, use a shared Django cache or deployment-level login rate limiting so the limit is shared. Session cookies and CSRF tokens remain under Django's control. No bearer credentials are persisted by React. DRF explains why login views require explicit CSRF protection in its [authentication documentation](https://www.django-rest-framework.org/api-guide/authentication/).

## Validation and acceptance status

On 2026-09-09, the existing Neon connection and its 51 pre-existing migrations were inspected. The two additive CMS migrations were applied successfully; 15 Home entries were imported. The requested `abdallah_elsaid` account was then created with CMS administration and media view/add/change permissions, without superuser privileges. Its generated credentials are in a local git-ignored file, not this document or source code.

Completed checks:

- 34 Django tests, including CMS draft isolation, publish visibility, authenticated preview, CSRF, permission denial, version conflicts, schema/URL validation, import idempotency, pagination, activation and throttling.
- 85 frontend tests, including public API content rendering, missing/inactive content handling, URL validation, dashboard/login/editor routes and the absence of fabricated Home events.
- TypeScript checking, ESLint and a production Vite build.
- Read-only integration with real Neon: confirmed `jsonb` columns; fetched the public HTTP endpoint through the real React API client; rendered the Home components; restarted the dedicated Django process and ran React in a fresh process; confirmed the same stored content remained. Anonymous administration requests returned 403.
- Verified the requested administrator's real HTTP login with CSRF, collection/editor/history/preview reads, and session revocation on logout.
- Verified `/dashboard`, administrator sign-in, collection counts and all published sections through the already-running `https://localhost:5173` Vite proxy using the existing development certificate with Node's standard certificate/hostname checks. Restarted the local Django development process to load the updated HTTPS CSRF origins.
- Real Neon write checks in an automatically rolled-back transaction: draft isolation, publication, revision creation and stale-version rejection. An independent connection confirmed that live readers retained the original content; rollback restored the original version and revision count. This created no extra administrator and committed no test publication.

The complete browser edit → draft → publish → restart walkthrough is **not yet verified**. No browser automation surface was available. Automatic approval review also rejected creating a temporary administrator and briefly publishing a test headline without specific approval. The live write test remains pending owner approval. Read-only restart verification does not substitute for that final acceptance flow.

Run the regular checks with:

```sh
cd backend
python manage.py test apps --settings=config.settings.test --noinput
python manage.py makemigrations --check --dry-run --settings=config.settings.test
cd ../frontend
npm run type-check
npm run lint
npm test
npm run build
```

`cmsNeon.integration.test.tsx` is skipped by default. To opt into read-only HTTP/React verification, set `VITE_API_BASE_URL` to a running Django API and `VITE_CMS_ACCEPTANCE_EXPECTED` to the exact published Hero heading, then run that single test. This test never writes content or creates accounts.

Once an administrator is available, perform the final acceptance in `/dashboard`: save a draft, confirm Home still shows the published copy, publish, reload Home, restart both applications, and confirm the new copy still appears. Record the result and restore any temporary test copy through Publish. Retain the audit trail.
