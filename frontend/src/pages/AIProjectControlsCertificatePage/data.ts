export type AiContentItem = {
  title: string;
  description: string;
};

export type AiSession = AiContentItem & {
  number: number;
};

export type AiCurriculumModule = {
  number: number;
  title: string;
  sessionRange: string;
  liveHours: string;
  sessions: readonly AiSession[];
};

export type AiArchitectureNode = AiContentItem & {
  meta: string;
  status: string;
};

export type AiArchitectureStage = {
  number: string;
  title: string;
  subtitle: string;
  nodes: readonly AiArchitectureNode[];
};

export const programmeMeta = {
  title: "AI in Project Controls Certificate | Kent Business College",
  description: "Build responsible AI workflows, dashboards, automations and governed agents that work with real project controls data.",
  canonicalPath: "/ai-in-project-controls-certificate",
} as const;

export const heroData = {
  titleId: "ai-project-controls-title",
  hero: {
    eyebrow: "Practical capability for modern project environments",
    title: "AI in Project Controls",
    accent: "Certificate",
    lead: "Build responsible AI workflows, dashboards, automations and governed agents that work with real project controls data — not isolated classroom demonstrations.",
    fundingTitle: "Designed for the Project Control Professional Level 6 pathway",
    fundingDescription: "Availability and funding are subject to current rules and confirmed learner and employer eligibility.",
    audience: "For project controllers, planners, schedulers, cost and risk professionals, PMO analysts, project managers and programme teams.",
    catalogue: "https://kentbusinesscollege.com/ai-in-project-controls-certificate/Kent_Business_College_AI_in_Project_Controls_Certificate_Catalogue.pdf",
    image: "/assets/images/ai-project-controls-ai-right-hd-v2.png",
  },
  cohorts: [{ id: "september-2026", label: "September 2026", upcoming: true }],
  highlights: [
    { title: "14 sessions", description: "Live, practical and tutor-led." },
    { title: "28 live hours", description: "Two hours in each guided session." },
    { title: "7 modules", description: "A structured four-month build journey." },
    { title: "1 capstone", description: "A workplace solution or controlled prototype." },
  ],
  commitments: [
    { label: "Practical toolchain:", description: "ChatGPT, Claude, n8n, Google Sheets and Lovable." },
    { label: "Governed delivery:", description: "testing, approvals, audit trails, data protection and responsible AI controls." },
  ],
  secondaryAction: { label: "Explore the curriculum", to: "#curriculum" },
  cohortAction: { label: "Save your place", to: "/book-session" },
  cohortEyebrow: "Next intake",
  cohortTitle: "September 2026",
  cohortDescription: "Delivered live over four months. Places are limited.",
  overlay: "clear",
} as const;

