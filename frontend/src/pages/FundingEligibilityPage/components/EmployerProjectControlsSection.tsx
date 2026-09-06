import { ArrowUpRight, Users } from "lucide-react";

import { commercialCapabilities } from "../data";
import { ArrowLink, containerClass, sectionClass, SectionIntro } from "./shared";

export function EmployerProjectControlsSection() {
  return (
    <section className={`${sectionClass} !bg-primary/[.035]`} id="employer-project-controls">
      <div className={`${containerClass} grid gap-12 lg:grid-cols-2 lg:gap-14`}>
        <div>
          <SectionIntro eyebrow="For employers" title="Target capability gaps without over-training your team" copy="Select the Project Controls subjects your people need now, or combine multiple modules into a broader capability plan aligned with current project, programme or portfolio responsibilities." align="left" />
          <div className="flex flex-wrap gap-3"><ArrowLink href="#commercial-access">Build a development plan</ArrowLink><ArrowLink href="#eligibility">Discuss IPC bursary options</ArrowLink></div>
          <p className="mt-6 flex items-center gap-2 text-[13px] font-semibold text-[#766d7c]"><Users className="text-[#401b8c]" size={17} />For one professional, a team or a wider capability-development requirement.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 max-[500px]:grid-cols-1">{commercialCapabilities.map((capability) => <div className="flex items-center gap-3 rounded-xl border border-[#e8e0ef] bg-white px-5 py-5" key={capability}><span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#fff3ca] text-[#8f6b22]"><ArrowUpRight size={16} /></span><strong>{capability}</strong></div>)}</div>
      </div>
    </section>
  );
}
