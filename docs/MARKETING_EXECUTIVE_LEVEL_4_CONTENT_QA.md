# Marketing Executive Level 4 content and design QA

Source: https://kentbusinesscollege.com/fully-funded-marketing-executive-level-4-apprenticeship/

Retrieved 8 September 2026. The programme content was inventoried before implementation, then extracted into `frontend/src/pages/MarketingExecutiveLevel4Page/data.ts`. The live site's navigation, footer, scripts and styling are replaced by the existing site layout and Associate Project Manager programme components.

## Content inventory

Subsequent user direction replaces the original programme testimonial grid with the exact home-page `FigmaTestimonialsSection`, including its shared data and carousel controls, immediately before the FAQ. The section-navigation order follows that placement. The content fixture retains the original testimonial blocks separately as source history; they are no longer requirements for this page. The duplicate programme testimonial data has been removed.

| Source block | Preserved content | Implementation |
| --- | --- | --- |
| Hero | Exact H1, eyebrow, lead, funding note, September intake, qualification label, four numbered highlights, applied progression, limited places, all three actions | `heroData`, shared `ProgrammeHero` |
| Programme highlights | Four values and their qualifiers, including “Potentially 100%” and “funded subject to eligibility” together | `programmeStats`, `CollegeStats` |
| Practical marketing capability | Heading, introduction and all five capability descriptions | `overviewData`, shared editorial cards |
| Complete support experience | Heading, introduction and all four support descriptions | `learnerExperience`, shared editorial cards |
| Weekly commitment | Heading, full eight-hour explanation, 2h/3h/3h breakdown and all descriptions | `weeklyCommitment`, shared workload card |
| Curriculum | Heading, lead, original journey figure and caption, three numbered modules, source timings, descriptions, all 15 bullets, Soft Start, EPA Gateway, End Point Assessment and Completion | `curriculumJourney`, shared curriculum cards |
| Knowledge, Skills, Behaviours | All three complete descriptions | `knowledgeSkillsBehaviours` |
| EPA workplace evidence | Complete paragraph including recognised frameworks, SMART objectives, data, stakeholder collaboration, time/budget controls and annex evidence | `curriculumJourney.evidence` |
| AI-enabled marketing | Heading, introduction, Human-led/AI-enabled labels, all five workflow labels and all four explanatory cards | `aiMarketingData` |
| Eligibility | Both headings, seven complete criteria, limited spaces notice and action | `eligibilityData` |
| Funding | Heading, lead, training explanation, three bullets, three funding route descriptions, full conditions and action | `fundingData` |
| CIM qualification | Heading, lead, original qualification image, dual-outcome explanation, three distinct assessment routes, professional-title clarification and search terminology note | `cimQualification` |
| Employer value | Heading, introduction and all four benefit descriptions | `employerBenefits` |
| Testimonials | All eight complete quotes, names, roles/organisations, images, five-star ratings and 24 supporting tags | `testimonialData`, shared reference-page testimonial grid |
| FAQs | All six original questions and complete answers | `faqs`, existing `FaqSection` |
| Final CTA | September intake, heading, full description, application link and admissions email with original enquiry subject | `finalCTA`, existing `CollegeCtaPanel` |
| Funding banner | Programme description and “Check Eligibility & Secure Your Place” action retained in final CTA | `fundingNotice` |

## Source distinctions

- The source diagram says “Marketing Impact and Analysis”; the detailed module heading says “Marketing Impact and Planning”. Both remain as published: original diagram plus exact detailed module content.
- “Optimise” appears in the AI workflow, but the source does not provide a separate explanatory card for it. No description was invented.
- The source contains project programme testimonials. These remain exact learner quotes, not Marketing programme claims.
- The source funding banner changes “Only 20 Fully Funded Places Left” to 12 automatically after a hardcoded date. The implementation uses the source's “Limited funded places” wording instead of treating that scheduled count as live availability. Its complete supporting copy and action remain present.
- The official catalogue URL is preserved with HTTPS; verified HTTP 200. Booking and eligibility actions use the existing `/book-session` equivalent. The official long programme slug redirects to `/marketing-executive-level-4`.

## Reuse and verification

- Shared existing hero, navigation, statistics, section headings, editorial cards, checklist, buttons, FAQ and final CTA surface.
- Extracted the reference page's curriculum cards, weekly commitment and testimonial grid into typed shared components. Associate Project Manager also consumes these components.
- All new styling is Tailwind; no dependencies or stylesheets added. The retired Marketing programme implementation was removed.
- An independent source fixture preserves 147 meaningful text blocks. Tests compare those blocks with the rendered page, verify unique IDs and FAQ/section targets, and prevent unrelated reference programme facts leaking into Marketing content.
- Browser checks cover 320, 390, 768, 1024, 1280, 1440 and 1920px; keyboard FAQ interaction; curriculum anchor; intake booking; legacy route redirect; and image loading.
- The static preview cannot serve the Associate Project Manager events API. Its existing event request returns 503 in this preview; Marketing has no API dependency. No programme runtime errors were observed.
