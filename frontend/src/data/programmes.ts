/** Verified discovery metadata only. Long-form content stays with each detail page.
 * Source decisions and excluded/uncertain routes: docs/ALL_PROGRAMMES_CONTENT_QA.md.
 * This registry is deliberately independent of the legacy CMS Programme API type.
 */
export const programmeColleges = {
  "project-controls": { title: ("{{cms:programmes.data_programmes_programme_colleges.project_controls_title_001}}" as string), label: ("{{cms:programmes.data_programmes_programme_colleges.project_controls_label_002}}" as string) },
  marketing: { title: ("{{cms:programmes.data_programmes_programme_colleges.marketing_title_003}}" as string), label: ("{{cms:programmes.data_programmes_programme_colleges.marketing_label_004}}" as string) },
  leadership: { title: ("{{cms:programmes.data_programmes_programme_colleges.leadership_title_005}}" as string), label: ("{{cms:programmes.data_programmes_programme_colleges.leadership_label_006}}" as string) },
} as const;

export type ProgrammeCollege = keyof typeof programmeColleges;
export type ProgrammeType = "apprenticeship" | "certificate" | "qualification" | "professional-pathway" | "programme";

export const programmeTypeLabels: Record<ProgrammeType, string> = {
  apprenticeship: "Apprenticeship", certificate: "Certificate", qualification: "Qualification",
  "professional-pathway": ("{{cms:programmes.data_programmes_programme_type_labels.professional_pathway_007}}" as string), programme: "Programme",
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
    title: ("{{cms:programmes.data_programmes_programmes.title_008}}" as string), college: "project-controls", type: "apprenticeship", level: 4,
    summary: ("{{cms:programmes.data_programmes_programmes.summary_009}}" as string),
    duration: ("{{cms:programmes.data_programmes_programmes.duration_010}}" as string),
    nextIntake: { label: ("{{cms:programmes.data_programmes_programmes.next_intake_label_011}}" as string), displayUntil: "2026-09-30" },
    fundingLabel: ("{{cms:programmes.data_programmes_programmes.funding_label_012}}" as string),
    professionalRecognition: [("{{cms:programmes.data_programmes_programmes.professional_recognition_013}}" as string)],
    image: ("{{cms:programmes.data_programmes_programmes.image_014}}" as string), imageAlt: ("{{cms:programmes.data_programmes_programmes.image_alt_015}}" as string),
    href: ("{{cms:programmes.data_programmes_programmes.href_016}}" as string), sourceUrl: ("{{cms:programmes.data_programmes_programmes.source_url_017}}" as string), verifiedOn: "2026-09-08",
  },
  {
    id: "project-controls-professional", slug: "project-controls-professional-level-6",
    title: ("{{cms:programmes.data_programmes_programmes.title_018}}" as string), college: "project-controls", type: "apprenticeship", level: 6,
    summary: ("{{cms:programmes.data_programmes_programmes.summary_019}}" as string),
    duration: ("{{cms:programmes.data_programmes_programmes.duration_020}}" as string),
    nextIntake: { label: ("{{cms:programmes.data_programmes_programmes.next_intake_label_021}}" as string), displayUntil: "2026-09-30" },
    fundingLabel: ("{{cms:programmes.data_programmes_programmes.funding_label_022}}" as string),
    professionalRecognition: [("{{cms:programmes.data_programmes_programmes.professional_recognition_023}}" as string)],
    image: ("{{cms:programmes.data_programmes_programmes.image_024}}" as string), imageAlt: ("{{cms:programmes.data_programmes_programmes.image_alt_025}}" as string),
    href: ("{{cms:programmes.data_programmes_programmes.href_026}}" as string), sourceUrl: ("{{cms:programmes.data_programmes_programmes.source_url_027}}" as string), verifiedOn: "2026-09-08",
  },
  {
    id: "marketing-executive", slug: "marketing-executive-level-4",
    title: ("{{cms:programmes.data_programmes_programmes.title_028}}" as string), college: "marketing", type: "apprenticeship", level: 4,
    summary: ("{{cms:programmes.data_programmes_programmes.summary_029}}" as string),
    duration: ("{{cms:programmes.data_programmes_programmes.duration_030}}" as string),
    durationSourceUrl: ("{{cms:programmes.data_programmes_programmes.duration_source_url_031}}" as string),
    nextIntake: { label: ("{{cms:programmes.data_programmes_programmes.next_intake_label_032}}" as string), displayUntil: "2026-09-30" },
    fundingLabel: ("{{cms:programmes.data_programmes_programmes.funding_label_033}}" as string),
    qualification: ("{{cms:programmes.data_programmes_programmes.qualification_034}}" as string),
    image: ("{{cms:programmes.data_programmes_programmes.image_035}}" as string), imageAlt: ("{{cms:programmes.data_programmes_programmes.image_alt_036}}" as string),
    href: ("{{cms:programmes.data_programmes_programmes.href_037}}" as string), sourceUrl: ("{{cms:programmes.data_programmes_programmes.source_url_038}}" as string), verifiedOn: "2026-09-08",
  },
  {
    id: "marketing-manager", slug: "marketing-manager-level-6",
    title: ("{{cms:programmes.data_programmes_programmes.title_039}}" as string), college: "marketing", type: "apprenticeship", level: 6,
    summary: ("{{cms:programmes.data_programmes_programmes.summary_040}}" as string),
    duration: ("{{cms:programmes.data_programmes_programmes.duration_041}}" as string),
    durationSourceUrl: ("{{cms:programmes.data_programmes_programmes.duration_source_url_042}}" as string),
    nextIntake: { label: ("{{cms:programmes.data_programmes_programmes.next_intake_label_043}}" as string), displayUntil: "2026-09-30" },
    fundingLabel: ("{{cms:programmes.data_programmes_programmes.funding_label_044}}" as string),
    qualification: ("{{cms:programmes.data_programmes_programmes.qualification_045}}" as string),
    image: ("{{cms:programmes.data_programmes_programmes.image_046}}" as string), imageAlt: ("{{cms:programmes.data_programmes_programmes.image_alt_047}}" as string),
    href: ("{{cms:programmes.data_programmes_programmes.href_048}}" as string), sourceUrl: ("{{cms:programmes.data_programmes_programmes.source_url_049}}" as string), verifiedOn: "2026-09-08",
  },
  {
    id: "ai-project-controls", slug: "ai-in-project-controls-certificate",
    title: ("{{cms:programmes.data_programmes_programmes.title_050}}" as string), college: "project-controls", type: "certificate",
    summary: ("{{cms:programmes.data_programmes_programmes.summary_051}}" as string),
    duration: ("{{cms:programmes.data_programmes_programmes.duration_052}}" as string),
    nextIntake: { label: ("{{cms:programmes.data_programmes_programmes.next_intake_label_053}}" as string), displayUntil: "2026-09-30" },
    image: ("{{cms:programmes.data_programmes_programmes.image_054}}" as string), imageAlt: ("{{cms:programmes.data_programmes_programmes.image_alt_055}}" as string),
    href: ("{{cms:programmes.data_programmes_programmes.href_056}}" as string), sourceUrl: ("{{cms:programmes.data_programmes_programmes.source_url_057}}" as string), verifiedOn: "2026-09-08",
  },
];

export function currentIntake(programme: ProgrammeSummary, today = new Date().toISOString().slice(0, 10)) {
  return programme.nextIntake && today <= programme.nextIntake.displayUntil ? programme.nextIntake.label : undefined;
}
