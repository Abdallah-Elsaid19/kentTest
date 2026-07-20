# Kent Business College Website Rebuild

## 1. Project Description
Rebuild the public website for Kent Business College (kbc) into a modern, scalable React single-page application. The new site preserves the existing brand identity, content hierarchy, navigation structure, and visual design while improving code quality, responsiveness, accessibility, and performance. The target audience includes prospective learners, employers looking to upskill teams, apprenticeship seekers, and partners.

## 2. Page Structure
- `/` - Home (hero, colleges, programmes, benefits, achievers, case studies, events, testimonials, footer)
- `/colleges` - Colleges listing
- `/colleges/:collegeSlug` - Individual college detail (College of Project Management, College of Project Controls, College of Marketing, College of Leadership)
- `/programmes` - Programmes listing
- `/programmes/:programmeSlug` - Individual programme detail
- `/courses` - Courses listing
- `/courses/:courseSlug` - Individual course detail
- `/events` - Events listing
- `/events/:eventSlug` - Event detail
- `/who-we-are` - About / Who We Are
- `/faq` - Frequently Asked Questions
- `/blog` - Blog listing
- `/blog/:articleSlug` - Blog article detail
- `/star-learners` - Star Learners
- `/our-experts` - Our Experts
- `/our-partners` - Our Partners
- `/governance-board` - Governance Board
- `/safeguarding-handbook` - Safeguarding Handbook
- `/contact` - Contact Us
- `/support` - KBC Support
- `/apprentices` - Apprentices overview
- `/apprentices/stories` - Apprentices' Stories
- `/explore-jobs` - Explore Jobs
- `/employer-agreement` - Employer Agreement
- `/apply` - Apply Now
- `/book-session` - Book an Information Session
- `*` - 404 Not Found

## 3. Core Features
- [ ] Responsive navigation with desktop mega menus and mobile drawer
- [ ] Homepage with hero, programme cards, college cards, testimonials, events, and case studies
- [ ] Colleges listing and detail pages
- [ ] Programmes listing and detail pages with filtering
- [ ] Courses listing and detail pages
- [ ] Events listing and detail pages with tabs (upcoming / ended)
- [ ] Blog listing and article pages
- [ ] About, FAQ, Star Learners, Our Experts, Partners, Governance Board pages
- [ ] Apply Now form with validation
- [ ] Contact Us form with validation
- [ ] Book an Information Session form
- [ ] KBC Support page
- [ ] Employer agreement and apprentices pages
- [ ] SEO metadata per page
- [ ] Accessibility targets (WCAG 2.2 AA)

## 4. Data Model Design
No persistent database is required for Phase 1. All content is served via typed mock data and RTK Query mock APIs. Future phases may connect to a CMS or backend.

Key data types:
- College (id, name, slug, description, programmes[], image)
- Programme (id, title, slug, collegeId, level, duration, fundingStatus, qualification, description, image, professionalRecognition[])
- Course (id, title, slug, description, outline[])
- Event (id, title, slug, date, startTime, endTime, location, isOnline, registrationUrl, status)
- BlogArticle (id, title, slug, excerpt, content, author, date, category, image)
- Testimonial (id, name, role, organisation, quote, image)
- CaseStudy (id, name, role, programme, quote, image, slug)
- Partner (id, name, logo)
- TeamMember (id, name, role, bio, image)
- NavigationItem (id, label, href, children[])
- ContactEnquiry (name, email, phone, message, type)
- Application (id, firstName, lastName, email, phone, programmeId, employer, status)
- SupportMessage (id, name, email, subject, message)

## 5. Backend / Third-party Integration Plan
- Supabase: Not required for initial static rebuild. May be added later for form submissions and dynamic content.
- Shopify: Not required.
- Stripe: Not required.
- External links preserved: LMS, Aptem, Eventbrite, LinkedIn, social media (handled as external hrefs).

## 6. Development Phase Plan

### Phase 1: Foundation + Homepage + Core Pages
- Goal: Set up the complete project architecture, Tailwind theme, Redux store, RTK Query mock APIs, shared layout components, all routes, and build the homepage with all sections. Also build all static listing and detail pages with mock data.
- Deliverable: A fully navigable website with homepage, all listed pages, forms, and responsive design.

### Phase 2: Forms, SEO & Accessibility Polish
- Goal: Add React Hook Form + Zod validation to all forms, implement SEO metadata per route, add structured data helpers, and perform accessibility audit.
- Deliverable: Validated forms, SEO components, structured data, WCAG 2.2 AA improvements.

### Phase 3: Performance & Animation
- Goal: Add skeleton loaders, error boundaries, optimised image handling, smooth scroll animations, and final responsive testing.
- Deliverable: Production-ready build with performance optimisations.