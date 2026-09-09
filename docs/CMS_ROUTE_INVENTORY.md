# Dropdown route-to-CMS inventory

Audit of `src/components/layout/Header.tsx`, `MobileMenu.tsx`, `src/data/navigation.ts` and `src/router/router.tsx`, 2026-09-09. Desktop uses `primaryNavigation`; Header maps that same configuration to mobile items. This is internal documentation, not a public audit screen.

| Navigation group | Label | Destination | Internal? | React page / source | Previous content source | CMS key | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Home | Home | `/` | Yes | `pages/home/page.tsx` | Existing Neon CMS | `home` | Existing |
| Colleges | Project Controls and Project Management | `/college-of-project-controls-and-project-management` | Yes | `src/pages/ProjectControlsPage` | Local data.ts / inline components; existing shared Home sections where used | `college_project_controls` | Include |
| Colleges | Marketing | `/college-of-marketing` | Yes | `src/pages/MarketingCollegePage` | Local data.ts / inline components; existing shared Home sections where used | `college_marketing` | Include |
| Programmes | All Programmes | `/programmes` | Yes | `src/pages/ProgrammeListingPage` | Local data.ts / inline components; existing shared Home sections where used | `programmes` | Include |
| Programmes | Associate Project Manager | `/associate-project-manager-level-4` | Yes | `src/pages/AssociateProjectManagerPage` | Local data.ts / inline components; existing shared Home sections where used | `programme_apm_l4` | Include |
| Programmes | Project Controls Professional | `/project-controls-professional-level-6` | Yes | `src/pages/ProjectControlsProfessionalLevel6Page` | Local data.ts / inline components; existing shared Home sections where used | `programme_pcp_l6` | Include |
| Programmes | Marketing Executive | `/marketing-executive-level-4` | Yes | `src/pages/MarketingExecutiveLevel4Page` | Local data.ts / inline components; existing shared Home sections where used | `programme_marketing_l4` | Include |
| Programmes | Marketing Manager | `/marketing-manager-level-6` | Yes | `src/pages/MarketingManagerLevel6Page` | Local data.ts / inline components; existing shared Home sections where used | `programme_marketing_l6` | Include |
| Who We Are | Our Story | `/about` | Yes | `src/pages/AboutPage` | Inline JSX and shared Experts | `about` | Include |
| Who We Are | Partners | `/our-partners` | Yes | `src/pages/InformationPage/PartnersPage.tsx` | Inline JSX and local arrays | `partners` | Include |
| Who We Are | Our Experts | `/our-experts` | Yes | `src/pages/PeoplePage` | Local data.ts / inline components; existing shared Home sections where used | `experts` | Include |
| Who We Are | Careers | `/contact` | Yes | `src/pages/FormPage/ContactPage.tsx` | Inline JSX and local arrays | — | **Excluded** |
| Who We Are | Governance Board | `/governance-board` | Yes | `src/pages/GovernanceBoardPage` | Local data.ts / inline components; existing shared Home sections where used | `governance` | Include |
| Who We Are | Safeguarding Handbook | `/safeguarding-handbook` | Yes | `src/pages/InformationPage/SafeguardingPage.tsx` | Inline JSX and local arrays | `safeguarding` | Include |
| Who We Are | FAQ | `/faq` | Yes | `src/pages/InformationPage/FaqPage.tsx` | Inline JSX and local arrays | `faq` | Include |
| Resources | Case Studies | `/case-studies` | Yes | `src/pages/StoriesPage` | Local data.ts / inline components; existing shared Home sections where used | `case_studies` | Include |
| Resources | Events | `/events` | Yes | `src/pages/EventsPage` | Inline components and Django Events API | `events` | Include |
| Resources | Bookshop | `/bookshop` | Yes | `src/pages/BookshopPage` | Local data.ts / inline components; existing shared Home sections where used | `bookshop` | Include |
| Resources | Blogs & News | `/blogs-and-news` | Yes | `src/pages/BlogPage` | Local data.ts / inline components; existing shared Home sections where used | `news` | Include |
| Resources | Awards & Recognition | `/awards` | Yes | `src/pages/AwardsPage` | Local data.ts / inline components; existing shared Home sections where used | `awards` | Include |
| For Learners | For Learners | `/learners` | Yes | `src/pages/learners` | Local data.ts / inline components; existing shared Home sections where used | `learners` | Include |
| For Learners | Programmes | `/programmes` | Yes | `src/pages/ProgrammeListingPage` | Local data.ts / inline components; existing shared Home sections where used | `programmes` | Same page editor (duplicate / anchor) |
| For Learners | Funding | `/funding-eligibility` | Yes | `src/pages/FundingEligibilityPage` | Local data.ts / inline components; existing shared Home sections where used | `funding` | Include |
| For Learners | Book Info Session | `/book-session` | Yes | `src/pages/BookConsultationPage/page.tsx` | Inline JSX and local arrays | — | **Excluded** |
| For Learners | Support | `/support` | Yes | `src/pages/FormPage/SupportPage.tsx` | Inline JSX and local arrays | `support` | Include |
| For Employers | For Employers | `/employers` | Yes | `src/pages/employers` | Local data.ts / inline components; existing shared Home sections where used | `employers` | Include |
| For Employers | Employer Agreement | `/employer-agreement` | Yes | `src/pages/EmployerAgreementPage/page.tsx` | Inline JSX and local arrays | — | **Excluded** |
| For Employers | Funding | `/employers#funding` | Yes | `src/pages/employers` | Local data.ts / inline components; existing shared Home sections where used | `employers` | Same page editor (duplicate / anchor) |
| For Employers | Partner With Us | `/employers#partner-with-us` | Yes | `src/pages/employers` | Local data.ts / inline components; existing shared Home sections where used | `employers` | Same page editor (duplicate / anchor) |
| For Employers | Contact | `/contact` | Yes | `src/pages/FormPage/ContactPage.tsx` | Inline JSX and local arrays | `contact` | Include |

**Result: 23 eligible unique dropdown pages plus the existing Home collection.**

Careers points to `/contact`; that menu item is excluded. The Contact item independently qualifies under For Employers and receives one Contact editor. Employer Agreement and both booking-route aliases remain outside this phase.

All current dropdown destinations are internal. No external ContentPage records are created. Future external labels/URLs belong in GLOBAL_NAVIGATION_CONTENT, outside this phase.

Leadership, its seven EmptyPage programme routes, chartered/AI pathway detail pages, apprentice stories, Explore Jobs, LMS, APTEM and Employer Dashboard are not in the current dropdown configuration. They do not receive page records. Programme cards within All Programmes remain part of that existing page’s catalogue; this does not create new programme detail editors. Existing aliases and shared components consume their original page’s published content without duplicate editors.

See [CMS.md](CMS.md) for migrations, persistence, editorial workflow and verification.
