# All Programmes content and implementation audit

## Subsequent catalogue change

At the user's subsequent request, the standalone “Apprenticeship” label was removed from card metadata rows. Entity types remain in the registry and type filter.

Marketing durations were rechecked and added from the current [College of Marketing page](https://kentbusinesscollege.com/college-of-marketing-2/), whose programme cards explicitly pair the September 2026 intake with **12 months for Marketing Executive Level 4** and **16 months for Marketing Manager Level 6**. Each registry record stores that field's `durationSourceUrl`. Dedicated detail pages do not give a definitive total; their linked charters describe learning/assessment stages rather than a clear overall duration. The College is used as the supporting source, ahead of conflicting older/local College and Home numbers. The detail page still confirms the individual schedule at enrolment. This supersedes the original duration-omission decisions below.

MBA Diploma Level 7 was removed from All Programmes at the user's explicit request. The current listing has five programmes; Leadership, Level 7 and Qualification filter options disappear automatically because filters derive from the registry. The six-programme discovery audit below is retained as historical source evidence, not the current display inventory.

Reviewed 8 September 2026. Route: `/programmes`. Registry: `frontend/src/data/programmes.ts`.

## Discovery and source priority

Reviewed the active React Router route table, all dedicated programme data files, the three College pages, Home programme sections, learner programme cards, shared UI, navigation/footer and the previous CMS-backed listing. The CMS `Programme` type describes API responses, not the current dedicated pages; it remains unchanged. The local listing now uses the lightweight `ProgrammeSummary` registry, without importing long-form curricula or making runtime website/CMS requests.

Public discovery covered the [Home page](https://kentbusinesscollege.com/), [Project College](https://kentbusinesscollege.com/college-of-project-controls-and-project-management/), [Marketing College](https://kentbusinesscollege.com/college-of-marketing/), [Leadership College](https://kentbusinesscollege.com/college-of-leadership-2/), [Courses](https://kentbusinesscollege.com/courses-2/), [Paid Courses](https://kentbusinesscollege.com/paid-courses/), programme detail links and supplementary site searches. Sitemap and free-course URLs returned extraction errors; this is a limitation, not evidence that an offering is retired.

The six records below are the verified catalogue. Conflicting or unfinished paid-course pages are recorded separately rather than presented as verified offerings. Therefore this audit does not assert that every still-public URL represents a current enrolment option.

## Per-programme checklist

All six records have checked titles, College, entity type, optional level, source-derived summary, duration/intake decisions, funding/qualification/recognition decisions, existing image mapping and destination. A dash below means deliberately omitted, not unavailable to learners.

| Record and current canonical source | College / type / level | Duration / next intake | Funding / qualification / recognition | Image and destination |
| --- | --- | --- | --- | --- |
| [Associate Project Manager Level 4](https://kentbusinesscollege.com/associate-project-manager-level-4/) | Project Controls and Project Management / apprenticeship / 4 | 12 months; September, as labelled in the current hero | Fully funded for eligible learners; PMP preparation, not automatic PMP certification | Existing College card `learner-home/associate-project-manager.webp`; `/associate-project-manager-level-4` |
| [Project Controls Professional Level 6](https://kentbusinesscollege.com/project-control-professional-level-6/) | Project Controls and Project Management / apprenticeship / 6 | 27 months; September, as labelled in the current hero | Fully funded for eligible learners; Chartered route supports APM technical-knowledge assessment, separate APM assessment required for ChPP | Existing Home/sector image `programme-project-controls.jpg`; `/project-controls-professional-level-6` |
| [Marketing Executive Level 4 Apprenticeship](https://kentbusinesscollege.com/fully-funded-marketing-executive-level-4-apprenticeship/) | Marketing / apprenticeship / 4 | —; September 2026 | Limited funded places, eligibility and terms apply; CIM Level 4 Certificate in Professional and Digital Marketing | Existing detail hero `programme-marketing-executive.jpg`; `/marketing-executive-level-4` |
| [Marketing Manager Level 6 Apprenticeship](https://kentbusinesscollege.com/marketing-manager-level-6-apprenticeship/) | Marketing / apprenticeship / 6 | —; September 2026 | Limited funded places, eligibility and terms apply; CIM Diploma Level 6 in Professional and Digital Marketing | Existing detail hero `programme-marketing-manager.jpg`; `/marketing-manager-level-6` |
| [MBA Diploma Level 7](https://kentbusinesscollege.com/mba-2/) | Leadership / qualification / 7 | —; — | No funding badge. OTHM Level 7 Diploma in Strategic Management and Leadership; MBA top-up is separate and subject to admissions | Existing Home programme image `programme-leadership.jpg`; live canonical public URL because `/mba-diploma-level-7` is currently `EmptyPage` |
| [AI in Project Controls Certificate](https://kentbusinesscollege.com/ai-in-project-controls-certificate/) | Project Controls and Project Management / certificate / — | 4 months; September 2026 | No generic funding badge or inferred qualification level | Existing detail hero `ai-project-controls-ai-right-hd-v2.png`; `/ai-in-project-controls-certificate` |

Descriptions are concise extracts or paraphrases of each current introduction. Marketing titles use the apprenticeship names identified in their own curriculum/FAQ, rather than marketing campaign headlines. The leadership card uses the current detail-page programme name, with the formal OTHM qualification identified separately and no implication that the diploma itself awards an MBA.

## Conflict and duplicate decisions

- The newer `/associate-project-manager-level-4/` detail page wins over `/college-of-project-management/associate-project-manager-level-4-with-pmp/`: 12 months, not 11 months/44 weeks; September cohort, not the older page's October label.
- The current Project Controls detail page wins over `/college-of-project-management/project-control-professional-level-6-2/` and older College URLs. Singular/plural aliases represent one offering.
- The current marketing pages do not state a reliable total duration. Earlier Home/College claims of 12/18 months were not copied or calculated from curriculum stages.
- The MBA page contains a redesigned introduction plus older duplicated blocks (including six-month wording), while the College/Home also contain other duration/funding claims. No duration, next intake or funding badge is asserted. Its current introduction and the current College qualification wording support the retained fields.
- Operational, Strategic and Chartered remain routes of the same Project Controls Professional Level 6 apprenticeship. The dedicated [Chartered page](https://kentbusinesscollege.com/chartered_pathway/) and its local source audit explicitly describe that parent relationship. No three-card duplication; the parent card links to the full pathway comparison experience.
- AI is included because its live dedicated page has its own proposition, intake, four-month delivery, curriculum, capstone and enrolment enquiry. Its presence within apprenticeships is not used to infer a level, independent funding or professional-body award.
- PMP, CAPM, APM Risk, Scheduling, EVM, Portfolio Management and Certified PMO units in pathway tables are not automatically separate top-level cards. CIM qualifications embedded in marketing apprenticeships are not duplicate offerings.
- Strategic Management, Human Resources, Strategic Leadership, Strategic Marketing, Advanced Research Methods and Strategic Financial Management are explicitly the six diploma modules, not six additional diplomas.
- Events, news, guides, awards, bookshop, governance, funding pages and generic CMS content routes are excluded.

## Unverified paid-course candidates

The public Paid Courses page was also inspected. Most cards have non-functional “View Details” text rather than a usable detail link: Advanced Project & Logistics Management; Procurement Risk & Contract Management; Operations & Information Management for Project Managers; Planning, Controlling & Leading a Project; PMP or APM Project Professional; Managing Successful Practitioner; Risk Management Level 1 and 2 APM; Project Planning and Control; PMI Schedule Professional.

Two linked pages were opened directly:

- [Portfolio Management](https://kentbusinesscollege.com/portfolio-management/) mixes an investment/wealth-management headline with an EVM description, conflicting 10/14-hour values and business portfolio qualification material.
- [Cost Engineering and Earned Value Management](https://kentbusinesscollege.com/cost-engineering-and-earned-value-management/) mixes a project-controls curriculum with investment-masterclass copy and unrelated MBA testimonials.

These are not declared retired. Their identity/current status cannot be confidently established from these inconsistent detail pages, and no corresponding implemented programme routes exist in the repository. They are withheld from the verified registry pending corrected authoritative content. This is an explicit completeness limitation; adding them based only on older listing titles would breach the no-guessing requirement.

## Reuse, maintenance and checks

- Reused `PageHero`, `ProgrammeShowcaseCard`, `EmptyState`, `NavigationButton`, `CollegeCtaPanel`, shared College container and `RouteMeta`; existing MainLayout supplies Header, Footer and skip link.
- Extended the existing card with optional metadata/College/type/alt props and optional duration/level; existing College and learner callers remain compatible.
- One typed metadata registry; search/filter options and counts derive from its records. No dependencies or CSS files added. The page is an orchestration component within the existing Vite/React Router SPA, not Next.js.
- URL state combines search (also accepts `q`), College, level and type. Select changes create history entries; typing replaces the current entry. Clearing preserves unrelated tracking parameters. Invalid filter values yield zero results visibly rather than silently showing unfiltered cards.
- Intake labels have an explicit review expiry. September labels disappear after 30 September 2026; the expiry is a display safeguard, not an invented enrolment deadline. Update the verified label/expiry together when a new intake is confirmed.
- Existing image files checked on disk. Programme URLs verified against implemented route declarations; the diploma uses a normal external anchor destination. No placeholder links in listing content.
- Automated catalogue tests cover the six-offering inventory, deduplication, all filters, combined search, no results, URL clear/update, intake expiry, omitted facts, routes, one H1, article semantics, labels and crawlable links.
- Validation passed: TypeScript, repository lint, production build and all 77 tests across 16 files. Vite also reports the existing large-chunk advisory; it does not fail the build.
- Responsive implementation: stacked controls and one card column on mobile; two card columns from 768px; three from 1280px; 1240px content maximum, `min-w-0` fields, wrapping metadata and stable image aspect ratios. Existing focus and reduced-motion patterns retained.
- Live visual/keyboard/browser-history QA could not run: the connected browser tool reported “No browser is available.” Responsive layout is reviewed in code and static render tests only; no screenshot-based verification is claimed.

Add a verified programme object and its working detail destination to extend the catalogue. Do not add cards or filter categories separately. Source URL and verification date belong on every record. Long-form programme content remains in page-local data files.
