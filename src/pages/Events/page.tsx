import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetEventsQuery } from "@/services/api";

export default function Events() {
  const { data: eventsData, isLoading } = useGetEventsQuery();
  const [activeTab, setActiveTab] = useState<"upcoming" | "ended">("upcoming");

  const events = eventsData?.data || [];
  const filtered = events.filter((e) => e.status === activeTab);

  useEffect(() => {
    document.title = "Events | Kent Business College";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-kbc-purple-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Upcoming Events
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join our webinars, open evenings, and information sessions to learn more about our programmes.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex gap-2 mb-10 border-b border-kbc-purple-100">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "upcoming"
                  ? "border-kbc-purple-500 text-kbc-purple-700"
                  : "border-transparent text-kbc-dark-500 hover:text-kbc-dark-700"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("ended")}
              className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "ended"
                  ? "border-kbc-purple-500 text-kbc-purple-700"
                  : "border-transparent text-kbc-dark-500 hover:text-kbc-dark-700"
              }`}
            >
              Ended Events
            </button>
          </div>

          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-100 rounded-xl h-96 animate-pulse" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16">
              <i className="ri-calendar-line text-4xl text-kbc-dark-300 mb-4 block" />
              <p className="text-kbc-dark-500">
                No {activeTab} events at the moment.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl border border-kbc-purple-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      width={600}
                      height={400}
                    />
                    <span
                      className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-full ${
                        event.isOnline
                          ? "bg-kbc-purple-500 text-white"
                          : "bg-kbc-gold-500 text-kbc-dark-900"
                      }`}
                    >
                      {event.isOnline ? "Online" : "In-Person"}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-kbc-dark-500 mb-2">
                      {new Date(event.date).toLocaleDateString("en-GB", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      {" "}&middot; {event.startTime} - {event.endTime}
                    </p>
                    <h3 className="font-heading font-semibold text-lg text-kbc-dark-900 mb-2 line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-kbc-dark-600 line-clamp-2 mb-4">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-kbc-dark-500 mb-4">
                      <i className="ri-map-pin-line" />
                      {event.location}
                    </div>
                    <div className="flex gap-2">
                      {event.status === "upcoming" && (
                        <a
                          href={event.registrationUrl || "#"}
                          className="flex-1 text-center px-4 py-2 bg-kbc-purple-500 text-white text-sm font-medium rounded-lg hover:bg-kbc-purple-600 transition-colors"
                        >
                          Register
                        </a>
                      )}
                      <Link
                        to={`/events/${event.slug}`}
                        className="flex-1 text-center px-4 py-2 border border-kbc-purple-200 text-kbc-purple-600 text-sm font-medium rounded-lg hover:bg-kbc-purple-50 transition-colors"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}