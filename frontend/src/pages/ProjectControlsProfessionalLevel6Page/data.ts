import type { ProgrammeHeroData } from "@/components/programme/ProgrammeHero";
import type { ProgrammeSectionData } from "@/components/programme/ProgrammeSection";
import type { ProgrammeItem, PartnerSector } from "@/components/programme/ProgrammeGrids";
import type { CoachCardProps } from "@/components/common/CoachCard";
import type { ProgrammeWorkloadData } from "@/components/programme/ProgrammeWorkload";

type FeatureSectionData = ProgrammeSectionData & { items: readonly ProgrammeItem[]; note?: string };
type PartnerSectionData = ProgrammeSectionData & { sectors: readonly PartnerSector[] };
type PeopleSectionData = ProgrammeSectionData & { people: readonly (CoachCardProps & { tags?: readonly string[] })[] };

// Content: official Level 6 page, reviewed 7 September 2026. See docs/PROJECT_CONTROLS_LEVEL6.md.
export const heroData = {
  cohortAction: { label: "Save your place", to: "/book-session" },
  "titleId": "pcp-title",
  "hero": {
    "eyebrow": "Project Controls",
    "title": "Project Controls Professional",
    "accent": "Level\u00a06",
    "lead": "A fully funded, work-based pathway for professionals who plan, control, forecast and govern complex projects with Operational, Strategic and Chartered Project Professional routes.",
    "fundingTitle": "Fully funded for eligible learners",
    "fundingDescription": "Government-funded apprenticeship route, subject to eligibility.",
    "audience": "For professionals working across project controls, planning, cost, risk, reporting, governance and transformation.",
    "catalogue": "https://kentbusinesscollege.com/wp-content/uploads/2026/05/Edit-Project-Control-Professional-with-ChPP_compressed.pdf",
    "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/3d7cdf074fc541438b52cff451f31120.jpg"
  },
  "cohorts": [
    {
      "id": "january",
      "label": "January",
      "upcoming": false
    },
    {
      "id": "april",
      "label": "April",
      "upcoming": false
    },
    {
      "id": "september",
      "label": "September",
      "upcoming": true
    }
  ],
  "highlights": [
    {
      "title": "27 months",
      "description": "Soft start, modules and final workshops."
    },
    {
      "title": "6 credits",
      "description": "Each credit is delivered as a four-month block."
    },
    {
      "title": "3 pathways",
      "description": "Operational, Strategic or Chartered Professional."
    },
    {
      "title": "£34,000 support",
      "description": "Potential package, subject to eligibility."
    }
  ],
  "commitments": [
    {
      "label": "Tailored route:",
      "description": "module mix can reflect employer requirements."
    },
    {
      "label": "Level 7 access:",
      "description": "Strategy and Leadership sessions on Saturdays."
    }
  ],
  "secondaryAction": {
    "label": "Compare pathways",
    "to": "#pathways"
  }
} as const satisfies ProgrammeHeroData;

export const overviewData = {
  "id": "overview",
  "eyebrow": "Programme overview",
  "title": "From project controls practice to senior delivery confidence",
  "description": "Project Controls Professional Level 6 is for people who need to turn project data into reliable plans, controlled costs, credible schedules, early warnings, governance decisions and executive confidence.",
  "items": [
    {
      "title": "Build senior project controls capability",
      "description": "Develop stronger capability in planning, scheduling, cost control, performance measurement, risk, reporting, governance and decision support."
    },
    {
      "title": "Apply learning at work",
      "description": "Use your own job duties, projects, reports, dashboards, controls challenges and employer context as the basis for applied learning and evidence."
    },
    {
      "title": "Progress towards recognition",
      "description": "Each pathway supports Project Controls Professional Level 6, with route-specific recognition opportunities through the Institute of Project Controls, the Controls and Skills Authority, and the Association for Project Management."
    }
  ],
  "note": "Recognition summary All pathways lead to the Project Controls Professional Level 6 work-based route and are designed to support Institute of Project Controls Fellowship and Incorporated Cost Engineer progression. The Chartered Pathway is the route designed around the Association for Project Management recognised assessment for Chartered Project Professional technical knowledge. Chartered Project Professional status is awarded only by the Association for Project Management after its full requirements are met."
} as const satisfies FeatureSectionData;

