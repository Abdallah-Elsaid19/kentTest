import { useEffect, useRef, useState } from "react";

export interface CollegePageNavItem {
  label: string;
  href: string;
}

export function CollegePageNav({ items }: { items: CollegePageNavItem[] }) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "");
  const scrollerRef = useRef<HTMLDivElement>(null);

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
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const revealActiveLink = () => {
      const activeLink = scroller.querySelector<HTMLElement>('[aria-current="location"]');
      if (!activeLink || scroller.scrollWidth <= scroller.clientWidth) return;
      const viewport = scroller.getBoundingClientRect();
      const link = activeLink.getBoundingClientRect();
      const inset = 12;
      const delta = link.left < viewport.left + inset
        ? link.left - viewport.left - inset
        : link.right > viewport.right - inset
          ? link.right - viewport.right + inset
          : 0;
      if (delta) {
        scroller.scrollBy({
          left: delta,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        });
      }
    };
    const observer = new ResizeObserver(revealActiveLink);
    observer.observe(scroller);
    revealActiveLink();
    return () => observer.disconnect();
  }, [activeHref]);

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
    <nav aria-label="College page sections" className="sticky top-[160px] z-30 hidden border-y border-[#e8e0ef] bg-white/95 shadow-[0_8px_24px_rgba(33,17,38,.06)] backdrop-blur-md sm:block">
      <div className="mx-auto w-full max-w-[1240px] !px-0 xl:!px-8">
        <div ref={scrollerRef} className="flex w-full min-w-0 flex-wrap items-center justify-center gap-x-1.5 gap-y-2 overflow-visible px-3 py-3 sm:px-5 xl:flex-nowrap xl:justify-between xl:gap-1 xl:px-0">
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setActiveHref(item.href)} aria-current={activeHref === item.href ? "location" : undefined} className={`relative inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-3 py-2 text-[11px] font-semibold transition-colors focus-visible:outline-offset-[-3px] sm:px-4 sm:text-xs ${activeHref === item.href ? "bg-[#2f1468] text-white" : "text-[#766d7c] hover:bg-[#f7f4fa] hover:text-[#24152f]"}`}>
              {item.label}
              {activeHref === item.href && <span aria-hidden="true" className="absolute -bottom-[7px] left-1/2 h-[3px] w-6 -translate-x-1/2 rounded-full bg-[#f5c94f] xl:-bottom-[11px]" />}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
