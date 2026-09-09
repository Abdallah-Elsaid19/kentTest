// Route and renderer bindings only. Editorial content is stored in Django JSONB.
export const pageRegistry = {
  "college_project_controls": {
    "title": "Project Controls & Project Management",
    "route": "/college-of-project-controls-and-project-management",
    "group": "Colleges",
    "dependencies": [
      "college_project_controls"
    ]
  },
  "college_marketing": {
    "title": "Marketing",
    "route": "/college-of-marketing",
    "group": "Colleges",
    "dependencies": [
      "college_marketing"
    ]
  },
  "programmes": {
    "title": "All Programmes",
    "route": "/programmes",
    "group": "Programmes",
    "dependencies": [
      "programmes"
    ]
  },
  "programme_apm_l4": {
    "title": "Associate Project Manager Level 4",
    "route": "/associate-project-manager-level-4",
    "group": "Programmes",
    "dependencies": [
      "programme_apm_l4",
      "case_studies"
    ]
  },
  "programme_pcp_l6": {
    "title": "Project Controls Professional Level 6",
    "route": "/project-controls-professional-level-6",
    "group": "Programmes",
    "dependencies": [
      "programme_pcp_l6",
      "case_studies"
    ]
  },
  "programme_marketing_l4": {
    "title": "Marketing Executive Level 4",
    "route": "/marketing-executive-level-4",
    "group": "Programmes",
    "dependencies": [
      "programme_marketing_l4",
      "case_studies",
      "programme_apm_l4"
    ]
  },
  "programme_marketing_l6": {
    "title": "Marketing Manager Level 6",
    "route": "/marketing-manager-level-6",
    "group": "Programmes",
    "dependencies": [
      "programme_marketing_l6",
      "case_studies",
      "programme_apm_l4"
    ]
  },
  "about": {
    "title": "Our Story",
    "route": "/about",
    "group": "Information",
    "dependencies": [
      "about",
      "experts",
      "partners"
    ]
  },
  "partners": {
    "title": "Our Partners",
    "route": "/our-partners",
    "group": "Information",
    "dependencies": [
      "partners"
    ]
  },
  "experts": {
    "title": "Our Experts",
    "route": "/our-experts",
    "group": "Information",
    "dependencies": [
      "experts"
    ]
  },
  "governance": {
    "title": "Governance Board",
    "route": "/governance-board",
    "group": "Information",
    "dependencies": [
      "governance"
    ]
  },
  "safeguarding": {
    "title": "Safeguarding Handbook",
    "route": "/safeguarding-handbook",
    "group": "Information",
    "dependencies": [
      "safeguarding"
    ]
  },
  "faq": {
    "title": "FAQ",
    "route": "/faq",
    "group": "Information",
    "dependencies": [
      "faq"
    ]
  },
  "case_studies": {
    "title": "Case Studies",
    "route": "/case-studies",
    "group": "Information",
    "dependencies": [
      "case_studies"
    ]
  },
  "events": {
    "title": "Events",
    "route": "/events",
    "group": "Information",
    "dependencies": [
      "events"
    ]
  },
  "bookshop": {
    "title": "Bookshop",
    "route": "/bookshop",
    "group": "Information",
    "dependencies": [
      "bookshop"
    ]
  },
  "news": {
    "title": "Blogs & News",
    "route": "/blogs-and-news",
    "group": "Information",
    "dependencies": [
      "news"
    ]
  },
  "awards": {
    "title": "Awards & Recognition",
    "route": "/awards",
    "group": "Information",
    "dependencies": [
      "awards"
    ]
  },
  "learners": {
    "title": "For Learners",
    "route": "/learners",
    "group": "Apprentice",
    "dependencies": [
      "learners"
    ]
  },
  "funding": {
    "title": "Funding & Eligibility",
    "route": "/funding-eligibility",
    "group": "Information",
    "dependencies": [
      "funding"
    ]
  },
  "support": {
    "title": "KBC Support",
    "route": "/support",
    "group": "Information",
    "dependencies": [
      "support"
    ]
  },
  "employers": {
    "title": "For Employers",
    "route": "/employers",
    "group": "Employer",
    "dependencies": [
      "employers"
    ]
  },
  "contact": {
    "title": "Contact Us",
    "route": "/contact",
    "group": "Information",
    "dependencies": [
      "contact"
    ]
  }
} as const;
