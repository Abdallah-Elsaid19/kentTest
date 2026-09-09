import { useCmsBindings } from "@/features/cms/publicContent";
import { Mail } from "lucide-react";
import { NavigationButton } from "@/components/navigation";

export function EventsHero() {
  const cms = useCmsBindings(["events"]);

  return cms.render((
    <section className="figma-hero figma-hero--video figma-hero--centered kbc-page-hero-offset !pb-16 !pt-[140px] sm:!pb-20 sm:!pt-[154px] lg:!pb-24 xl:!pt-44" aria-labelledby="events-hero-heading">
      <video
        className="figma-hero__background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/images/events-hero-poster.jpg"
        aria-hidden="true"
        tabIndex={-1}
        onLoadedMetadata={(event) => { event.currentTarget.playbackRate = 0.8; }}
      >
        <source src={cms.text("events.pages_events_page_components_events_hero_events_hero.src_001")} type="video/webm" />
        <source src={cms.text("events.pages_events_page_components_events_hero_events_hero.src_002")} type="video/mp4" />
      </video>
      <div className="figma-hero__video-overlay" aria-hidden="true" />

      <div className="figma-shell figma-hero__grid !grid-cols-1 !gap-10">
        <div className="figma-hero__copy">
          <p className="figma-hero__eyebrow !text-xs !font-bold !leading-5 !tracking-widest !uppercase">{cms.text("events.pages_events_page_components_events_hero_events_hero.text_003")}</p>
          <h1 className="!text-5xl !font-medium !leading-none !tracking-tight sm:!text-6xl lg:!text-7xl xl:!text-[82px]" id="events-hero-heading">{cms.text("events.pages_events_page_components_events_hero_events_hero.text_004")}<span className="!text-[var(--color-gold)] after:!hidden">{cms.text("events.pages_events_page_components_events_hero_events_hero.text_005")}</span></h1>
          <p className="!text-base !leading-relaxed sm:!text-lg">{cms.text("events.pages_events_page_components_events_hero_events_hero.text_006")}</p>
          <div className="figma-hero__actions w-full !flex-col !justify-center sm:!flex-row sm:flex-wrap sm:!gap-4">
            <NavigationButton className="figma-btn figma-btn--gold !w-full sm:!w-auto" to={cms.text("events.pages_events_page_components_events_hero_events_hero.to_007")}>{cms.text("events.pages_events_page_components_events_hero_events_hero.text_008")}</NavigationButton>
            <NavigationButton className="figma-hero__text-action !w-full !uppercase !tracking-wide sm:!w-auto" to={cms.text("events.pages_events_page_components_events_hero_events_hero.to_009")} variant="inverse"><Mail className="h-4 w-4" aria-hidden="true" />{cms.text("events.pages_events_page_components_events_hero_events_hero.text_010")}</NavigationButton>
          </div>
        </div>
      </div>
    </section>
  ));
}
