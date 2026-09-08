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
  title: "Governance Board | Kent Business College",
  description:
    "Kent Business College governance arrangements, independent oversight and public accountability, including an expression of interest for future governance roles.",
};

export const governanceHero = {
  eyebrow: "Governance Board",
  title: "Current Governance and Oversight",
  description:
    "Kent Business College maintains governance and oversight arrangements that provide independent scrutiny, support and challenge to senior leaders. Governance activity focuses on learners and apprentices, safeguarding, quality of education, employer engagement, responsible use of resources and compliance with current apprenticeship requirements.",
  action: { label: "View Details", href: "#current-governance" },
  image: "/assets/images/about-campus.jpg",
};

export const governancePageNav = [
  { label: "Provider Status", href: "#provider-status" },
  { label: "About", href: "#current-governance" },
  { label: "Structure", href: "#governance-structure" },
  { label: "Board", href: "#governance-board-members" },
  { label: "Assurance", href: "#oversight-assurance" },
  { label: "Accountability", href: "#roles-accountability" },
  { label: "Expression of Interest", href: "#eoi-form" },
];

export const providerStatus = {
  title: "Provider Status",
  description:
    "These details help employers, apprentices, governors and stakeholders identify the provider correctly across public education, funding and company records.",
  items: [
    {
      label: "Legal and trading name",
      value: "Kent Business College Ltd T/A Kent Business College",
    },
    { label: "UKPRN", value: "10093689" },
    { label: "Ofsted URN", value: "2814708" },
    { label: "Provider type", value: "Independent Learning Provider" },
  ] satisfies ProviderStatusItem[],
};

export const governanceOverview = {
  title: "About the Governance Board",
  paragraphs: [
    "The Governance Board provides independent oversight of Kent Business College's apprenticeship and training provision. It reviews evidence from senior leaders, tests the accuracy of self-assessment, monitors improvement activity and checks that decisions remain focused on the interests of learners, apprentices, employers and stakeholders.",
    "Governors receive assurance on curriculum quality, teaching and training, safeguarding, learner voice, employer engagement, finance, risk, data and funding compliance. Challenge and agreed actions are recorded through normal governance papers, minutes and action tracking.",
    "The Governance Board does not replace the statutory duties of the company directors or the operational responsibilities of senior leaders. Its purpose is to provide scrutiny, support, challenge and public accountability.",
  ],
  keyDetailsTitle: "Key Details",
  keyDetails: [
    { label: "Current Chair", value: "Dr Amgad Badewi" },
    {
      label: "Board Meetings",
      value:
        "Four scheduled Board meetings per year, with additional committee or assurance activity where required.",
    },
    {
      label: "Primary Responsibilities",
      value:
        "Strategic oversight, quality assurance, safeguarding assurance, funding compliance, financial stewardship and risk oversight.",
    },
    {
      label: "Governance Contact",
      value: "office@kentbusinesscollege.org",
      href: "mailto:office@kentbusinesscollege.org",
    },
  ] satisfies KeyDetail[],
};

export const governanceStructure = {
  title: "Governance Structure",
  description:
    "The structure separates independent oversight from day-to-day leadership and statutory company responsibilities.",
  items: [
    {
      eyebrow: "Independent oversight",
      title: "Governance Board",
      description:
        "Reviews evidence, challenges leaders, monitors agreed actions and checks the impact of provision on learners and apprentices.",
    },
    {
      eyebrow: "Operational leadership",
      title: "Senior Leadership Team",
      description:
        "Leads delivery, safeguarding, quality improvement, employer engagement, learner support and compliance activity.",
    },
    {
      eyebrow: "Corporate accountability",
      title: "Company Directors",
      description:
        "Hold statutory and corporate responsibilities for Kent Business College Ltd and receive assurance through governance and leadership processes.",
    },
  ] satisfies GovernanceStructureItem[],
};

export const governanceMembers = {
  title: "Current Governance Board and Attendees",
  description:
    "The people below contribute to governance, assurance, reporting and operational oversight. Director and staff roles are shown transparently so they are not confused with independent governor roles.",
  items: [
    {
      name: "Dr Amgad Badewi",
      role: "Director and Chair of Governance Board",
      description:
        "Chairs governance discussions, supports transparent accountability and ensures agreed actions are followed through.",
      image: "/assets/images/governance-board/dr-amgad-badewi.png",
    },
    {
      name: "Nada Ibrahim",
      role: "Executive Director",
      description:
        "Provides director-level assurance on leadership, compliance, finance, risk and the delivery of improvement priorities.",
      image: "/assets/images/governance-board/nada-ibrahim.png",
    },
    {
      name: "Graham Heath",
      role: "Head of Quality and Compliance",
      description:
        "Reports on curriculum quality, teaching, training, assessment, learner progress and compliance evidence.",
      image: "/assets/images/governance-board/graham-heath.png",
    },
    {
      name: "Tina Wright",
      role: "Designated Safeguarding Lead",
      description:
        "Provides assurance on safeguarding, Prevent, safer recruitment, staff training, referrals and learner wellbeing.",
      image: "/assets/images/governance-board/tina-wright.png",
    },
    {
      name: "Lisa Sedge",
      role: "Finance and Compliance Manager",
      description:
        "Supports oversight of financial controls, funding compliance, audit evidence, data quality and risk tracking.",
      image: "/assets/images/governance-board/lisa-sedge.png",
    },
    {
      name: "Prof. Yousef Sultan",
      role: "Performance Delivery Manager",
      description:
        "Contributes assurance on delivery performance, employer engagement, skills outcomes and learner progress.",
      image: "/assets/images/governance-board/prof-yousef-sultan.png",
    },
    {
      name: "Mohamed Elmasry",
      role: "Chief Technology Officer",
      description:
        "Attends as a senior leader to provide assurance on technology, systems, data security and online learning support.",
      image: "/assets/images/governance-board/mohamed-elmasry.png",
    },
    {
      name: "Alex Pennington",
      role: "HR Manager",
      description:
        "Provides assurance on people processes, safer recruitment, staff training, workforce capacity and HR compliance.",
      image: "/assets/images/governance-board/alex-pennington.png",
    },
    {
      name: "Youmna Ibrahim",
      role: "Corporate Account Executive",
      description:
        "Supports employer communication, stakeholder engagement and feedback evidence for governance reporting.",
      image: "/assets/images/governance-board/youmna-ibrahim.png",
    },
  ] satisfies GovernanceMember[],
};

