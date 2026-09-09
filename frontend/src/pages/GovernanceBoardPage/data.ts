export type ProviderStatusItem = {
  label: string;
  value: string;
};

export type KeyDetail = {
  label: string;
  value: string;
  href?: string;
};

export type GovernanceStructureItem = {
  title: string;
  eyebrow: string;
  description: string;
};

export type GovernanceMember = {
  name: string;
  role: string;
  description: string;
  image: string;
};

export type AssuranceArea = {
  title: string;
  description: string;
  icon: "quality" | "safeguarding" | "learner" | "funding" | "employers" | "actions";
};

export type AccountabilityRow = {
  role: string;
  responsibility: string;
  connection: string;
};

export const governanceMeta = {
  title: ("{{cms:governance.pages_governance_board_page_data_governance_meta.title_001}}" as string),
  description:
    ("{{cms:governance.pages_governance_board_page_data_governance_meta.description_002}}" as string),
};

export const governanceHero = {
  eyebrow: ("{{cms:governance.pages_governance_board_page_data_governance_hero.eyebrow_003}}" as string),
  title: ("{{cms:governance.pages_governance_board_page_data_governance_hero.title_004}}" as string),
  description:
    ("{{cms:governance.pages_governance_board_page_data_governance_hero.description_005}}" as string),
  action: { label: ("{{cms:governance.pages_governance_board_page_data_governance_hero.action_label_006}}" as string), href: ("{{cms:governance.pages_governance_board_page_data_governance_hero.action_href_007}}" as string) },
  image: ("{{cms:governance.pages_governance_board_page_data_governance_hero.image_008}}" as string),
};

export const governancePageNav = [
  { label: ("{{cms:governance.pages_governance_board_page_data_governance_page_nav.label_009}}" as string), href: ("{{cms:governance.pages_governance_board_page_data_governance_page_nav.href_010}}" as string) },
  { label: ("{{cms:governance.pages_governance_board_page_data_governance_page_nav.label_011}}" as string), href: ("{{cms:governance.pages_governance_board_page_data_governance_page_nav.href_012}}" as string) },
  { label: ("{{cms:governance.pages_governance_board_page_data_governance_page_nav.label_013}}" as string), href: ("{{cms:governance.pages_governance_board_page_data_governance_page_nav.href_014}}" as string) },
  { label: ("{{cms:governance.pages_governance_board_page_data_governance_page_nav.label_015}}" as string), href: ("{{cms:governance.pages_governance_board_page_data_governance_page_nav.href_016}}" as string) },
  { label: ("{{cms:governance.pages_governance_board_page_data_governance_page_nav.label_017}}" as string), href: ("{{cms:governance.pages_governance_board_page_data_governance_page_nav.href_018}}" as string) },
  { label: ("{{cms:governance.pages_governance_board_page_data_governance_page_nav.label_019}}" as string), href: ("{{cms:governance.pages_governance_board_page_data_governance_page_nav.href_020}}" as string) },
  { label: ("{{cms:governance.pages_governance_board_page_data_governance_page_nav.label_021}}" as string), href: ("{{cms:governance.pages_governance_board_page_data_governance_page_nav.href_022}}" as string) },
];

export const providerStatus = {
  title: ("{{cms:governance.pages_governance_board_page_data_provider_status.title_023}}" as string),
  description:
    ("{{cms:governance.pages_governance_board_page_data_provider_status.description_024}}" as string),
  items: [
    {
      label: ("{{cms:governance.pages_governance_board_page_data_provider_status.items_label_025}}" as string),
      value: "Kent Business College Ltd T/A Kent Business College",
    },
    { label: ("{{cms:governance.pages_governance_board_page_data_provider_status.items_label_026}}" as string), value: "10093689" },
    { label: ("{{cms:governance.pages_governance_board_page_data_provider_status.items_label_027}}" as string), value: "2814708" },
    { label: ("{{cms:governance.pages_governance_board_page_data_provider_status.items_label_028}}" as string), value: "Independent Learning Provider" },
  ] satisfies ProviderStatusItem[],
};

export const governanceOverview = {
  title: ("{{cms:governance.pages_governance_board_page_data_governance_overview.title_029}}" as string),
  paragraphs: [
    ("{{cms:governance.pages_governance_board_page_data_governance_overview.paragraphs_030}}" as string),
    ("{{cms:governance.pages_governance_board_page_data_governance_overview.paragraphs_031}}" as string),
    ("{{cms:governance.pages_governance_board_page_data_governance_overview.paragraphs_032}}" as string),
  ],
  keyDetailsTitle: ("{{cms:governance.pages_governance_board_page_data_governance_overview.key_details_title_033}}" as string),
  keyDetails: [
    { label: ("{{cms:governance.pages_governance_board_page_data_governance_overview.key_details_label_034}}" as string), value: "Dr Amgad Badewi" },
    {
      label: ("{{cms:governance.pages_governance_board_page_data_governance_overview.key_details_label_035}}" as string),
      value:
        "Four scheduled Board meetings per year, with additional committee or assurance activity where required.",
    },
    {
      label: ("{{cms:governance.pages_governance_board_page_data_governance_overview.key_details_label_036}}" as string),
      value:
        "Strategic oversight, quality assurance, safeguarding assurance, funding compliance, financial stewardship and risk oversight.",
    },
    {
      label: ("{{cms:governance.pages_governance_board_page_data_governance_overview.key_details_label_037}}" as string),
      value: "office@kentbusinesscollege.org",
      href: ("{{cms:governance.pages_governance_board_page_data_governance_overview.key_details_href_038}}" as string),
    },
  ] satisfies KeyDetail[],
};

