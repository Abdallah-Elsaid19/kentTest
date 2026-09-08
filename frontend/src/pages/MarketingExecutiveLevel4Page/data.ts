import type { ProgrammeHeroData } from "@/components/programme/ProgrammeHero";
import type { ProgrammeSectionData } from "@/components/programme/ProgrammeSection";
import type { ProgrammeItem } from "@/components/programme/ProgrammeGrids";
import type { ProgrammeCurriculumTrack } from "@/components/programme/ProgrammeCurriculumCards";
import type { ProgrammeWeeklyCommitmentData } from "@/components/programme/ProgrammeWeeklyCommitment";

// Authoritative programme copy, retrieved 8 September 2026. Preserve wording.
export const contentSource = "https://kentbusinesscollege.com/fully-funded-marketing-executive-level-4-apprenticeship/";
type Action = { label: string; to: string };
type ItemSection = ProgrammeSectionData & { items: readonly ProgrammeItem[] };
type InformationPanel = ProgrammeItem & { eyebrow: string; action: Action };
type EligibilityData = ProgrammeSectionData & { main: { eyebrow: string; title: string; items: readonly string[] }; aside: InformationPanel };
type FundingData = ItemSection & { main: InformationPanel; note: string };
type CurriculumData = ProgrammeSectionData & { caption: string; image: string; imageAlt: string; modules: readonly ProgrammeCurriculumTrack[]; milestones: readonly ProgrammeItem[]; evidence: string };
type CimData = ProgrammeSectionData & { titleDetail: string; descriptionDetail: string; items: readonly (ProgrammeItem & { eyebrow: string })[]; note: string; searchNote: string };

export const heroData = {
  "titleId": "marketing-executive-title",
  "longTitle": true,
  "mobileActionsAfterLead": false,
  "audienceTabletAlign": "left",
  "audienceBeforeActions": true,
  "hero": {
    "eyebrow": "Level 4 · Professional & Digital Marketing",
    "title": "Gain a",
    "accent": "Fully Funded CIM Level 4 Certification",
    "titleSuffix": "in Professional and Digital Marketing",
    "lead": "Build practical marketing capability through real workplace activity and work towards the CIM Level 4 Certificate in Professional and Digital Marketing from the Chartered Institute of Marketing.",
    "fundingTitle": "Fully funded route",
    "fundingDescription": "Apprenticeship training can be fully funded through an eligible funding route. The CIM Level 4 qualification is funded by Kent Business College as part of the dual programme, subject to eligibility, engagement, achievement and the applicable programme terms.",
    "audienceLabel": "Applied progression",
    "audience": "Build measurable marketing capability.",
    "catalogue": "https://kentbusinesscollege.com/wp-content/uploads/2026/06/Apprentice-Charter-Agreement-with-the-Marketing-Executive-Level-4-with-Level-4-Certificate-in-Professional-and-Digital-Marketing_compressed.pdf",
    "catalogueLabel": "Download catalogue",
    "image": "/assets/images/programme-marketing-executive.jpg"
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
      "title": "Marketing Impact",
      "description": "Research, planning and customer value",
      "marker": "01"
    },
    {
      "title": "Social Media",
      "description": "Content, channels and audience engagement",
      "marker": "02"
    },
    {
      "title": "Marketing Technology",
      "description": "CRM, analytics, automation and MarTech",
      "marker": "03"
    },
    {
      "title": "Workplace Evidence",
      "description": "Real campaigns, coaching and EPA readiness",
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
    "image": "/assets/images/cim-level-4-certificate.png",
    "name": "CIM Level 4 Certificate in Professional and Digital Marketing"
  },
  "overlay": "default"
} satisfies ProgrammeHeroData;

export const programmeStats = [
  {
    "value": "Potentially 100%",
    "label": "funded subject to eligibility"
  },
  {
    "value": "Level 4",
    "label": "advanced practical capability"
  },
  {
    "value": "Workplace value",
    "label": "projects linked to business needs"
  },
  {
    "value": "CIM Level 4",
    "label": "professional qualification included"
  }
] satisfies readonly { label: string; value: string }[];

