import type { ReactNode } from "react";

export function PageHero({ title, summary, eyebrow, curvedEyebrow = false, image, imageFit = "cover", className = "" }: { title: ReactNode; summary?: string; eyebrow?: string; curvedEyebrow?: boolean; image?: string; imageFit?: "cover" | "contain"; className?: string }) {
  return (
    <section className={`relative isolate overflow-hidden bg-primary px-4 py-16 text-white md:py-24 ${className}`}>
      {image && <img src={image} alt="" aria-hidden="true" fetchPriority="high" className={`pointer-events-none absolute inset-0 -z-20 h-full w-full select-none opacity-30 ${imageFit === "contain" ? "object-contain object-center" : "object-cover object-top"}`} />}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-primary-dark/90 via-primary/70 to-primary/40" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-[1240px]">
        {eyebrow && <p className={`text-sm font-semibold uppercase tracking-[0.18em] text-kbc-gold-400 ${curvedEyebrow ? "relative w-fit pb-4 after:pointer-events-none after:absolute after:bottom-0 after:left-1/2 after:h-[11px] after:w-[190px] after:-translate-x-1/2 after:rounded-t-[50%] after:border-t-[1.5px] after:border-current" : ""}`}>{eyebrow}</p>}
        <h1 className="mt-6 max-w-5xl font-heading text-4xl !font-semibold !leading-[1.05] !tracking-tight !text-white sm:text-5xl lg:text-6xl xl:text-7xl">{title}</h1>
        {summary && <p className="mt-6 max-w-3xl text-[clamp(1rem,1.5vw,1.125rem)] leading-8 text-white/75">{summary}</p>}
      </div>
    </section>
  );
}
