import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, expect, it, vi } from "vitest";
import BlogPage from "@/pages/BlogPage/page";
import { NewsArticleContent } from "@/pages/BlogPage/article";
import { filterNewsArticles, relatedNewsArticles } from "@/pages/BlogPage/catalogue";
import { newsArticles, newsCategories, newsHero, newsPath } from "@/pages/BlogPage/data";
import source from "./fixtures/news-source.json";

vi.mock("@/components/seo/RouteMeta", () => ({ RouteMeta: () => null }));

const plainText = (value: string) => value.replace(/<[^>]+>/g, " ").replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&quot;", '"').replace(/\s+/g, " ").trim();

describe("News source fidelity", () => {
  it("preserves every article, its order, complete body and metadata", () => {
    expect(newsArticles.map(article => article.id)).toEqual(source.articles.map(article => article.id));
    expect(newsCategories).toEqual(source.categories);
    for (const [index, article] of newsArticles.entries()) {
      const original = source.articles[index];
      expect(article).toMatchObject({
        id: original.id, title: original.title, excerpt: original.excerpt,
        category: original.category, date: original.date, author: original.author,
        readTime: original.readTime, body: original.body,
      });
      expect(article.keyPoints).toEqual(original.keyPoints);
      expect(article.featured).toBe(original.featured);
      expect(article.href).toBe(`${newsPath}/${original.id}`);
      expect(article.image).toBe(`/assets/images/news/${original.id}.webp`);
      expect(article.imageWidth).toBeGreaterThan(0);
      expect(article.imageHeight).toBeGreaterThan(0);
      expect(new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(article.publishedAt))).toBe(original.date);
    }
    expect(newsHero.image).toBe("/assets/images/news/hero.webp");
  });

  it("renders all ten articles, all source page sections and working local links", () => {
    const client = new QueryClient();
    const markup = renderToStaticMarkup(<QueryClientProvider client={client}><MemoryRouter><BlogPage /></MemoryRouter></QueryClientProvider>);
    const text = plainText(markup);
    expect(markup.match(/<h1\b/g)).toHaveLength(1);
    expect(markup.match(/<article\b/g)).toHaveLength(10);
    for (const article of source.articles) {
      expect(text).toContain(article.title);
      expect(text).toContain(article.excerpt);
      expect(text).toContain(article.date);
      expect(text).toContain(article.readTime);
      expect(markup).toContain(`href="${newsPath}/${article.id}"`);
      expect(markup).toContain(`src="/assets/images/news/${article.id}.webp"`);
    }
    // The user renamed the page label after the source import.
    for (const copy of ["Blogs & News", `${source.hero.title} ${source.hero.titleAccent}`, source.hero.description,
      source.catalogue.eyebrow, source.catalogue.title, source.catalogue.readAction,
      source.newsletter.eyebrow, source.newsletter.title, source.newsletter.description, source.newsletter.label,
      source.cta.eyebrow, source.cta.title, source.cta.description]) expect(text).toContain(copy);
    source.cta.actions.forEach(action => { expect(text).toContain(action.label); expect(markup).toContain(`href="${action.href}"`); });
    expect(markup).toContain(`placeholder="${source.newsletter.placeholder}"`);
    expect(markup).toContain('aria-pressed="true"');
    expect(markup).not.toMatch(/href="#"|line-clamp|data:image|readdy\.ai/);
    client.clear();
  });

  it.each(newsArticles)("renders every paragraph and key point for $id", article => {
    const markup = renderToStaticMarkup(<MemoryRouter><NewsArticleContent article={article} /></MemoryRouter>);
    const text = plainText(markup);
    const original = source.articles.find(item => item.id === article.id)!;
    expect(markup.match(/<h1\b/g)).toHaveLength(1);
    original.body.forEach(paragraph => expect(text).toContain(paragraph));
    original.keyPoints?.forEach(point => expect(text).toContain(point));
    expect(markup).toContain(`dateTime="${article.publishedAt}"`);
    expect(markup).toContain(`href="${newsPath}"`);
  });
});

describe("News category and related-reading behaviour", () => {
  it("keeps the featured story separate and filters every source category in source order", () => {
    expect(filterNewsArticles("All")).toHaveLength(9);
    for (const category of newsCategories) {
      expect(filterNewsArticles(category).map(article => article.id)).toEqual(source.articles.filter(article => !article.featured && (category === "All" || article.category === category)).map(article => article.id));
    }
  });

  it.each(newsArticles)("excludes $id from related reading and prioritises its category", article => {
    const related = relatedNewsArticles(article);
    const expected = [...source.articles.filter(item => item.id !== article.id && item.category === article.category), ...source.articles.filter(item => item.id !== article.id && item.category !== article.category)].slice(0, 3);
    expect(related.map(item => item.id)).toEqual(expected.map(item => item.id));
    expect(new Set(related.map(item => item.id)).size).toBe(3);
  });
});
