import type { ProgrammeHeroData } from "@/components/programme/ProgrammeHero";
import type { ProgrammeSectionData } from "@/components/programme/ProgrammeSection";
import type { ProgrammeItem, PartnerSector } from "@/components/programme/ProgrammeGrids";
import type { CoachCardProps } from "@/components/common/CoachCard";
import type { ProgrammeWorkloadData } from "@/components/programme/ProgrammeWorkload";

type FeatureSectionData = ProgrammeSectionData & { items: readonly ProgrammeItem[]; note?: string };
type PartnerSectionData = ProgrammeSectionData & { sectors: readonly PartnerSector[] };
type PeopleSectionData = ProgrammeSectionData & { people: readonly (CoachCardProps & { tags?: readonly string[] })[] };

// Content: official Level 6 page, reviewed 7 September 2026. See docs/PROJECT_CONTROLS_LEVEL6.md.
export const heroData = {
  cohortAction: { label: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.cohort_action_label_001}}" as string), to: "/book-session" },
  "titleId": "pcp-title",
  "hero": {
    "eyebrow": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.hero_eyebrow_002}}" as string),
    "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.hero_title_003}}" as string),
    "accent": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.hero_accent_004}}" as string),
    "lead": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.hero_lead_005}}" as string),
    "fundingTitle": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.hero_funding_title_006}}" as string),
    "fundingDescription": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.hero_funding_description_007}}" as string),
    "audience": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.hero_audience_008}}" as string),
    "catalogue": "https://kentbusinesscollege.com/wp-content/uploads/2026/05/Edit-Project-Control-Professional-with-ChPP_compressed.pdf",
    "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.hero_image_009}}" as string)
  },
  "cohorts": [
    {
      "id": "january",
      "label": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.cohorts_label_010}}" as string),
      "upcoming": false
    },
    {
      "id": "april",
      "label": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.cohorts_label_011}}" as string),
      "upcoming": false
    },
    {
      "id": "september",
      "label": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.cohorts_label_012}}" as string),
      "upcoming": true
    }
  ],
  "highlights": [
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.highlights_title_013}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.highlights_description_014}}" as string)
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.highlights_title_015}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.highlights_description_016}}" as string)
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.highlights_title_017}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.highlights_description_018}}" as string)
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.highlights_title_019}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.highlights_description_020}}" as string)
    }
  ],
  "commitments": [
    {
      "label": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.commitments_label_021}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.commitments_description_022}}" as string)
    },
    {
      "label": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.commitments_label_023}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.commitments_description_024}}" as string)
    }
  ],
  "secondaryAction": {
    "label": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_hero_data.secondary_action_label_025}}" as string),
    "to": "#pathways"
  }
} as const satisfies ProgrammeHeroData;

export const overviewData = {
  "id": "overview",
  "eyebrow": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_overview_data.eyebrow_026}}" as string),
  "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_overview_data.title_027}}" as string),
  "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_overview_data.description_028}}" as string),
  "items": [
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_overview_data.items_title_029}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_overview_data.items_description_030}}" as string)
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_overview_data.items_title_031}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_overview_data.items_description_032}}" as string)
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_overview_data.items_title_033}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_overview_data.items_description_034}}" as string)
    }
  ],
  "note": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_overview_data.note_035}}" as string)
} as const satisfies FeatureSectionData;

export const audienceData = {
  "id": "who",
  "eyebrow": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_audience_data.eyebrow_036}}" as string),
  "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_audience_data.title_037}}" as string),
  "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_audience_data.description_038}}" as string),
  "items": [
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_audience_data.items_title_039}}" as string),
      "description": "",
      "items": [
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_audience_data.items_items_040}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_audience_data.items_items_041}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_audience_data.items_items_042}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_audience_data.items_items_043}}" as string)
      ]
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_audience_data.items_title_044}}" as string),
      "description": "",
      "items": [
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_audience_data.items_items_045}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_audience_data.items_items_046}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_audience_data.items_items_047}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_audience_data.items_items_048}}" as string)
      ]
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_audience_data.items_title_049}}" as string),
      "description": "",
      "items": [
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_audience_data.items_items_050}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_audience_data.items_items_051}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_audience_data.items_items_052}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_audience_data.items_items_053}}" as string)
      ]
    }
  ]
} as const satisfies FeatureSectionData;

