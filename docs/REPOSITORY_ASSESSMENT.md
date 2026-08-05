# Kent Business College repository assessment

Assessment date: 4 August 2026

## Executive finding

The repository currently contains a single Vite/React frontend under `frontend/`. It is a polished static prototype, not a production content platform. All content is hard-coded in `src/mocks/data.ts`, API access uses RTK Query with `fakeBaseQuery`, forms simulate success locally, navigation and site settings are embedded in React, and no backend, database, migration tooling, or automated tests exist.

The attached v1.0 Word document accurately describes the legacy WordPress estate observed on 4 August 2026, but its recommended WordPress/Next.js target is superseded by the architecture override. The implementation target is React + TypeScript + Vite -> Django REST Framework -> Neon PostgreSQL, with WordPress allowed only as a one-time migration source.

## 1. Current folder structure

```text
kentSite/
└── frontend/
    ├── .git/
    ├── eslint-rules/
    ├── node_modules/
    ├── src/
    │   ├── app/
    │   ├── components/
    │   ├── i18n/
    │   ├── mocks/
    │   ├── pages/
    │   ├── router/
    │   ├── services/
    │   ├── store/
    │   └── types/
    ├── package.json
    ├── package-lock.json
    ├── project_plan.md
    └── Vite, TypeScript, Tailwind and ESLint configuration
```

There is no root monorepo Git repository, backend, documentation folder, infrastructure configuration, migration data folder, or environment template.

## 2. Frontend framework and versions

- React 19.1
- TypeScript 5.8 with non-strict compiler settings
- Vite 8.0
- React Router DOM 7.6
- Redux Toolkit 2.9 and React Redux 9.2
- React Hook Form 7.56 and Zod 3.25
- Tailwind CSS 3.4
- i18next 25.4
- Lucide React 0.539, although most UI icons use undeclared Remix Icon CSS class names
- No TanStack Query or React Helmet Async

The package manifest also includes unused Firebase, Supabase, Stripe and Recharts dependencies. These are not part of the approved architecture and should be removed unless an approved requirement is later established.

## 3. Existing React pages

Implemented routes/pages:

- Home
- Colleges and college detail
- Programmes and programme detail
- Courses and course detail
- Events and event detail
- Who We Are
- FAQ
- Blog and blog detail
- Star Learners
- Our Experts
- Our Partners
- Governance Board
- Safeguarding Handbook
- Contact
- Support
- Apprentices
- Apprentice Stories
- Explore Jobs
- Employer Agreement
- Apply
- Book an Information Session
- Client-side not-found page

Missing required target pages include story detail, eligibility, search, store/cart/checkout, privacy, terms, and cookie policy. Several footer links currently point to missing routes.

## 4. Existing components

Reusable components are limited to:

- `MainLayout`, `Header`, and `Footer`
- desktop and mobile navigation
- cookie banner
- support-chat prototype
- simple SEO side-effect helper
- scroll-to-top helper
- loading skeleton
- functional-style error listener

Most section markup is duplicated inside page components. The 579-line home page and large form pages show that the current structure is page-centric rather than feature-based.

## 5. Existing TypeScript types

One shared `src/types/index.ts` file defines prototype interfaces for colleges, programmes, courses, events, articles, testimonials, case studies, partners, team members, navigation, form data, filters and a non-compliant `ApiResponse<T>` envelope. Types do not match the required API contract and omit publication state, media metadata, SEO, structured page sections, event agenda/speakers, pagination naming, audit fields and most form/privacy fields.

## 6. Existing routes

React Router owns 27 client routes under a shared layout. Missing-resource detail pages render an in-page message while retaining HTTP 200 in a static SPA. There is no redirect inventory, server redirect mechanism, route loader, search route, or policy route. Route paths are not yet aligned with the complete legacy inventory.

## 7-8. WordPress and Elementor dependencies

No WordPress or Elementor runtime calls exist in the current code. This is positive, but only because the site uses local mocks. The documented legacy estate still contains the following migration dependencies:

- 121 WordPress pages, many with Elementor-rendered HTML
- WordPress posts, media and custom post types
- ACF event fields and numbered speaker fields
- WordPress-managed slugs and legacy URLs
- Rank Math or equivalent SEO values
- WordPress navigation ownership
- WooCommerce Store API and session behaviour
- plugin/custom social endpoint data

These dependencies must be consumed only by isolated one-time migration tooling and replaced by Django-managed records.

## 9. Existing APIs

`src/services/api.ts` is not a network client. It uses Redux Toolkit Query `fakeBaseQuery()` and returns imported arrays from `src/mocks/data.ts`. Mutations wait one second and return generated client-side IDs. There is no request ID, error contract, pagination, authentication, retry policy, timeout, runtime validation, or Django endpoint.

## 10. Existing forms

- Apply: React Hook Form + Zod, honeypot, simulated mutation
- Contact: React Hook Form + Zod, honeypot, simulated mutation
- Book session: React Hook Form + Zod, routed through the same simulated contact mutation
- Newsletter: HTML form with `preventDefault()` and no submission
- Employer agreement: content page only; no form
- Support: content page only; no form

There is no CAPTCHA verification, server validation, rate limiting, consent persistence, duplicate prevention, CRM/email delivery, submission reference, audit record or privacy-safe logging.

## 11. Authentication

No user or staff authentication exists. Protected external systems are represented only as links. Django Admin users, roles and permissions must be introduced without reproducing LMS, APTEM or employer-dashboard authentication.

## 12. State management

