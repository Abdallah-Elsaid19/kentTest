import { useCmsBindings } from "@/features/cms/publicContent";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { marketingStats, overview } from "../data";
import { muted, section, shell } from "./layout";

export function OverviewSection() {
  const cms = useCmsBindings(["college_marketing"]);
  const cmsValues = cms.resolve({ section, shell, overview, muted, marketingStats });

  return cms.render((
    <section id="marketing-overview" className={`${cmsValues.section} relative isolate overflow-hidden`} aria-labelledby="marketing-overview-title">
      <img
        className="pointer-events-none absolute -left-40 top-1/2 z-0 hidden w-[clamp(360px,32vw,560px)] -translate-y-1/2 select-none opacity-[0.045] lg:block"
        src={cms.text("college_marketing.pages_marketing_college_page_component_o_overview_section.src_001")}
        alt=""
        aria-hidden="true"
      />
      <div className={`${cmsValues.shell} relative z-10`}>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <FigmaSectionHeading id="marketing-overview-title" eyebrow={cmsValues.overview.eyebrow} title={cmsValues.overview.title} align="left" />
            <div className={`mt-6 space-y-4 ${cmsValues.muted}`}>
              {cmsValues.overview.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl lg:col-span-5">
            <img
              src={cmsValues.overview.image}
              alt={cms.text("college_marketing.pages_marketing_college_page_component_o_overview_section.alt_002")}
              width={1000}
              height={667}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover object-center sm:aspect-[5/4] lg:aspect-[4/5]"
            />
          </div>
        </div>
        <dl className="mt-12 grid grid-cols-2 gap-6 rounded-2xl bg-[var(--color-soft)] px-5 py-8 sm:px-8 lg:mt-16 lg:grid-cols-4">
          {cmsValues.marketingStats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-3 text-center">
              <dt className="text-xs leading-5 text-[var(--color-muted)] sm:text-sm">{stat.label}</dt>
              <dd className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  ));
}
