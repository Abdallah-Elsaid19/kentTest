import { useCmsBindings } from "@/features/cms/publicContent";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { FaqAccordion } from "@/components/common/FaqSection";
import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";

type FaqCategory = "Project Management" | "Leadership" | "Marketing" | "Employers";
type FaqItem = { id: string; category: FaqCategory; question: string; answer: string };

const categories: Array<"All questions" | FaqCategory> = ["All questions", "Project Management", "Leadership", "Marketing", "Employers"];

const faqItems: FaqItem[] = [
  {
    id: "project-requirements",
    category: "Project Management",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_001}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_002}}",
  },
  {
    id: "project-individual-application",
    category: "Project Management",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_003}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_004}}",
  },
  {
    id: "project-apprenticeship-difference",
    category: "Project Management",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_005}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_006}}",
  },
  {
    id: "project-travel",
    category: "Project Management",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_007}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_008}}",
  },
  {
    id: "project-fees",
    category: "Project Management",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_009}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_010}}",
  },
  {
    id: "leadership-benefits",
    category: "Leadership",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_011}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_012}}",
  },
  {
    id: "leadership-cost",
    category: "Leadership",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_013}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_014}}",
  },
  {
    id: "leadership-performance",
    category: "Leadership",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_015}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_016}}",
  },
  {
    id: "leadership-progress",
    category: "Leadership",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_017}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_018}}",
  },
  {
    id: "leadership-duration",
    category: "Leadership",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_019}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_020}}",
  },
  {
    id: "marketing-individual-application",
    category: "Marketing",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_021}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_022}}",
  },
  {
    id: "marketing-apprenticeship-difference",
    category: "Marketing",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_023}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_024}}",
  },
  {
    id: "marketing-delivery",
    category: "Marketing",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_025}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_026}}",
  },
  {
    id: "marketing-costs",
    category: "Marketing",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_027}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_028}}",
  },
  {
    id: "marketing-epa",
    category: "Marketing",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_029}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_030}}",
  },
  {
    id: "employer-benefits",
    category: "Employers",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_031}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_032}}",
  },
  {
    id: "employer-cost",
    category: "Employers",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_033}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_034}}",
  },
  {
    id: "employer-development",
    category: "Employers",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_035}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_036}}",
  },
  {
    id: "employer-multiple-employees",
    category: "Employers",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_037}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_038}}",
  },
  {
    id: "employer-tracking",
    category: "Employers",
    question: "{{cms:faq.pages_information_page_faq_page_faq_items.question_039}}",
    answer: "{{cms:faq.pages_information_page_faq_page_faq_items.answer_040}}",
  },
];

