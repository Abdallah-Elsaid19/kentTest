import {
  Award,
  BadgePoundSterling,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Compass,
  FileCheck2,
  GraduationCap,
  Landmark,
  Layers3,
  MapPin,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

export const seo = {
  title: ("{{cms:funding.pages_funding_eligibility_page_data_seo.title_001}}" as string),
  description: ("{{cms:funding.pages_funding_eligibility_page_data_seo.description_002}}" as string),
};

export const fundingRoutes = [
  {
    eyebrow: ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.eyebrow_003}}" as string),
    title: ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.title_004}}" as string),
    text: ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.text_005}}" as string),
    details: [
      ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.details_006}}" as string),
      ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.details_007}}" as string),
      ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.details_008}}" as string),
      ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.details_009}}" as string),
    ],
    note: ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.note_010}}" as string),
    href: ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.href_011}}" as string),
  },
  {
    eyebrow: ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.eyebrow_012}}" as string),
    title: ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.title_013}}" as string),
    text: ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.text_014}}" as string),
    details: [
      ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.details_015}}" as string),
      ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.details_016}}" as string),
      ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.details_017}}" as string),
      ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.details_018}}" as string),
    ],
    note: ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.note_019}}" as string),
    href: ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.href_020}}" as string),
  },
  {
    eyebrow: ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.eyebrow_021}}" as string),
    title: ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.title_022}}" as string),
    text: ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.text_023}}" as string),
    details: [
      ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.details_024}}" as string),
      ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.details_025}}" as string),
      ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.details_026}}" as string),
      ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.details_027}}" as string),
    ],
    note: ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.note_028}}" as string),
    href: ("{{cms:funding.pages_funding_eligibility_page_data_funding_routes.href_029}}" as string),
  },
] as const;

export const fundingNavItems = [
  { id: "funding-overview", label: ("{{cms:funding.pages_funding_eligibility_page_data_funding_nav_items.label_030}}" as string) },
  { id: "funding-routes", label: ("{{cms:funding.pages_funding_eligibility_page_data_funding_nav_items.label_031}}" as string) },
  { id: "programme-funding", label: ("{{cms:funding.pages_funding_eligibility_page_data_funding_nav_items.label_032}}" as string) },
  { id: "kbc-fund-details", label: ("{{cms:funding.pages_funding_eligibility_page_data_funding_nav_items.label_033}}" as string) },
  { id: "commercial-access", label: ("{{cms:funding.pages_funding_eligibility_page_data_funding_nav_items.label_034}}" as string) },
  { id: "eligibility", label: ("{{cms:funding.pages_funding_eligibility_page_data_funding_nav_items.label_035}}" as string) },
  { id: "employer-setup", label: ("{{cms:funding.pages_funding_eligibility_page_data_funding_nav_items.label_036}}" as string) },
  { id: "funding-faqs", label: ("{{cms:funding.pages_funding_eligibility_page_data_funding_nav_items.label_037}}" as string) },
] as const;

export const fundingAudiences = [
  {
    id: "professionals",
    tab: ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.tab_038}}" as string),
    eyebrow: ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.eyebrow_039}}" as string),
    title: ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.title_040}}" as string),
    copy: ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.copy_041}}" as string),
    points: [("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.points_042}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.points_043}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.points_044}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.points_045}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.points_046}}" as string)],
    cta: ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.cta_047}}" as string),
    href: ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.href_048}}" as string),
    image: ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.image_049}}" as string),
    icon: UserCheck,
  },
  {
    id: "employers",
    tab: ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.tab_050}}" as string),
    eyebrow: ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.eyebrow_051}}" as string),
    title: ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.title_052}}" as string),
    copy: ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.copy_053}}" as string),
    points: [("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.points_054}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.points_055}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.points_056}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.points_057}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.points_058}}" as string)],
    cta: ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.cta_059}}" as string),
    href: ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.href_060}}" as string),
    image: ("{{cms:funding.pages_funding_eligibility_page_data_funding_audiences.image_061}}" as string),
    icon: BriefcaseBusiness,
  },
] as const;

export type FundingAudienceId = (typeof fundingAudiences)[number]["id"];

