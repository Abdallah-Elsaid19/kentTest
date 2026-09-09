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
    "eyebrow": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.hero_eyebrow_001}}" as string),
    "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.hero_title_002}}" as string),
    "accent": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.hero_accent_003}}" as string),
    "titleSuffix": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.hero_title_suffix_004}}" as string),
    "lead": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.hero_lead_005}}" as string),
    "fundingTitle": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.hero_funding_title_006}}" as string),
    "fundingDescription": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.hero_funding_description_007}}" as string),
    "audienceLabel": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.hero_audience_label_008}}" as string),
    "audience": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.hero_audience_009}}" as string),
    "catalogue": "https://kentbusinesscollege.com/wp-content/uploads/2026/05/Apprentice-Charter-Agreement-with-the-Marketing-Manager-Level-6-with-Level-6-Certificate-in-Professional-and-Digital-Marketing_compressed-1.pdf",
    "catalogueLabel": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.hero_catalogue_label_010}}" as string),
    "image": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.hero_image_011}}" as string)
  },
  "cohorts": [
    {
      "id": "september-2026",
      "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.cohorts_label_012}}" as string),
      "upcoming": false
    }
  ],
  "highlights": [
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.highlights_title_013}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.highlights_description_014}}" as string),
      "marker": "01"
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.highlights_title_015}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.highlights_description_016}}" as string),
      "marker": "02"
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.highlights_title_017}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.highlights_description_018}}" as string),
      "marker": "03"
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.highlights_title_019}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.highlights_description_020}}" as string),
      "marker": "04"
    }
  ],
  "commitments": [],
  "secondaryAction": {
    "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.secondary_action_label_021}}" as string),
    "to": "#curriculum"
  },
  "cohortAction": {
    "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.cohort_action_label_022}}" as string),
    "to": "/book-session"
  },
  "cohortEyebrow": null,
  "cohortTitle": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.cohort_title_023}}" as string),
  "cohortTitleAsBadge": true,
  "cohortDescription": null,
  "qualificationImage": {
    "image": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.qualification_image_image_024}}" as string),
    "name": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data.qualification_image_name_025}}" as string)
  },
  "overlay": "default"
} satisfies ProgrammeHeroData;

export const programmeStats = [
  {
    "value": "100%",
    "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_programme_stats.label_026}}" as string),
    "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_programme_stats.description_027}}" as string)
  },
  {
    "value": "L6",
    "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_programme_stats.label_028}}" as string),
    "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_programme_stats.description_029}}" as string)
  },
  {
    "value": "CIM",
    "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_programme_stats.label_030}}" as string),
    "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_programme_stats.description_031}}" as string)
  }
] satisfies readonly { value: string; label: string; description: string }[];

export const overviewData = {
  "id": "overview",
  "eyebrow": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.eyebrow_032}}" as string),
  "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.title_033}}" as string),
  "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.description_034}}" as string),
  "feature": {
    "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.feature_title_035}}" as string),
    "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.feature_description_036}}" as string),
    "items": [
      ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.feature_items_037}}" as string),
      ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.feature_items_038}}" as string),
      ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.feature_items_039}}" as string),
      ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.feature_items_040}}" as string)
    ],
    "image": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.feature_image_041}}" as string),
    "imageAlt": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.feature_image_alt_042}}" as string)
  },
  "items": [
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.items_title_043}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.items_description_044}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.items_title_045}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.items_description_046}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.items_title_047}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.items_description_048}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.items_title_049}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data.items_description_050}}" as string)
    }
  ]
} satisfies ItemSection & { feature: ProgrammeItem & { image: string; imageAlt: string } };

