import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetEventBySlugQuery } from "@/services/api";

export default function EventDetail() {
  const { eventSlug } = useParams<{ eventSlug: string }>();
  const { data: eventData, isLoading } = useGetEventBySlugQuery(eventSlug || "");
  const eventItem = eventData?.data;

  useEffect(() => {
    if (eventItem) {
      document.title = `${eventItem.title} | Kent Business College`;
    }
  }, [eventItem]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse h-8 w-32 bg-gray-200 rounded" />
      </div>
    );
  }

  if (!eventItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-2">
            Event not found
          </h1>
          <Link to="/events" className="text-kbc-purple-600 hover:underline">
            View all events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/events"
            className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white mb-4"
          >
            <i className="ri-arrow-left-line" />
            Back to Events
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className={`px-3 py-1 text-sm font-semibold rounded-full ${
                eventItem.isOnline
                  ? "bg-kbc-purple-400 text-white"
                  : "bg-kbc-gold-500 text-kbc-dark-900"
              }`}
            >
              {eventItem.isOnline ? "Online Event" : "In-Person"}
            </span>
            <span
              className={`px-3 py-1 text-sm rounded-full ${
                eventItem.status === "upcoming"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {eventItem.status === "upcoming" ? "Upcoming" : "Ended"}
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            {eventItem.title}
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden mb-8">
                <img
                  src={eventItem.image}
                  alt={eventItem.title}
                  className="w-full h-auto object-cover"
                  width={800}
                  height={500}
                />
              </div>
              <h2 className="font-heading text-2xl font-bold text-kbc-dark-900 mb-4">
                About This Event
              </h2>
              <p className="text-kbc-dark-600 leading-relaxed mb-6">
                {eventItem.description}
              </p>
              <p className="text-kbc-dark-600 leading-relaxed">
                Join us for an engaging and informative session where you will learn about
                programme details, funding options, and career pathways. Our team will be
                available to answer your questions and guide you through the next steps.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-kbc-purple-50 rounded-xl p-6 border border-kbc-purple-100">
                <h3 className="font-heading font-semibold text-lg text-kbc-dark-900 mb-4">
                  Event Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <i className="ri-calendar-line text-kbc-purple-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-kbc-dark-900">Date</p>
                      <p className="text-sm text-kbc-dark-600">
                        {new Date(eventItem.date).toLocaleDateString("en-GB", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-time-line text-kbc-purple-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-kbc-dark-900">Time</p>
                      <p className="text-sm text-kbc-dark-600">
                        {eventItem.startTime} - {eventItem.endTime}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-map-pin-line text-kbc-purple-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-kbc-dark-900">Location</p>
                      <p className="text-sm text-kbc-dark-600">{eventItem.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {eventItem.status === "upcoming" && (
                <a
                  href={eventItem.registrationUrl || "#"}
                  className="block w-full text-center px-6 py-3 bg-kbc-purple-500 text-white font-semibold rounded-lg hover:bg-kbc-purple-600 transition-colors"
                >
                  Register Now
                </a>
              )}

              <Link
                to="/events"
                className="block w-full text-center px-6 py-3 border-2 border-kbc-purple-200 text-kbc-purple-600 font-medium rounded-lg hover:bg-kbc-purple-50 transition-colors"
              >
                View More Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}