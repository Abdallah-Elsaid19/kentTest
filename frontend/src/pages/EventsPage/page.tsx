import { useCmsBindings } from "@/features/cms/publicContent";
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
  const cms = useCmsBindings(["events"]);

  const upcoming = useEvents("?status=upcoming&perPage=13");
  const schema = (upcoming.data?.items || []).slice(0, 10).map((event) => buildEventSchema(event, environment.VITE_SITE_URL));

  return cms.render((
    <div className="kbc-figma-home events-page overflow-hidden">
      <RouteMeta
        fallbackTitle={cms.text("events.pages_events_page_page_events_page.fallback_title_001")}
        fallbackDescription={cms.text("events.pages_events_page_page_events_page.fallback_description_002")}
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
  ));
}