export const audienceData = {
  "id": "who",
  "eyebrow": "Who should apply",
  "title": "For professionals who plan, control, analyse, govern and deliver projects",
  "description": "The programme is not only for Project Management Office professionals. It is also suitable for engineering, infrastructure, construction, consultancy, digital transformation, marketing and business-service environments where project performance matters.",
  "items": [
    {
      "title": "Project controls and performance roles",
      "description": "",
      "items": [
        "Project controls managers and project controllers.",
        "Planning leads, planners and schedulers.",
        "Cost engineering leads, cost engineers and cost controllers.",
        "Estimators, reporting analysts and performance analysts."
      ]
    },
    {
      "title": "Project engineering and delivery roles",
      "description": "",
      "items": [
        "Project engineers, site engineers and delivery coordinators.",
        "Project managers, programme managers and delivery leads.",
        "Risk practitioners, assurance practitioners and change professionals.",
        "People working in complex project environments who need better control systems."
      ]
    },
    {
      "title": "Strategic governance and leadership roles",
      "description": "",
      "items": [
        "Heads of project controls, senior planning leads and scheduling leads.",
        "Heads of Project Management Office and portfolio governance professionals.",
        "Senior risk, assurance, transformation and benefits practitioners.",
        "Professionals preparing for senior controls, portfolio or governance leadership."
      ]
    }
  ]
} as const satisfies FeatureSectionData;

export const structureData = {
  "id": "structure",
  "eyebrow": "How the programme works",
  "title": "A six-credit work-based programme over 27 months",
  "description": "The programme uses a credit system. A normal credit is one four-month course. The Project Management Professional course is two credits because it is delivered over eight months.",
  "items": [
    {
      "title": "One-month soft start",
      "description": "Induction, role review, employer engagement, funding checks, diagnostic review, learning platform access and pathway confirmation."
    },
    {
      "title": "Six credits over 24 months",
      "description": "Select a standard pathway or tailor your six credits to match your current job duties, evidence opportunities and employer priorities.",
      "tags": [
        "Operational route",
        "Strategic route",
        "Chartered route",
        "Tailored route"
      ]
    },
    {
      "title": "Two-month closing workshops",
      "description": "Portfolio consolidation, employer progress review, professional discussion preparation and End-Point Assessment readiness support."
    }
  ],
  "note": "Additional professional development access Learners also receive access to the Diploma Level 7 in Strategy and Leadership, delivered on Saturdays from 9:00 AM to 11:00 AM. The diploma structure includes six modules, each lasting three months, with an overall duration of 18 months."
} as const satisfies FeatureSectionData;

