import { ArrowRight, ChevronDown } from "lucide-react";
import { ProgrammeCardGrid } from "@/components/programme/ProgrammeGrids";
import { ProgrammeSection } from "@/components/programme/ProgrammeSection";
import { NavigationButton } from "@/components/navigation";
import { pathwayData } from "../data";

export function PathwaysSection() {
  return <ProgrammeSection {...pathwayData} tone="soft">
    <ProgrammeCardGrid items={pathwayData.routes.map((route) => ({ title: route.name, description: route.description, tags: [route.title], action: "action" in route ? route.action : undefined }))} />
    <div className="mt-8 space-y-4">
      {pathwayData.routes.map((route, index) => <details key={route.name} className="group overflow-hidden rounded-2xl border border-kbc-purple-200 bg-white open:border-primary/30" open={index === 0}>
        <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 p-5 text-lg font-semibold text-primary focus-visible:outline-primary sm:p-7 [&::-webkit-details-marker]:hidden">
          <span>{route.name}<span className="mt-2 block text-xs font-medium text-[var(--color-muted)]">{index < 2 ? "Select six credits" : "Association for Project Management recognised assessment route"}</span></span>
          <ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
        </summary>
        <div className="border-t border-kbc-purple-100 p-5 sm:p-7">
          <p className="mb-6 max-w-4xl text-sm leading-7 text-[var(--color-muted)]">{route.detail}</p>
          <div className="border border-primary/20 border-t-4 border-t-kbc-gold-500">
            <table className="block w-full text-left text-sm md:table md:table-fixed md:border-collapse">
              <caption className="sr-only">{route.name} modules, professional bodies, credits and typical durations</caption>
              <colgroup>
                <col className="w-[43%]" />
                <col className="w-[32%]" />
                <col className="w-[10%]" />
                <col className="w-[15%]" />
              </colgroup>
              <thead className="hidden bg-primary text-white md:table-header-group">
                <tr>
                  <th scope="col" className="border-r border-white/15 px-4 py-4 font-semibold">Course / professional qualification</th>
                  <th scope="col" className="border-r border-white/15 px-4 py-4 font-semibold">Professional body or owner</th>
                  <th scope="col" className="border-r border-white/15 px-4 py-4 font-semibold">Credits</th>
                  <th scope="col" className="px-4 py-4 font-semibold">Typical duration</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">{route.modules.map((module) => <tr className="mb-3 block border-b border-primary/10 p-4 last:mb-0 last:border-b-0 md:table-row md:bg-white md:p-0 md:even:bg-kbc-purple-50" key={module.title}>
                <th scope="row" className="block font-semibold leading-6 text-primary-dark md:table-cell md:border-r md:border-primary/10 md:px-4 md:py-4">{module.title}</th>
                <td className="mt-3 block leading-6 text-kbc-purple-700 md:table-cell md:border-r md:border-primary/10 md:px-4 md:py-4"><span className="block text-xs font-semibold text-primary md:hidden">Professional body or owner</span>{module.body}</td>
                <td className="mt-3 inline-block bg-kbc-gold-50 px-3 py-1 font-semibold text-primary md:table-cell md:whitespace-nowrap md:border-r md:border-primary/10 md:bg-transparent md:px-4 md:py-4">{module.credits}</td>
                <td className="ml-3 inline-block text-kbc-purple-700 md:table-cell md:whitespace-nowrap md:px-4 md:py-4">{module.duration}</td>
              </tr>)}</tbody>
            </table>
          </div>
          {route.name === "Chartered Pathway" && <div className="mt-6"><NavigationButton to="/chartered-pathway" className="gap-2">Chartered Pathway <ArrowRight aria-hidden="true" className="size-4" /></NavigationButton></div>}
        </div>
      </details>)}
    </div>
    <div className="mt-8 flex justify-center"><NavigationButton to="/book-session" className="w-full gap-2 sm:w-auto">Discuss your pathway <ArrowRight className="size-4" aria-hidden="true" /></NavigationButton></div>
  </ProgrammeSection>;
}