export const fundingLayers = [
  {
    number: "01",
    label: ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.label_062}}" as string),
    micro: ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.micro_063}}" as string),
    intro: ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.intro_064}}" as string),
    items: [("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_065}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_066}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_067}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_068}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_069}}" as string)],
    tone: "purple",
    icon: Landmark,
  },
  {
    number: "02",
    label: ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.label_070}}" as string),
    micro: ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.micro_071}}" as string),
    intro: ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.intro_072}}" as string),
    items: [("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_073}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_074}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_075}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_076}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_077}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_078}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_079}}" as string), "Masterclasses", "Graduation", "Rewards", ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_080}}" as string)],
    tone: "gold",
    icon: Sparkles,
  },
  {
    number: "03",
    label: ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.label_081}}" as string),
    micro: ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.micro_082}}" as string),
    intro: ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.intro_083}}" as string),
    items: [("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_084}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_085}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_086}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_087}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_088}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_layers.items_089}}" as string)],
    tone: "neutral",
    icon: BadgePoundSterling,
  },
] as const;

export const missionPillars = [
  { icon: Landmark, title: ("{{cms:funding.pages_funding_eligibility_page_data_mission_pillars.title_090}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_mission_pillars.text_091}}" as string) },
  { icon: Sparkles, title: ("{{cms:funding.pages_funding_eligibility_page_data_mission_pillars.title_092}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_mission_pillars.text_093}}" as string) },
  { icon: BadgePoundSterling, title: ("{{cms:funding.pages_funding_eligibility_page_data_mission_pillars.title_094}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_mission_pillars.text_095}}" as string) },
] as const;

export const impactStats = [
  ["100%", ("{{cms:funding.pages_funding_eligibility_page_data_impact_stats.text_096}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_impact_stats.text_097}}" as string)],
  ["95%", ("{{cms:funding.pages_funding_eligibility_page_data_impact_stats.text_098}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_impact_stats.text_099}}" as string)],
  ["50%", ("{{cms:funding.pages_funding_eligibility_page_data_impact_stats.text_100}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_impact_stats.text_101}}" as string)],
  ["75%", ("{{cms:funding.pages_funding_eligibility_page_data_impact_stats.text_102}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_impact_stats.text_103}}" as string)],
  ["10", ("{{cms:funding.pages_funding_eligibility_page_data_impact_stats.text_104}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_impact_stats.text_105}}" as string)],
  ["10093689", ("{{cms:funding.pages_funding_eligibility_page_data_impact_stats.text_106}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_impact_stats.text_107}}" as string)],
] as const;

export const fundingTransitions = {
  funded: [("{{cms:funding.pages_funding_eligibility_page_data_funding_transitions.funded_108}}" as string), "Eligibility", ("{{cms:funding.pages_funding_eligibility_page_data_funding_transitions.funded_109}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_transitions.funded_110}}" as string)],
  commercial: [("{{cms:funding.pages_funding_eligibility_page_data_funding_transitions.commercial_111}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_transitions.commercial_112}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_transitions.commercial_113}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_funding_transitions.commercial_114}}" as string)],
} as const;

export const programmeData = {
  Marketing: {
    title: ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.marketing_title_115}}" as string),
    programmes: [("{{cms:funding.pages_funding_eligibility_page_data_programme_data.marketing_programmes_116}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.marketing_programmes_117}}" as string)],
    copy: ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.marketing_copy_118}}" as string),
    benefits: [("{{cms:funding.pages_funding_eligibility_page_data_programme_data.marketing_benefits_119}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.marketing_benefits_120}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.marketing_benefits_121}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.marketing_benefits_122}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.marketing_benefits_123}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.marketing_benefits_124}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.marketing_benefits_125}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.marketing_benefits_126}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.marketing_benefits_127}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.marketing_benefits_128}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.marketing_benefits_129}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.marketing_benefits_130}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.marketing_benefits_131}}" as string)],
  },
  "Project Controls": {
    title: ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_controls_title_132}}" as string),
    programmes: [("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_controls_programmes_133}}" as string)],
    copy: ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_controls_copy_134}}" as string),
    benefits: [("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_controls_benefits_135}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_controls_benefits_136}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_controls_benefits_137}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_controls_benefits_138}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_controls_benefits_139}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_controls_benefits_140}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_controls_benefits_141}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_controls_benefits_142}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_controls_benefits_143}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_controls_benefits_144}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_controls_benefits_145}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_controls_benefits_146}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_controls_benefits_147}}" as string)],
  },
  "Project Management": {
    title: ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_management_title_148}}" as string),
    programmes: [("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_management_programmes_149}}" as string)],
    copy: ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_management_copy_150}}" as string),
    benefits: [("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_management_benefits_151}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_management_benefits_152}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_management_benefits_153}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_management_benefits_154}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_management_benefits_155}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_management_benefits_156}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_management_benefits_157}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_data.project_management_benefits_158}}" as string)],
  },
} as const;

