import { Award, Building2, GraduationCap, HeartHandshake, Route, ShieldCheck, Trophy, UserRoundCheck, UsersRound, type LucideIcon } from "lucide-react";

// Content: Readdy Awards reference, captured 8 September 2026.
// Only corrupted punctuation is repaired; scope limitations remain verbatim.
export type RecognitionFilter = "all" | "quality" | "professional" | "certification" | "award";
export type RecognitionGroup = "standards" | "relationships" | "awards";
export interface Recognition {
  id: string;
  categoryLabel: string;
  filterGroup: Exclude<RecognitionFilter, "all">;
  group: RecognitionGroup;
  icon: LucideIcon;
  title: string;
  year: string;
  awardingBody: string;
  description: string;
}

export const awardsSeo = {
  "title": "Accreditations, Awards & Professional Recognition | Kent Business College",
  "description": "Explore Kent Business College's quality standards, professional-body relationships, certifications and awards — independent recognition that reflects how we support learners, employers and professional development."
};

export const awardsHero = {
  "eyebrow": "Recognition & Standards",
  "title": "Recognition that reflects",
  "accent": "the quality we deliver",
  "paragraphs": [
    "Independent standards, professional relationships and external recognition that reflect how Kent Business College supports learners, employers and professional development.",
    "Our recognition spans quality standards, professional-body relationships, organisational certifications and external awards."
  ],
  "image": "/assets/images/awards/recognition-hero.jpg"
};

export const awardsIntro = {
  "eyebrow": "Our record",
  "title": "Standards, recognition & professional relationships",
  "description": "KBC’s external recognition reflects different aspects of the College — from learner support and organisational quality to professional relationships, information security and employer standards.",
  "note": "Each recognition below is labelled according to the type of relationship or standard it represents."
};

export const recognitionFilters = [
  {
    "key": "all",
    "label": "ALL"
  },
  {
    "key": "quality",
    "label": "QUALITY STANDARDS"
  },
  {
    "key": "professional",
    "label": "PROFESSIONAL RELATIONSHIPS"
  },
  {
    "key": "certification",
    "label": "CERTIFICATIONS"
  },
  {
    "key": "award",
    "label": "AWARDS & RECOGNITION"
  }
] as const satisfies readonly { key: RecognitionFilter; label: string }[];

export const recognitionGroups = [
  {
    "key": "standards",
    "title": "Quality & organisational standards",
    "description": "Independent standards that reflect how KBC operates as an organisation, employer and provider of guidance."
  },
  {
    "key": "relationships",
    "title": "Professional relationships & approved status",
    "description": "Recognised relationships and approved status with professional bodies, held within their confirmed scope."
  },
  {
    "key": "awards",
    "title": "Awards & external recognition",
    "description": "External recognition of the quality and outcomes of KBC's professional provision."
  }
] as const satisfies readonly { key: RecognitionGroup; title: string; description: string }[];

