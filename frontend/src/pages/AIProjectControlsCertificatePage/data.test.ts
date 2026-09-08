import { describe, expect, it } from "vitest";

import {
  architectureData,
  capstoneData,
  curriculumData,
  faqs,
  heroData,
  outcomesData,
  pageNavigation,
  toolStackData,
} from "./data";

describe("AI in Project Controls Certificate content", () => {
  it("keeps the programme facts and complete learning journey", () => {
    expect(`${heroData.hero.title} ${heroData.hero.accent}`).toBe("AI in Project Controls Certificate");
    expect(heroData.highlights).toEqual([
      { title: "14 sessions", description: "Live, practical and tutor-led." },
      { title: "28 live hours", description: "Two hours in each guided session." },
      { title: "7 modules", description: "A structured four-month build journey." },
      { title: "1 capstone", description: "A workplace solution or controlled prototype." },
    ]);
    expect(curriculumData.modules).toHaveLength(7);
    expect(curriculumData.modules.flatMap((module) => module.sessions)).toHaveLength(14);
  });

  it("contains every required outcome, capstone and FAQ", () => {
    expect(outcomesData.items).toHaveLength(10);
    expect(capstoneData.items).toHaveLength(6);
    expect(faqs).toHaveLength(6);
  });

  it("models the governed solution architecture and named tool stack", () => {
    expect(architectureData.stages.map((stage) => stage.title)).toEqual([
      "Connect",
      "Orchestrate",
      "Govern",
      "Deliver",
    ]);
    expect(architectureData.stages.flatMap((stage) => stage.nodes)).toHaveLength(9);
    expect(toolStackData.items.map((tool) => tool.title)).toEqual([
      "ChatGPT",
      "Claude",
      "n8n",
      "Google Sheets",
      "Lovable",
      "Project applications and APIs",
    ]);
  });

  it("keeps navigation anchors unique and aligned to page sections", () => {
    const ids = pageNavigation.map((item) => item.href.replace("#", ""));
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids).toContain("ai-faq");
  });
});
