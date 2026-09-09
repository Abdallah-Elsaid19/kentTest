import { useCmsBindings } from "@/features/cms/publicContent";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { PageHero } from "@/components/ui/PageHero";
import { ArticleCollection } from "./component/ArticleCollection";
import { NewsCta, NewsNewsletter } from "./component/NewsSupport";
import { newsHero } from "./data";

export default function BlogPage() {
  const cms = useCmsBindings(["news"]);
  const cmsValues = cms.resolve({ newsHero });

  return cms.render((
    <div className="kbc-figma-home overflow-x-clip bg-white font-body text-kbc-purple-950">
      <RouteMeta fallbackTitle={`${cmsValues.newsHero.eyebrow} | Kent Business College`} fallbackDescription={cmsValues.newsHero.description} />
      <PageHero className="kbc-page-hero-offset" eyebrow={cmsValues.newsHero.eyebrow} title={<>{cmsValues.newsHero.title} <span className="text-kbc-gold-400">{cmsValues.newsHero.titleAccent}</span></>} summary={cmsValues.newsHero.description} image={cmsValues.newsHero.image} />
      <ArticleCollection />
      <NewsNewsletter />
      <NewsCta />
    </div>
  ));
}
