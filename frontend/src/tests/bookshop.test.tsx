import { bookCategories as categoryTemplates } from "@/pages/BookshopPage/data";
import { resolvedFixture } from "./cmsFixtures";
import { renderToStaticMarkup } from "./cmsFixtures";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import BookshopPage from "@/pages/BookshopPage/page";
import { BookDetails } from "@/pages/BookshopPage/component/BookDetails";
import { books as booksTemplate } from "@/pages/BookshopPage/data";
import { filterBooks as filterBookData } from "@/pages/BookshopPage/catalogue";
import source from "./fixtures/bookshop-source.html?raw";

vi.mock("@/components/seo/RouteMeta", () => ({ RouteMeta: () => null }));

const plainText = (value: string) => value.replace(/<[^>]+>/g, " ").replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&quot;", '"').replace(/\s+/g, " ").trim();

// User-supplied replacement covers; retain the original fixture for copy provenance.
const replacementCovers: Record<string, string> = {
  "/assets/images/bookshop/social-media-marketing-executive.jpg": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/a6f2eabd6d8a47b6a2844dca0d7fae06.webp",
  "/assets/images/bookshop/marketing-strategy-planning.jpg": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/2690dd5dafe74a679b3f56f3f268b33f.webp",
};

describe("Bookshop source fidelity", () => {
  it("preserves public source content for the two retained books", () => {
    const markup = renderToStaticMarkup(<MemoryRouter><BookshopPage /></MemoryRouter>);
    const pageText = plainText(markup);
    // The user explicitly removed the study edition after the source import.
    const sourceMain = source.split('<main id="top">')[1].split("</main>")[0]
      .replace(/<article class="book-card"(?:(?!<\/article>)[\s\S])*data-book="social-study"[\s\S]*?<\/article>/, "");
    const content = [...sourceMain.matchAll(/<(?:h[1-3]|p)\b[^>]*>([\s\S]*?)<\/(?:h[1-3]|p)>/g)].map((match) => plainText(match[1]));
    content.filter((copy) => !copy.includes("ready-to-customise")).forEach((copy) => expect(pageText).toContain(copy.replace("search box or filters", "search box")));
    expect(markup).not.toContain('aria-label="Book categories"');
    const cards = [...sourceMain.matchAll(/<article class="book-card"[\s\S]*?<\/article>/g)];
    expect(cards).toHaveLength(2);
    expect(books.map((book) => book.id)).toEqual(["social", "strategy"]);
    expect(pageText).not.toContain("Study Edition");
    cards.forEach(([card], index) => {
      const image = card.match(/<img src="([^"]+)"/)!;
      const title = plainText(card.match(/<h3>(.*?)<\/h3>/)![1]);
      expect(books[index].image).toBe(replacementCovers[image[1]]);
      expect(books[index].title).toBe(title);
      expect(markup).toContain(`src="${replacementCovers[image[1]]}"`);
    });
    expect(markup.match(/<h1\b/g)).toHaveLength(1);
    expect(markup).toContain('href="#releases"');
    expect(markup).toContain('href="#featured"');
    expect(markup).toContain('href="/contact"');
    expect(markup).not.toContain("data:image");
    expect(markup).not.toContain('src="/assets/images/bookshop/');
    expect(pageText).not.toMatch(/ready-to-customise|checkout|stock status|Demo bookshop/);
  });

  it.each(books)("shows the selected $id book with its distinct source modal description", (book) => {
    const markup = renderToStaticMarkup(<MemoryRouter><BookDetails book={book} onClose={() => {}} /></MemoryRouter>);
    const text = plainText(markup);
    const sourceEntry = source.slice(source.indexOf("const books =")).match(new RegExp(`(?:'${book.id}'|\\b${book.id}):\\s*\\{([\\s\\S]*?)\\n      \\}`))![1];
    const description = sourceEntry.match(/description: '([^']*)'/)![1];
    expect(text).toContain(description);
    expect(text).toContain(book.title);
    expect(text).toContain(book.kicker);
    expect(markup).toContain(`src="${book.image}"`);
    expect(markup).toContain("<dialog");
    expect(markup).toContain("aria-labelledby=");
    ["Format", "Handbook", "Availability", "Contact KBC", "Pricing", "On request", "Request a copy"].forEach((copy) => expect(text).toContain(copy));
    expect(markup).toContain('href="/contact"');
  });
});

describe("Bookshop search and filters", () => {
  it("combines category and case-insensitive trimmed search", () => {
    expect(filterBooks(books, "  STRATEGY  ", "level6").map((book) => book.id)).toEqual(["strategy"]);
    expect(filterBooks(books, "strategy", "social")).toEqual([]);
    expect(filterBooks(books, "", "level4")).toHaveLength(2);
    expect(filterBooks(books, "", "social").map((book) => book.id)).toEqual(["social"]);
  });

  it("searches descriptions, level labels and source search keywords", () => {
    expect(filterBooks(books, "planning structure", "all").map((book) => book.id)).toEqual(["strategy"]);
    expect(filterBooks(books, "Level 6", "all").map((book) => book.id)).toEqual(["strategy"]);
    expect(filterBooks(books, "study edition", "all")).toEqual([]);
    expect(filterBooks(books, "nonexistent book", "all")).toEqual([]);
    expect(filterBooks(books, "", "all")).toHaveLength(2);
  });
});

const { books } = resolvedFixture({ books: booksTemplate });

const filterBooks: typeof filterBookData = (books, query, category) => filterBookData(books, query, category, resolvedFixture(categoryTemplates));