export const oversightAndAssurance = {
  title: "Oversight and Assurance",
  description:
    "The Board uses routine evidence from directors and operational leads to provide support, challenge and assurance. Its work focuses on the quality and impact of provision rather than paperwork alone.",
  items: [
    {
      title: "Quality of Education",
      description:
        "Curriculum quality, teaching, training, assessment, progress, achievement and learner feedback.",
      icon: "quality",
    },
    {
      title: "Safeguarding and Prevent",
      description:
        "Safeguarding leadership, Prevent, safer recruitment, online safety, concerns, referrals and wellbeing.",
      icon: "safeguarding",
    },
    {
      title: "Learner Voice and Inclusion",
      description:
        "Apprentice experience, complaints, barriers to learning, reasonable adjustments and support for those with additional needs.",
      icon: "learner",
    },
    {
      title: "Funding and Data",
      description:
        "Assurance on learner eligibility, recognition of prior learning, training plans, off-the-job training evidence, progress reviews and ILR data.",
      icon: "funding",
    },
    {
      title: "Employers and Skills",
      description:
        "Employer engagement, workplace application of skills, skills needs, partnerships and feedback from employers.",
      icon: "employers",
    },
    {
      title: "Action Tracking",
      description:
        "Board minutes record support, challenge, decisions, owners, target dates and follow-up on agreed improvement actions.",
      icon: "actions",
    },
  ] satisfies AssuranceArea[],
};

export const governanceAccountability = {
  title: "Governance Roles and Accountability",
  columns: ["Role", "Main Responsibility", "How It Connects to Governance"],
  rows: [
    {
      role: "Company Directors",
      responsibility:
        "Statutory and corporate responsibilities for Kent Business College Ltd, including director duties held by Dr Amgad Badewi and Nada Ibrahim.",
      connection:
        "Receive assurance from governance and leadership processes while retaining company responsibilities. Director roles are shown separately from independent governor roles.",
    },
    {
      role: "Governance Board",
      responsibility:
        "Strategic oversight, scrutiny, support, challenge, assurance and public accountability.",
      connection:
        "Reviews evidence, challenges leaders and monitors whether improvement actions are effective across quality, safeguarding, finance, risk, employers and skills.",
    },
    {
      role: "Operational Assurance Leads",
      responsibility:
        "Day-to-day leadership and evidence for quality, safeguarding, finance, compliance, HR, employer engagement, technology and delivery performance.",
      connection:
        "Provide reports and evidence to governance. These roles support assurance and are not presented as independent governor roles unless formally appointed.",
    },
  ] satisfies AccountabilityRow[],
};

export const fundingAndQualityAssurance = {
  title: "Funding and Quality Assurance",
  paragraphs: [
    "Kent Business College is listed on the Apprenticeship Provider and Assessment Register as a main provider. Governors receive assurance that apprenticeship provision is managed in line with current government apprenticeship funding rules, provider agreement requirements and normal quality assurance processes.",
    "This includes assurance on learner eligibility, recognition of prior learning, agreed training plans, off-the-job training evidence, progress reviews, English and maths support where required, subcontracting where applicable, ILR/data compliance and end-point assessment arrangements.",
  ],
};

export const safeguardingAndPrevent = {
  title: "Safeguarding and Prevent",
  details: [
    {
      label: "Who is covered",
      value:
        "Safeguarding arrangements apply to apprentices and learners, including those under 18 and adults who may be at risk.",
    },
    {
      label: "Governance assurance",
      value:
        "Governors receive updates on safeguarding culture, Prevent, staff training, safer recruitment, concerns, referrals, online safety and learner wellbeing.",
    },
  ],
  publicInformation: {
    label: "Public information",
    action: "View the Safeguarding Handbook",
    href: "/safeguarding-handbook",
  },
};

export const expressionOfInterest = {
  title: "Expression of Interest",
  description:
    "Recruitment for future governance roles is separate from the current governance information above. Expressions of interest are welcome from people with relevant expertise and a commitment to improving outcomes for learners and apprentices.",
  form: {
    title: "Governance Board EOI",
    formName: "GovernanceBoardEOI",
    formPerma: "65YUCGdJQ48FCsLf6iW1sBNw6syR5mLU2EWbZ99sS8E",
    initialHeight: 2850,
  },
};