export const pathwayData = {
  "id": "pathways",
  "eyebrow": "Choose your pathway",
  "title": "Pick a standard route or tailor the six credits around your job duties",
  "description": "There are three standard pathways. Learners can also tailor the module mix after employer engagement and approval where their current duties require a different balance of planning, controls, governance, portfolio, artificial intelligence or reporting capability.",
  "routes": [
    {
      "name": "Operational Pathway",
      "title": "For project controls delivery, planning and performance roles",
      "description": "Best suited to learners focused on schedules, earned value, planning, control, reporting and operational delivery confidence.",
      "tags": [
        "Operational Pathway"
      ],
      "detail": "This route is designed for people working close to operational project controls, planning, scheduling, earned value, delivery reporting and performance control.",
      "note": "Operational Pathway select six credits",
      "modules": [
        {
          "title": "Project Management Professional",
          "body": "Project Management Institute",
          "credits": "2 credits",
          "duration": "8 months"
        },
        {
          "title": "Artificial Intelligence in Project Controls Certificate",
          "body": "Institute of Project Controls",
          "credits": "1 credit",
          "duration": "4 months"
        },
        {
          "title": "Risk Management",
          "body": "Association for Project Management",
          "credits": "1 credit",
          "duration": "4 months"
        },
        {
          "title": "Scheduling Professional",
          "body": "Project Management Institute",
          "credits": "1 credit",
          "duration": "4 months"
        },
        {
          "title": "Earned Value Management",
          "body": "APMG International",
          "credits": "1 credit",
          "duration": "4 months"
        },
        {
          "title": "Project Planning and Controls",
          "body": "APMG International",
          "credits": "1 credit",
          "duration": "4 months"
        }
      ]
    },
    {
      "name": "Strategic Pathway",
      "title": "For senior project control, portfolio and governance roles",
      "description": "Best suited to learners working with strategic governance, programme management, portfolios, Project Management Office leadership and senior decision support.",
      "tags": [
        "Strategic Pathway"
      ],
      "detail": "This route is designed for senior project control roles, leading project controls, Project Management Offices, risk practitioners, heads of project controls and professionals preparing for strategic positions.",
      "note": "Strategic Pathway select six credits",
      "modules": [
        {
          "title": "Project Management Professional",
          "body": "Project Management Institute",
          "credits": "2 credits",
          "duration": "8 months"
        },
        {
          "title": "Artificial Intelligence in Project Controls Certificate",
          "body": "Institute of Project Controls",
          "credits": "1 credit",
          "duration": "4 months"
        },
        {
          "title": "Risk Management",
          "body": "Association for Project Management",
          "credits": "1 credit",
          "duration": "4 months"
        },
        {
          "title": "Managing Successful Programmes",
          "body": "PeopleCert / AXELOS",
          "credits": "1 credit",
          "duration": "4 months"
        },
        {
          "title": "Management of Portfolios",
          "body": "APMG International",
          "credits": "1 credit",
          "duration": "4 months"
        },
        {
          "title": "Project Management Office course",
          "body": "Project Management Institute",
          "credits": "1 credit",
          "duration": "4 months"
        }
      ]
    },
    {
      "name": "Chartered Pathway",
      "action": { "label": "Explore Chartered Pathway", "to": "/chartered-pathway" },
      "title": "For Chartered Project Professional readiness",
      "description": "Best suited to learners who want the Association for Project Management recognised assessment route for Chartered Project Professional technical knowledge.",
      "tags": [
        "Chartered Pathway"
      ],
      "detail": "This route is designed for learners whose priority is Chartered Project Professional technical-knowledge recognition through the Project Management Office Professional Level 6 route.",
      "note": "Chartered Pathway Association for Project Management recognised assessment route",
      "modules": [
        {
          "title": "Certified Project Management Office Professional Level 6: Module 1 — Project Planning and Control",
          "body": "Institute of Project Controls / recognised assessment route for Association for Project Management technical knowledge",
          "credits": "1 credit",
          "duration": "4 months"
        },
        {
          "title": "Certified Project Management Office Professional Level 6: Module 2 — Risk, Issue and Quality Management",
          "body": "Institute of Project Controls / recognised assessment route for Association for Project Management technical knowledge",
          "credits": "1 credit",
          "duration": "4 months"
        },
        {
          "title": "Certified Project Management Office Professional Level 6: Module 3 — Stakeholder Engagement, Communications Management and Reporting Systems",
          "body": "Institute of Project Controls / recognised assessment route for Association for Project Management technical knowledge",
          "credits": "1 credit",
          "duration": "4 months"
        },
        {
          "title": "Certified Project Management Office Professional Level 6: Module 4 — Project Management Office",
          "body": "Institute of Project Controls / recognised assessment route for Association for Project Management technical knowledge",
          "credits": "1 credit",
          "duration": "4 months"
        },
        {
          "title": "Artificial Intelligence in Project Controls Certificate",
          "body": "Institute of Project Controls",
          "credits": "1 credit",
          "duration": "4 months"
        },
        {
          "title": "Earned Value Management or Management of Portfolios",
          "body": "APMG International",
          "credits": "1 credit",
          "duration": "4 months"
        }
      ]
    }
  ]
} as const;

export const cohortData = {
  "id": "cohorts",
  "eyebrow": "Cohort orientation",
  "title": "Case studies and study materials can be tailored to your sector",
  "description": "The same professional standard can be applied to different industries. Kent Business College can tailor case studies, exercises, examples and templates to match the orientation of each cohort.",
  "items": [
    {
      "title": "Cohort 1: Engineering, construction and infrastructure projects",
      "description": "For learners working in construction, civil engineering, infrastructure, manufacturing, carbon sustainability, complex engineering delivery, project controls, cost engineering and major project environments.",
      "tags": [
        "Construction",
        "Infrastructure",
        "Manufacturing",
        "Carbon sustainability",
        "Engineering delivery"
      ]
    },
    {
      "title": "Cohort 2: Business, consultancy, digital and service-sector projects",
      "description": "For learners working in management, consultancy, marketing, accountancy, financial services, management services, strategic management solutions, information technology and digital transformation services.",
      "tags": [
        "Business consultancy",
        "Marketing",
        "Accountancy",
        "Financial services",
        "Digital transformation"
      ]
    }
  ]
} as const satisfies FeatureSectionData;