export const governanceStructure = {
  title: ("{{cms:governance.pages_governance_board_page_data_governance_structure.title_039}}" as string),
  description:
    ("{{cms:governance.pages_governance_board_page_data_governance_structure.description_040}}" as string),
  items: [
    {
      eyebrow: ("{{cms:governance.pages_governance_board_page_data_governance_structure.items_eyebrow_041}}" as string),
      title: ("{{cms:governance.pages_governance_board_page_data_governance_structure.items_title_042}}" as string),
      description:
        ("{{cms:governance.pages_governance_board_page_data_governance_structure.items_description_043}}" as string),
    },
    {
      eyebrow: ("{{cms:governance.pages_governance_board_page_data_governance_structure.items_eyebrow_044}}" as string),
      title: ("{{cms:governance.pages_governance_board_page_data_governance_structure.items_title_045}}" as string),
      description:
        ("{{cms:governance.pages_governance_board_page_data_governance_structure.items_description_046}}" as string),
    },
    {
      eyebrow: ("{{cms:governance.pages_governance_board_page_data_governance_structure.items_eyebrow_047}}" as string),
      title: ("{{cms:governance.pages_governance_board_page_data_governance_structure.items_title_048}}" as string),
      description:
        ("{{cms:governance.pages_governance_board_page_data_governance_structure.items_description_049}}" as string),
    },
  ] satisfies GovernanceStructureItem[],
};

export const governanceMembers = {
  title: ("{{cms:governance.pages_governance_board_page_data_governance_members.title_050}}" as string),
  description:
    ("{{cms:governance.pages_governance_board_page_data_governance_members.description_051}}" as string),
  items: [
    {
      name: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_name_052}}" as string),
      role: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_role_053}}" as string),
      description:
        ("{{cms:governance.pages_governance_board_page_data_governance_members.items_description_054}}" as string),
      image: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_image_055}}" as string),
    },
    {
      name: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_name_056}}" as string),
      role: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_role_057}}" as string),
      description:
        ("{{cms:governance.pages_governance_board_page_data_governance_members.items_description_058}}" as string),
      image: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_image_059}}" as string),
    },
    {
      name: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_name_060}}" as string),
      role: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_role_061}}" as string),
      description:
        ("{{cms:governance.pages_governance_board_page_data_governance_members.items_description_062}}" as string),
      image: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_image_063}}" as string),
    },
    {
      name: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_name_064}}" as string),
      role: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_role_065}}" as string),
      description:
        ("{{cms:governance.pages_governance_board_page_data_governance_members.items_description_066}}" as string),
      image: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_image_067}}" as string),
    },
    {
      name: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_name_068}}" as string),
      role: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_role_069}}" as string),
      description:
        ("{{cms:governance.pages_governance_board_page_data_governance_members.items_description_070}}" as string),
      image: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_image_071}}" as string),
    },
    {
      name: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_name_072}}" as string),
      role: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_role_073}}" as string),
      description:
        ("{{cms:governance.pages_governance_board_page_data_governance_members.items_description_074}}" as string),
      image: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_image_075}}" as string),
    },
    {
      name: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_name_076}}" as string),
      role: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_role_077}}" as string),
      description:
        ("{{cms:governance.pages_governance_board_page_data_governance_members.items_description_078}}" as string),
      image: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_image_079}}" as string),
    },
    {
      name: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_name_080}}" as string),
      role: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_role_081}}" as string),
      description:
        ("{{cms:governance.pages_governance_board_page_data_governance_members.items_description_082}}" as string),
      image: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_image_083}}" as string),
    },
    {
      name: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_name_084}}" as string),
      role: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_role_085}}" as string),
      description:
        ("{{cms:governance.pages_governance_board_page_data_governance_members.items_description_086}}" as string),
      image: ("{{cms:governance.pages_governance_board_page_data_governance_members.items_image_087}}" as string),
    },
  ] satisfies GovernanceMember[],
};

