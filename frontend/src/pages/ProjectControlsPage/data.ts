import { Award, BadgePercent, BriefcaseBusiness, CalendarCheck, ChartNoAxesCombined, Coins, GitBranch, Headphones, LayoutDashboard, MessagesSquare, Scale, ShieldCheck, TriangleAlert, UserRoundCheck, Users, Wallet, type LucideIcon } from "lucide-react";

export const hero = {
  image: "/assets/images/project-controls-hero.webp",
  eyebrow: "College of Project Controls and Project Management",
  title: "Plan, lead and control with",
  accent: "greater certainty",
  description: "The College of Project Controls and Project Management develops the professionals who plan, lead and deliver complex work — people who engage stakeholders, govern delivery and turn project data into confident, evidence-based decisions.",
  primaryLabel: "Explore our programmes",
  secondaryLabel: "Speak to our team",
  highlights: ["Planning", "Stakeholders", "Risk", "Governance", "Scheduling", "Cost", "Forecasting"],
};

export const pageNavigation = [
  { label: "About the college", href: "#pc-overview" },
  { label: "Our programmes", href: "#pc-programmes" },
  { label: "Core capabilities", href: "#pc-capabilities" },
  { label: "Course content", href: "#pc-course-content" },
  { label: "Why choose us", href: "#why-choose-us" },
  { label: "Career pathways", href: "#pc-outcomes" },
  { label: "Events", href: "#pc-events" },
  { label: "Recognition", href: "#pc-recognition" },
  { label: "Trusted by", href: "#pc-trusted" },
  { label: "FAQs", href: "#faq" },
] satisfies { label: string; href: string }[];

export const overview = {
  eyebrow: "About the college",
  title: "Project controls and project management that turn ambition into delivered outcomes",
  paragraphs: [
    "Every successful organisation depends on people who can plan, deliver and control. The College of Project Controls and Project Management equips professionals to lead work end to end — from stakeholder alignment and risk management to scheduling, cost and forecasting.",
    "Our programmes blend rigorous project management and controls practice with real workplace application, building capability you can use from day one — and the credentials to progress toward Chartered status and senior responsibility.",
  ],
  image: "/assets/images/project-controls/overview.jpg",
};

export const programmeCopy = {
  eyebrow: "Our programmes",
  title: "Two accredited routes into project delivery",
  description: "Whether you are starting in project management or stepping into senior delivery leadership, there is a funded programme built for you.",
  learningLabel: "What you will learn",
  audienceLabel: "Ideal for:",
  applyLabel: "Apply now",
  fundingLabel: "Check funding",
  image: "/assets/images/project-controls/practice.jpg",
  imageLabel: "Work-based learning",
  imageCaption: "Apply what you learn through real project delivery and controls work",
};

export const capabilityCopy = {
  eyebrow: "Core capabilities",
  title: "The full project delivery toolkit",
  description: "Develop the end-to-end capabilities professionals need to plan, lead and control projects — from stakeholders and governance to cost, risk and forecasting.",
};

export const benefitCopy = {
  eyebrow: "Why choose us",
  title: "A college built around delivering complex work with certainty",
  description: "We combine accredited programmes, expert practitioners and fully funded routes — so you can plan, lead and control projects with confidence, without the cost getting in the way.",
};

export const testimonialCopy = {
  eyebrow: "What our learners say",
  title: "Real progress, real careers",
};

export const careerCopy = {
  eyebrow: "Career pathways",
  title: "Where project management and controls can take you",
  description: "From your first project role to leading the function, our programmes build the capability and credentials to progress toward Chartered status and senior responsibility.",
};

export const faqCopy = {
  eyebrow: "Frequently asked questions",
  title: "Your questions, answered",
  description: "Everything you need to know about our programmes, funding and how to get started. Can’t find what you’re looking for? Our team is here to help.",
  cta: "Speak to our team",
};

export const finalCta = {
  eyebrow: "Start your project delivery journey",
  title: "Build a career that plans, leads and controls with certainty",
  description: "Whether you are new to project delivery or an experienced professional ready for greater responsibility, our DfE-funded programmes help you develop the capability employers rely on.",
  primaryLabel: "Book information session",
  secondaryLabel: "Check your eligibility",
};

// Content transcribed from the supplied Readdy reference.
export interface ProjectControlsProgramme {
  id: string;
  discipline: string;
  image: string;
  href: string;
  title: string;
  level: string;
  duration: string;
  funding: string;
  summary: string;
  outcomes: string[];
  idealFor: string;
}

