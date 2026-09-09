import { useCmsBindings } from "@/features/cms/publicContent";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { shell } from "@/components/college/layout";
import { NavigationButton } from "@/components/navigation";
import { ProgrammeDiscoveryCard } from "@/components/programme/ProgrammeDiscoveryCard";
import { EmptyState } from "@/components/ui/AsyncState";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { programmeColleges, programmeTypeLabels, type ProgrammeSummary } from "@/data/programmes";
import { clearProgrammeFilters, filterProgrammes, updateProgrammeFilters } from "../filters";

const field = "mt-2 min-h-12 w-full min-w-0 rounded-lg border border-kbc-purple-200 bg-white px-3 py-3 text-sm font-normal text-kbc-purple-950 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

export function ProgrammeExplorer({ programmes }: { programmes: readonly ProgrammeSummary[] }) {
  const cms = useCmsBindings(["programmes"]);
  const cmsValues = cms.resolve({ programmeColleges, programmeTypeLabels, field });

  const [params, setParams] = useSearchParams();
  const results = filterProgrammes(programmes, params, { colleges: cmsValues.programmeColleges, types: cmsValues.programmeTypeLabels });
  const colleges = [...new Set(programmes.map((programme) => programme.college))];
  const levels = [...new Set(programmes.flatMap((programme) => programme.level ? [programme.level] : []))].sort((a, b) => a - b);
  const types = [...new Set(programmes.map((programme) => programme.type))];
  const filters = [
    { key: "college", label: cms.text("programmes.pages_programme_listing_page_component_p_filters.label_001"), all: "All Colleges", options: colleges.map((college) => ({ value: college, label: cmsValues.programmeColleges[college].title })) },
    { key: "level", label: cms.text("programmes.pages_programme_listing_page_component_p_filters.label_002"), all: "All levels", options: levels.map((level) => ({ value: String(level), label: `Level ${level}` })) },
    ...(types.length > 1 ? [{ key: "type", label: cms.text("programmes.pages_programme_listing_page_component_p_filters.label_003"), all: "All types", options: types.map((type) => ({ value: type, label: cmsValues.programmeTypeLabels[type] })) }] : []),
  ];
  const hasFilters = ["search", "q", "college", "level", "type", "funding"].some((key) => params.has(key));
  const update = (key: string, value: string) => setParams(updateProgrammeFilters(params, key, value), { replace: key === "search", preventScrollReset: true });
  const clear = () => setParams(clearProgrammeFilters(params), { preventScrollReset: true });

  return cms.render(<section id="explore-programmes" aria-labelledby="explore-title" className="scroll-mt-24 bg-[#f7f4fa] py-12 sm:py-16 lg:py-20">
    <div className={shell}>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <FigmaSectionHeading id="explore-title" eyebrow={cms.text("programmes.pages_programme_listing_page_component_p_programme_explorer.eyebrow_004")} title={cms.text("programmes.pages_programme_listing_page_component_p_programme_explorer.title_005")} align="left" />
        <p className="max-w-md text-sm leading-7 text-[#675f70]">{cms.text("programmes.pages_programme_listing_page_component_p_programme_explorer.text_006")}</p>
      </div>
      <form role="search" aria-label={cms.text("programmes.pages_programme_listing_page_component_p_programme_explorer.aria_label_007")} onSubmit={(event) => event.preventDefault()} className="rounded-2xl border border-[#e4ddec] bg-white p-5 shadow-[0_12px_32px_rgba(35,13,63,0.06)] sm:p-7">
        <label className="block text-sm font-semibold text-kbc-purple-950" htmlFor="programme-search">{cms.text("programmes.pages_programme_listing_page_component_p_programme_explorer.text_008")}</label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-primary" aria-hidden="true" />
          <input id="programme-search" type="search" placeholder={cms.text("programmes.pages_programme_listing_page_component_p_programme_explorer.placeholder_009")} className={`${cmsValues.field} pl-12`} value={params.get("search") || params.get("q") || ""} onChange={(event) => update("search", event.target.value)} aria-controls="programme-results" />
        </div>
        <div className={`mt-5 grid gap-4 ${types.length > 1 ? "md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]" : "md:grid-cols-2"}`}>
          {filters.map((filter) => <label key={filter.key} className="min-w-0 text-sm font-semibold text-kbc-purple-950">
            {filter.label}
            <select className={cmsValues.field} value={params.get(filter.key) || ""} onChange={(event) => update(filter.key, event.target.value)} aria-controls="programme-results">
              <option value="">{filter.all}</option>
              {filter.options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
              {params.get(filter.key) && !filter.options.some((option) => option.value === params.get(filter.key)) && <option value={params.get(filter.key)!}>{cms.text("programmes.pages_programme_listing_page_component_p_programme_explorer.text_010")}{filter.label.toLowerCase()}</option>}
            </select>
          </label>)}
        </div>
      </form>
      <div className="my-6 flex min-h-12 flex-wrap items-center justify-between gap-3">
        <p role="status" aria-live="polite" aria-atomic="true" className="text-sm text-[#675f70]">
          <strong className="font-semibold text-[#17131d]">{results.length}</strong> {results.length === 1 ? "programme" : "programmes"} {hasFilters ? `matching your filters · ${programmes.length} in total` : cms.text("programmes.pages_programme_listing_page_component_p_programme_explorer.text_011")}
        </p>
        {hasFilters && <NavigationButton variant="secondary" onClick={clear}>{cms.text("programmes.pages_programme_listing_page_component_p_programme_explorer.text_012")}</NavigationButton>}
      </div>
      <div id="programme-results">
        {results.length ? <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">{results.map((programme) => <ProgrammeDiscoveryCard key={programme.id} programme={programme} />)}</div> : <EmptyState title={cms.text("programmes.pages_programme_listing_page_component_p_programme_explorer.title_013")} body="Try a different search, choose another College or level, or clear your filters to see all programmes." />}
      </div>
    </div>
  </section>);
}