export type ProgrammeKey = keyof typeof programmeData;

export const programmeFundingDetails = {
  Marketing: {
    contributions: [
      { programme: ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.marketing_contributions_programme_159}}" as string), amount: ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.marketing_contributions_amount_160}}" as string), alternative: ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.marketing_contributions_alternative_161}}" as string) },
      { programme: ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.marketing_contributions_programme_162}}" as string), amount: "£300" },
    ],
    fundedItems: [("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.marketing_funded_items_163}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.marketing_funded_items_164}}" as string)],
    qualifications: [("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.marketing_qualifications_165}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.marketing_qualifications_166}}" as string)],
  },
  "Project Controls": {
    contributions: [{ programme: ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_controls_contributions_programme_167}}" as string), amount: ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_controls_contributions_amount_168}}" as string), alternative: ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_controls_contributions_alternative_169}}" as string) }],
    fundedItems: [("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_controls_funded_items_170}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_controls_funded_items_171}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_controls_funded_items_172}}" as string)],
    qualifications: [("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_controls_qualifications_173}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_controls_qualifications_174}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_controls_qualifications_175}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_controls_qualifications_176}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_controls_qualifications_177}}" as string)],
  },
  "Project Management": {
    contributions: [{ programme: ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_management_contributions_programme_178}}" as string), amount: ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_management_contributions_amount_179}}" as string), alternative: ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_management_contributions_alternative_180}}" as string) }],
    fundedItems: [("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_management_funded_items_181}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_management_funded_items_182}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_management_funded_items_183}}" as string)],
    qualifications: [("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_management_qualifications_184}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_management_qualifications_185}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_funding_details.project_management_qualifications_186}}" as string)],
  },
} as const satisfies Record<ProgrammeKey, {
  contributions: readonly { programme: string; amount: string; alternative?: string }[];
  fundedItems: readonly string[];
  qualifications: readonly string[];
}>;

export const programmeRouteOptions = [
  {
    tone: "dark",
    eyebrow: ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.eyebrow_187}}" as string),
    title: ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.title_188}}" as string),
    subtitle: ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.subtitle_189}}" as string),
    image: ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.image_190}}" as string),
    imageAlt: ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.image_alt_191}}" as string),
    items: [("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.items_192}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.items_193}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.items_194}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.items_195}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.items_196}}" as string)],
    href: ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.href_197}}" as string),
    cta: ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.cta_198}}" as string),
  },
  {
    tone: "light",
    eyebrow: ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.eyebrow_199}}" as string),
    title: ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.title_200}}" as string),
    subtitle: ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.subtitle_201}}" as string),
    image: ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.image_202}}" as string),
    imageAlt: ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.image_alt_203}}" as string),
    items: [("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.items_204}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.items_205}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.items_206}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.items_207}}" as string)],
    href: ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.href_208}}" as string),
    cta: ("{{cms:funding.pages_funding_eligibility_page_data_programme_route_options.cta_209}}" as string),
  },
] as const;

type IconCard = {
  icon: LucideIcon;
  title: string;
  text: string;
  items?: readonly string[];
  wide?: boolean;
};

export const kbcFundCards: readonly IconCard[] = [
  { icon: Award, title: ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.title_210}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.text_211}}" as string), wide: true, items: [("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_212}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_213}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_214}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_215}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_216}}" as string)] },
  { icon: CalendarDays, title: ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.title_217}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.text_218}}" as string), items: [("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_219}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_220}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_221}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_222}}" as string)] },
  { icon: MapPin, title: ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.title_223}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.text_224}}" as string), items: ["London", "Kent", "Birmingham", "Derby", "Manchester", "Nottingham", "York"] },
  { icon: GraduationCap, title: ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.title_225}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.text_226}}" as string), items: [("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_227}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_228}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_229}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_230}}" as string)] },
  { icon: Route, title: ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.title_231}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.text_232}}" as string), items: [("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_233}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_234}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_235}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_236}}" as string)] },
  { icon: ShieldCheck, title: ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.title_237}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.text_238}}" as string), items: [("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_239}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_240}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_241}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_kbc_fund_cards.items_242}}" as string)] },
];

