import {
  Award,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  HeartHandshake,
  Megaphone,
  MessagesSquare,
  Search,
  Smartphone,
  Tags,
  UserRoundCheck,
  Users,
  Wallet,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface MarketingModule {
  id: string;
  title: string;
  duration?: string;
  description: string;
  outcomes: string[];
}

export interface MarketingProgramme {
  id: string;
  discipline: string;
  image: string;
  href: string;
  title: string;
  level: string;
  duration: string;
  funding: string;
  qualification: string;
  intake?: string;
  summary: string;
  outcomes: string[];
  idealFor: string;
  modules: MarketingModule[];
}

export interface MarketingCard {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface MarketingOutcome {
  role: string;
  level: string;
  desc: string;
}

export const hero = {
  image: ("{{cms:college_marketing.pages_marketing_college_page_data_hero.image_001}}" as string),
  eyebrow: ("{{cms:college_marketing.pages_marketing_college_page_data_hero.eyebrow_002}}" as string),
  title: ("{{cms:college_marketing.pages_marketing_college_page_data_hero.title_003}}" as string),
  accent: ("{{cms:college_marketing.pages_marketing_college_page_data_hero.accent_004}}" as string),
  description:
    ("{{cms:college_marketing.pages_marketing_college_page_data_hero.description_005}}" as string),
  primaryLabel: ("{{cms:college_marketing.pages_marketing_college_page_data_hero.primary_label_006}}" as string),
  secondaryLabel: ("{{cms:college_marketing.pages_marketing_college_page_data_hero.secondary_label_007}}" as string),
  highlights: [("{{cms:college_marketing.pages_marketing_college_page_data_hero.highlights_008}}" as string), ("{{cms:college_marketing.pages_marketing_college_page_data_hero.highlights_009}}" as string), ("{{cms:college_marketing.pages_marketing_college_page_data_hero.highlights_010}}" as string), "Performance"],
};

export const pageNavigation = [
  { label: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.label_011}}" as string), href: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.href_012}}" as string) },
  { label: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.label_013}}" as string), href: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.href_014}}" as string) },
  { label: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.label_015}}" as string), href: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.href_016}}" as string) },
  { label: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.label_017}}" as string), href: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.href_018}}" as string) },
  { label: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.label_019}}" as string), href: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.href_020}}" as string) },
  { label: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.label_021}}" as string), href: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.href_022}}" as string) },
  { label: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.label_023}}" as string), href: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.href_024}}" as string) },
  { label: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.label_025}}" as string), href: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.href_026}}" as string) },
  { label: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.label_027}}" as string), href: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.href_028}}" as string) },
  { label: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.label_029}}" as string), href: ("{{cms:college_marketing.pages_marketing_college_page_data_page_navigation.href_030}}" as string) },
] satisfies { label: string; href: string }[];

export const overview = {
  eyebrow: ("{{cms:college_marketing.pages_marketing_college_page_data_overview.eyebrow_031}}" as string),
  title: ("{{cms:college_marketing.pages_marketing_college_page_data_overview.title_032}}" as string),
  paragraphs: [
    ("{{cms:college_marketing.pages_marketing_college_page_data_overview.paragraphs_033}}" as string),
    ("{{cms:college_marketing.pages_marketing_college_page_data_overview.paragraphs_034}}" as string),
  ],
  image: ("{{cms:college_marketing.pages_marketing_college_page_data_overview.image_035}}" as string),
};

export const programmeCopy = {
  eyebrow: ("{{cms:college_marketing.pages_marketing_college_page_data_programme_copy.eyebrow_036}}" as string),
  title: ("{{cms:college_marketing.pages_marketing_college_page_data_programme_copy.title_037}}" as string),
  description:
    ("{{cms:college_marketing.pages_marketing_college_page_data_programme_copy.description_038}}" as string),
  learningLabel: ("{{cms:college_marketing.pages_marketing_college_page_data_programme_copy.learning_label_039}}" as string),
  audienceLabel: ("{{cms:college_marketing.pages_marketing_college_page_data_programme_copy.audience_label_040}}" as string),
  image: ("{{cms:college_marketing.pages_marketing_college_page_data_programme_copy.image_041}}" as string),
  imageLabel: ("{{cms:college_marketing.pages_marketing_college_page_data_programme_copy.image_label_042}}" as string),
  imageCaption: ("{{cms:college_marketing.pages_marketing_college_page_data_programme_copy.image_caption_043}}" as string),
};

