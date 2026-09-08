# Marketing Manager Level 6: content and implementation QA

Content source: https://kentbusinesscollege.com/marketing-manager-level-6-apprenticeship/

Captured and checked again on 8 September 2026. Design reference: the repository's Marketing Executive Level 4 page. Public route: `/marketing-manager-level-6`; the original `/marketing-manager-level-6-apprenticeship` slug redirects to it.

## Subsequent user change

The user also requested the existing Upcoming Project Management Professional events, Recognition & standards and Employer partnerships sections directly after Employer value, in that order. These shared components are now called before FAQs, with matching navigation links. This explicit addition is excluded from the programme-specific Level 4 leakage check.

The final “Email the admissions team” action now opens a pre-addressed email directly. The final “Download the catalogue” action was removed at the user's request; the hero catalogue link remains available.

The user requested the home testimonials exactly as they appear on the home page. Marketing Manager now calls `<FigmaTestimonialsSection />` without any custom props, immediately before FAQs. Its former source-specific testimonial data has been removed. The content regression check excludes the historical source testimonial region and separately verifies the exact default home component markup. The original inventory and initial QA below document the implementation before this explicit override.

## Source inventory

The independently extracted fixture `frontend/src/tests/fixtures/marketingManagerSource.json` records 190 meaningful blocks from 12 programme sections. The render test compares every block with the rendered page, normalising HTML entities and layout whitespace only.

| Source section | Blocks |
| --- | ---: |
| hero kbc-l6-hero | 17 |
| trust | 8 |
| overview | 17 |
| curriculum | 33 |
| disciplines-title | 15 |
| cim | 8 |
| ai-title | 14 |
| funding | 14 |
| learner-testimonials | 35 |
| employer-title | 11 |
| faq | 14 |
| final | 4 |

The inventory covers the complete H1 and introduction, funding note, September 2026 intake, four hero pillars, four programme statistics and their notes, strategic leadership feature and four bullets, four strategic capability cards, four curriculum modules with all 16 bullets, progression paragraph and four stages, six core disciplines, CIM pathway and both evidence/CPD cards, the full Chartered Marketer disclaimer, all four AI actions, all five professional controls, seven eligibility criteria, limited places messaging, eight complete testimonials with names/roles/tags, four employer benefits, six complete FAQs and the final conversion copy.

The two-step enquiry preserves the source labels, fields, options, optional phone number, required employment fields, programme value, help topics, questions, consent and funding disclaimer. Its submission uses the existing contact endpoint and CAPTCHA component. No new endpoint or email delivery logic was introduced. Page-specific text and field definitions live in `data.ts`.

Source booking links map to the existing `/book-session` page. The source catalogue uses HTTPS with the same PDF path; verified HTTP 200 and `application/pdf`. The source's ?Email the admissions team? button opens the enquiry dialog. Mobile actions retain ?Check eligibility? and ?Funding places?.

The source testimonials explicitly include references to other KBC programmes, including Level 4. Those original quotes are preserved. The automated Level 4 leakage check excludes the testimonial region, and confirms that Level 4 qualification names, invented durations and the previous page's substitute modules are absent from programme copy.

The current site header and footer remain supplied by MainLayout, as required by the design reference. The old live site's global menus, chat widget and generic prefooter are not duplicated in the programme page. The testimonial placement follows Level 4: immediately before FAQs. Decorative source lettering is represented by the existing numbered card system.

## Reuse and implementation

- Existing ProgrammeHero supplies the Level 4 hero layout, centered funding badge, intake card, CTA placement and responsive behaviour.
- Existing CollegePageNav, CollegeStats, ProgrammeSection, ProgrammeCardGrid, ProgrammeChecklist, FaqSection and CollegeCtaPanel remain the foundation.
- Curriculum, eligibility, qualification and final CTA patterns were extracted from Level 4 into typed shared components. Level 4 now consumes those same components with its original data.
- The existing home testimonial carousel accepts optional source reviews and a section heading. Source reviews use natural card height, full quotes and tags, keyboard controls, pause control and reduced-motion support. Existing callers retain their home data and compact presentation.
- The existing ProgrammeInterestDialog supports optional source-defined enquiry steps. Validation, mutation, consent, CAPTCHA and native dialog behaviour are reused. Focus wraps within the dialog; Escape closes it and restores focus to its trigger. Additional eligibility details are included in the existing contact message payload.
- The existing Associate Project Manager mobile CTA was extracted into ProgrammeMobileCta and reused with programme-specific action data.
- All new presentation is Tailwind. The previous Marketing Manager `page.css` and its CSS import were removed. No new package dependencies or page-specific stylesheet.
- The official CIM Level 6 logo and strategy photo are local assets. Existing KBC hero, testimonial portraits and canonical watermark assets are reused.

## Validation

- TypeScript: passed.
- ESLint: passed, zero warnings.
- Production build: passed. Vite still reports its existing site-wide large-chunk advisory; the Level 6 page is lazy-loaded and the enquiry dialog is a separate lazy chunk.
- Vitest: 30 tests passed across 9 files, including the Level 4 regression coverage and 5 new Level 6 content, navigation, curriculum, form and payload checks.
- Chromium responsive audit: 320, 390, 768, 1024, 1280, 1440 and 1920 pixels; no horizontal document overflow.
- All eight source carousel slides checked on mobile; full quotes fit without clipping.
- FAQ Enter/Space interactions passed.
- Enquiry required fields, both steps, back-navigation value persistence, required consent, keyboard focus wrapping, Escape and focus return passed.
- Enquiry submission was intercepted locally and checked for the correct Level 6 programme, cohort and eligibility fields. No real enquiry was sent. Live email delivery and CAPTCHA acceptance remain dependent on the existing backend configuration.
- Browser runtime errors: none in the mocked-API preview.
- Reference screenshots for both Level 4 and Level 6 are in the ignored local directory `tmp/marketing-manager-qa/`; responsive/interactions report in `report.json`.
