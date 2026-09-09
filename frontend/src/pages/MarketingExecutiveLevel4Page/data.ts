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
    "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.hero_eyebrow_001}}" as string),
    "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.hero_title_002}}" as string),
    "accent": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.hero_accent_003}}" as string),
    "titleSuffix": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.hero_title_suffix_004}}" as string),
    "lead": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.hero_lead_005}}" as string),
    "fundingTitle": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.hero_funding_title_006}}" as string),
    "fundingDescription": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.hero_funding_description_007}}" as string),
    "audienceLabel": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.hero_audience_label_008}}" as string),
    "audience": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.hero_audience_009}}" as string),
    "catalogue": "https://kentbusinesscollege.com/wp-content/uploads/2026/06/Apprentice-Charter-Agreement-with-the-Marketing-Executive-Level-4-with-Level-4-Certificate-in-Professional-and-Digital-Marketing_compressed.pdf",
    "catalogueLabel": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.hero_catalogue_label_010}}" as string),
    "image": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.hero_image_011}}" as string)
  },
  "cohorts": [
    {
      "id": "september-2026",
      "label": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.cohorts_label_012}}" as string),
      "upcoming": false
    }
  ],
  "highlights": [
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.highlights_title_013}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.highlights_description_014}}" as string),
      "marker": "01"
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.highlights_title_015}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.highlights_description_016}}" as string),
      "marker": "02"
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.highlights_title_017}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.highlights_description_018}}" as string),
      "marker": "03"
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.highlights_title_019}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.highlights_description_020}}" as string),
      "marker": "04"
    }
  ],
  "commitments": [],
  "secondaryAction": {
    "label": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.secondary_action_label_021}}" as string),
    "to": "#curriculum"
  },
  "cohortAction": {
    "label": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.cohort_action_label_022}}" as string),
    "to": "/book-session"
  },
  "cohortEyebrow": null,
  "cohortTitle": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.cohort_title_023}}" as string),
  "cohortTitleAsBadge": true,
  "cohortDescription": null,
  "qualificationImage": {
    "image": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.qualification_image_image_024}}" as string),
    "name": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data.qualification_image_name_025}}" as string)
  },
  "overlay": "default"
} satisfies ProgrammeHeroData;

export const programmeStats = [
  {
    "value": "Potentially 100%",
    "label": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_programme_stats.label_026}}" as string)
  },
  {
    "value": "Level 4",
    "label": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_programme_stats.label_027}}" as string)
  },
  {
    "value": "Workplace value",
    "label": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_programme_stats.label_028}}" as string)
  },
  {
    "value": "CIM Level 4",
    "label": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_programme_stats.label_029}}" as string)
  }
] satisfies readonly { label: string; value: string }[];

export const overviewData = {
  "id": "overview",
  "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_overview_data.eyebrow_030}}" as string),
  "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_overview_data.title_031}}" as string),
  "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_overview_data.description_032}}" as string),
  "items": [
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_overview_data.items_title_033}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_overview_data.items_description_034}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_overview_data.items_title_035}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_overview_data.items_description_036}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_overview_data.items_title_037}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_overview_data.items_description_038}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_overview_data.items_title_039}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_overview_data.items_description_040}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_overview_data.items_title_041}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_overview_data.items_description_042}}" as string)
    }
  ]
} satisfies ItemSection;

export const learnerExperience = {
  "id": "learning",
  "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_learner_experience.eyebrow_043}}" as string),
  "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_learner_experience.title_044}}" as string),
  "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_learner_experience.description_045}}" as string),
  "items": [
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_learner_experience.items_title_046}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_learner_experience.items_description_047}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_learner_experience.items_title_048}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_learner_experience.items_description_049}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_learner_experience.items_title_050}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_learner_experience.items_description_051}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_learner_experience.items_title_052}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_learner_experience.items_description_053}}" as string)
    }
  ]
} satisfies ItemSection;

export const weeklyCommitment = {
  "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_weekly_commitment.title_054}}" as string),
  "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_weekly_commitment.description_055}}" as string),
  "hours": [
    {
      "hours": "2h",
      "label": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_weekly_commitment.hours_label_056}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_weekly_commitment.hours_description_057}}" as string)
    },
    {
      "hours": "3h",
      "label": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_weekly_commitment.hours_label_058}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_weekly_commitment.hours_description_059}}" as string)
    },
    {
      "hours": "3h",
      "label": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_weekly_commitment.hours_label_060}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_weekly_commitment.hours_description_061}}" as string)
    }
  ]
} satisfies ProgrammeWeeklyCommitmentData;