export const overviewData = {
  "id": "overview",
  "eyebrow": "Practical marketing capability",
  "title": "That performs in the real world.",
  "description": "This programme connects marketing activity to customer needs, commercial priorities and measurable business outcomes. You learn by applying structured marketing practice in your organisation.",
  "items": [
    {
      "title": "Market and customer insight",
      "description": "Gather, interpret and use customer, competitor and market evidence to improve marketing decisions."
    },
    {
      "title": "Campaign planning",
      "description": "Turn objectives into joined-up campaigns with audiences, channels, messages, budgets and measures."
    },
    {
      "title": "Content and channels",
      "description": "Create relevant content and select channels that fit the audience, campaign objective and customer journey."
    },
    {
      "title": "Data and optimisation",
      "description": "Use analytics to evaluate performance, test ideas, identify improvement and explain what the data means."
    },
    {
      "title": "Professional practice",
      "description": "Develop communication, collaboration, ethics, organisation and continuous learning in a marketing role."
    }
  ]
} satisfies ItemSection;

export const learnerExperience = {
  "id": "learning",
  "eyebrow": "Complete support experience",
  "title": "More than online classes.",
  "description": "A structured learner experience combines live teaching, skills coaching, workplace application and professional development.",
  "items": [
    {
      "title": "Live professional learning",
      "description": "Interactive teaching, examples, workshops and peer discussion."
    },
    {
      "title": "Dedicated skills coach",
      "description": "Regular coaching focused on progress, evidence and workplace impact."
    },
    {
      "title": "Workplace projects",
      "description": "Apply learning through relevant marketing activity agreed with your employer."
    },
    {
      "title": "Professional progression",
      "description": "Build evidence, confidence and a foundation for future CIM progression."
    }
  ]
} satisfies ItemSection;

export const weeklyCommitment = {
  "title": "Your weekly learning commitment",
  "description": "A balanced weekly workload of approximately 8 hours, combining live learning, guided reading and workplace application.",
  "hours": [
    {
      "hours": "2h",
      "label": "Live online classes",
      "description": "Interactive tutor-led teaching, discussion, examples and practical activities."
    },
    {
      "hours": "3h",
      "label": "Reading & quizzes",
      "description": "Guided independent learning and knowledge checks through structured materials."
    },
    {
      "hours": "3h",
      "label": "Workplace application",
      "description": "Apply your learning to real marketing activity and build evidence for assessment."
    }
  ]
} satisfies ProgrammeWeeklyCommitmentData;

