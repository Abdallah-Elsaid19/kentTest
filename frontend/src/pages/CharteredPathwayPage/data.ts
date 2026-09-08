// Official source captured 8 September 2026. See docs/CHARTERED_PATHWAY_CONTENT_QA.md.
import type { ProgrammeHeroData } from '@/components/programme/ProgrammeHero';
import type { ProgrammeSectionData } from '@/components/programme/ProgrammeSection';
import type { ProgrammeItem } from '@/components/programme/ProgrammeGrids';
import type { ProgrammeCopyBlock } from '@/components/programme/ProgrammeCopy';
import type { ProgrammeTestimonialsData } from '@/components/programme/ProgrammeTestimonials';

type CharteredFaqData = ProgrammeSectionData & {
  badges: readonly string[];
  fundingTitle: string;
  fundingDescription: string;
  items: readonly { question: string; blocks: readonly ProgrammeCopyBlock[] }[];
};

export const heroData = {
  "titleId": "chartered-title",
  "layout": "left",
  "hero": {
    "eyebrow": "PROJECT CONTROLS PROFESSIONAL LEVEL 6",
    "badge": "APM Recognised · Level 6 · Work-Based",
    "title": "Chartered",
    "accent": "Pathway",
    "lead": "Already leading in Project Controls but not yet Chartered?",
    "audience": "Build your pathway towards Chartered Project Professional status with Kent Business College.",
    "fundingTitle": "FULLY FUNDED FOR ELIGIBLE LEARNERS",
    "fundingDescription": "Subject to eligibility and employer funding arrangements.",
    "catalogue": "",
    "image": "https://public.readdy.ai/ai/img_res/edited_20db9141d105f34de89197326d60daf5_b3156de0.jpg"
  },
  "cohorts": [],
  "cohortEyebrow": null,
  "cohortTitle": "APM Recognised Assessment",
  "cohortDescription": "for the ChPP standard",
  "highlights": [
    {
      "title": "APM Recognised",
      "description": "Recognised technical-knowledge route for eligible ChPP Pathway 2 applicants."
    },
    {
      "title": "Up to 100% Funded",
      "description": "Subject to apprenticeship eligibility and employer circumstances."
    },
    {
      "title": "Level 6",
      "description": "Advanced Project Controls professional development."
    },
    {
      "title": "Work Based",
      "description": "Develop capability through real professional practice."
    }
  ],
  "commitments": [
    {
      "label": "APM Recognised Assessment",
      "description": "for the ChPP standard"
    },
    {
      "label": "Creator-led learning",
      "description": "Learn from the professional behind the pathway content"
    },
    {
      "label": "Limited 2026/27 intake",
      "description": "Applications now being reviewed"
    }
  ],
  "primaryAction": {
    "label": "GET THE CHARTERED PATHWAY",
    "to": "#kbc-eligibility-form"
  },
  "secondaryAction": {
    "label": "BOOK AN INFO SESSION",
    "to": "/book-session"
  },
  "actionNote": "Get the programme structure, Chartered pathway and eligibility information by email.",
  "audienceBeforeActions": true,
  "overlay": "default"
} as const satisfies ProgrammeHeroData;

export const pageNavigation = [
  {
    "label": "Overview",
    "href": "#kbc-why"
  },
  {
    "label": "Role fit",
    "href": "#kbc-who"
  },
  {
    "label": "ChPP",
    "href": "#kbc-chpp"
  },
  {
    "label": "Programme",
    "href": "#kbc-components"
  },
  {
    "label": "Learning",
    "href": "#kbc-workweek"
  },
  {
    "label": "Employers",
    "href": "#kbc-employer-value"
  },
  {
    "label": "Funding",
    "href": "#kbc-funding"
  },
  {
    "label": "Eligibility",
    "href": "#kbc-eligibility"
  },
  {
    "label": "FAQs",
    "href": "#kbc-faq"
  }
] as const;

export const overviewData = {
  "id": "kbc-why",
  "eyebrow": "Why the Chartered Pathway?",
  "title": "Move beyond technical delivery. Build professional authority.",
  "description": "The Chartered Pathway is designed for experienced Project Controls professionals who want to strengthen strategic capability, demonstrate credible professional practice and build a stronger foundation for future ChPP progression.",
  "items": [
    {
      "title": "Strategic Project Controls Capability",
      "lead": "Lead beyond the numbers.",
      "description": "Develop stronger capability across governance, integrated controls, risk, assurance, stakeholder leadership and decision support.",
      "note": "Turn controls information into better professional judgement."
    },
    {
      "title": "Professional Practice",
      "lead": "Turn experience into credible evidence.",
      "description": "Apply your learning to real project, programme and PMO environments  demonstrating judgement, autonomy, influence and measurable workplace impact.",
      "note": "Build evidence from the work you already do."
    },
    {
      "title": "APM Recognised Technical Knowledge",
      "lead": "Build recognised technical knowledge for Chartered ambition.",
      "description": "The Certified PMO Professional Level 6 component is recognised by APM as technical knowledge evidence for eligible ChPP Pathway 2 applicants.",
      "note": "Recognition that supports your future professional progression."
    },
    {
      "title": "Chartered Readiness",
      "lead": "Prepare for the professional standard ahead.",
      "description": "Understand what Chartered progression demands across professional practice, CPD, ethics, evidence and professional judgement  and start building a stronger evidence base for a future application.",
      "note": "Build readiness  not just another qualification."
    }
  ],
  "note": "Your experience got you this far. The Chartered Pathway helps you turn that experience into stronger professional capability, evidence and Chartered ambition.",
  "actions": [
    {
      "label": "See how the pathway works",
      "to": "#kbc-components"
    }
  ]
} as const;

