import {
  ArrowRight,
  BriefcaseBusiness,
  CircleCheck,
  Clock3,
  FileCheck2,
  GraduationCap,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useState } from "react";

import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";

const shell = "mx-auto w-[calc(100%-2.5rem)] max-w-[1240px] max-[600px]:w-[calc(100%-1.75rem)]";
const section = "py-[108px] max-[600px]:py-[72px]";
const eyebrow = "mb-3 text-[11px] font-bold uppercase tracking-[.16em] text-kbc-purple-600";
const heading = "apm-heading grid grid-cols-[1.05fr_.95fr] items-end gap-20 max-[1000px]:grid-cols-1 max-[1000px]:gap-6 [&_h2]:font-[Georgia,serif] [&_h2]:text-[clamp(42px,5vw,66px)] [&_h2]:leading-[1.02] [&_p]:text-kbc-purple-700";

const modules = [
  ["01", "Governance, Business Case and Project Initiation", "Shape the case for change, clarify outcomes and establish proportionate governance."],
  ["02", "Project Planning and Control", "Build integrated plans across scope, schedule, cost, quality and resources."],
  ["03", "Stakeholder and Communications Management", "Engage people, manage expectations and create clear decision routes."],
  ["04", "Risk, Issue and Change Control", "Identify uncertainty early and keep change visible, assessed and governed."],
  ["05", "Leadership and Team Performance", "Create accountability, collaboration and momentum across project teams."],
  ["06", "Digital, Data and AI for Projects", "Use project information and emerging tools responsibly to improve delivery."],
];
const outputs = [
  ["Business case and project brief", "Define need, benefits, constraints and the basis for approval."],
  ["Integrated project plan", "Connect milestones, resources, dependencies and controls."],
  ["Stakeholder and communications plan", "Map influence and design purposeful engagement."],
  ["Risk, issue and change pack", "Create clear ownership, escalation and decision evidence."],
  ["Project performance dashboard", "Turn delivery information into concise management insight."],
  ["Lessons and benefits review", "Capture learning and improve the next delivery cycle."],
];
const faqs = [
  ["Who is this programme for?", "It is designed for project support professionals, coordinators, workstream leads and aspiring project managers whose role provides meaningful project responsibilities."],
  ["How long does the programme take?", "The planned learning pathway is 12 months, followed by the relevant assessment period. Exact dates are confirmed for each intake."],
  ["Is PMP included?", "The programme includes structured PMP preparation and support. Examination and certification remain subject to PMI's current eligibility and assessment requirements."],
  ["How much time is needed each week?", "Learners should plan for live learning, guided study and applied workplace activity. The exact rhythm is confirmed during onboarding."],
  ["Can an existing employee join?", "Yes, subject to role suitability, employer support, funding eligibility and a review of prior learning."],
];