export const curriculumJourney = {
  "id": "curriculum",
  "eyebrow": "Catalogue-aligned curriculum",
  "title": "Marketing Executive Level 4 curriculum.",
  "description": "The programme moves from marketing foundations into social media application, marketing technology, Gateway and End Point Assessment. Knowledge, skills and behaviours are revisited and strengthened through live learning, workplace activity, coaching and evidence.",
  "caption": "Programme journey adapted from the Kent Business College Marketing Executive Level 4 Apprentice Commitment Charter.",
  "image": "/assets/images/marketing-executive-curriculum.png",
  "imageAlt": "Marketing Executive Level 4 curriculum journey from Soft Start through Marketing Impact and Analysis, Social Media Executive, Marketing Technology, Gateway, End Point Assessment, final MarTech exam and graduation",
  "modules": [
    {
      "number": "01",
      "eyebrow": "Months 2-5",
      "title": "Marketing Impact and Planning",
      "description": "Build the foundations of confident marketing practice and understand how marketing supports wider business objectives.",
      "items": [
        "Extended marketing mix, segmentation and product development",
        "Customer decision-making, brand positioning and reputation",
        "Market research, data sources and marketing insight",
        "Business context, legal requirements and ethical practice",
        "Campaign structures, SMART objectives and planning discipline"
      ]
    },
    {
      "number": "02",
      "eyebrow": "Months 6-9",
      "title": "Social Media Executive",
      "description": "Move from understanding into practical application through content, digital channels, audience engagement and campaign delivery.",
      "items": [
        "Social media content, channel coordination and brand presence",
        "Creative communications, copy, briefs and presentations",
        "Campaign planning, delivery and project management",
        "Stakeholder, supplier and cross-functional collaboration",
        "Formal CIM Social Media assessment during the programme"
      ]
    },
    {
      "number": "03",
      "eyebrow": "Later learning stage",
      "title": "Marketing Technology Executive",
      "description": "Bring strategy and execution together through the systems, data and technologies that support modern marketing performance.",
      "items": [
        "CRM, marketing platforms, digital tools and business systems",
        "Automation, analytics and evidence-led optimisation",
        "Campaign measurement, reporting and performance insight",
        "Agile working, time management and multiple-project delivery",
        "Final CIM Marketing Technology assessment after the EPA"
      ]
    }
  ],
  "milestones": [
    {
      "title": "Soft Start",
      "description": "Induction, coach relationship, systems, evidence and expectations."
    },
    {
      "title": "EPA Gateway",
      "description": "Confirm that required knowledge, skills, behaviours and evidence are ready."
    },
    {
      "title": "End Point Assessment",
      "description": "Independent assessment, including a real-work project showcase and professional evidence."
    },
    {
      "title": "Completion",
      "description": "Final MarTech assessment and graduation following successful achievement."
    }
  ],
  "evidence": "EPA project evidence: the catalogue describes a real workplace project with planning, research, execution and evaluation; recognised marketing frameworks; SMART objectives; performance data; stakeholder collaboration; time and budget controls; and supporting annex evidence."
} satisfies CurriculumData;

export const knowledgeSkillsBehaviours = [
  {
    "title": "Knowledge",
    "description": "Marketing theory, customer behaviour, brand, CRM, market research, routes to market, communication channels, regulation and business context."
  },
  {
    "title": "Skills",
    "description": "Coordinate channels, deliver SMART campaigns, create content, work with stakeholders, manage projects and budgets, analyse data and use marketing technology."
  },
  {
    "title": "Behaviours",
    "description": "Professionalism, initiative, creativity, analytical thinking, collaboration, adaptability, resilience, ethical practice and customer focus."
  }
] satisfies readonly ProgrammeItem[];

export const aiMarketingData = {
  "id": "ai",
  "eyebrow": "AI-enabled marketing",
  "title": "Use AI to work smarter without losing judgement, evidence or brand trust.",
  "description": "Learners explore responsible uses of AI for research, ideation, content support, analysis and workflow efficiency, while keeping human review and data protection at the centre.",
  "labels": [
    "Human-led",
    "AI-enabled"
  ],
  "workflow": [
    "Plan",
    "Analyse",
    "Create",
    "Optimise",
    "Govern"
  ],
  "items": [
    {
      "title": "Plan",
      "description": "Use structured prompts to explore audiences, campaign options and content requirements."
    },
    {
      "title": "Analyse",
      "description": "Summarise performance signals, identify patterns and challenge assumptions."
    },
    {
      "title": "Create",
      "description": "Accelerate drafts and ideas while preserving brand voice, originality and approval."
    },
    {
      "title": "Govern",
      "description": "Apply human review, confidentiality, accuracy checks and responsible-use controls."
    }
  ]
} satisfies ItemSection & { labels: readonly string[]; workflow: readonly string[] };