export const audienceData = {
  "id": "kbc-who",
  "eyebrow": "Who is this pathway for?",
  "title": "Built for experienced professionals leading beyond the numbers.",
  "description": "The Chartered Pathway is designed for professionals who provide authoritative controls advice, strengthen governance and lead improvement across project, programme and portfolio environments.",
  "items": [
    {
      "title": "Project Controls Managers"
    },
    {
      "title": "PMO Professionals"
    },
    {
      "title": "Planning & Scheduling"
    },
    {
      "title": "Cost Engineering"
    },
    {
      "title": "Risk & Assurance"
    },
    {
      "title": "Programme Controls"
    },
    {
      "title": "Portfolio Environments"
    },
    {
      "title": "Senior Reporting & Performance"
    }
  ],
  "callout": {
    "eyebrow": "Role Suitability Check",
    "title": "Your job title alone doesn't determine suitability.",
    "description": "What matters is whether the role provides meaningful opportunity to develop new Level 6 Project Controls capability.",
    "note": "Takes around 2 minutes. We'll review your role, experience and development opportunity."
  },
  "actions": [
    {
      "label": "CHECK IF MY ROLE FITS",
      "to": "#kbc-eligibility"
    }
  ]
} as const;

export const recognitionData = {
  "id": "kbc-chpp",
  "eyebrow": "APM Recognised Technical Knowledge",
  "title": "A recognised step towards Chartered professional progression.",
  "description": "Kent Business College's Certified PMO Professional Level 6 is listed by APM as a recognised technical-knowledge assessment for eligible ChPP Pathway 2 applicants. It is designed to strengthen the technical knowledge, professional judgement and evidence base that can support a future Chartered Project Professional application.",
  "titleLabel": "APM Recognised Assessment for the ChPP standard",
  "image": "/assets/images/chartered-pathway/apm-recognised.png",
  "proofPoints": [
    "Recognised technical knowledge for eligible Pathway 2 applicants",
    "Level 6 professional development",
    "Built around real workplace evidence"
  ],
  "journeyTitle": "Your pathway towards Chartered ambition",
  "items": [
    {
      "title": "Build Knowledge",
      "description": "Develop advanced capability across governance, controls, risk, quality, stakeholders and PMO."
    },
    {
      "title": "Apply Professionally",
      "description": "Use the learning in authentic project, programme and portfolio environments."
    },
    {
      "title": "Build Evidence",
      "description": "Demonstrate judgement, autonomy, impact and professional practice."
    },
    {
      "title": "Prepare for Future ChPP Progression",
      "description": "Organise a stronger professional evidence base for an independent future application."
    }
  ],
  "boundaries": [
    "It does not automatically award ChPP.",
    "It does not replace professional-practice evidence.",
    "It does not remove APM’s written submission or interview.",
    "It does not guarantee eligibility or award."
  ],
  "statement": "Turn your Project Controls experience into stronger professional capability and credible evidence for future Chartered progression.",
  "note": "Speak with the KBC team about role fit, professional progression and the ChPP pathway.",
  "actions": [
    {
      "label": "GET THE CHARTERED PATHWAY",
      "to": "#kbc-eligibility"
    },
    {
      "label": "BOOK AN INFORMATION SESSION",
      "to": "/book-session"
    }
  ],
  "awardNote": "No. ChPP is awarded independently by APM."
} as const;

export const expertData = {
  "id": "kbc-expert",
  "eyebrow": "Expert-led · Practitioner-led · Professionally grounded",
  "title": "Learn from recognised experts who have helped shape professional practice.",
  "description": "Develop your Project Controls capability with insight from recognised specialists across Project Controls standards, Earned Value, portfolio strategy, benefits realisation and PMO transformation.",
  "introduction": "This is learning connected to real professional practice — bringing together recognised frameworks, practical experience and senior-level thinking to help you apply what you learn with greater confidence in the workplace.",
  "profilesEyebrow": "Meet the pathway experts",
  "profilesTitle": "The specialists behind the Chartered Pathway",
  "people": [
    {
      "name": "Steve Wake",
      "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/aab85c6e76d94b968fc8cfef4ac55481.jpg",
      "bio": "Former Chairman of the Association for Project Management (APM), Steve Wake led the Association during its progression to Chartered status. He founded APM's EVM and Planning, Monitoring & Control groups, led the development of BS 202001 Project Controls, and continues to contribute to UK and international Project Controls standards.",
      "tags": [
        "Project Controls · Standards · Earned Value",
        "Project Controls & Standards",
        "Former APM Chairman",
        "Project Controls Standards",
        "Earned Value Management",
        "BS 202001"
      ],
      "short": "Project Controls authority with deep experience in professional standards, Earned Value and the development of the profession."
    },
    {
      "name": "Stephen Jenner",
      "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/c41850af206c42228b72d72f6b559ec7.jpg",
      "bio": "Chief Examiner for APMG's Managing Benefits and Managing Portfolios certifications, Stephen Jenner is a leading specialist in project portfolio and benefits realisation management. His background includes senior UK Civil Service leadership, cross-government benefits management and extensive international work in portfolio strategy and professional development.",
      "tags": [
        "Portfolio Management · Benefits Realisation · Strategy",
        "Portfolio & Benefits",
        "APMG Chief Examiner",
        "Managing Portfolios",
        "Managing Benefits",
        "Portfolio Strategy"
      ],
      "short": "Portfolio and benefits specialist connecting investment decisions, strategic priorities and measurable organisational value."
    },
    {
      "name": "Ray Mead",
      "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/7ed8a1f0ae004952b4aaf9deef4c3653.jpg",
      "bio": "Ray Mead is the owner and director of p3m global, a specialist portfolio, programme and project management consultancy. He is co-author of Delivering Successful PMOs, drawing on practical experience in designing and implementing enterprise PMOs and developing organisational project-management capability internationally.",
      "tags": [
        "PMO · Governance · P3M Transformation",
        "PMO & Transformation",
        "PMO Leadership",
        "P3M Consulting",
        "Enterprise PMO",
        "Co-author — Delivering Successful PMOs"
      ],
      "short": "PMO and P3M specialist focused on turning governance, capability and project-management structures into organisational performance."
    }
  ],
  "supportTitle": "More than expert insight",
  "support": [
    {
      "title": "Live interactive teaching",
      "description": "Learn through discussion, challenge and practical application."
    },
    {
      "title": "1 to 1 support",
      "description": "Get individual guidance around learning and professional development."
    },
    {
      "title": "Workplace application",
      "description": "Connect concepts to evidence and outputs from your real role."
    }
  ],
  "notes": [
    "Learn from recognised specialists who connect professional standards with real-world Project Controls practice.",
    "Project Controls standards. Portfolio strategy. PMO transformation. One advanced professional pathway."
  ],
  "actions": [
    {
      "label": "MEET THE PATHWAY EXPERTS",
      "to": "#pathway-experts"
    },
    {
      "label": "BOOK AN INFORMATION SESSION",
      "to": "/book-session"
    }
  ]
} as const;

