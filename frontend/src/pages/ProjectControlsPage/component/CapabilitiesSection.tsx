import { CollegeFeatureCard } from "@/components/college/CollegeFeatureCard";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { capabilityCopy, projectControlsCapabilities } from "../data";
import { section, shell } from "./layout";

export function CapabilitiesSection() {
  return (
    <section id="pc-capabilities" className={section} aria-labelledby="pc-capabilities-title">
      <div className={shell}>
        <FigmaSectionHeading id="pc-capabilities-title" eyebrow={capabilityCopy.eyebrow} title={capabilityCopy.title} description={capabilityCopy.description} />
        <div className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectControlsCapabilities.map(({ icon: Icon, title, desc }) => (
            <CollegeFeatureCard key={title} title={title} marker={<Icon size={24} strokeWidth={1.6} aria-hidden="true" />}>
              <p>{desc}</p>
            </CollegeFeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}
