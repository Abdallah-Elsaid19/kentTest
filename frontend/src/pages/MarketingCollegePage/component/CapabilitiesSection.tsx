import { useCmsBindings } from "@/features/cms/publicContent";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { capabilityCopy, marketingCapabilities } from "../data";
import { section, shell } from "./layout";

export function CapabilitiesSection() {
  const cms = useCmsBindings(["college_marketing"]);
  const cmsValues = cms.resolve({ section, shell, capabilityCopy, marketingCapabilities });

  return cms.render((
    <section id="marketing-capabilities" className={cmsValues.section} aria-labelledby="marketing-capabilities-title">
      <div className={cmsValues.shell}>
        <FigmaSectionHeading id="marketing-capabilities-title" eyebrow={cmsValues.capabilityCopy.eyebrow} title={cmsValues.capabilityCopy.title} description={cmsValues.capabilityCopy.description} />
        <div className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {cmsValues.marketingCapabilities.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group relative border-b border-kbc-purple-100 px-5 py-8 transition-[background-color,box-shadow] duration-300 after:absolute after:inset-x-0 after:-bottom-px after:h-[3px] after:origin-left after:scale-x-0 after:bg-[var(--color-gold)] after:transition-transform after:duration-[420ms] hover:bg-primary/[.065] hover:shadow-[0_14px_34px_rgba(64,27,140,.08)] hover:after:scale-x-100 sm:px-6">
              <span className="flex size-12 items-center justify-center rounded-xl bg-kbc-purple-50 text-primary transition-colors duration-300 group-hover:bg-white">
                <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  ));
}
