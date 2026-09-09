import { bookCategories, type Book, type BookCategory } from "./data";

export function filterBooks(books: readonly Book[], query: string, category: BookCategory, categories = bookCategories): readonly Book[] {
  const search = query.trim().toLocaleLowerCase("en-GB");
  return books.filter((book) => {
    const matchesCategory = category === "all" || book.categories.includes(category);
    const categoryNames = categories.filter((item) => item.key !== "all" && book.categories.includes(item.key)).map((item) => item.label);
    const searchable = [book.title, book.kicker, book.description, book.detailDescription, book.searchTerms, ...categoryNames].join(" ").toLocaleLowerCase("en-GB");
    return matchesCategory && (!search || searchable.includes(search));
  });
}