export const capabilityCopy = {
  eyebrow: ("{{cms:college_marketing.pages_marketing_college_page_data_capability_copy.eyebrow_044}}" as string),
  title: ("{{cms:college_marketing.pages_marketing_college_page_data_capability_copy.title_045}}" as string),
  description:
    ("{{cms:college_marketing.pages_marketing_college_page_data_capability_copy.description_046}}" as string),
};

export const benefitCopy = {
  eyebrow: ("{{cms:college_marketing.pages_marketing_college_page_data_benefit_copy.eyebrow_047}}" as string),
  title: ("{{cms:college_marketing.pages_marketing_college_page_data_benefit_copy.title_048}}" as string),
  description:
    ("{{cms:college_marketing.pages_marketing_college_page_data_benefit_copy.description_049}}" as string),
};

export const learningCopy = {
  eyebrow: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_copy.eyebrow_050}}" as string),
  title: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_copy.title_051}}" as string),
  description:
    ("{{cms:college_marketing.pages_marketing_college_page_data_learning_copy.description_052}}" as string),
};

export const testimonialCopy = {
  eyebrow: ("{{cms:college_marketing.pages_marketing_college_page_data_testimonial_copy.eyebrow_053}}" as string),
  title: ("{{cms:college_marketing.pages_marketing_college_page_data_testimonial_copy.title_054}}" as string),
};

export const careerCopy = {
  eyebrow: ("{{cms:college_marketing.pages_marketing_college_page_data_career_copy.eyebrow_055}}" as string),
  title: ("{{cms:college_marketing.pages_marketing_college_page_data_career_copy.title_056}}" as string),
  description:
    ("{{cms:college_marketing.pages_marketing_college_page_data_career_copy.description_057}}" as string),
};

export const faqCopy = {
  eyebrow: ("{{cms:college_marketing.pages_marketing_college_page_data_faq_copy.eyebrow_058}}" as string),
  title: ("{{cms:college_marketing.pages_marketing_college_page_data_faq_copy.title_059}}" as string),
  description:
    ("{{cms:college_marketing.pages_marketing_college_page_data_faq_copy.description_060}}" as string),
  cta: ("{{cms:college_marketing.pages_marketing_college_page_data_faq_copy.cta_061}}" as string),
};

export const finalCta = {
  eyebrow: ("{{cms:college_marketing.pages_marketing_college_page_data_final_cta.eyebrow_062}}" as string),
  title: ("{{cms:college_marketing.pages_marketing_college_page_data_final_cta.title_063}}" as string),
  description:
    ("{{cms:college_marketing.pages_marketing_college_page_data_final_cta.description_064}}" as string),
  primaryLabel: ("{{cms:college_marketing.pages_marketing_college_page_data_final_cta.primary_label_065}}" as string),
  secondaryLabel: ("{{cms:college_marketing.pages_marketing_college_page_data_final_cta.secondary_label_066}}" as string),
};

const executiveModules: MarketingModule[] = [
  {
    id: "marketing-impact-planning",
    title: ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.title_067}}" as string),
    duration: ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.duration_068}}" as string),
    description:
      ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.description_069}}" as string),
    outcomes: [
      ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.outcomes_070}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.outcomes_071}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.outcomes_072}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.outcomes_073}}" as string),
    ],
  },
  {
    id: "social-media-marketing",
    title: ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.title_074}}" as string),
    duration: ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.duration_075}}" as string),
    description:
      ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.description_076}}" as string),
    outcomes: [
      ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.outcomes_077}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.outcomes_078}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.outcomes_079}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.outcomes_080}}" as string),
    ],
  },
  {
    id: "marketing-technology",
    title: ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.title_081}}" as string),
    duration: ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.duration_082}}" as string),
    description:
      ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.description_083}}" as string),
    outcomes: [
      ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.outcomes_084}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.outcomes_085}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.outcomes_086}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_executive_modules.outcomes_087}}" as string),
    ],
  },
];

const managerModules: MarketingModule[] = [
  {
    id: "strategy-planning",
    title: ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.title_088}}" as string),
    description:
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.description_089}}" as string),
    outcomes: [
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.outcomes_090}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.outcomes_091}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.outcomes_092}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.outcomes_093}}" as string),
    ],
  },
  {
    id: "customer-journey",
    title: ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.title_094}}" as string),
    description:
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.description_095}}" as string),
    outcomes: [
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.outcomes_096}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.outcomes_097}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.outcomes_098}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.outcomes_099}}" as string),
    ],
  },
  {
    id: "commercial-intelligence",
    title: ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.title_100}}" as string),
    description:
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.description_101}}" as string),
    outcomes: [
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.outcomes_102}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.outcomes_103}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.outcomes_104}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.outcomes_105}}" as string),
    ],
  },
  {
    id: "ai-marketing",
    title: ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.title_106}}" as string),
    description:
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.description_107}}" as string),
    outcomes: [
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.outcomes_108}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.outcomes_109}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.outcomes_110}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_manager_modules.outcomes_111}}" as string),
    ],
  },
];