export const curriculumData = {
  "id": "curriculum",
  "eyebrow": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.eyebrow_051}}" as string),
  "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.title_052}}" as string),
  "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.description_053}}" as string),
  "modules": [
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_title_054}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_description_055}}" as string),
      "items": [
        ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_items_056}}" as string),
        ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_items_057}}" as string),
        ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_items_058}}" as string),
        ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_items_059}}" as string)
      ],
      "number": "01",
      "eyebrow": ""
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_title_060}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_description_061}}" as string),
      "items": [
        ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_items_062}}" as string),
        ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_items_063}}" as string),
        ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_items_064}}" as string),
        ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_items_065}}" as string)
      ],
      "number": "02",
      "eyebrow": ""
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_title_066}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_description_067}}" as string),
      "items": [
        ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_items_068}}" as string),
        ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_items_069}}" as string),
        ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_items_070}}" as string),
        ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_items_071}}" as string)
      ],
      "number": "03",
      "eyebrow": ""
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_title_072}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_description_073}}" as string),
      "items": [
        ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_items_074}}" as string),
        ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_items_075}}" as string),
        ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_items_076}}" as string),
        ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.modules_items_077}}" as string)
      ],
      "number": "04",
      "eyebrow": ""
    }
  ],
  "progression": {
    "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.progression_title_078}}" as string),
    "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.progression_description_079}}" as string),
    "items": [
      ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.progression_items_080}}" as string),
      ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.progression_items_081}}" as string),
      ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.progression_items_082}}" as string),
      ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data.progression_items_083}}" as string)
    ]
  }
} satisfies ProgrammeCurriculumData;

export const coreMarketingDisciplines = {
  "id": "disciplines",
  "eyebrow": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_core_marketing_disciplines.eyebrow_084}}" as string),
  "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_core_marketing_disciplines.title_085}}" as string),
  "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_core_marketing_disciplines.description_086}}" as string),
  "items": [
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_core_marketing_disciplines.items_title_087}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_core_marketing_disciplines.items_description_088}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_core_marketing_disciplines.items_title_089}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_core_marketing_disciplines.items_description_090}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_core_marketing_disciplines.items_title_091}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_core_marketing_disciplines.items_description_092}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_core_marketing_disciplines.items_title_093}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_core_marketing_disciplines.items_description_094}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_core_marketing_disciplines.items_title_095}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_core_marketing_disciplines.items_description_096}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_core_marketing_disciplines.items_title_097}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_core_marketing_disciplines.items_description_098}}" as string)
    }
  ]
} satisfies ItemSection;

export const cimQualification = {
  "id": "cim",
  "eyebrow": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_cim_qualification.eyebrow_099}}" as string),
  "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_cim_qualification.title_100}}" as string),
  "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_cim_qualification.description_101}}" as string),
  "items": [
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_cim_qualification.items_title_102}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_cim_qualification.items_description_103}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_cim_qualification.items_title_104}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_cim_qualification.items_description_105}}" as string)
    }
  ],
  "note": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_cim_qualification.note_106}}" as string)
} satisfies ProgrammeQualificationData;

export const aiMarketingData = {
  "id": "ai",
  "eyebrow": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data.eyebrow_107}}" as string),
  "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data.title_108}}" as string),
  "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data.description_109}}" as string),
  "appliedTitle": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data.applied_title_110}}" as string),
  "items": [
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data.items_title_111}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data.items_description_112}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data.items_title_113}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data.items_description_114}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data.items_title_115}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data.items_description_116}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data.items_title_117}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data.items_description_118}}" as string)
    }
  ],
  "controlsTitle": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data.controls_title_119}}" as string),
  "controls": [
    ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data.controls_120}}" as string),
    ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data.controls_121}}" as string),
    ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data.controls_122}}" as string),
    ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data.controls_123}}" as string),
    ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data.controls_124}}" as string)
  ]
} satisfies ItemSection & { appliedTitle: string; controlsTitle: string; controls: readonly string[] };

