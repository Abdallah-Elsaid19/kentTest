import { useCmsBindings } from "@/features/cms/publicContent";
import type { Book } from "../data";

export function BookHeroCover({ cover }: { cover: Pick<Book, "image" | "imageAlt" | "imageWidth" | "imageHeight"> }) {
  const cms = useCmsBindings(["bookshop"]);

  return cms.render((
    <div className="mx-auto w-full max-w-lg">
      <img
        src={cover.image}
        alt={cover.imageAlt}
        width={cover.imageWidth}
        height={cover.imageHeight}
        fetchPriority="high"
        className="h-auto w-full object-contain"
      />
    </div>
  ));
}
