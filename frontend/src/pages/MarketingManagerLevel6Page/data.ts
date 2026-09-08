import type { ProgrammeHeroData } from "@/components/programme/ProgrammeHero";
import type { ProgrammeSectionData } from "@/components/programme/ProgrammeSection";
import type { ProgrammeItem } from "@/components/programme/ProgrammeGrids";
import type { ProgrammeEligibilityData } from "@/components/programme/ProgrammeEligibilitySection";
import type { ProgrammeQualificationData } from "@/components/programme/ProgrammeQualificationSection";
import type { ProgrammeCurriculumData } from "@/components/programme/ProgrammeCurriculumSection";
import type { ProgrammeInterestData } from "@/components/programme/ProgrammeInterestDialog";

// Complete official programme copy retrieved 8 September 2026. Preserve source wording.
export const contentSource = "https://kentbusinesscollege.com/marketing-manager-level-6-apprenticeship/";
type ItemSection = ProgrammeSectionData & { items: readonly ProgrammeItem[] };
type ProgrammeAction = { label: string; to: string } | { label: string; enquiry: true };

export const heroData = {
  "titleId": "marketing-manager-title",
  "longTitle": true,
  "mobileActionsAfterLead": false,
  "audienceTabletAlign": "left",
  "audienceBeforeActions": true,
  "hero": {
    "eyebrow": "Level 6 Strategic Professional Marketing",
    "title": "Gain a",
    "accent": "CIM Diploma Level 6",
    "titleSuffix": "in Professional and Digital Marketing",
    "lead": "Advance your marketing career through a workplace-focused Level 6 apprenticeship that develops strategic thinking, commercial confidence, AI-enabled marketing capability and measurable business impact.",
    "fundingTitle": "Fully funded route*",
    "fundingDescription": "Limited funded places are available through Kent Business College. Final funding, suitability and programme terms are confirmed before enrolment.",
    "audienceLabel": "Applied progression",
    "audience": "Build strategic marketing leadership capability.",
    "catalogue": "https://kentbusinesscollege.com/wp-content/uploads/2026/05/Apprentice-Charter-Agreement-with-the-Marketing-Manager-Level-6-with-Level-6-Certificate-in-Professional-and-Digital-Marketing_compressed-1.pdf",
    "catalogueLabel": "Download catalogue",
    "image": "/assets/images/programme-marketing-manager.jpg"
  },
  "cohorts": [
    {
      "id": "september-2026",
      "label": "September 2026 intake",
      "upcoming": false
    }
  ],
  "highlights": [
    {
      "title": "Strategy & Planning",
      "description": "Set direction, priorities and evidence-led marketing plans.",
      "marker": "01"
    },
    {
      "title": "Customer Journey",
      "description": "Optimise experience, value, retention and loyalty.",
      "marker": "02"
    },
    {
      "title": "Commercial Intelligence",
      "description": "Connect analytics, budgets and performance to growth.",
      "marker": "03"
    },
    {
      "title": "AI in Marketing",
      "description": "Apply AI responsibly across insight, planning and delivery.",
      "marker": "04"
    }
  ],
  "commitments": [],
  "secondaryAction": {
    "label": "Explore the curriculum",
    "to": "#curriculum"
  },
  "cohortAction": {
    "label": "Book an information session",
    "to": "/book-session"
  },
  "cohortEyebrow": null,
  "cohortTitle": "Limited funded places from Kent Business College",
  "cohortTitleAsBadge": true,
  "cohortDescription": null,
  "qualificationImage": {
    "image": "/assets/images/cim-level-6-diploma.png",
    "name": "CIM Diploma in Professional Marketing Level 6 logo"
  },
  "overlay": "default"
} satisfies ProgrammeHeroData;

export const programmeStats = [
  {
    "value": "100%",
    "label": "Fully funded routes",
    "description": "Subject to eligibility and available funding."
  },
  {
    "value": "L6",
    "label": "Advanced Level 6",
    "description": "Strategic judgement and commercial leadership."
  },
  {
    "value": "CIM",
    "label": "Chartered pathway support",
    "description": "Preparation for professional progression."
  }
] satisfies readonly { value: string; label: string; description: string }[];