export function FaqPage() {
  const cms = useCmsBindings(["faq"]);
  const cmsValues = cms.resolve({ faqItems, categories });

  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All questions");
  const [search, setSearch] = useState("");

  const visibleItems = useMemo(() => {
    const query = search.trim().toLowerCase();
    return cmsValues.faqItems.filter((item) => {
      const matchesCategory = activeCategory === "All questions" || item.category === activeCategory;
      const matchesSearch = !query || `${item.question} ${item.answer} ${item.category}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search, cmsValues.faqItems]);

  return cms.render((
    <div className="kbc-figma-home overflow-hidden bg-white">
      <RouteMeta fallbackTitle={cms.text("faq.pages_information_page_faq_page_faq_page.fallback_title_041")} fallbackDescription={cms.text("faq.pages_information_page_faq_page_faq_page.fallback_description_042")} />

      <header className="relative bg-[#401B8C] px-5 pt-[150px] text-center sm:pt-[164px]">
        <span className="inline-flex rounded bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-kbc-gold-500 ring-1 ring-inset ring-white/10">{cms.text("faq.pages_information_page_faq_page_faq_page.text_043")}</span>
        <h1 className="mx-auto mt-5 max-w-3xl !text-[clamp(2.7rem,8vw,5rem)] !leading-[1.1] !text-white">{cms.text("faq.pages_information_page_faq_page_faq_page.text_044")}<span className="text-kbc-gold-500">{cms.text("faq.pages_information_page_faq_page_faq_page.text_045")}</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75">{cms.text("faq.pages_information_page_faq_page_faq_page.text_046")}</p>
        <span className="pointer-events-none absolute right-[7%] top-[48%] hidden -rotate-12 text-[150px] font-bold leading-none text-white/[.07] lg:block" aria-hidden="true">{cms.text("faq.pages_information_page_faq_page_faq_page.text_047")}</span>

        <label className="relative mx-auto mt-10 block max-w-4xl translate-y-1/2 text-left">
          <Search className="pointer-events-none absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 text-[#401B8C]" aria-hidden="true" />
          <span className="sr-only">{cms.text("faq.pages_information_page_faq_page_faq_page.text_048")}</span>
          <input className="min-h-16 w-full rounded-lg border border-kbc-purple-950/5 bg-white py-4 pl-16 pr-5 text-sm text-kbc-purple-950 shadow-[0_18px_50px_rgba(64,27,140,.12)] outline-none transition focus:border-[#401B8C]/35 focus:ring-4 focus:ring-[#401B8C]/10 sm:min-h-20 sm:text-base" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder={cms.text("faq.pages_information_page_faq_page_faq_page.placeholder_049")} />
        </label>
      </header>

      <main className="relative px-5 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:pb-28">
        <span className="pointer-events-none absolute -left-3 top-1/3 hidden rotate-12 text-[140px] font-bold leading-none text-kbc-purple-50 lg:block" aria-hidden="true">{cms.text("faq.pages_information_page_faq_page_faq_page.text_050")}</span>
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16">
          <aside className="rounded-xl bg-[#f6f3f8] p-2 lg:sticky lg:top-28" aria-label={cms.text("faq.pages_information_page_faq_page_faq_page.aria_label_051")}>
            {cmsValues.categories.map((category) => (
              <button
                className={`flex min-h-12 w-full items-center rounded-lg px-4 text-left text-sm font-semibold transition ${activeCategory === category ? "bg-white text-[#401B8C] shadow-sm" : "text-kbc-dark-600 hover:bg-white/70 hover:text-[#401B8C]"}`}
                type="button"
                key={category}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </aside>

          <section aria-label={cms.text("faq.pages_information_page_faq_page_faq_page.aria_label_052")}>
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-sm text-kbc-dark-500">{visibleItems.length} {visibleItems.length === 1 ? "answer" : "answers"}</p>
              {activeCategory !== "All questions" && <span className="rounded-full bg-kbc-purple-50 px-3 py-1 text-xs font-semibold text-[#401B8C]">{activeCategory}</span>}
            </div>

            {visibleItems.length ? (
              <FaqAccordion items={visibleItems} idPrefix="faq-page" />
            ) : (
              <div className="rounded-xl border border-dashed border-[#401B8C]/25 bg-kbc-purple-50 p-10 text-center"><h2 className="text-2xl text-kbc-purple-950">{cms.text("faq.pages_information_page_faq_page_faq_page.text_053")}</h2><p className="mt-2 text-sm text-kbc-dark-500">{cms.text("faq.pages_information_page_faq_page_faq_page.text_054")}</p></div>
            )}
          </section>
        </div>
      </main>

      <section className="px-5 pb-20 sm:pb-24 lg:pb-28">
        <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 overflow-hidden rounded-2xl bg-[linear-gradient(120deg,#401B8C,#6f2a93)] p-8 text-white shadow-[0_22px_55px_rgba(64,27,140,.24)] sm:p-12 lg:flex-row lg:items-center lg:p-16">
          <div className="pointer-events-none absolute -bottom-28 right-16 h-72 w-72 rounded-full border-2 border-white/30" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-8 top-8 h-48 w-48 rounded-full border border-kbc-gold-500/45" aria-hidden="true" />
          <div className="relative max-w-xl"><span className="text-xs font-bold uppercase tracking-[.17em] text-kbc-gold-500">{cms.text("faq.pages_information_page_faq_page_faq_page.text_055")}</span><h2 className="mt-4 !text-4xl !leading-tight !text-white sm:!text-5xl">{cms.text("faq.pages_information_page_faq_page_faq_page.text_056")}</h2><p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">{cms.text("faq.pages_information_page_faq_page_faq_page.text_057")}</p></div>
          <div className="relative flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col"><NavigationButton className="!w-full !bg-kbc-gold-500 !text-[#25102f] hover:!bg-white sm:!w-auto" to={cms.text("faq.pages_information_page_faq_page_faq_page.to_058")} variant="accent">{cms.text("faq.pages_information_page_faq_page_faq_page.text_059")}</NavigationButton><NavigationButton className="!w-full sm:!w-auto" to={cms.text("faq.pages_information_page_faq_page_faq_page.to_060")} variant="inverse">{cms.text("faq.pages_information_page_faq_page_faq_page.text_061")}</NavigationButton></div>
        </div>
      </section>
    </div>
  ));
}