export const structureData = {
  "id": "structure",
  "eyebrow": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_structure_data.eyebrow_054}}" as string),
  "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_structure_data.title_055}}" as string),
  "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_structure_data.description_056}}" as string),
  "items": [
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_structure_data.items_title_057}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_structure_data.items_description_058}}" as string)
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_structure_data.items_title_059}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_structure_data.items_description_060}}" as string),
      "tags": [
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_structure_data.items_tags_061}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_structure_data.items_tags_062}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_structure_data.items_tags_063}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_structure_data.items_tags_064}}" as string)
      ]
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_structure_data.items_title_065}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_structure_data.items_description_066}}" as string)
    }
  ],
  "note": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_structure_data.note_067}}" as string)
} as const satisfies FeatureSectionData;

export const pathwayData = {
  "id": "pathways",
  "eyebrow": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.eyebrow_068}}" as string),
  "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.title_069}}" as string),
  "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.description_070}}" as string),
  "routes": [
    {
      "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_name_071}}" as string),
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_title_072}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_description_073}}" as string),
      "tags": [
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_tags_074}}" as string)
      ],
      "detail": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_detail_075}}" as string),
      "note": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_note_076}}" as string),
      "modules": [
        {
          "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_title_077}}" as string),
          "body": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_body_078}}" as string),
          "credits": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_credits_079}}" as string),
          "duration": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_duration_080}}" as string)
        },
        {
          "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_title_081}}" as string),
          "body": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_body_082}}" as string),
          "credits": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_credits_083}}" as string),
          "duration": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_duration_084}}" as string)
        },
        {
          "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_title_085}}" as string),
          "body": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_body_086}}" as string),
          "credits": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_credits_087}}" as string),
          "duration": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_duration_088}}" as string)
        },
        {
          "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_title_089}}" as string),
          "body": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_body_090}}" as string),
          "credits": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_credits_091}}" as string),
          "duration": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_duration_092}}" as string)
        },
        {
          "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_title_093}}" as string),
          "body": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_body_094}}" as string),
          "credits": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_credits_095}}" as string),
          "duration": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_duration_096}}" as string)
        },
        {
          "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_title_097}}" as string),
          "body": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_body_098}}" as string),
          "credits": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_credits_099}}" as string),
          "duration": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_duration_100}}" as string)
        }
      ]
    },
    {
      "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_name_101}}" as string),
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_title_102}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_description_103}}" as string),
      "tags": [
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_tags_104}}" as string)
      ],
      "detail": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_detail_105}}" as string),
      "note": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_note_106}}" as string),
      "modules": [
        {
          "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_title_107}}" as string),
          "body": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_body_108}}" as string),
          "credits": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_credits_109}}" as string),
          "duration": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_duration_110}}" as string)
        },
        {
          "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_title_111}}" as string),
          "body": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_body_112}}" as string),
          "credits": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_credits_113}}" as string),
          "duration": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_duration_114}}" as string)
        },
        {
          "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_title_115}}" as string),
          "body": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_body_116}}" as string),
          "credits": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_credits_117}}" as string),
          "duration": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_duration_118}}" as string)
        },
        {
          "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_title_119}}" as string),
          "body": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_body_120}}" as string),
          "credits": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_credits_121}}" as string),
          "duration": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_duration_122}}" as string)
        },
        {
          "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_title_123}}" as string),
          "body": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_body_124}}" as string),
          "credits": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_credits_125}}" as string),
          "duration": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_duration_126}}" as string)
        },
        {
          "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_title_127}}" as string),
          "body": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_body_128}}" as string),
          "credits": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_credits_129}}" as string),
          "duration": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_duration_130}}" as string)
        }
      ]
    },
    {
      "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_name_131}}" as string),
      "action": { "label": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_action_label_132}}" as string), "to": "/chartered-pathway" },
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_title_133}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_description_134}}" as string),
      "tags": [
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_tags_135}}" as string)
      ],
      "detail": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_detail_136}}" as string),
      "note": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_note_137}}" as string),
      "modules": [
        {
          "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_title_138}}" as string),
          "body": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_body_139}}" as string),
          "credits": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_credits_140}}" as string),
          "duration": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_duration_141}}" as string)
        },
        {
          "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_title_142}}" as string),
          "body": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_body_143}}" as string),
          "credits": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_credits_144}}" as string),
          "duration": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_duration_145}}" as string)
        },
        {
          "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_title_146}}" as string),
          "body": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_body_147}}" as string),
          "credits": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_credits_148}}" as string),
          "duration": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_duration_149}}" as string)
        },
        {
          "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_title_150}}" as string),
          "body": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_body_151}}" as string),
          "credits": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_credits_152}}" as string),
          "duration": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_duration_153}}" as string)
        },
        {
          "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_title_154}}" as string),
          "body": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_body_155}}" as string),
          "credits": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_credits_156}}" as string),
          "duration": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_duration_157}}" as string)
        },
        {
          "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_title_158}}" as string),
          "body": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_body_159}}" as string),
          "credits": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_credits_160}}" as string),
          "duration": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_pathway_data.routes_modules_duration_161}}" as string)
        }
      ]
    }
  ]
} as const;

