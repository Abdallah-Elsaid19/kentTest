import { useEffect, useState } from "react";

export interface CollegePageNavItem {
  label: string;
  href: string;
}

export function CollegePageNav({ items, ariaLabel = "Page sections" }: { items: readonly CollegePageNavItem[]; ariaLabel?: string }) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "");

  useEffect(() => {
    const sections = items
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveHref(`#${visible[0].target.id}`);
    }, { rootMargin: "-30% 0px -60% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const syncActiveHash = () => {
      const hash = window.location.hash;
      if (items.some(({ href }) => href === hash)) setActiveHref(hash);
    };
    syncActiveHash();
    window.addEventListener("hashchange", syncActiveHash);
    return () => window.removeEventListener("hashchange", syncActiveHash);
  }, [items]);

  return (
    <nav aria-label={ariaLabel} className="sticky top-[160px] z-30 hidden border-y border-[#e8e0ef] bg-white/95 shadow-[0_8px_24px_rgba(33,17,38,.06)] backdrop-blur-md sm:block">
      <div className="w-full px-3 sm:px-5 xl:px-8">
        <div className="flex w-full min-w-0 flex-wrap items-center justify-center gap-x-1.5 gap-y-3 py-3 xl:gap-x-2">
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setActiveHref(item.href)} aria-current={activeHref === item.href ? "location" : undefined} className={`relative inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-lg border border-transparent px-3 py-2 text-[11px] font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kbc-gold-500 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none sm:px-4 sm:text-xs ${activeHref === item.href ? "border-primary bg-primary text-white shadow-[0_8px_20px_rgba(64,27,140,.18)] hover:bg-primary-dark" : "text-kbc-purple-700 hover:border-kbc-purple-100 hover:bg-kbc-purple-50 hover:text-kbc-purple-950"}`}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