export const marketingProgrammes: MarketingProgramme[] = [
  {
    id: "marketing-executive",
    discipline: "Marketing",
    image: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.image_112}}" as string),
    href: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.href_113}}" as string),
    title: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.title_114}}" as string),
    level: "Level 4",
    duration: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.duration_115}}" as string),
    funding: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.funding_116}}" as string),
    qualification: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.qualification_117}}" as string),
    summary:
      ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.summary_118}}" as string),
    outcomes: [
      ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.outcomes_119}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.outcomes_120}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.outcomes_121}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.outcomes_122}}" as string),
    ],
    idealFor: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.ideal_for_123}}" as string),
    modules: executiveModules,
  },
  {
    id: "marketing-manager",
    discipline: "Marketing",
    image: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.image_124}}" as string),
    href: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.href_125}}" as string),
    title: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.title_126}}" as string),
    level: "Level 6",
    duration: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.duration_127}}" as string),
    funding: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.funding_128}}" as string),
    qualification: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.qualification_129}}" as string),
    intake: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.intake_130}}" as string),
    summary:
      ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.summary_131}}" as string),
    outcomes: [
      ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.outcomes_132}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.outcomes_133}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.outcomes_134}}" as string),
      ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.outcomes_135}}" as string),
    ],
    idealFor: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_programmes.ideal_for_136}}" as string),
    modules: managerModules,
  },
];

export const marketingCapabilities: MarketingCard[] = [
  { icon: Search, title: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_capabilities.title_137}}" as string), desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_capabilities.desc_138}}" as string) },
  { icon: ChartNoAxesCombined, title: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_capabilities.title_139}}" as string), desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_capabilities.desc_140}}" as string) },
  { icon: Smartphone, title: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_capabilities.title_141}}" as string), desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_capabilities.desc_142}}" as string) },
  { icon: BarChart3, title: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_capabilities.title_143}}" as string), desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_capabilities.desc_144}}" as string) },
  { icon: Tags, title: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_capabilities.title_145}}" as string), desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_capabilities.desc_146}}" as string) },
  { icon: HeartHandshake, title: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_capabilities.title_147}}" as string), desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_capabilities.desc_148}}" as string) },
  { icon: Workflow, title: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_capabilities.title_149}}" as string), desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_capabilities.desc_150}}" as string) },
  { icon: Bot, title: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_capabilities.title_151}}" as string), desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_capabilities.desc_152}}" as string) },
];

export const marketingStats = [
  { value: "2", label: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_stats.label_153}}" as string) },
  { value: "100%", label: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_stats.label_154}}" as string) },
  { value: "4", label: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_stats.label_155}}" as string) },
  { value: "6+", label: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_stats.label_156}}" as string) },
];

export const marketingWhyChooseUs: MarketingCard[] = [
  { icon: BriefcaseBusiness, title: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_why_choose_us.title_157}}" as string), desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_why_choose_us.desc_158}}" as string) },
  { icon: Wallet, title: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_why_choose_us.title_159}}" as string), desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_why_choose_us.desc_160}}" as string) },
  { icon: Award, title: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_why_choose_us.title_161}}" as string), desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_why_choose_us.desc_162}}" as string) },
  { icon: UserRoundCheck, title: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_why_choose_us.title_163}}" as string), desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_why_choose_us.desc_164}}" as string) },
  { icon: ChartNoAxesCombined, title: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_why_choose_us.title_165}}" as string), desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_why_choose_us.desc_166}}" as string) },
  { icon: Megaphone, title: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_why_choose_us.title_167}}" as string), desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_why_choose_us.desc_168}}" as string) },
];

export const marketingWhyChooseUsStats = [
  { value: "91%", label: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_why_choose_us_stats.label_169}}" as string) },
  { value: "96%", label: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_why_choose_us_stats.label_170}}" as string) },
  { value: "87%", label: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_why_choose_us_stats.label_171}}" as string) },
  { value: "7 in 10", label: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_why_choose_us_stats.label_172}}" as string) },
];

