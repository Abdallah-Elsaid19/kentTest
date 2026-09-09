# Awards content and implementation QA

Source: https://readdy.cc/preview/e12511ee-ada1-4d22-bf99-373e277dad2d/13488680/awards

Captured 8 September 2026 from the public page's complete JavaScript implementation, including its shared closing CTA. Browser access was unavailable. The source page and bundle were fetched again after implementation; the bundle SHA-256 remained `5BCEA8E32D8084672F5CC208524E059AE3948D6EDD6C38DC037DD8550D7BBFAD`.

## Content inventory

The independently captured source text is in `frontend/src/tests/fixtures/awards-source.json`. Production content is in `frontend/src/pages/AwardsPage/data.ts`.

- Hero: “Recognition & Standards”; “Recognition that reflects the quality we deliver”; both supporting paragraphs; original trophy background image. No hero CTA in the source.
- Record introduction: “Our record”; “Standards, recognition & professional relationships”; full introduction and the note explaining the labels.
- Five filters: ALL, QUALITY STANDARDS, PROFESSIONAL RELATIONSHIPS, CERTIFICATIONS, AWARDS & RECOGNITION.
- Three groups: Quality & organisational standards; Professional relationships & approved status; Awards & external recognition. All three group descriptions retained.
- Eight recognitions, each retaining its exact category, title, awarding body, year and full description:

| Recognition | Body | Year | Category |
| --- | --- | --- | --- |
| Matrix Standard | The Growth Company | 2025 | QUALITY STANDARD |
| Investors in People — Silver | Investors in People | 2024 | PEOPLE STANDARD |
| APM Corporate Partner | Association for Project Management | 2026 | PROFESSIONAL PARTNERSHIP |
| CMI Approved Centre | Chartered Management Institute | 2025 | APPROVED CENTRE |
| CIM Accredited Study Centre | Chartered Institute of Marketing | 2025 | ACCREDITED STUDY CENTRE |
| Apprenticeship Provider of the Year — Finalist | Kent Business Awards | 2025 | AWARD FINALIST |
| Cyber Essentials Certified | National Cyber Security Centre | 2025 | CYBER SECURITY CERTIFICATION |
| Living Wage Employer | Living Wage Foundation | 2024 | EMPLOYER STANDARD |

- Benefits: “Why recognition matters”; “What this means for learners and employers”; all three cards (For learners, For employers, For professional development) and complete supporting text.
- CTA: “Experience KBC”; “See what recognised quality looks like in practice”; full description; Explore programmes, For employers, Speak to KBC.
- SEO: source title and description retained.
- No individual recipients, portraits, organisation logos, programme cohorts, card links or captions occur in the source Awards content. None added.

## Deliberate adaptations

- Corrupted U+FFFD punctuation in the published source is repaired: `KBC�s` → `KBC’s`; spaced replacement characters → em dashes. The body/year visual separator uses a middle dot. All wording and recognition limitations are retained.
- The source employer CTA `/for-employer` maps to the existing `/employers` route. `/#programmes` and `/contact` are retained.
- The source hero image is stored locally, recompressed from approximately 699 KiB to 142 KiB, preserving its 1792 × 1000 dimensions and composition.
- Source icons map to installed Lucide icons. The project Header/Footer come from MainLayout.
- Funding and Awards share CollegeHeroSurface's funding variant, retaining Funding's original overlay, sizing and watermark. Funding's original section anchor is preserved.
- Reuse: SectionIntro/FigmaSectionHeading, Funding container/section tokens, CollegeFeatureCard, NavigationTabButton, NavigationButton and CollegeCtaPanel. Only the recognition filtering section is Awards-specific.
- New styling uses Tailwind utilities; no stylesheets, inline styles or dependencies added.
- Follow-up layout: all three recognition groups use the shared SplitDetailTabs component, with a left-hand selector and a dark purple detail panel. On smaller screens the selector sits above the panel. All eight descriptions remain in their associated panels; category filtering falls back to the first available item. Tabs support Up/Down, Home/End and visible keyboard focus. The last selector extends to the bottom of each panel without an extra bottom divider.

## Verification and limits

- Source fixture assertions cover every source copy block, all eight recognitions, group descriptions, benefit cards and CTAs.
- Static rendering checks one H1, eight recognition headings, eleven articles, all five filter controls, CTA destinations and the hero asset path.
- Regression test covers Funding's hero content, image, CTA and section anchor after surface extraction.
- Full TypeScript check, full lint, focused Awards tests and production build run.
- Responsive code provides full-width wrapping mobile filters, two-column recognition groups from tablet widths, natural-height cards, wrapping badges, responsive hero typography and stacked CTA buttons.
- Browser-based source scrolling, filter click/keyboard interaction, console checks, overflow checks and side-by-side visual inspection at mobile/tablet/laptop/desktop/large-desktop sizes could not be completed: neither a connected browser nor the in-app browser was available. Responsive visual QA remains outstanding.