export const commercialAccessOptions = [
  { icon: Target, title: ("{{cms:funding.pages_funding_eligibility_page_data_commercial_access_options.title_243}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_commercial_access_options.text_244}}" as string) },
  { icon: Layers3, title: ("{{cms:funding.pages_funding_eligibility_page_data_commercial_access_options.title_245}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_commercial_access_options.text_246}}" as string) },
  { icon: Route, title: ("{{cms:funding.pages_funding_eligibility_page_data_commercial_access_options.title_247}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_commercial_access_options.text_248}}" as string) },
] as const;

export const commercialCapabilities = ["Planning", "Scheduling", "Cost", ("{{cms:funding.pages_funding_eligibility_page_data_commercial_capabilities.text_249}}" as string), "Risk", "PMO", "Reporting", ("{{cms:funding.pages_funding_eligibility_page_data_commercial_capabilities.text_250}}" as string)] as const;

export const alternativeRouteOptions = [
  {
    eyebrow: ("{{cms:funding.pages_funding_eligibility_page_data_alternative_route_options.eyebrow_251}}" as string),
    title: ("{{cms:funding.pages_funding_eligibility_page_data_alternative_route_options.title_252}}" as string),
    copy: ("{{cms:funding.pages_funding_eligibility_page_data_alternative_route_options.copy_253}}" as string),
    items: [] as readonly string[],
    cta: ("{{cms:funding.pages_funding_eligibility_page_data_alternative_route_options.cta_254}}" as string),
    href: ("{{cms:funding.pages_funding_eligibility_page_data_alternative_route_options.href_255}}" as string),
    dark: false,
  },
  {
    eyebrow: ("{{cms:funding.pages_funding_eligibility_page_data_alternative_route_options.eyebrow_256}}" as string),
    title: ("{{cms:funding.pages_funding_eligibility_page_data_alternative_route_options.title_257}}" as string),
    copy: ("{{cms:funding.pages_funding_eligibility_page_data_alternative_route_options.copy_258}}" as string),
    items: [("{{cms:funding.pages_funding_eligibility_page_data_alternative_route_options.items_259}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_alternative_route_options.items_260}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_alternative_route_options.items_261}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_alternative_route_options.items_262}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_alternative_route_options.items_263}}" as string)],
    cta: ("{{cms:funding.pages_funding_eligibility_page_data_alternative_route_options.cta_264}}" as string),
    href: ("{{cms:funding.pages_funding_eligibility_page_data_alternative_route_options.href_265}}" as string),
    dark: true,
  },
] as const;

export const availabilityItems = [
  { icon: CalendarDays, title: ("{{cms:funding.pages_funding_eligibility_page_data_availability_items.title_266}}" as string), copy: ("{{cms:funding.pages_funding_eligibility_page_data_availability_items.copy_267}}" as string), tone: "gold" },
  { icon: Users, title: ("{{cms:funding.pages_funding_eligibility_page_data_availability_items.title_268}}" as string), copy: ("{{cms:funding.pages_funding_eligibility_page_data_availability_items.copy_269}}" as string), tone: "purple" },
] as const;

export const projectControlModules = [
  { title: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.title_270}}" as string), copy: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.copy_271}}" as string), items: [("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_272}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_273}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_274}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_275}}" as string)] },
  { title: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.title_276}}" as string), copy: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.copy_277}}" as string), items: [("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_278}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_279}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_280}}" as string)] },
  { title: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.title_281}}" as string), copy: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.copy_282}}" as string), items: [("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_283}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_284}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_285}}" as string)] },
  { title: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.title_286}}" as string), copy: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.copy_287}}" as string), items: [("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_288}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_289}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_290}}" as string)] },
  { title: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.title_291}}" as string), copy: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.copy_292}}" as string), items: [("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_293}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_294}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_295}}" as string)] },
  { title: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.title_296}}" as string), copy: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.copy_297}}" as string), items: [("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_298}}" as string), "Communications", ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_299}}" as string)] },
  { title: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.title_300}}" as string), copy: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.copy_301}}" as string), badge: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.badge_302}}" as string), items: [("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_303}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_304}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_305}}" as string)] },
  { title: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.title_306}}" as string), copy: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.copy_307}}" as string), badge: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.badge_308}}" as string), items: [("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_309}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_310}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_311}}" as string)] },
  { title: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.title_312}}" as string), copy: ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.copy_313}}" as string), items: [("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_314}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_315}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_project_control_modules.items_316}}" as string)] },
] as const;

