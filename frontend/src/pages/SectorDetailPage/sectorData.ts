export type SectorDetail = {
  slug: string;
  name: string;
  eyebrow: string;
  heroLead: string;
  heroLines: string[];
  environments: string[];
  challengeEyebrow: string;
  challengeTitle: string;
  challengeBody: string;
  challengeStatement: string;
  signals: Array<[string, string]>;
  foundationTitle: string;
  foundationBody: string;
  applications: string[];
  applicationTitle: string;
  applicationBody: string;
  outputs: Array<[string, string]>;
  roles: Array<[string, string]>;
  accent: "gold" | "mint" | "violet";
};

export const sectorDetails: Record<string, SectorDetail> = {
  "construction-infrastructure": {
    slug: "construction-infrastructure",
    name: "Construction & Infrastructure",
    eyebrow: "Construction & Infrastructure Project Controls",
    heroLines: ["Build the capability", "to control", "complex delivery."],
    heroLead:
      "Develop the project-controls capability your organisation needs across planning, scheduling, cost, risk, governance and decision support. Choose the pathway that matches the responsibility your people carry today—and the level they are preparing to reach next.",
    environments: ["Construction", "Civil engineering", "Infrastructure", "Transport & major projects"],
    challengeEyebrow: "The construction challenge",
    challengeTitle: "Data exists. Decision confidence often does not.",
    challengeBody:
      "Complex construction and infrastructure programmes become harder to control when schedules, cost forecasts, risk, change and governance operate as separate conversations. The result is late intervention, reactive reporting and reduced confidence at the point senior decisions must be made.",
    challengeStatement:
      "The purpose of project controls is not to create more reports. It is to make better intervention possible—earlier.",
    signals: [
      ["Fragmented baselines", "Scope, schedule and cost are not governed as one integrated promise."],
      ["Delayed warning signals", "Variance appears in reports after recovery options have narrowed."],
      ["Weak decision linkage", "Project data is presented without clear interpretation or recommendation."],
    ],
    foundationTitle: "One professional foundation across complex built environments.",
    foundationBody:
      "The same project-controls disciplines support different products, assets, production systems and regulatory environments. Select a direction to see how the delivery focus changes.",
    applications: ["Construction & civil engineering", "Transport & infrastructure", "Major capital programmes", "Built environment"],
    applicationTitle: "Keep design, sequence and delivery connected.",
    applicationBody:
      "Integrate design maturity, procurement, site logistics, commercial position and construction sequence into one decision-ready controls environment.",
    outputs: [
      ["Integrated project baseline", "Requirements, scope, work breakdown, milestones, design maturity and cost connected."],
      ["Schedule intelligence", "Logic-driven schedules, critical-path analysis and reliable progress measurement."],
      ["Cost and commercial dashboard", "Commitments, forecast, contingency, variance and commercial exposure made visible."],
      ["Risk, issue and change control", "Clear ownership, quantified impact, approval routes and recovery decisions."],
    ],
    roles: [
      ["Project Controls Engineer", "Integrates planning, cost, risk and change on complex projects."],
      ["Planning & Scheduling Engineer", "Builds and assures logic-driven delivery schedules."],
      ["Cost Engineer", "Controls forecast, commitments, variance and commercial insight."],
      ["Programme Controls Analyst", "Creates decision-ready performance and governance information."],
    ],
    accent: "gold",
  },
  "energy-utilities": {
    slug: "energy-utilities",
    name: "Energy & Utilities",
    eyebrow: "Energy & Utilities Project Controls",
    heroLines: ["Build the capability", "to control complex", "energy delivery."],
    heroLead:
      "Develop project-controls capability across power generation, renewables, electricity networks, utilities, energy transition and major capital programmes. Choose the pathway that matches the responsibility your people carry today—and the level they are preparing to reach next.",
    environments: ["Energy generation", "Renewables", "Networks & utilities", "Energy transition"],
    challengeEyebrow: "The energy delivery challenge",
    challengeTitle: "Energy programmes carry connected risks. Reporting often does not.",
    challengeBody:
      "Energy and utilities programmes become harder to control when technical scope, regulatory gates, outage windows, contractor interfaces, cost forecasts, risk, change and operational readiness are managed as separate conversations. Leaders need integrated controls that make high-consequence decisions visible earlier.",
    challengeStatement:
      "The purpose of project controls is not to produce more dashboards. It is to make safer, earlier and better-informed intervention possible.",
    signals: [
      ["Fragmented programme baselines", "Engineering, procurement, construction and commissioning are planned separately."],
      ["Late risk visibility", "Supply-chain, regulatory, safety and interface risks surface after options narrow."],
      ["Weak operational linkage", "Project reporting does not clearly connect delivery status to reliability and readiness."],
    ],
    foundationTitle: "One professional foundation across all levels of energy responsibility.",
    foundationBody:
      "Project controls connect investment decisions, technical delivery, regulatory assurance and operational outcomes across a fast-changing energy system.",
    applications: ["Renewables", "Power generation", "Networks & utilities", "Energy transition"],
    applicationTitle: "Control rapid growth across new technologies and changing interfaces.",
    applicationBody:
      "Create one reliable view across development, consent, engineering, procurement, construction, commissioning and operational handover.",
    outputs: [
      ["Portfolio investment baseline", "Approved scope, regulatory milestones, funding decisions and delivery assumptions connected."],
      ["Integrated energy schedule", "Consents, engineering, procurement, outages and commissioning logic made visible."],
      ["Risk and assurance view", "Safety, regulatory, environmental, interface and delivery risks linked to decisions."],
      ["Operational readiness dashboard", "Handover, asset information, testing and service-readiness evidence controlled."],
    ],
    roles: [
      ["Energy Project Controls Engineer", "Connects planning, cost, risk and performance across capital delivery."],
      ["Planning & Outage Scheduler", "Controls integrated schedules, constraints and critical operational windows."],
      ["Cost & Investment Analyst", "Supports affordability, forecast confidence and portfolio decisions."],
      ["Programme Controls Manager", "Leads integrated assurance and executive delivery insight."],
    ],
    accent: "mint",
  },
  "engineering-advanced-manufacturing": {
    slug: "engineering-advanced-manufacturing",
    name: "Engineering & Advanced Manufacturing",
    eyebrow: "Engineering & Advanced Manufacturing Sector",
    heroLines: ["Control complex", "engineering programmes", "with precision, integration", "and confidence."],
    heroLead:
      "Professional project-controls pathways for people who connect engineering design, production, supply-chain, quality, cost, schedule, risk, change and assurance across complex products, systems and assets.",
    environments: ["Engineering systems", "Advanced manufacturing", "Aerospace & defence", "Industrial programmes"],
    challengeEyebrow: "Project controls that protect engineering value",
    challengeTitle: "Deliver engineered systems with precision, predictability and controlled change.",
    challengeBody:
      "Engineering performance weakens when design maturity, configuration, supply-chain readiness, production sequence, cost and schedule are controlled in isolation. Integrated project controls create the evidence needed to manage trade-offs without losing technical intent.",
    challengeStatement:
      "Stable baselines. Better trade-offs. Production-ready outcomes. Project controls turn engineering complexity into governed decisions.",
    signals: [
      ["Unstable technical baselines", "Requirements, design maturity, cost and schedule move without one controlled view."],
      ["Disconnected change impacts", "Engineering changes are approved without full supply-chain or production impact."],
      ["Late production insight", "Readiness and constraint signals arrive after delivery commitments are at risk."],
    ],
    foundationTitle: "One professional foundation across complex engineering environments.",
    foundationBody:
      "The same project-controls disciplines support different products, assets, production systems and regulatory environments—from a design baseline through industrial delivery.",
    applications: ["Manufacturing", "Aerospace & defence", "Automation", "R&D programmes"],
    applicationTitle: "Keep engineering change, supply chain and production connected.",
    applicationBody:
      "Integrate configuration, technical maturity, supplier dependencies, production readiness and performance into one governed delivery picture.",
    outputs: [
      ["Integrated engineering baseline", "Requirements, scope, work breakdown, interfaces, design maturity and cost connected."],
      ["Design maturity and change view", "Configuration status, change impact and approval evidence made decision-ready."],
      ["Supply-chain and production plan", "Long-lead items, constraints, capacity and build sequence linked to milestones."],
      ["Quality, risk and assurance pack", "Technical risk, verification, quality evidence and governance decisions controlled."],
    ],
    roles: [
      ["Project Controls Engineer", "Integrates scope, schedule, cost, risk and change on engineering programmes."],
      ["Planning & Scheduling Engineer", "Connects design, supply-chain, production and verification milestones."],
      ["Engineering Programme Manager", "Balances technical outcomes with delivery performance and governance."],
      ["Engineering PMO / Portfolio Analyst", "Creates standards, assurance and decision-ready portfolio insight."],
    ],
    accent: "violet",
  },
};
