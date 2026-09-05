import { ArrowUpRight } from "lucide-react";

import { comparisonRoutes } from "../data";
import { containerClass, eyebrowClass, softSectionClass, SectionIntro } from "./shared";

export function CompareOptionsSection() {
  return (
    <section className={softSectionClass}>
      <div className={containerClass}>
        <SectionIntro eyebrow="Compare your options" title="Which route fits your circumstances?" align="center" />
        <div className="grid grid-cols-3 gap-[18px] max-[780px]:grid-cols-1">
          {comparisonRoutes.map(({ icon: Icon, route, title, best, structure, funding, objective, examples, employer, link, ...option }) => {
            const isDark = "dark" in option && option.dark;
            return (
              <article className={`flex flex-col rounded-[31px_9px] border p-[31px] ${isDark ? "border-transparent bg-primary text-white" : "border-[#e8e0ef] bg-white"}`} key={title}>
                <Icon className={isDark ? "text-[#f5c94f]" : "text-[#401b8c]"} /><p className={`${eyebrowClass} mt-[30px] ${isDark ? "text-[#f5c94f]" : ""}`}>{route}</p><h3 className={`mt-3 min-h-[68px] text-[22px] leading-[1.25] ${isDark ? "!text-white" : ""}`}>{title}</h3>
                <dl className="mb-[30px] mt-6">{[["Best for", best], ["Structure", structure], ["Funding", funding], ["Primary objective", objective], ["Examples", examples], ["Employer involvement", employer]].map(([label, value]) => <div className={`border-t py-[15px] ${isDark ? "border-white/[.13]" : "border-[#e8e0ef]"}`} key={label}><dt className={`text-[10px] font-bold uppercase tracking-[.12em] ${isDark ? "text-white/40" : "text-[#968c9c]"}`}>{label}</dt><dd className={`mt-[5px] text-xs leading-[1.6] ${isDark ? "text-white/70" : "text-[#564d5b]"}`}>{value}</dd></div>)}</dl>
                <a className={`mt-auto flex items-center justify-between text-[13px] font-bold no-underline ${isDark ? "text-[#f5c94f]" : "text-[#401b8c]"}`} href={link}>Explore route <ArrowUpRight className="w-4" /></a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