export const cohortData = {
  "id": "cohorts",
  "eyebrow": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_cohort_data.eyebrow_162}}" as string),
  "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_cohort_data.title_163}}" as string),
  "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_cohort_data.description_164}}" as string),
  "items": [
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_cohort_data.items_title_165}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_cohort_data.items_description_166}}" as string),
      "tags": [
        "Construction",
        "Infrastructure",
        "Manufacturing",
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_cohort_data.items_tags_167}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_cohort_data.items_tags_168}}" as string)
      ]
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_cohort_data.items_title_169}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_cohort_data.items_description_170}}" as string),
      "tags": [
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_cohort_data.items_tags_171}}" as string),
        "Marketing",
        "Accountancy",
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_cohort_data.items_tags_172}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_cohort_data.items_tags_173}}" as string)
      ]
    }
  ]
} as const satisfies FeatureSectionData;

export const outputsData = {
  "id": "outputs",
  "eyebrow": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_outputs_data.eyebrow_174}}" as string),
  "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_outputs_data.title_175}}" as string),
  "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_outputs_data.description_176}}" as string),
  "items": [
    ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_outputs_data.items_177}}" as string),
    ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_outputs_data.items_178}}" as string),
    ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_outputs_data.items_179}}" as string),
    ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_outputs_data.items_180}}" as string),
    ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_outputs_data.items_181}}" as string),
    ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_outputs_data.items_182}}" as string),
    ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_outputs_data.items_183}}" as string),
    ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_outputs_data.items_184}}" as string),
    ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_outputs_data.items_185}}" as string),
    ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_outputs_data.items_186}}" as string),
    ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_outputs_data.items_187}}" as string),
    ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_outputs_data.items_188}}" as string)
  ],
  "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_outputs_data.image_189}}" as string),
  "imageAlt": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_outputs_data.image_alt_190}}" as string)
} as const;

export const deliveryData = {
  "id": "delivery",
  "eyebrow": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.eyebrow_191}}" as string),
  "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.title_192}}" as string),
  "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.description_193}}" as string),
  "items": [
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.items_title_194}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.items_description_195}}" as string)
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.items_title_196}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.items_description_197}}" as string)
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.items_title_198}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.items_description_199}}" as string)
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.items_title_200}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.items_description_201}}" as string)
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.items_title_202}}" as string),
      "description": "",
      "items": [
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.items_items_203}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.items_items_204}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.items_items_205}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.items_items_206}}" as string)
      ]
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.items_title_207}}" as string),
      "description": "",
      "items": [
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.items_items_208}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.items_items_209}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.items_items_210}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_delivery_data.items_items_211}}" as string)
      ]
    }
  ]
} as const satisfies FeatureSectionData;

export const workloadData = {
  "id": "workload",
  "eyebrow": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.eyebrow_212}}" as string),
  "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.title_213}}" as string),
  "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.description_214}}" as string),
  "stats": [
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.stats_title_215}}" as string),
      "value": "860 hours",
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.stats_description_216}}" as string)
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.stats_title_217}}" as string),
      "value": "2 hours",
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.stats_description_218}}" as string)
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.stats_title_219}}" as string),
      "value": "8 hours",
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.stats_description_220}}" as string)
    }
  ],
  "weeklyTitle": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.weekly_title_221}}" as string),
  "weeklyDescription": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.weekly_description_222}}" as string),
  "hours": [
    {
      "hours": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.hours_hours_223}}" as string),
      "label": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.hours_label_224}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.hours_description_225}}" as string)
    },
    {
      "hours": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.hours_hours_226}}" as string),
      "label": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.hours_label_227}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.hours_description_228}}" as string)
    },
    {
      "hours": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.hours_hours_229}}" as string),
      "label": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.hours_label_230}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.hours_description_231}}" as string)
    }
  ],
  "note": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.note_232}}" as string),
  "monthlyTitle": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.monthly_title_233}}" as string),
  "monthlyDescription": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.monthly_description_234}}" as string),
  "submissions": [
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.submissions_title_235}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.submissions_description_236}}" as string)
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.submissions_title_237}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.submissions_description_238}}" as string)
    }
  ],
  "reviews": [
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.reviews_title_239}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.reviews_description_240}}" as string)
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.reviews_title_241}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.reviews_description_242}}" as string)
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.reviews_title_243}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.reviews_description_244}}" as string)
    }
  ],
  "alternative": {
    "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.alternative_title_245}}" as string),
    "paragraphs": [
      ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.alternative_paragraphs_246}}" as string),
      ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_workload_data.alternative_paragraphs_247}}" as string)
    ]
  }
} as const satisfies ProgrammeWorkloadData & { alternative: { title: string; paragraphs: readonly string[] } };

