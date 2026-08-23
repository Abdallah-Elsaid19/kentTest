import { useState } from "react";

import { NavigationButton, NavigationTabButton } from "@/components/navigation";
import { projectControlsPathways } from "./pathways";

export function PathwaySelector() {
  const [activeId, setActiveId] = useState(projectControlsPathways[0].id);
  const pathway = projectControlsPathways.find((item) => item.id === activeId) ?? projectControlsPathways[0];

  return <div className="pc-pathway-selector">
    <div className="pc-pathway-tabs flex flex-wrap gap-2" role="tablist" aria-label="Project Controls pathways">
      {projectControlsPathways.map((item) => <NavigationTabButton active={item.id === activeId} aria-controls={`pathway-panel-${item.id}`} aria-selected={item.id === activeId} id={`pathway-tab-${item.id}`} key={item.id} onClick={() => setActiveId(item.id)} role="tab">{item.label}</NavigationTabButton>)}
    </div>
    <div aria-labelledby={`pathway-tab-${pathway.id}`} className="pc-pathway-card mt-5 rounded-2xl bg-[#eef5f4] p-10 max-[600px]:p-6" id={`pathway-panel-${pathway.id}`} role="tabpanel">
      <div className="pc-pathway-card__copy grid grid-cols-[1fr_auto] gap-10 max-[1080px]:grid-cols-1"><div><p className="pc-eyebrow mb-3.5 text-[11px] font-bold uppercase tracking-[.14em] text-kbc-purple-600">{pathway.label}</p><h3 className="font-['Source_Serif_4',Georgia,serif] text-[clamp(40px,4.5vw,62px)] leading-[1.03]">{pathway.title}</h3><p className="mt-4 max-w-[760px] text-kbc-purple-700">{pathway.description}</p></div>
      <aside className="pc-pathway-card__note self-start rounded-2xl bg-white p-6 shadow-sm"><b className="block">{pathway.noteTitle}</b><span className="mt-2 block text-sm text-kbc-purple-700">{pathway.note}</span></aside></div>
      <div className="pc-pathway-modules mt-8 overflow-hidden rounded-2xl bg-white" aria-label={`${pathway.label} modules`}>{pathway.modules.map((module) => <div className="pc-pathway-module grid grid-cols-[1.2fr_.8fr_auto] gap-4 border-b p-5 last:border-b-0 max-[600px]:grid-cols-1" key={module.title}><b>{module.title}</b><span className="text-sm text-kbc-purple-700">{module.provider}</span><strong className="text-kbc-purple-600">{module.credits} {module.credits === 1 ? "credit" : "credits"}</strong></div>)}</div>
      <NavigationButton className="mt-6" to={pathway.href} variant="projectControls">Explore the full {pathway.label.toLowerCase()}</NavigationButton>
    </div>
  </div>;
}
