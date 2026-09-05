import { useState } from "react";
import { ExternalLink } from "lucide-react";

import { RouteMeta } from "@/components/seo/RouteMeta";

const bookingUrl =
  "https://outlook.office.com/book/ComplianceMeetingwithJennifer@kentbusinesscollege.com/s/9nmCp10uMUWen89mOwYSSA2?ismsaljsauthenabled";

export default function BookConsultationPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => setIsLoading(false);
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="bg-[#f7f3f9]">
      <RouteMeta
        fallbackTitle="Information Session | Kent Business College"
        fallbackDescription="Book an information session with the Kent Business College team."
      />

      <section
        aria-labelledby="booking-page-heading"
        className="kbc-page-hero-offset relative overflow-hidden bg-[linear-gradient(135deg,#2A0C3B_0%,#401B8C_52%,#321047_100%)] px-4 pb-10 text-white sm:pb-12"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 20%, rgba(245,201,79,.18), transparent 22%), radial-gradient(circle at 82% 12%, rgba(255,255,255,.14), transparent 28%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.22em] text-[#F5C94F]">
              Meet the KBC team
            </span>
            <h1
              id="booking-page-heading"
              className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Information Session
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
              Book an information session with the Kent Business College team to discuss your goals and the most suitable next step.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-14 lg:pb-16" aria-label="Kent Business College information session booking">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto overflow-hidden border border-[#e4dce8] bg-white shadow-xl shadow-[#401B8C]/5">
            {isLoading && !hasError && (
              <div
                className="flex items-center justify-center gap-3 border-b border-[#e4dce8] bg-white px-5 py-4 text-sm font-medium text-slate-600"
                role="status"
                aria-live="polite"
              >
                <span
                  className="h-5 w-5 animate-spin rounded-full border-2 border-[#e4dce8] border-t-[#401B8C]"
                  aria-hidden="true"
                />
                Loading Microsoft Bookings&hellip;
              </div>
            )}

            {hasError ? (
              <div className="flex min-h-[500px] items-center justify-center px-6 py-16 text-center" role="alert">
                <div className="max-w-lg">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ebe0f0] text-[#401B8C]">
                    <ExternalLink aria-hidden="true" size={25} />
                  </div>
                  <h2 className="mt-6 font-heading text-2xl font-semibold text-[#24162c]">
                    Continue your information session booking
                  </h2>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    Microsoft Bookings could not be displayed here. Open the secure booking page in a new tab to choose a meeting time.
                  </p>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#401B8C] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#2F1468] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#401B8C]"
                  >
                    Continue to Microsoft Bookings
                    <ExternalLink aria-hidden="true" size={18} />
                  </a>
                </div>
              </div>
            ) : (
              <iframe
                src={bookingUrl}
                title="Book a Kent Business College information session"
                className="block h-[2000px] w-full overflow-hidden border-0 sm:h-[1800px] lg:h-[1900px]"
                loading="lazy"
                scrolling="no"
                allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
                allowFullScreen
                onLoad={handleLoad}
                onError={handleError}
              />
            )}

            {!hasError && (
              <div className="border-t border-[#e4dce8] bg-white px-5 py-5 text-center sm:px-8">
                <p className="text-sm leading-relaxed text-slate-600">
                  If the booking form does not appear, continue on the secure Microsoft Bookings website.
                </p>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 font-semibold text-[#401B8C] transition-colors hover:text-[#2F1468] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#401B8C]"
                >
                  Continue to Microsoft Bookings
                  <ExternalLink aria-hidden="true" size={17} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