export const coachData = {
  "id": "coaches",
  "eyebrow": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.eyebrow_248}}" as string),
  "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.title_249}}" as string),
  "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.description_250}}" as string),
  "people": [
    {
      "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.people_name_251}}" as string),
      "bio": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.people_bio_252}}" as string),
      "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.people_image_253}}" as string),
      "imageAlt": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.people_image_alt_254}}" as string),
      "linkedIn": "https://www.linkedin.com/in/adeyemiadeshina/"
    },
    {
      "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.people_name_255}}" as string),
      "bio": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.people_bio_256}}" as string),
      "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.people_image_257}}" as string),
      "imageAlt": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.people_image_alt_258}}" as string),
      "linkedIn": "https://www.linkedin.com/in/patrykzajac1/"
    },
    {
      "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.people_name_259}}" as string),
      "bio": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.people_bio_260}}" as string),
      "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.people_image_261}}" as string),
      "imageAlt": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.people_image_alt_262}}" as string),
      "linkedIn": "https://www.linkedin.com/in/aryan-harikumar-70a99b1a4/"
    },
    {
      "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.people_name_263}}" as string),
      "bio": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.people_bio_264}}" as string),
      "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.people_image_265}}" as string),
      "imageAlt": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_coach_data.people_image_alt_266}}" as string),
      "linkedIn": "https://www.linkedin.com/in/randa-elabd-1923a4403/"
    }
  ]
} as const satisfies PeopleSectionData;

export const benefitsData = {
  "id": "benefits",
  "eyebrow": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.eyebrow_267}}" as string),
  "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.title_268}}" as string),
  "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.description_269}}" as string),
  "items": [
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_title_270}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_description_271}}" as string),
      "items": [
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_items_272}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_items_273}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_items_274}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_items_275}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_items_276}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_items_277}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_items_278}}" as string)
      ]
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_title_279}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_description_280}}" as string),
      "items": [
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_items_281}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_items_282}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_items_283}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_items_284}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_items_285}}" as string)
      ]
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_title_286}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_description_287}}" as string),
      "items": [
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_items_288}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_items_289}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_items_290}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_items_291}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_benefits_data.items_items_292}}" as string)
      ]
    }
  ]
} as const satisfies FeatureSectionData;

export const fundingData = {
  "id": "funding",
  "eyebrow": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_funding_data.eyebrow_293}}" as string),
  "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_funding_data.title_294}}" as string),
  "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_funding_data.description_295}}" as string),
  "items": [
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_funding_data.items_title_296}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_funding_data.items_description_297}}" as string),
      "items": [
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_funding_data.items_items_298}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_funding_data.items_items_299}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_funding_data.items_items_300}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_funding_data.items_items_301}}" as string)
      ],
      "amount": "£27,000"
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_funding_data.items_title_302}}" as string),
      "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_funding_data.items_description_303}}" as string),
      "items": [
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_funding_data.items_items_304}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_funding_data.items_items_305}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_funding_data.items_items_306}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_funding_data.items_items_307}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_funding_data.items_items_308}}" as string),
        ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_funding_data.items_items_309}}" as string)
      ],
      "amount": "£7,000"
    }
  ],
  "note": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_funding_data.note_310}}" as string)
} as const;

export const partnerData = {
  "id": "employers",
  "eyebrow": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.eyebrow_311}}" as string),
  "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.title_312}}" as string),
  "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.description_313}}" as string),
  "sectors": [
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_title_314}}" as string),
      "logos": [
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_315}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_316}}" as string)
        },
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_317}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_318}}" as string)
        },
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_319}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_320}}" as string)
        },
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_321}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_322}}" as string)
        }
      ]
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_title_323}}" as string),
      "logos": [
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_324}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_325}}" as string)
        },
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_326}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_327}}" as string)
        },
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_328}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_329}}" as string)
        }
      ]
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_title_330}}" as string),
      "logos": [
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_331}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_332}}" as string)
        },
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_333}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_334}}" as string)
        },
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_335}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_336}}" as string)
        },
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_337}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_338}}" as string)
        }
      ]
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_title_339}}" as string),
      "logos": [
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_340}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_341}}" as string)
        },
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_342}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_343}}" as string)
        },
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_344}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_345}}" as string)
        },
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_346}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_347}}" as string)
        }
      ]
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_title_348}}" as string),
      "logos": [
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_349}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_350}}" as string)
        },
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_351}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_352}}" as string)
        },
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_353}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_354}}" as string)
        },
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_355}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_356}}" as string)
        }
      ]
    },
    {
      "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_title_357}}" as string),
      "logos": [
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_358}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_359}}" as string)
        },
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_360}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_361}}" as string)
        },
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_362}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_363}}" as string)
        },
        {
          "name": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_name_364}}" as string),
          "image": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_partner_data.sectors_logos_image_365}}" as string)
        }
      ]
    }
  ]
} as const satisfies PartnerSectionData;