export const programmeStructure = {
  "id": "kbc-components",
  "eyebrow": "Your 6-credit Chartered Pathway",
  "title": "One professional pathway. Six credits built around your progression.",
  "description": "Build your Chartered Pathway through a structured 6-credit professional development journey combining the four-credit Certified PMO Professional Level 6 core, one credit in applied AI for Project Controls, and one specialist elective aligned to your role and career direction.",
  "core": {
    "eyebrow": "Core Pathway",
    "title": "Certified PMO Professional Level 6",
    "description": "Four connected modules building advanced PMO, Project Controls and leadership capability.",
    "credits": "4 CREDITS"
  },
  "ai": {
    "eyebrow": "Applied Digital Development",
    "title": "AI in Project Controls",
    "lead": "Use AI with professional control.",
    "description": "Build practical capability in governed AI workflows, reporting, dashboards, analysis and decision support, while maintaining human accountability and professional judgement.",
    "credits": "1 CREDIT"
  },
  "specialist": {
    "eyebrow": "Choose your specialist elective",
    "title": "Select 1 of 2",
    "description": "Shape the final part of the pathway around your professional direction.",
    "credits": "1 CREDIT",
    "label": "Choose one",
    "suitedLabel": "Best suited to"
  },
  "summaryTitle": "Your Chartered Pathway",
  "stats": [
    {
      "title": "4 Credits",
      "description": "Certified PMO Professional Level 6"
    },
    {
      "title": "1 Credit",
      "description": "AI in Project Controls"
    },
    {
      "title": "1 Credit",
      "description": "Your specialist elective"
    },
    {
      "title": "6 CREDITS",
      "description": "Total pathway"
    }
  ],
  "notes": [
    "One structured pathway combining advanced Project Controls capability, applied AI development and specialist professional development.",
    "Six credits. One Chartered Pathway. Applied digital capability plus your specialist direction.",
    "The pathway strengthens professional breadth without replacing the full ST0845 Level 6 occupational standard — every apprentice must still develop the complete required occupational capability."
  ],
  "actions": [
    {
      "label": "GET THE CHARTERED PATHWAY",
      "to": "#kbc-eligibility"
    },
    {
      "label": "See funding & eligibility",
      "to": "#kbc-funding"
    }
  ]
} as const;

export const certifiedPmoModules = [
  {
    "title": "PMO Governance",
    "lead": "Move from coordination to trusted governance.",
    "description": "Develop capability across PMO purpose, assurance, decision rights, governance and strategic oversight."
  },
  {
    "title": "Integrated Controls",
    "lead": "Turn disconnected data into decision confidence.",
    "description": "Connect scope, schedule, cost, resources, forecasting, performance and change."
  },
  {
    "title": "Risk, Issue & Quality Management",
    "lead": "Move from reactive firefighting to controlled uncertainty.",
    "description": "Strengthen risk thinking, assurance, escalation, quality and continuous improvement."
  },
  {
    "title": "Stakeholder Engagement & Communication",
    "lead": "Move from reporting information to influencing decisions.",
    "description": "Develop stronger stakeholder leadership, communication and executive reporting."
  }
] as const satisfies readonly ProgrammeItem[];

export const specialistDevelopment = [
  {
    "title": "Portfolio Management",
    "lead": "See beyond individual projects.",
    "description": "Strengthen strategic alignment, prioritisation, portfolio governance, benefits and portfolio-level decision confidence.",
    "id": "portfolio",
    "suited": "PMO leadership · Portfolio roles · Programme environments · Strategic governance",
    "action": {
      "label": "SELECT PORTFOLIO MANAGEMENT",
      "to": "#kbc-eligibility-form"
    }
  },
  {
    "title": "Earned Value Management",
    "lead": "Turn performance evidence into timely action.",
    "description": "Develop stronger capability across performance measurement, forecasting, EAC, variance analysis and integrated cost/schedule decision-making.",
    "id": "evm",
    "suited": "Project Controls · Cost · Planning · Performance · Integrated Controls",
    "action": {
      "label": "SELECT EARNED VALUE MANAGEMENT",
      "to": "#kbc-eligibility-form"
    }
  }
] as const;

