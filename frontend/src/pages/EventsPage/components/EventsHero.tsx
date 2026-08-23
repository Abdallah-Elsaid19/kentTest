import { Mail } from "lucide-react";
import { NavigationButton } from "@/components/navigation";

export function EventsHero() {
  return (
    <section className="figma-hero !min-h-[100svh] !pb-20 !pt-[150px] sm:!pt-[164px]" aria-labelledby="events-hero-heading">
      <div className="figma-shell figma-hero__grid">
        <div className="figma-hero__copy flex flex-col items-center text-center sm:block sm:text-left">
          <p className="figma-hero__eyebrow !mx-auto !text-xs !font-bold !leading-5 !tracking-widest sm:!ml-0 sm:!mr-0">Events</p>
          <h1 className="!text-5xl !font-medium !leading-none !tracking-tight sm:!text-6xl lg:!text-7xl xl:!text-[82px]" id="events-hero-heading">Events that move <span>careers and businesses forward.</span></h1>
          <p className="!text-base !leading-relaxed sm:!text-lg">Kent Business College runs professional workshops, information sessions, masterclasses and networking events across Project Management, Project Controls, Marketing and Leadership — for learners, employers and working professionals.</p>
          <div className="figma-hero__actions !flex-col !justify-center sm:!flex-row sm:!justify-start">
            <NavigationButton className="figma-btn figma-btn--gold !w-full sm:!w-auto" to="#upcoming-events">View upcoming events</NavigationButton>
            <NavigationButton className="figma-hero__text-action !w-full !uppercase !tracking-wide sm:!w-auto" to="/contact" variant="inverse"><Mail className="h-4 w-4" aria-hidden="true" />Enquire about events</NavigationButton>
          </div>
        </div>
        <div className="figma-hero__visual !min-h-[360px] sm:!min-h-[440px]">
          <div className="figma-hero__domain-card"><span>Event types</span><strong>Workshops · Masterclasses · Sessions · Networking</strong></div>
          <img src="https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/f9da7c1c23d244f0a39a9d8a3336cd11.webp" alt="Kent Business College event attendees gathered for a group photo" fetchPriority="high" />
          <div className="figma-hero__image-note"><i aria-hidden="true" /><div><span>Who it's for</span><strong>Learners, employers and working professionals</strong></div></div>
        </div>
      </div>
    </section>
  );
}
