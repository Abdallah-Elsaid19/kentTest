/** Verified discovery metadata only. Long-form content stays with each detail page.
 * Source decisions and excluded/uncertain routes: docs/ALL_PROGRAMMES_CONTENT_QA.md.
 * This registry is deliberately independent of the legacy CMS Programme API type.
 */
export const programmeColleges = {
  "project-controls": { title: "College of Project Controls and Project Management", label: "Project Controls & Project Management" },
  marketing: { title: "College of Marketing", label: "Marketing" },
  leadership: { title: "College of Leadership", label: "Leadership" },
} as const;

export type ProgrammeCollege = keyof typeof programmeColleges;
export type ProgrammeType = "apprenticeship" | "certificate" | "qualification" | "professional-pathway" | "programme";

export const programmeTypeLabels: Record<ProgrammeType, string> = {
  apprenticeship: "Apprenticeship", certificate: "Certificate", qualification: "Qualification",
  "professional-pathway": "Professional pathway", programme: "Programme",
};

export interface ProgrammeSummary {
  id: string;
  slug: string;
  title: string;
  college: ProgrammeCollege;
  type: ProgrammeType;
  level?: number;
  summary: string;
  duration?: string;
  durationSourceUrl?: string;
  nextIntake?: { label: string; displayUntil: string };
  fundingLabel?: string;
  qualification?: string;
  professionalRecognition?: readonly string[];
  image: string;
  imageAlt: string;
  href: string;
  sourceUrl: string;
  verifiedOn: string;
}

export const programmes: readonly ProgrammeSummary[] = [
  {
    id: "associate-project-manager", slug: "associate-project-manager-level-4",
    title: "Associate Project Manager Level 4", college: "project-controls", type: "apprenticeship", level: 4,
    summary: "Build practical project management capability through a focused route combining PMP preparation with applied AI expertise in project controls.",
    duration: "12 months",
    nextIntake: { label: "September", displayUntil: "2026-09-30" },
    fundingLabel: "Fully funded for eligible learners",
    professionalRecognition: ["PMP preparation"],
    image: "/assets/images/learner-home/associate-project-manager.webp", imageAlt: "Associate Project Manager learning at Kent Business College",
    href: "/associate-project-manager-level-4", sourceUrl: "https://kentbusinesscollege.com/associate-project-manager-level-4/", verifiedOn: "2026-09-08",
  },
  {
    id: "project-controls-professional", slug: "project-controls-professional-level-6",
    title: "Project Controls Professional Level 6", college: "project-controls", type: "apprenticeship", level: 6,
    summary: "Develop work-based capability in planning, cost, forecasting and governance, with Operational, Strategic and Chartered Project Professional routes.",
    duration: "27 months",
    nextIntake: { label: "September", displayUntil: "2026-09-30" },
    fundingLabel: "Fully funded for eligible learners",
    professionalRecognition: ["Chartered pathway: APM-recognised technical-knowledge assessment. ChPP status requires separate APM assessment."],
    image: "/assets/images/programme-project-controls.jpg", imageAlt: "Project controls programme at Kent Business College",
    href: "/project-controls-professional-level-6", sourceUrl: "https://kentbusinesscollege.com/project-control-professional-level-6/", verifiedOn: "2026-09-08",
  },
  {
    id: "marketing-executive", slug: "marketing-executive-level-4",
    title: "Marketing Executive Level 4 Apprenticeship", college: "marketing", type: "apprenticeship", level: 4,
    summary: "Develop practical marketing skills through workplace activity while working towards the CIM Level 4 Certificate in Professional and Digital Marketing.",
    duration: "12 months",
    durationSourceUrl: "https://kentbusinesscollege.com/college-of-marketing-2/",
    nextIntake: { label: "September 2026", displayUntil: "2026-09-30" },
    fundingLabel: "Limited funded places, subject to eligibility and programme terms",
    qualification: "CIM Level 4 Certificate in Professional and Digital Marketing",
    image: "/assets/images/programme-marketing-executive.jpg", imageAlt: "Marketing Executive programme at Kent Business College",
    href: "/marketing-executive-level-4", sourceUrl: "https://kentbusinesscollege.com/fully-funded-marketing-executive-level-4-apprenticeship/", verifiedOn: "2026-09-08",
  },
  {
    id: "marketing-manager", slug: "marketing-manager-level-6",
    title: "Marketing Manager Level 6 Apprenticeship", college: "marketing", type: "apprenticeship", level: 6,
    summary: "Build strategic thinking, commercial confidence and AI-enabled marketing skills through a workplace-focused apprenticeship with measurable business impact.",
    duration: "16 months",
    durationSourceUrl: "https://kentbusinesscollege.com/college-of-marketing-2/",
    nextIntake: { label: "September 2026", displayUntil: "2026-09-30" },
    fundingLabel: "Limited funded places, subject to eligibility and programme terms",
    qualification: "CIM Diploma Level 6 in Professional and Digital Marketing",
    image: "/assets/images/programme-marketing-manager.jpg", imageAlt: "Marketing Manager programme at Kent Business College",
    href: "/marketing-manager-level-6", sourceUrl: "https://kentbusinesscollege.com/marketing-manager-level-6-apprenticeship/", verifiedOn: "2026-09-08",
  },
  {
    id: "ai-project-controls", slug: "ai-in-project-controls-certificate",
    title: "AI in Project Controls Certificate", college: "project-controls", type: "certificate",
    summary: "Build responsible AI workflows, dashboards, automations and governed agents using real project controls data, with a practical workplace capstone.",
    duration: "4 months",
    nextIntake: { label: "September 2026", displayUntil: "2026-09-30" },
    image: "/assets/images/ai-project-controls-ai-right-hd-v2.png", imageAlt: "AI in Project Controls course illustration",
    href: "/ai-in-project-controls-certificate", sourceUrl: "https://kentbusinesscollege.com/ai-in-project-controls-certificate/", verifiedOn: "2026-09-08",
  },
];

export function currentIntake(programme: ProgrammeSummary, today = new Date().toISOString().slice(0, 10)) {
  return programme.nextIntake && today <= programme.nextIntake.displayUntil ? programme.nextIntake.label : undefined;
}
