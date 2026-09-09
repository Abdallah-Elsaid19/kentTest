import { useCmsBindings } from "@/features/cms/publicContent";
import { useState } from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { environment } from "@/app/environment";
import { CollegeCtaPanel } from "@/components/college/CollegeCtaPanel";
import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { containerClass, sectionClass } from "@/pages/FundingEligibilityPage/components/shared";
import { BookCatalogue } from "./component/BookCatalogue";
import { BookDetails } from "./component/BookDetails";
import { BookshopHero, FeaturedBookSection } from "./component/BookshopIntroduction";
import { bookshopSeo, catalogue, cohortCta, type Book } from "./data";

export default function BookshopPage() {
  const cms = useCmsBindings(["bookshop"]);
  const cmsValues = cms.resolve({ bookshopSeo, cohortCta, catalogue });

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  return cms.render((
    <div className="kbc-figma-home bg-white font-body text-[#24152f] motion-reduce:[&_*]:!duration-[.01ms]">
      <RouteMeta fallbackTitle={cmsValues.bookshopSeo.title} fallbackDescription={cmsValues.bookshopSeo.description} seo={{ ...cmsValues.bookshopSeo, canonical: `${environment.VITE_SITE_URL}/bookshop` }} />
      <BookshopHero />
      <FeaturedBookSection onDetails={setSelectedBook} />
      <BookCatalogue onDetails={setSelectedBook} />
      <section className={sectionClass} aria-labelledby="bookshop-cohort-title">
        <div className={containerClass}>
          <CollegeCtaPanel id="bookshop-cohort-title" eyebrow={cmsValues.bookshopSeo.title} title={cmsValues.cohortCta.title} actions={<>
            <NavigationButton to={cmsValues.catalogue.requestHref} newTab variant="accent" className="gap-2 !bg-[#F5C94F] !text-primary-dark">{cmsValues.catalogue.requestAction}<ArrowUpRight size={17} aria-hidden="true" /></NavigationButton>
            <NavigationButton to={cms.text("bookshop.pages_bookshop_page_page_bookshop_page.to_001")} variant="inverse" className="gap-2">{cmsValues.cohortCta.backLabel}<ArrowUp size={17} aria-hidden="true" /></NavigationButton>
          </>} />
        </div>
      </section>
      {selectedBook && <BookDetails book={selectedBook} onClose={() => setSelectedBook(null)} />}
    </div>
  ));
}