export interface ProjectControlsCapability {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ProjectControlsOutcome {
  role: string;
  level: string;
  desc: string;
}

export const projectControlsProgrammes: ProjectControlsProgramme[] = [
  {
    id: "associate-project-manager",
    discipline: "Project Management",
    image: "/assets/images/learner-home/associate-project-manager.webp",
    href: "/associate-project-manager-level-4",
    title: "Associate Project Manager",
    level: "Level 4",
    duration: "Typically 12 months",
    funding: "DfE funded (levy 100%)",
    summary:
      "Build the practical project management skills to plan, organise and deliver work — from stakeholder engagement and risk management to governance and confident delivery.",
    outcomes: [
      "Planning & scheduling",
      "Stakeholder management",
      "Risk & issue management",
      "Governance & delivery",
    ],
    idealFor:
      "New and developing project professionals building a strong foundation in project delivery.",
  },
  {
    id: "project-controls-professional",
    discipline: "Project Controls",
    image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/2986ecbd61fc4774b1b641ec903368e3.webp",
    href: "/project-controls-professional-level-6",
    title: "Project Controls Professional",
    level: "Level 6",
    duration: "Typically 27 months",
    funding: "DfE funded (levy 100% / non-levy 95%)",
    summary:
      "Lead complex projects end to end — integrating scope, schedule, budget and risk to deliver confident outcomes and progress toward Chartered status.",
    outcomes: [
      "Strategic project leadership",
      "Commercial & budget management",
      "Stakeholder & governance",
      "ChPP preparation",
    ],
    idealFor:
      "Experienced project professionals stepping into senior and leadership responsibility.",
  },
];

export const projectControlsCapabilities: ProjectControlsCapability[] = [
  {
    icon: CalendarCheck,
    title: "Planning & Scheduling",
    desc: "Build and maintain reliable plans and schedules that keep delivery on track.",
  },
  {
    icon: Users,
    title: "Stakeholder Management",
    desc: "Engage, influence and align the people who shape your project.",
  },
  {
    icon: TriangleAlert,
    title: "Risk & Issue Management",
    desc: "Identify, assess and manage uncertainty before it becomes a problem.",
  },
  {
    icon: Scale,
    title: "Governance & Compliance",
    desc: "Deliver within a clear framework of accountability and control.",
  },
  {
    icon: Coins,
    title: "Cost Engineering & Budgeting",
    desc: "Estimate, track and control cost across the project lifecycle.",
  },
  {
    icon: MessagesSquare,
    title: "Leadership & Communication",
    desc: "Lead teams and communicate clearly to drive successful outcomes.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Earned Value Management",
    desc: "Measure performance and progress against plan with confidence.",
  },
  {
    icon: GitBranch,
    title: "Forecasting & Change",
    desc: "Predict outcomes and manage change with clear, defensible baselines.",
  },
  {
    icon: LayoutDashboard,
    title: "Data & Reporting",
    desc: "Turn project data into insight that drives better decision-making.",
  },
];

export const courseContentCopy = {
  eyebrow: "Course content",
  title: "Courses at the College of Project Controls and Project Management",
  description: "Combine recognised project management, project controls and AI courses into a practical pathway.",
};

export const projectControlsCourseGroups = [
  {
    abbreviation: "APM",
    provider: "Association for Project Management courses",
    courses: [
      {
        title: "Risk Management Subject Matter",
        description: "Risk thinking, analysis, response planning and professional risk practice.",
      },
      {
        title: "Project Management Qualification",
        description: "Broad project management knowledge for people managing or supporting projects.",
      },
      {
        title: "Project Fundamentals Qualification",
        description: "Introductory project management knowledge for new or developing project professionals.",
      },
    ],
  },
  {
    abbreviation: "APMG",
    provider: "APMG International courses",
    courses: [
      {
        title: "Management of Portfolios",
        description: "Portfolio governance, prioritisation, benefits and strategic alignment.",
      },
      {
        title: "Managing Successful Programmes",
        description: "Programme governance, benefits, leadership and complex change delivery.",
      },
      {
        title: "Project Planning and Control",
        description: "Planning, baselining, progress monitoring, controls and recovery planning.",
      },
      {
        title: "Earned Value Management",
        description: "Cost and schedule performance measurement, variance and forecasting.",
      },
    ],
  },
  {
    abbreviation: "PMI",
    provider: "Project Management Institute courses",
    courses: [
      {
        title: "Project Management Professional certificate",
        description: "Advanced project management preparation.",
      },
      {
        title: "Certified Associate in Project Management",
        description: "Foundation route for learners developing structured project management knowledge.",
      },
      {
        title: "Risk Management Professional certificate",
        description: "Specialist risk management preparation for project environments.",
      },
      {
        title: "Scheduling Professional certificate",
        description: "Specialist scheduling, planning and time-management preparation.",
      },
      {
        title: "Project Management Office course",
        description: "Project Management Office structure, services, governance and reporting practice.",
      },
    ],
  },
  {
    abbreviation: "IPC",
    provider: "Institute of Project Controls courses",
    courses: [
      {
        title: "Project Management Office fundamentals and organisational governance",
        description: "Operating model, authority, assurance, stage-gates and governance design.",
      },
      {
        title: "Project planning, scheduling and integrated controls",
        description: "Integrated baselines, schedule logic, cost control, forecasting and change control.",
      },
      {
        title: "Risk, issue and quality management in projects",
        description: "Risk, issue, quality, assurance, continuous improvement and team behaviours.",
      },
      {
        title: "Stakeholder management, communications and reporting",
        description: "Stakeholder engagement, executive reporting, dashboards, influence and benefits.",
      },
      {
        title: "Artificial Intelligence in Project Controls",
        description: "Artificial intelligence tools for dashboards, insight, recommendation and reporting workflows.",
      },
      {
        title: "Project data, simulation and dashboard practice",
        description: "Project data analysis, simulation modelling, data management and AI-supported dashboard practice.",
      },
    ],
  },
];

export const projectControlsOutcomes: ProjectControlsOutcome[] = [
  {
    role: "Associate Project Manager",
    level: "Level 4",
    desc: "Support and deliver projects with solid, reliable capability.",
  },
  {
    role: "Project Manager",
    level: "Level 6",
    desc: "Own and deliver complex projects end to end.",
  },
  {
    role: "Senior Project Manager",
    level: "Progression",
    desc: "Lead larger, higher-risk and more strategic initiatives.",
  },
  {
    role: "Programme Manager",
    level: "Progression",
    desc: "Coordinate multiple related projects toward shared outcomes.",
  },
  {
    role: "Portfolio Manager",
    level: "Leadership",
    desc: "Shape and prioritise the whole portfolio of change.",
  },
  {
    role: "Head of Project Management",
    level: "Leadership",
    desc: "Lead the project function and its contribution to the business.",
  },
  {
    role: "Project Controls Technician",
    level: "Level 3",
    desc: "Support project delivery with reliable schedules, cost and reporting.",
  },
  {
    role: "Planning Engineer",
    level: "Progression",
    desc: "Own the schedule and sequence of complex programmes of work.",
  },
  {
    role: "Cost Engineer",
    level: "Progression",
    desc: "Lead cost estimation, tracking and commercial control.",
  },
  {
    role: "Risk Manager",
    level: "Progression",
    desc: "Shape risk strategy and turn uncertainty into informed decisions.",
  },
  {
    role: "Project Controls Manager",
    level: "Leadership",
    desc: "Integrate schedule, cost and risk to steer major projects.",
  },
  {
    role: "Head of Project Controls",
    level: "Leadership",
    desc: "Lead the controls function and its contribution to business outcomes.",
  },
];

export const projectControlsStats = [
  { value: "4", label: "Accredited programmes" },
  { value: "100%", label: "DfE funded routes" },
  { value: "9", label: "Core capability areas" },
  { value: "12+", label: "Career pathways" },
];

export const projectControlsWhyChooseUs = [
  {
    icon: BriefcaseBusiness,
    title: "Work-based learning",
    desc: "Develop capability while you work, applying every concept to real project delivery and live controls data from day one.",
  },
  {
    icon: Wallet,
    title: "Fully funded",
    desc: "DfE-funded routes with little to no cost for eligible employers and learners.",
  },
  {
    icon: Award,
    title: "Professionally recognised",
    desc: "Aligned to APM standards, with progression toward Chartered Project Professional and recognised project controls credentials.",
  },
  {
    icon: UserRoundCheck,
    title: "Expert practitioners",
    desc: "Learn from experienced project leaders and controls professionals across major projects and sectors.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Career progression",
    desc: "Clear pathways from technician and associate roles through to senior, specialist and leadership positions.",
  },
  {
    icon: ShieldCheck,
    title: "Governance, rigour & certainty",
    desc: "A disciplined, data-led, outcome-focused approach to planning, risk and confident delivery.",
  },
  {
    icon: Headphones,
    title: "Support that fits your working week",
    desc: "Live interactive learning, session recordings, catch-up support and one-to-one guidance available seven days a week until 9:00 PM.",
  },
  {
    icon: Users,
    title: "Masterclasses & professional community",
    desc: "Extend your learning through professional masterclasses, networking events and optional in-person workshops across the UK.",
  },
  {
    icon: BadgePercent,
    title: "More included through the KBC Fund",
    desc: "Selected routes include added support for professional fees, travel, graduation and further development, subject to eligibility and availability.",
  },
];

export const projectControlsWhyChooseUsStats = [
  { value: "94%", label: "Employed in role within 6 months" },
  { value: "95%", label: "Learner satisfaction score" },
  { value: "88%", label: "Programme completion rate" },
  { value: "8 in 10", label: "Advance into senior, leadership or specialist roles" },
];

export const projectControlsTestimonials = [
  {
    quote:
      "The Associate Project Manager programme gave me a structured way to plan and deliver work I was already responsible for. I'm noticeably more confident leading stakeholders now.",
    name: "Sarah Mitchell",
    role: "Project Coordinator, Facilities & Estates",
    image:
      "/assets/images/project-controls/testimonial-1.jpg",
  },
  {
    quote:
      "The blend of theory and workplace application is excellent. My employer saw the difference within months — better plans, clearer risk management and stronger delivery.",
    name: "Daniel Okafor",
    role: "Assistant Project Manager, Infrastructure",
    image:
      "/assets/images/project-controls/testimonial-2.jpg",
  },
  {
    quote:
      "Progressing toward Chartered status was a real motivator. The support from tutors and my mentor made it feel genuinely achievable.",
    name: "Priya Shah",
    role: "Project Manager, Construction",
    image:
      "/assets/images/project-controls/testimonial-3.jpg",
  },
  {
    quote:
      "The Project Controls Technician programme gave me the technical skills — scheduling, cost, EVM — to add real value from day one.",
    name: "James Walker",
    role: "Planning Assistant, Rail",
    image:
      "/assets/images/project-controls/testimonial-4.jpg",
  },
  {
    quote:
      "I moved from a general admin role into a proper controls career. The forecasting and risk modules transformed how I support my team.",
    name: "Hannah Price",
    role: "Cost Analyst, Energy",
    image:
      "/assets/images/project-controls/testimonial-5.jpg",
  },
  {
    quote:
      "The Level 6 programme sharpened my leadership and commercial thinking. I now run the controls function on major work.",
    name: "Michael Chen",
    role: "Project Controls Manager, Construction",
    image:
      "/assets/images/project-controls/testimonial-6.jpg",
  },
];

export const projectControlsFaqs = [
  {
    question: "Who is the College of Project Controls and Project Management for?",
    answer:
      "It is for professionals across the project delivery spectrum — from project managers who plan, lead and deliver work, to controls specialists in scheduling, cost, risk and data. Whether you are early-career or stepping into senior and leadership responsibility, there is a programme built for you.",
  },
  {
    question: "What is the difference between project management and project controls?",
    answer:
      "Project management focuses on leading and delivering the project end to end — scope, stakeholders, governance and outcomes. Project controls focuses on the data and insight that keep delivery on track — scheduling, cost, risk, forecasting and reporting. Our college develops capability in both, so you can choose the path that fits you.",
  },
  {
    question: "What programmes are available?",
    answer:
      "We offer four accredited apprenticeship programmes: Associate Project Manager (Level 4), Project Manager (Level 6), Project Controls Technician (Level 3) and Project Control Professional (Level 6).",
  },
  {
    question: "How are the programmes funded?",
    answer:
      "Programmes are funded through the Apprenticeship Levy or DfE funding. Levy-paying employers fund 100% through their levy, while non-levy employers typically contribute 5% with the government funding the remaining 95%.",
  },
  {
    question: "Do I need to be employed to join?",
    answer:
      "Yes. These are apprenticeship programmes, so you need to be employed in a relevant project or project controls role. We work with employers across Kent to match learners to suitable positions.",
  },
  {
    question: "How long does each programme take?",
    answer:
      "The Project Controls Technician (Level 3) typically takes around 18 months, while the Associate Project Manager (Level 4) and Project Manager (Level 6) typically take around 24 months, and the Project Control Professional (Level 6) around 30 months — depending on your pace and prior experience.",
  },
  {
    question: "What qualification will I earn?",
    answer:
      "You will earn a recognised apprenticeship qualification, plus professional recognition aligned to the Association for Project Management (APM), supporting progression toward Chartered Project Professional status — alongside recognised project controls credentials for the controls pathways.",
  },
  {
    question: "How do I apply?",
    answer:
      "Get in touch through our contact page and our team will guide you through eligibility, funding and next steps — whether you are an individual learner or an employer.",
  },
];