export const eligibilityItems = [
  { icon: Building2, title: ("{{cms:funding.pages_funding_eligibility_page_data_eligibility_items.title_317}}" as string), copy: ("{{cms:funding.pages_funding_eligibility_page_data_eligibility_items.copy_318}}" as string) },
  { icon: ShieldCheck, title: ("{{cms:funding.pages_funding_eligibility_page_data_eligibility_items.title_319}}" as string), copy: ("{{cms:funding.pages_funding_eligibility_page_data_eligibility_items.copy_320}}" as string) },
  { icon: BookOpen, title: ("{{cms:funding.pages_funding_eligibility_page_data_eligibility_items.title_321}}" as string), copy: ("{{cms:funding.pages_funding_eligibility_page_data_eligibility_items.copy_322}}" as string) },
  { icon: BriefcaseBusiness, title: ("{{cms:funding.pages_funding_eligibility_page_data_eligibility_items.title_323}}" as string), copy: ("{{cms:funding.pages_funding_eligibility_page_data_eligibility_items.copy_324}}" as string) },
  { icon: Landmark, title: ("{{cms:funding.pages_funding_eligibility_page_data_eligibility_items.title_325}}" as string), copy: ("{{cms:funding.pages_funding_eligibility_page_data_eligibility_items.copy_326}}" as string) },
  { icon: MapPin, title: ("{{cms:funding.pages_funding_eligibility_page_data_eligibility_items.title_327}}" as string), copy: ("{{cms:funding.pages_funding_eligibility_page_data_eligibility_items.copy_328}}" as string) },
] as const;

export const eligibilityRequirements = [("{{cms:funding.pages_funding_eligibility_page_data_eligibility_requirements.text_329}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_eligibility_requirements.text_330}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_eligibility_requirements.text_331}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_eligibility_requirements.text_332}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_eligibility_requirements.text_333}}" as string)] as const;

export const checkerQuestions = [
  { text: ("{{cms:funding.pages_funding_eligibility_page_data_checker_questions.text_334}}" as string), answers: ["Yes", "No"] },
  { text: ("{{cms:funding.pages_funding_eligibility_page_data_checker_questions.text_335}}" as string), answers: ["Yes", "No", "Unsure"] },
  { text: ("{{cms:funding.pages_funding_eligibility_page_data_checker_questions.text_336}}" as string), answers: ["Yes", "No", "Self-employed"] },
  { text: ("{{cms:funding.pages_funding_eligibility_page_data_checker_questions.text_337}}" as string), answers: [("{{cms:funding.pages_funding_eligibility_page_data_checker_questions.answers_338}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_checker_questions.answers_339}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_checker_questions.answers_340}}" as string)] },
  { text: ("{{cms:funding.pages_funding_eligibility_page_data_checker_questions.text_341}}" as string), answers: ["Yes", "No", "Unsure"] },
  { text: ("{{cms:funding.pages_funding_eligibility_page_data_checker_questions.text_342}}" as string), answers: ["No", "Yes"] },
  { text: ("{{cms:funding.pages_funding_eligibility_page_data_checker_questions.text_343}}" as string), answers: ["Yes", "No", "Unsure"] },
  { text: ("{{cms:funding.pages_funding_eligibility_page_data_checker_questions.text_344}}" as string), answers: [("{{cms:funding.pages_funding_eligibility_page_data_checker_questions.answers_345}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_checker_questions.answers_346}}" as string), "Marketing", ("{{cms:funding.pages_funding_eligibility_page_data_checker_questions.answers_347}}" as string)] },
] as const;