export const curriculumJourney = {
  "id": "curriculum",
  "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.eyebrow_062}}" as string),
  "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.title_063}}" as string),
  "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.description_064}}" as string),
  "caption": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.caption_065}}" as string),
  "image": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.image_066}}" as string),
  "imageAlt": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.image_alt_067}}" as string),
  "modules": [
    {
      "number": "01",
      "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_eyebrow_068}}" as string),
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_title_069}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_description_070}}" as string),
      "items": [
        ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_items_071}}" as string),
        ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_items_072}}" as string),
        ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_items_073}}" as string),
        ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_items_074}}" as string),
        ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_items_075}}" as string)
      ]
    },
    {
      "number": "02",
      "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_eyebrow_076}}" as string),
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_title_077}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_description_078}}" as string),
      "items": [
        ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_items_079}}" as string),
        ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_items_080}}" as string),
        ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_items_081}}" as string),
        ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_items_082}}" as string),
        ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_items_083}}" as string)
      ]
    },
    {
      "number": "03",
      "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_eyebrow_084}}" as string),
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_title_085}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_description_086}}" as string),
      "items": [
        ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_items_087}}" as string),
        ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_items_088}}" as string),
        ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_items_089}}" as string),
        ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_items_090}}" as string),
        ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.modules_items_091}}" as string)
      ]
    }
  ],
  "milestones": [
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.milestones_title_092}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.milestones_description_093}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.milestones_title_094}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.milestones_description_095}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.milestones_title_096}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.milestones_description_097}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.milestones_title_098}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.milestones_description_099}}" as string)
    }
  ],
  "evidence": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey.evidence_100}}" as string)
} satisfies CurriculumData;

export const knowledgeSkillsBehaviours = [
  {
    "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_knowledge_skills_behaviours.title_101}}" as string),
    "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_knowledge_skills_behaviours.description_102}}" as string)
  },
  {
    "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_knowledge_skills_behaviours.title_103}}" as string),
    "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_knowledge_skills_behaviours.description_104}}" as string)
  },
  {
    "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_knowledge_skills_behaviours.title_105}}" as string),
    "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_knowledge_skills_behaviours.description_106}}" as string)
  }
] satisfies readonly ProgrammeItem[];

export const aiMarketingData = {
  "id": "ai",
  "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_ai_marketing_data.eyebrow_107}}" as string),
  "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_ai_marketing_data.title_108}}" as string),
  "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_ai_marketing_data.description_109}}" as string),
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
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_ai_marketing_data.items_title_110}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_ai_marketing_data.items_description_111}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_ai_marketing_data.items_title_112}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_ai_marketing_data.items_description_113}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_ai_marketing_data.items_title_114}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_ai_marketing_data.items_description_115}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_ai_marketing_data.items_title_116}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_ai_marketing_data.items_description_117}}" as string)
    }
  ]
} satisfies ItemSection & { labels: readonly string[]; workflow: readonly string[] };

export const eligibilityData = {
  "id": "eligibility",
  "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_eligibility_data.eyebrow_118}}" as string),
  "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_eligibility_data.title_119}}" as string),
  "main": {
    "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_eligibility_data.main_eyebrow_120}}" as string),
    "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_eligibility_data.main_title_121}}" as string),
    "items": [
      ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_eligibility_data.main_items_122}}" as string),
      ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_eligibility_data.main_items_123}}" as string),
      ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_eligibility_data.main_items_124}}" as string),
      ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_eligibility_data.main_items_125}}" as string),
      ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_eligibility_data.main_items_126}}" as string),
      ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_eligibility_data.main_items_127}}" as string),
      ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_eligibility_data.main_items_128}}" as string)
    ]
  },
  "aside": {
    "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_eligibility_data.aside_eyebrow_129}}" as string),
    "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_eligibility_data.aside_title_130}}" as string),
    "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_eligibility_data.aside_description_131}}" as string),
    "action": {
      "label": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_eligibility_data.aside_action_label_132}}" as string),
      "to": "/book-session"
    }
  }
} satisfies EligibilityData;

export const fundingData = {
  "id": "funding",
  "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_funding_data.eyebrow_133}}" as string),
  "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_funding_data.title_134}}" as string),
  "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_funding_data.description_135}}" as string),
  "main": {
    "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_funding_data.main_eyebrow_136}}" as string),
    "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_funding_data.main_title_137}}" as string),
    "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_funding_data.main_description_138}}" as string),
    "items": [
      ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_funding_data.main_items_139}}" as string),
      ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_funding_data.main_items_140}}" as string),
      ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_funding_data.main_items_141}}" as string)
    ],
    "action": {
      "label": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_funding_data.main_action_label_142}}" as string),
      "to": "/book-session"
    }
  },
  "items": [
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_funding_data.items_title_143}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_funding_data.items_description_144}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_funding_data.items_title_145}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_funding_data.items_description_146}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_funding_data.items_title_147}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_funding_data.items_description_148}}" as string)
    }
  ],
  "note": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_funding_data.note_149}}" as string)
} satisfies FundingData;

