# Project Controls Professional Level 6

## Sources and routing

- The Level 6 hero cohort cards now take “Save your place” directly to `/book-session` for an information session; the interest dialog is no longer enabled on this page.
- Latest requested adjustments: removed Teachers and subject experts, the static Information events cards and the social-follow section. The hero now uses the same image as Associate Project Manager Level 4. Live programme-filtered upcoming events remain, with the navigation anchor updated accordingly. The inventory below records the original source coverage before these requested removals.
- Content: https://kentbusinesscollege.com/project-control-professional-level-6/, read in full on 7 September 2026.
- Design reference: `frontend/src/pages/AssociateProjectManagerPage/`.
- Hero: the user-supplied `e7e3d73d3c794736af1d6603d88313d6.webp` Supabase image.
- Canonical application route: `/project-controls-professional-level-6`.
- The official singular `/project-control-professional-level-6` spelling redirects to the application route. Existing pathway aliases still resolve to the college pathway pages.
- The college itself remains at `/college-of-project-controls-and-project-management`.

## Content inventory

| Official section | Implementation and retained content |
| --- | --- |
| Hero and cohort selection | Shared `ProgrammeHero`; official introduction, funding qualification, audience, catalogue, January/April/September, 27 months, six credits, three pathways, potential £34,000 support, tailored route and Level 7 access. |
| Register interest | Lazy native dialog with name, work email, phone, employer, optional job title, selected cohort and consent. Uses the existing contact API and Turnstile component. |
| Overview | All three capability explanations and the full professional recognition caveat. |
| Who it is for | Three groups, all 12 role descriptions and the cross-sector introduction. |
| Structure | One-month soft start, six credits over 24 months, two-month closing workshops; Level 7 access, Saturday 09:00–11:00, six three-month modules over 18 months. |
| Pathways | Operational, Strategic and Chartered route descriptions and all 18 course/body/credit/duration rows. Operational and Strategic are menus from which six credits are selected; their option lists are not claimed to total six credits. |
| Cohort orientation | Both sector orientations, complete descriptions and tags. |
| Workplace outputs | All 12 outputs and the source workplace image. |
| Delivery and assessment | Prepare, Explore, Apply, Reflect; all assessment and employer-involvement requirements. |
| Workload | 860 off-the-job hours; 2 hours live teaching, 3 hours LMS activities, 3 hours portfolio work; confidentiality note; both monthly submissions; monthly coaching, ten-week reviews and employer support. |
| Alternative route | Full IPC 50–75% support explanation, eligibility qualification and admissions guidance. |
| Teachers | All five source profiles, complete biographies, specialisms, portraits and LinkedIn links. |
| Coaches | All four source profiles, complete biographies, portraits and LinkedIn links. |
| Benefits | All three categories and all 17 benefit list entries. |
| Funding | £27,000 DfE and £7,000 IPC packages; all ten inclusions and the complete eligibility/professional recognition qualification. |
| Events | All three source event formats with their images and descriptions, Eventbrite link, plus the shared live upcoming-events component filtered by the phrase `project control`. No invented dates or unrelated fallback events. |
| Employers | Six sectors and all 23 source logos; follows events as requested for the programme design family. |
| Next steps | One-to-one session, Eventbrite events and email to Alice Saunders; all supporting copy and actions. |
| FAQ | All 12 questions and complete answers, including the cross-level Level 3/CAPM question and chartered-status conditions. |
| Social | All five social links and supporting copy. |
| Global navigation/footer | Existing application header/footer, not the old site's navigation and layout. |

## Source corrections

- The workload source contradicts itself: its summary says eight hours and its breakdown totals 2 + 3 + 3, while one introductory sentence says seven. The new page uses eight in that sentence. The separate FAQ's wording of around 7–8 hours is preserved as written.
- Corrupted apostrophes, replacement pound glyphs and a control character between Chartered module numbers and titles were repaired without changing meaning.
- The catalogue URL uses HTTPS instead of the source's HTTP spelling.
- Source event cards describe session formats rather than confirmed dates; these are retained as formats. Actual upcoming dates come from the existing events API.

## Reuse and behaviour

`components/programme/` contains the extracted hero and section heading, plus typed section, grid, benefits, partners, people, workload, outputs, funding and next-step presentations. Level 4 uses the shared hero, headings, audience/delivery grids, benefits, partners, outputs and workload with its own data. Its programme-specific 12-month and 370-hour values remain separate.

The only Level 6-specific presentation is `component/PathwaysSection.tsx`, because the three credit tables differ materially from the Level 4 pathway. Native details/summary exposes all routes with keyboard support. Tables become stacked module rows on narrow screens without requiring horizontal scrolling.

All new styling is Tailwind. Existing shared `CollegeHeroSurface`, `CollegeFeatureCard`, `CollegeCtaPanel`, `CoachCard`, `EventFormatCard`, `FaqSection`, `CollegePageNav`, navigation controls and events infrastructure are reused. Decorative patterns follow `KBC_BRAND_PATTERNS.md`.

## Verification

- Full frontend lint and TypeScript checks pass. All 17 tests across six files pass, and the production build succeeds. The build still reports its existing large-chunk warning.
- Regression tests cover one H1, unique IDs, valid section anchors, the complete pathway table data, source counts/facts, Level 4 data isolation and the interest-form payload.
- Interest submissions are tested without sending a real enquiry.
- Interactive browser and side-by-side visual QA could not be completed in this session: the browser connector exposes no browser, and the native computer-use pipe is unavailable. Responsive styles and semantic server-rendered output were reviewed in code; this is not a substitute for a browser visual pass.
