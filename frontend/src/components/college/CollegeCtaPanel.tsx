import type { ReactNode } from "react";

export function CollegeCtaPanel({ id, eyebrow, title, description, actions, actionsAlign = "end", children }: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  actionsAlign?: "start" | "center" | "end";
  children?: ReactNode;
}) {
  return (
    <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-[#25103F] p-7 text-white shadow-[0_24px_70px_rgba(36,13,68,0.2)] sm:p-10 lg:p-14">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_90%_25%,rgba(96,43,190,0.6),transparent_35%)]" aria-hidden="true" />
      <img className="pointer-events-none absolute -bottom-40 -right-24 -z-10 hidden w-[560px] select-none opacity-[0.07] md:block" src="/assets/patterns/kbc-horse-growth.png" alt="" aria-hidden="true" />
      <div className={`grid ${actions ? `lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16 ${actionsAlign === "start" ? "lg:items-start" : actionsAlign === "center" ? "lg:items-center" : "lg:items-end"}` : ""}`}>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5C94F]">{eyebrow}</p>
          <h2 id={id} className="mt-5 max-w-[760px] text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">{title}</h2>
          {description && <p className="mt-6 max-w-[720px] text-sm leading-7 text-white/65 sm:text-base">{description}</p>}
        </div>
        {actions && <div className="mt-9 grid gap-3 lg:mt-0">{actions}</div>}
      </div>
      {children}
    </div>
  );
}
