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
  const [params, setParams] = useSearchParams();
  const results = filterProgrammes(programmes, params);
  const colleges = [...new Set(programmes.map((programme) => programme.college))];
  const levels = [...new Set(programmes.flatMap((programme) => programme.level ? [programme.level] : []))].sort((a, b) => a - b);
  const types = [...new Set(programmes.map((programme) => programme.type))];
  const filters = [
    { key: "college", label: "College", all: "All Colleges", options: colleges.map((college) => ({ value: college, label: programmeColleges[college].title })) },
    { key: "level", label: "Level", all: "All levels", options: levels.map((level) => ({ value: String(level), label: `Level ${level}` })) },
    ...(types.length > 1 ? [{ key: "type", label: "Programme type", all: "All types", options: types.map((type) => ({ value: type, label: programmeTypeLabels[type] })) }] : []),
  ];
  const hasFilters = ["search", "q", "college", "level", "type", "funding"].some((key) => params.has(key));
  const update = (key: string, value: string) => setParams(updateProgrammeFilters(params, key, value), { replace: key === "search", preventScrollReset: true });
  const clear = () => setParams(clearProgrammeFilters(params), { preventScrollReset: true });

  return <section id="explore-programmes" aria-labelledby="explore-title" className="scroll-mt-24 bg-[#f7f4fa] py-12 sm:py-16 lg:py-20">
    <div className={shell}>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <FigmaSectionHeading id="explore-title" eyebrow="Explore your options" title="Find your programme." align="left" />
        <p className="max-w-md text-sm leading-7 text-[#675f70]">Search by interest, qualification or career direction, then narrow your options by College and level.</p>
      </div>
      <form role="search" aria-label="Find a KBC programme" onSubmit={(event) => event.preventDefault()} className="rounded-2xl border border-[#e4ddec] bg-white p-5 shadow-[0_12px_32px_rgba(35,13,63,0.06)] sm:p-7">
        <label className="block text-sm font-semibold text-kbc-purple-950" htmlFor="programme-search">Search programmes</label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-primary" aria-hidden="true" />
          <input id="programme-search" type="search" placeholder="Try marketing, project management or CIM" className={`${field} pl-12`} value={params.get("search") || params.get("q") || ""} onChange={(event) => update("search", event.target.value)} aria-controls="programme-results" />
        </div>
        <div className={`mt-5 grid gap-4 ${types.length > 1 ? "md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]" : "md:grid-cols-2"}`}>
          {filters.map((filter) => <label key={filter.key} className="min-w-0 text-sm font-semibold text-kbc-purple-950">
            {filter.label}
            <select className={field} value={params.get(filter.key) || ""} onChange={(event) => update(filter.key, event.target.value)} aria-controls="programme-results">
              <option value="">{filter.all}</option>
              {filter.options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
              {params.get(filter.key) && !filter.options.some((option) => option.value === params.get(filter.key)) && <option value={params.get(filter.key)!}>Unknown {filter.label.toLowerCase()}</option>}
            </select>
          </label>)}
        </div>
      </form>
      <div className="my-6 flex min-h-12 flex-wrap items-center justify-between gap-3">
        <p role="status" aria-live="polite" aria-atomic="true" className="text-sm text-[#675f70]">
          <strong className="font-semibold text-[#17131d]">{results.length}</strong> {results.length === 1 ? "programme" : "programmes"} {hasFilters ? `matching your filters · ${programmes.length} in total` : "across all Colleges"}
        </p>
        {hasFilters && <NavigationButton variant="secondary" onClick={clear}>Clear filters</NavigationButton>}
      </div>
      <div id="programme-results">
        {results.length ? <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">{results.map((programme) => <ProgrammeDiscoveryCard key={programme.id} programme={programme} />)}</div> : <EmptyState title="No programmes match your current filters." body="Try a different search, choose another College or level, or clear your filters to see all programmes." />}
      </div>
    </div>
  </section>;
}