Redux stores mobile-navigation state, scroll position, cookie preference, filters and RTK Query mock data. Several values do not require global state. The migration should use TanStack Query for server state and retain Redux Toolkit only for genuine shared UI state.

## 13. Environment variables

There are no `.env.example` files. Vite exposes preview-builder globals (`PROJECT_ID`, `VERSION_ID`, `READDY_AI_DOMAIN`) and uses `BASE_PATH`/`IS_PREVIEW`. The frontend has no configured API base URL.

## 14. SEO logic

The `SEO` helper mutates document head elements in an effect, but most pages only assign `document.title`. It hard-codes an Open Graph URL, does not remove stale tags, and has no JSON-LD, route-level canonical strategy, sitemap, server rendering/prerendering, or Django SEO source. Missing routes are soft 404s at the hosting layer.

## 15. Redirects

No redirects exist. The legacy 121-page inventory still requires owner-approved Keep/Merge/Redirect/Archive/Delete decisions.

## 16. Commerce

The home page advertises an online store, and the dependency list includes Stripe React, but there are no store, product, cart or checkout routes and no functioning commerce integration. The attached document observed five WooCommerce hoodie products. Commerce remains an owner decision; runtime WooCommerce cannot remain in the target system.

## 17. External integrations

Only hard-coded outbound links and marketing copy exist. There is no server-side integration with Zoho, Eventbrite, Microsoft Bookings, email, Turnstile, object storage, LMS, APTEM or the employer dashboard. Some links are generic domains or `#` placeholders and must not ship as production destinations.

## 18. Build and deployment

Vite builds to `frontend/out` with source maps enabled. No Docker, CI, reverse proxy, health check, static-host rewrite, Django deployment, database migration job, backup process or rollback automation exists.

## 19. Tests

No frontend or backend tests are present. There is no test script in `package.json`.

## 20. Hard-coded content

All programme, college, event, person, story, testimonial, article, partner, navigation, contact and global site content is hard-coded. Several phone numbers, addresses, biographies, dates, qualifications, benefits and testimonials are not evidenced by the supplied technical document and therefore cannot be treated as approved migration content.

## 21. Duplicated code

- Repeated hero, card, badge, loading and empty-state markup
- Repeated React Hook Form fields and success/error panels
- Repeated title-setting effects
- Repeated programme/event card formatting
- Separate but overlapping UI and navigation Redux state

## 22. Security risks

- Forms report success without server persistence or delivery
- No CAPTCHA, rate limiting, consent record, or server-side validation
- Production source maps are enabled
- Client-side-only 404 handling
- Generic support chat fabricates responses and contains an unverified phone number
- External URLs and image hosts are not centrally allowlisted
- No CSP, CORS, CSRF, HSTS, secure-cookie or upload policy
- Error helper references `process.env` in browser code
- Dependency surface includes unused backend/service SDKs

## 23. Exposed credentials

No committed credential values or `.env` files were found in the inspected repository. The preview-builder environment names are configuration identifiers rather than secrets. No secret values are included in this report.

## 24. Functionality to preserve

- Existing route concepts and visible content hierarchy, subject to content-owner approval
- Responsive header/mobile navigation and footer structure
- Programme and event listing/detail interactions
- Programme filtering concept
- React Hook Form + Zod form UX
- Loading, empty and error states
- Cookie preference UI concept
- Outbound integration-link behaviour with safe new-tab attributes
- KBC purple/gold visual tokens

## 25. Differences from the documentation

- The document describes a live WordPress estate; the repository contains only a disconnected React prototype.
- The document recommends WordPress headless CMS and Next.js; both are overridden by the user's fixed stack.
- The repository uses Vite as required but lacks TanStack Query and React Helmet Async.
- The document reports real legacy counts and routes; none are represented as importable migration data.
- The repository contains mock future-dated events and broad content not established as approved source content.
- The repository has no WooCommerce implementation despite store copy and Stripe package presence.

## 26-28. Reuse, refactor, replace

Reuse with modification:

- Tailwind brand colour palette
- overall route taxonomy
- selected presentational markup
- React Hook Form/Zod patterns
- responsive navigation interaction patterns

Refactor:

- layout, navigation, cards, filters, forms, metadata and state ownership
- all pages to consume typed Django contracts
- error/loading/empty states and accessibility semantics

Replace:

- mock data and fake RTK Query service
- hard-coded site settings/navigation/content
- client-only SEO helper
- fake support chat
- no-op newsletter
- placeholder links and unverified contact information
- unused Firebase/Supabase/Stripe dependencies

## 29. WordPress functionality to migrate

Pages and structured sections; programmes; events/categories/speakers/agenda; people and roles; learner stories/testimonials; articles/categories/tags; media metadata/files; navigation; settings; forms and submission history; newsletter; SEO; redirects; social posts; optional commerce; external integration configuration; legacy route inventory; and publication/audit workflow.

## 30. Risks when removing WordPress

- Incomplete source exports can cause content loss
- Elementor content cannot be mapped reliably without manual review
- Missing or blank media alt text requires editorial remediation
- Duplicate and test routes need owner decisions
- WooCommerce replacement scope is unresolved
- Form field mappings and CRM delivery ownership are unresolved
- SEO metadata and redirects may be incomplete without full exports/analytics
- Third-party embed/CSP behaviour requires integration testing
- No Neon credentials or approved object-storage destination have been supplied

## Checkpoint

Git tag `pre-django-migration-v1` records the clean frontend baseline before restructuring.
