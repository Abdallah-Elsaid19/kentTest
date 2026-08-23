import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  Building2,
  Check,
  Factory,
  Gauge,
  Network,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";

import { sectorDetails } from "./sectorData";

const shell = "mx-auto w-[calc(100%-2.5rem)] max-w-[1240px] max-[600px]:w-[calc(100%-1.75rem)]";
const section = "py-28 max-[600px]:py-20";
const title = "font-['Source_Serif_4',Georgia,serif] text-[clamp(44px,5vw,68px)] font-semibold leading-[1.01] tracking-[-.045em] text-kbc-purple-950";
const eyebrow = "mb-4 text-[11px] font-bold uppercase tracking-[.16em] text-kbc-purple-600";

const pathways = [
  ["01", "Operational Pathway", "Emerging and developing professionals", "Planning, scheduling, earned value and delivery performance."],
  ["02", "Strategic Pathway", "Senior controls and programme leaders", "Governance, portfolio insight, assurance and decision support."],
  ["03", "Chartered Pathway", "Senior evidence and professional progression", "Technical knowledge and professional-practice readiness."],
  ["04", "PMO Certified", "PMO governance and operating-model specialists", "Standards, capability, assurance and portfolio coordination."],
];

const accentStyles = {
  gold: {
    text: "text-kbc-gold-500",
    soft: "bg-kbc-gold-50",
    border: "border-kbc-gold-500/45",
    icon: Building2,
  },
  mint: {
    text: "text-kbc-gold-500",
    soft: "bg-kbc-purple-50",
    border: "border-kbc-gold-500/45",
    icon: Zap,
  },
  violet: {
    text: "text-kbc-gold-500",
    soft: "bg-kbc-purple-50",
    border: "border-kbc-gold-500/45",
    icon: Factory,
  },
};

