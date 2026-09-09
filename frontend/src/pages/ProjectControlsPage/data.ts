import { Award, BadgePercent, BriefcaseBusiness, CalendarCheck, ChartNoAxesCombined, Coins, GitBranch, Headphones, LayoutDashboard, MessagesSquare, Scale, ShieldCheck, TriangleAlert, UserRoundCheck, Users, Wallet, type LucideIcon } from "lucide-react";

export const hero = {
  image: ("{{cms:college_project_controls.pages_project_controls_page_data_hero.image_001}}" as string),
  eyebrow: ("{{cms:college_project_controls.pages_project_controls_page_data_hero.eyebrow_002}}" as string),
  title: ("{{cms:college_project_controls.pages_project_controls_page_data_hero.title_003}}" as string),
  accent: ("{{cms:college_project_controls.pages_project_controls_page_data_hero.accent_004}}" as string),
  description: ("{{cms:college_project_controls.pages_project_controls_page_data_hero.description_005}}" as string),
  primaryLabel: ("{{cms:college_project_controls.pages_project_controls_page_data_hero.primary_label_006}}" as string),
  secondaryLabel: ("{{cms:college_project_controls.pages_project_controls_page_data_hero.secondary_label_007}}" as string),
  highlights: ["Planning", "Stakeholders", "Risk", "Governance", "Scheduling", "Cost", "Forecasting"],
};

export const pageNavigation = [
  { label: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.label_008}}" as string), href: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.href_009}}" as string) },
  { label: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.label_010}}" as string), href: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.href_011}}" as string) },
  { label: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.label_012}}" as string), href: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.href_013}}" as string) },
  { label: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.label_014}}" as string), href: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.href_015}}" as string) },
  { label: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.label_016}}" as string), href: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.href_017}}" as string) },
  { label: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.label_018}}" as string), href: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.href_019}}" as string) },
  { label: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.label_020}}" as string), href: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.href_021}}" as string) },
  { label: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.label_022}}" as string), href: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.href_023}}" as string) },
  { label: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.label_024}}" as string), href: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.href_025}}" as string) },
  { label: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.label_026}}" as string), href: ("{{cms:college_project_controls.pages_project_controls_page_data_page_navigation.href_027}}" as string) },
] satisfies { label: string; href: string }[];

export const overview = {
  eyebrow: ("{{cms:college_project_controls.pages_project_controls_page_data_overview.eyebrow_028}}" as string),
  title: ("{{cms:college_project_controls.pages_project_controls_page_data_overview.title_029}}" as string),
  paragraphs: [
    ("{{cms:college_project_controls.pages_project_controls_page_data_overview.paragraphs_030}}" as string),
    ("{{cms:college_project_controls.pages_project_controls_page_data_overview.paragraphs_031}}" as string),
  ],
  image: ("{{cms:college_project_controls.pages_project_controls_page_data_overview.image_032}}" as string),
};

export const programmeCopy = {
  eyebrow: ("{{cms:college_project_controls.pages_project_controls_page_data_programme_copy.eyebrow_033}}" as string),
  title: ("{{cms:college_project_controls.pages_project_controls_page_data_programme_copy.title_034}}" as string),
  description: ("{{cms:college_project_controls.pages_project_controls_page_data_programme_copy.description_035}}" as string),
  learningLabel: ("{{cms:college_project_controls.pages_project_controls_page_data_programme_copy.learning_label_036}}" as string),
  audienceLabel: ("{{cms:college_project_controls.pages_project_controls_page_data_programme_copy.audience_label_037}}" as string),
  applyLabel: ("{{cms:college_project_controls.pages_project_controls_page_data_programme_copy.apply_label_038}}" as string),
  fundingLabel: ("{{cms:college_project_controls.pages_project_controls_page_data_programme_copy.funding_label_039}}" as string),
  image: ("{{cms:college_project_controls.pages_project_controls_page_data_programme_copy.image_040}}" as string),
  imageLabel: ("{{cms:college_project_controls.pages_project_controls_page_data_programme_copy.image_label_041}}" as string),
  imageCaption: ("{{cms:college_project_controls.pages_project_controls_page_data_programme_copy.image_caption_042}}" as string),
};

export const capabilityCopy = {
  eyebrow: ("{{cms:college_project_controls.pages_project_controls_page_data_capability_copy.eyebrow_043}}" as string),
  title: ("{{cms:college_project_controls.pages_project_controls_page_data_capability_copy.title_044}}" as string),
  description: ("{{cms:college_project_controls.pages_project_controls_page_data_capability_copy.description_045}}" as string),
};