export const overviewData = {
  "id": "overview",
  "eyebrow": "Why this programme",
  "title": "Strategic marketing leadership grounded in commercial reality.",
  "description": "Develop the strategic, analytical and leadership capability expected from senior marketing professionals while delivering measurable workplace value throughout the apprenticeship.",
  "feature": {
    "title": "From marketing execution to strategic influence",
    "description": "Move beyond campaigns and channels. Learn to shape strategy, influence investment, connect customer value to organisational priorities and lead cross-functional decision-making.",
    "items": [
      "Commercial marketing strategy",
      "Customer and market insight",
      "Leadership and stakeholder influence",
      "Performance, value and accountability"
    ],
    "image": "/assets/images/marketing-manager-strategy.jpg",
    "imageAlt": "Marketing professional developing a strategic marketing plan"
  },
  "items": [
    {
      "title": "Set strategic direction",
      "description": "Translate business priorities into evidence-led marketing objectives, positioning and investment choices."
    },
    {
      "title": "Lead people and delivery",
      "description": "Build alignment, manage agencies and teams, and strengthen marketing capability across the organisation."
    },
    {
      "title": "Use insight and analytics",
      "description": "Interpret customer, competitor, channel and commercial data to recommend action with confidence."
    },
    {
      "title": "Apply AI responsibly",
      "description": "Use AI to accelerate research, analysis, planning and content while maintaining professional judgement."
    }
  ]
} satisfies ItemSection & { feature: ProgrammeItem & { image: string; imageAlt: string } };

export const curriculumData = {
  "id": "curriculum",
  "eyebrow": "Marketing Manager Level 6 curriculum",
  "title": "Four connected modules from strategic planning to AI-enabled marketing.",
  "description": "The curriculum follows the learner journey in the Marketing Manager Level 6 programme: Strategy and Planning, Customer Journey Optimisation, Commercial Intelligence and AI in Marketing. Each module develops relevant knowledge, skills and behaviours through live learning, workplace application, reflection and evidence building before Gateway and End Point Assessment.",
  "modules": [
    {
      "title": "Strategy and Planning",
      "description": "The foundation stage connects Level 6 marketing theory with strategic business decisions and organisational objectives.",
      "items": [
        "Strategic marketing theory and the extended marketing mix",
        "Product, service and brand development",
        "Market research, communications and business context",
        "Evidence-led marketing plans, risks and priorities"
      ],
      "number": "01",
      "eyebrow": ""
    },
    {
      "title": "Customer Journey Optimisation",
      "description": "Develop a customer-focused view of the complete experience, from initial engagement to satisfaction, retention and loyalty.",
      "items": [
        "Customer behaviours across B2B and B2C contexts",
        "Journey mapping, touchpoints and friction analysis",
        "CRM, brand perception, feedback and channel choices",
        "Stakeholder collaboration and experience improvement"
      ],
      "number": "02",
      "eyebrow": ""
    },
    {
      "title": "Commercial Intelligence",
      "description": "Strengthen commercial judgement by connecting data, financial awareness and marketing performance to business value.",
      "items": [
        "Campaign performance, KPIs and reliable information",
        "Return on investment, customer value and budget use",
        "Analytics, market insight and evidence-based decisions",
        "Business cases, recommendations and growth opportunities"
      ],
      "number": "03",
      "eyebrow": ""
    },
    {
      "title": "AI in Marketing",
      "description": "Explore how emerging technology can improve marketing planning, personalisation, customer insight and performance.",
      "items": [
        "Artificial intelligence, automation and marketing systems",
        "Campaign planning, optimisation and content development",
        "Analytics, digital tools and faster insight generation",
        "Responsible, ethical and commercially appropriate use"
      ],
      "number": "04",
      "eyebrow": ""
    }
  ],
  "progression": {
    "title": "Progression after the four modules",
    "description": "Learners consolidate workplace evidence and prepare for Gateway. The End Point Assessment can include the Multiple Choice Test, Project Showcase and Professional Discussion. Learners completing the CIM route may then complete the remaining CIM Level 6 assessments before graduation.",
    "items": [
      "EPA Gateway",
      "End Point Assessment",
      "Final CIM Level 6 assessments",
      "Graduation and progression"
    ]
  }
} satisfies ProgrammeCurriculumData;

