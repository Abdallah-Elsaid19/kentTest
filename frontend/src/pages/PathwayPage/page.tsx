import { ArrowRight, Award, BarChart3, Check, ChevronLeft, Search } from "lucide-react";
import { Navigate, useParams } from "react-router-dom";

import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { eligibility, funding, pathwayData, type PathwaySlug } from "./data";
import { OperationalCredits } from "./OperationalCredits";

const shell = "mx-auto w-[calc(100%-2.5rem)] max-w-[1240px] max-[600px]:w-[calc(100%-1.75rem)]";
const section = "py-24 max-[600px]:py-16";
const heading = "font-['Source_Serif_4',Georgia,serif] text-[clamp(40px,5vw,66px)] leading-[1.03] tracking-[-.035em]";

export default function PathwayPage() {
  const { pathwaySlug } = useParams();
  const pathway = pathwayData[pathwaySlug?.replace("-pathway", "") as PathwaySlug];
  if (!pathway) return <Navigate to="/project-controls-professional-level-6" replace />;

  return <div className="bg-white font-['DM_Sans',sans-serif] text-[16px] leading-[1.65] text-kbc-purple-950 [&_h1]:font-['Source_Serif_4',Georgia,serif] [&_h2]:font-['Source_Serif_4',Georgia,serif] [&_h3]:font-['Source_Serif_4',Georgia,serif]">
    <RouteMeta fallbackTitle={`${pathway.title} | Project Controls Professional Level 6`} fallbackDescription={pathway.lead} />
    <section className="relative overflow-hidden bg-gradient-to-br from-kbc-purple-950 via-kbc-purple-900 to-kbc-purple-800 text-white">
      <div aria-hidden="true" className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)", backgroundSize: "240px 240px" }} />
      <div className={`${shell} relative border-x border-white/10`}>
        <NavigationButton className="absolute left-6 top-6 z-10 !min-h-9 border-white/20 !px-3 !text-xs max-[700px]:static max-[700px]:m-4" to="/project-controls-professional-level-6#pathways" variant="projectControlsInverse"><ChevronLeft size={15} /> All pathways</NavigationButton>
        <div className="px-8 pb-10 pt-14 text-center max-[700px]:px-5 max-[700px]:pt-6">
          <p className="mx-auto inline-flex items-center gap-3 rounded-full border border-kbc-gold-500/40 px-5 py-2 text-[10px] font-bold uppercase tracking-[.19em] text-kbc-gold-500 before:h-2 before:w-2 before:rounded-full before:bg-kbc-gold-500">{pathway.eyebrow}</p>
          <h1 className="kbc-hero-title mx-auto mt-7 max-w-[1000px]">{pathway.title}</h1>
          <h2 className="mt-6 font-['DM_Sans',sans-serif] text-[clamp(24px,3vw,38px)] font-bold tracking-[-.035em] text-kbc-gold-500">Project Controls Professional Level 6</h2>
          <p className="mx-auto mt-7 max-w-[900px] text-[17px] leading-8 text-white/70">{pathway.lead}</p>
        </div>

        <div className="border-y border-white/15">
          <p className="py-4 text-center text-[10px] font-bold uppercase tracking-[.18em] text-white/60">What the pathway is designed to build</p>
          <div className="grid grid-cols-5 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">{pathway.heroBuild.map((item) => <div className="flex min-h-28 flex-col items-center justify-center border-r border-t border-white/15 px-5 py-6 text-center last:border-r-0 max-[900px]:border-b" key={item}><span className="mb-3 h-2 w-2 rotate-45 bg-kbc-gold-500" /><b className="text-[13px] leading-5 text-white/90">{item}</b></div>)}</div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 border-b border-white/15 px-6 py-7"><NavigationButton to="/book-session" variant="projectControls">Book an information session <ArrowRight size={18} /></NavigationButton><NavigationButton to="#structure" variant="projectControlsInverse">Explore the pathway</NavigationButton></div>
        <div className="grid grid-cols-3 max-[650px]:grid-cols-1">{pathway.stats.map((stat) => <div className="border-r border-white/15 px-7 py-7 text-left last:border-r-0 max-[650px]:border-b max-[650px]:border-r-0" key={stat.label}><b className="block font-['Source_Serif_4',Georgia,serif] text-[clamp(44px,5vw,64px)] leading-none text-kbc-gold-500">{stat.value}</b><span className="mt-4 block max-w-[260px] text-[13px] font-semibold text-white/70">{stat.label}</span></div>)}</div>
      </div>
    </section>
    <nav className="sticky top-[84px] z-20 border-b border-kbc-purple-100 bg-white/95 backdrop-blur" aria-label="Pathway page sections"><div className={`${shell} flex overflow-x-auto`}>{[["Overview", "overview"], ["Structure", "structure"], ["Role fit", "roles"], ["Capability", "capability"], ["Evidence", "evidence"], ["Eligibility", "eligibility"], ["Funding", "funding"], ["Apply", "apply"]].map(([label, id]) => <a className="shrink-0 px-4 py-4 text-xs font-semibold text-kbc-purple-700 hover:text-kbc-purple-950" href={`#${id}`} key={id}>{label}</a>)}</div></nav>

    <section className={`${section} bg-white`} id="overview">
      <div className={shell}>
        <div className="max-w-[850px]">
          <p className="mb-4 flex items-center text-[10px] font-bold uppercase tracking-[.17em] text-kbc-purple-600">The {pathway.slug} route</p>
          <h2 className={`${heading} max-w-[820px]`}>{pathway.overviewTitle}</h2>
          <p className="mt-5 max-w-[760px] text-[15px] leading-7 text-kbc-purple-700">{pathway.overviewLead}</p>
        </div>
        <div className={`mt-12 grid gap-5 ${pathway.overview.length === 4 ? "grid-cols-4 max-[1000px]:grid-cols-2" : "grid-cols-3 max-[800px]:grid-cols-1"} max-[550px]:grid-cols-1`}>
          {pathway.overview.map((item, index) => {
            const Icon = [BarChart3, Search, Award, Check][index] ?? Check;
            return <article className="rounded-2xl border border-kbc-purple-100 bg-white p-7 shadow-lg" key={item.title}>
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-kbc-purple-100 bg-kbc-purple-50 text-kbc-purple-600"><Icon size={18} aria-hidden="true" /></span>
              <h3 className="mt-5 text-xl">{item.title}</h3>
              <p className="mt-2 text-[13px] leading-6 text-kbc-purple-700">{item.text}</p>
            </article>;
          })}
        </div>
        <aside className="mt-6 rounded-2xl border border-kbc-purple-100 border-l-4 border-l-kbc-gold-500 bg-kbc-purple-50 px-7 py-6 text-[13px] leading-6 text-kbc-purple-700 shadow-sm">
          <b className="text-kbc-purple-600">Important distinction: </b>{pathway.importantDistinction}
        </aside>
      </div>
    </section>

    <section className={section} id="structure"><div className={shell}>{pathway.slug === "operational" ? <OperationalCredits /> : <><div className="pathway-heading mb-12 grid grid-cols-[1fr_.8fr] items-end gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-5"><div><p className="mb-3 text-[11px] font-bold uppercase tracking-[.16em] text-kbc-purple-600">Professional development architecture</p><h2 className={heading}>{pathway.modulesTitle}</h2></div></div><div className="grid grid-cols-2 gap-5 max-[800px]:grid-cols-1">{pathway.modules.map((module) => <article className="flex flex-col rounded-2xl border border-kbc-purple-100 bg-kbc-purple-50 p-8" key={module.number}>
      <div className="flex items-start justify-between gap-4"><span className="text-xs font-bold tracking-[.12em] text-kbc-purple-600">MODULE {module.number}</span><span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-kbc-purple-700">{module.meta}</span></div><h3 className="mt-8 text-[clamp(28px,3vw,39px)] leading-[1.08]">{module.title}</h3><p className="mt-4 text-kbc-purple-700">{module.summary}</p><ul className="mt-6 grid gap-2 border-t border-kbc-purple-100 pt-5">{module.details.map((detail) => <li className="flex items-start gap-3 text-sm" key={detail}><Check className="mt-1 h-4 w-4 shrink-0 text-kbc-purple-600" />{detail}</li>)}</ul><div className="mt-auto pt-7"><p className="rounded-xl bg-white p-4 text-sm"><b className="block text-kbc-purple-600">Indicative workplace output</b>{module.output}</p></div>
    </article>)}</div><div className="mt-6 rounded-2xl border-l-4 border-kbc-gold-500 bg-kbc-purple-950 p-7 text-white"><h3 className="text-2xl text-white">{pathway.recognitionTitle}</h3><p className="mt-3 max-w-[1000px] text-sm text-white/75">{pathway.recognition}</p></div></>}</div></section>

    <section className={`${section} bg-kbc-purple-50`} id="roles">
      <div className={`${shell} max-w-[1040px]`}>
        <div className="max-w-[790px]">
          <p className="mb-4 flex items-center text-[10px] font-bold uppercase tracking-[.17em] text-kbc-purple-600">Who it is for</p>
          <h2 className={heading}>For experienced professionals with access to complex work.</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-5 max-[750px]:grid-cols-1">
          <article className="rounded-2xl border border-kbc-purple-100 bg-white p-7 shadow-lg">
            <h3 className="text-xl">Typical roles</h3>
            <ul className="mt-4 grid gap-2.5">{pathway.roles.map((role) => <li className="flex items-start gap-3 text-[13px] text-kbc-purple-700" key={role}><span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-kbc-purple-600" />{role}</li>)}</ul>
          </article>
          <article className="rounded-2xl bg-kbc-purple-950 p-7 text-white shadow-lg">
            <h3 className="text-xl text-white">A suitable role normally provides</h3>
            <ul className="mt-4 grid gap-2.5">{pathway.roleProvides.map((item) => <li className="flex items-start gap-3 text-[13px] text-white/75" key={item}><span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-kbc-gold-500" />{item}</li>)}</ul>
          </article>
          <article className="rounded-2xl border border-kbc-purple-100 bg-white p-7 shadow-lg">
            <h3 className="text-xl">Initial assessment tests suitability</h3>
            <ul className="mt-4 grid gap-2.5">{pathway.assessmentChecks.map((item) => <li className="flex items-start gap-3 text-[13px] text-kbc-purple-700" key={item}><span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-kbc-purple-600" />{item}</li>)}</ul>
          </article>
          <article className="rounded-2xl border border-kbc-purple-100 bg-white p-7 shadow-lg">
            <h3 className="text-xl">Certification eligibility is separate</h3>
            <p className="mt-4 text-[13px] leading-6 text-kbc-purple-700">{pathway.certificationEligibility}</p>
          </article>
        </div>
      </div>
    </section>
    <section className={`${section} bg-kbc-gold-50`} id="capability"><div className={shell}><p className="mb-3 text-[11px] font-bold uppercase tracking-[.16em] text-kbc-purple-600">Complete occupational capability</p><h2 className={`${heading} max-w-[850px]`}>The technical depth remains mandatory.</h2><div className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-kbc-purple-200 max-[800px]:grid-cols-2 max-[520px]:grid-cols-1">{pathway.capabilities.map((item, index) => <article className="min-h-40 bg-white p-6" key={item}><span className="text-xs font-bold text-kbc-purple-600">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-7 text-xl">{item}</h3></article>)}</div></div></section>
    <section className={section} id="evidence"><div className={`${shell} grid grid-cols-[.8fr_1.2fr] gap-16 max-[850px]:grid-cols-1`}><div><p className="mb-3 text-[11px] font-bold uppercase tracking-[.16em] text-kbc-purple-600">Applied evidence</p><h2 className={heading}>Make workplace impact visible.</h2><p className="mt-5 text-kbc-purple-700">Evidence should show authenticity, complexity, personal contribution, judgement, outcomes and reflection while protecting confidential information.</p></div><ol className="grid grid-cols-2 gap-3 max-[560px]:grid-cols-1">{pathway.evidence.map((item, index) => <li className="flex items-center gap-4 rounded-xl bg-kbc-purple-50 p-5" key={item}><b className="text-kbc-purple-600">{String(index + 1).padStart(2, "0")}</b><span className="font-semibold">{item}</span></li>)}</ol></div></section>
    <section className={`${section} bg-kbc-gold-50`} id="eligibility"><div className={shell}><div className="mb-12 max-w-[820px]"><p className="mb-3 text-[11px] font-bold uppercase tracking-[.16em] text-kbc-purple-600">Eligibility guide</p><h2 className={heading}>Could this apprenticeship be right for you?</h2><p className="mt-5 text-kbc-purple-700">This is an initial indication only. Kent Business College confirms suitability and funding after a full review.</p></div><ol className="grid grid-cols-2 gap-4 max-[750px]:grid-cols-1">{eligibility.map((item, index) => <li className="flex gap-5 rounded-2xl bg-white p-6" key={item}><b className="font-['Source_Serif_4',Georgia,serif] text-3xl text-kbc-purple-600">{index + 1}</b><span>{item}</span></li>)}</ol></div></section>
    <section className={section} id="funding"><div className={shell}><p className="mb-3 text-[11px] font-bold uppercase tracking-[.16em] text-kbc-purple-600">2026/27 funding scenarios</p><h2 className={heading}>Funding depends on learner and employer circumstances.</h2><div className="mt-12 grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">{funding.map((item) => <article className="rounded-2xl border border-kbc-purple-100 p-6" key={item.title}><h3 className="text-xl">{item.title}</h3><p className="mt-3 text-sm text-kbc-purple-700">{item.text}</p></article>)}</div><p className="mt-6 rounded-xl bg-kbc-purple-50 p-5 text-sm text-kbc-purple-700">Funding rules, standard versions, professional certification names, examinations and included benefits can change. The signed apprenticeship agreement, training plan, employer contract and learner offer take precedence. {pathway.reviewed}</p></div></section>
    <section className="bg-kbc-purple-950 py-24 text-white" id="apply"><div className={`${shell} grid grid-cols-[1fr_auto] items-end gap-12 max-[750px]:grid-cols-1`}><div><p className="mb-3 text-[11px] font-bold uppercase tracking-[.16em] text-kbc-gold-500">Next step</p><h2 className={`${heading} max-w-[850px] text-white`}>Let’s review your role, experience and pathway fit.</h2><p className="mt-5 max-w-[760px] text-white/70">We’ll discuss prior learning, employer support, funding eligibility and the most appropriate pathway before enrolment.</p></div><NavigationButton to="/book-session" variant="projectControls">Book an information session <ArrowRight size={18} /></NavigationButton></div></section>
  </div>;
}
