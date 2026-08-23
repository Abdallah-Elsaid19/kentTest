import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { NavigationTabButton } from "@/components/navigation";
import { projectControlsCapabilities } from "./capabilities";

export function CapabilitySelector() {
  const [activeId, setActiveId] = useState(projectControlsCapabilities[0].id);
  const capability = projectControlsCapabilities.find((item) => item.id === activeId) ?? projectControlsCapabilities[0];

  return <div className="pc-capability-grid grid grid-cols-[32%_1fr] gap-10 max-[1080px]:grid-cols-1">
    <div className="pc-tabs grid content-start gap-2" role="tablist" aria-label="Project Controls capabilities">
      {projectControlsCapabilities.map((item) => <NavigationTabButton active={item.id === activeId} aria-controls={`capability-panel-${item.id}`} aria-selected={item.id === activeId} className="pc-capability-tab" id={`capability-tab-${item.id}`} key={item.id} onClick={() => setActiveId(item.id)} role="tab"><span>{item.number}</span><b>{item.label}</b>{item.id === activeId && <ArrowRight aria-hidden="true" />}</NavigationTabButton>)}
    </div>
    <article aria-labelledby={`capability-tab-${capability.id}`} className="pc-feature relative min-h-[450px] overflow-hidden rounded-2xl bg-kbc-purple-950 p-12 text-white max-[600px]:p-7" id={`capability-panel-${capability.id}`} role="tabpanel">
      <p className="pc-eyebrow mb-3.5 text-[11px] font-bold uppercase tracking-[.14em] text-kbc-gold-500">{capability.label}</p>
      <h3 className="max-w-[780px] font-['Source_Serif_4',Georgia,serif] text-[clamp(40px,4.6vw,64px)] leading-[1.02] text-white">{capability.title}</h3>
      <p className="mt-5 max-w-[760px] text-white/80">{capability.description}</p>
      <div className="pc-feature__tags mt-7 flex flex-wrap gap-2">{capability.tags.map((tag) => <span className="rounded-full border border-white/20 px-3 py-2 text-xs" key={tag}>{tag}</span>)}</div>
      <div className="pc-bars absolute bottom-8 right-8 flex h-40 w-[36%] items-end gap-3" aria-hidden="true">{capability.bars.map((height, index) => <i className="flex-1 rounded-t bg-gradient-to-b from-kbc-gold-500 to-kbc-purple-600" key={index} style={{ height: `${height}%` }} />)}</div>
    </article>
  </div>;
}
