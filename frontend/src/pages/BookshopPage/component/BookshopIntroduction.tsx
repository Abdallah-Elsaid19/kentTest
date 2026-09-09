import { useCmsBindings } from "@/features/cms/publicContent";
import { ArrowDown, ArrowUpRight, BookOpen } from "lucide-react";
import { NavigationButton } from "@/components/navigation";
import { containerClass, goldSectionEyebrowClass, sectionClass, SectionIntro } from "@/pages/FundingEligibilityPage/components/shared";
import { appliedLearning, books, bookshopHero, catalogue, featuredTitle, type Book } from "../data";
import { BookHeroCover } from "./BookHeroCover";

const featuredBook = books.find((book) => book.id === featuredTitle.bookId)!;

export function BookshopHero() {
  const cms = useCmsBindings(["bookshop"]);
  const cmsValues = cms.resolve({ bookshopHero });

  return cms.render((
    <section id="top" aria-labelledby="bookshop-title" className="kbc-page-hero-offset relative isolate overflow-hidden bg-primary pb-16 text-white sm:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary to-primary-dark" aria-hidden="true" />
      <div className={`${containerClass} grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16`}>
        <div className="max-w-2xl text-center lg:text-left">
          <p className={`${goldSectionEyebrowClass} !mx-auto lg:!mx-0`}>{cmsValues.bookshopHero.eyebrow}</p>
          <h1 id="bookshop-title" className="mt-6 text-5xl !font-medium !leading-[1.05] !tracking-tight !text-white sm:text-7xl lg:text-8xl">{cmsValues.bookshopHero.title}</h1>
          <p className="mt-7 text-base leading-8 text-white/80 sm:text-lg">{cmsValues.bookshopHero.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            {cmsValues.bookshopHero.actions.map((action, index) => <NavigationButton key={action.href} to={action.href} variant={index === 0 ? "accent" : "inverse"} className={`gap-2 ${index === 0 ? "!bg-[#F5C94F] !text-primary-dark hover:!bg-[#ffda69]" : ""}`}>{action.label}<ArrowDown size={17} aria-hidden="true" /></NavigationButton>)}
          </div>
        </div>
        <BookHeroCover cover={cmsValues.bookshopHero.cover} />
      </div>
    </section>
  ));
}

export function FeaturedBookSection({ onDetails }: { onDetails: (book: Book) => void }) {
  const cms = useCmsBindings(["bookshop"]);
  const cmsValues = cms.resolve({ featuredTitle, featuredBook, catalogue, appliedLearning });

  return cms.render((
    <section id="featured" aria-labelledby="featured-book-title" className={`${sectionClass} scroll-mt-32`}>
      <div className={containerClass}>
        <SectionIntro id="featured-book-title" eyebrow={cmsValues.featuredTitle.eyebrow} title={cmsValues.featuredBook.title} copy={cmsValues.featuredTitle.description} />
        <article className="grid overflow-hidden rounded-[28px_10px] border border-kbc-purple-100 bg-white md:grid-cols-2">
          <div className="flex items-center justify-center bg-[#f7f4fa] p-8 sm:p-12">
            <img src={cmsValues.featuredBook.image} alt={cms.text("bookshop.pages_bookshop_page_component_bookshop_i_featured_book_section.alt_001")} width={cmsValues.featuredBook.imageWidth} height={cmsValues.featuredBook.imageHeight} loading="lazy" decoding="async" className="max-h-[440px] w-full object-contain" />
          </div>
          <div className="flex flex-col items-start justify-center p-7 sm:p-10 lg:p-14">
            <p className="rounded-lg bg-kbc-purple-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">{cmsValues.featuredTitle.badge}</p>
            <h3 className="mt-6 text-3xl !font-semibold !leading-tight tracking-tight text-primary-dark sm:text-4xl">{cmsValues.featuredBook.title}</h3>
            <p className="mt-6 text-base leading-8 text-[#756F79]">{cmsValues.featuredTitle.copy}</p>
            <NavigationButton className="mt-8 w-full gap-2 sm:w-auto" onClick={() => onDetails(cmsValues.featuredBook)}>{cmsValues.catalogue.detailsAction}<ArrowUpRight size={17} aria-hidden="true" /></NavigationButton>
          </div>
        </article>
        <aside id="about" aria-labelledby="applied-learning-title" className="mt-10 flex scroll-mt-32 flex-col items-start gap-5 border-y border-kbc-purple-100 py-8 sm:flex-row sm:items-center sm:gap-7">
          <span className="flex shrink-0 items-center gap-3 rounded-xl bg-kbc-purple-50 p-4 font-bold text-primary"><BookOpen size={24} aria-hidden="true" />{cmsValues.appliedLearning.mark}</span>
          <div><h3 id="applied-learning-title" className="text-xl !font-semibold text-primary-dark">{cmsValues.appliedLearning.title}</h3><p className="mt-2 max-w-4xl text-sm leading-7 text-[#756F79]">{cmsValues.appliedLearning.description}</p></div>
        </aside>
      </div>
    </section>
  ));
}
