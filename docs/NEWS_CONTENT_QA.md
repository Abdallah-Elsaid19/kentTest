# Blogs and News implementation and source QA

## Routes and scope

The requested listing route is `/blogs-and-news`. The shared navigation now links there. `/blog` and `/news` redirect to the listing; `/news/:articleSlug` redirects to the matching `/blogs-and-news/:articleSlug` page. Existing `/blog/:articleSlug` API-backed article pages remain available.

The previous `/blogsandnews` listing and detail URLs also redirect to their corresponding `/blogs-and-news` URLs.

The project uses React Router and Vite, not Next.js. The new listing and article route are lazy loaded within the existing MainLayout, Header, Footer and QueryClientProvider.

## Source inventory

Authoritative reference: https://readdy.cc/preview/e12511ee-ada1-4d22-bf99-373e277dad2d/13488680/news

Read on 8 September 2026. The reference serves a client-rendered shell. Its public `assets/index-Ol_1rUKQ.js` bundle was inspected for the complete News listing and detail components. The category and article literals were parsed with the existing TypeScript parser; remote JavaScript was not executed. The extracted copy and original image URLs are preserved in `frontend/src/tests/fixtures/news-source.json`.

The reference HTML was fetched again after implementation and had the same SHA-256: `3AFD9674A372A80A4482DCC16ED59E5D5A2E52AD36BCC113047A0800F3687751`.

- Hero: originally “News & Insights”, renamed to “Blogs & News” at the user's request, including navigation, page metadata and detail-page return links. The original fixture remains unchanged for provenance. “Ideas, evidence and insight for professional work”, the full introductory paragraph and the original desk image are retained. No hero CTA exists in the source.
- Featured story: Project Controls commercial access, including its complete excerpt, category, author, date, reading time, image and “Read the full article” action.
- Article catalogue: “All articles”; “Browse the latest insight”; all nine non-featured stories in source order.
- Filters, in source order: All, News, Blog, Case Studies, Guides, Events. All is initially active. The featured story remains visible independently of the selected category, matching the source. The empty-category message is retained.
- The source has no search field, pagination or load-more control.
- Newsletter: “Stay informed”; full heading, paragraph, email label, placeholder, Subscribe action and success message.
- Final CTA: “Take the next step”; full heading and paragraph; “Check eligibility & funding” → `/funding-eligibility`; “Talk to the team” → `/contact`.
- Detail pages: complete bodies for all ten articles, key-point lists where present, author/date/reading time, original images, related reading and final CTA. Related articles prioritise the current category, exclude the current article, then fill from source order.

| Article ID | Category | Published | Reading time | Author |
| --- | --- | --- | --- | --- |
| pc-commercial-access | News | 21 Aug 2026 | 6 min read | KBC Editorial |
| dfe-funding-explained | Blog | 18 Aug 2026 | 5 min read | KBC Editorial |
| chpp-preparation | Guides | 14 Aug 2026 | 7 min read | KBC Editorial |
| forecasting-capability | Case Studies | 11 Aug 2026 | 5 min read | KBC Editorial |
| marketing-progression | Blog | 8 Aug 2026 | 4 min read | KBC Editorial |
| ipc-bursary-explained | News | 4 Aug 2026 | 4 min read | KBC Editorial |
| employer-das-guide | Guides | 30 Jul 2026 | 6 min read | KBC Editorial |
| leadership-development | Blog | 25 Jul 2026 | 5 min read | KBC Editorial |
| info-session-apm | Events | 17 Aug 2026 | 1 min read | KBC Events |
| earned-value-matters | Blog | 20 Jul 2026 | 5 min read | KBC Editorial |

## Design, assets and reuse

All new styling uses Tailwind classes and current KBC tokens. The implementation reuses PageHero, ResourceCard, NavigationButton, NavigationTabButton, SectionIntro, CollegeCtaPanel and NewsletterForm. Optional ResourceCard props add editorial images, metadata, featured layout and link actions while retaining the existing Bookshop presentation. PageHero gains optional artwork and a class override; existing callers retain their defaults.

Source images were matched by article ID, downloaded from their exact reference URLs and encoded as WebP without replacing their content. The 11 images are under `frontend/public/assets/images/news/` and total 599,798 bytes. Article IDs also form their image filenames. Their decoded dimensions are stored with the page data. A contact sheet of every image was visually inspected. Article artwork is lazy loaded with dimensions; the hero image has high fetch priority.

The newsletter reuses the existing KBC `/newsletter/subscribe/` integration and its consent, validation and Turnstile handling. It does not send subscriber details to the Readdy demonstration endpoint. Its label, placeholder and success text follow the reference. No real newsletter submission was made during QA.

## Verification

- Source-fidelity tests compare all titles, full excerpts, bodies, key points, categories, authors, dates, reading times, order and local image associations against the extracted fixture.
- Static rendering checks cover the listing, all ten detail pages, one H1 per page, complete copy and local CTA destinations.
- Behaviour tests cover all six filters, featured-story exclusion from the grid, related-reading order and route redirects.
- Existing Bookshop tests verify the shared ResourceCard still renders the retained books.
- All 69 project tests pass. TypeScript, ESLint and production build pass. Vite reports an existing large-bundle warning for another page chunk.

Browser preview is unavailable in this session (the browser tool returned “No browser is available”). Full rendered mobile/tablet/desktop layout and live form interaction have therefore not been visually verified. Responsive grid, wrapping, image aspect ratios, header offset and focus treatments were inspected in code; this is not a substitute for browser QA.

## Hero correction after the supplied screenshot

The screenshot exposed an unloaded-stylesheet dependency in PageHero: `kbc-page-hero` and `kbc-hero-title` were defined only in `styles/design-system.css`, which is not imported by the app. Without the section's positioning, its absolute image extended into the surrounding layout; the title also lost its intended size and colour. PageHero now defines its background, positioning, image layers and responsive typography directly with Tailwind. The image is confined to the isolated hero and layered behind the white title and description. No global stylesheet was added.
