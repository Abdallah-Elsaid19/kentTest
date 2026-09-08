import { RouteMeta } from "@/components/seo/RouteMeta";
import { PageHero } from "@/components/ui/PageHero";
import { ArticleCollection } from "./component/ArticleCollection";
import { NewsCta, NewsNewsletter } from "./component/NewsSupport";
import { newsHero } from "./data";

export default function BlogPage() {
  return (
    <div className="kbc-figma-home overflow-x-clip bg-white font-body text-kbc-purple-950">
      <RouteMeta fallbackTitle={`${newsHero.eyebrow} | Kent Business College`} fallbackDescription={newsHero.description} />
      <PageHero className="kbc-page-hero-offset" eyebrow={newsHero.eyebrow} title={<>{newsHero.title} <span className="text-kbc-gold-400">{newsHero.titleAccent}</span></>} summary={newsHero.description} image={newsHero.image} />
      <ArticleCollection />
      <NewsNewsletter />
      <NewsCta />
    </div>
  );
}