export const includedData = {
  "id": "kbc-included",
  "eyebrow": "More than a Level 6 programme",
  "title": "More than a qualification. A professionally supported journey.",
  "description": "The Chartered Pathway is designed to support you beyond the core apprenticeship — with live teaching, individual guidance, professional-development support and additional learner benefits throughout the programme.",
  "items": [
    {
      "title": "Live Interactive Learning",
      "lead": "Learn live. Revisit anytime.",
      "description": "Join tutor-led interactive sessions designed around discussion, application and real Project Controls practice.",
      "items": [
        "Live online teaching",
        "Session recordings",
        "Catch-up support when needed"
      ],
      "paragraphs": []
    },
    {
      "title": "1-to-1 Tutor Support",
      "lead": "Support when you need it — not just during class.",
      "description": "Access individual tutoring throughout your programme to help with learning, workplace application and evidence development.",
      "paragraphs": [
        "Available 7 days a week, up to 9:00 PM.",
        "You’re not left to work everything out alone."
      ]
    },
    {
      "title": "Chartered Progression Support",
      "lead": "Professional support for your Chartered ambition.",
      "description": "For eligible learners, KBC support can include preparation towards a future ChPP application and associated professional-development costs.",
      "items": [
        "ChPP preparation support",
        "Application guidance",
        "Professional evidence support",
        "Selected associated costs*"
      ],
      "paragraphs": []
    },
    {
      "title": "Professional Qualifications & Exams",
      "lead": "Build more than one professional credential.",
      "description": "Selected professional qualifications, examination costs, memberships and certification routes may be supported through the KBC Professional Development Fund.*",
      "tags": [
        "Exams",
        "Registration",
        "Memberships",
        "Professional certifications"
      ],
      "paragraphs": []
    },
    {
      "title": "UK Networking Experiences",
      "lead": "Build your professional network beyond the classroom.",
      "description": "Take part in selected optional networking workshops and professional-development activities across the UK.",
      "paragraphs": [
        "London · Kent · Manchester · Liverpool · Birmingham"
      ]
    },
    {
      "title": "A Graduation Worth Celebrating",
      "lead": "Mark your achievement properly.",
      "description": "Celebrate programme completion through the KBC graduation experience at Rochester Cathedral, Kent.",
      "paragraphs": [
        "Rochester Cathedral, Kent"
      ]
    }
  ],
  "benefitsTitle": "Additional Learner Benefits",
  "benefits": [
    {
      "title": "Student Clubs Membership",
      "description": "Access learner communities and selected activities across multiple UK locations."
    },
    {
      "title": "Private Healthcare Insurance",
      "description": "Additional healthcare support for eligible learners.*"
    },
    {
      "title": "Recognition & Rewards",
      "description": "Graduation recognition and selected learner rewards.*"
    }
  ],
  "note": "Additional KBC-funded benefits, professional exams, memberships, travel, ChPP-related support and other extras are subject to eligibility, cohort availability and written confirmation in the learner's offer."
} as const;

export const deliveryData = {
  "id": "kbc-workweek",
  "eyebrow": "Designed around your working week",
  "title": "Professional development designed around your working week.",
  "description": "The Chartered Pathway is designed to integrate learning with your existing Project Controls role — combining live teaching, guided development and workplace application so that learning is connected directly to the work you already do.",
  "weekly": {
    "title": "8 Hours / week",
    "description": "Of structured development each week, during paid working hours — as agreed through the apprenticeship training plan.",
    "hours": [
      {
        "hours": "2 hrs",
        "label": "Live Learning",
        "description": "Learn with your tutor, not alone."
      },
      {
        "hours": "3 hrs",
        "label": "Knowledge Development",
        "description": "Build depth between sessions."
      },
      {
        "hours": "3 hrs",
        "label": "Workplace Application & Reflection",
        "description": "Turn learning into professional evidence."
      }
    ]
  },
  "items": [
    {
      "title": "Live Learning",
      "description": "Join interactive live sessions focused on advanced Project Controls concepts, discussion and practical application.",
      "lead": "Included",
      "items": [
        "Live tutor-led teaching",
        "Session recordings",
        "Catch-up support"
      ]
    },
    {
      "title": "Knowledge Development",
      "description": "Use structured reading, quizzes and guided learning activities to strengthen technical understanding and prepare for application.",
      "lead": "Typical activity",
      "items": [
        "Reading",
        "Knowledge checks",
        "Quizzes",
        "Guided preparation"
      ]
    },
    {
      "title": "Workplace Application & Reflection",
      "description": "Apply concepts to your real workplace, develop relevant outputs and reflect on how your professional practice is improving.",
      "lead": "Typical activity",
      "items": [
        "Workplace application",
        "Reflective reports",
        "Evidence development",
        "Professional improvement"
      ]
    }
  ],
  "cycleTitle": "The Learning Cycle",
  "cycle": [
    {
      "title": "Prepare",
      "description": "Understand the challenge."
    },
    {
      "title": "Explore",
      "description": "Learn, discuss and challenge ideas."
    },
    {
      "title": "Apply",
      "description": "Use the learning in your real workplace."
    },
    {
      "title": "Evidence & Improve",
      "description": "Capture results, reflect and strengthen your professional practice."
    }
  ],
  "notes": [
    "You're not studying Project Controls away from your job. Your workplace becomes part of the learning experience.",
    "Build evidence through authentic professional activity such as PMO improvement, integrated baselines, risk and quality frameworks, portfolio reporting, EVM analysis, AI-supported workflows, executive communication."
  ],
  "employer": {
    "title": "Your employer supports the journey too.",
    "description": "The employer provides appropriate workplace opportunity, access to relevant systems and stakeholders, participates in progress reviews and releases the apprentice for paid off-the-job training. This is professional development through work — not simply extra study after work."
  },
  "actionNote": "Ask us about weekly learning, employer release and how the pathway works alongside your current role.",
  "actions": [
    {
      "label": "GET THE CHARTERED PATHWAY",
      "to": "#kbc-eligibility"
    },
    {
      "label": "BOOK AN INFORMATION SESSION",
      "to": "/book-session"
    }
  ]
} as const;

