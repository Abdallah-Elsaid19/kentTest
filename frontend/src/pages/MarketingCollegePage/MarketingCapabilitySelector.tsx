import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { NavigationTabButton } from "@/components/navigation";
import { marketingCapabilities } from "./capabilities";

export function MarketingCapabilitySelector() {
  const [activeId, setActiveId] = useState(marketingCapabilities[0].id);
  const capability = marketingCapabilities.find((item) => item.id === activeId) ?? marketingCapabilities[0];

  return <div className="mk-capability grid grid-cols-[25%_1fr] gap-9 max-[1080px]:grid-cols-1">
    <div className="mk-capability__tabs grid content-start gap-2" role="tablist" aria-label="Marketing capabilities">
      {marketingCapabilities.map((item) => <NavigationTabButton active={item.id === activeId} aria-controls={`marketing-capability-${item.id}`} aria-selected={item.id === activeId} className="mk-capability__tab w-full justify-start rounded-md border bg-white p-5 text-left [&_svg]:ml-auto" id={`marketing-capability-tab-${item.id}`} key={item.id} onClick={() => setActiveId(item.id)} role="tab"><span>{item.label}</span>{item.id === activeId && <ArrowUpRight aria-hidden="true" />}</NavigationTabButton>)}
    </div>
    <article className="min-h-[560px] rounded-2xl bg-kbc-purple-950 p-12 text-white max-[600px]:p-7" aria-labelledby={`marketing-capability-tab-${capability.id}`} id={`marketing-capability-${capability.id}`} role="tabpanel">
      <p className="mk-capability__eyebrow text-[11px] font-bold uppercase tracking-[.14em] text-kbc-gold-500">{capability.number} · {capability.eyebrow}</p>
      <h3 className="mt-7 max-w-[800px] font-['Source_Serif_4',Georgia,serif] text-[clamp(42px,5vw,68px)] leading-[1.02] text-white">{capability.title}</h3>
      <p className="mt-5 max-w-[760px] text-white/80">{capability.description}</p>
      <div className="mk-capability__features mt-9 grid grid-cols-2 gap-3 max-[600px]:grid-cols-1">{capability.features.map((feature) => <div className="rounded-2xl border border-white/20 bg-white/10 p-5" key={feature.title}><b>{feature.title}</b><p className="mt-2 text-sm text-white/75">{feature.description}</p></div>)}</div>
    </article>
  </div>;
}
