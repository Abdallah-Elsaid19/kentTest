import { useEffect, useRef, useState } from "react";
import { RouteMeta } from "@/components/seo/RouteMeta";

const formPerma = "wwtOnK14Wvkci7feFFR8fUrRITaPnGwAFLNdQP83hjg";
const employerAgreementFormUrl = `https://forms.zohopublic.com/ibisconsultancy1/form/EmployerAgreementForm1/formperma/${formPerma}`;

function AutoHeightZohoForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const resizeTimeoutRef = useRef<number | null>(null);
  const [height, setHeight] = useState(4282);
  const [isLoaded, setIsLoaded] = useState(false);
  const [src] = useState(
    () => `${employerAgreementFormUrl}?zf_rszfm=1&referrername=${encodeURIComponent(window.location.href)}`,
  );

  useEffect(() => {
    const handleZohoResize = (event: MessageEvent) => {
      const iframe = iframeRef.current;
      if (
        event.origin !== "https://forms.zohopublic.com" ||
        event.source !== iframe?.contentWindow ||
        typeof event.data !== "string"
      ) return;

      const iframeData = event.data.split("|");
      if ((iframeData.length !== 2 && iframeData.length !== 3) || iframeData[0] !== formPerma) return;

      const nextHeight = Number.parseInt(iframeData[1], 10) + 15;
      if (!Number.isFinite(nextHeight) || nextHeight <= 15) return;

      const applyHeight = () => setHeight(nextHeight);
      if (iframeData.length === 3) {
        iframe.scrollIntoView({ behavior: "smooth", block: "start" });
        if (resizeTimeoutRef.current) window.clearTimeout(resizeTimeoutRef.current);
        resizeTimeoutRef.current = window.setTimeout(applyHeight, 500);
      } else {
        applyHeight();
      }
    };

    window.addEventListener("message", handleZohoResize);

    return () => {
      window.removeEventListener("message", handleZohoResize);
      if (resizeTimeoutRef.current) window.clearTimeout(resizeTimeoutRef.current);
    };
  }, []);

  return (
    <div className="relative min-h-96">
      {!isLoaded && (
        <div className="absolute inset-x-0 top-0 flex h-96 items-center justify-center" role="status">
          <span className="h-9 w-9 animate-spin rounded-full border-4 border-violet-200 border-t-violet-700" />
          <span className="sr-only">Loading employer agreement form</span>
        </div>
      )}
      <iframe
        ref={iframeRef}
        aria-label="Employer Agreement Form"
        title="Employer Agreement Form"
        scrolling="no"
        className={`block w-full border-0 transition-opacity duration-200 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ height: `${height}px` }}
        src={src}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

export default function EmployerAgreementPage() {
  return (
    <div className="kbc-employer-page">
      <RouteMeta
        fallbackTitle="Employer Agreement Form | Kent Business College"
        fallbackDescription="Complete the Kent Business College employer agreement form."
      />
      <section className="kbc-employer-hero" aria-labelledby="employer-agreement-title">
        <h1 id="employer-agreement-title" className="sr-only">Employer Agreement Form</h1>
        <img src="/assets/images/employer-agreement-hero.webp" alt="Employer Agreement Form" />
      </section>
      <section className="mx-auto w-full max-w-7xl px-4 py-10 md:py-14">
        <AutoHeightZohoForm />
      </section>
    </div>
  );
}
