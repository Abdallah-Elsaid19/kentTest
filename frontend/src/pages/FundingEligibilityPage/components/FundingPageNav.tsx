import { useCmsBindings } from "@/features/cms/publicContent";
import { useEffect, useState } from "react";

import { fundingNavItems } from "../data";
import { containerClass } from "./shared";

export function FundingPageNav() {
  const cms = useCmsBindings(["funding"]);
  const cmsValues = cms.resolve({ fundingNavItems });

  const [activeId, setActiveId] = useState("funding-overview");

  useEffect(() => {
    const sections = fundingNavItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveId(visible[0].target.id);
    }, { rootMargin: "-30% 0px -60% 0px" });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return cms.render((
    <nav aria-label="Funding page sections" className="sticky top-[160px] z-30 border-y border-[#e8e0ef] bg-white/95 shadow-[0_8px_24px_rgba(33,17,38,.06)] backdrop-blur-md max-[639px]:top-[112px]">
      <div className={containerClass}>
        <div className="flex items-center gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {cmsValues.fundingNavItems.map((item) => (
            <a
              className={`relative inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-lg border px-4 py-2 text-[13px] font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kbc-gold-500 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none ${activeId === item.id ? "border-primary bg-primary text-white shadow-[0_8px_20px_rgba(64,27,140,.18)] hover:bg-primary-dark" : "border-transparent text-kbc-purple-700 hover:border-kbc-purple-100 hover:bg-kbc-purple-50 hover:text-kbc-purple-950"}`}
              href={`#${item.id}`}
              key={item.id}
              aria-current={activeId === item.id ? "location" : undefined}
              onClick={() => setActiveId(item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  ));
}