export const outputsData = {
  "id": "outputs",
  "eyebrow": "Capability and workplace outputs",
  "title": "What learners can evidence at work",
  "description": "The programme is designed to turn learning into visible project controls evidence, stronger decisions and better workplace systems.",
  "items": [
    "Integrated project baseline",
    "Project schedule and critical path analysis",
    "Earned value performance report",
    "Cost forecast and variance analysis",
    "Risk and issue register",
    "Change control process",
    "Executive project dashboard",
    "Stakeholder engagement plan",
    "Project Management Office operating model",
    "Portfolio or programme governance pack",
    "Artificial intelligence workflow or dashboard",
    "Professional practice portfolio"
  ],
  "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/eb52115f56cf48c682a1a336ceb560b3.jpg",
  "imageAlt": "Project controls professionals collaborating during a learning session"
} as const;

export const deliveryData = {
  "id": "delivery",
  "eyebrow": "Delivery and assessment",
  "title": "Live, applied and work-based",
  "description": "The programme is designed for working professionals. Learners prepare before class, explore concepts with tutors, apply tools at work and reflect on evidence, impact and professional judgement.",
  "items": [
    {
      "title": "Prepare",
      "description": "Short reading, diagnostic questions, project evidence review or workplace context preparation."
    },
    {
      "title": "Explore",
      "description": "Live tutor-led classes, cases, worked examples, professional discussion and practical workshops."
    },
    {
      "title": "Apply",
      "description": "Use the framework, template or technique in a real project, approved workplace scenario or simulated professional context."
    },
    {
      "title": "Reflect",
      "description": "Capture evidence, evaluate impact, improve the artefact and prepare for portfolio or End-Point Assessment review."
    },
    {
      "title": "Assessment approach",
      "description": "",
      "items": [
        "Applied work-based evidence aligned to programme outcomes.",
        "Professional portfolio development and reflective commentary.",
        "Knowledge, practice and evidence review throughout the journey.",
        "Final workshops to prepare for professional discussion and End-Point Assessment."
      ]
    },
    {
      "title": "Employer involvement",
      "description": "",
      "items": [
        "Confirm suitable duties, evidence opportunities and route fit.",
        "Support the learner with protected off-the-job learning time.",
        "Review workplace application and progression where relevant.",
        "Help align the module mix with operational and strategic business needs."
      ]
    }
  ]
} as const satisfies FeatureSectionData;