export const coreMarketingDisciplines = {
  "id": "disciplines",
  "eyebrow": "Core marketing disciplines",
  "title": "Build the capabilities behind effective marketing leadership.",
  "description": "A balanced curriculum covering strategy, customers, brand, communications, analytics, digital capability, innovation and leadership.",
  "items": [
    {
      "title": "Strategy and planning",
      "description": "Business alignment, market opportunity, positioning, objectives, investment priorities and execution roadmaps."
    },
    {
      "title": "Customer and market insight",
      "description": "Research, segmentation, behaviour, customer experience, competitor intelligence and evidence quality."
    },
    {
      "title": "Brand and communications",
      "description": "Brand strategy, integrated communications, channel decisions, agency leadership and reputation."
    },
    {
      "title": "Commercial analytics",
      "description": "Measurement frameworks, performance interpretation, attribution, forecasting and decision-ready reporting."
    },
    {
      "title": "Digital and AI capability",
      "description": "Digital ecosystems, marketing technology, automation, responsible AI and data-informed optimisation."
    },
    {
      "title": "Leadership and change",
      "description": "Stakeholder influence, team development, ethical practice, organisational change and strategic communication."
    }
  ]
} satisfies ItemSection;

export const cimQualification = {
  "id": "cim",
  "eyebrow": "CIM Chartered Level 6 pathway",
  "title": "Turn advanced study into credible professional progression.",
  "description": "The programme develops strategic marketing capability and supports learners to organise professional evidence, CPD and career progression towards Chartered Marketer status.",
  "items": [
    {
      "title": "Level 6 strategic capability",
      "description": "Demonstrate critical analysis, commercial judgement, leadership and the ability to apply marketing strategy autonomously."
    },
    {
      "title": "Professional evidence and CPD",
      "description": "Build a portfolio of workplace outputs, reflective practice and continuing professional development that supports future professional applications."
    }
  ],
  "note": "Important: Chartered Marketer status is awarded separately by the Chartered Institute of Marketing and is subject to CIM membership, experience, CPD and application requirements. Completion of this apprenticeship does not automatically confer chartered status."
} satisfies ProgrammeQualificationData;

export const aiMarketingData = {
  "id": "ai",
  "eyebrow": "AI-enabled marketing",
  "title": "Use AI to strengthen strategy while keeping leaders accountable.",
  "description": "Learners use AI as a practical marketing tool for research, planning, analysis and content development, while applying responsible governance and human review.",
  "appliedTitle": "Applied AI capability",
  "items": [
    {
      "title": "Plan",
      "description": "Structure research and priorities"
    },
    {
      "title": "Analyse",
      "description": "Explore customer and performance data"
    },
    {
      "title": "Challenge",
      "description": "Test assumptions and scenarios"
    },
    {
      "title": "Create",
      "description": "Develop and refine outputs"
    }
  ],
  "controlsTitle": "Professional controls",
  "controls": [
    "Human review for important decisions",
    "Confidentiality and approved data use",
    "Evidence checks and source validation",
    "Bias, ethics and brand-risk awareness",
    "Clear accountability for final outputs"
  ]
} satisfies ItemSection & { appliedTitle: string; controlsTitle: string; controls: readonly string[] };

export const eligibilityData = {
  "id": "funding",
  "eyebrow": "Eligibility Criteria",
  "title": "Check that you meet the apprenticeship funding requirements.",
  "main": {
    "title": "Eligibility Criteria",
    "items": [
      "UK resident for the past 3 years",
      "Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)",
      "Not enrolled in other government-funded training at the time of this programme",
      "Self-employed individuals are not eligible for DfE funding",
      "Paid employment in England (normally 30+ hrs/week; minimum 16)",
      "Employer based in England and registered with the Apprenticeship Service",
      "Spend at least 50% of their working hours within England"
    ],
    "eyebrow": "Who is eligible?"
  },
  "aside": {
    "title": "Funded apprenticeship spaces",
    "description": "Please note: We have a limited number of funded apprenticeship spaces available, and they are offered strictly on a first-come, first-served basis. Due to high demand, we encourage early applications to avoid disappointment.",
    "eyebrow": "Limited",
    "action": {
      "label": "Check Eligibility",
      "to": "/book-session"
    }
  }
} satisfies ProgrammeEligibilityData;