export const eligibilityData = {
  "id": "eligibility",
  "eyebrow": "Eligibility Criteria",
  "title": "Check that you meet the apprenticeship funding requirements.",
  "main": {
    "eyebrow": "Who is eligible?",
    "title": "Eligibility Criteria",
    "items": [
      "UK resident for the past 3 years",
      "Must not require sponsorship to work and must hold a British Passport, Indefinite Leave to Remain, or a Tier 2 visa with at least three years of UK residency",
      "Not enrolled in other government-funded training at the time of this programme",
      "Self-employed individuals are not eligible for DfE funding",
      "Paid employment in England, normally 30 or more hours per week with a minimum of 16",
      "Employer based in England and registered with the Apprenticeship Service",
      "Spend at least 50% of their working hours within England"
    ]
  },
  "aside": {
    "eyebrow": "Limited",
    "title": "Funded apprenticeship spaces",
    "description": "Please note: We have a limited number of funded apprenticeship spaces available, and they are offered strictly on a first-come, first-served basis. Due to high demand, we encourage early applications to avoid disappointment.",
    "action": {
      "label": "Check Eligibility",
      "to": "/book-session"
    }
  }
} satisfies EligibilityData;

export const fundingData = {
  "id": "funding",
  "eyebrow": "Funding and limited places",
  "title": "Fully funded development with limited places.",
  "description": "Limited funded places from Kent Business College combine apprenticeship funding with an integrated CIM Level 4 professional qualification offer.",
  "main": {
    "eyebrow": "Fully funded apprenticeship route",
    "title": "Fully funded apprenticeship training",
    "description": "The Marketing Executive Level 4 apprenticeship training can be covered through eligible Department for Education apprenticeship funding. Kent Business College also funds the integrated CIM Level 4 qualification, membership and examination costs under the programme terms.",
    "items": [
      "The learner is not personally charged for eligible apprenticeship training.",
      "The employer and KBC agree the training plan and funding route.",
      "Funded places remain limited and are confirmed after suitability, employer and funding checks."
    ],
    "action": {
      "label": "Discuss funding with KBC",
      "to": "/book-session"
    }
  },
  "items": [
    {
      "title": "Limited funded places",
      "description": "Kent Business College has a limited funded-place allocation for each intake. Places are confirmed only after eligibility and employer checks."
    },
    {
      "title": "Levy-funded",
      "description": "Employers with available levy funds can use their apprenticeship service account, subject to the applicable rules and funding band."
    },
    {
      "title": "Co-investment route",
      "description": "Where levy funds are not available, an applicable government co-investment arrangement may be considered and confirmed by KBC."
    }
  ],
  "note": "Funding and the KBC-funded CIM offer are subject to apprenticeship eligibility, prior learning, employer support, available allocation, learner engagement, achievement requirements and the programme terms confirmed before enrolment."
} satisfies FundingData;

export const cimQualification = {
  "id": "cim",
  "eyebrow": "Dual programme and professional qualification",
  "title": "CIM Level 4 from the Chartered Institute of Marketing.",
  "description": "Alongside the Marketing Executive Level 4 apprenticeship, learners work towards the CIM Level 4 Certificate in Professional and Digital Marketing through an integrated, workplace-focused pathway.",
  "titleDetail": "Two recognised outcomes in one connected journey",
  "descriptionDetail": "The apprenticeship develops practical competence through real work-based learning. The CIM Level 4 Certificate adds professional marketing recognition and is funded by Kent Business College as part of the programme offer, including membership and examination costs under the applicable terms.",
  "items": [
    {
      "eyebrow": "Integrated recognition",
      "title": "Marketing Impact and Campaigns",
      "description": "The catalogue states that these units are exempt from separate external CIM assessment when the learner successfully passes the apprenticeship EPA."
    },
    {
      "eyebrow": "Formal CIM assessment",
      "title": "Social Media",
      "description": "A formal CIM Social Media assessment is completed during the apprenticeship after the relevant module and revision activity."
    },
    {
      "eyebrow": "Post-EPA assessment",
      "title": "Marketing Technology",
      "description": "The final MarTech assessment is completed after successful End Point Assessment to achieve the full CIM certificate."
    }
  ],
  "note": "Professional title clarification: the accurate qualification name is the CIM Level 4 Certificate in Professional and Digital Marketing, awarded by the Chartered Institute of Marketing. It does not itself confer Chartered Marketer status.",
  "searchNote": "This programme is sometimes searched for using the phrase “CIM Chartered L4”; the page uses the official qualification wording while supporting that search intent."
} satisfies CimData;

