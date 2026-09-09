import { useCmsBindings } from "@/features/cms/publicContent";
import { useState } from "react";
import { CalendarDays, Clock3, UserRound } from "lucide-react";
import { ResourceCard } from "@/components/common/ResourceCard";
import { NavigationTabButton } from "@/components/navigation";
import { SectionIntro, containerClass, sectionClass } from "@/pages/FundingEligibilityPage/components/shared";
import { filterNewsArticles } from "../catalogue";
import { newsArticles, newsCatalogue, newsCategories, type NewsArticle, type NewsCategory } from "../data";

export function ArticleMetadata({ article }: { article: NewsArticle }) {
  const cms = useCmsBindings(["news"]);

  return cms.render(<>
    <span className="inline-flex items-center gap-2"><UserRound size={15} aria-hidden="true" />{article.author}</span>
    <time dateTime={article.publishedAt} className="inline-flex items-center gap-2"><CalendarDays size={15} aria-hidden="true" />{article.date}</time>
    <span className="inline-flex items-center gap-2"><Clock3 size={15} aria-hidden="true" />{article.readTime}</span>
  </>);
}

export function ArticleResource({ article, featured = false }: { article: NewsArticle; featured?: boolean }) {
  const cms = useCmsBindings(["news"]);
  const cmsValues = cms.resolve({ newsCatalogue });

  return cms.render(<ResourceCard
    title={article.title}
    eyebrow={article.category}
    description={article.excerpt}
    image={article.image}
    imageAlt={article.title}
    imageWidth={article.imageWidth}
    imageHeight={article.imageHeight}
    imageFit="cover"
    featured={featured}
    metadata={<ArticleMetadata article={article} />}
    actionLabel={cmsValues.newsCatalogue.readAction}
    href={article.href}
  />);
}

export function ArticleCollection() {
  const cms = useCmsBindings(["news"]);
  const cmsValues = cms.resolve({ newsArticles, newsCatalogue, newsCategories });

  const [category, setCategory] = useState<NewsCategory>("All");
  const articles = filterNewsArticles(category, cmsValues.newsArticles);
  const featured = cmsValues.newsArticles.find(article => article.featured);

  return cms.render((
    <section className={sectionClass} aria-labelledby="news-catalogue-title">
      <div className={containerClass}>
        {featured && <ArticleResource article={featured} featured />}
        <div className="mt-20 border-t border-kbc-purple-100 pt-12">
          <SectionIntro id="news-catalogue-title" eyebrow={cmsValues.newsCatalogue.eyebrow} title={cmsValues.newsCatalogue.title} align="left" spaced={false} />
          <div role="group" aria-label={cms.text("news.pages_blog_page_component_article_collec_article_collection.aria_label_001")} className="my-8 flex flex-wrap gap-2">
            {cmsValues.newsCategories.map(item => <NavigationTabButton key={item} active={category === item} aria-pressed={category === item} aria-controls="news-results" onClick={() => setCategory(item)}>{item}</NavigationTabButton>)}
          </div>
          <div id="news-results" className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map(article => <ArticleResource key={article.id} article={article} />)}
          </div>
          <p role="status" className={articles.length ? "sr-only" : "rounded-2xl border border-dashed border-kbc-purple-200 py-16 text-center text-kbc-dark-600"}>
            {articles.length ? `${category}: ${articles.length} articles` : cmsValues.newsCatalogue.empty}
          </p>
        </div>
      </div>
    </section>
  ));
}
