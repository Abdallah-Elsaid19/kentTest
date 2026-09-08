import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import CharteredPathwayPage from '@/pages/CharteredPathwayPage/page';
import { checkerData, finalCTA, fundingData, pageNavigation } from '@/pages/CharteredPathwayPage/data';
import { meetsInitialIndicators } from '@/pages/CharteredPathwayPage/eligibility';
import sourceInventory from './fixtures/charteredPathwaySource.json';

vi.mock('@/components/seo/RouteMeta', () => ({RouteMeta: () => null}));
vi.mock('@/features/content/queries', () => ({useEvents: () => ({data: undefined, isLoading: false, isError: false})}));
const markup = () => renderToStaticMarkup(<MemoryRouter><CharteredPathwayPage /></MemoryRouter>);
const plain = (html: string) => html.replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#x27;|&#39;/g,"'").replace(/&gt;/g,'>').replace(/&lt;/g,'<').replace(/\s+/g,' ').trim();
const removedSourceBlocks = new Set([
  'SELECT PORTFOLIO MANAGEMENT',
  'SELECT EARNED VALUE MANAGEMENT',
  fundingData.notesTitle,
  ...fundingData.mobileRoutes.flatMap(route => [route.title, route.description]),
  finalCTA.note,
  ...finalCTA.items,
]);

describe('Chartered Pathway source fidelity and structure', () => {
  it('preserves retained official content, including hidden source details', () => {
    const content = plain(markup());
    // Employer logos, funding accordions and non-functional elective buttons were explicitly removed at the user's request.
    const removedSections = new Set(['trusted-employers', 'funding-details', 'kbc-events']);
    const missing = sourceInventory.filter(section => !removedSections.has(section.section)).flatMap(section => section.blocks.filter(block => !removedSourceBlocks.has(block) && !content.includes(block.replace(/\s+/g,' ').trim())).map(block=>`${section.section}: ${block}`));
    expect(missing).toEqual([]);
  });
  it('has one H1, unique IDs, resolvable anchors and accessible controls', () => {
    const html = markup();
    expect(html.match(/<h1\b/g)).toHaveLength(1);
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match=>match[1]);
    expect(new Set(ids).size).toBe(ids.length);
    for (const link of pageNavigation) expect(ids).toContain(link.href.slice(1));
    for (const match of html.matchAll(/href="#([^"]+)"/g)) expect(ids).toContain(match[1]);
    for (const match of html.matchAll(/aria-(?:labelledby|controls)="([^"]+)"/g)) expect(ids).toContain(match[1]);
    expect(html).toContain('id="kbc-eligibility-form"');
    expect(html).toContain('type="radio"');
    expect(html).toContain('inert="" aria-hidden="true"');
    expect(html).not.toMatch(/Operational Pathway|Strategic Pathway|£34,000|27 months|Choose your preferred start date|Download Catalogue/);
  });
});

describe('Source eligibility indication', () => {
  const qualifying = {livingUk:'yes',residentThreeYears:'yes',paidEmploymentEngland:'yes',weeklyHours:'30+',fiftyPercentEngland:'yes',employerBasedEngland:'yes',otherFundedTraining:'yes',selfEmployed:'yes'};
  it('matches the eight source questions and allows both stated working-hour bands', () => {
    expect(checkerData.steps.reduce((count,step)=>count+step.questions.length,0)).toBe(8);
    expect(meetsInitialIndicators(qualifying)).toBe(true);
    expect(meetsInitialIndicators({...qualifying,weeklyHours:'16-29'})).toBe(true);
    expect(checkerData.positive.title).toBe('You appear to meet the initial eligibility indicators');
  });
  it('does not treat missing, negative, uncertain or other-hours answers as approval', () => {
    expect(meetsInitialIndicators({})).toBe(false);
    for (const key of Object.keys(qualifying)) {
      for (const value of ['', 'no', 'not-sure', 'other']) expect(meetsInitialIndicators({...qualifying,[key]:value})).toBe(false);
    }
  });
});