export const cimQualification = {
  "id": "cim",
  "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_cim_qualification.eyebrow_150}}" as string),
  "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_cim_qualification.title_151}}" as string),
  "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_cim_qualification.description_152}}" as string),
  "titleDetail": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_cim_qualification.title_detail_153}}" as string),
  "descriptionDetail": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_cim_qualification.description_detail_154}}" as string),
  "items": [
    {
      "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_cim_qualification.items_eyebrow_155}}" as string),
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_cim_qualification.items_title_156}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_cim_qualification.items_description_157}}" as string)
    },
    {
      "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_cim_qualification.items_eyebrow_158}}" as string),
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_cim_qualification.items_title_159}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_cim_qualification.items_description_160}}" as string)
    },
    {
      "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_cim_qualification.items_eyebrow_161}}" as string),
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_cim_qualification.items_title_162}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_cim_qualification.items_description_163}}" as string)
    }
  ],
  "note": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_cim_qualification.note_164}}" as string),
  "searchNote": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_cim_qualification.search_note_165}}" as string)
} satisfies CimData;

export const employerBenefits = {
  "id": "employers",
  "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_employer_benefits.eyebrow_166}}" as string),
  "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_employer_benefits.title_167}}" as string),
  "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_employer_benefits.description_168}}" as string),
  "items": [
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_employer_benefits.items_title_169}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_employer_benefits.items_description_170}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_employer_benefits.items_title_171}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_employer_benefits.items_description_172}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_employer_benefits.items_title_173}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_employer_benefits.items_description_174}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_employer_benefits.items_title_175}}" as string),
      "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_employer_benefits.items_description_176}}" as string)
    }
  ]
} satisfies ItemSection;

export const faqHeading = {
  "id": "faq",
  "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_faq_heading.eyebrow_177}}" as string),
  "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_faq_heading.title_178}}" as string)
} satisfies ProgrammeSectionData;

export const faqs = [
  {
    "question": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_faqs.question_179}}" as string),
    "answer": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_faqs.answer_180}}" as string)
  },
  {
    "question": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_faqs.question_181}}" as string),
    "answer": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_faqs.answer_182}}" as string)
  },
  {
    "question": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_faqs.question_183}}" as string),
    "answer": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_faqs.answer_184}}" as string)
  },
  {
    "question": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_faqs.question_185}}" as string),
    "answer": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_faqs.answer_186}}" as string)
  },
  {
    "question": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_faqs.question_187}}" as string),
    "answer": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_faqs.answer_188}}" as string)
  },
  {
    "question": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_faqs.question_189}}" as string),
    "answer": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_faqs.answer_190}}" as string)
  }
] satisfies readonly { question: string; answer: string }[];

export const finalCTA = {
  "id": "next-steps",
  "eyebrow": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_final_cta.eyebrow_191}}" as string),
  "title": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_final_cta.title_192}}" as string),
  "description": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_final_cta.description_193}}" as string),
  "actions": [
    {
      "label": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_final_cta.actions_label_194}}" as string),
      "to": "/book-session"
    },
    {
      "label": ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_final_cta.actions_label_195}}" as string),
      "to": "mailto:Office@Kentbusinesscollege.org?subject=Marketing%20Executive%20Level%204%20Apprenticeship%20enquiry"
    }
  ]
} satisfies ProgrammeSectionData & { actions: readonly Action[] };

export const pageNavigation = [
  { label: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.label_196}}" as string), href: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.href_197}}" as string) },
  { label: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.label_198}}" as string), href: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.href_199}}" as string) },
  { label: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.label_200}}" as string), href: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.href_201}}" as string) },
  { label: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.label_202}}" as string), href: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.href_203}}" as string) },
  { label: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.label_204}}" as string), href: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.href_205}}" as string) },
  { label: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.label_206}}" as string), href: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.href_207}}" as string) },
  { label: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.label_208}}" as string), href: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.href_209}}" as string) },
  { label: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.label_210}}" as string), href: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.href_211}}" as string) },
  { label: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.label_212}}" as string), href: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.href_213}}" as string) },
  { label: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.label_214}}" as string), href: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.href_215}}" as string) },
  { label: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.label_216}}" as string), href: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.href_217}}" as string) },
  { label: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.label_218}}" as string), href: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.href_219}}" as string) },
  { label: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.label_220}}" as string), href: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation.href_221}}" as string) },
] as const;

export const programmeMeta = {
  title: ("{{cms:programme_marketing_l4.pages_marketing_executive_level4_page_da_programme_meta.title_222}}" as string),
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