export const employerBenefits = {
  "id": "employers",
  "eyebrow": "Employer value",
  "title": "Invest in marketing capability that stays in the business.",
  "description": "The learner applies each stage of the programme to relevant workplace activity, creating practical value while developing professionally.",
  "items": [
    {
      "title": "Accountable campaigns",
      "description": "Clearer objectives, ownership, measures and learning across campaign activity."
    },
    {
      "title": "Customer understanding",
      "description": "Better use of research and customer evidence to shape decisions."
    },
    {
      "title": "Data confidence",
      "description": "Stronger interpretation of performance, not simply reporting numbers."
    },
    {
      "title": "Retention and progression",
      "description": "A visible development route for capable marketing employees."
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
    "question": "What is the entry requirement?",
    "answer": "Admissions are experience-led. You should be employed in a relevant marketing role, have employer support, be able to work at Level 4 and need substantial new learning. KBC will also review prior qualifications, English and maths requirements where applicable, and funding eligibility."
  },
  {
    "question": "Is the programme fully funded?",
    "answer": "It can be fully funded through an eligible apprenticeship funding arrangement. The final route depends on the employer, learner circumstances, prior learning, the current funding rules and available funded places."
  },
  {
    "question": "Are places limited?",
    "answer": "Yes. Kent Business College operates a limited funded-place allocation for each intake. Enquiry or application does not reserve a place; the place is secured after suitability, employer and funding checks are complete."
  },
  {
    "question": "Does the programme include a CIM Level 4 qualification?",
    "answer": "Yes. The dual programme includes the CIM Level 4 Certificate in Professional and Digital Marketing. The catalogue explains how apprenticeship achievement, the Social Media assessment and the final Marketing Technology assessment combine toward the certificate. The qualification does not automatically award Chartered Marketer status."
  },
  {
    "question": "How is learning delivered?",
    "answer": "The programme combines live online teaching, coaching, independent study, workplace activity, evidence development and end-point assessment preparation. The final schedule and duration are confirmed during enrolment."
  },
  {
    "question": "What happens after I apply?",
    "answer": "KBC will review your role, goals and prior learning, speak with your employer, complete the eligibility and funding checks, confirm the programme offer and then arrange onboarding and induction."
  }
] satisfies readonly { question: string; answer: string }[];

export const finalCTA = {
  "id": "next-steps",
  "eyebrow": "September 2026 intake",
  "title": "Ready to build marketing capability that creates visible business value?",
  "description": "Apply early for one of the limited funded Marketing Executive Level 4 apprenticeship places available through Kent Business College.",
  "actions": [
    {
      "label": "Apply for a funded place",
      "to": "/book-session"
    },
    {
      "label": "Email the admissions team",
      "to": "mailto:Office@Kentbusinesscollege.org?subject=Marketing%20Executive%20Level%204%20Apprenticeship%20enquiry"
    }
  ]
} satisfies ProgrammeSectionData & { actions: readonly Action[] };

export const pageNavigation = [
  { label: "Practical marketing capability", href: "#overview" },
  { label: "Complete support experience", href: "#learning" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "AI-enabled marketing", href: "#ai" },
  { label: "Eligibility Criteria", href: "#eligibility" },
  { label: "Funding", href: "#funding" },
  { label: "CIM Level 4", href: "#cim" },
  { label: "Employer value", href: "#employers" },
  { label: "Events", href: "#events" },
  { label: "Recognition", href: "#recognition" },
  { label: "Employer partnerships", href: "#partners" },
  { label: "Learner testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faq" },
] as const;

export const programmeMeta = {
  title: "Marketing Executive Level 4 Apprenticeship | Kent Business College",
  description: heroData.hero.lead,
};
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Marketing Executive Level 4 Apprenticeship",
  description: programmeMeta.description,
  provider: { "@type": "CollegeOrUniversity", name: "Kent Business College" },
  educationalCredentialAwarded: "CIM Level 4 Certificate in Professional and Digital Marketing",
};
export const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question", name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};
