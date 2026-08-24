import { ArrowRight, ArrowUpRight, Building2, Check, Factory, Zap } from "lucide-react";
import type { ComponentType } from "react";
import { Link } from "react-router-dom";

import { NavigationButton } from "@/components/navigation";

type Sector = {
  number: string;
  title: string;
  context: string;
  description: string;
  capabilities: string[];
  href: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  accent: string;
  glow: string;
};

const sectors: Sector[] = [
  {
    number: "01",
    title: "Construction & Infrastructure",
    context: "Complex programmes · supply chains · live sites",
    description:
      "Connect scope, schedule, cost and risk across assets, delivery partners and long programme lifecycles.",
    capabilities: [
      "Integrated planning and scheduling",
      "Cost and commercial control",
      "Interface, risk and change management",
    ],
    href: "/sectors/construction-infrastructure",
    icon: Building2,
    accent: "text-kbc-gold-500",
    glow: "from-kbc-gold-500/20",
  },
  {
    number: "02",
    title: "Energy & Utilities",
    context: "Capital portfolios · regulated assets · energy transition",
    description:
      "Create reliable oversight across investment portfolios, operational constraints and critical energy delivery.",
    capabilities: [
      "Capital portfolio prioritisation",
      "Risk and regulatory assurance",
      "Outage and operational readiness",
    ],
    href: "/sectors/energy-utilities",
    icon: Zap,
    accent: "text-kbc-gold-500",
    glow: "from-kbc-gold-500/20",
  },
  {
    number: "03",
    title: "Engineering & Advanced Manufacturing",
    context: "Product lifecycles · configuration · production",
    description:
      "Keep engineering change, supply-chain dependencies and production performance visible and controlled.",
    capabilities: [
      "Engineering and configuration control",
      "Supply-chain coordination",
      "Production and performance insight",
    ],
    href: "/sectors/engineering-advanced-manufacturing",
    icon: Factory,
    accent: "text-kbc-gold-500",
    glow: "from-kbc-gold-500/20",
  },
];

type IndustrySectorsSectionProps = {
  id?: string;
};

export function IndustrySectorsSection({ id = "sector-focus" }: IndustrySectorsSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#f3f0e8] py-28 max-[600px]:py-20" id={id}>
      <div className="pointer-events-none absolute -right-44 -top-44 h-[520px] w-[520px] rounded-full border border-kbc-purple-200/70" />
      <div className="pointer-events-none absolute -right-28 -top-28 h-[390px] w-[390px] rounded-full border border-kbc-purple-200/50" />

      <div className="relative mx-auto w-[calc(100%-2.5rem)] max-w-[1240px] max-[600px]:w-[calc(100%-1.75rem)]">
        <header className="max-w-[920px]">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[.16em] text-kbc-purple-600">
            Sector application
          </p>
          <h2 className="max-w-[850px] font-['Source_Serif_4',Georgia,serif] text-[clamp(44px,5vw,68px)] font-semibold leading-[1.02] tracking-[-.045em] text-kbc-purple-950">
            One control discipline. Three delivery environments.
          </h2>
          <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-kbc-purple-700">
            The control principles stay consistent. The operating context changes. Each sector brings its own assets, dependencies, assurance needs and decision cycles.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-3 gap-5 max-[980px]:grid-cols-1">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <Link
                aria-label={`Explore ${sector.title}`}
                className="group flex min-h-[590px] flex-col overflow-hidden rounded-[22px] border border-kbc-purple-100 bg-white text-inherit no-underline shadow-[0_18px_50px_rgba(33,17,38,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(33,17,38,.14)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-kbc-gold-500"
                to={sector.href}
                key={sector.title}
              >
                <div className="relative h-[220px] overflow-hidden bg-kbc-purple-950 p-7">
                  <div className={`absolute inset-0 bg-gradient-to-br ${sector.glow} via-transparent to-transparent`} />
                  <div className="absolute inset-0 opacity-[.12] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:42px_42px]" />
                  <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full border border-white/15 transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute -bottom-16 -right-8 h-48 w-48 rounded-full border border-white/10" />
                  <span className={`relative z-10 text-xs font-bold tracking-[.16em] ${sector.accent}`}>
                    {sector.number}
                  </span>
                  <div className="absolute bottom-7 right-7 grid h-24 w-24 place-items-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm">
                    <Icon className={`h-12 w-12 ${sector.accent}`} strokeWidth={1.35} />
                  </div>
                  <p className="absolute bottom-7 left-7 z-10 max-w-[180px] text-[10px] font-semibold uppercase leading-5 tracking-[.13em] text-white/65">
                    {sector.context}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="max-w-[320px] font-['Source_Serif_4',Georgia,serif] text-[31px] font-semibold leading-[1.02] tracking-[-.035em] text-kbc-purple-950">
                    {sector.title}
                  </h3>
                  <p className="mt-4 text-[13px] leading-6 text-kbc-purple-700">{sector.description}</p>
                  <ul className="mt-7 space-y-3 border-t border-kbc-purple-100 pt-6">
                    {sector.capabilities.map((capability) => (
                      <li className="flex items-start gap-3 text-[12px] font-medium leading-5 text-kbc-purple-900" key={capability}>
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-kbc-purple-50 text-kbc-purple-600">
                          <Check size={12} strokeWidth={2.5} />
                        </span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto flex items-center justify-between border-t border-kbc-purple-100 pt-6 text-xs font-bold text-kbc-purple-600">
                    Explore this sector
                    <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={17} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-5 grid grid-cols-[1fr_auto] items-center gap-8 rounded-[22px] bg-kbc-purple-950 px-8 py-7 text-white max-[760px]:grid-cols-1 max-[600px]:px-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.16em] text-kbc-gold-500">One professional control system</p>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Governance · Scope · Schedule · Cost · Risk · Change · Performance
            </p>
          </div>
          <NavigationButton className="!min-h-11 !px-5" to="/sectors" variant="projectControls">
            Explore all sectors <ArrowRight size={17} />
          </NavigationButton>
        </div>
      </div>
    </section>
  );
}
