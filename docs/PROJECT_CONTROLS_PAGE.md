# College of Project Management & Controls

The college page replaces the existing implementation at
`/project-controls-professional-level-6`. The router, shared header and shared
footer are unchanged. The entry file is
`frontend/src/pages/ProjectControlsPage/page.tsx`.

## Content reference

Source: https://readdy.cc/preview/e12511ee-ada1-4d22-bf99-373e277dad2d/13488680/college-of-project-controls

Reference inspected on 6 September 2026. Its page title is **College of Project
Management & Controls**. Programme descriptions, durations, funding labels,
statistics, testimonials and FAQs preserve that reference's wording.

| Order | Component | Content included |
| --- | --- | --- |
| 1 | HeroSection | College introduction, both CTAs, seven subject labels, 2026 cohort announcement |
| 2 | OverviewSection | Both introductory paragraphs, approach image/caption, four statistics |
| 3 | ProgrammesSection | Associate Project Manager and Project Manager cards, with levels, durations, funding details, learning outcomes, ideal audiences and programme links |
| 4 | CapabilitiesSection | All nine capability titles and descriptions |
| 5 | BenefitsSection | All six reasons to choose the college and four outcome statistics |
| 6 | TestimonialsSection | All six complete quotations, names, roles and reference portraits |
| 7 | CareerPathwaysSection | All 12 career roles, levels and descriptions |
| 8 | FAQSection | All eight complete questions and answers, contact CTA |
| 9 | FinalCTASection | Complete closing copy, enquiry and eligibility CTAs |

Static content and Lucide icon mappings are in `data.ts`. Section components
and their Tailwind layout constants are in `component/`. Shared
`FigmaSectionHeading`, `NavigationButton` and `ArrowLink` provide the Home-page
heading and interaction conventions. The FAQ uses native keyboard-accessible
disclosures and preserves FAQ structured data through `RouteMeta`.

The supplied hero is stored at
`frontend/public/assets/images/project-controls-hero.webp`. Supporting reference
images are local JPEG assets in `frontend/public/assets/images/project-controls/`.
No runtime dependency on Readdy is required.

## Verification

- Verified the current two-card programme layout alongside all retained college
  sections, including answers in closed FAQ disclosures.
- Checked 320, 390, 768, 1024, 1440 and 1920-pixel viewports: no horizontal
  overflow or broken page images.
- Checked the programme anchor, FAQ opening/closing with Enter, a single H1,
  document title, and the existing contact/funding destinations.
- Screenshots and the browser audit report are in the ignored
  `tmp/pc-qa/results/` directory.