export const benefitCopy = {
  eyebrow: ("{{cms:college_project_controls.pages_project_controls_page_data_benefit_copy.eyebrow_046}}" as string),
  title: ("{{cms:college_project_controls.pages_project_controls_page_data_benefit_copy.title_047}}" as string),
  description: ("{{cms:college_project_controls.pages_project_controls_page_data_benefit_copy.description_048}}" as string),
};

export const testimonialCopy = {
  eyebrow: ("{{cms:college_project_controls.pages_project_controls_page_data_testimonial_copy.eyebrow_049}}" as string),
  title: ("{{cms:college_project_controls.pages_project_controls_page_data_testimonial_copy.title_050}}" as string),
};

export const careerCopy = {
  eyebrow: ("{{cms:college_project_controls.pages_project_controls_page_data_career_copy.eyebrow_051}}" as string),
  title: ("{{cms:college_project_controls.pages_project_controls_page_data_career_copy.title_052}}" as string),
  description: ("{{cms:college_project_controls.pages_project_controls_page_data_career_copy.description_053}}" as string),
};

export const faqCopy = {
  eyebrow: ("{{cms:college_project_controls.pages_project_controls_page_data_faq_copy.eyebrow_054}}" as string),
  title: ("{{cms:college_project_controls.pages_project_controls_page_data_faq_copy.title_055}}" as string),
  description: ("{{cms:college_project_controls.pages_project_controls_page_data_faq_copy.description_056}}" as string),
  cta: ("{{cms:college_project_controls.pages_project_controls_page_data_faq_copy.cta_057}}" as string),
};

export const finalCta = {
  eyebrow: ("{{cms:college_project_controls.pages_project_controls_page_data_final_cta.eyebrow_058}}" as string),
  title: ("{{cms:college_project_controls.pages_project_controls_page_data_final_cta.title_059}}" as string),
  description: ("{{cms:college_project_controls.pages_project_controls_page_data_final_cta.description_060}}" as string),
  primaryLabel: ("{{cms:college_project_controls.pages_project_controls_page_data_final_cta.primary_label_061}}" as string),
  secondaryLabel: ("{{cms:college_project_controls.pages_project_controls_page_data_final_cta.secondary_label_062}}" as string),
};

// Content transcribed from the supplied Readdy reference.
export interface ProjectControlsProgramme {
  id: string;
  discipline: string;
  image: string;
  href: string;
  title: string;
  level: string;
  duration: string;
  funding: string;
  summary: string;
  outcomes: string[];
  idealFor: string;
}

export interface ProjectControlsCapability {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ProjectControlsOutcome {
  role: string;
  level: string;
  desc: string;
}

export const projectControlsProgrammes: ProjectControlsProgramme[] = [
  {
    id: "associate-project-manager",
    discipline: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.discipline_063}}" as string),
    image: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.image_064}}" as string),
    href: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.href_065}}" as string),
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.title_066}}" as string),
    level: "Level 4",
    duration: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.duration_067}}" as string),
    funding: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.funding_068}}" as string),
    summary:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.summary_069}}" as string),
    outcomes: [
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.outcomes_070}}" as string),
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.outcomes_071}}" as string),
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.outcomes_072}}" as string),
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.outcomes_073}}" as string),
    ],
    idealFor:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.ideal_for_074}}" as string),
  },
  {
    id: "project-controls-professional",
    discipline: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.discipline_075}}" as string),
    image: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.image_076}}" as string),
    href: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.href_077}}" as string),
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.title_078}}" as string),
    level: "Level 6",
    duration: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.duration_079}}" as string),
    funding: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.funding_080}}" as string),
    summary:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.summary_081}}" as string),
    outcomes: [
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.outcomes_082}}" as string),
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.outcomes_083}}" as string),
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.outcomes_084}}" as string),
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.outcomes_085}}" as string),
    ],
    idealFor:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_programmes.ideal_for_086}}" as string),
  },
];