export const eligibilityData = {
  "id": "funding",
  "eyebrow": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_eligibility_data.eyebrow_125}}" as string),
  "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_eligibility_data.title_126}}" as string),
  "main": {
    "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_eligibility_data.main_title_127}}" as string),
    "items": [
      ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_eligibility_data.main_items_128}}" as string),
      ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_eligibility_data.main_items_129}}" as string),
      ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_eligibility_data.main_items_130}}" as string),
      ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_eligibility_data.main_items_131}}" as string),
      ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_eligibility_data.main_items_132}}" as string),
      ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_eligibility_data.main_items_133}}" as string),
      ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_eligibility_data.main_items_134}}" as string)
    ],
    "eyebrow": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_eligibility_data.main_eyebrow_135}}" as string)
  },
  "aside": {
    "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_eligibility_data.aside_title_136}}" as string),
    "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_eligibility_data.aside_description_137}}" as string),
    "eyebrow": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_eligibility_data.aside_eyebrow_138}}" as string),
    "action": {
      "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_eligibility_data.aside_action_label_139}}" as string),
      "to": "/book-session"
    }
  }
} satisfies ProgrammeEligibilityData;

export const employerBenefits = {
  "id": "employers",
  "eyebrow": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_employer_benefits.eyebrow_140}}" as string),
  "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_employer_benefits.title_141}}" as string),
  "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_employer_benefits.description_142}}" as string),
  "items": [
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_employer_benefits.items_title_143}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_employer_benefits.items_description_144}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_employer_benefits.items_title_145}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_employer_benefits.items_description_146}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_employer_benefits.items_title_147}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_employer_benefits.items_description_148}}" as string)
    },
    {
      "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_employer_benefits.items_title_149}}" as string),
      "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_employer_benefits.items_description_150}}" as string)
    }
  ]
} satisfies ItemSection;

export const faqHeading = {
  "id": "faq",
  "eyebrow": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_faq_heading.eyebrow_151}}" as string),
  "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_faq_heading.title_152}}" as string)
} satisfies ProgrammeSectionData;

export const faqs = [
  {
    "question": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_faqs.question_153}}" as string),
    "answer": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_faqs.answer_154}}" as string)
  },
  {
    "question": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_faqs.question_155}}" as string),
    "answer": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_faqs.answer_156}}" as string)
  },
  {
    "question": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_faqs.question_157}}" as string),
    "answer": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_faqs.answer_158}}" as string)
  },
  {
    "question": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_faqs.question_159}}" as string),
    "answer": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_faqs.answer_160}}" as string)
  },
  {
    "question": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_faqs.question_161}}" as string),
    "answer": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_faqs.answer_162}}" as string)
  },
  {
    "question": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_faqs.question_163}}" as string),
    "answer": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_faqs.answer_164}}" as string)
  }
] satisfies readonly { question: string; answer: string }[];

export const finalCTA = {
  "id": "next-step",
  "eyebrow": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_final_cta.eyebrow_165}}" as string),
  "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_final_cta.title_166}}" as string),
  "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_final_cta.description_167}}" as string),
  "actions": [
    {
      "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_final_cta.actions_label_168}}" as string),
      "to": "/book-session"
    },
    {
      "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_final_cta.actions_label_169}}" as string),
      "to": "mailto:Office@Kentbusinesscollege.org?subject=Marketing%20Manager%20Level%206%20Apprenticeship%20enquiry"
    }
  ],
  "contact": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_final_cta.contact_170}}" as string)
} satisfies ProgrammeSectionData & { actions: readonly ProgrammeAction[]; contact: string };