export const employerBenefits = {
  "id": "employers",
  "eyebrow": "Employer value",
  "title": "Develop marketing leadership that stays in the business.",
  "description": "The apprenticeship connects learning to real organisational priorities, giving employers practical outputs as well as long-term capability.",
  "items": [
    {
      "title": "Commercial performance",
      "description": "Stronger links between marketing objectives, customer value, investment and business outcomes."
    },
    {
      "title": "Strategic capability",
      "description": "More confident planning, prioritisation, challenge and decision support at senior level."
    },
    {
      "title": "Applied innovation",
      "description": "Responsible use of AI, digital capability and experimentation to improve marketing effectiveness."
    },
    {
      "title": "Retention and progression",
      "description": "A visible development route for high-potential marketing professionals and future leaders."
    }
  ]
} satisfies ItemSection;

export const faqHeading = {
  "id": "faq",
  "eyebrow": "Frequently asked questions",
  "title": "Clear answers before you take the next step."
} satisfies ProgrammeSectionData;

export const faqs = [
  {
    "question": "Is the Marketing Manager Level 6 Apprenticeship fully funded?",
    "answer": "It may be fully funded for eligible learners and employers through levy funding, levy transfer or applicable government support. Funding is confirmed after suitability, prior-learning and employer checks."
  },
  {
    "question": "Are funded places limited?",
    "answer": "Yes. Kent Business College has limited funded places for each intake, and places are confirmed only after the funding and suitability process is complete."
  },
  {
    "question": "Does the programme automatically make me a Chartered Marketer?",
    "answer": "No. Chartered Marketer status is awarded separately by CIM and is subject to its current membership, experience, CPD and application requirements. The programme supports advanced capability and professional evidence for progression."
  },
  {
    "question": "Who is the programme designed for?",
    "answer": "It is designed for employed marketing professionals whose role includes strategic planning, customer or market insight, integrated campaigns, performance management, leadership or cross-functional influence."
  },
  {
    "question": "Can an existing employee become an apprentice?",
    "answer": "Yes, where the apprenticeship develops substantial new knowledge, skills and behaviours and all eligibility and funding requirements are met."
  },
  {
    "question": "How do I secure a limited funded place?",
    "answer": "Book an information session or request an eligibility review. Kent Business College will discuss your role, employer support, prior learning and available funding before issuing an enrolment offer."
  }
] satisfies readonly { question: string; answer: string }[];

export const finalCTA = {
  "id": "next-step",
  "eyebrow": "September 2026 intake",
  "title": "Ready to lead marketing with greater strategic and commercial confidence?",
  "description": "Start with an eligibility and funding review. Limited fully funded Marketing Manager Level 6 places are available through Kent Business College.",
  "actions": [
    {
      "label": "Check eligibility",
      "to": "/book-session"
    },
    {
      "label": "Email the admissions team",
      "to": "mailto:Office@Kentbusinesscollege.org?subject=Marketing%20Manager%20Level%206%20Apprenticeship%20enquiry"
    }
  ],
  "contact": "Office@Kentbusinesscollege.org | kentbusinesscollege.com"
} satisfies ProgrammeSectionData & { actions: readonly ProgrammeAction[]; contact: string };

