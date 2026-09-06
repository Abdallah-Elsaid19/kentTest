import {
  Award,
  BadgePoundSterling,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Compass,
  FileCheck2,
  GraduationCap,
  Landmark,
  Layers3,
  MapPin,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

export const seo = {
  title: "Funding & Eligibility | Kent Business College",
  description: "Compare government-funded apprenticeships, KBC-funded professional benefits and IPC-supported Project Controls routes, then check your eligibility.",
};

export const fundingRoutes = [
  {
    eyebrow: "Government funded",
    title: "Complete professional programmes",
    text: "Eligible employees can access structured workplace development through government-funded apprenticeship programmes.",
    details: [
      "Associate Project Manager — Level 4",
      "Project Control Professional — Level 6",
      "Marketing Executive — Level 4",
      "Marketing Manager — Level 6",
    ],
    note: "100% for levy payers · 95% for non-levy employers",
    href: "#programme-funding",
  },
  {
    eyebrow: "Kent Business College Fund",
    title: "Additional professional investment",
    text: "KBC separately funds selected benefits that sit outside Department for Education apprenticeship funding.",
    details: [
      "Professional qualifications and memberships",
      "Professional exam support",
      "Masterclasses and workshop travel",
      "Graduation, recognition and progression",
    ],
    note: "Selected benefits for the first 30 eligible learners",
    href: "#kbc-fund-details",
  },
  {
    eyebrow: "Project Controls commercial",
    title: "Specialist development without the full programme",
    text: "Access individual Project Controls modules or combine subjects into a broader professional-development plan.",
    details: [
      "One specialist module",
      "Multiple connected modules",
      "A broader Project Controls route",
      "Flexible development for individuals or teams",
    ],
    note: "50% or 75% IPC bursary support where applicable",
    href: "#commercial-access",
  },
] as const;

export const fundingNavItems = [
  { id: "funding-overview", label: "Funding Overview" },
  { id: "funding-routes", label: "Funded Programmes" },
  { id: "programme-funding", label: "Programme Funding" },
  { id: "kbc-fund-details", label: "KBC Fund" },
  { id: "commercial-access", label: "Project Controls Commercial" },
  { id: "eligibility", label: "Eligibility" },
  { id: "employer-setup", label: "Employer Setup" },
  { id: "funding-faqs", label: "FAQs" },
] as const;

export const fundingAudiences = [
  {
    id: "professionals",
    tab: "For professionals",
    eyebrow: "Professionals",
    title: "Build on the experience you already have",
    copy: "Develop role-relevant capability while remaining in work, apply learning directly to your responsibilities and progress towards relevant professional qualifications where included.",
    points: ["Develop while working", "Build on existing professional experience", "Apply learning to real responsibilities", "Access eligible funded programmes", "Work towards relevant professional qualifications"],
    cta: "Explore professional funding routes",
    href: "#funding-routes",
    image: "/assets/images/professional-pathway-training.png",
    icon: UserCheck,
  },
  {
    id: "employers",
    tab: "For employers",
    eyebrow: "Employers",
    title: "Develop capability where your organisation needs it",
    copy: "Use professional development to strengthen existing talent, address capability gaps and align learning with current organisational priorities.",
    points: ["Develop existing employees", "Address role-specific skills gaps", "Strengthen workforce capability", "Use eligible funding appropriately", "Connect learning directly to work"],
    cta: "Explore employer funding",
    href: "#funding-routes",
    image: "/assets/images/professional-development-employers.png",
    icon: BriefcaseBusiness,
  },
] as const;

export type FundingAudienceId = (typeof fundingAudiences)[number]["id"];

export const fundingLayers = [
  {
    number: "01",
    label: "Department for Education / government funding",
    micro: "Core programme",
    intro: "Supports eligible apprenticeship programme delivery.",
    items: ["Apprenticeship tuition", "Programme delivery", "Tutoring services where identified as DfE funded", "Learning materials where identified as DfE funded", "Apprenticeship certificate where applicable"],
    tone: "purple",
    icon: Landmark,
  },
  {
    number: "02",
    label: "Kent Business College Fund",
    micro: "Additional professional value",
    intro: "Separately funds selected professional benefits beyond DfE funding.",
    items: ["Professional memberships", "Registration fees", "Professional examination fees", "CIM-related professional qualification costs", "ChPP application / preparation support", "Relevant professional pathways", "Workshop travel", "Masterclasses", "Graduation", "Rewards", "Additional development opportunities"],
    tone: "gold",
    icon: Sparkles,
  },
  {
    number: "03",
    label: "IPC Project Controls commercial route",
    micro: "Specialist access",
    intro: "Specialist commercial Project Controls development supported by IPC bursaries.",
    items: ["One Project Controls module", "Multiple Project Controls modules", "Specialist capability development", "Employer-funded commercial development", "IPC bursary support", "50% or 75% depending on the selected Project Controls module"],
    tone: "neutral",
    icon: BadgePoundSterling,
  },
] as const;

export const missionPillars = [
  { icon: Landmark, title: "Government funding", text: "Supports eligible Level 4 and Level 6 apprenticeship programme delivery." },
  { icon: Sparkles, title: "KBC Fund", text: "Supports selected additional professional benefits separately from government funding." },
  { icon: BadgePoundSterling, title: "IPC Project Controls", text: "Supports eligible commercial modules through applicable IPC bursaries." },
] as const;

export const impactStats = [
  ["100%", "Levy payer funding", "Eligible apprenticeship tuition"],
  ["95%", "Non-levy funding", "With a 5% employer contribution"],
  ["50%", "IPC bursary", "Select commercial modules"],
  ["75%", "IPC bursary", "Maximum selected support"],
  ["10", "KBC Fund places", "Per applicable cohort"],
  ["10093689", "KBC UKPRN", "For the Apprenticeship Service"],
] as const;

export const fundingTransitions = {
  funded: ["Government-funded development", "Eligibility", "Employer participation", "Workplace capability"],
  commercial: ["Alternative route", "Commercial Project Controls", "IPC bursary support", "Flexible capability"],
} as const;

export const programmeData = {
  Marketing: {
    title: "Marketing professional programmes",
    programmes: ["Marketing Executive — Level 4", "Marketing Manager — Level 6"],
    copy: "Develop practical marketing capability through a complete, role-relevant professional programme.",
    benefits: ["CIM Membership", "CIM Registration", "CIM Exam Fees", "Workshop travel", "Graduation ceremony", "Graduation rewards", "Laptop prize where applicable", "Private Health Care Insurance", "Travel to applicable London MasterClass events", "Cost of attending applicable KBC MasterClass events in London", "Diploma Level 7 in Strategy and Leadership for eligible learners", "Saturday morning Level 7 sessions where applicable", "No hidden costs"],
  },
  "Project Controls": {
    title: "Project Control Professional",
    programmes: ["Project Control Professional — Level 6"],
    copy: "Build integrated planning, cost, risk and control capability around live workplace responsibilities.",
    benefits: ["Professional exam fees", "Professional memberships", "APM ChPP application support where applicable", "ChPP preparation", "ICostE / Certified Professional Cost Engineer pathways where applicable", "Membership fees", "Registration fees", "Exam fees", "Workshop travel", "Graduation ceremony", "Graduation rewards", "Laptop prize where applicable", "No hidden costs"],
  },
  "Project Management": {
    title: "Associate Project Manager",
    programmes: ["Associate Project Manager — Level 4"],
    copy: "Strengthen project delivery, stakeholder engagement and governance through workplace-based development.",
    benefits: ["Professional memberships", "Professional registration fees", "Professional examination support", "Workshop travel", "Graduation ceremony", "Graduation rewards", "Laptop prize where applicable", "No hidden costs"],
  },
} as const;

export type ProgrammeKey = keyof typeof programmeData;

export const programmeFundingDetails = {
  Marketing: {
    contributions: [
      { programme: "Marketing Manager Level 6", amount: "£450 total", alternative: "or £30 per month for 15 months" },
      { programme: "Marketing Executive Level 4", amount: "£300" },
    ],
    fundedItems: ["Tutoring services", "Learning materials"],
    qualifications: ["CIM Level 4 Certificate in Professional and Digital Marketing", "CIM Level 6 Diploma in Professional and Digital Marketing"],
  },
  "Project Controls": {
    contributions: [{ programme: "Project Control Professional Level 6", amount: "£1,350 total", alternative: "or £45 per month for 30 months" }],
    fundedItems: ["Tutoring services", "Learning materials", "Apprenticeship certificate"],
    qualifications: ["Operational professional route", "Strategic professional route", "Diploma Level 7 in Project Management", "Certified Level 6 in Project Management Office", "ChPP preparation and further professional progression"],
  },
  "Project Management": {
    contributions: [{ programme: "Associate Project Manager Level 4", amount: "£350 total", alternative: "or £35 per month for 10 months" }],
    fundedItems: ["£7,000 Department for Education", "£1,000 Kent Business College Fund", "£8,000 total programme package"],
    qualifications: ["Associate Project Manager Level 4 workplace-development route", "Professional examination support", "Professional registration and membership support"],
  },
} as const satisfies Record<ProgrammeKey, {
  contributions: readonly { programme: string; amount: string; alternative?: string }[];
  fundedItems: readonly string[];
  qualifications: readonly string[];
}>;

export const programmeRouteOptions = [
  {
    tone: "dark",
    eyebrow: "Route A · Government funded",
    title: "Complete professional programme",
    subtitle: "Project Control Professional — Level 6",
    image: "/assets/images/professional-development-employers.png",
    imageAlt: "Professionals discussing a complete development programme",
    items: ["Complete structured programme", "Workplace-based learning", "Broader professional capability", "Professional qualifications where applicable", "Long-term progression"],
    href: "#eligibility-checker",
    cta: "Check eligibility",
  },
  {
    tone: "light",
    eyebrow: "Route B · Commercial access",
    title: "Project Controls modules",
    subtitle: "Flexible specialist development with IPC support",
    image: "/assets/images/professional-pathway-training.png",
    imageAlt: "Specialist Project Controls development",
    items: ["One capability or multiple subjects", "Targeted team development", "Flexible access", "No complete apprenticeship required"],
    href: "#commercial-access",
    cta: "Explore commercial options",
  },
] as const;

type IconCard = {
  icon: LucideIcon;
  title: string;
  text: string;
  items?: readonly string[];
  wide?: boolean;
};

export const kbcFundCards: readonly IconCard[] = [
  { icon: Award, title: "Professional qualifications", text: "Go beyond programme completion with applicable professional recognition.", wide: true, items: ["Professional memberships", "Professional registration and exam fees", "Relevant CIM, APM, PMI and APMG support", "ChPP application and preparation", "ICostE pathways where applicable"] },
  { icon: CalendarDays, title: "Masterclasses & professional events", text: "Access relevant masterclasses, networking and development events where included.", items: ["Applicable London MasterClass events", "KBC Saturday morning development sessions", "Professional workshops and networking", "Programme-specific guest sessions"] },
  { icon: MapPin, title: "Travel support", text: "Support for applicable workshops across London, Kent and selected UK locations.", items: ["London", "Kent", "Birmingham", "Derby", "Manchester", "Nottingham", "York"] },
  { icon: GraduationCap, title: "Recognition", text: "Graduation, milestone recognition and a visible celebration of professional progress.", items: ["Graduation ceremony", "Rochester Cathedral where applicable", "Graduation rewards", "Laptop prize where applicable"] },
  { icon: Route, title: "What comes next", text: "Programme-specific progression guidance and further professional-development opportunities.", items: ["Level 7 Strategy and Leadership where eligible", "Professional body progression", "Chartered-status preparation", "Further specialist development"] },
  { icon: ShieldCheck, title: "Additional programme benefits", text: "Selected programme benefits designed to make professional development easier to complete.", items: ["Private health care insurance where included", "Learning and event support", "No hidden costs", "Benefits confirmed for the applicable programme and cohort"] },
];

export const commercialAccessOptions = [
  { icon: Target, title: "One module", text: "Focus on one immediate capability gap." },
  { icon: Layers3, title: "Multiple modules", text: "Connect several related Project Controls subjects." },
  { icon: Route, title: "Broader route", text: "Build a more comprehensive specialist plan." },
] as const;

export const commercialCapabilities = ["Planning", "Scheduling", "Cost", "Earned Value", "Risk", "PMO", "Reporting", "Portfolio Management"] as const;

export const alternativeRouteOptions = [
  {
    eyebrow: "General professional development",
    title: "Speak to KBC about the most appropriate route",
    copy: "For Marketing, Project Management, Leadership or other professional-development needs, the KBC team can help identify an appropriate programme or commercial option where available.",
    items: [] as readonly string[],
    cta: "Discuss your development needs",
    href: "/book-session",
    dark: false,
  },
  {
    eyebrow: "Project Controls",
    title: "Choose specialist Project Controls development",
    copy: "Commercial module access can support experienced professionals and employers when a DfE-funded apprenticeship is not the right fit.",
    items: ["One module", "Multiple modules", "Broader Project Controls route", "Employer-funded development", "Experienced practitioner development"],
    cta: "Explore IPC-supported Project Controls",
    href: "https://instituteofprojectcontrols.com/scholarships",
    dark: true,
  },
] as const;

export const availabilityItems = [
  { icon: CalendarDays, title: "First-come, first-served", copy: "Places and benefits are allocated on a first-come, first-served basis subject to eligibility and availability.", tone: "gold" },
  { icon: Users, title: "Limited KBC Fund benefits", copy: "Selected KBC Fund benefits may be limited to the first 30 eligible learners per applicable cohort.", tone: "purple" },
] as const;

export const projectControlModules = [
  { title: "Project Management & Delivery", copy: "Professional development across the structures, governance and controls required to deliver complex work.", items: ["Project Management Professional — PMI PMP", "APM Project Management Qualification", "Project Management Office", "Project Planning and Control"] },
  { title: "Planning & Scheduling", copy: "Strengthen scheduling, planning and control capability across projects and programmes.", items: ["PMI Scheduling Professional — PMI-SP", "Project Planning and Control", "Relevant planning and scheduling development"] },
  { title: "Cost & Earned Value", copy: "Develop stronger cost visibility, performance measurement and control.", items: ["Cost Engineering", "Earned Value Management", "Relevant APMG development"] },
  { title: "Risk, Issue & Quality", copy: "Build more structured approaches to uncertainty, issues, quality and control.", items: ["Risk Management Level 1 & 2", "Risk, Issue and Quality Management", "Project governance"] },
  { title: "Portfolio & Strategic Delivery", copy: "Develop capability beyond individual projects towards programme and portfolio-level decision-making.", items: ["Management of Portfolios", "Managing Successful Programmes", "PMO and strategic delivery"] },
  { title: "Stakeholder, Communication & Reporting", copy: "Improve the quality of information, reporting and stakeholder decision support surrounding project performance.", items: ["Stakeholder Management", "Communications", "Reporting Systems"] },
  { title: "Advanced Project Development", copy: "A senior, work-aligned route for experienced practitioners seeking broader strategic delivery capability.", badge: "Diploma Level 7", items: ["Advanced programme development", "Commercial and delivery leadership", "Strategic professional practice"] },
  { title: "PMO Development", copy: "Develop the structures and reporting systems that keep projects, programmes and portfolios on track.", badge: "Certified Level 6 in PMO", items: ["PMO design and maturity", "Governance and assurance", "Benefits and performance reporting"] },
  { title: "Professional Progression", copy: "A clear view of how module learning connects to recognised professional development.", items: ["ChPP, APM, PMI, APMG and ICostE pathways", "Professional exams and qualifications", "Membership and chartered progression"] },
] as const;

export const eligibilityItems = [
  { icon: Building2, title: "UK residency", copy: "UK resident for the past 3 years." },
  { icon: ShieldCheck, title: "Right to work", copy: "Hold an eligible right-to-work status and meet current funding and immigration requirements." },
  { icon: BookOpen, title: "Other funded training", copy: "Not enrolled in other government-funded training at the time of the programme." },
  { icon: BriefcaseBusiness, title: "Paid employment in England", copy: "Paid employment, normally 30 or more hours per week, with a minimum of 16 hours where applicable. Self-employed individuals are not eligible for DfE funding." },
  { icon: Landmark, title: "Employer support", copy: "Your employer must be based in England and registered with the Apprenticeship Service." },
  { icon: MapPin, title: "Working in England", copy: "Spend at least 50% of your working hours within England." },
] as const;

export const eligibilityRequirements = ["Paid employment", "Employer participation", "Eligible residency", "Work in England", "Relevant workplace responsibilities"] as const;

export const checkerQuestions = [
  { text: "Are you currently in paid employment?", answers: ["Yes", "No"] },
  { text: "Have you been a UK resident for the past 3 years?", answers: ["Yes", "No", "Unsure"] },
  { text: "Is your employer based in England?", answers: ["Yes", "No", "Self-employed"] },
  { text: "Do you normally work 30 or more hours per week?", answers: ["Yes — 30 or more hours", "No — between 16 and 29 hours", "Less than 16 hours"] },
  { text: "Do you spend at least 50% of your working hours within England?", answers: ["Yes", "No", "Unsure"] },
  { text: "Are you currently enrolled in other government-funded training?", answers: ["No", "Yes"] },
  { text: "Is your employer registered (or willing to register) with the Apprenticeship Service?", answers: ["Yes", "No", "Unsure"] },
  { text: "Which area best describes your interest?", answers: ["Project Management", "Project Controls", "Marketing", "Not sure yet"] },
] as const;

export const employerSteps = [
  { icon: Target, title: "Confirm the right programme", text: "Identify the employee, their responsibilities, development goals and the most relevant programme." },
  { icon: FileCheck2, title: "Sign the digital contract", text: "Review the complete agreement and confirm the programme arrangements with KBC." },
  { icon: Landmark, title: "Add KBC to the Apprenticeship Service", text: "Use your Government Gateway account to add Kent Business College as the training provider.", code: "KBC UKPRN · 10093689" },
  { icon: UserCheck, title: "Continue the application", text: "KBC will guide the learner and employer through the remaining assessment and onboarding steps." },
] as const;

export const employerBenefits = ["Develop existing talent", "Address capability gaps", "Use available funding appropriately", "Connect learning to work", "Build longer-term capability"] as const;

export const comparisonRoutes = [
  { icon: Landmark, route: "Route 01", title: "Government-funded programme", best: "Eligible employees and employers", structure: "A complete workplace-based apprenticeship", funding: "Government-supported", objective: "Broader role-relevant professional capability", examples: "Marketing Executive L4, Marketing Manager L6, Associate Project Manager L4, Project Control Professional L6", employer: "Employer participation and Apprenticeship Service setup required", link: "#eligibility-checker" },
  { icon: Sparkles, route: "Route 02", title: "Kent Business College Fund", best: "Eligible learners on applicable KBC programmes", structure: "Additional benefits alongside the programme", funding: "Funded by KBC", objective: "Extra professional value beyond programme completion", examples: "Memberships, registration and exams, masterclasses, travel, graduation and progression", employer: "Available only with applicable KBC programmes and cohorts", link: "#kbc-fund-details" },
  { icon: BadgePoundSterling, route: "Route 03", title: "IPC Project Controls commercial", best: "Professionals or teams needing focused capability", structure: "One module, multiple modules or a broader route", funding: "Commercial with 50% or 75% IPC support", objective: "Flexible specialist Project Controls development", examples: "Planning, scheduling, cost, earned value, risk, PMO, reporting and portfolio management", employer: "Can be selected for an individual or an employer-led team", link: "#commercial-access", dark: true },
] as const;

export const faqs = [
  ["What is the difference between government funding and the KBC Fund?", "Government funding supports eligible apprenticeship programme delivery. The KBC Fund is a separate KBC investment in selected benefits outside DfE funding, such as qualifications, memberships, exam fees, masterclasses, travel and graduation."],
  ["Which KBC programmes can be government funded?", "Subject to learner, employer and programme eligibility, the funded routes shown here include Marketing Executive Level 4, Marketing Manager Level 6, Associate Project Manager Level 4 and Project Control Professional Level 6."],
  ["Are professional qualifications included?", "Applicable qualifications and professional-body support vary by programme. The programme funding tabs explain the qualifications, registrations, memberships and examination support included for each route."],
  ["Does my employer need to be involved?", "Yes. A government-funded apprenticeship is workplace based. Your employer must support the programme, confirm relevant responsibilities and complete the required Apprenticeship Service and contractual steps."],
  ["Do I have to be new to my field to qualify for a funded apprenticeship?", "No. These are professional-development routes. Experienced professionals can enrol where the programme develops new or expanded capability relevant to their role."],
  ["Can self-employed professionals access government-funded programmes?", "No. DfE-funded apprenticeships require paid employment with an eligible employer. IPC-supported Project Controls commercial development may provide another route."],
  ["Can I access Project Controls without completing the full apprenticeship?", "Yes. The IPC-supported commercial route allows you to select one module, combine multiple modules or build a broader specialist Project Controls plan."],
  ["Can I choose only one Project Controls module?", "Yes. Commercial access is designed to be flexible, so you can focus on one immediate capability gap or connect several subjects into a wider plan."],
  ["What is an IPC bursary and how does it work?", "The IPC bursary supports eligible professionals accessing specialist Project Controls development. Support of 50% or 75% depends on the selected module, approval and availability."],
  ["Does the IPC bursary apply to Marketing or Project Management programmes?", "No. The IPC bursary described on this page applies to eligible commercial Project Controls modules. Other programmes follow their stated DfE and KBC funding arrangements."],
  ["What do levy payer and non-levy mean?", "Employers with a payroll over £3 million pay the Apprenticeship Levy. Non-levy employers normally contribute 5% of the training cost, with 95% funded by government, subject to eligibility."],
  ["How do I know which programme is right?", "The right route depends on the role, responsibilities, development goals and capability required. Use the checker below, then discuss the result with KBC."],
  ["Are KBC Fund benefits available to all learners?", "Not necessarily. Benefits vary by programme and cohort, and selected benefits may be limited to the first 30 eligible learners per applicable cohort."],
  ["Does my employer need an Apprenticeship Service account?", "Yes. Employers using a DfE-funded apprenticeship route need an Apprenticeship Service account and must add Kent Business College as their training provider."],
  ["What if my employer does not have an account yet?", "The employer can create or access an Apprenticeship Service account using Government Gateway. KBC can guide the employer through the setup steps."],
  ["What is a UKPRN and where do I use it?", "A UKPRN is a training provider’s unique reference. Use KBC’s UKPRN 10093689 when adding Kent Business College to your Apprenticeship Service account."],
  ["Is ChPP status guaranteed?", "No. KBC can provide applicable preparation and application support, but chartered status is awarded by the relevant professional body and remains subject to its assessment requirements."],
  ["Who confirms final eligibility?", "The checker provides an initial indication only. KBC confirms final eligibility after reviewing the learner, employer, role, working pattern, residency, existing training and selected programme."],
] as const;

export const finalRoutes = [
  { icon: Compass, label: "Start here", title: "Check your eligibility", text: "Use the 8-question checker to identify an initial direction.", href: "#eligibility-checker" },
  { icon: Building2, label: "For employers", title: "Employer setup", text: "See the steps to register and start a funded programme.", href: "#employer-setup" },
  { icon: GraduationCap, label: "Explore further", title: "Programme funding", text: "See what applies to each KBC programme.", href: "#programme-funding" },
] as const;
