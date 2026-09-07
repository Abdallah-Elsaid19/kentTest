import {
  Award,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  HeartHandshake,
  Megaphone,
  MessagesSquare,
  Search,
  Smartphone,
  Tags,
  UserRoundCheck,
  Users,
  Wallet,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface MarketingModule {
  id: string;
  title: string;
  duration?: string;
  description: string;
  outcomes: string[];
}

export interface MarketingProgramme {
  id: string;
  discipline: string;
  image: string;
  href: string;
  title: string;
  level: string;
  duration: string;
  funding: string;
  qualification: string;
  intake?: string;
  summary: string;
  outcomes: string[];
  idealFor: string;
  modules: MarketingModule[];
}

export interface MarketingCard {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface MarketingOutcome {
  role: string;
  level: string;
  desc: string;
}

export const hero = {
  image: "/assets/images/project-controls-hero.webp",
  eyebrow: "College of Marketing",
  title: "Turn customer insight into",
  accent: "commercial growth",
  description:
    "The College of Marketing develops the marketers modern organisations need — professionals who can understand customers, shape strategy and deliver measurable commercial results.",
  primaryLabel: "Explore our programmes",
  secondaryLabel: "Speak to our team",
  highlights: ["Customer Insight", "Digital Marketing", "Strategy & Planning", "Performance"],
};

export const pageNavigation = [
  { label: "About the college", href: "#marketing-overview" },
  { label: "Our programmes", href: "#marketing-programmes" },
  { label: "Core capabilities", href: "#marketing-capabilities" },
  { label: "Why choose us", href: "#marketing-benefits" },
  { label: "Learning", href: "#marketing-learning" },
  { label: "Career pathways", href: "#marketing-outcomes" },
  { label: "Events", href: "#marketing-events" },
  { label: "Case studies", href: "#marketing-case-studies" },
  { label: "Recognition", href: "#marketing-recognition" },
  { label: "Trusted by", href: "#marketing-trusted" },
  { label: "FAQs", href: "#marketing-faq" },
] satisfies { label: string; href: string }[];

export const overview = {
  eyebrow: "About the college",
  title: "Marketing that connects customer understanding to business results",
  paragraphs: [
    "Great marketing is more than activity — it is the disciplined practice of understanding customers and turning that insight into sustainable commercial growth. The College of Marketing equips professionals to do exactly that.",
    "Our programmes blend the latest marketing practice with real workplace application, so learners build capability they can use from day one — and evidence they can carry into greater responsibility.",
  ],
  image: "/assets/images/programme-marketing-manager.jpg",
};

export const programmeCopy = {
  eyebrow: "Our programmes",
  title: "Two accredited routes into professional marketing",
  description:
    "Whether you are building your professional foundation or preparing to lead strategy, there is a funded marketing programme built for you.",
  learningLabel: "What you will learn",
  audienceLabel: "Ideal for:",
  image: "/assets/images/figma-home/marketing-event.png",
  imageLabel: "Work-based learning",
  imageCaption: "Apply customer insight, campaign planning and strategic marketing to live workplace priorities",
};

export const capabilityCopy = {
  eyebrow: "Core capabilities",
  title: "The complete modern marketing toolkit",
  description:
    "Build the customer, commercial, digital and strategic capabilities needed to create measurable growth.",
};

export const benefitCopy = {
  eyebrow: "Why choose us",
  title: "A marketing college built around commercial growth",
  description:
    "We combine accredited programmes, expert marketers and funded routes — so you can turn customer insight into measurable commercial results.",
};

export const learningCopy = {
  eyebrow: "Learning experience",
  title: "Flexible Learning & Personalised Support",
  description:
    "Our programs are designed to fit around your work commitments with comprehensive support to ensure your success.",
};

export const testimonialCopy = {
  eyebrow: "What our learners say",
  title: "Real progress, real careers",
};

export const careerCopy = {
  eyebrow: "Career pathways",
  title: "Where professional marketing can take you",
  description:
    "From campaign delivery and customer research to strategic leadership, our programmes build the capability and evidence to progress.",
};

export const faqCopy = {
  eyebrow: "Frequently asked questions",
  title: "Your questions, answered",
  description:
    "Everything you need to know about our programmes, funding and how to get started. Can’t find what you’re looking for? Our team is here to help.",
  cta: "Speak to our team",
};

export const finalCta = {
  eyebrow: "Start your marketing journey",
  title: "Build a marketing career that drives real growth",
  description:
    "Whether you are a new marketer or an experienced professional ready for greater responsibility, our DfE-funded programmes help you develop the capability employers are looking for.",
  primaryLabel: "Book information session",
  secondaryLabel: "Check your eligibility",
};

const executiveModules: MarketingModule[] = [
  {
    id: "marketing-impact-planning",
    title: "Marketing Impact & Planning",
    duration: "4 months",
    description:
      "Focus on strategic analysis, marketing metrics, and campaign planning. Learn to evaluate market conditions, set measurable objectives, and plan integrated marketing campaigns that deliver commercial results.",
    outcomes: [
      "Analyse market data and customer insight",
      "Set measurable campaign objectives",
      "Plan integrated marketing activities",
      "Evaluate marketing impact and ROI",
    ],
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing Executive",
    duration: "4 months",
    description:
      "Master the use of social media as a marketing channel. Build skills in content creation, community management, paid social campaigns, and analytics to drive engagement and conversion across platforms.",
    outcomes: [
      "Create engaging social content strategies",
      "Manage paid and organic social campaigns",
      "Use platform analytics to optimise performance",
      "Build and nurture online communities",
    ],
  },
  {
    id: "marketing-technology",
    title: "Marketing Technology Executive",
    duration: "4 months",
    description:
      "Explore marketing automation, CRM platforms, and data tools. Develop practical skills in using technology to streamline marketing operations, personalise customer journeys, and report on performance.",
    outcomes: [
      "Operate marketing automation platforms",
      "Manage CRM data and segmentation",
      "Build dashboards and performance reports",
      "Integrate tools for campaign efficiency",
    ],
  },
];

const managerModules: MarketingModule[] = [
  {
    id: "strategy-planning",
    title: "Strategy and Planning",
    description:
      "The foundation stage connects Level 6 marketing theory with strategic business decisions and organisational objectives.",
    outcomes: [
      "Strategic marketing theory and the extended marketing mix",
      "Product, service and brand development",
      "Market research, communications and business context",
      "Evidence-led marketing plans, risks and priorities",
    ],
  },
  {
    id: "customer-journey",
    title: "Customer Journey Optimisation",
    description:
      "Develop a customer-focused view of the complete experience, from initial engagement to satisfaction, retention and loyalty.",
    outcomes: [
      "Customer behaviours across B2B and B2C contexts",
      "Journey mapping, touchpoints and friction analysis",
      "CRM, brand perception, feedback and channel choices",
      "Stakeholder collaboration and experience improvement",
    ],
  },
  {
    id: "commercial-intelligence",
    title: "Commercial Intelligence",
    description:
      "Strengthen commercial judgement by connecting data, financial awareness and marketing performance to business value.",
    outcomes: [
      "Campaign performance, KPIs and reliable information",
      "Return on investment, customer value and budget use",
      "Analytics, market insight and evidence-based decisions",
      "Business cases, recommendations and growth opportunities",
    ],
  },
  {
    id: "ai-marketing",
    title: "AI in Marketing",
    description:
      "Explore how emerging technology can improve planning, personalisation, customer insight and performance.",
    outcomes: [
      "Artificial intelligence, automation and marketing systems",
      "Campaign planning, optimisation and content development",
      "Analytics, digital tools and faster insight generation",
      "Responsible, ethical and commercially appropriate use",
    ],
  },
];

export const marketingProgrammes: MarketingProgramme[] = [
  {
    id: "marketing-executive",
    discipline: "Marketing",
    image: "/assets/images/learner-home/marketing-executive.webp",
    href: "/marketing-executive-level-4",
    title: "Marketing Executive",
    level: "Level 4",
    duration: "Typically 18 months",
    funding: "DfE fully funded",
    qualification: "Optional CIM Level 4 Certificate in Professional and Digital Marketing",
    summary:
      "Build the practical marketing skills to research customers, plan campaigns and deliver measurable commercial results across digital and traditional channels.",
    outcomes: [
      "Customer insight & research",
      "Campaign planning & delivery",
      "Digital & content marketing",
      "Performance & analytics",
    ],
    idealFor: "New and early-career marketers building a strong professional foundation.",
    modules: executiveModules,
  },
  {
    id: "marketing-manager",
    discipline: "Marketing",
    image: "/assets/images/learner-home/marketing-manager.webp",
    href: "/marketing-manager-level-6",
    title: "Marketing Manager",
    level: "Level 6",
    duration: "Typically 24 months",
    funding: "DfE fully funded",
    qualification: "CIM Level 6 Diploma in Professional and Digital Marketing pathway",
    intake: "September 2026",
    summary:
      "Lead marketing strategy, brand direction and performance to shape how an organisation grows — turning customer insight into commercial advantage.",
    outcomes: [
      "Strategic marketing leadership",
      "Brand & proposition development",
      "Data-driven decision making",
      "Team & budget management",
    ],
    idealFor: "Experienced marketers stepping into strategic and leadership responsibility.",
    modules: managerModules,
  },
];

export const marketingCapabilities: MarketingCard[] = [
  { icon: Search, title: "Customer Insight", desc: "Understand audiences, behaviours and needs to inform every decision." },
  { icon: ChartNoAxesCombined, title: "Strategy & Planning", desc: "Turn insight into focused marketing strategy and measurable plans." },
  { icon: Smartphone, title: "Digital Marketing", desc: "Master paid, owned and earned channels from SEO to social." },
  { icon: BarChart3, title: "Performance & Analytics", desc: "Measure what matters and use data to continuously improve." },
  { icon: Tags, title: "Brand & Content", desc: "Shape distinctive brands and craft content that connects and converts." },
  { icon: HeartHandshake, title: "CRM & Loyalty", desc: "Build customer relationships that drive retention and lifetime value." },
  { icon: Workflow, title: "Marketing Technology", desc: "Use CRM, automation and connected tools to improve campaign efficiency." },
  { icon: Bot, title: "AI in Marketing", desc: "Use AI responsibly to strengthen insight, planning, content and optimisation." },
];

export const marketingStats = [
  { value: "2", label: "Accredited programmes" },
  { value: "100%", label: "DfE funded routes" },
  { value: "4", label: "Core capability areas" },
  { value: "6+", label: "Career pathways" },
];

export const marketingWhyChooseUs: MarketingCard[] = [
  { icon: BriefcaseBusiness, title: "Work-based learning", desc: "Build marketing capability while working on real campaigns, customers and results." },
  { icon: Wallet, title: "Fully funded", desc: "DfE-funded routes with little to no cost for eligible employers and learners." },
  { icon: Award, title: "Professionally recognised", desc: "Aligned to industry standards, supporting progression toward Chartered Marketer status." },
  { icon: UserRoundCheck, title: "Expert marketers", desc: "Learn from experienced practitioners who have grown brands and driven growth." },
  { icon: ChartNoAxesCombined, title: "Career progression", desc: "Clear pathways from Marketing Executive through to Head of Marketing." },
  { icon: Megaphone, title: "Commercial impact", desc: "Turn customer insight into measurable commercial growth for your organisation." },
];

export const marketingWhyChooseUsStats = [
  { value: "91%", label: "Employed in role within 6 months" },
  { value: "96%", label: "Learner satisfaction score" },
  { value: "87%", label: "Programme completion rate" },
  { value: "7 in 10", label: "Progress to strategic marketing roles" },
];

export const learningExperience = [
  {
    title: "Interactive Learning",
    items: [
      { title: "Live Classes", description: "Interactive, live online sessions held weekly." },
      { title: "Recordings Available", description: "Access session recordings anytime to review and consolidate your learning." },
      { title: "Peer Learning", description: "Collaborate with fellow marketers through discussion forums and group projects." },
    ],
  },
  {
    title: "Personalised Tutoring",
    items: [
      { title: "One-to-One Support", description: "Free tutoring available seven days a week until 9:00 PM, including weekends." },
      { title: "Interactive Resources", description: "Engage with quizzes, homework assignments, and real-world case studies." },
      { title: "Regular Feedback", description: "Receive detailed feedback on assignments and projects to accelerate your growth." },
    ],
  },
  {
    title: "Networking Workshops",
    items: [
      { title: "Face-to-Face Interaction", description: "Enhance your learning with optional workshops in Nottingham, London, Birmingham." },
      { title: "Networking Benefits", description: "Gain insights, connect with industry peers, and expand your professional network." },
      { title: "Industry Connections", description: "Meet representatives from leading marketing agencies and brands at special events." },
    ],
  },
];

export const careerRoutes = [
  {
    label: "Marketing Executive route",
    title: "Build the foundation for campaign delivery",
    skills: ["Marketing Impact & Planning", "Social Media Marketing", "Marketing Technology"],
    outcomes: ["Marketing Executive", "Digital Marketing Specialist"],
  },
  {
    label: "Marketing Manager route",
    title: "Progress from execution to strategic leadership",
    skills: ["Strategy and Planning", "Commercial Intelligence", "AI in Marketing", "Customer Journey"],
    outcomes: ["Marketing Manager", "Brand Manager", "Head of Marketing"],
  },
  {
    label: "Marketing research route",
    title: "Turn customer and market evidence into direction",
    skills: ["Customer and market insight", "Segmentation", "Research", "Performance analysis"],
    outcomes: ["CRM & Insight Manager", "Market Research specialist"],
  },
];

export const marketingOutcomes: MarketingOutcome[] = [
  { role: "Marketing Executive", level: "Level 4", desc: "Deliver campaigns and activities that drive measurable results." },
  { role: "Marketing Manager", level: "Level 6", desc: "Lead strategy and performance across the marketing function." },
  { role: "Digital Marketing Specialist", level: "Progression", desc: "Specialise in channels, performance and data-led growth." },
  { role: "Brand Manager", level: "Progression", desc: "Own brand direction, proposition and customer experience." },
  { role: "CRM & Insight Manager", level: "Progression", desc: "Use data and customer understanding to drive loyalty and value." },
  { role: "Head of Marketing", level: "Leadership", desc: "Lead the marketing function and commercial strategy." },
];

export const marketingTestimonials = [
  {
    quote: "The Marketing Executive programme taught me to turn customer insight into campaigns that actually convert. My employer trusted me with more from month one.",
    name: "Emily Foster",
    role: "Marketing Assistant, Retail",
    image: "/assets/people/lauren-hiney.webp",
  },
  {
    quote: "Data and analytics were a game-changer. I now measure everything and make decisions with real confidence.",
    name: "Tom Adeyemi",
    role: "Digital Marketing Executive, Technology",
    image: "/assets/people/andrew-hurll.webp",
  },
  {
    quote: "The Level 6 programme elevated me from ‘doing marketing’ to leading strategy. I’m now heading the function.",
    name: "Rachel Green",
    role: "Marketing Manager, Professional Services",
    image: "/assets/people/corinna-denbow.webp",
  },
];

export const marketingFaqs = [
  {
    question: "Who is the College of Marketing for?",
    answer: "It is for marketers at any stage — from those starting their career building a strong foundation, to experienced professionals ready to lead strategy and drive commercial growth.",
  },
  {
    question: "How is the programme funded?",
    answer: "Programmes are funded through the Apprenticeship Levy or DfE funding. Levy-paying employers fund 100% through their levy, while non-levy employers typically contribute 5% with the government funding the remaining 95%.",
  },
  {
    question: "Do I need to be employed to join?",
    answer: "Yes. These are apprenticeship programmes, so you need to be employed in a relevant marketing role. We work with employers across Kent to match learners to suitable positions.",
  },
  {
    question: "How long does the programme take?",
    answer: "The Marketing Executive (Level 4) typically takes around 18 months, and the Marketing Manager (Level 6) around 24 months, depending on your pace and experience.",
  },
  {
    question: "What qualification will I earn?",
    answer: "You will earn a recognised apprenticeship qualification, plus professional recognition aligned to industry marketing standards, supporting progression toward Chartered Marketer status.",
  },
  {
    question: "Does the programme automatically make me a Chartered Marketer?",
    answer: "No. Chartered Marketer status is awarded separately by CIM and is subject to its current membership, experience, CPD and application requirements.",
  },
  {
    question: "How do I apply?",
    answer: "Get in touch through our contact page and our team will guide you through eligibility, funding and next steps — whether you are an individual learner or an employer.",
  },
];
