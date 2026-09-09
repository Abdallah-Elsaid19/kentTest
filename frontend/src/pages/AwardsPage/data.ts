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
  "title": ("{{cms:awards.pages_awards_page_data_awards_seo.title_001}}" as string),
  "description": ("{{cms:awards.pages_awards_page_data_awards_seo.description_002}}" as string)
};

export const awardsHero = {
  "eyebrow": ("{{cms:awards.pages_awards_page_data_awards_hero.eyebrow_003}}" as string),
  "title": ("{{cms:awards.pages_awards_page_data_awards_hero.title_004}}" as string),
  "accent": ("{{cms:awards.pages_awards_page_data_awards_hero.accent_005}}" as string),
  "paragraphs": [
    ("{{cms:awards.pages_awards_page_data_awards_hero.paragraphs_006}}" as string),
    ("{{cms:awards.pages_awards_page_data_awards_hero.paragraphs_007}}" as string)
  ],
  "image": ("{{cms:awards.pages_awards_page_data_awards_hero.image_008}}" as string)
};

export const awardsIntro = {
  "eyebrow": ("{{cms:awards.pages_awards_page_data_awards_intro.eyebrow_009}}" as string),
  "title": ("{{cms:awards.pages_awards_page_data_awards_intro.title_010}}" as string),
  "description": ("{{cms:awards.pages_awards_page_data_awards_intro.description_011}}" as string),
  "note": ("{{cms:awards.pages_awards_page_data_awards_intro.note_012}}" as string)
};

export const recognitionFilters = [
  {
    "key": "all",
    "label": ("{{cms:awards.pages_awards_page_data_recognition_filters.label_013}}" as string)
  },
  {
    "key": "quality",
    "label": ("{{cms:awards.pages_awards_page_data_recognition_filters.label_014}}" as string)
  },
  {
    "key": "professional",
    "label": ("{{cms:awards.pages_awards_page_data_recognition_filters.label_015}}" as string)
  },
  {
    "key": "certification",
    "label": ("{{cms:awards.pages_awards_page_data_recognition_filters.label_016}}" as string)
  },
  {
    "key": "award",
    "label": ("{{cms:awards.pages_awards_page_data_recognition_filters.label_017}}" as string)
  }
] as const satisfies readonly { key: RecognitionFilter; label: string }[];

export const recognitionGroups = [
  {
    "key": "standards",
    "title": ("{{cms:awards.pages_awards_page_data_recognition_groups.title_018}}" as string),
    "description": ("{{cms:awards.pages_awards_page_data_recognition_groups.description_019}}" as string)
  },
  {
    "key": "relationships",
    "title": ("{{cms:awards.pages_awards_page_data_recognition_groups.title_020}}" as string),
    "description": ("{{cms:awards.pages_awards_page_data_recognition_groups.description_021}}" as string)
  },
  {
    "key": "awards",
    "title": ("{{cms:awards.pages_awards_page_data_recognition_groups.title_022}}" as string),
    "description": ("{{cms:awards.pages_awards_page_data_recognition_groups.description_023}}" as string)
  }
] as const satisfies readonly { key: RecognitionGroup; title: string; description: string }[];