export const employerData = {
  "id": "kbc-employer-value",
  "eyebrow": "Employer Value",
  "title": "Build your capability. Strengthen the organisation around you.",
  "description": "The Chartered Pathway is designed to create value beyond the learner. As you develop, you apply your learning directly to real Project Controls, PMO and programme environments — improving the quality of governance, controls information, assurance and decision-making within the organisation.",
  "items": [
    {
      "title": "Stronger Governance & Assurance",
      "lead": "Create clearer accountability and better-controlled decisions.",
      "description": "Apply stronger PMO governance, assurance, stage-gate and decision-right practices to help teams make more consistent and defensible decisions.",
      "note": "Employer outcome: Clearer accountability. Stronger assurance. Better governance."
    },
    {
      "title": "More Reliable Project Controls",
      "lead": "Turn fragmented controls information into greater delivery confidence.",
      "description": "Strengthen the integration of scope, schedule, cost, risk, forecasting and change so that management information becomes more credible and useful.",
      "note": "Employer outcome: Better early warning. Stronger forecasts. More credible commitments."
    },
    {
      "title": "Better Risk & Quality Decisions",
      "lead": "Surface issues earlier and turn uncertainty into action.",
      "description": "Develop more disciplined approaches to risk, issues, assurance, quality and continuous improvement.",
      "note": "Employer outcome: Earlier risk visibility. Clearer ownership. Reduced recurrence."
    },
    {
      "title": "Stronger Executive Communication",
      "lead": "Move from reporting data to influencing decisions.",
      "description": "Build the ability to translate Project Controls information into clearer narratives, options and recommendations for senior stakeholders.",
      "note": "Employer outcome: Better stakeholder buy-in and more decision-focused reporting."
    }
  ],
  "statement": "Your organisation doesn't wait until the end of the programme to see value. Learning is applied directly in the workplace.",
  "requirements": {
    "title": "What does the employer need to provide?",
    "description": "A suitable employer supports the apprentice by providing:",
    "items": [
      "A productive and relevant role",
      "Paid release for off-the-job training",
      "Appropriate supervision",
      "Access to relevant data, systems and stakeholders",
      "Participation in progress reviews",
      "Support around confidentiality and workplace evidence"
    ]
  },
  "notes": [
    "This isn't development that sits outside the business. It is development designed to improve the way Project Controls works inside it.",
    "Build stronger professional capability and bring that capability back into the organisation every week."
  ],
  "actionNote": "We'll send you a concise overview covering the pathway, employer value, workplace commitment and funding considerations.",
  "actions": [
    {
      "label": "GET THE EMPLOYER BUSINESS CASE",
      "to": "#kbc-eligibility"
    },
    {
      "label": "BOOK AN EMPLOYER INFORMATION SESSION",
      "to": "/book-session"
    }
  ]
} as const;

export const outputsData = {
  "id": "workplace-outputs",
  "eyebrow": "Employer Value",
  "title": "Typical professional outputs may include:",
  "items": [
    "PMO operating models",
    "Integrated baselines",
    "Risk & quality frameworks",
    "Portfolio dashboards",
    "EVM reports",
    "AI-supported workflows",
    "Assurance reviews",
    "Executive briefings"
  ]
} as const;

export const testimonialsData = {
  "id": "kbc-testimonials",
  "eyebrow": "What Learners Say",
  "title": "Trusted by professionals across the industry",
  "items": [
    {
      "name": "Dawn Taylor",
      "quote": "For all project management professionals, I would highly recommend this course. I have been enrolled for over two years and have thoroughly enjoyed it while learning a great deal of relevant content. The lecturers are excellent, the cohort is incredibly supportive, and the fact that the programme is fully funded makes it a complete win-win.",
      "role": "Head of Projects Roadchef",
      "image": "https://static.readdy.ai/image/d84279027d7bca7939cd7344401a26dd/de25c46667c520c57d7bd8188dd9e195.png",
      "rating": 5
    },
    {
      "name": "Joanna Monika Jablonska",
      "quote": "Overall, my experience with the provider's leadership and management has been very positive, with clear communication, good support, and effective programme delivery.",
      "role": "Project Control Professional Level 6",
      "image": "https://static.readdy.ai/image/d84279027d7bca7939cd7344401a26dd/aa90308774b3747bd52f87e85b003b0e.png",
      "rating": 5
    },
    {
      "name": "Giles Magee",
      "quote": "I have had little direct experience with the management or leadership, but from the brief interactions I have had relating to it, the provider seems well organised and is very supportive of their learners.",
      "role": "Project Control Professional Level 6",
      "image": "https://static.readdy.ai/image/d84279027d7bca7939cd7344401a26dd/73c2c22d1ae349d60138364433a01161.png",
      "rating": 5
    }
  ]
} as const satisfies ProgrammeTestimonialsData;

