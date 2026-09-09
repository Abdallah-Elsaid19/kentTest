import { useCmsBindings } from "@/features/cms/publicContent";
import { useState } from "react";
import { Search } from "lucide-react";
import { ResourceCard } from "@/components/common/ResourceCard";
import { NavigationButton } from "@/components/navigation";
import { EmptyState } from "@/components/ui/AsyncState";
import { containerClass, sectionClass, SectionIntro } from "@/pages/FundingEligibilityPage/components/shared";
import { books, bookCategories, catalogue, type Book } from "../data";
import { filterBooks } from "../catalogue";

export function BookCatalogue({ onDetails }: { onDetails: (book: Book) => void }) {
  const cms = useCmsBindings(["bookshop"]);
  const cmsValues = cms.resolve({ books, bookCategories, catalogue });

  const [query, setQuery] = useState("");
  const visibleBooks = filterBooks(cmsValues.books, query, "all", cmsValues.bookCategories);
  return cms.render((
    <section id="releases" aria-labelledby="book-catalogue-title" className={`${sectionClass} scroll-mt-32 !bg-[#f7f4fa]`}>
      <div className={containerClass}>
        <SectionIntro id="book-catalogue-title" eyebrow={cmsValues.catalogue.eyebrow} title={cmsValues.catalogue.title} copy={cmsValues.catalogue.description} />
        <div className="mb-10 w-full">
          <label className="relative block">
            <span className="sr-only">{cmsValues.catalogue.searchLabel}</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={20} aria-hidden="true" />
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={cmsValues.catalogue.searchPlaceholder} aria-controls="book-results" className="min-h-14 w-full rounded-lg border border-kbc-purple-200 bg-white py-3 pl-12 pr-4 text-sm text-primary-dark outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          </label>
        </div>
        <p className="sr-only" role="status">{visibleBooks.length} {visibleBooks.length === 1 ? "book" : "books"} {cms.text("bookshop.pages_bookshop_page_component_book_catal_book_catalogue.text_001")}</p>
        <div id="book-results">
          {visibleBooks.length > 0 ? <div className="grid gap-6 md:grid-cols-2 [&>article]:border-2">
            {visibleBooks.map((book) => <ResourceCard key={book.id} title={book.title} eyebrow={book.kicker} description={book.description} image={book.image} imageAlt={book.imageAlt} imageWidth={book.imageWidth} imageHeight={book.imageHeight} actionLabel={cmsValues.catalogue.detailsAction} onDetails={() => onDetails(book)} />)}
          </div> : <div><EmptyState title={cmsValues.catalogue.emptyTitle} body={cmsValues.catalogue.emptyDescription} /><div className="text-center"><NavigationButton onClick={() => setQuery("")}>{cmsValues.catalogue.resetLabel}</NavigationButton></div></div>}
        </div>
      </div>
    </section>
  ));
}