export default function AssociateProjectManagerPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <main className="apm-page overflow-x-clip bg-white text-kbc-purple-950 [&_h1]:font-[Georgia,serif] [&_h2]:font-[Georgia,serif] [&_h3]:font-[Georgia,serif]">
      <RouteMeta fallbackTitle="Associate Project Manager Level 4 | Kent Business College" fallbackDescription="A 12-month applied pathway that builds confident project managers through professional learning, workplace evidence and PMP preparation." />

      <section className="relative overflow-hidden bg-[#062b34] py-20 text-white before:absolute before:-right-24 before:top-20 before:h-[520px] before:w-[520px] before:rounded-full before:border before:border-white/10">
        <div className={`${shell} relative grid grid-cols-[1.02fr_.98fr] items-center gap-16 max-[1000px]:grid-cols-1`}>
          <div>
            <p className={`${eyebrow} !text-kbc-gold-500`}>Associate Project Manager · Level 4</p>
            <h1 className="kbc-hero-title max-w-[700px]">Build confident project managers who can turn plans into <span className="text-kbc-gold-500">delivery.</span></h1>
            <p className="mt-7 max-w-[650px] text-lg leading-8 text-white/75">A structured, work-based programme that develops the judgement, tools and behaviours needed to support projects and step into confident delivery leadership.</p>
            <div className="mt-8 flex flex-wrap gap-3 max-[540px]:flex-col"><NavigationButton to="#contact" variant="projectControls">Discuss the programme <ArrowRight size={18} /></NavigationButton><NavigationButton to="#pathway" variant="projectControlsInverse">Explore the pathway</NavigationButton></div>
            <p className="mt-7 flex items-center gap-2 text-xs text-white/60"><CircleCheck className="text-kbc-gold-500" size={17} /> Work-based · 12-month learning pathway · PMP preparation</p>
          </div>
          <div className="relative rounded-[26px] border border-white/15 bg-white/5 p-5 shadow-2xl">
            <div className="rounded-2xl bg-white p-6 text-kbc-purple-950">
              <div className="flex items-center justify-between border-b pb-4"><div><span className="text-[10px] font-bold uppercase tracking-widest text-kbc-purple-600">Project readiness</span><h2 className="mt-1 text-2xl">Programme dashboard</h2></div><span className="grid h-16 w-16 place-items-center rounded-full border-8 border-[#dff1e5] text-sm font-bold">82</span></div>
              <div className="mt-5 grid grid-cols-3 gap-3 max-[520px]:grid-cols-1">{[["Scope", "Clear"], ["Team", "Aligned"], ["Risk", "Visible"]].map(([label, status]) => <div className="rounded-xl bg-[#f6f4fa] p-4" key={label}><span className="text-[10px] text-kbc-purple-600">{label}</span><b className="mt-5 block text-sm">{status}</b><i className="mt-3 block h-1 rounded bg-kbc-purple-600" /></div>)}</div>
              <div className="mt-4 rounded-xl bg-[#062b34] p-4 text-white"><span className="text-[10px] text-white/60">Next decision</span><b className="mt-1 block text-sm">Confirm delivery baseline</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-1 border-b bg-white py-6 shadow-[0_12px_36px_rgba(15,7,29,.08)]">
        <div className={`${shell} grid grid-cols-5 gap-4 max-[820px]:grid-cols-2 max-[520px]:grid-cols-1`}>{[["Level", "4"], ["Learning pathway", "12 months"], ["Professional prep", "PMP"], ["Delivery", "Work-based"], ["Funding", "Eligibility applies"]].map(([label, value]) => <div className="border-l border-kbc-purple-100 pl-4" key={label}><span className="block text-[10px] uppercase tracking-wider text-kbc-purple-600">{label}</span><b className="mt-1 block text-sm">{value}</b></div>)}</div>
      </section>

      <section className={section}>
        <div className={`${shell} grid grid-cols-[.9fr_1.1fr] items-center gap-20 max-[900px]:grid-cols-1`}>
          <div className="relative overflow-hidden rounded-3xl"><img className="h-[520px] w-full object-cover" src="/assets/images/figma-home/workplace-teaching.png" alt="Project management learning applied in the workplace" /><div className="absolute inset-x-5 bottom-5 rounded-xl bg-[#062b34]/95 p-5 text-white"><span className="text-[10px] uppercase tracking-widest text-kbc-gold-500">Applied from day one</span><b className="mt-2 block text-lg">Learn the discipline. Apply it to the project.</b></div></div>
          <div><p className={eyebrow}>Programme overview</p><h2 className="text-[clamp(42px,5vw,66px)] leading-[1.02]">From project support to confident delivery leadership.</h2><p className="mt-6 leading-8 text-kbc-purple-700">The programme connects practical project management with professional judgement. Learners build plans, lead stakeholder activity, manage risks and changes, and create evidence that strengthens delivery at work.</p><div className="mt-8 grid gap-4">{[[BriefcaseBusiness, "Applied practice", "Use tools and decisions in a live project context."], [Users, "Professional behaviours", "Build communication, leadership and accountability."], [FileCheck2, "Visible evidence", "Create project outputs that show capability and impact."], [GraduationCap, "Professional progression", "Prepare for the next role and PMP assessment route."]].map(([Icon, title, text]) => { const ItemIcon = Icon as typeof BriefcaseBusiness; return <article className="grid grid-cols-[44px_1fr] gap-4 border-b border-kbc-purple-100 pb-4" key={String(title)}><span className="grid h-11 w-11 place-items-center rounded-full bg-[#f0ebfa] text-kbc-purple-600"><ItemIcon size={19} /></span><div><b>{String(title)}</b><p className="mt-1 text-sm text-kbc-purple-700">{String(text)}</p></div></article>; })}</div></div>
        </div>
      </section>

      <section className={`${section} bg-[#f3f0e8]`}>
        <div className={shell}><div className={heading}><div><p className={eyebrow}>A connected programme</p><h2>One programme. Three connected layers of capability.</h2></div></div><div className="mt-14 grid grid-cols-3 gap-4 max-[760px]:grid-cols-1">{[["01", "Associate Project Manager Level 4", "Core project knowledge, practical tools and professional behaviours."], ["02", "PMP preparation and professional progression", "Structured support to understand the body of knowledge and prepare for assessment."], ["03", "Live project controls and evidence", "Workplace outputs that improve delivery and demonstrate capability."]].map(([n, title, text]) => <article className="min-h-[300px] rounded-2xl bg-white p-7 shadow-sm" key={n}><span className="text-xs font-bold text-kbc-purple-600">{n}</span><h3 className="mt-16 text-2xl leading-tight">{title}</h3><p className="mt-4 text-sm leading-6 text-kbc-purple-700">{text}</p><i className="mt-8 block h-1 w-16 bg-kbc-purple-600" /></article>)}</div></div>
      </section>

      <section className={section} id="pathway">
        <div className={shell}><div className={heading}><div><p className={eyebrow}>12-month pathway</p><h2>A clear route from project foundations to applied AI.</h2></div></div><div className="mt-14 grid grid-cols-[.4fr_1.6fr] gap-8 max-[820px]:grid-cols-1"><aside className="rounded-2xl bg-[#062b34] p-6 text-white"><span className="text-[10px] uppercase tracking-widest text-kbc-gold-500">Your pathway</span><div className="mt-8 grid gap-2">{["Initiate", "Plan", "Engage", "Control", "Lead", "Improve"].map((item, index) => <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3" key={item}><span className="text-xs text-kbc-gold-500">0{index + 1}</span><b className="text-sm">{item}</b></div>)}</div></aside><div className="grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">{modules.map(([n, title, text], index) => <article className={`rounded-2xl border p-6 ${index === 0 ? "border-[#bfe1c8] bg-[#f0f8f2]" : "border-kbc-purple-100 bg-white"}`} key={n}><div className="flex justify-between"><span className="text-xs font-bold text-kbc-purple-600">{n}</span>{index === 0 && <b className="rounded-full bg-[#d9efdf] px-2 py-1 text-[10px] text-[#236d3c]">Start here</b>}</div><h3 className="mt-10 text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-kbc-purple-700">{text}</p></article>)}</div></div></div>
      </section>

      <section className={`${section} bg-[#062b34] text-white`}>
        <div className={`${shell} grid grid-cols-[.9fr_1.1fr] items-center gap-20 max-[900px]:grid-cols-1`}><div><p className={`${eyebrow} !text-kbc-gold-500`}>Human-centred technology</p><h2 className="text-[clamp(42px,5vw,66px)] leading-none text-white">Technology can surface the signal. People still make the judgement.</h2><p className="mt-6 leading-8 text-white/70">Learners use data, dashboards and AI as governed project tools, keeping accountability, context and professional judgement visible.</p></div><div className="relative rounded-3xl border border-white/15 bg-white/5 p-8"><div className="mx-auto grid h-36 w-36 place-items-center rounded-full border-[18px] border-kbc-gold-500/30 bg-kbc-gold-500 text-center text-sm font-bold text-kbc-purple-950">HUMAN<br />JUDGEMENT</div><div className="mt-8 grid grid-cols-2 gap-3 max-[520px]:grid-cols-1">{["Project data", "AI-supported insight", "Team context", "Governance and ethics"].map((item) => <span className="rounded-xl border border-white/15 bg-white/5 p-4 text-center text-sm" key={item}>{item}</span>)}</div></div></div>
      </section>

      <section className={`${section} bg-[#f3f0e8]`}>
        <div className={shell}><div className={heading}><div><p className={eyebrow}>Full project lifecycle</p><h2>Capability across the full project lifecycle.</h2></div></div><div className="mt-14 grid grid-cols-5 gap-3 max-[900px]:grid-cols-3 max-[600px]:grid-cols-1">{["Business case", "Initiation", "Planning", "Delivery", "Handover", "Stakeholders", "Risk and issues", "Change control", "Benefits", "Lessons learned"].map((item, index) => <article className="min-h-32 rounded-xl bg-white p-5 shadow-sm" key={item}><span className="text-[10px] font-bold text-kbc-purple-600">{String(index + 1).padStart(2, "0")}</span><b className="mt-8 block text-sm">{item}</b></article>)}</div></div>
      </section>

      <section className={section}>
        <div className={shell}><div className={heading}><div><p className={eyebrow}>Workplace evidence</p><h2>Build evidence through real project outputs.</h2></div></div><div className="mt-14 grid grid-cols-3 gap-4 max-[800px]:grid-cols-2 max-[540px]:grid-cols-1">{outputs.map(([title, text], index) => <article className="min-h-[230px] rounded-2xl border border-kbc-purple-100 p-6 transition hover:-translate-y-1 hover:shadow-xl" key={title}><div className="flex justify-between"><span className="text-xs font-bold text-kbc-purple-600">0{index + 1}</span><FileCheck2 className="text-kbc-purple-300" size={20} /></div><h3 className="mt-12 text-xl">{title}</h3><p className="mt-3 text-sm leading-6 text-kbc-purple-700">{text}</p></article>)}</div></div>
      </section>

      <section className={`${section} bg-[#eef7f7]`}>
        <div className={`${shell} grid grid-cols-[.9fr_1.1fr] items-center gap-20 max-[900px]:grid-cols-1`}><div className="relative overflow-hidden rounded-3xl"><img className="h-[500px] w-full object-cover" src="/assets/images/learner-home/masterclass.webp" alt="Live professional project management learning" /><div className="absolute inset-x-5 bottom-5 rounded-xl bg-[#062b34]/95 p-5 text-white"><b>Professional learning built around work.</b></div></div><div><p className={eyebrow}>Learning experience</p><h2 className="text-[clamp(42px,5vw,66px)] leading-none">Structured enough to build capability. Flexible enough to fit work.</h2><p className="mt-6 leading-8 text-kbc-purple-700">Live workshops, guided preparation, workplace practice and coaching create a repeatable learning rhythm.</p><div className="mt-8 grid gap-3">{[[Clock3, "Live professional workshops"], [Network, "Peer and tutor collaboration"], [BriefcaseBusiness, "Applied workplace activity"], [FileCheck2, "Feedback and portfolio evidence"]].map(([Icon, label]) => { const RowIcon = Icon as typeof Clock3; return <div className="flex items-center gap-4 border-b border-kbc-purple-100 py-3" key={String(label)}><span className="grid h-10 w-10 place-items-center rounded-full bg-white text-kbc-purple-600"><RowIcon size={18} /></span><b>{String(label)}</b></div>; })}</div></div></div>
      </section>

      <section className={`${section} bg-[#062b34] text-white`}>
        <div className={shell}><div className={heading}><div><p className={`${eyebrow} !text-kbc-gold-500`}>Work gets delivered</p><h2 className="!text-white">Develop project capability that improves how work gets delivered.</h2></div></div><div className="mt-14 grid grid-cols-4 gap-4 max-[760px]:grid-cols-2 max-[520px]:grid-cols-1">{[["01", "Stronger governance"], ["02", "Clearer stakeholder alignment"], ["03", "Earlier risk visibility"], ["04", "Integrated control and learning"]].map(([n, title]) => <article className="min-h-44 rounded-2xl border border-white/15 bg-white/5 p-6" key={n}><span className="text-xs text-kbc-gold-500">{n}</span><h3 className="mt-14 text-xl text-white">{title}</h3></article>)}</div></div>
      </section>

      <section className={section}>
        <div className={shell}><div className={heading}><div><p className={eyebrow}>Funding and eligibility</p><h2>Confirm the apprenticeship funding route with KBC.</h2></div></div><div className="mt-14 grid grid-cols-[.72fr_1.28fr] gap-5 max-[800px]:grid-cols-1"><article className="rounded-2xl bg-[#062b34] p-8 text-white"><span className="text-[10px] uppercase tracking-widest text-kbc-gold-500">Apprenticeship funding band</span><b className="mt-8 block text-5xl">£7,000</b><p className="mt-5 text-sm leading-6 text-white/70">Subject to the current funding rules and written eligibility confirmation.</p><NavigationButton className="mt-8" to="/eligibility" variant="projectControls">Check eligibility</NavigationButton></article><div className="grid grid-cols-2 gap-4 max-[540px]:grid-cols-1">{[[ShieldCheck, "Role and programme suitability"], [Users, "Employer agreement and support"], [FileCheck2, "Prior-learning review"], [GraduationCap, "English and maths requirements"]].map(([Icon, title]) => { const CheckIcon = Icon as typeof ShieldCheck; return <article className="rounded-2xl border border-kbc-purple-100 p-6" key={String(title)}><CheckIcon className="text-kbc-purple-600" /><h3 className="mt-9 text-xl">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-kbc-purple-700">Confirmed with each learner and employer before the programme starts.</p></article>; })}</div></div></div>
      </section>

      <section className={`${section} bg-[#f3f0e8]`}>
        <div className={shell}><div className={heading}><div><p className={eyebrow}>Learner journey</p><h2>From initial conversation to an agreed training plan.</h2></div></div><div className="mt-14 grid grid-cols-3 gap-4 max-[760px]:grid-cols-2 max-[520px]:grid-cols-1">{["Discuss role and aspirations", "Confirm employer support", "Review prior learning", "Complete eligibility checks", "Agree the training plan", "Start with clear expectations"].map((item, index) => <article className="rounded-2xl bg-white p-6" key={item}><span className="grid h-9 w-9 place-items-center rounded-full bg-kbc-purple-950 text-xs text-white">0{index + 1}</span><h3 className="mt-8 text-lg">{item}</h3></article>)}</div></div>
      </section>

      <section className={section}>
        <div className={`${shell} grid grid-cols-[.72fr_1.28fr] gap-20 max-[900px]:grid-cols-1`}><div><p className={eyebrow}>Important details</p><h2 className="text-[clamp(38px,4vw,54px)] leading-none">Practical answers before you apply.</h2><p className="mt-5 text-kbc-purple-700">Programme dates, funding and professional-body requirements are confirmed for the relevant intake.</p><NavigationButton className="mt-7" to="/contact" variant="primary">Talk to the team</NavigationButton></div><div className="overflow-hidden rounded-2xl border border-kbc-purple-100">{faqs.map(([question, answer]) => <details className="border-b border-kbc-purple-100 last:border-0" open={openFaq === question} key={question}><summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-6 font-bold" onClick={(event) => { event.preventDefault(); setOpenFaq(openFaq === question ? null : question); }}>{question}<span className="text-xl text-kbc-purple-600">+</span></summary><p className="px-6 pb-6 text-sm leading-6 text-kbc-purple-700">{answer}</p></details>)}</div></div>
      </section>

      <section className="bg-[#062b34] py-20 text-white" id="contact"><div className={`${shell} grid grid-cols-[1.2fr_.8fr] items-end gap-14 max-[850px]:grid-cols-1`}><div><p className={`${eyebrow} !text-kbc-gold-500`}>Build the next level</p><h2 className="text-[clamp(40px,5vw,64px)] leading-none text-white">Build the project capability your organisation needs next.</h2><p className="mt-5 max-w-[700px] text-white/70">Discuss the role, employer responsibilities, workplace evidence and funding route with the KBC team.</p></div><div className="flex flex-wrap gap-3"><NavigationButton to="/contact" variant="projectControls">Book a consultation <ArrowRight size={18} /></NavigationButton><NavigationButton to="/events" variant="projectControlsInverse">View information events</NavigationButton></div></div></section>
    </main>
  );
}
