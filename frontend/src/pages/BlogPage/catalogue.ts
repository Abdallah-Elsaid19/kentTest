import { newsArticles, type NewsArticle, type NewsCategory } from "./data";

export function filterNewsArticles(category: NewsCategory): readonly NewsArticle[] {
  return newsArticles.filter(article => !article.featured && (category === "All" || article.category === category));
}

export function relatedNewsArticles(article: NewsArticle) {
  return [
    ...newsArticles.filter(item => item.id !== article.id && item.category === article.category),
    ...newsArticles.filter(item => item.id !== article.id && item.category !== article.category),
  ].slice(0, 3);
}
