import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import GovernanceBoardPage from "@/pages/GovernanceBoardPage/page";
import {
  expressionOfInterest,
  fundingAndQualityAssurance,
  governanceAccountability,
  governanceMembers,
  governanceOverview,
  governanceStructure,
  oversightAndAssurance,
  providerStatus,
  safeguardingAndPrevent,
} from "@/pages/GovernanceBoardPage/data";

vi.mock("@/components/seo/RouteMeta", () => ({ RouteMeta: () => null }));

const decodeEntities = (value: string) => value
  .replaceAll("&#x27;", "'")
  .replaceAll("&amp;", "&")
  .replaceAll("&quot;", '"')
  .replaceAll("&lt;", "<")
  .replaceAll("&gt;", ">");

const plainText = (markup: string) => decodeEntities(markup.replace(/<[^>]+>/g, " "))
  .replace(/\s+/g, " ")
  .trim();

const expectText = (pageText: string, value: string) => {
  expect(pageText).toContain(value.replace(/\s+/g, " ").trim());
};

describe("Governance Board page", () => {
  it("renders the complete source-grounded governance content and form integration", () => {
    const markup = renderToStaticMarkup(<MemoryRouter><GovernanceBoardPage /></MemoryRouter>);
    const pageText = plainText(markup);

    expect(markup.match(/<h1\b/g)).toHaveLength(1);
    expectText(pageText, "Governance Board Current Governance and Oversight");

    expectText(pageText, providerStatus.title);
    expectText(pageText, providerStatus.description);
    providerStatus.items.forEach((item) => {
      expectText(pageText, item.label);
      expectText(pageText, item.value);
    });

    expectText(pageText, governanceOverview.title);
    governanceOverview.paragraphs.forEach((paragraph) => expectText(pageText, paragraph));
    expectText(pageText, governanceOverview.keyDetailsTitle);
    governanceOverview.keyDetails.forEach((detail) => {
      expectText(pageText, detail.label);
      expectText(pageText, detail.value);
    });

    expectText(pageText, governanceStructure.title);
    expectText(pageText, governanceStructure.description);
    governanceStructure.items.forEach((item) => {
      expectText(pageText, item.eyebrow);
      expectText(pageText, item.title);
      expectText(pageText, item.description);
    });

    expectText(pageText, governanceMembers.title);
    expectText(pageText, governanceMembers.description);
    governanceMembers.items.forEach((member) => {
      expectText(pageText, member.name);
      expectText(pageText, member.role);
      expectText(pageText, member.description);
      expect(markup).toContain(`src="${member.image}"`);
    });

    expectText(pageText, oversightAndAssurance.title);
    expectText(pageText, oversightAndAssurance.description);
    oversightAndAssurance.items.forEach((item) => {
      expectText(pageText, item.title);
      expectText(pageText, item.description);
    });

    expectText(pageText, governanceAccountability.title);
    governanceAccountability.columns.forEach((column) => expectText(pageText, column));
    governanceAccountability.rows.forEach((row) => {
      expectText(pageText, row.role);
      expectText(pageText, row.responsibility);
      expectText(pageText, row.connection);
    });
    expect(markup).toContain("<table");
    expect(markup).toContain("<caption");

    expectText(pageText, fundingAndQualityAssurance.title);
    fundingAndQualityAssurance.paragraphs.forEach((paragraph) => expectText(pageText, paragraph));
    expectText(pageText, safeguardingAndPrevent.title);
    safeguardingAndPrevent.details.forEach((detail) => {
      expectText(pageText, detail.label);
      expectText(pageText, detail.value);
    });
    expectText(pageText, safeguardingAndPrevent.publicInformation.label);
    expectText(pageText, safeguardingAndPrevent.publicInformation.action);

    expectText(pageText, expressionOfInterest.title);
    expectText(pageText, expressionOfInterest.description);
    expect(markup).toContain(expressionOfInterest.form.formPerma);
    expect(markup).toContain(`title="${expressionOfInterest.form.title}"`);
  });
});