export default function SectorDetailPage() {
  const { sectorSlug = "" } = useParams();
  const sector = sectorDetails[sectorSlug];

  if (!sector) return <Navigate replace to="/sectors" />;

  const accent = accentStyles[sector.accent];
  const SectorIcon = accent.icon;

  return (
    <div className="overflow-x-clip bg-white font-['Poppins',Arial,sans-serif] text-kbc-purple-950">
      <RouteMeta
        fallbackTitle={`${sector.name} Project Controls | Kent Business College`}
        fallbackDescription={`${sector.name} project-controls pathways for planning, cost, risk, governance, performance and decision support.`}
      />

      <section className="relative overflow-hidden bg-kbc-purple-950 text-white">
        <div className="absolute inset-0 opacity-[.08] [background-image:linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="absolute -right-40 top-8 h-[600px] w-[600px] rounded-full border border-white/10" />
        <div className={`${shell} relative grid min-h-[720px] grid-cols-[1.05fr_.95fr] items-center gap-20 py-20 max-[900px]:grid-cols-1 max-[900px]:gap-12`}>
          <div>
            <Link className="mb-8 inline-flex items-center gap-2 text-[11px] font-semibold text-white/65 hover:text-white" to="/sectors">
              <ArrowLeft size={15} /> Back to all sectors
            </Link>
            <p className={`text-[11px] font-bold uppercase tracking-[.16em] ${accent.text}`}>{sector.eyebrow}</p>
            <h1 className="kbc-hero-title mt-5 max-w-[720px]">
              {sector.heroLines.map((line, index) => (
                <span className={`block ${index === sector.heroLines.length - 1 ? accent.text : ""}`} key={line}>{line}</span>
              ))}
            </h1>
            <p className="mt-7 max-w-[690px] text-[15px] leading-7 text-white/72">{sector.heroLead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <NavigationButton to="/project-controls-professional-level-6" variant="projectControls">
                Compare professional pathways <ArrowRight size={17} />
              </NavigationButton>
              <NavigationButton to="/eligibility" variant="projectControlsInverse">Check workforce eligibility</NavigationButton>
            </div>
          </div>

          <div className="relative min-h-[470px] rounded-[28px] border border-white/15 bg-white/[.06] p-7 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[.15em] text-white/55">Integrated control environment</span>
              <span className={`grid h-12 w-12 place-items-center rounded-xl border bg-white/10 ${accent.border}`}><SectorIcon className={accent.text} size={25} /></span>
            </div>
            <div className="absolute left-1/2 top-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-kbc-purple-900 shadow-[0_0_70px_rgba(214,176,78,.14)]">
              <div className="text-center"><Gauge className={`mx-auto ${accent.text}`} size={30} /><b className="mt-2 block text-xs text-white">Decision confidence</b></div>
            </div>
            {[
              ["Scope", "left-7 top-[34%]"], ["Schedule", "right-7 top-[31%]"], ["Cost", "bottom-16 left-10"], ["Risk & change", "bottom-12 right-8"],
            ].map(([label, position]) => <span className={`absolute ${position} rounded-xl border border-white/15 bg-white/[.07] px-4 py-3 text-[11px] font-semibold text-white/75`} key={label}>{label}</span>)}
          </div>
        </div>

        <div className="relative border-t border-white/15 bg-white/[.035]">
          <div className={`${shell} grid grid-cols-[1.2fr_repeat(4,1fr)] max-[900px]:grid-cols-2 max-[520px]:grid-cols-1`}>
            <div className="border-r border-white/15 px-6 py-7"><b className={`text-[10px] uppercase tracking-[.14em] ${accent.text}`}>Designed for project-driven sectors</b><p className="mt-2 text-xs leading-5 text-white/65">One professional foundation, applied across complex environments.</p></div>
            {sector.environments.map((item) => <div className="border-r border-white/15 px-6 py-7 text-xs font-semibold text-white/75" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={`${shell} grid grid-cols-[1.05fr_.95fr] items-start gap-20 max-[900px]:grid-cols-1`}>
          <div>
            <p className={eyebrow}>{sector.challengeEyebrow}</p>
            <h2 className={title}>{sector.challengeTitle}</h2>
            <p className="mt-6 max-w-[720px] text-[15px] leading-8 text-kbc-purple-700">{sector.challengeBody}</p>
            <blockquote className={`mt-7 rounded-2xl border-l-4 bg-[#f3f0e8] p-6 text-[15px] font-semibold leading-7 text-kbc-purple-950 ${accent.border}`}>{sector.challengeStatement}</blockquote>
          </div>
          <div className="rounded-[24px] bg-kbc-purple-950 p-7 text-white shadow-xl">
            <p className={`text-[10px] font-bold uppercase tracking-[.16em] ${accent.text}`}>Where confidence breaks down</p>
            <div className="mt-5 space-y-3">
              {sector.signals.map(([signal, detail], index) => (
                <article className="rounded-xl border border-white/12 bg-white/[.06] p-5" key={signal}>
                  <span className={accent.text}>{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-['Source_Serif_4',Georgia,serif] text-xl text-white">{signal}</h3>
                  <p className="mt-2 text-xs leading-5 text-white/60">{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${section} ${accent.soft}`}>
        <div className={shell}>
          <div className="max-w-[900px]">
            <p className={eyebrow}>Built for professional levels</p>
            <h2 className={title}>{sector.foundationTitle}</h2>
            <p className="mt-6 max-w-[740px] text-[15px] leading-7 text-kbc-purple-700">{sector.foundationBody}</p>
          </div>
          <div className="mt-12 grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
            {pathways.map(([number, pathway, audience, detail], index) => (
              <article className={`flex min-h-[280px] flex-col rounded-[20px] border p-6 ${index === 0 ? "border-kbc-purple-950 bg-kbc-purple-950 text-white" : "border-kbc-purple-100 bg-white"}`} key={pathway}>
                <span className={`text-xs font-bold ${index === 0 ? accent.text : "text-kbc-purple-600"}`}>{number}</span>
                <h3 className={`mt-8 font-['Source_Serif_4',Georgia,serif] text-[26px] leading-[1.05] ${index === 0 ? "text-white" : "text-kbc-purple-950"}`}>{pathway}</h3>
                <p className={`mt-3 text-xs font-semibold ${index === 0 ? "text-white/75" : "text-kbc-purple-700"}`}>{audience}</p>
                <p className={`mt-auto pt-6 text-[11px] leading-5 ${index === 0 ? "text-white/55" : "text-kbc-purple-600"}`}>{detail}</p>
              </article>
            ))}
          </div>
          <NavigationButton className="mt-8" to="/project-controls-professional-level-6" variant="projectControls">
            Explore programme pathways <ArrowRight size={17} />
          </NavigationButton>
        </div>
      </section>

      <section className={section}>
        <div className={shell}>
          <div className="max-w-[880px]">
            <p className={eyebrow}>Core professional capability</p>
            <h2 className={title}>One control system. Clearer decisions across the delivery lifecycle.</h2>
          </div>
          <div className="mt-12 grid grid-cols-5 gap-3 max-[1000px]:grid-cols-2 max-[520px]:grid-cols-1">
            {[
              [Network, "Integrated baselines", "Connect scope, schedule and cost."],
              [Gauge, "Performance insight", "Turn progress into early warning."],
              [ShieldCheck, "Risk & assurance", "Make exposure and action visible."],
              [Boxes, "Change control", "Protect approved delivery intent."],
              [Sparkles, "Decision support", "Translate evidence into intervention."],
            ].map(([Icon, heading, body]) => {
              const CapabilityIcon = Icon as typeof Network;
              return <article className="rounded-2xl border border-kbc-purple-100 bg-white p-6" key={heading as string}><CapabilityIcon className="text-kbc-purple-600" size={25} /><h3 className="mt-8 font-['Source_Serif_4',Georgia,serif] text-xl">{heading as string}</h3><p className="mt-3 text-xs leading-5 text-kbc-purple-700">{body as string}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className={`${section} bg-kbc-purple-950 text-white`}>
        <div className={`${shell} grid grid-cols-[.9fr_1.1fr] items-center gap-20 max-[850px]:grid-cols-1`}>
          <div>
            <p className={`mb-4 text-[11px] font-bold uppercase tracking-[.16em] ${accent.text}`}>Responsible AI in project controls</p>
            <h2 className={`${title} !text-white`}>AI accelerates the work. Human judgement remains accountable.</h2>
            <p className="mt-6 text-sm leading-7 text-white/65">Use AI responsibly across planning, scheduling, risk analysis, reporting and management information—without removing professional review, confidentiality or decision accountability.</p>
          </div>
          <div className="relative min-h-[360px] rounded-[26px] border border-white/15 bg-white/[.05] p-8">
            <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-center text-kbc-purple-950 shadow-[0_0_60px_rgba(214,176,78,.18)]"><div><Sparkles className="mx-auto text-kbc-purple-600" /><b className="mt-2 block text-xs">Human review</b></div></div>
            {["Analysis", "Scenario planning", "Reporting", "Forecasting"].map((item, index) => <span className={`absolute rounded-xl border border-white/15 bg-white/[.06] px-4 py-3 text-[11px] text-white/70 ${index === 0 ? "left-7 top-9" : index === 1 ? "right-7 top-14" : index === 2 ? "bottom-12 left-9" : "bottom-9 right-8"}`} key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className={`${section} bg-[#f3f0e8]`}>
        <div className={shell}>
          <div className="max-w-[900px]">
            <p className={eyebrow}>Sector application</p>
            <h2 className={title}>{sector.applicationTitle}</h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-kbc-purple-700">{sector.applicationBody}</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">{sector.applications.map((item, index) => <span className={`rounded-full border px-4 py-2 text-xs font-semibold ${index === 0 ? "border-kbc-purple-950 bg-kbc-purple-950 text-white" : "border-kbc-purple-100 bg-white text-kbc-purple-700"}`} key={item}>{item}</span>)}</div>
          <div className="relative mt-5 min-h-[380px] overflow-hidden rounded-[26px] bg-kbc-purple-950 p-9 text-white">
            <div className="absolute inset-0 opacity-[.1] [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:46px_46px]" />
            <div className="relative z-10 flex h-full max-w-[440px] flex-col"><span className={`text-[10px] font-bold uppercase tracking-[.16em] ${accent.text}`}>{sector.name}</span><h3 className="mt-5 font-['Source_Serif_4',Georgia,serif] text-[clamp(38px,4vw,56px)] leading-[1.01] text-white">Connected controls for connected delivery.</h3></div>
            <SectorIcon className={`absolute bottom-8 right-10 h-52 w-52 opacity-45 ${accent.text}`} strokeWidth={.65} />
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={shell}>
          <div className="max-w-[900px]"><p className={eyebrow}>Workplace evidence</p><h2 className={title}>Create project-controls outputs that strengthen delivery.</h2></div>
          <div className="mt-12 grid grid-cols-2 gap-4 max-[700px]:grid-cols-1">
            {sector.outputs.map(([output, detail], index) => <article className="rounded-[20px] border border-kbc-purple-100 bg-white p-7 shadow-[0_10px_32px_rgba(33,17,38,.055)]" key={output}><div className="flex items-center justify-between"><span className="text-xs font-bold text-kbc-purple-600">{String(index + 1).padStart(2, "0")}</span><Check className={accent.text} size={18} /></div><h3 className="mt-8 font-['Source_Serif_4',Georgia,serif] text-[27px] leading-[1.05]">{output}</h3><p className="mt-4 text-xs leading-6 text-kbc-purple-700">{detail}</p></article>)}
          </div>
        </div>
      </section>

      <section className={`${section} ${accent.soft}`}>
        <div className={shell}>
          <div className="max-w-[880px]"><p className={eyebrow}>Sector roles</p><h2 className={title}>Prepare professionals for roles that influence complex projects, systems and programmes.</h2></div>
          <div className="mt-12 grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">{sector.roles.map(([role, detail], index) => <article className="rounded-2xl bg-white p-6" key={role}><span className="text-xs font-bold text-kbc-purple-600">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-8 font-['Source_Serif_4',Georgia,serif] text-[24px] leading-[1.05]">{role}</h3><p className="mt-4 text-xs leading-5 text-kbc-purple-700">{detail}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-kbc-purple-950 py-24 text-center text-white">
        <div className={`${shell} flex flex-col items-center`}>
          <p className={`text-[11px] font-bold uppercase tracking-[.16em] ${accent.text}`}>{sector.name}</p>
          <h2 className="mt-5 max-w-[850px] font-['Source_Serif_4',Georgia,serif] text-[clamp(44px,5vw,68px)] font-semibold leading-[1.01] tracking-[-.045em] text-white">Build the capability to make complex delivery more predictable.</h2>
          <p className="mt-6 max-w-[680px] text-sm leading-7 text-white/65">Discuss roles, pathways, workplace evidence, employer responsibilities and eligibility with the Kent Business College team.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3"><NavigationButton to="/contact" variant="projectControls">Discuss workforce capability <ArrowRight size={17} /></NavigationButton><NavigationButton to="/sectors" variant="projectControlsInverse">Explore all sectors</NavigationButton></div>
        </div>
      </section>
    </div>
  );
}
