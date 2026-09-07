import { ArrowRight, ChevronDown } from "lucide-react";
import { ProgrammeCardGrid } from "@/components/programme/ProgrammeGrids";
import { ProgrammeSection } from "@/components/programme/ProgrammeSection";
import { NavigationButton } from "@/components/navigation";
import { pathwayData } from "../data";

export function PathwaysSection() {
  return <ProgrammeSection {...pathwayData} tone="soft">
    <ProgrammeCardGrid items={pathwayData.routes.map((route) => ({ title: route.name, description: route.description, tags: [route.title] }))} />
    <div className="mt-8 space-y-4">
      {pathwayData.routes.map((route, index) => <details key={route.name} className="group overflow-hidden rounded-2xl border border-kbc-purple-200 bg-white open:border-primary/30" open={index === 0}>
        <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 p-5 text-lg font-semibold text-primary focus-visible:outline-primary sm:p-7 [&::-webkit-details-marker]:hidden">
          <span>{route.name}<span className="mt-2 block text-xs font-medium text-[var(--color-muted)]">{index < 2 ? "Select six credits" : "Association for Project Management recognised assessment route"}</span></span>
          <ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
        </summary>
        <div className="border-t border-kbc-purple-100 p-5 sm:p-7">
          <p className="mb-6 max-w-4xl text-sm leading-7 text-[var(--color-muted)]">{route.detail}</p>
          <table className="block w-full text-left text-sm md:table">
            <caption className="sr-only">{route.name} modules, professional bodies, credits and typical durations</caption>
            <thead className="hidden border-b border-primary/20 text-primary md:table-header-group"><tr><th scope="col" className="pb-4 pr-5">Course / professional qualification</th><th scope="col" className="pb-4 pr-5">Professional body or owner</th><th scope="col" className="pb-4 pr-5">Credits</th><th scope="col" className="pb-4">Typical duration</th></tr></thead>
            <tbody className="block md:table-row-group">{route.modules.map((module) => <tr className="mb-4 block rounded-xl border border-kbc-purple-100 p-4 last:mb-0 md:table-row md:rounded-none md:border-0 md:border-b md:p-0" key={module.title}>
              <th scope="row" className="block font-semibold leading-6 text-[var(--color-ink)] md:table-cell md:w-[43%] md:py-5 md:pr-5">{module.title}</th>
              <td className="mt-3 block leading-6 text-[var(--color-muted)] md:table-cell md:w-[32%] md:py-5 md:pr-5"><span className="block text-xs font-semibold text-primary md:hidden">Professional body or owner</span>{module.body}</td>
              <td className="mt-3 inline-block rounded-full bg-kbc-purple-50 px-3 py-1 font-semibold text-primary md:table-cell md:whitespace-nowrap md:rounded-none md:bg-transparent md:px-0 md:py-5 md:pr-5">{module.credits}</td>
              <td className="ml-3 inline-block text-[var(--color-muted)] md:table-cell md:whitespace-nowrap md:py-5">{module.duration}</td>
            </tr>)}</tbody>
          </table>
        </div>
      </details>)}
    </div>
    <div className="mt-8 flex justify-center"><NavigationButton to="/book-session" className="w-full gap-2 sm:w-auto">Discuss your pathway <ArrowRight className="size-4" aria-hidden="true" /></NavigationButton></div>
  </ProgrammeSection>;
}