export const workloadData = {
  "id": "workload",
  "eyebrow": "Expected workload and learning commitment",
  "title": "A structured weekly rhythm designed for working professionals",
  "description": "The programme combines live online learning, guided independent study, practical portfolio-building and regular coaching. Learners apply project controls and project management principles to real work-life contexts and build evidence of their Knowledge, Skills and Behaviours progression throughout the programme.",
  "stats": [
    {
      "title": "Apprenticeship requirement",
      "value": "860 hours",
      "description": "Apprenticeship learners must complete the required off-the-job training hours across the programme."
    },
    {
      "title": "Weekly live teaching",
      "value": "2 hours",
      "description": "Live, interactive online class with your tutor, including discussion, worked examples, case analysis and applied project controls practice."
    },
    {
      "title": "Typical weekly study",
      "value": "8 hours",
      "description": "A balanced weekly commitment combining live learning, guided reading and practical portfolio-building activities."
    }
  ],
  "weeklyTitle": "Your weekly learning commitment",
  "weeklyDescription": "Each week is designed to help you learn, apply, evidence and reflect. The expected weekly workload is approximately eight hours.",
  "hours": [
    {
      "hours": "2 h",
      "label": "Live online interactive session",
      "description": "Tutor-led online class with explanation, group discussion, workshops, project controls examples and practical application."
    },
    {
      "hours": "3 h",
      "label": "Reading, quizzes and podcasts",
      "description": "Guided Learning Management System activities including reading materials, quizzes, podcasts, reflective prompts and learning checks."
    },
    {
      "hours": "3 h",
      "label": "Portfolio-building activities",
      "description": "Practical evidence-building tasks, such as capturing workplace examples, screenshots, anonymised documents, photos or reflections showing how project controls and project management are applied in real work-life contexts."
    }
  ],
  "note": "Important: Portfolio evidence should be authentic, relevant and professionally presented. Learners should anonymise confidential employer, client, project and commercial information where required.",
  "monthlyTitle": "What you submit each month",
  "monthlyDescription": "There are two regular monthly submissions to your coach. These help keep your progress visible, structured and aligned with the programme requirements.",
  "submissions": [
    {
      "title": "Learning Management System activities",
      "description": "Reading materials, quizzes, podcasts and online learning tasks completed through the Learning Management System."
    },
    {
      "title": "Portfolio-building activities",
      "description": "Evidence of applied project controls and project management practice, supported by reflection and professional commentary."
    }
  ],
  "reviews": [
    {
      "title": "Monthly coaching meeting",
      "description": "You will have a one-hour monthly coaching meeting. During this meeting, you make a short presentation to your coach about your Knowledge, Skills and Behaviours progression and discuss your evidence, learning needs and next actions."
    },
    {
      "title": "Progress review every 10 weeks",
      "description": "Every 10 weeks, there is a one-hour progress review with your line manager and coach. Your coach presents your progression, listens to feedback from your line manager and identifies learning needs to support your development and career progression."
    },
    {
      "title": "Workplace support matters",
      "description": "Apprenticeship learners need employer support for off-the-job learning. Your line manager should help protect learning time, support workplace application and provide feedback on how your learning is supporting your role and organisation."
    }
  ],
  "alternative": {
    "title": "If your line manager cannot support off-the-job hours, speak to us",
    "paragraphs": [
      "If your employer or line manager is not able to support the required off-the-job learning hours, you may still be able to join through a partially funded programme supported by the Institute of Project Controls. Funding support may be available from 50% to 75%, depending on eligibility and approval.",
      "Our admissions team will explain the apprenticeship route, employer responsibilities, Institute of Project Controls funding options and the best route for your situation."
    ]
  }
} as const satisfies ProgrammeWorkloadData & { alternative: { title: string; paragraphs: readonly string[] } };

export const coachData = {
  "id": "coaches",
  "eyebrow": "Coaching support",
  "title": "Coaches who support your portfolio, skills and progress",
  "description": "Coaches support study habits, evidence development, professional confidence and the connection between training and workplace performance.",
  "people": [
    {
      "name": "Adeyomi",
      "bio": "Master of Science in Strategic Project Management and Master of Science in Urban Planning. Certified in Project Management Professional, Scheduling Professional, Earned Value Management and Chartered Institute of Marketing routes.",
      "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/9bf28cbc8b24423e8168e9ba2f6c3496.png",
      "imageAlt": "Adeyomi photo",
      "linkedIn": "https://www.linkedin.com/in/adeyemiadeshina/"
    },
    {
      "name": "Patryck",
      "bio": "Master of Science in Strategic Project Management, supporting learners with project management thinking, evidence development and applied study progress.",
      "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/73ddd02520ed4db48e96eb2ab8fc3d2a.png",
      "imageAlt": "Patryck photo",
      "linkedIn": "https://www.linkedin.com/in/patrykzajac1/"
    },
    {
      "name": "Aryan",
      "bio": "Master of Science in Strategic Project Management, supporting learners with portfolio evidence, study planning and workplace application of learning.",
      "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/cfe680627d044677a09533a28f66b7d9.png",
      "imageAlt": "Aryan photo",
      "linkedIn": "https://www.linkedin.com/in/aryan-harikumar-70a99b1a4/"
    },
    {
      "name": "Dr Randa",
      "bio": "Master of Science and Doctor of Philosophy in Operations Research, supporting learners with analytical thinking, data-informed decisions and structured evidence.",
      "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/91303f2a88114537bc61d8a8af805e21.png",
      "imageAlt": "Dr Randa photo",
      "linkedIn": "https://www.linkedin.com/in/randa-elabd-1923a4403/"
    }
  ]
} as const satisfies PeopleSectionData;