export const fundingData = {
  "id": "kbc-funding",
  "eyebrow": "Funding & Professional Development",
  "title": "Your professional development may be funded through the apprenticeship route.",
  "description": "The Project Controls Professional Level 6 apprenticeship has a maximum funding band of £27,000, with the final funding arrangement depending on learner eligibility, employer circumstances, available levy funds and the agreed training price.",
  "notesTitle": "How funding works",
  "band": {
    "amount": "£27,000",
    "title": "Maximum apprenticeship funding band",
    "description": "Funding supports eligible apprenticeship training and assessment, subject to the rules applying at the learner's start date."
  },
  "routesTitle": "Employer Funding Routes",
  "routeGroups": [
    {
      "title": "Levy Funding",
      "description": "Employers may use available apprenticeship levy funds. The exact arrangement depends on the employer's Apprenticeship Service account and available funding."
    },
    {
      "title": "Eligible Non-Levy Employers",
      "description": "Government funding may cover most or all of the apprenticeship cost depending on eligibility.",
      "items": [
        "Aged 16–24: Government funding may cover 100%.",
        "Aged 25+: Government funding may cover 95%, with the employer contributing 5%."
      ]
    },
    {
      "title": "No Apprentice Contribution",
      "description": "Eligible apprenticeship training and assessment costs must not be charged to the apprentice."
    },
    {
      "title": "Self-Funded & IPC Scholarship",
      "backgroundImage": "/assets/images/chartered-pathway/ipc-scholarship.webp",
      "lead": "Self-Funded Route",
      "description": "If apprenticeship funding doesn't apply to your circumstances, you can self-fund your place on the pathway.",
      "paragraphs": [
        "IPC Scholarship",
        "Selected learners may be offered an IPC scholarship or grant covering part or all of the programme cost, subject to eligibility and cohort availability."
      ]
    }
  ],
  "mobileRoutes": [
    {
      "title": "The funding band",
      "description": "The Project Controls Professional Level 6 apprenticeship has a maximum funding band of £27,000. Funding supports eligible apprenticeship training and assessment, subject to the rules applying at the learner’s start date."
    },
    {
      "title": "Levy funding",
      "description": "Employers may use available apprenticeship levy funds. The exact arrangement depends on the employer’s Apprenticeship Service account and available funding."
    },
    {
      "title": "Eligible non-levy employers",
      "description": "Government funding may cover most or all of the apprenticeship cost depending on eligibility. For the 2026/27 rules shown in the programme catalogue, an eligible apprentice aged 16–24 may receive 100% government funding, while an eligible apprentice aged 25+ may receive 95% funding with the employer contributing 5%."
    },
    {
      "title": "No apprentice contribution",
      "description": "Eligible apprenticeship training and assessment costs must not be charged to the apprentice."
    },
    {
      "title": "Self-funded route",
      "description": "If apprenticeship funding doesn’t apply to your circumstances, you can self-fund your place on the Chartered Pathway."
    },
    {
      "title": "IPC Scholarship",
      "description": "Selected learners may be offered an IPC scholarship or grant covering part or all of the programme cost, subject to eligibility and cohort availability."
    }
  ],
  "chips": [
    {
      "icon": "ri-bank-line",
      "label": "Up to £27,000 funding band"
    },
    {
      "icon": "ri-building-2-line",
      "label": "Employer-supported"
    },
    {
      "icon": "ri-shield-check-line",
      "label": "No eligible apprenticeship training cost to the learner"
    },
    {
      "icon": "ri-graduation-cap-line",
      "label": "Self-funded & IPC Scholarship options available"
    }
  ],
  "fund": {
    "eyebrow": "Beyond apprenticeship funding",
    "title": "The KBC Professional Development Fund",
    "lead": "Additional support for selected eligible learners.",
    "description": "Alongside the apprenticeship, Kent Business College may provide additional professional-development support for eligible learners, subject to cohort availability and written confirmation.",
    "listLabel": "Potential support can include:",
    "items": [
      "Professional memberships",
      "Selected professional exam and registration fees",
      "ChPP preparation and application support",
      "Professional-development workshops",
      "Selected workshop travel",
      "Graduation and learner recognition",
      "Additional professional certification opportunities"
    ],
    "note": "Additional KBC Professional Development Fund support is available to the first 10 eligible learners in each cohort."
  },
  "statement": "Apprenticeship funding covers the core programme. KBC support can take your professional development further.",
  "pillars": [
    "Level 6 apprenticeship development",
    "APM-recognised technical-knowledge route",
    "Professional-development support",
    "Chartered preparation"
  ],
  "notes": [
    "Build advanced Project Controls capability without navigating the professional-development journey alone.",
    "Answer a few questions and the KBC team will review your role, employer situation, prior learning and potential funding route.",
    "Funding is subject to apprenticeship eligibility, employer circumstances, available levy funds, prior-learning assessment, the applicable funding rules and the final negotiated programme price. Additional KBC-funded benefits, external examinations, memberships and professional-development components are included only where confirmed in the learner's written offer."
  ],
  "actions": [
    {
      "label": "EXPLORE SCHOLARSHIPS",
      "to": "https://instituteofprojectcontrols.com/scholarships"
    },
    {
      "label": "CHECK MY FUNDING & ELIGIBILITY",
      "to": "#kbc-eligibility"
    },
    {
      "label": "BOOK A FUNDING INFORMATION SESSION",
      "to": "/book-session"
    }
  ]
} as const;

export const eligibilityData = {
  "id": "kbc-eligibility",
  "eyebrow": "Check your eligibility",
  "title": "Could your current role qualify for the Chartered Pathway?",
  "description": "The Chartered Pathway is designed for employed professionals working in England who meet the applicable apprenticeship requirements. Most learners match several of these indicators:",
  "indicators": [
    "Relevant professional role",
    "Paid employment in England",
    "Appropriate residency & funding eligibility",
    "Employer support",
    "Employer uses the Apprenticeship Service",
    "At least 50% of working hours in England",
    "No conflicting government-funded training",
    "Not self-employed for this funding route",
    "Opportunity to develop new Level 6 competence"
  ],
  "checkerTitle": "Check your circumstances in four quick steps.",
  "note": "This gives an initial indication only. Final apprenticeship and funding eligibility must still be confirmed by Kent Business College."
} as const;

export const eventsData = {
  "id": "kbc-events",
  "eyebrow": "Upcoming Events",
  "title": "Join our upcoming Project Controls events.",
  "description": "Explore upcoming online sessions, funding guidance and the Chartered Project Controls pathway.",
  "items": [
    {
      "date": "14/09/2026",
      "day": "14",
      "month": "SEP",
      "title": "Fully Funded Project Control with APM Chartered Project Professional (ChPP)",
      "startAt": "2026-09-14T13:00:00+01:00",
      "endAt": "2026-09-14T15:00:00+01:00",
      "start": "1:00 pm",
      "end": "3:00 pm",
      "location": "Online event",
      "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/7dced55d6cf94b3299a0d38428b62202.webp",
      "seatUrl": "https://www.eventbrite.co.uk/e/fully-funded-project-control-with-apm-chartered-project-professionalchpp-tickets-1991852879582",
      "detailsUrl": "https://kentbusinesscollege.com/event/fully-funded-project-control-with-apm-chartered-project-professionalchpp-3/"
    },
    {
      "date": "15/09/2026",
      "day": "15",
      "month": "SEP",
      "title": "Last Call for September: Upskill Your Team with DfE and KBC Funding",
      "startAt": "2026-09-15T13:00:00+01:00",
      "endAt": "2026-09-15T15:00:00+01:00",
      "start": "1:00 pm",
      "end": "3:00 pm",
      "location": "Online event",
      "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/897711ece7f0488a951978404c5fed7a.webp",
      "seatUrl": "https://www.eventbrite.co.uk/e/last-call-for-september-upskill-your-team-with-dfe-and-kbc-funding-tickets-1991853080182",
      "detailsUrl": "https://kentbusinesscollege.com/event/last-call-for-september-upskill-your-team-with-dfe-and-kbc-funding/"
    }
  ],
  "action": {
    "label": "VIEW ALL EVENTS",
    "to": "/events"
  },
  "seatLabel": "SECURE YOUR SEAT",
  "detailsLabel": "VIEW DETAILS"
} as const;