export const employerSteps = [
  { icon: Target, title: ("{{cms:funding.pages_funding_eligibility_page_data_employer_steps.title_348}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_employer_steps.text_349}}" as string) },
  { icon: FileCheck2, title: ("{{cms:funding.pages_funding_eligibility_page_data_employer_steps.title_350}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_employer_steps.text_351}}" as string) },
  { icon: Landmark, title: ("{{cms:funding.pages_funding_eligibility_page_data_employer_steps.title_352}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_employer_steps.text_353}}" as string), code: ("{{cms:funding.pages_funding_eligibility_page_data_employer_steps.code_354}}" as string) },
  { icon: UserCheck, title: ("{{cms:funding.pages_funding_eligibility_page_data_employer_steps.title_355}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_employer_steps.text_356}}" as string) },
] as const;

export const employerBenefits = [("{{cms:funding.pages_funding_eligibility_page_data_employer_benefits.text_357}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_employer_benefits.text_358}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_employer_benefits.text_359}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_employer_benefits.text_360}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_employer_benefits.text_361}}" as string)] as const;

export const comparisonRoutes = [
  { icon: Landmark, route: "Route 01", title: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.title_362}}" as string), best: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.best_363}}" as string), structure: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.structure_364}}" as string), funding: "Government-supported", objective: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.objective_365}}" as string), examples: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.examples_366}}" as string), employer: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.employer_367}}" as string), link: "#eligibility-checker" },
  { icon: Sparkles, route: "Route 02", title: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.title_368}}" as string), best: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.best_369}}" as string), structure: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.structure_370}}" as string), funding: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.funding_371}}" as string), objective: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.objective_372}}" as string), examples: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.examples_373}}" as string), employer: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.employer_374}}" as string), link: "#kbc-fund-details" },
  { icon: BadgePoundSterling, route: "Route 03", title: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.title_375}}" as string), best: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.best_376}}" as string), structure: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.structure_377}}" as string), funding: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.funding_378}}" as string), objective: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.objective_379}}" as string), examples: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.examples_380}}" as string), employer: ("{{cms:funding.pages_funding_eligibility_page_data_comparison_routes.employer_381}}" as string), link: "#commercial-access", dark: true },
] as const;

export const faqs = [
  [("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_382}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_383}}" as string)],
  [("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_384}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_385}}" as string)],
  [("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_386}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_387}}" as string)],
  [("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_388}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_389}}" as string)],
  [("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_390}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_391}}" as string)],
  [("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_392}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_393}}" as string)],
  [("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_394}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_395}}" as string)],
  [("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_396}}" as string), "Yes. Commercial access is designed to be flexible, so you can focus on one immediate capability gap or connect several subjects into a wider plan."],
  [("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_397}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_398}}" as string)],
  [("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_399}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_400}}" as string)],
  [("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_401}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_402}}" as string)],
  [("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_403}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_404}}" as string)],
  [("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_405}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_406}}" as string)],
  [("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_407}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_408}}" as string)],
  [("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_409}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_410}}" as string)],
  [("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_411}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_412}}" as string)],
  [("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_413}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_414}}" as string)],
  [("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_415}}" as string), ("{{cms:funding.pages_funding_eligibility_page_data_faqs.text_416}}" as string)],
] as const;

export const finalRoutes = [
  { icon: Compass, label: ("{{cms:funding.pages_funding_eligibility_page_data_final_routes.label_417}}" as string), title: ("{{cms:funding.pages_funding_eligibility_page_data_final_routes.title_418}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_final_routes.text_419}}" as string), href: ("{{cms:funding.pages_funding_eligibility_page_data_final_routes.href_420}}" as string) },
  { icon: Building2, label: ("{{cms:funding.pages_funding_eligibility_page_data_final_routes.label_421}}" as string), title: ("{{cms:funding.pages_funding_eligibility_page_data_final_routes.title_422}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_final_routes.text_423}}" as string), href: ("{{cms:funding.pages_funding_eligibility_page_data_final_routes.href_424}}" as string) },
  { icon: GraduationCap, label: ("{{cms:funding.pages_funding_eligibility_page_data_final_routes.label_425}}" as string), title: ("{{cms:funding.pages_funding_eligibility_page_data_final_routes.title_426}}" as string), text: ("{{cms:funding.pages_funding_eligibility_page_data_final_routes.text_427}}" as string), href: ("{{cms:funding.pages_funding_eligibility_page_data_final_routes.href_428}}" as string) },
] as const;