export const benefitsData = {
  "id": "benefits",
  "eyebrow": "Benefits of studying with Kent Business College",
  "title": "More than a qualification",
  "description": "Your funded learning journey is designed to support your wellbeing, confidence, career direction, professional recognition and long-term success.",
  "items": [
    {
      "title": "Wellbeing and learner support",
      "description": "Supporting you personally, professionally and academically throughout your learning journey.",
      "items": [
        "Private healthcare insurance through Benenden Health.",
        "Access to our mental wellbeing system.",
        "Mental wellbeing self-assessment tools.",
        "Inclusiveness assessments.",
        "Free optional assessment of potential barriers to education, such as attention, anxiety or learning-support needs.",
        "Artificial intelligence-powered learning management system and learner dashboards.",
        "Original hard-copy and soft-copy learning materials."
      ]
    },
    {
      "title": "Know yourself and build your career",
      "description": "Helping you understand your strengths, personality, interests and career direction.",
      "items": [
        "Free optional personality traits assessment.",
        "RAISEC career interest test.",
        "Job-fit and career-fit psychological tests.",
        "Personal development dashboards.",
        "Career guidance to identify the right pathway and module mix."
      ]
    },
    {
      "title": "Professional recognition and networking",
      "description": "Connecting you with professional bodies, events and recognition opportunities.",
      "items": [
        "Graduation ceremony.",
        "London Masterclass events three times a year.",
        "Professional body memberships linked to your programme.",
        "Institute of Project Controls membership for two years.",
        "Professional clubs, workshops and networking opportunities in different cities."
      ]
    }
  ]
} as const satisfies FeatureSectionData;

export const fundingData = {
  "id": "funding",
  "eyebrow": "Funding and included package",
  "title": "Funding options after we confirm fit",
  "description": "Kent Business College confirms programme suitability, apprenticeship eligibility, employer support and the most suitable route before enrolment. The funding package is designed to remove barriers and include more than tuition alone.",
  "items": [
    {
      "title": "Department for Education apprenticeship funding",
      "description": "Designed to support the eligible apprenticeship route where learner, employer and programme conditions are met.",
      "items": [
        "Education and training delivery.",
        "End-Point Assessment costs.",
        "Coaching services.",
        "Learning materials."
      ],
      "amount": "£27,000"
    },
    {
      "title": "Institute of Project Controls support package",
      "description": "Designed to support the wider professional development package for eligible learners.",
      "items": [
        "Memberships and professional exam costs.",
        "Diploma Level 7 in Strategy and Leadership.",
        "Transport and attendance support for London Masterclass events.",
        "Club and workshop costs in different cities.",
        "Private healthcare insurance during the programme.",
        "Graduation ceremony costs."
      ],
      "amount": "£7,000"
    }
  ],
  "note": "Important: Funding is subject to current rules, learner eligibility, employer agreement, prior-learning review, residency and work-location checks, programme suitability and written confirmation. Professional-body membership, exam, fellowship, incorporated status and chartered outcomes are subject to the relevant organisation’s own rules and assessment requirements."
} as const;