export const enquiryData = {
  "title": "Start your apprenticeship enquiry",
  "description": "Share a few details so our admissions team can review your eligibility, potential funding route and programme suitability.",
  "programme": "Marketing Manager Level 6 Apprenticeship",
  "enquiry": {
    "eyebrow": "Application enquiry",
    "steps": [
      {
        "title": "Step 1: Your details",
        "fields": [
          {
            "name": "name",
            "label": "Full name",
            "type": "text",
            "required": true,
            "placeholder": "Enter your full name",
            "autoComplete": "name"
          },
          {
            "name": "email",
            "label": "Email address",
            "type": "email",
            "required": true,
            "placeholder": "name@example.com",
            "autoComplete": "email"
          },
          {
            "name": "phone",
            "label": "Phone number",
            "type": "tel",
            "required": false,
            "placeholder": "Optional",
            "autoComplete": "tel"
          },
          {
            "name": "jobTitle",
            "label": "Current job title",
            "type": "text",
            "required": true,
            "placeholder": "Enter your current role",
            "autoComplete": "organization-title"
          },
          {
            "name": "preferredContact",
            "label": "Preferred contact method",
            "type": "radio",
            "required": false,
            "options": [
              "Email",
              "Phone",
              "Either"
            ],
            "value": "Email"
          }
        ]
      },
      {
        "title": "Step 2: Employment and eligibility",
        "fields": [
          {
            "name": "organisation",
            "label": "Employer or organisation",
            "type": "text",
            "required": true,
            "placeholder": "Enter your employer's name",
            "autoComplete": "organization"
          },
          {
            "name": "location",
            "label": "Main workplace location",
            "type": "text",
            "required": true,
            "placeholder": "Town or city"
          },
          {
            "name": "workplaceEngland",
            "label": "Is your main workplace in England?",
            "type": "select",
            "required": true,
            "options": [
              "Yes",
              "No",
              "Unsure"
            ],
            "placeholder": "Select an option"
          },
          {
            "name": "employerSupport",
            "label": "Has your employer agreed to support the apprenticeship?",
            "type": "select",
            "required": true,
            "options": [
              "Yes, confirmed",
              "Currently discussing it",
              "Not yet discussed",
              "I am completing this as an employer"
            ],
            "placeholder": "Select an option"
          },
          {
            "name": "programme",
            "label": "Programme of interest",
            "type": "text",
            "required": true,
            "readOnly": true,
            "value": "Marketing Manager Level 6 Apprenticeship"
          },
          {
            "name": "helpWith",
            "label": "What would you like help with?",
            "type": "checkbox",
            "required": false,
            "options": [
              "Checking eligibility",
              "Apprenticeship funding",
              "Employer requirements",
              "Programme content",
              "Application process",
              "Something else"
            ]
          },
          {
            "name": "message",
            "label": "Questions or additional information",
            "type": "textarea",
            "required": false,
            "placeholder": "Tell us about your role, career goals or any questions about the programme."
          }
        ]
      }
    ],
    "consent": "I agree that Kent Business College may use my information to respond to this enquiry.",
    "note": "Our admissions team will review your enquiry and contact you with the appropriate next steps. Submitting this form does not guarantee eligibility or funding.",
    "submitLabel": "Submit enquiry"
  }
} satisfies ProgrammeInterestData;

export const pageNavigation = [
  { label: "Why this programme", href: "#overview" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Core marketing disciplines", href: "#disciplines" },
  { label: "CIM Chartered Level 6 pathway", href: "#cim" },
  { label: "AI-enabled marketing", href: "#ai" },
  { label: "Eligibility Criteria", href: "#funding" },
  { label: "Employer value", href: "#employers" },
  { label: "Events", href: "#events" },
  { label: "Recognition", href: "#recognition" },
  { label: "Employer partnerships", href: "#partners" },
  { label: "Learner testimonials", href: "#testimonials" },
] as const;

export const mobileActions = [
  { label: "Check eligibility", to: "/book-session" },
  { label: "Funding places", to: "#funding" },
] as const;

export const programmeMeta = {
  title: "Marketing Manager Level 6 Apprenticeship | Kent Business College",
  description: heroData.hero.lead,
};
export const courseSchema = {
  "@context": "https://schema.org", "@type": "Course",
  name: enquiryData.programme,
  description: programmeMeta.description,
  provider: { "@type": "CollegeOrUniversity", name: "Kent Business College" },
  educationalCredentialAwarded: "CIM Diploma Level 6 in Professional and Digital Marketing",
};
export const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question", name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};
