export interface MarketingCapability {
  id: "audience" | "brand" | "digital" | "data" | "strategy";
  number: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  features: { title: string; description: string }[];
}

export const marketingCapabilities: MarketingCapability[] = [
  { id: "audience", number: "01", label: "Audience & insight", eyebrow: "Customer intelligence", title: "Understand the market before deciding the message.", description: "Develop research, segmentation and customer-understanding practices that help marketers identify meaningful needs, priorities and opportunities.", features: [
    { title: "Research framing", description: "Turn business questions into useful customer and market enquiries." },
    { title: "Segmentation", description: "Organise audiences around behaviours, needs and commercial value." },
    { title: "Insight synthesis", description: "Translate evidence into implications for strategy and execution." },
    { title: "Ethical practice", description: "Use data and customer information responsibly." },
  ]},
  { id: "brand", number: "02", label: "Brand & proposition", eyebrow: "Value creation", title: "Create propositions that are clear, credible and distinctive.", description: "Connect customer needs, brand purpose, competitive context and commercial priorities to shape stronger positioning and communications.", features: [
    { title: "Brand positioning", description: "Clarify the role and meaning of the brand." },
    { title: "Value proposition", description: "Define why a customer should choose, stay or advocate." },
    { title: "Messaging architecture", description: "Create consistent messages across channels and audiences." },
    { title: "Brand governance", description: "Protect consistency without limiting useful creativity." },
  ]},
  { id: "digital", number: "03", label: "Digital growth", eyebrow: "Connected execution", title: "Design campaigns around customer journeys, not channel silos.", description: "Plan coordinated activity across digital and traditional touchpoints, with clear objectives, resources, responsibilities and feedback loops.", features: [
    { title: "Campaign planning", description: "Define objectives, audiences, offers, content and measures." },
    { title: "Channel strategy", description: "Select channels based on behaviour and purpose." },
    { title: "Content systems", description: "Build useful and repeatable content operations." },
    { title: "Optimisation", description: "Use evidence to improve activity while it is running." },
  ]},
  { id: "data", number: "04", label: "Data, AI & measurement", eyebrow: "Evidence and technology", title: "Use data and AI to improve judgement, not replace it.", description: "Strengthen measurement, experimentation, dashboards, automation and responsible AI use while maintaining professional oversight.", features: [
    { title: "Measurement design", description: "Connect metrics to objectives and decisions." },
    { title: "Dashboard thinking", description: "Present the evidence leaders actually need." },
    { title: "AI workflows", description: "Use AI to support research, content and analysis responsibly." },
    { title: "Experimentation", description: "Test assumptions and learn from controlled activity." },
  ]},
  { id: "strategy", number: "05", label: "Strategy & leadership", eyebrow: "Commercial influence", title: "Make marketing understandable and valuable to the wider business.", description: "Develop strategy, budgeting, stakeholder influence, team leadership and the ability to explain how marketing supports organisational priorities.", features: [
    { title: "Marketing strategy", description: "Set direction, choices, priorities and resource logic." },
    { title: "Budget judgement", description: "Allocate resources against value and risk." },
    { title: "Stakeholder influence", description: "Build confidence across senior and cross-functional teams." },
    { title: "Team development", description: "Coach people and improve marketing capability." },
  ]},
];