export const eventsData = {
  upcomingTitle: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_events_data.upcoming_title_366}}" as string),
  upcomingDescription: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_events_data.upcoming_description_367}}" as string),
  "eyebrow": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_events_data.eyebrow_368}}" as string),
  "search": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_events_data.search_369}}" as string)
} as const;

export const finalCTA = {
  "id": "next-step",
  "eyebrow": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_final_cta.eyebrow_370}}" as string),
  "title": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_final_cta.title_371}}" as string),
  "description": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_final_cta.description_372}}" as string),
  "action": {
    "label": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_final_cta.action_label_373}}" as string),
    "to": "/book-session"
  }
} as const;

export const faqs = [
  {
    "question": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.question_374}}" as string),
    "answer": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.answer_375}}" as string)
  },
  {
    "question": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.question_376}}" as string),
    "answer": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.answer_377}}" as string)
  },
  {
    "question": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.question_378}}" as string),
    "answer": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.answer_379}}" as string)
  },
  {
    "question": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.question_380}}" as string),
    "answer": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.answer_381}}" as string)
  },
  {
    "question": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.question_382}}" as string),
    "answer": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.answer_383}}" as string)
  },
  {
    "question": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.question_384}}" as string),
    "answer": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.answer_385}}" as string)
  },
  {
    "question": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.question_386}}" as string),
    "answer": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.answer_387}}" as string)
  },
  {
    "question": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.question_388}}" as string),
    "answer": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.answer_389}}" as string)
  },
  {
    "question": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.question_390}}" as string),
    "answer": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.answer_391}}" as string)
  },
  {
    "question": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.question_392}}" as string),
    "answer": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.answer_393}}" as string)
  },
  {
    "question": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.question_394}}" as string),
    "answer": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.answer_395}}" as string)
  },
  {
    "question": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.question_396}}" as string),
    "answer": ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_faqs.answer_397}}" as string)
  }
] as const;

export const pageNavigation = [
  { label: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.label_398}}" as string), href: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.href_399}}" as string) }, { label: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.label_400}}" as string), href: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.href_401}}" as string) },
  { label: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.label_402}}" as string), href: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.href_403}}" as string) }, { label: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.label_404}}" as string), href: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.href_405}}" as string) },
  { label: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.label_406}}" as string), href: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.href_407}}" as string) }, { label: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.label_408}}" as string), href: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.href_409}}" as string) },
  { label: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.label_410}}" as string), href: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.href_411}}" as string) }, { label: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.label_412}}" as string), href: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.href_413}}" as string) },
  { label: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.label_414}}" as string), href: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.href_415}}" as string) },
  { label: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.label_416}}" as string), href: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.href_417}}" as string) }, { label: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.label_418}}" as string), href: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.href_419}}" as string) },
  { label: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.label_420}}" as string), href: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.href_421}}" as string) }, { label: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.label_422}}" as string), href: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.href_423}}" as string) },
  { label: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.label_424}}" as string), href: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.href_425}}" as string) },
  { label: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.label_426}}" as string), href: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.href_427}}" as string) }, { label: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.label_428}}" as string), href: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.href_429}}" as string) }, { label: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.label_430}}" as string), href: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_page_navigation.href_431}}" as string) },
] as const;

export const programmeMeta = {
  title: ("{{cms:programme_pcp_l6.pages_project_controls_professional_leve_programme_meta.title_432}}" as string),
  description: heroData.hero.lead,
  path: "/project-controls-professional-level-6",
};

export const courseSchema = {
  "@context": "https://schema.org", "@type": "Course",
  name: "Project Controls Professional Level 6", description: programmeMeta.description,
  provider: { "@type": "CollegeOrUniversity", name: "Kent Business College", url: "https://kentbusinesscollege.com" },
  timeRequired: "P27M", educationalLevel: "Level 6",
};

export const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
};
