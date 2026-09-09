import { useCmsBindings } from "@/features/cms/publicContent";
import { Briefcase, Building2, GraduationCap, Layers3, TrendingUp } from "lucide-react";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

const audiences = [
  { title: "{{cms:events.pages_events_page_components_audience_se_audiences.title_001}}", description: "{{cms:events.pages_events_page_components_audience_se_audiences.description_002}}", icon: GraduationCap },
  { title: "{{cms:events.pages_events_page_components_audience_se_audiences.title_003}}", description: "{{cms:events.pages_events_page_components_audience_se_audiences.description_004}}", icon: Briefcase },
  { title: "{{cms:events.pages_events_page_components_audience_se_audiences.title_005}}", description: "{{cms:events.pages_events_page_components_audience_se_audiences.description_006}}", icon: TrendingUp },
  { title: "{{cms:events.pages_events_page_components_audience_se_audiences.title_007}}", description: "{{cms:events.pages_events_page_components_audience_se_audiences.description_008}}", icon: Building2 },
  { title: "{{cms:events.pages_events_page_components_audience_se_audiences.title_009}}", description: "{{cms:events.pages_events_page_components_audience_se_audiences.description_010}}", icon: Layers3 },
];

export function AudienceSection() {
  const cms = useCmsBindings(["events"]);
  const cmsValues = cms.resolve({ audiences });

  return cms.render((
    <section aria-labelledby="event-audience-title">
      <div className="figma-shell">
        <FigmaSectionHeading id="event-audience-title" eyebrow={cms.text("events.pages_events_page_components_audience_se_audience_section.eyebrow_011")} title={cms.text("events.pages_events_page_components_audience_se_audience_section.title_012")} description={cms.text("events.pages_events_page_components_audience_se_audience_section.description_013")} align="center" />
        <div className="grid grid-cols-1 gap-4 min-[561px]:grid-cols-2 min-[1181px]:grid-cols-3">
          {cmsValues.audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <article
                className="group flex min-h-[230px] flex-col rounded-xl border border-[#e9e2ef] bg-white p-[30px] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(39,14,73,0.1)] motion-reduce:transform-none motion-reduce:transition-none"
                key={audience.title}
              >
                <div className="inline-flex size-10 items-center justify-center rounded-[10px] bg-[#f0eafb] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white motion-reduce:transition-none">
                  <Icon className="size-[18px]" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-[22px] leading-[1.25]">{audience.title}</h3>
                <p className="mt-2.5 text-[15px] leading-[1.65] text-[var(--figma-muted)]">{audience.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  ));
}