export const recognitions: readonly Recognition[] = [
  {
    "id": "matrix-standard",
    "categoryLabel": "QUALITY STANDARD",
    "filterGroup": "quality",
    "group": "standards",
    "icon": Award,
    "title": "Matrix Standard",
    "year": "2025",
    "awardingBody": "The Growth Company",
    "description": "The Matrix Standard is the national quality standard for information, advice and guidance. It independently assesses the quality of the information, advice and guidance KBC provides to learners and prospective learners, helping people make informed decisions about their development."
  },
  {
    "id": "investors-in-people",
    "categoryLabel": "PEOPLE STANDARD",
    "filterGroup": "quality",
    "group": "standards",
    "icon": UsersRound,
    "title": "Investors in People – Silver",
    "year": "2024",
    "awardingBody": "Investors in People",
    "description": "Investors in People – Silver reflects KBC's commitment to developing and supporting its people. It recognises organisational practice in leading, supporting and improving colleagues — a people standard, not a programme accreditation."
  },
  {
    "id": "apm-corporate-partner",
    "categoryLabel": "PROFESSIONAL PARTNERSHIP",
    "filterGroup": "professional",
    "group": "relationships",
    "icon": UserRoundCheck,
    "title": "APM Corporate Partner",
    "year": "2026",
    "awardingBody": "Association for Project Management",
    "description": "KBC's corporate partnership with the Association for Project Management supports our engagement with the project profession, recognised standards and relevant professional-development pathways. It does not mean every KBC programme is APM-accredited or every qualification is APM-awarded."
  },
  {
    "id": "cmi-approved-centre",
    "categoryLabel": "APPROVED CENTRE",
    "filterGroup": "professional",
    "group": "relationships",
    "icon": Building2,
    "title": "CMI Approved Centre",
    "year": "2025",
    "awardingBody": "Chartered Management Institute",
    "description": "An approved-centre relationship with the Chartered Management Institute confirms KBC's status to deliver CMI-aligned leadership and management development, within the specific scope confirmed by CMI. It does not extend to programmes outside that approval."
  },
  {
    "id": "cim-study-centre",
    "categoryLabel": "ACCREDITED STUDY CENTRE",
    "filterGroup": "professional",
    "group": "relationships",
    "icon": GraduationCap,
    "title": "CIM Accredited Study Centre",
    "year": "2025",
    "awardingBody": "Chartered Institute of Marketing",
    "description": "Accredited study-centre status with the Chartered Institute of Marketing reflects marketing programmes delivered in line with CIM's professional framework. This is distinct from KBC's CMI approval — CIM supports marketing, while CMI relates to management and leadership."
  },
  {
    "id": "apprenticeship-provider-finalist",
    "categoryLabel": "AWARD FINALIST",
    "filterGroup": "award",
    "group": "awards",
    "icon": Trophy,
    "title": "Apprenticeship Provider of the Year – Finalist",
    "year": "2025",
    "awardingBody": "Kent Business Awards",
    "description": "KBC was shortlisted as a finalist for Apprenticeship Provider of the Year. This finalist recognition reflects the quality, outcomes and employer feedback across our professional apprenticeship provision — a shortlist, not a win."
  },
  {
    "id": "cyber-essentials",
    "categoryLabel": "CYBER SECURITY CERTIFICATION",
    "filterGroup": "certification",
    "group": "standards",
    "icon": ShieldCheck,
    "title": "Cyber Essentials Certified",
    "year": "2025",
    "awardingBody": "National Cyber Security Centre",
    "description": "Cyber Essentials is a Government-backed certification confirming that KBC's systems and processes meet the required standard for cyber-security controls. It relates to organisational information-security practice — not to academic or programme accreditation."
  },
  {
    "id": "living-wage-employer",
    "categoryLabel": "EMPLOYER STANDARD",
    "filterGroup": "quality",
    "group": "standards",
    "icon": HeartHandshake,
    "title": "Living Wage Employer",
    "year": "2024",
    "awardingBody": "Living Wage Foundation",
    "description": "The Living Wage Employer recognition reflects KBC's commitment to paying colleagues the real Living Wage. It is an employer standard about how we value our people — it does not accredit programmes or learning."
  }
];

export const recognitionBenefits = {
  "eyebrow": "Why recognition matters",
  "title": "What this means for learners and employers",
  "items": [
    {
      "icon": GraduationCap,
      "title": "For learners",
      "copy": "Quality support, professional standards and relevant progression relationships that strengthen the wider learning experience."
    },
    {
      "icon": Building2,
      "title": "For employers",
      "copy": "Greater confidence in organisational standards, professional relationships, information security and workforce-development practice."
    },
    {
      "icon": Route,
      "title": "For professional development",
      "copy": "Connections with recognised bodies and standards that support relevant qualifications, professional practice and progression where applicable."
    }
  ]
};

export const awardsCta = {
  "eyebrow": "Experience KBC",
  "title": "See what recognised quality looks like in practice",
  "description": "Explore KBC programmes and employer development, or speak with our team about professional development that fits your goals or organisation.",
  "actions": [
    {
      "label": "Explore programmes",
      "href": "/#programmes"
    },
    {
      "label": "For employers",
      "href": "/employers"
    },
    {
      "label": "Speak to KBC",
      "href": "/contact"
    }
  ]
};