export const projectControlsCapabilities: ProjectControlsCapability[] = [
  {
    icon: CalendarCheck,
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_capabilities.title_087}}" as string),
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_capabilities.desc_088}}" as string),
  },
  {
    icon: Users,
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_capabilities.title_089}}" as string),
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_capabilities.desc_090}}" as string),
  },
  {
    icon: TriangleAlert,
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_capabilities.title_091}}" as string),
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_capabilities.desc_092}}" as string),
  },
  {
    icon: Scale,
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_capabilities.title_093}}" as string),
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_capabilities.desc_094}}" as string),
  },
  {
    icon: Coins,
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_capabilities.title_095}}" as string),
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_capabilities.desc_096}}" as string),
  },
  {
    icon: MessagesSquare,
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_capabilities.title_097}}" as string),
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_capabilities.desc_098}}" as string),
  },
  {
    icon: ChartNoAxesCombined,
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_capabilities.title_099}}" as string),
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_capabilities.desc_100}}" as string),
  },
  {
    icon: GitBranch,
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_capabilities.title_101}}" as string),
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_capabilities.desc_102}}" as string),
  },
  {
    icon: LayoutDashboard,
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_capabilities.title_103}}" as string),
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_capabilities.desc_104}}" as string),
  },
];

export const courseContentCopy = {
  eyebrow: ("{{cms:college_project_controls.pages_project_controls_page_data_course_content_copy.eyebrow_105}}" as string),
  title: ("{{cms:college_project_controls.pages_project_controls_page_data_course_content_copy.title_106}}" as string),
  description: ("{{cms:college_project_controls.pages_project_controls_page_data_course_content_copy.description_107}}" as string),
};

export const projectControlsCourseGroups = [
  {
    abbreviation: "APM",
    provider: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.provider_108}}" as string),
    courses: [
      {
        title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_title_109}}" as string),
        description: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_description_110}}" as string),
      },
      {
        title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_title_111}}" as string),
        description: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_description_112}}" as string),
      },
      {
        title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_title_113}}" as string),
        description: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_description_114}}" as string),
      },
    ],
  },
  {
    abbreviation: "APMG",
    provider: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.provider_115}}" as string),
    courses: [
      {
        title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_title_116}}" as string),
        description: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_description_117}}" as string),
      },
      {
        title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_title_118}}" as string),
        description: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_description_119}}" as string),
      },
      {
        title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_title_120}}" as string),
        description: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_description_121}}" as string),
      },
      {
        title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_title_122}}" as string),
        description: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_description_123}}" as string),
      },
    ],
  },
  {
    abbreviation: "PMI",
    provider: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.provider_124}}" as string),
    courses: [
      {
        title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_title_125}}" as string),
        description: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_description_126}}" as string),
      },
      {
        title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_title_127}}" as string),
        description: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_description_128}}" as string),
      },
      {
        title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_title_129}}" as string),
        description: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_description_130}}" as string),
      },
      {
        title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_title_131}}" as string),
        description: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_description_132}}" as string),
      },
      {
        title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_title_133}}" as string),
        description: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_description_134}}" as string),
      },
    ],
  },
  {
    abbreviation: "IPC",
    provider: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.provider_135}}" as string),
    courses: [
      {
        title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_title_136}}" as string),
        description: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_description_137}}" as string),
      },
      {
        title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_title_138}}" as string),
        description: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_description_139}}" as string),
      },
      {
        title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_title_140}}" as string),
        description: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_description_141}}" as string),
      },
      {
        title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_title_142}}" as string),
        description: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_description_143}}" as string),
      },
      {
        title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_title_144}}" as string),
        description: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_description_145}}" as string),
      },
      {
        title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_title_146}}" as string),
        description: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_course_groups.courses_description_147}}" as string),
      },
    ],
  },
];

export const projectControlsOutcomes: ProjectControlsOutcome[] = [
  {
    role: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.role_148}}" as string),
    level: "Level 4",
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.desc_149}}" as string),
  },
  {
    role: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.role_150}}" as string),
    level: "Level 6",
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.desc_151}}" as string),
  },
  {
    role: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.role_152}}" as string),
    level: "Progression",
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.desc_153}}" as string),
  },
  {
    role: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.role_154}}" as string),
    level: "Progression",
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.desc_155}}" as string),
  },
  {
    role: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.role_156}}" as string),
    level: "Leadership",
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.desc_157}}" as string),
  },
  {
    role: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.role_158}}" as string),
    level: "Leadership",
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.desc_159}}" as string),
  },
  {
    role: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.role_160}}" as string),
    level: "Level 3",
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.desc_161}}" as string),
  },
  {
    role: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.role_162}}" as string),
    level: "Progression",
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.desc_163}}" as string),
  },
  {
    role: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.role_164}}" as string),
    level: "Progression",
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.desc_165}}" as string),
  },
  {
    role: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.role_166}}" as string),
    level: "Progression",
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.desc_167}}" as string),
  },
  {
    role: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.role_168}}" as string),
    level: "Leadership",
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.desc_169}}" as string),
  },
  {
    role: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.role_170}}" as string),
    level: "Leadership",
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_outcomes.desc_171}}" as string),
  },
];

