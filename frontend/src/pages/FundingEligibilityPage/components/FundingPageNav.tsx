import { useEffect, useState } from "react";

import { fundingNavItems } from "../data";
import { containerClass } from "./shared";

export function FundingPageNav() {
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

  return (
    <nav aria-label="Funding page sections" className="sticky top-[160px] z-30 border-y border-[#e8e0ef] bg-white/95 shadow-[0_8px_24px_rgba(33,17,38,.06)] backdrop-blur-md max-[639px]:top-[112px]">
      <div className={containerClass}>
        <div className="flex items-center gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {fundingNavItems.map((item) => (
            <a className={`relative whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${activeId === item.id ? "bg-[#2f1468] text-white" : "text-[#766d7c] hover:bg-[#f7f4fa] hover:text-[#24152f]"}`} href={`#${item.id}`} key={item.id}>
              {item.label}
              {activeId === item.id && <span className="absolute -bottom-[13px] left-1/2 h-[3px] w-6 -translate-x-1/2 rounded-full bg-[#f5c94f]" />}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