export const pageNavigation = [
  { label: "Overview", href: "#overview" },
  { label: "Tool stack", href: "#tools" },
  { label: "Who it is for", href: "#audience" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Architecture", href: "#architecture" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Capstone", href: "#capstone" },
  { label: "Benefits", href: "#benefits" },
  { label: "Assessment", href: "#assessment" },
  { label: "Entry & funding", href: "#entry-funding" },
  { label: "Data security", href: "#security" },
  { label: "FAQs", href: "#ai-faq" },
] as const;

export const propositionData = {
  id: "overview",
  eyebrow: "Course proposition",
  title: "Move from AI awareness to a working, governed solution.",
  description: "The programme follows a demonstrate-build-test-review pattern. Every session creates reusable workplace assets and evidence for professional development.",
  items: [
    { title: "Reduce repetitive reporting", description: "Use structured data and automation to reduce time spent gathering, formatting and drafting routine project controls information.", tag: "Efficiency" },
    { title: "Improve analysis consistency", description: "Create repeatable prompts, quality checks, thresholds and workflow rules for clearer decision-ready narratives.", tag: "Quality" },
    { title: "Connect existing tools", description: "Use Google Sheets, APIs and n8n to connect project applications without a disruptive rip-and-replace programme.", tag: "Integration" },
    { title: "Keep people accountable", description: "Design approvals, escalation points and audit trails so professionals remain responsible for quality and decisions.", tag: "Governance" },
    { title: "Build portfolio evidence", description: "Leave with tested prompts, workflows, dashboards, data models, logs and a practical capstone demonstration.", tag: "Progression" },
    { title: "Measure workplace value", description: "Compare baseline and pilot performance using reporting time, data quality, action closure and control compliance measures.", tag: "Impact" },
  ],
} as const;

export const toolStackData = {
  id: "tools",
  eyebrow: "Course tool stack",
  title: "Use a connected toolchain, not isolated AI demonstrations.",
  description: "Each platform has a defined role in the course solution, from structured analysis and workflow design to automation, governed data and dashboard delivery.",
  items: [
    { title: "ChatGPT", description: "Prompt engineering, structured analysis and project reporting commentary.", role: "Prompting & analysis" },
    { title: "Claude", description: "Workflow design, documentation and meeting analysis.", role: "Workflow design" },
    { title: "n8n", description: "Triggers, transformations, AI calls, integrations, routing, validation and controlled write-back.", role: "Automation & agents" },
    { title: "Google Sheets", description: "A controlled data layer for project, schedule, cost, risk, change and action records.", role: "Structured data" },
    { title: "Lovable", description: "Action-focused dashboard and application views backed by approved project data.", role: "Dashboard & app UI" },
    { title: "Project applications and APIs", description: "Connect approved project records from platforms such as ClickUp, Asana, Jira or monday.com.", role: "Systems integration" },
  ],
} as const;

export const audienceData = {
  id: "audience",
  eyebrow: "Designed for both sides of the workplace",
  title: "Built for project professionals and the employers who support them.",
  description: "Suitable for experienced professionals and developing practitioners who understand the basics of project work and want hands-on AI and automation skills.",
  groups: [
    {
      eyebrow: "For learners",
      title: "Build practical capability you can show.",
      description: "Create visible evidence for workplace reviews, interviews, professional development and apprenticeship discussions.",
      items: ["Project controllers", "Planners and schedulers", "Cost and risk professionals", "PMO analysts", "Project managers", "Programme teams"],
    },
    {
      eyebrow: "For employers",
      title: "Turn individual learning into organisational improvement.",
      description: "Retain reusable workflows, dashboards, templates, mappings and operating procedures while introducing AI through controlled pilots.",
      items: ["Faster reporting cycles", "Better data discipline", "Controlled innovation", "Improved action follow-through", "Reusable digital assets", "Capability and retention"],
    },
  ],
} as const;

export const outcomesData = {
  id: "outcomes",
  eyebrow: "Learning outcomes",
  title: "Ten capabilities that connect directly to project controls work.",
  description: "Each outcome is applied through practical activities, testing and portfolio evidence rather than passive content consumption.",
  items: [
    { title: "Select valuable AI use cases", description: "Assess value, feasibility, data needs, risks and human control points." },
    { title: "Engineer reliable prompts", description: "Produce structured, testable outputs for schedule, cost, risk, change and reporting." },
    { title: "Redesign workflows", description: "Map current processes and specify AI-enabled future workflows with safe failure paths." },
    { title: "Structure governed data", description: "Build a controlled Google Sheets data model with validation and data-quality checks." },
    { title: "Automate analysis and reporting", description: "Read data, detect exceptions, call AI and write controlled outputs through n8n." },
    { title: "Create real-data dashboards", description: "Design action-focused Lovable dashboards backed by approved spreadsheet data." },
    { title: "Build governed AI agents", description: "Define tools, permissions, stop conditions, approvals, logging and escalation." },
    { title: "Convert meetings into actions", description: "Extract decisions, risks and actions from transcripts with validation and approval." },
    { title: "Integrate project applications", description: "Map IDs and fields across an API-ready platform, n8n, Sheets and dashboards." },
    { title: "Apply policy and governance", description: "Apply AI policy, data protection and human-in-the-loop governance to every workflow." },
  ],
} as const;

export const architectureData = {
  id: "architecture",
  eyebrow: "Solution architecture",
  title: "Build an integrated AI project controls solution.",
  description: "Learners connect structured project data, automation, AI analysis, dashboards and governance into one working course solution.",
  stages: [
    {
      number: "01",
      title: "Connect",
      subtitle: "Inputs & data",
      nodes: [
        { meta: "Input source", title: "Project applications", description: "ClickUp, Asana, Jira or monday.com project records.", status: "API connected" },
        { meta: "Structured data layer", title: "Google Sheets", description: "Project, schedule, cost, risk, change and action data.", status: "Records available" },
        { meta: "AI model", title: "ChatGPT", description: "Prompt engineering, analysis and reporting commentary.", status: "Model ready" },
        { meta: "Workflow intelligence", title: "Claude", description: "Workflow design, meeting analysis and documentation.", status: "Analysis ready" },
      ],
    },
    {
      number: "02",
      title: "Orchestrate",
      subtitle: "Automation & analysis",
      nodes: [
        { meta: "Core workflow engine", title: "Automation & AI orchestration", description: "Triggers, transformations, AI calls, integrations, routing, validation and controlled write-back.", status: "Workflow executed" },
        { meta: "Generated output", title: "AI project analysis", description: "Detect exceptions, draft commentary and recommend actions.", status: "Output generated" },
      ],
    },
    {
      number: "03",
      title: "Govern",
      subtitle: "Human control",
      nodes: [
        { meta: "Required governance step", title: "Human approval", description: "Review AI output, verify evidence and approve important actions before write-back.", status: "Approval required" },
      ],
    },
    {
      number: "04",
      title: "Deliver",
      subtitle: "Outputs & evidence",
      nodes: [
        { meta: "Presentation layer", title: "Lovable dashboard / app", description: "Project health, schedule, cost, risk, changes, actions and approved AI commentary.", status: "Dashboard updated" },
        { meta: "Control record", title: "Audit trail", description: "Log decisions, approvals, changes and system activity.", status: "Activity logged" },
      ],
    },
  ] satisfies readonly AiArchitectureStage[],
  governance: {
    title: "Human-in-the-loop governance",
    description: "Reviews AI outputs, approves actions, checks evidence, controls write-back and keeps a complete audit trail.",
    checks: ["Evidence checked", "Approval gates", "Audit logged"],
  },
} as const;

export const curriculumData = {
  id: "curriculum",
  eyebrow: "Seven modules, fourteen sessions",
  title: "A structured four-month build journey.",
  description: "Every module progresses the same solution from opportunity and data design through automation, dashboards, agents, integration and governance.",
  method: "Demonstrate. Build. Test. Review.",
  note: "Learners save evidence during every session and refine one practical capstone across the full programme.",
  modules: [
    { number: 1, title: "AI Foundations and Prompt Engineering", sessionRange: "Sessions 1–2", liveHours: "4 live hours", sessions: [
      { number: 1, title: "AI opportunity and architecture", description: "Map one reporting or control process, define baseline measures and identify human control points." },
      { number: 2, title: "Prompt engineering with ChatGPT", description: "Build and test a reusable project controls prompt library with structured outputs and quality checks." },
    ] },
    { number: 2, title: "Workflow Design with Claude", sessionRange: "Sessions 3–4", liveHours: "4 live hours", sessions: [
      { number: 3, title: "Map the current workflow", description: "Document inputs, outputs, decisions, roles, bottlenecks, exceptions and ownership." },
      { number: 4, title: "Design the AI-enabled workflow", description: "Create a to-be process with triggers, approvals, error handling and safe failure paths." },
    ] },
    { number: 3, title: "Google Sheets Data and n8n Automation", sessionRange: "Sessions 5–6", liveHours: "4 live hours", sessions: [
      { number: 5, title: "Build the project controls data model", description: "Create project, schedule, cost, risk, change, action and configuration tables with validation." },
      { number: 6, title: "n8n automation fundamentals", description: "Read data, detect exceptions, call AI and write a controlled draft output with logs." },
    ] },
    { number: 4, title: "Lovable Dashboards with Real Google Sheets Data", sessionRange: "Sessions 7–8", liveHours: "4 live hours", sessions: [
      { number: 7, title: "Dashboard design and prototype", description: "Design around user decisions, KPIs, RAG rules, accessibility and action-focused layouts." },
      { number: 8, title: "Connect Google Sheets to Lovable", description: "Replace mock data, validate field mapping and apply controlled refresh or approved updates." },
    ] },
    { number: 5, title: "AI Agent Design and Build", sessionRange: "Sessions 9–10", liveHours: "4 live hours", sessions: [
      { number: 9, title: "Design the project controls agent", description: "Define purpose, tools, permissions, evidence, confidence, stop conditions and tests." },
      { number: 10, title: "Build a governed agent in n8n", description: "Generate recommendations, request approval, write back approved actions and retain an audit trail." },
    ] },
    { number: 6, title: "Meetings and Workshops AI Analysis", sessionRange: "Sessions 11–12", liveHours: "4 live hours", sessions: [
      { number: 11, title: "Analyse meetings with AI", description: "Extract decisions, RAID items, actions and unresolved questions from source evidence." },
      { number: 12, title: "Automate meeting-to-action", description: "Validate owners and dates, prevent duplicates, approve outputs and update project systems." },
    ] },
    { number: 7, title: "API Integration, Governance and Capstone", sessionRange: "Sessions 13–14", liveHours: "4 live hours", sessions: [
      { number: 13, title: "Integrate API-ready applications", description: "Map records, handle credentials and errors, prevent duplicates and document source-of-truth decisions." },
      { number: 14, title: "Policy and capstone showcase", description: "Present a complete solution and defend its data, workflow, approvals, controls and measured value." },
    ] },
  ] satisfies readonly AiCurriculumModule[],
} as const;

export const capstoneData = {
  id: "capstone",
  eyebrow: "Apply the full toolchain",
  title: "Choose a relevant practical project.",
  description: "Use an approved workplace case or an anonymised KBC training scenario. Every capstone must be useful, traceable, controlled, tested, measurable and transferable.",
  items: [
    { title: "AI Project Controls Dashboard", description: "Google Sheets data, automated commentary and a Lovable view for schedule, cost, risk, change and actions." },
    { title: "Meeting-to-Action Automation", description: "Transcript analysis, validation, approval and controlled action creation in a selected project application." },
    { title: "Risk and Change Control Agent", description: "An agent that reviews records, requests missing data, recommends next steps and escalates priority cases." },
    { title: "Monthly Reporting Assistant", description: "Exception detection, narrative generation, quality checks and a human-approved reporting pack." },
    { title: "Project Application Integration Bridge", description: "Synchronise an employer platform, Google Sheets, n8n and the Lovable dashboard with controlled write-back." },
    { title: "Portfolio Early-Warning System", description: "Use thresholds and AI analysis to identify emerging issues, route review and highlight priority actions." },
  ],
} as const;

export const benefitsData = {
  id: "benefits",
  eyebrow: "Value for learners and employers",
  title: "Practical benefits beyond the classroom.",
  description: "The strongest outcomes happen when learning is connected to a relevant use case, appropriate data access, a workplace sponsor and timely review.",
  groups: [
    { title: "Learner benefits", items: [
      { title: "Build real capability", description: "Move from awareness to tested prompts, workflows, dashboards, agents and integrations." },
      { title: "Create a professional portfolio", description: "Leave with visible evidence for reviews, interviews and progression discussions." },
      { title: "Work faster with control", description: "Automate preparation while keeping professional review and accountability." },
      { title: "Gain responsible AI confidence", description: "Recognise privacy, quality, bias and hallucination risks and apply safeguards." },
    ] },
    { title: "Employer benefits", items: [
      { title: "Faster reporting cycles", description: "Reduce collecting, formatting, drafting and chasing effort across routine reporting." },
      { title: "More consistent outputs", description: "Share data structures, prompts, thresholds and workflow rules across teams." },
      { title: "Controlled innovation", description: "Introduce AI with permissions, logs, approvals, policies and clear accountability." },
      { title: "Reusable digital assets", description: "Retain templates, workflows, dashboards, mappings and operating procedures." },
    ] },
  ],
} as const;

export const assessmentData = {
  id: "assessment",
  eyebrow: "Delivery and assessment",
  title: "Demonstrate. Build. Test. Review.",
  description: "Four months provides time between selected sessions for practice, employer review, troubleshooting and portfolio refinement.",
  steps: [
    { title: "Demonstrate", description: "See a live worked example." },
    { title: "Build", description: "Create your own solution." },
    { title: "Test", description: "Validate outputs and controls." },
    { title: "Review", description: "Confirm evidence and next steps." },
  ],
  approach: [
    "Practical portfolio produced throughout the programme.",
    "Working capstone solution or controlled prototype.",
    "Demonstration of testing, controls and human approval.",
    "Short reflection on value, limitations and next steps.",
    "Tutor review against communicated assessment criteria.",
  ],
  certificate: {
    title: "KBC AI in Project Controls Certificate",
    description: "Awarded following successful completion of required practical work, portfolio, attendance and KBC quality requirements. Detailed criteria are confirmed during onboarding.",
  },
} as const;

export const entryFundingData = {
  id: "entry-funding",
  eyebrow: "Entry and funding",
  title: "Choose the route that fits the learner and employer.",
  description: "Funding, delivery arrangements and certificate requirements are confirmed in writing before enrolment.",
  primary: {
    eyebrow: "Primary pathway",
    title: "Project Control Professional Level 6",
    description: "The certificate is designed to be available through Kent Business College’s Project Control Professional Level 6 pathway, subject to current rules and individual and employer eligibility.",
    checks: ["Employer-supported", "Eligibility checked before enrolment", "Workplace evidence", "Funding confirmed in writing"],
  },
  routes: [
    { title: "Commercial cohort or employer route", description: "Organisations may discuss a dedicated cohort, tailored project application and delivery arrangements. Commercial pricing and scope are confirmed separately." },
    { title: "Recommended entry profile", description: "Basic familiarity with spreadsheets and project reporting. A workplace use case or willingness to use a KBC scenario. No prior coding required." },
  ],
} as const;

export const securityData = {
  id: "security",
  eyebrow: "Data and security",
  title: "Use project data with permission, control and traceability.",
  description: "Use anonymised or synthetic data by default. Employer data requires explicit permission, approved access and human review before external communication or write-back.",
  items: [
    { title: "Default to safe data", description: "Use anonymised or synthetic datasets until employer access is formally approved." },
    { title: "Respect permissions", description: "Use employer data only with explicit organisational permission and approved access." },
    { title: "Protect credentials", description: "Keep credentials out of prompts and shared documents." },
    { title: "Follow employer policy", description: "Apply employer policies, data classifications and approved technology controls." },
    { title: "Require human review", description: "Review outputs before external communication, action creation or system write-back." },
    { title: "Retain evidence", description: "Record the model, prompt, source, output and approval where required." },
  ],
} as const;

export const faqs = [
  { question: "Do I need to be a programmer?", answer: "No. The course uses low-code tools, structured logic, field mapping and practical API concepts. Optional expressions may be introduced where useful." },
  { question: "Can the dashboard use real data?", answer: "Yes. Learners can connect approved Google Sheets data directly or through an n8n and API/webhook layer. Training data is used until access is approved." },
  { question: "Which AI models will I use?", answer: "ChatGPT supports prompt engineering, analysis and structured drafting. Claude supports workflow design, documentation and meeting analysis. n8n can orchestrate approved model access." },
  { question: "Is this a PMI or APM qualification?", answer: "No. It is a Kent Business College certificate. The curriculum is informed by public themes in PMI’s AI standard, but this does not indicate PMI endorsement, accreditation or certification. The course may support evidence relevant to an APM Chartered Project Professional journey, but it does not award Chartered status." },
  { question: "Can I use employer project data?", answer: "Only with explicit organisational permission and appropriate controls. An anonymised workplace dataset or KBC training dataset can be used instead." },
  { question: "Is the course fully funded?", answer: "It is designed to be available through the Project Control Professional Level 6 pathway. Funding is subject to current rules and confirmed learner and employer eligibility." },
] as const;

export const finalCtaData = {
  eyebrow: "September 2026 intake",
  title: "Build it. Govern it. Use it.",
  description: "Book an information session to discuss eligibility, employer needs, delivery arrangements and the most suitable final project.",
} as const;

export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "AI in Project Controls Certificate",
  description: programmeMeta.description,
  provider: { "@type": "CollegeOrUniversity", name: "Kent Business College", url: "https://kentbusinesscollege.com" },
  timeRequired: "P4M",
  educationalCredentialAwarded: "KBC AI in Project Controls Certificate",
} as const;

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
} as const;