export const partnerData = {
  "id": "employers",
  "eyebrow": "Employer partnerships",
  "title": "Employer partnerships across project-driven sectors",
  "description": "Trusted partnerships across construction, public sector, healthcare, consultancy, education, aerospace, defence and energy.",
  "sectors": [
    {
      "title": "Infrastructure and construction sector",
      "logos": [
        {
          "name": "Barhale",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/edf9285f313b4fc7bebc2a6f92f0492c.png"
        },
        {
          "name": "Morgan Sindall Construction",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/f17b25910a6942deacf83df93000e1d4.webp"
        },
        {
          "name": "Primech Building Services",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/6e5e38eb6e1e44ed84032e856ab0d5cd.webp"
        },
        {
          "name": "Oakes Power Services",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/cded24f7b7cb430195e825af07d7355a.webp"
        }
      ]
    },
    {
      "title": "Councils and public sector",
      "logos": [
        {
          "name": "Kirklees Council",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/2284f4f65590424a942faf24bc04666a.png"
        },
        {
          "name": "North Yorkshire Council",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/7727308e293245f1962419946ec16ad0.jfif"
        },
        {
          "name": "Trafford Council",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/1077053bf11c40399c194b6bf74c1c33.png"
        }
      ]
    },
    {
      "title": "Healthcare and pharmaceutical sector",
      "logos": [
        {
          "name": "Amber Therapeutics",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/1c5c753910a343858dd6cf7ac15f6c70.png"
        },
        {
          "name": "Callisto Pharma Group",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/2728569ca4e74a26b44d1787983f88d1.jfif"
        },
        {
          "name": "DHU Healthcare",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/c5bdf826bfae4bcc864fffffa345cdc9.png"
        },
        {
          "name": "St John Ambulance Jersey",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/cf7ca0ac5a3b41a4a73b57204ec94004.png"
        }
      ]
    },
    {
      "title": "Business and engineering consultancy sector",
      "logos": [
        {
          "name": "PKF Smith Cooper Systems",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/d25085e03e8049b690fb7510ac18ff61.png"
        },
        {
          "name": "Pragmatics 3D",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/db02979c2ea049aab6bb767bbbe82ce8.jfif"
        },
        {
          "name": "NuVision",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/b47cf844b33c45f2bf8d32e23b678293.webp"
        },
        {
          "name": "Indeed",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/572c55cfe2c84390a6d122b946061a6a.png"
        }
      ]
    },
    {
      "title": "University and education sector",
      "logos": [
        {
          "name": "Education and Training Foundation",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/245be9c28efb4622940cbed048324b01.webp"
        },
        {
          "name": "University of Hull",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/7bad9e0e4b8a4b308206b3561d538063.png"
        },
        {
          "name": "University of Sheffield",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/4dfd6a8809d74ca88831efbd34c7c480.png"
        },
        {
          "name": "UK Agri-Tech Centre",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/abe2fdd4255447a3a8c8211ffabdb066.png"
        }
      ]
    },
    {
      "title": "Aerospace, defence and oil and gas sector",
      "logos": [
        {
          "name": "BMT",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/dcc7742ecfb84cbab3a835e956f1103b.jfif"
        },
        {
          "name": "Bilfinger",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/b25f42a62d564028b7fc2ee9e87ccd83.jpg"
        },
        {
          "name": "Stanlow Terminals",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/4d32dd29a0f54f96911429817594774f.png"
        },
        {
          "name": "Wincanton",
          "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/f1b007c5c5314826b51cc5e408ad4322.webp"
        }
      ]
    }
  ]
} as const satisfies PartnerSectionData;

export const eventsData = {
  upcomingTitle: "Find the right upcoming event",
  upcomingDescription: "See dates and formats for programme, employer funding and professional recognition sessions in one place.",
  "eyebrow": "Upcoming programme events",
  "search": "\"project control\""
} as const;

export const finalCTA = {
  "id": "next-step",
  "eyebrow": "Take the next step",
  "title": "Ready to choose the right Project Controls Professional Level 6 pathway?",
  "description": "Start with a one-to-one conversation. The team can help you understand your pathway, employer requirements, funding eligibility, professional recognition route and next intake.",
  "action": {
    "label": "Book an information session",
    "to": "/book-session"
  }
} as const;