export const faqData = {
  "id": "kbc-faq",
  "eyebrow": "Your questions, answered",
  "title": "Everything you need to know before taking the next step.",
  "description": "Still deciding whether the Chartered Pathway is right for you? Here are the questions professionals and employers ask most often before applying.",
  "badges": [
    "Up to 100% funded",
    "Level 6",
    "Work-based",
    "APM-recognised technical knowledge"
  ],
  "fundingTitle": "UP TO 100% FUNDED",
  "fundingDescription": "Eligible levy-funded employers & eligible apprentices aged 16–24",
  "items": [
    {
      "question": "Is the Chartered Pathway 100% funded?",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "It can be — depending on your employer and eligibility."
        },
        {
          "kind": "paragraph",
          "text": "100% apprenticeship funding may apply where:"
        },
        {
          "kind": "list",
          "items": [
            "Levy-paying employers — eligible apprenticeship training can be funded through available employer levy funds.",
            "Eligible apprentices aged 16–24 — eligible apprenticeship training can be funded at 100%, subject to the applicable apprenticeship funding rules."
          ]
        },
        {
          "kind": "paragraph",
          "text": "For eligible non-levy apprentices aged 25+, government funding may cover 95%, with the employer contributing the remaining 5%."
        },
        {
          "kind": "action",
          "label": "CHECK MY FUNDING ELIGIBILITY",
          "to": "#kbc-eligibility-form"
        }
      ]
    },
    {
      "question": "Will I personally have to pay for the apprenticeship?",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "No eligible apprenticeship training cost is charged to the learner."
        },
        {
          "kind": "paragraph",
          "text": "The apprentice must not be charged for eligible apprenticeship training or assessment costs."
        },
        {
          "kind": "paragraph",
          "text": "The exact employer funding arrangement is confirmed before enrolment."
        }
      ]
    },
    {
      "question": "What is the maximum apprenticeship funding available?",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "The Project Controls Professional Level 6 apprenticeship has a:"
        },
        {
          "kind": "paragraph",
          "text": "£27,000 maximum funding band"
        },
        {
          "kind": "paragraph",
          "text": "The final agreed price and funding arrangement depend on eligibility, prior learning, employer circumstances and the applicable funding rules."
        }
      ]
    },
    {
      "question": "Does completing the Chartered Pathway automatically give me ChPP?",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "No. ChPP is awarded independently by APM."
        },
        {
          "kind": "paragraph",
          "text": "Kent Business College helps you build the technical knowledge, professional capability, workplace evidence and Chartered readiness that can support a future ChPP application."
        },
        {
          "kind": "paragraph",
          "text": "The Certified PMO Professional Level 6 component can provide recognised technical-knowledge evidence for eligible APM Pathway 2 applicants."
        },
        {
          "kind": "paragraph",
          "text": "It does not replace APM's professional-practice evidence, written submission, interview or other requirements."
        },
        {
          "kind": "paragraph",
          "text": "KBC helps you build the pathway. APM independently awards Chartered status."
        }
      ]
    },
    {
      "question": "Can I complete the programme while working full-time?",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Yes. It is designed as work-based professional development."
        },
        {
          "kind": "paragraph",
          "text": "Your learning combines:"
        },
        {
          "kind": "list",
          "items": [
            "Live tutor-led sessions",
            "Guided knowledge development",
            "Coaching and evidence planning",
            "Workplace application",
            "Professional reflection and progress reviews"
          ]
        },
        {
          "kind": "paragraph",
          "text": "The learning model is built around applying development directly within your professional role."
        }
      ]
    },
    {
      "question": "Does my employer need to support me?",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Yes. Because this is an apprenticeship pathway, your employer plays an active role."
        },
        {
          "kind": "paragraph",
          "text": "They support the programme by providing:"
        },
        {
          "kind": "list",
          "items": [
            "A relevant professional role",
            "Paid release for apprenticeship training",
            "Suitable workplace opportunities",
            "Access to relevant systems, data and stakeholders",
            "Participation in progress reviews"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Need help speaking to your employer?"
        },
        {
          "kind": "action",
          "label": "GET THE EMPLOYER BUSINESS CASE",
          "to": "#kbc-eligibility"
        }
      ]
    },
    {
      "question": "What if I already have extensive Project Controls experience?",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Experience can be an advantage — but the programme must still develop something new."
        },
        {
          "kind": "paragraph",
          "text": "KBC reviews your qualifications, professional training, work experience and existing capability before confirming the pathway."
        },
        {
          "kind": "paragraph",
          "text": "Relevant prior learning is recognised and may reduce duplicated training, planned hours, duration and price."
        },
        {
          "kind": "paragraph",
          "text": "Don't rule yourself out because you're experienced. Let KBC assess whether the pathway can provide meaningful new Level 6 development."
        }
      ]
    },
    {
      "question": "Which roles can be suitable?",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "The pathway may be suitable for experienced professionals working across:"
        },
        {
          "kind": "list",
          "items": [
            "Project Controls",
            "PMO",
            "Planning & Scheduling",
            "Cost Engineering",
            "Risk & Assurance",
            "Programme Controls",
            "Portfolio Management",
            "Senior Reporting & Performance"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Your title alone does not determine eligibility. Your role needs a clear connection to ST0845 and sufficient opportunity to develop significant new Level 6 competence."
        },
        {
          "kind": "action",
          "label": "CHECK IF MY ROLE FITS",
          "to": "#kbc-eligibility"
        }
      ]
    },
    {
      "question": "Are professional exams, memberships and ChPP support included?",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Selected professional-development benefits may be provided through KBC where they are included in your written learner offer."
        },
        {
          "kind": "paragraph",
          "text": "These may include, subject to eligibility and the agreed package:"
        },
        {
          "kind": "list",
          "items": [
            "Professional memberships",
            "Selected examination fees",
            "ChPP preparation support",
            "Professional-development workshops",
            "Selected travel support",
            "Additional certification opportunities"
          ]
        },
        {
          "kind": "paragraph",
          "text": "The programme catalogue makes clear that external exams, memberships and additional privately funded components are only included where confirmed in writing."
        }
      ]
    },
    {
      "question": "How do I know whether I'm eligible?",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "You don't need to work it out yourself."
        },
        {
          "kind": "paragraph",
          "text": "KBC can review your:"
        },
        {
          "kind": "list",
          "items": [
            "Residency status",
            "Employment situation",
            "Employer eligibility",
            "Working hours",
            "Current funded training",
            "Current role",
            "Prior learning and qualifications"
          ]
        },
        {
          "kind": "action",
          "label": "CHECK MY ELIGIBILITY",
          "to": "#kbc-eligibility-form"
        },
        {
          "kind": "paragraph",
          "text": "Takes around 2 minutes · No obligation"
        }
      ]
    },
    {
      "question": "What happens after I submit my eligibility check?",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "KBC reviews your:"
        },
        {
          "kind": "list",
          "items": [
            "Role fit → Prior learning → Employer support → Funding route → Pathway suitability"
          ]
        },
        {
          "kind": "paragraph",
          "text": "If the programme appears suitable, the next step is normally an information session or admissions discussion before enrolment is confirmed. The catalogue states that KBC reviews role, prior learning, employer support and funding eligibility before confirming the pathway."
        }
      ]
    }
  ]
} as const satisfies CharteredFaqData;

