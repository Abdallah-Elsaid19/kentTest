export interface ProjectControlsPathway {
  id: "operational" | "strategic" | "chartered";
  label: string;
  title: string;
  description: string;
  noteTitle: string;
  note: string;
  modules: { title: string; provider: string; credits: number }[];
  href: string;
}

export const projectControlsPathways: ProjectControlsPathway[] = [
  { id: "operational", href: "/project-controls-professional-level-6/operational-pathway", label: "Operational pathway", title: "For project controls delivery, planning and performance roles.", description: "Best suited to professionals focused on schedules, earned value, reporting and operational delivery confidence.", noteTitle: "Select six credits", note: "Normal credit: four months · PMP: two credits", modules: [
    { title: "Project Management Professional", provider: "Project Management Institute", credits: 2 },
    { title: "Artificial Intelligence in Project Controls Certificate", provider: "Institute of Project Controls", credits: 1 },
    { title: "Scheduling Professional", provider: "Project Management Institute", credits: 1 },
    { title: "Earned Value Management", provider: "APMG International", credits: 1 },
    { title: "Project Planning and Controls", provider: "APMG International", credits: 1 },
  ]},
  { id: "strategic", href: "/project-controls-professional-level-6/strategic-pathway", label: "Strategic pathway", title: "For senior project controls, portfolio and governance roles.", description: "Best suited to professionals leading PMOs, programmes, portfolios, risk, transformation and senior decision support.", noteTitle: "Select six credits", note: "Module mix can reflect employer priorities", modules: [
    { title: "Project Management Professional", provider: "Project Management Institute", credits: 2 },
    { title: "Artificial Intelligence in Project Controls Certificate", provider: "Institute of Project Controls", credits: 1 },
    { title: "Managing Successful Programmes", provider: "PeopleCert / AXELOS", credits: 1 },
    { title: "Management of Portfolios", provider: "APMG International", credits: 1 },
    { title: "Project Management Office course", provider: "Project Management Institute", credits: 1 },
  ]},
  { id: "chartered", href: "/project-controls-professional-level-6/chartered-pathway", label: "Chartered pathway", title: "Designed around Chartered Project Professional technical-knowledge readiness.", description: "The route is built around the Association for Project Management recognised assessment route. ChPP status itself is awarded only by APM when all current professional requirements are met.", noteTitle: "Technical-knowledge route", note: "Professional practice and assessment requirements still apply", modules: [
    { title: "Project Planning and Control", provider: "Institute of Project Controls / recognised assessment route", credits: 1 },
    { title: "Risk, Issue and Quality Management", provider: "Institute of Project Controls / recognised assessment route", credits: 1 },
    { title: "Stakeholder, Communications and Reporting Systems", provider: "Institute of Project Controls / recognised assessment route", credits: 1 },
    { title: "Project Management Office", provider: "Institute of Project Controls / recognised assessment route", credits: 1 },
    { title: "Artificial Intelligence in Project Controls", provider: "Institute of Project Controls", credits: 1 },
    { title: "Earned Value Management or Management of Portfolios", provider: "APMG International", credits: 1 },
  ]},
];