export const projectControlsStats = [
  { value: "4", label: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_stats.label_172}}" as string) },
  { value: "100%", label: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_stats.label_173}}" as string) },
  { value: "9", label: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_stats.label_174}}" as string) },
  { value: "12+", label: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_stats.label_175}}" as string) },
];

export const projectControlsWhyChooseUs = [
  {
    icon: BriefcaseBusiness,
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us.title_176}}" as string),
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us.desc_177}}" as string),
  },
  {
    icon: Wallet,
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us.title_178}}" as string),
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us.desc_179}}" as string),
  },
  {
    icon: Award,
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us.title_180}}" as string),
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us.desc_181}}" as string),
  },
  {
    icon: UserRoundCheck,
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us.title_182}}" as string),
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us.desc_183}}" as string),
  },
  {
    icon: ChartNoAxesCombined,
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us.title_184}}" as string),
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us.desc_185}}" as string),
  },
  {
    icon: ShieldCheck,
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us.title_186}}" as string),
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us.desc_187}}" as string),
  },
  {
    icon: Headphones,
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us.title_188}}" as string),
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us.desc_189}}" as string),
  },
  {
    icon: Users,
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us.title_190}}" as string),
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us.desc_191}}" as string),
  },
  {
    icon: BadgePercent,
    title: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us.title_192}}" as string),
    desc: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us.desc_193}}" as string),
  },
];

export const projectControlsWhyChooseUsStats = [
  { value: "94%", label: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us_stats.label_194}}" as string) },
  { value: "95%", label: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us_stats.label_195}}" as string) },
  { value: "88%", label: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us_stats.label_196}}" as string) },
  { value: "8 in 10", label: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us_stats.label_197}}" as string) },
];

export const projectControlsTestimonials = [
  {
    quote:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.quote_198}}" as string),
    name: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.name_199}}" as string),
    role: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.role_200}}" as string),
    image:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.image_201}}" as string),
  },
  {
    quote:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.quote_202}}" as string),
    name: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.name_203}}" as string),
    role: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.role_204}}" as string),
    image:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.image_205}}" as string),
  },
  {
    quote:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.quote_206}}" as string),
    name: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.name_207}}" as string),
    role: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.role_208}}" as string),
    image:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.image_209}}" as string),
  },
  {
    quote:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.quote_210}}" as string),
    name: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.name_211}}" as string),
    role: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.role_212}}" as string),
    image:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.image_213}}" as string),
  },
  {
    quote:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.quote_214}}" as string),
    name: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.name_215}}" as string),
    role: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.role_216}}" as string),
    image:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.image_217}}" as string),
  },
  {
    quote:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.quote_218}}" as string),
    name: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.name_219}}" as string),
    role: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.role_220}}" as string),
    image:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_testimonials.image_221}}" as string),
  },
];

export const projectControlsFaqs = [
  {
    question: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_faqs.question_222}}" as string),
    answer:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_faqs.answer_223}}" as string),
  },
  {
    question: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_faqs.question_224}}" as string),
    answer:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_faqs.answer_225}}" as string),
  },
  {
    question: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_faqs.question_226}}" as string),
    answer:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_faqs.answer_227}}" as string),
  },
  {
    question: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_faqs.question_228}}" as string),
    answer:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_faqs.answer_229}}" as string),
  },
  {
    question: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_faqs.question_230}}" as string),
    answer:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_faqs.answer_231}}" as string),
  },
  {
    question: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_faqs.question_232}}" as string),
    answer:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_faqs.answer_233}}" as string),
  },
  {
    question: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_faqs.question_234}}" as string),
    answer:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_faqs.answer_235}}" as string),
  },
  {
    question: ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_faqs.question_236}}" as string),
    answer:
      ("{{cms:college_project_controls.pages_project_controls_page_data_project_controls_faqs.answer_237}}" as string),
  },
];