export const enquiryData = {
  "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.title_171}}" as string),
  "description": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.description_172}}" as string),
  "programme": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.programme_173}}" as string),
  "enquiry": {
    "eyebrow": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_eyebrow_174}}" as string),
    "steps": [
      {
        "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_title_175}}" as string),
        "fields": [
          {
            "name": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_name_176}}" as string),
            "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_label_177}}" as string),
            "type": "text",
            "required": true,
            "placeholder": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_placeholder_178}}" as string),
            "autoComplete": "name"
          },
          {
            "name": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_name_179}}" as string),
            "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_label_180}}" as string),
            "type": "email",
            "required": true,
            "placeholder": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_placeholder_181}}" as string),
            "autoComplete": "email"
          },
          {
            "name": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_name_182}}" as string),
            "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_label_183}}" as string),
            "type": "tel",
            "required": false,
            "placeholder": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_placeholder_184}}" as string),
            "autoComplete": "tel"
          },
          {
            "name": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_name_185}}" as string),
            "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_label_186}}" as string),
            "type": "text",
            "required": true,
            "placeholder": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_placeholder_187}}" as string),
            "autoComplete": "organization-title"
          },
          {
            "name": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_name_188}}" as string),
            "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_label_189}}" as string),
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
        "title": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_title_190}}" as string),
        "fields": [
          {
            "name": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_name_191}}" as string),
            "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_label_192}}" as string),
            "type": "text",
            "required": true,
            "placeholder": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_placeholder_193}}" as string),
            "autoComplete": "organization"
          },
          {
            "name": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_name_194}}" as string),
            "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_label_195}}" as string),
            "type": "text",
            "required": true,
            "placeholder": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_placeholder_196}}" as string)
          },
          {
            "name": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_name_197}}" as string),
            "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_label_198}}" as string),
            "type": "select",
            "required": true,
            "options": [
              "Yes",
              "No",
              "Unsure"
            ],
            "placeholder": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_placeholder_199}}" as string)
          },
          {
            "name": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_name_200}}" as string),
            "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_label_201}}" as string),
            "type": "select",
            "required": true,
            "options": [
              ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_options_202}}" as string),
              ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_options_203}}" as string),
              ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_options_204}}" as string),
              ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_options_205}}" as string)
            ],
            "placeholder": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_placeholder_206}}" as string)
          },
          {
            "name": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_name_207}}" as string),
            "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_label_208}}" as string),
            "type": "text",
            "required": true,
            "readOnly": true,
            "value": "Marketing Manager Level 6 Apprenticeship"
          },
          {
            "name": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_name_209}}" as string),
            "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_label_210}}" as string),
            "type": "checkbox",
            "required": false,
            "options": [
              ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_options_211}}" as string),
              ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_options_212}}" as string),
              ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_options_213}}" as string),
              ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_options_214}}" as string),
              ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_options_215}}" as string),
              ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_options_216}}" as string)
            ]
          },
          {
            "name": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_name_217}}" as string),
            "label": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_label_218}}" as string),
            "type": "textarea",
            "required": false,
            "placeholder": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_steps_fields_placeholder_219}}" as string)
          }
        ]
      }
    ],
    "consent": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_consent_220}}" as string),
    "note": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_note_221}}" as string),
    "submitLabel": ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data.enquiry_submit_label_222}}" as string)
  }
} satisfies ProgrammeInterestData;

export const pageNavigation = [
  { label: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.label_223}}" as string), href: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.href_224}}" as string) },
  { label: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.label_225}}" as string), href: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.href_226}}" as string) },
  { label: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.label_227}}" as string), href: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.href_228}}" as string) },
  { label: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.label_229}}" as string), href: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.href_230}}" as string) },
  { label: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.label_231}}" as string), href: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.href_232}}" as string) },
  { label: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.label_233}}" as string), href: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.href_234}}" as string) },
  { label: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.label_235}}" as string), href: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.href_236}}" as string) },
  { label: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.label_237}}" as string), href: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.href_238}}" as string) },
  { label: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.label_239}}" as string), href: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.href_240}}" as string) },
  { label: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.label_241}}" as string), href: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.href_242}}" as string) },
  { label: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.label_243}}" as string), href: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation.href_244}}" as string) },
] as const;

export const mobileActions = [
  { label: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_mobile_actions.label_245}}" as string), to: "/book-session" },
  { label: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_mobile_actions.label_246}}" as string), to: "#funding" },
] as const;

export const programmeMeta = {
  title: ("{{cms:programme_marketing_l6.pages_marketing_manager_level6_page_data_programme_meta.title_247}}" as string),
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
