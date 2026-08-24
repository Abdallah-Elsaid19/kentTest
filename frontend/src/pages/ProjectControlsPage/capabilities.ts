export interface ProjectControlsCapability {
  id: "planning" | "cost" | "risk" | "ai";
  number: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
  bars: number[];
}

export const projectControlsCapabilities: ProjectControlsCapability[] = [
  { id: "planning", number: "01", label: "Planning & scheduling", title: "Build plans that expose dependencies, critical paths and delivery reality.", description: "Develop integrated baselines, schedule logic, critical-path analysis, progress measurement and reporting methods that make slippage visible early.", tags: ["Integrated baseline", "Critical path", "Schedule quality", "Progress control"], bars: [35, 58, 44, 78, 65, 92] },
  { id: "cost", number: "02", label: "Cost & earned value", title: "Turn cost and performance data into a credible forecast.", description: "Use variance analysis, earned value management, cost forecasting and trend interpretation to support earlier and better project decisions.", tags: ["Cost forecast", "Earned value", "Variance analysis", "Performance reporting"], bars: [36, 60, 45, 80, 67, 95] },
  { id: "risk", number: "03", label: "Risk & governance", title: "Create control environments that support decisions, accountability and assurance.", description: "Strengthen risk and issue management, change control, governance packs, PMO operating models and stakeholder decision pathways.", tags: ["Risk register", "Change control", "PMO governance", "Assurance"], bars: [37, 61, 46, 82, 68, 96] },
  { id: "ai", number: "04", label: "AI & reporting systems", title: "Use modern tools to improve reporting quality, speed and insight.", description: "Explore artificial intelligence workflows, dashboards and reporting systems that help project teams move from fragmented data to actionable intelligence.", tags: ["Executive dashboard", "AI workflow", "Data quality", "Decision support"], bars: [38, 62, 47, 83, 69, 97] },
];