export const oversightAndAssurance = {
  title: ("{{cms:governance.pages_governance_board_page_data_oversight_and_assurance.title_088}}" as string),
  description:
    ("{{cms:governance.pages_governance_board_page_data_oversight_and_assurance.description_089}}" as string),
  items: [
    {
      title: ("{{cms:governance.pages_governance_board_page_data_oversight_and_assurance.items_title_090}}" as string),
      description:
        ("{{cms:governance.pages_governance_board_page_data_oversight_and_assurance.items_description_091}}" as string),
      icon: "quality",
    },
    {
      title: ("{{cms:governance.pages_governance_board_page_data_oversight_and_assurance.items_title_092}}" as string),
      description:
        ("{{cms:governance.pages_governance_board_page_data_oversight_and_assurance.items_description_093}}" as string),
      icon: "safeguarding",
    },
    {
      title: ("{{cms:governance.pages_governance_board_page_data_oversight_and_assurance.items_title_094}}" as string),
      description:
        ("{{cms:governance.pages_governance_board_page_data_oversight_and_assurance.items_description_095}}" as string),
      icon: "learner",
    },
    {
      title: ("{{cms:governance.pages_governance_board_page_data_oversight_and_assurance.items_title_096}}" as string),
      description:
        ("{{cms:governance.pages_governance_board_page_data_oversight_and_assurance.items_description_097}}" as string),
      icon: "funding",
    },
    {
      title: ("{{cms:governance.pages_governance_board_page_data_oversight_and_assurance.items_title_098}}" as string),
      description:
        ("{{cms:governance.pages_governance_board_page_data_oversight_and_assurance.items_description_099}}" as string),
      icon: "employers",
    },
    {
      title: ("{{cms:governance.pages_governance_board_page_data_oversight_and_assurance.items_title_100}}" as string),
      description:
        ("{{cms:governance.pages_governance_board_page_data_oversight_and_assurance.items_description_101}}" as string),
      icon: "actions",
    },
  ] satisfies AssuranceArea[],
};

export const governanceAccountability = {
  title: ("{{cms:governance.pages_governance_board_page_data_governance_accountability.title_102}}" as string),
  columns: ["Role", ("{{cms:governance.pages_governance_board_page_data_governance_accountability.columns_103}}" as string), ("{{cms:governance.pages_governance_board_page_data_governance_accountability.columns_104}}" as string)],
  rows: [
    {
      role: ("{{cms:governance.pages_governance_board_page_data_governance_accountability.rows_role_105}}" as string),
      responsibility:
        ("{{cms:governance.pages_governance_board_page_data_governance_accountability.rows_responsibility_106}}" as string),
      connection:
        ("{{cms:governance.pages_governance_board_page_data_governance_accountability.rows_connection_107}}" as string),
    },
    {
      role: ("{{cms:governance.pages_governance_board_page_data_governance_accountability.rows_role_108}}" as string),
      responsibility:
        ("{{cms:governance.pages_governance_board_page_data_governance_accountability.rows_responsibility_109}}" as string),
      connection:
        ("{{cms:governance.pages_governance_board_page_data_governance_accountability.rows_connection_110}}" as string),
    },
    {
      role: ("{{cms:governance.pages_governance_board_page_data_governance_accountability.rows_role_111}}" as string),
      responsibility:
        ("{{cms:governance.pages_governance_board_page_data_governance_accountability.rows_responsibility_112}}" as string),
      connection:
        ("{{cms:governance.pages_governance_board_page_data_governance_accountability.rows_connection_113}}" as string),
    },
  ] satisfies AccountabilityRow[],
};

export const fundingAndQualityAssurance = {
  title: ("{{cms:governance.pages_governance_board_page_data_funding_and_quality_assurance.title_114}}" as string),
  paragraphs: [
    ("{{cms:governance.pages_governance_board_page_data_funding_and_quality_assurance.paragraphs_115}}" as string),
    ("{{cms:governance.pages_governance_board_page_data_funding_and_quality_assurance.paragraphs_116}}" as string),
  ],
};

export const safeguardingAndPrevent = {
  title: ("{{cms:governance.pages_governance_board_page_data_safeguarding_and_prevent.title_117}}" as string),
  details: [
    {
      label: ("{{cms:governance.pages_governance_board_page_data_safeguarding_and_prevent.details_label_118}}" as string),
      value:
        "Safeguarding arrangements apply to apprentices and learners, including those under 18 and adults who may be at risk.",
    },
    {
      label: ("{{cms:governance.pages_governance_board_page_data_safeguarding_and_prevent.details_label_119}}" as string),
      value:
        "Governors receive updates on safeguarding culture, Prevent, staff training, safer recruitment, concerns, referrals, online safety and learner wellbeing.",
    },
  ],
  publicInformation: {
    label: ("{{cms:governance.pages_governance_board_page_data_safeguarding_and_prevent.public_information_label_120}}" as string),
    action: ("{{cms:governance.pages_governance_board_page_data_safeguarding_and_prevent.public_information_action_121}}" as string),
    href: ("{{cms:governance.pages_governance_board_page_data_safeguarding_and_prevent.public_information_href_122}}" as string),
  },
};

export const expressionOfInterest = {
  title: ("{{cms:governance.pages_governance_board_page_data_expression_of_interest.title_123}}" as string),
  description:
    ("{{cms:governance.pages_governance_board_page_data_expression_of_interest.description_124}}" as string),
  form: {
    title: ("{{cms:governance.pages_governance_board_page_data_expression_of_interest.form_title_125}}" as string),
    formName: "GovernanceBoardEOI",
    formPerma: "65YUCGdJQ48FCsLf6iW1sBNw6syR5mLU2EWbZ99sS8E",
    initialHeight: 2850,
  },
};
