import { Minus, Plus } from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";

import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

export type FaqItem = {
  id?: string;
  question: string;
  answer: ReactNode;
};

type FaqTuple = readonly [question: string, answer: ReactNode] | string[];

interface FaqAccordionProps {
  items: readonly (FaqItem | FaqTuple)[];
  idPrefix?: string;
  defaultOpen?: number | null;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function FaqAccordion({ items, idPrefix = "faq", defaultOpen = 0 }: FaqAccordionProps) {
  const normalisedItems = useMemo(() => items.map((item, index) => {
    const faq: FaqItem = Array.isArray(item)
      ? { question: String(item[0] || ""), answer: item[1] || "" }
      : item as FaqItem;
    return {
      ...faq,
      id: faq.id || `${idPrefix}-${slugify(faq.question) || index + 1}`,
    };
  }), [idPrefix, items]);
  const [openId, setOpenId] = useState(() => defaultOpen === null ? "" : normalisedItems[defaultOpen]?.id || "");

  useEffect(() => {
    if (openId && !normalisedItems.some((item) => item.id === openId)) {
      setOpenId(defaultOpen === null ? "" : normalisedItems[defaultOpen]?.id || "");
    }
  }, [defaultOpen, normalisedItems, openId]);

  return (
    <div className="divide-y divide-kbc-purple-950/10 border-y border-kbc-purple-950/10">
      {normalisedItems.map((item) => {
        const isOpen = openId === item.id;
        const answerId = `${item.id}-answer`;
        return (
          <article key={item.id}>
            <button
              className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
              type="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpenId(isOpen ? "" : item.id)}
            >
              <span className={`text-base font-semibold leading-6 transition-colors sm:text-lg ${isOpen ? "text-[#401B8C]" : "text-kbc-purple-950"}`}>
                {item.question}
              </span>
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${isOpen ? "bg-[#401B8C] text-white" : "bg-kbc-purple-50 text-[#401B8C]"}`}>
                {isOpen ? <Minus className="h-4 w-4" aria-hidden="true" /> : <Plus className="h-4 w-4" aria-hidden="true" />}
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`} id={answerId}>
              <div className="overflow-hidden">
                <div className="max-w-3xl pb-6 pr-10 text-sm leading-7 text-kbc-dark-600 sm:text-base sm:leading-8">
                  {item.answer}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

interface FaqSectionProps extends FaqAccordionProps {
  id: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  className?: string;
  action?: ReactNode;
}

export function FaqSection({
  id,
  eyebrow = "Frequently asked questions",
  title = "Questions before you get started.",
  description,
  items,
  defaultOpen,
  className = "",
  action,
}: FaqSectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 bg-white py-16 sm:scroll-mt-32 sm:py-20 lg:py-28 ${className}`} aria-labelledby={`${id}-title`}>
      <div className="figma-shell">
        <div className="mx-auto max-w-4xl">
          <FigmaSectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} description={description} align="center" />
          <div className="mt-10 sm:mt-12">
            <FaqAccordion items={items} idPrefix={id} defaultOpen={defaultOpen} />
          </div>
          {action && <div className="mt-10 flex justify-center sm:mt-12">{action}</div>}
        </div>
      </div>
    </section>
  );
}
