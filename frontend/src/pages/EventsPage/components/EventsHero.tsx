import { Mail } from "lucide-react";
import { NavigationButton } from "@/components/navigation";

export function EventsHero() {
  return (
    <section className="figma-hero kbc-page-hero-offset flex !min-h-[100svh] flex-col !pb-[clamp(16px,3svh,48px)]" aria-labelledby="events-hero-heading">
      <div className="figma-shell figma-hero__grid !items-start sm:max-xl:!grid-cols-1">
        <div className="figma-hero__copy flex flex-col items-center text-center sm:block sm:max-xl:!mx-auto sm:max-xl:!flex sm:max-xl:!max-w-[760px] sm:max-xl:!flex-col sm:max-xl:!gap-9 sm:max-xl:!text-center xl:text-left">
          <p className="figma-hero__eyebrow !mx-auto !text-xs !font-bold !leading-5 !tracking-widest [@media(max-height:1000px)_and_(max-width:639px)]:!mb-3 [@media(max-height:1000px)_and_(min-width:1280px)]:!mb-3 sm:max-xl:!mb-0 sm:max-xl:!text-[15px] xl:!ml-0 xl:!mr-0">Events</p>
          <h1 className="!text-5xl !font-medium !leading-none !tracking-tight sm:max-xl:!text-[clamp(68px,12vw,82px)] xl:!text-[82px]" id="events-hero-heading">Events that move <span className="!text-[var(--color-gold)] after:!hidden">careers and businesses forward.</span></h1>
          <p className="!text-base !leading-relaxed [@media(max-height:1000px)_and_(max-width:639px)]:!mt-4 [@media(max-height:1000px)_and_(min-width:1280px)]:!mt-4 sm:max-xl:!mt-0 sm:max-xl:!text-[27px] sm:max-xl:!leading-[1.6] xl:!text-lg">Kent Business College runs professional workshops, information sessions, masterclasses and networking events across Project Management, Project Controls, Marketing and Leadership — for learners, employers and working professionals.</p>
          <div className="figma-hero__actions w-full !flex-col !justify-center [@media(max-height:1000px)_and_(max-width:639px)]:!mt-5 [@media(max-height:1000px)_and_(min-width:1280px)]:!mt-5 sm:!flex-row sm:flex-wrap sm:max-xl:!mt-0 sm:max-xl:!gap-4 xl:!justify-start">
            <NavigationButton className="figma-btn figma-btn--gold !w-full sm:!w-auto" to="#upcoming-events">View upcoming events</NavigationButton>
            <NavigationButton className="figma-hero__text-action !w-full !uppercase !tracking-wide sm:!w-auto" to="/book-session" variant="inverse"><Mail className="h-4 w-4" aria-hidden="true" />Enquire about events</NavigationButton>
          </div>
        </div>
        <div className="figma-hero__visual !min-h-[360px] sm:!min-h-[440px]">
          <div className="figma-hero__domain-card"><span>Event types</span><strong>Workshops · Masterclasses · Sessions · Networking</strong></div>
          <img src="https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/f9da7c1c23d244f0a39a9d8a3336cd11.webp" alt="Kent Business College event attendees gathered for a group photo" loading="lazy" decoding="async" />
          <div className="figma-hero__image-note"><i aria-hidden="true" /><div><span>Who it's for</span><strong>Learners, employers and working professionals</strong></div></div>
        </div>
      </div>
    </section>
  );
}
