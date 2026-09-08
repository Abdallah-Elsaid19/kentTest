# Chartered Pathway implementation and content audit

Content source: https://kentbusinesscollege.com/chartered_pathway/#kbc-eligibility-form

Captured and re-fetched on 8 September 2026. The official page embeds its content in a React JavaScript widget, which is absent from the normal text-only web extraction. The widget was extracted without running effects, network requests or form handlers. The final re-fetch contained the identical widget.

Widget SHA-256: `de2e68bdd29a5d016dabec9a422309df8165d05d76998992d1e4d123549518a6`

## Content coverage

The independent fixture at `frontend/src/tests/fixtures/charteredPathwaySource.json` captures 512 source blocks, including responsive variants, expert biographies and funding accordion content. The rendered page is checked against every retained fixture block; the employer-logo section, funding accordions and non-functional elective buttons were removed at the user's request and are excluded from that check. Whitespace is normalized; wording is not paraphrased. Repeated mobile/desktop copies share one accessible presentation. Purely decorative numbering and arithmetic separators are excluded from the inventory; credit counts are retained in the curriculum.

| Official section | Implementation |
| --- | --- |
| Hero and authority strip | Shared ProgrammeHero, four source proof points, three trust points, exact actions and funding condition |
| Why Chartered | Four complete capability pillars, including leads, descriptions and closing notes |
| Who for | Eight roles and the complete role-suitability qualification |
| ChPP | Recognised technical-knowledge wording, four progression stages and explicit independent APM award boundaries |
| Experts | Interactive portrait and expert selector in KBC colours; all three summaries remain visible, with complete biographies and specialty tags available in the selected expert's expandable profile |
| Six-credit structure | Four PMO module descriptions, one AI credit, one mutually exclusive Portfolio Management/Earned Value elective, complete occupational-standard note |
| Included support | Six benefits, individual availability, locations, three extra benefits and written-offer caveat |
| Working week | Eight hours, 2/3/3 allocation, full activity lists, four-stage learning cycle, evidence examples and employer release conditions |
| Employer value | Four value areas, outcomes, eight workplace outputs and all six employer responsibilities |
| Testimonials | All three source testimonials; the employer-logo section was removed at the user's request |
| Funding | £27,000 band, levy/non-levy conditions, 2026/27 wording, no apprentice contribution, self-funding and IPC scholarship, KBC fund, first-ten condition and complete written-offer disclaimer |
| Eligibility | Nine indicators, eight exact questions and answer options, three question steps plus result, exact indicative outcomes, back navigation and retained answers |
| Events | Shared live Upcoming Events section used by the home page, with its standard fallback feed |
| FAQ and final conversion | All eleven complete answers and nested lists; the final conversion heading and actions remain, while its supplemental checklist, intake note and contact block were removed at the user's request |
| Contact | Official phone, email, opening hours and address; shared site footer retained |

### Boundaries of the current official content

The live widget does **not** contain a detailed gateway/EPA assignment/report/presentation assessment specification, a separate assessment timetable, programme/module durations, a publication-review date or a standard-version number. These were not imported from the older generic pathway data or parent programme. The apprenticeship training/assessment funding statements and complete ST0845 occupational-capability requirement remain distinct from the APM professional-recognition journey. CPD, ethics, professional practice, written submission, interview and independent award boundaries are preserved wherever the source supplies them.

The source eligibility tool provides local guidance and links to application, information-session and scholarship routes. It does not submit contact details or send an email; this behaviour is preserved. “Not sure” and incomplete answers never produce the positive indication. Final funding/suitability confirmation remains with KBC.

The latest site-wide ordering instruction places the existing testimonials immediately before the main FAQ, following events. Source wording is unchanged.

## Reuse and routing

The page uses the existing Level 6 ProgrammeHero, ProgrammeSection, ProgrammeCardGrid, CollegeFeatureCard, ProgrammeWeeklyCommitment, ProgrammeOutputs, FigmaUpcomingEventsSection, FigmaTestimonialsSection, FaqSection/FaqAccordion, ProgrammeCtaSection, ProgrammeMobileCta, navigation buttons and MainLayout header/footer. Small optional shared props accommodate source text, nested headings and long event titles without changing default content on existing pages. Closed FAQ answers are inert and hidden from assistive technology.

The expert portrait selector, 4+1+1 elective presentation and source-specific eligibility flow use pathway presentation components. The two specialist electives are informational cards; their non-functional selection buttons were removed at the user's request. Shared ProgrammeCopy and ProgrammeSectionFooter render repeated paragraphs, lists, notes and actions. All new styling is Tailwind; no stylesheet, dependency or entire-page client boundary was added. This repository uses React/Vite, not Next.js App Router.

Routes: `/chartered-pathway`, `/chartered_pathway`, and the `chartered` / `chartered-pathway` children of `/college-of-project-controls-and-project-management` and `/project-controls-professional-level-6`. Direct routes retain `#kbc-eligibility-form`. The Level 6 Chartered module panel links to the new page.

## Verification and remaining limitation

- TypeScript, full frontend lint and production build pass.
- Source-fidelity, heading/ID/anchor accessibility, content-leakage and eligibility-result tests pass.
- Existing Level 6, Level 4 shared-component, programme-event and both marketing programme regression tests pass.
- The build reports an existing large-chunk warning elsewhere in the application; the Chartered route is lazy-loaded.
- Static responsive review covers wrapping, single-column mobile layouts, nested heading order, readable intrinsic card heights, keyboard-operable radios, focus indicators and reduced-motion handling.
- **Browser visual verification is not complete.** The available computer-use service reports no browsers, and its in-app browser is unavailable. Side-by-side comparison, 375/768/1280/1440/1920-pixel screenshots, runtime console inspection and measured overflow checks require an available browser. No pixel-perfect or visually verified claim is made.

Run the relevant tests with:

```text
npm.cmd run type-check
npm.cmd run lint
npm.cmd run build
npm.cmd test -- src/tests/charteredPathway.test.tsx src/tests/projectControlsLevel6.test.tsx src/tests/programmeEvents.test.tsx src/tests/marketingManagerLevel6.test.tsx src/tests/marketingExecutiveLevel4.test.tsx
```

Run these commands from `frontend/`.
