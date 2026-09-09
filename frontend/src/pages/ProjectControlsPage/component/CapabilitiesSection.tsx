import { useCmsBindings } from "@/features/cms/publicContent";
import { CollegeFeatureCard } from "@/components/college/CollegeFeatureCard";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { capabilityCopy, projectControlsCapabilities } from "../data";
import { section, shell } from "./layout";

export function CapabilitiesSection() {
  const cms = useCmsBindings(["college_project_controls"]);
  const cmsValues = cms.resolve({ section, shell, capabilityCopy, projectControlsCapabilities });

  return cms.render((
    <section id="pc-capabilities" className={cmsValues.section} aria-labelledby="pc-capabilities-title">
      <div className={cmsValues.shell}>
        <FigmaSectionHeading id="pc-capabilities-title" eyebrow={cmsValues.capabilityCopy.eyebrow} title={cmsValues.capabilityCopy.title} description={cmsValues.capabilityCopy.description} />
        <div className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {cmsValues.projectControlsCapabilities.map(({ icon: Icon, title, desc }) => (
            <CollegeFeatureCard key={title} title={title} marker={<Icon size={24} strokeWidth={1.6} aria-hidden="true" />}>
              <p>{desc}</p>
            </CollegeFeatureCard>
          ))}
        </div>
      </div>
    </section>
  ));
}