export const learningExperience = [
  {
    title: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.title_173}}" as string),
    items: [
      { title: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.items_title_174}}" as string), description: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.items_description_175}}" as string) },
      { title: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.items_title_176}}" as string), description: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.items_description_177}}" as string) },
      { title: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.items_title_178}}" as string), description: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.items_description_179}}" as string) },
    ],
  },
  {
    title: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.title_180}}" as string),
    items: [
      { title: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.items_title_181}}" as string), description: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.items_description_182}}" as string) },
      { title: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.items_title_183}}" as string), description: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.items_description_184}}" as string) },
      { title: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.items_title_185}}" as string), description: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.items_description_186}}" as string) },
    ],
  },
  {
    title: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.title_187}}" as string),
    items: [
      { title: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.items_title_188}}" as string), description: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.items_description_189}}" as string) },
      { title: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.items_title_190}}" as string), description: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.items_description_191}}" as string) },
      { title: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.items_title_192}}" as string), description: ("{{cms:college_marketing.pages_marketing_college_page_data_learning_experience.items_description_193}}" as string) },
    ],
  },
];

export const careerRoutes = [
  {
    label: ("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.label_194}}" as string),
    title: ("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.title_195}}" as string),
    skills: [("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.skills_196}}" as string), ("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.skills_197}}" as string), ("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.skills_198}}" as string)],
    outcomes: [("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.outcomes_199}}" as string), ("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.outcomes_200}}" as string)],
  },
  {
    label: ("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.label_201}}" as string),
    title: ("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.title_202}}" as string),
    skills: [("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.skills_203}}" as string), ("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.skills_204}}" as string), ("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.skills_205}}" as string), ("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.skills_206}}" as string)],
    outcomes: [("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.outcomes_207}}" as string), ("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.outcomes_208}}" as string), ("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.outcomes_209}}" as string)],
  },
  {
    label: ("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.label_210}}" as string),
    title: ("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.title_211}}" as string),
    skills: [("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.skills_212}}" as string), "Segmentation", "Research", ("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.skills_213}}" as string)],
    outcomes: [("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.outcomes_214}}" as string), ("{{cms:college_marketing.pages_marketing_college_page_data_career_routes.outcomes_215}}" as string)],
  },
];

export const marketingOutcomes: MarketingOutcome[] = [
  { role: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_outcomes.role_216}}" as string), level: "Level 4", desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_outcomes.desc_217}}" as string) },
  { role: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_outcomes.role_218}}" as string), level: "Level 6", desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_outcomes.desc_219}}" as string) },
  { role: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_outcomes.role_220}}" as string), level: "Progression", desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_outcomes.desc_221}}" as string) },
  { role: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_outcomes.role_222}}" as string), level: "Progression", desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_outcomes.desc_223}}" as string) },
  { role: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_outcomes.role_224}}" as string), level: "Progression", desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_outcomes.desc_225}}" as string) },
  { role: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_outcomes.role_226}}" as string), level: "Leadership", desc: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_outcomes.desc_227}}" as string) },
];

export const marketingTestimonials = [
  {
    quote: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_testimonials.quote_228}}" as string),
    name: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_testimonials.name_229}}" as string),
    role: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_testimonials.role_230}}" as string),
    image: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_testimonials.image_231}}" as string),
  },
  {
    quote: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_testimonials.quote_232}}" as string),
    name: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_testimonials.name_233}}" as string),
    role: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_testimonials.role_234}}" as string),
    image: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_testimonials.image_235}}" as string),
  },
  {
    quote: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_testimonials.quote_236}}" as string),
    name: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_testimonials.name_237}}" as string),
    role: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_testimonials.role_238}}" as string),
    image: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_testimonials.image_239}}" as string),
  },
];

export const marketingFaqs = [
  {
    question: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_faqs.question_240}}" as string),
    answer: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_faqs.answer_241}}" as string),
  },
  {
    question: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_faqs.question_242}}" as string),
    answer: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_faqs.answer_243}}" as string),
  },
  {
    question: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_faqs.question_244}}" as string),
    answer: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_faqs.answer_245}}" as string),
  },
  {
    question: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_faqs.question_246}}" as string),
    answer: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_faqs.answer_247}}" as string),
  },
  {
    question: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_faqs.question_248}}" as string),
    answer: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_faqs.answer_249}}" as string),
  },
  {
    question: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_faqs.question_250}}" as string),
    answer: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_faqs.answer_251}}" as string),
  },
  {
    question: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_faqs.question_252}}" as string),
    answer: ("{{cms:college_marketing.pages_marketing_college_page_data_marketing_faqs.answer_253}}" as string),
  },
];
