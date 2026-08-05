# WordPress-to-Django migration gap analysis

## Source baseline

The attached v1.0 document records a 4 August 2026 live-site baseline: 121 pages, 3 posts, 1,556 media records, 2 coaches, 15 courses, 16 events, 3 instructors, 11 paid courses, 4 star learners, event agenda types, one event partner and 5 WooCommerce products. It also identifies Zoho, Eventbrite, Microsoft Bookings, LMS, APTEM and employer-dashboard workflows.

Those counts are evidence for migration planning, not approved content exports. No WordPress JSON/CSV/database export, media archive, redirect CSV, analytics report, CRM field map or Neon connection has been provided in this repository.

## Required replacements

| Legacy responsibility | Target owner | Current gap |
|---|---|---|
| WordPress pages + Elementor | Django `pages` + validated `PageSection`; React section registry | No source export or approved section mapping |
| ACF programmes/courses | Django `colleges` + `programmes` | Prototype data is hard-coded and partly unverified |
| Events + ACF fields | Django `events` | Dates/speakers/agenda need export and normalization |
| Coaches/instructors | Django `people` with roles | Prototype biographies are not source-backed |
| Star learners/posts | Django `stories` and `articles` | Privacy approval and complete exports missing |
| WordPress media | Django `media_library` + object storage | 1,556 files and metadata not supplied |
| Menus | Django `navigation` | Existing React menu is hard-coded and not confirmed canonical |
| Rank Math/SEO | Django `seo` + React Helmet | SEO export and canonical route decisions missing |
| WordPress redirects/plugins | Django `redirects` middleware | Full route/traffic inventory and owner approval missing |
| Zoho forms | Django `forms` integration services | Destination workflow/API field maps and secrets missing |
| WooCommerce | Django commerce or approved provider | Owner has not decided keep/replace/remove |
| Custom social API | Django `social` cache/import | Public-field policy and source credentials missing |

## Migration rules

- WordPress access is allowed only in scripts and management commands explicitly marked as legacy import tooling.
- Importers default to dry-run, use stable source IDs, sanitize HTML, strip scripts/shortcodes, report unmapped sections, and never overwrite records changed after import.
- Production settings and frontend bundles must contain no WordPress URL or credential.
- Media must be copied to approved object storage before legacy URLs are removed.
- No placeholder or prototype content is promoted as approved production content.
- Deletion and redirects require content-owner approval.

## Acceptance blockers outside code

1. Approved legacy content and media exports.
2. Neon `DATABASE_URL` and production domain/origin list.
3. Object-storage provider and bucket.
4. CRM/email/Zoho destination and field mappings.
5. Turnstile production keys.
6. Commerce decision and provider if retained.
7. Canonical 121-route disposition and redirect approval.
8. Privacy, retention and consent decisions for each form.
9. Approved external URLs for Microsoft Bookings, LMS, APTEM and employer dashboard.
10. Editorial approval for programme facts, people biographies, stories and testimonials.
