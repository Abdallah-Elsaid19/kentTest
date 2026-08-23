import "@/styles/events-page.css";

import { environment } from "@/app/environment";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { useEvents } from "@/features/content/queries";
import { AudienceSection } from "./components/AudienceSection";
import { ConsultationStrip } from "./components/ConsultationStrip";
import { buildEventSchema } from "./components/eventFormatting";
import { EventFormatsSection } from "./components/EventFormatsSection";
import { EventSeriesSection } from "./components/EventSeriesSection";
import { EventsHero } from "./components/EventsHero";
import { JoinConversationSection } from "./components/JoinConversationSection";
import { RegistrationSection } from "./components/RegistrationSection";
import { UpcomingEventsSection } from "./components/UpcomingEventsSection";

export default function EventsPage() {
  const upcoming = useEvents("?status=upcoming&perPage=13");
  const schema = (upcoming.data?.items || []).slice(0, 10).map((event) => buildEventSchema(event, environment.VITE_SITE_URL));

  return (
    <div className="kbc-figma-home events-page overflow-hidden">
      <RouteMeta
        fallbackTitle="Events | Kent Business College"
        fallbackDescription="Workshops, information sessions, masterclasses and networking events from Kent Business College across Project Management, Project Controls, Marketing and Leadership."
        seo={schema.length ? { schema } : undefined}
      />
      <EventsHero />
      <UpcomingEventsSection />
      <ConsultationStrip />
      <EventSeriesSection />
      <EventFormatsSection />
      <AudienceSection />
      <RegistrationSection />
      <JoinConversationSection />
    </div>
  );
}