export const recognitions: readonly Recognition[] = [
  {
    "id": "matrix-standard",
    "categoryLabel": ("{{cms:awards.pages_awards_page_data_recognitions.category_label_024}}" as string),
    "filterGroup": "quality",
    "group": "standards",
    "icon": Award,
    "title": ("{{cms:awards.pages_awards_page_data_recognitions.title_025}}" as string),
    "year": "2025",
    "awardingBody": ("{{cms:awards.pages_awards_page_data_recognitions.awarding_body_026}}" as string),
    "description": ("{{cms:awards.pages_awards_page_data_recognitions.description_027}}" as string)
  },
  {
    "id": "investors-in-people",
    "categoryLabel": ("{{cms:awards.pages_awards_page_data_recognitions.category_label_028}}" as string),
    "filterGroup": "quality",
    "group": "standards",
    "icon": UsersRound,
    "title": ("{{cms:awards.pages_awards_page_data_recognitions.title_029}}" as string),
    "year": "2024",
    "awardingBody": ("{{cms:awards.pages_awards_page_data_recognitions.awarding_body_030}}" as string),
    "description": ("{{cms:awards.pages_awards_page_data_recognitions.description_031}}" as string)
  },
  {
    "id": "apm-corporate-partner",
    "categoryLabel": ("{{cms:awards.pages_awards_page_data_recognitions.category_label_032}}" as string),
    "filterGroup": "professional",
    "group": "relationships",
    "icon": UserRoundCheck,
    "title": ("{{cms:awards.pages_awards_page_data_recognitions.title_033}}" as string),
    "year": "2026",
    "awardingBody": ("{{cms:awards.pages_awards_page_data_recognitions.awarding_body_034}}" as string),
    "description": ("{{cms:awards.pages_awards_page_data_recognitions.description_035}}" as string)
  },
  {
    "id": "cmi-approved-centre",
    "categoryLabel": ("{{cms:awards.pages_awards_page_data_recognitions.category_label_036}}" as string),
    "filterGroup": "professional",
    "group": "relationships",
    "icon": Building2,
    "title": ("{{cms:awards.pages_awards_page_data_recognitions.title_037}}" as string),
    "year": "2025",
    "awardingBody": ("{{cms:awards.pages_awards_page_data_recognitions.awarding_body_038}}" as string),
    "description": ("{{cms:awards.pages_awards_page_data_recognitions.description_039}}" as string)
  },
  {
    "id": "cim-study-centre",
    "categoryLabel": ("{{cms:awards.pages_awards_page_data_recognitions.category_label_040}}" as string),
    "filterGroup": "professional",
    "group": "relationships",
    "icon": GraduationCap,
    "title": ("{{cms:awards.pages_awards_page_data_recognitions.title_041}}" as string),
    "year": "2025",
    "awardingBody": ("{{cms:awards.pages_awards_page_data_recognitions.awarding_body_042}}" as string),
    "description": ("{{cms:awards.pages_awards_page_data_recognitions.description_043}}" as string)
  },
  {
    "id": "apprenticeship-provider-finalist",
    "categoryLabel": ("{{cms:awards.pages_awards_page_data_recognitions.category_label_044}}" as string),
    "filterGroup": "award",
    "group": "awards",
    "icon": Trophy,
    "title": ("{{cms:awards.pages_awards_page_data_recognitions.title_045}}" as string),
    "year": "2025",
    "awardingBody": ("{{cms:awards.pages_awards_page_data_recognitions.awarding_body_046}}" as string),
    "description": ("{{cms:awards.pages_awards_page_data_recognitions.description_047}}" as string)
  },
  {
    "id": "cyber-essentials",
    "categoryLabel": ("{{cms:awards.pages_awards_page_data_recognitions.category_label_048}}" as string),
    "filterGroup": "certification",
    "group": "standards",
    "icon": ShieldCheck,
    "title": ("{{cms:awards.pages_awards_page_data_recognitions.title_049}}" as string),
    "year": "2025",
    "awardingBody": ("{{cms:awards.pages_awards_page_data_recognitions.awarding_body_050}}" as string),
    "description": ("{{cms:awards.pages_awards_page_data_recognitions.description_051}}" as string)
  },
  {
    "id": "living-wage-employer",
    "categoryLabel": ("{{cms:awards.pages_awards_page_data_recognitions.category_label_052}}" as string),
    "filterGroup": "quality",
    "group": "standards",
    "icon": HeartHandshake,
    "title": ("{{cms:awards.pages_awards_page_data_recognitions.title_053}}" as string),
    "year": "2024",
    "awardingBody": ("{{cms:awards.pages_awards_page_data_recognitions.awarding_body_054}}" as string),
    "description": ("{{cms:awards.pages_awards_page_data_recognitions.description_055}}" as string)
  }
];

export const recognitionBenefits = {
  "eyebrow": ("{{cms:awards.pages_awards_page_data_recognition_benefits.eyebrow_056}}" as string),
  "title": ("{{cms:awards.pages_awards_page_data_recognition_benefits.title_057}}" as string),
  "items": [
    {
      "icon": GraduationCap,
      "title": ("{{cms:awards.pages_awards_page_data_recognition_benefits.items_title_058}}" as string),
      "copy": ("{{cms:awards.pages_awards_page_data_recognition_benefits.items_copy_059}}" as string)
    },
    {
      "icon": Building2,
      "title": ("{{cms:awards.pages_awards_page_data_recognition_benefits.items_title_060}}" as string),
      "copy": ("{{cms:awards.pages_awards_page_data_recognition_benefits.items_copy_061}}" as string)
    },
    {
      "icon": Route,
      "title": ("{{cms:awards.pages_awards_page_data_recognition_benefits.items_title_062}}" as string),
      "copy": ("{{cms:awards.pages_awards_page_data_recognition_benefits.items_copy_063}}" as string)
    }
  ]
};

export const awardsCta = {
  "eyebrow": ("{{cms:awards.pages_awards_page_data_awards_cta.eyebrow_064}}" as string),
  "title": ("{{cms:awards.pages_awards_page_data_awards_cta.title_065}}" as string),
  "description": ("{{cms:awards.pages_awards_page_data_awards_cta.description_066}}" as string),
  "actions": [
    {
      "label": ("{{cms:awards.pages_awards_page_data_awards_cta.actions_label_067}}" as string),
      "href": ("{{cms:awards.pages_awards_page_data_awards_cta.actions_href_068}}" as string)
    },
    {
      "label": ("{{cms:awards.pages_awards_page_data_awards_cta.actions_label_069}}" as string),
      "href": ("{{cms:awards.pages_awards_page_data_awards_cta.actions_href_070}}" as string)
    },
    {
      "label": ("{{cms:awards.pages_awards_page_data_awards_cta.actions_label_071}}" as string),
      "href": ("{{cms:awards.pages_awards_page_data_awards_cta.actions_href_072}}" as string)
    }
  ]
};
