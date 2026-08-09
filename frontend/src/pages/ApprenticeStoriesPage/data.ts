export type ApprenticeStory = {
  slug: string;
  name: string;
  role: string;
  company?: string;
  programme: string;
  image: string;
  stampImage: string;
  linkedIn: string;
  title: string;
  introduction: string;
  startingPoint: string[];
  roleSummary: string;
  responsibilities: string[];
  learning: string[];
  initiative?: {
    title: string;
    description: string[];
  };
  result?: {
    value: string;
    label: string;
    description: string;
    highlights: string[];
  };
  transformation: string[];
};

export const apprenticeStories: ApprenticeStory[] = [
  {
    slug: "lauren-kent",
    name: "Lauren Kent",
    role: "Trainer, Facilitator & Marketing Lead",
    company: "Exporter Services, Nottingham",
    programme: "Marketing Executive Level 4 Apprenticeship",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/04/1754657952856.webp",
    stampImage: "https://kentbusinesscollege.com/wp-content/uploads/2026/04/3-3.png",
    linkedIn: "https://www.linkedin.com/in/lauren-kent-uk/",
    title: "From instinct to evidence: how my apprenticeship changed the way I work",
    introduction: "Lauren combined an established training and marketing role with structured professional learning, using evidence and practical frameworks to strengthen decisions and create measurable commercial impact.",
    startingPoint: [
      "Lauren already enjoyed a varied role delivering import and export training, creating bespoke corporate sessions and leading marketing for Exporter Services.",
      "The apprenticeship helped her move beyond instinct by giving her frameworks, shared professional language and practical tools for evidence-based decisions.",
    ],
    roleSummary: "Her role spans facilitation, content, strategy and business development, so learning could be applied across several areas of day-to-day work.",
    responsibilities: ["Training delivery", "Corporate workshops", "Marketing leadership", "Business development"],
    learning: ["Marketing analytics", "Strategic planning", "Customer journey mapping", "Data-driven decision making", "Measuring impact", "Critical thinking"],
    initiative: {
      title: "Building a CRM and email marketing system from scratch",
      description: [
        "Lauren created a CRM and email marketing function where no structured customer-nurture system previously existed.",
        "Using customer-journey, segmentation and planning methods from the apprenticeship, she developed a repeatable approach for communicating with existing customers and promoting courses.",
      ],
    },
    result: {
      value: "900%",
      label: "Growth in monthly course sales",
      description: "Course sales moved from around five per year to a consistent four to seven per month after the new CRM and email approach gained momentum.",
      highlights: ["CRM system implemented", "Email workflows created", "Analytics used to track impact", "Evidence used to guide decisions"],
    },
    transformation: [
      "The apprenticeship strengthened Lauren's strategic planning, confidence with data and ability to communicate commercial results.",
      "It also developed a more critical approach to information, assumptions and evidence across both marketing and facilitation work.",
    ],
  },
  {
    slug: "gill-stoney",
    name: "Gill Stoney",
    role: "Workforce Scheduling Team Manager",
    company: "St John Ambulance",
    programme: "Project Controls Professional Apprenticeship (Level 6)",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/04/Gill-Stoney.png",
    stampImage: "https://kentbusinesscollege.com/wp-content/uploads/2026/04/4-1.png",
    linkedIn: "https://www.linkedin.com/in/gill-stoney-b15b9512b/",
    title: "Using project controls learning to strengthen workforce planning",
    introduction: "Gill is applying project controls learning to workforce scheduling, operational planning and cross-team decision-making within St John Ambulance.",
    startingPoint: [
      "Gill coordinates resource planning, rotas, absence requests and workforce deployment to support the operational needs of the charity's services.",
      "She joined the programme to deepen her project knowledge and make her contribution to organisational projects more effective.",
    ],
    roleSummary: "Her work combines scheduling, payroll support, workforce forecasting, service-level coordination and accurate workforce data.",
    responsibilities: ["Resource planning", "Workforce deployment", "Scheduling systems", "Cross-team forecasting"],
    learning: ["Organisational processes", "Portfolio priorities", "Risk management", "Quality management", "Data interpretation", "Project communication"],
    transformation: [
      "Gill now approaches workforce challenges with a more analytical and strategic mindset, supported by structured methods and data.",
      "The programme has also strengthened communication, presentation confidence and collaboration with managers and other teams.",
    ],
  },
];

export function getApprenticeStory(slug?: string) {
  return apprenticeStories.find((story) => story.slug === slug);
}
