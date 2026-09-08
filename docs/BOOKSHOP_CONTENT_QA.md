# KBC Bookshop implementation and source QA

## Hero cover

The hero displays the supplied WebP cover as a static image. At the user's request, the Lightswind 3D viewer, rotation controls, and the light background panel around the hero book were removed.

The user subsequently supplied `d0589fa8f0be41f2864944972b4dc1ef.webp` from Supabase for the hero. This transparent 1292 × 1218 image contains the book and purple-and-gold olive branches together. It is displayed uncropped with no additional branch overlay. Its image data is separate from the catalogue covers, so the replacement applies only to the hero.

The viewer-only React Three dependencies and their Vite prebundling entries were removed. The project's existing `three` dependency remains for its other uses.

Current images: the user's Supabase WebP covers replace the local files throughout the hero, featured section, catalogue and details. `2690dd5dafe74a679b3f56f3f268b33f.webp` is Marketing Strategy & Planning; `a6f2eabd6d8a47b6a2844dca0d7fae06.webp` is Social Media — Marketing Executive Handbook. Both were downloaded for visual verification and retain 1122 × 1402 dimensions. The three obsolete local book-cover assets were deleted. Original source asset references below are historical. Category buttons were also removed at the user's request; the search field remains.

Latest user revision: Social Media Marketing — Study Edition was removed from the live product data, catalogue, search and details on 8 September 2026. The catalogue now displays the two retained books in two columns on desktop. The original three-book inventory below records the supplied source; the source fixture is preserved for provenance.

Source: `C:/Users/DELL/Downloads/kbc_bookshop.html`, inspected in full on 8 September 2026. The attachment contained the implementation brief; the referenced HTML was located in Downloads.

Design reference: the current Awards page, excluding its hero, as explicitly requested. The Bookshop hero uses a product-led split composition with the original featured cover, the project palette and the shared Header. The Awards page itself is unchanged by this task.

## Source inventory

- SEO: Kent Business College Bookshop; original marketing-handbooks description.
- Hero: Kent Business College; KBC Bookshop; complete proposition; Browse latest releases; View featured title; original strategy/planning cover.
- Featured: Featured; Marketing Strategy & Planning; complete introductory sentence; Featured title badge; full Level 4/Level 6 description; Details & pricing; original strategy/planning cover.
- Applied learning: KBC; Built for applied learning.; full supporting sentence.
- Catalogue: Book catalogue; Latest releases; full introductory copy; Search books; All, Level 4, Level 6, Social media.
- Every book preserves its title, kicker, categories, search keywords, card description, separate modal description and correct artwork in one `Book` record.

| ID | Title | Category | Cover |
| --- | --- | --- | --- |
| social | Social Media — Marketing Executive Handbook | level4, social | social-media-marketing-executive.jpg |
| strategy | Marketing Strategy & Planning | level4, level6 | marketing-strategy-planning.jpg |
| social-study | Social Media Marketing — Study Edition | level4, social | social-media-study-edition.png |

- Modal metadata: Format / Handbook; Availability / Contact KBC; Pricing / On request; Request a copy.
- Closing CTA: Need a handbook for your cohort?; Back to top. Request a copy additionally reuses the source action and the established contact route.
- Source modal and card descriptions differ. Both versions are preserved as distinct fields on each product, rather than maintaining separate product arrays.

## Assets

Eight embedded image occurrences resolve to three unique source images. Covers were visually inspected. No artwork, title, person, date or other cover content was replaced or cropped.

The two opaque 1122 × 1402 PNG covers were encoded as JPEG at quality 90, retaining their dimensions. The small study-edition PNG remains unchanged at 309 × 433. Combined image weight fell from approximately 3.32 MB to 359 KB. Images render with object-contain; the hero uses fetchPriority high and catalogue covers load lazily.

Original source image SHA-256 hashes:

- Strategy: `94511fe6d984ad3fda3034f37b3bed2eda45e411c2d3996bcbab7c672a8ffd2e`
- Social: `3c176e5f75de5240cd89f3172d00a710c15c657efaf19cce4da42a615d9184b8`
- Study: `119dbc61348eba510e0978ded5dcd012f3ce49825ae1dda5cf00492a6aae9e90`

`frontend/src/tests/fixtures/bookshop-source.html` retains the source HTML and behaviour for comparison, with the style block removed and base64 values replaced by local asset paths. It is a test fixture, not a public page.

## Prototype decisions

The prototype CTA paragraph is retained only in the source fixture:

> Use this page as a ready-to-customise bookshop template. Product links, prices, checkout and stock status can be connected to your preferred ecommerce system.

This is a developer instruction, so no replacement public paragraph was invented. The original cohort heading and Back to top action remain. The standalone demo footer and navigation are replaced by the project's shared Header/Footer. The prototype alert is replaced by a link to `/contact`, which contains the established KBC contact form. This does not automatically prefill a book into the external form.

No cart, checkout, prices, reviews, ratings, stock claims, author metadata or legal copy were invented.

## Architecture and behaviour

- `/bookshop` is the canonical route. Existing `/store` and source-compatible `/textbooks` redirect there. Textbooks & Materials navigation points to Bookshop.
- Source product/content data is in `pages/BookshopPage/data.ts`.
- Search is trimmed and case-insensitive, and searches titles, kickers, both descriptions, source keywords and category labels. Search and category selection combine with AND semantics.
- No-result searches render the shared EmptyState, a live result announcement and a reset action.
- Shared UI: SectionIntro/FigmaSectionHeading, container/section tokens, NavigationButton, NavigationTabButton, EmptyState, CollegeCtaPanel and MainLayout.
- Existing programme dialog behaviour was extracted into shared Dialog and reused by ProgrammeInterestDialog and BookDetails. Native modal semantics provide background isolation and Escape closing, with explicit focus wrapping, trigger-focus restoration, scroll locking and backdrop dismissal.
- Existing cards inspected: EventCard and ProgrammeShowcaseCard require event/programme metadata and crop imagery. ResourceCard provides a reusable cover-preserving resource presentation without fake metadata.
- No new dependencies, CSS files, inline styles or copied source styles in production components.

## Validation

- Full TypeScript check: passed.
- Full ESLint check: passed.
- Production build: passed; existing project-wide chunk-size warning remains.
- Bookshop tests: 6 passed (source sections/cover associations, each modal's exact description/metadata, combined search/filter cases, reset-equivalent baseline).
- Awards tests: 2 passed.
- Marketing Manager Level 6 tests: 5 passed, including the programme enquiry rendered through the extracted Dialog.
- Three source cover images visually inspected; responsive code checked for wrapping, object-contain images, natural card heights and scrollable mobile dialogs.
- Browser discovery returned no browsers or apps. Desktop/mobile screenshots, side-by-side visual comparison, live filter clicks, Escape/focus/backdrop interaction and console/overflow checks remain unverified in a browser.
