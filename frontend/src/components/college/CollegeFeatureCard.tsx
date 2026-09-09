import type { ReactNode } from "react";

export function CollegeFeatureCard({ marker, title, children, inverse = false, surface = "transparent", markerWide = false, titleAs: Title = 'h3' }: {
  marker: ReactNode;
  title: string;
  children: ReactNode;
  inverse?: boolean;
  surface?: "transparent" | "white";
  markerWide?: boolean;
  titleAs?: 'h3' | 'h4';
}) {
  return (
    <article className={`group relative min-w-0 border-b px-5 py-8 transition-[background-color,box-shadow] duration-300 after:absolute after:inset-x-0 after:-bottom-px after:h-[3px] after:origin-left after:scale-x-0 after:bg-[var(--color-gold)] after:transition-transform after:duration-[420ms] hover:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none sm:px-6 ${surface === "white" ? "overflow-hidden rounded-2xl bg-white" : ""} ${inverse ? "border-white/20 hover:bg-white/[.075] hover:shadow-[0_14px_34px_rgba(0,0,0,.16)]" : "border-kbc-purple-100 hover:bg-primary/[.065] hover:shadow-[0_14px_34px_rgba(64,27,140,.08)]"}`}>
      <span className={`flex items-center justify-center whitespace-nowrap rounded-xl text-xs font-bold transition-colors duration-300 motion-reduce:transition-none ${markerWide ? "h-12 w-fit px-4" : "size-12"} ${inverse ? "bg-white/10 text-[var(--color-gold)] group-hover:bg-white group-hover:text-primary" : "bg-kbc-purple-50 text-primary group-hover:bg-white"}`}>{marker}</span>
      <Title className={`mt-5 text-lg font-semibold tracking-tight ${inverse ? "text-white" : "text-[var(--color-ink)]"}`}>{title}</Title>
      <div className={`mt-3 text-sm leading-7 ${inverse ? "text-white/75" : "text-[var(--color-muted)]"}`}>{children}</div>
    </article>
  );
}
