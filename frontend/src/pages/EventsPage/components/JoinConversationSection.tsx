import { useCmsBindings } from "@/features/cms/publicContent";
import { ArrowLink, NavigationButton } from "@/components/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const links = [
  { title: "{{cms:events.pages_events_page_components_join_conver_links.title_001}}", description: "{{cms:events.pages_events_page_components_join_conver_links.description_002}}", to: "#upcoming-events" },
  { title: "{{cms:events.pages_events_page_components_join_conver_links.title_003}}", description: "{{cms:events.pages_events_page_components_join_conver_links.description_004}}", to: "/book-session" },
  { title: "{{cms:events.pages_events_page_components_join_conver_links.title_005}}", description: "{{cms:events.pages_events_page_components_join_conver_links.description_006}}", to: "/book-session" },
];

export function JoinConversationSection() {
  const cms = useCmsBindings(["events"]);
  const cmsValues = cms.resolve({ links });

  return cms.render((
    <section className="bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="events-cta-title">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="relative isolate grid overflow-hidden rounded-[1.75rem] bg-[#25103F] p-7 text-white shadow-[0_24px_70px_rgba(36,13,68,0.2)] sm:p-10 lg:grid-cols-[1fr_340px] lg:items-end lg:gap-16 lg:p-14">
          <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_90%_25%,rgba(96,43,190,0.6),transparent_35%)]" aria-hidden="true" />
          <img className="pointer-events-none absolute -bottom-40 -right-24 -z-10 hidden w-[560px] select-none opacity-[0.07] md:block" src={cms.text("events.pages_events_page_components_join_conver_join_conversation_section.src_007")} alt="" aria-hidden="true" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5C94F]">{cms.text("events.pages_events_page_components_join_conver_join_conversation_section.text_008")}</p>
            <h2 className="mt-5 max-w-[760px] !text-4xl !font-semibold !leading-[1.02] !tracking-[-0.04em] !text-white sm:!text-5xl lg:!text-6xl" id="events-cta-title">{cms.text("events.pages_events_page_components_join_conver_join_conversation_section.text_009")}</h2>
            <p className="mt-6 max-w-[720px] !text-sm !leading-7 !text-white/65 sm:!text-base">{cms.text("events.pages_events_page_components_join_conver_join_conversation_section.text_010")}</p>
          </div>
          <div className="mt-9 grid gap-3 lg:mt-0">
            <NavigationButton className="w-full justify-between px-6" to={cms.text("events.pages_events_page_components_join_conver_join_conversation_section.to_011")} variant="accent">{cms.text("events.pages_events_page_components_join_conver_join_conversation_section.text_012")}<ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
            <NavigationButton className="w-full justify-between px-6" to={cms.text("events.pages_events_page_components_join_conver_join_conversation_section.to_013")} variant="inverse">{cms.text("events.pages_events_page_components_join_conver_join_conversation_section.text_014")}<ArrowUpRight className="size-4" aria-hidden="true" /></NavigationButton>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {cmsValues.links.map((link) => (
            <ArrowLink key={link.title} to={link.to} className="!flex-col !items-start !gap-1 rounded-xl border border-[#e5e0e8] p-5" tone="ink">
              <span className="block text-lg font-semibold">{link.title}</span>
              <span className="block text-sm font-normal leading-relaxed text-[color:var(--figma-muted)]">{link.description}</span>
            </ArrowLink>
          ))}
        </div>
      </div>
    </section>
  ));
}