export const finalCTA = {
  "id": "chartered-next-steps",
  "eyebrow": "Limited 2026/27 intake",
  "title": "Already leading in Project Controls?",
  "description": "Find out whether your experience, role and employer could support your progression through the Chartered Pathway.",
  "items": [
    "Up to 100% apprenticeship funded",
    "APM-recognised technical knowledge",
    "Project Controls Professional Level 6",
    "Work-based professional development",
    "Chartered progression support"
  ],
  "note": "Applications for the 2026/27 intake are now being reviewed.",
  "actions": [
    {
      "label": "CHECK MY ELIGIBILITY",
      "to": "#kbc-eligibility-form"
    },
    {
      "label": "BOOK AN INFORMATION SESSION",
      "to": "/book-session"
    }
  ]
} as const;

export const checkerData = {
  "progressLabel": "Eligibility check",
  "stepLabel": "Step",
  "ofLabel": "of",
  "backLabel": "Back",
  "continueLabel": "Continue",
  "steps": [
    {
      "title": "About you",
      "description": "A few quick questions about your circumstances.",
      "questions": [
        {
          "id": "livingUk",
          "label": "Are you currently living in the UK?",
          "options": [
            {
              "value": "yes",
              "label": "Yes"
            },
            {
              "value": "no",
              "label": "No"
            }
          ]
        },
        {
          "id": "residentThreeYears",
          "label": "Have you been resident in the UK for the past 3 years?",
          "options": [
            {
              "value": "yes",
              "label": "Yes"
            },
            {
              "value": "no",
              "label": "No"
            },
            {
              "value": "not-sure",
              "label": "Not sure"
            }
          ]
        },
        {
          "id": "paidEmploymentEngland",
          "label": "Are you in paid employment in England?",
          "options": [
            {
              "value": "yes",
              "label": "Yes"
            },
            {
              "value": "no",
              "label": "No"
            }
          ]
        }
      ]
    },
    {
      "title": "Employment & location",
      "description": "Help us understand your working situation.",
      "questions": [
        {
          "id": "weeklyHours",
          "label": "How many hours do you normally work each week?",
          "options": [
            {
              "value": "16-29",
              "label": "16–29"
            },
            {
              "value": "30+",
              "label": "30+"
            },
            {
              "value": "other",
              "label": "Other"
            }
          ]
        },
        {
          "id": "fiftyPercentEngland",
          "label": "Do you spend at least 50% of your working hours in England?",
          "options": [
            {
              "value": "yes",
              "label": "Yes"
            },
            {
              "value": "no",
              "label": "No"
            },
            {
              "value": "not-sure",
              "label": "Not sure"
            }
          ]
        },
        {
          "id": "employerBasedEngland",
          "label": "Is your employer based in England?",
          "options": [
            {
              "value": "yes",
              "label": "Yes"
            },
            {
              "value": "no",
              "label": "No"
            },
            {
              "value": "not-sure",
              "label": "Not sure"
            }
          ]
        }
      ]
    },
    {
      "title": "Employer & training",
      "description": "Final check before we review your details.",
      "questions": [
        {
          "id": "otherFundedTraining",
          "label": "Are you free from any other government-funded training programme?",
          "options": [
            {
              "value": "yes",
              "label": "Yes"
            },
            {
              "value": "no",
              "label": "No"
            },
            {
              "value": "not-sure",
              "label": "Not sure"
            }
          ]
        },
        {
          "id": "selfEmployed",
          "label": "Are you employed by an organisation rather than self-employed?",
          "options": [
            {
              "value": "yes",
              "label": "Yes"
            },
            {
              "value": "no",
              "label": "No"
            }
          ]
        }
      ]
    }
  ],
  "resultStep": {
    "title": "Your eligibility result",
    "description": "Based on the answers you provided."
  },
  "positive": {
    "title": "You appear to meet the initial eligibility indicators",
    "description": "You can apply now if you're ready to proceed, or book an information session if you'd like more details before applying.",
    "actions": [
      {
        "label": "APPLY NOW",
        "to": "/employer-agreement"
      },
      {
        "label": "BOOK INFORMATION SESSION",
        "to": "/book-session"
      }
    ]
  },
  "alternative": {
    "title": "The apprenticeship-funded route may not match your current circumstances",
    "description": "You can still explore the Institute of Project Controls scholarship route.",
    "actions": [
      {
        "label": "IPC SCHOLARSHIP",
        "to": "https://instituteofprojectcontrols.com/scholarships"
      }
    ]
  }
} as const;

export const mobileActions = [
  {
    "label": "CHECK ELIGIBILITY",
    "to": "#kbc-eligibility-form"
  },
  {
    "label": "INFO SESSION",
    "to": "/book-session"
  }
] as const;

// Contact details from the official page footer; the site keeps its shared footer.
export const contactData = {
  phone: '+44 (0)1622 958955',
  phoneHref: 'tel:+441622958955',
  email: 'office@kentbusinesscollege.org',
  emailHref: 'mailto:office@kentbusinesscollege.org',
  hours: 'Mon-Fri: 8:30AM - 5:00PM',
  address: '29-37 Maidstone Innovation Centre, Gidds Pond Way, Weavering, Maidstone ME14 5FY',
} as const;
