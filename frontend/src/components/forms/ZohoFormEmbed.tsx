import { useEffect, useRef, useState } from "react";

type ZohoFormEmbedProps = {
  formName: string;
  formPerma: string;
  title: string;
  initialHeight?: number;
};

const ZOHO_ORIGIN = "https://forms.zohopublic.com";

export function ZohoFormEmbed({
  formName,
  formPerma,
  title,
  initialHeight = 1200,
}: ZohoFormEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const resizeTimeoutRef = useRef<number | null>(null);
  const [height, setHeight] = useState(initialHeight);
  const [isLoaded, setIsLoaded] = useState(false);
  const [src] = useState(() => {
    const formUrl = `${ZOHO_ORIGIN}/ibisconsultancy1/form/${formName}/formperma/${formPerma}`;
    const referrer = typeof window === "undefined" ? "" : window.location.href;
    return `${formUrl}?zf_rszfm=1&referrername=${encodeURIComponent(referrer)}`;
  });

  useEffect(() => {
    const handleZohoResize = (event: MessageEvent) => {
      const iframe = iframeRef.current;
      if (
        event.origin !== ZOHO_ORIGIN ||
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
  }, [formPerma]);

  return (
    <div className="relative min-h-96">
      {!isLoaded && (
        <div className="absolute inset-x-0 top-0 flex h-96 items-center justify-center" role="status">
          <span className="h-9 w-9 animate-spin rounded-full border-4 border-kbc-purple-200 border-t-kbc-purple-700" />
          <span className="sr-only">Loading {title}</span>
        </div>
      )}
      <iframe
        ref={iframeRef}
        aria-label={title}
        title={title}
        loading="lazy"
        scrolling="no"
        className={`block w-full border-0 transition-opacity duration-200 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ height: `${height}px` }}
        src={src}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