export const faqs = [
  {
    "question": "When do the courses start?",
    "answer": "The course start windows are September, January and April. The team will confirm which pathway and module sequence is available for your chosen intake."
  },
  {
    "question": "How long is the programme?",
    "answer": "The full Project Controls Professional Level 6 journey is designed as a 27-month programme: one month of soft start, six credits delivered over 24 months, and two months of closing workshops for End-Point Assessment preparation."
  },
  {
    "question": "Can I tailor the programme rather than follow one standard route?",
    "answer": "Yes. The programme is built on a credit system. You can choose a standard route or tailor your six credits based on your current job description, duties, employer needs and evidence opportunities, subject to employer engagement and approval."
  },
  {
    "question": "I want to do Level 6, but some Level 3 modules fit my job. Can I take them?",
    "answer": "Yes, this can be discussed. Our programmes are built on the credit system. Each module is a credit and each normal credit is delivered over four months. The only module that is two credits is the Project Management Professional or Certified Associate in Project Management route. Any cross-level choice must still make sense for your job duties, evidence and funding route."
  },
  {
    "question": "What is the apprenticeship funding eligibility for the 100% funded route?",
    "answer": "Typical apprenticeship funding checks include that the learner lives and works in England, spends at least 50% of working time in England, and has an employer who supports the learner with around 7 to 8 hours per week for off-the-job study. Apprenticeships are not based on age, seniority or maximum salary. The learner must be employed and paid at least the applicable minimum wage rules. Final eligibility is confirmed before enrolment."
  },
  {
    "question": "What if I am not eligible for apprenticeship funding?",
    "answer": "Kent Business College can assist you in exploring the Institute of Project Controls fund. This may be relevant for international applicants, learners outside apprenticeship eligibility, unemployed applicants, self-employed applicants, or employed applicants whose employers cannot support 7 to 8 hours of off-the-job study time. The fund application may require your curriculum vitae, a positive-character statement and a statement about your future passions and goals."
  },
  {
    "question": "Which route should I choose if I want Chartered Project Professional status?",
    "answer": "The Chartered Pathway is the route designed around the Association for Project Management recognised assessment for Chartered Project Professional technical knowledge. Completion of the programme does not automatically confer Chartered Project Professional status. The Association for Project Management awards Chartered Project Professional status only when the candidate meets its current professional practice, continuing professional development, ethics and assessment requirements."
  },
  {
    "question": "Does every pathway include Institute of Project Controls Fellowship and Incorporated Cost Engineer progression?",
    "answer": "The programme is designed so all pathways support Project Controls Professional Level 6 and the professional development route towards Institute of Project Controls Fellowship and Controls and Skills Authority Incorporated Cost Engineer recognition. Final recognition depends on the relevant organisation’s assessment, membership and evidence requirements."
  },
  {
    "question": "Is the Level 7 Diploma in Strategy and Leadership included?",
    "answer": "Yes, access to the Diploma Level 7 in Strategy and Leadership is included in the wider support package. It is scheduled on Saturdays from 9:00 AM to 11:00 AM, with six modules, each lasting three months, over an 18-month structure."
  },
  {
    "question": "What does the funding package include?",
    "answer": "The Department for Education apprenticeship funding package is designed to cover education, End-Point Assessment costs, coaching services and materials. The Institute of Project Controls package is designed to support memberships, professional exams, Diploma Level 7 access, London Masterclass attendance and transport, professional clubs and workshops, private healthcare insurance and graduation ceremony costs."
  },
  {
    "question": "Is this suitable outside engineering and construction?",
    "answer": "Yes. The programme has two orientation options: one for construction, engineering and infrastructure projects, and one for management, consultancy, information technology, digital transformation, marketing and wider business-service environments."
  },
  {
    "question": "What is the best next step?",
    "answer": "The best next step is to book a one-to-one information session with a coach. They can review your current duties, employer position, funding route, cohort orientation and most suitable pathway."
  }
] as const;

export const pageNavigation = [
  { label: "Overview", href: "#overview" }, { label: "Who it is for", href: "#who" },
  { label: "Structure", href: "#structure" }, { label: "Pathways", href: "#pathways" },
  { label: "Cohorts", href: "#cohorts" }, { label: "Outputs", href: "#outputs" },
  { label: "Delivery", href: "#delivery" }, { label: "Workload", href: "#workload" },
  { label: "Coaches", href: "#coaches" },
  { label: "Benefits", href: "#benefits" }, { label: "Funding", href: "#funding" },
  { label: "Events", href: "#upcoming-programme-events" }, { label: "Recognition", href: "#recognition" },
  { label: "Employer partners", href: "#employers" },
  { label: "Testimonials", href: "#testimonials" }, { label: "FAQs", href: "#faq" }, { label: "Next step", href: "#next-step" },
] as const;

export const programmeMeta = {
  title: "Project Controls Professional Level 6 | Kent Business College",
  description: heroData.hero.lead,
  path: "/project-controls-professional-level-6",
};

export const courseSchema = {
  "@context": "https://schema.org", "@type": "Course",
  name: "Project Controls Professional Level 6", description: programmeMeta.description,
  provider: { "@type": "CollegeOrUniversity", name: "Kent Business College", url: "https://kentbusinesscollege.com" },
  timeRequired: "P27M", educationalLevel: "Level 6",
};

export const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
};
