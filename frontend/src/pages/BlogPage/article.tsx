import { useCmsBindings } from "@/features/cms/publicContent";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Check } from "lucide-react";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { PageHero } from "@/components/ui/PageHero";
import { ArrowLink, NavigationButton } from "@/components/navigation";
import { SectionIntro, containerClass, sectionClass } from "@/pages/FundingEligibilityPage/components/shared";
import { ArticleMetadata, ArticleResource } from "./component/ArticleCollection";
import { NewsCta } from "./component/NewsSupport";
import { relatedNewsArticles } from "./catalogue";
import { newsArticles, newsDetail, newsHero, newsPath, type NewsArticle } from "./data";

export function NewsArticleContent({ article }: { article: NewsArticle }) {
  const cms = useCmsBindings(["news"]);
  const cmsValues = cms.resolve({ newsPath, newsHero, newsDetail, newsArticles });

  const related = relatedNewsArticles(article, cmsValues.newsArticles);
  return cms.render((
    <div className="kbc-figma-home overflow-x-clip bg-white font-body text-kbc-purple-950">
      <RouteMeta fallbackTitle={`${article.title} | Kent Business College`} fallbackDescription={article.excerpt} />
      <PageHero className="kbc-page-hero-offset" eyebrow={article.category} title={article.title} summary={article.excerpt} />
      <article className={sectionClass}>
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb"><ArrowLink to={cmsValues.newsPath} direction="up-right" className="rounded-sm text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{cmsValues.newsHero.eyebrow}</ArrowLink></nav>
          <div className="mb-8 mt-4 flex flex-wrap gap-x-6 gap-y-3 border-y border-kbc-purple-100 py-5 text-sm text-kbc-dark-600"><ArticleMetadata article={article} /></div>
          <img src={article.image} alt={article.title} width={article.imageWidth} height={article.imageHeight} loading="lazy" decoding="async" className="aspect-[16/10] w-full rounded-2xl object-cover object-top" />
          <div className="mx-auto mt-12 max-w-3xl space-y-7 text-base leading-8 text-kbc-dark-700 sm:text-lg">
            {article.body.map((paragraph, index) => <Fragment key={paragraph}>
              <p>{paragraph}</p>
              {index === 1 && article.keyPoints?.length && <aside className="rounded-2xl border-l-4 border-kbc-gold-500 bg-kbc-purple-50 p-6 sm:p-8" aria-labelledby="article-key-points">
                <h2 id="article-key-points" className="!text-2xl !font-semibold text-primary-dark">{cmsValues.newsDetail.keyPoints}</h2>
                <ul className="mt-5 space-y-4 text-base leading-7">{article.keyPoints.map(point => <li key={point} className="flex gap-3"><Check size={20} aria-hidden="true" className="mt-1 shrink-0 text-primary" /><span>{point}</span></li>)}</ul>
              </aside>}
            </Fragment>)}
          </div>
        </div>
      </article>
      <section className={`${sectionClass} !bg-kbc-purple-50`} aria-labelledby="related-news-title">
        <div className={containerClass}>
          <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionIntro id="related-news-title" eyebrow={cmsValues.newsDetail.relatedEyebrow} title={cmsValues.newsDetail.relatedTitle} align="left" spaced={false} />
            <NavigationButton to={cmsValues.newsPath} variant="secondary" className="shrink-0">{cmsValues.newsDetail.allAction}</NavigationButton>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map(item => <ArticleResource key={item.id} article={item} />)}</div>
        </div>
      </section>
      <NewsCta />
    </div>
  ));
}

export default function NewsArticlePage() {
  const cms = useCmsBindings(["news"]);
  const cmsValues = cms.resolve({ newsArticles, newsDetail, newsPath });

  const { articleSlug } = useParams();
  const article = cmsValues.newsArticles.find(item => item.id === articleSlug);
  if (!article) return cms.render(<>
    <RouteMeta fallbackTitle={cmsValues.newsDetail.notFoundTitle} seo={{ robots: "noindex,follow" }} />
    <PageHero className="kbc-page-hero-offset" title={cmsValues.newsDetail.notFoundTitle} summary={cmsValues.newsDetail.notFoundDescription} />
    <div className="px-5 py-12 text-center"><NavigationButton to={cmsValues.newsPath}>{cmsValues.newsDetail.backAction}</NavigationButton></div>
  </>);
  return cms.render(<NewsArticleContent article={article} />);
}
