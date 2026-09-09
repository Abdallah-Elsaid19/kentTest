import { useCmsBindings } from "@/features/cms/publicContent";
import { useId } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Dialog } from "@/components/ui/Dialog";
import { NavigationButton } from "@/components/navigation";
import { bookMetadata, catalogue, type Book } from "../data";

export function BookDetails({ book, onClose }: { book: Book; onClose: () => void }) {
  const cms = useCmsBindings(["bookshop"]);
  const cmsValues = cms.resolve({ bookMetadata, catalogue });

  const titleId = useId();
  const descriptionId = useId();
  return cms.render((
    <Dialog titleId={titleId} descriptionId={descriptionId} onClose={onClose} wide>
      <div className="mb-4 flex justify-end">
        <button type="button" onClick={onClose} aria-label={cms.text("bookshop.pages_bookshop_page_component_book_detai_book_details.aria_label_001")} className="grid size-11 place-items-center rounded-lg bg-kbc-purple-50 text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><X size={22} aria-hidden="true" /></button>
      </div>
      <div className="grid items-start gap-7 md:grid-cols-[.8fr_1.2fr] md:gap-10">
        <div className="rounded-xl bg-[#f7f4fa] p-5 sm:p-7">
          <img src={book.image} alt={book.title} width={book.imageWidth} height={book.imageHeight} className="mx-auto max-h-64 w-full object-contain md:max-h-[480px]" decoding="async" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase leading-6 tracking-widest text-primary">{book.kicker}</p>
          <h2 id={titleId} className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-primary-dark sm:text-4xl">{book.title}</h2>
          <p id={descriptionId} className="mt-5 text-sm leading-7 text-[#756F79] sm:text-base">{book.detailDescription}</p>
          <dl className="my-7 divide-y divide-kbc-purple-100 border-y border-kbc-purple-100">
            {cmsValues.bookMetadata.map(({ label, value }) => <div key={label} className="flex flex-wrap justify-between gap-3 py-4 text-sm"><dt className="text-[#756F79]">{label}</dt><dd className="font-semibold text-primary-dark">{value}</dd></div>)}
          </dl>
          <NavigationButton to={cmsValues.catalogue.requestHref} newTab className="w-full gap-2">{cmsValues.catalogue.requestAction}<ArrowUpRight size={17} aria-hidden="true" /></NavigationButton>
        </div>
      </div>
    </Dialog>
  ));
}
