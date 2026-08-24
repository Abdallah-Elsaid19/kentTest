import { ArrowRight } from "lucide-react";

const coreModules = [
  { number: "01", title: "PMP Preparation", owner: "PMI", value: "2 credits", duration: "8 months", text: "Develop project leadership across people, process and the business environment, aligned to the Project Management Professional examination route." },
  { number: "02", title: "AI in Project Controls", owner: "KBC / IPC", value: "1 credit", duration: "4 months", text: "Build responsible AI workflows, dashboards and governed agents that operate in structured project-controls data while retaining human approval and accountability." },
  { number: "03", title: "Project Planning and Control", owner: "APMG", value: "2 credits", duration: "8 months", text: "Develop integrated controls across scope, schedule, cost, risk, earned value, forecasting and change to support credible delivery decisions." },
];

const electives = [
  { number: "04", title: "APM Risk Management", owner: "APM", value: "1 credit", duration: "4 months", text: "Strengthen the ability to identify, analyse, plan, lead and review challenge-based risk and opportunity management across the project life cycle." },
  { number: "05", title: "Earned Value Management", owner: "APMG", value: "1 credit", duration: "4 months", text: "Develop an integrated view of scope, schedule and cost performance, supported by objective measures, forecasts and recovery recommendations." },
  { number: "06", title: "PMI Scheduling Professional", owner: "PMI", value: "1 credit", duration: "4 months", text: "Develop advanced scheduling capability and prepare eligible professionals for the PMI Scheduling Professional examination route." },
];

export function OperationalCredits() {
  return <>
    <div className="mb-10 max-w-[780px]">
      <p className="mb-4 flex items-center text-[10px] font-bold uppercase tracking-[.17em] text-kbc-purple-600">Select six credits</p>
      <h2 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(40px,5vw,66px)] leading-[1.03] tracking-[-.035em]">Six credits that build operational capability.</h2>
      <p className="mt-4 max-w-[690px] text-[14px] leading-6 text-kbc-purple-700">Each credit provides a structured context for applying the full Project Controls Professional occupational standard.</p>
    </div>

    <div className="overflow-hidden rounded-2xl border border-kbc-purple-100 bg-white shadow-lg">
      <div className="flex items-center justify-between gap-6 bg-kbc-purple-50 px-7 py-5 max-[600px]:items-start">
        <div><h3 className="text-xl">How the six-credit pathway flows</h3><p className="mt-1 text-xs text-kbc-purple-700">Complete the three core components, then select one specialist elective.</p></div>
        <div className="shrink-0 rounded-lg bg-white px-4 py-2 text-right"><b className="text-2xl text-kbc-purple-600">6</b><span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-kbc-purple-700">total credits</span></div>
      </div>
      <div className="grid grid-cols-4 max-[850px]:grid-cols-2 max-[520px]:grid-cols-1">
        {[...coreModules, { number: "", title: "Choose one specialist elective", owner: "APM / APMG / PMI", value: "1 credit", duration: "4 months" }].map((item, index) => <div className={`border-r border-t border-kbc-purple-100 p-5 last:border-r-0 ${index === 3 ? "bg-kbc-purple-950 text-white" : "bg-white"}`} key={item.title}>
          <span className={`text-[9px] font-bold uppercase tracking-[.14em] ${index === 3 ? "text-kbc-gold-500" : "text-kbc-purple-600"}`}>{index === 3 ? "Specialist choice" : `Core component ${index + 1}`}</span>
          <h3 className={`mt-4 text-lg leading-tight ${index === 3 ? "text-white" : ""}`}>{item.title}</h3>
          <p className={`mt-2 text-[11px] ${index === 3 ? "text-white/65" : "text-kbc-purple-700"}`}>{item.owner}</p>
          <b className={`mt-5 block text-xs ${index === 3 ? "text-kbc-gold-500" : "text-kbc-purple-600"}`}>{item.value}</b>
        </div>)}
      </div>
    </div>

    <div className="mt-7 grid gap-4">
      {coreModules.map((module) => <CreditRow key={module.number} module={module} />)}
      {electives.map((module) => <CreditRow elective key={module.number} module={module} />)}
    </div>
    <aside className="mt-6 rounded-xl border border-kbc-purple-100 border-l-4 border-l-kbc-gold-500 bg-kbc-purple-50 px-6 py-5 text-[12px] leading-5 text-kbc-purple-700"><b className="text-kbc-purple-600">Assessment and award boundary: </b>The learning plan confirms the selected module and examination arrangements. External awards remain subject to the relevant professional body’s current rules.</aside>
  </>;
}

function CreditRow({ module, elective = false }: { module: typeof coreModules[number]; elective?: boolean }) {
  return <article className="grid grid-cols-[220px_1fr] overflow-hidden rounded-2xl border border-kbc-purple-100 bg-white shadow-sm max-[650px]:grid-cols-1" id={`credit-${module.number}`}>
    <div className={`p-6 ${elective ? "bg-kbc-purple-950 text-white" : "bg-kbc-purple-50"}`}>
      <span className={`text-[9px] font-bold uppercase tracking-[.15em] ${elective ? "text-kbc-gold-500" : "text-kbc-purple-600"}`}>{elective ? "Select one elective" : "Core component"}</span>
      <strong className={`mt-2 block font-['Source_Serif_4',Georgia,serif] text-6xl leading-none ${elective ? "text-kbc-gold-500" : "text-kbc-purple-600"}`}>{module.number}</strong>
      <dl className={`mt-5 grid gap-2 border-t pt-4 text-[10px] ${elective ? "border-white/15 text-white/70" : "border-kbc-purple-100 text-kbc-purple-700"}`}>
        <div className="flex justify-between gap-3"><dt>Owner</dt><dd className="font-semibold">{module.owner}</dd></div>
        <div className="flex justify-between gap-3"><dt>Value</dt><dd className="font-semibold">{module.value}</dd></div>
        <div className="flex justify-between gap-3"><dt>Duration</dt><dd className="font-semibold">{module.duration}</dd></div>
      </dl>
    </div>
    <div className="flex flex-col items-start justify-center p-7 max-[650px]:p-6">
      <h3 className="text-2xl">{module.title}</h3>
      <p className="mt-3 max-w-[760px] text-[13px] leading-6 text-kbc-purple-700">{module.text}</p>
      <a className="mt-6 inline-flex items-center gap-2 rounded-md border border-kbc-purple-200 px-3 py-2 text-[11px] font-bold text-kbc-purple-600 transition-colors hover:bg-kbc-purple-50" href="#apply">Discuss this component <ArrowRight size={14} /></a>
    </div>
  </article>;
}
