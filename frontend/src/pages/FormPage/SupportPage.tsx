import { useEffect, useRef, useState } from "react";
import { BookOpenCheck, Headphones, ShieldCheck } from "lucide-react";

import { RouteMeta } from "@/components/seo/RouteMeta";

const zohoSupportFormUrl =
  "https://forms.zohopublic.com/ibisconsultancy1/form/Contactforsupport/formperma/F99UYmcaGvbVSdX_VNuRro1w_twqT5msQWUeeu6Djbk?zf_rszfm=1&zf_enablecamera=true";

const zohoSupportFormId = "F99UYmcaGvbVSdX_VNuRro1w_twqT5msQWUeeu6Djbk";

const supportAreas = [
  {
    title: "Learning access",
    body: "Get help accessing learning platforms, resources and the tools used during your programme.",
    icon: BookOpenCheck,
  },
  {
    title: "Programme support",
    body: "Ask about teaching, programme activity, progress support or the right team for your enquiry.",
    icon: Headphones,
  },
  {
    title: "Safety and wellbeing",
    body: "Raise a concern about safeguarding, wellbeing or support needed to participate safely in learning.",
    icon: ShieldCheck,
  },
];

function SupportEyebrow({ children, inverse = false }: { children: string; inverse?: boolean }) {
  return (
    <div className="w-fit">
      <p className={`text-xs font-bold uppercase leading-5 tracking-[0.2em] ${inverse ? "text-[var(--color-gold)]" : "!text-[#401B8C]"}`}>{children}</p>
      <span className={`mx-auto mt-3 block h-2 w-[calc(100%_+_24px)] -translate-x-3 rounded-[50%] border-t-[1.5px] ${inverse ? "border-[var(--color-gold)]" : "!border-[#401B8C]"}`} aria-hidden="true" />
    </div>
  );
}

export function SupportPage() {
  const supportFormRef = useRef<HTMLIFrameElement>(null);
  const [supportFormHeight, setSupportFormHeight] = useState(975);

  useEffect(() => {
    const resizeSupportForm = (event: MessageEvent) => {
      if (event.origin !== "https://forms.zohopublic.com" || typeof event.data !== "string") return;

      const [formId, rawHeight] = event.data.split("|");
      const nextHeight = Number.parseInt(rawHeight, 10);

      if (formId === zohoSupportFormId && Number.isFinite(nextHeight)) {
        setSupportFormHeight(Math.max(nextHeight + 20, 975));
      }
    };

    window.addEventListener("message", resizeSupportForm);
    return () => window.removeEventListener("message", resizeSupportForm);
  }, []);

  return (
    <div className="overflow-hidden bg-white !font-['Poppins',sans-serif] text-[#401B8C] [&_*]:!font-['Poppins',sans-serif]">
      <RouteMeta
        fallbackTitle="KBC Support | Kent Business College"
        fallbackDescription="Contact Kent Business College for learner, programme, platform, safeguarding and wellbeing support."
      />

      <section className="kbc-page-hero-offset--solid relative overflow-hidden bg-white pb-12 sm:pb-16" aria-labelledby="support-heading">
        <div className="relative mx-auto grid w-[calc(100%_-_40px)] max-w-[1240px] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-[58px] max-sm:w-[calc(100%_-_32px)]">
          <div className="flex flex-col items-center text-center lg:max-w-[470px] lg:items-start lg:text-left">
            <SupportEyebrow>Help when you need it</SupportEyebrow>
            <h1 id="support-heading" className="mt-6 max-w-[680px] !font-['Poppins',sans-serif] text-5xl font-medium leading-none tracking-tight !text-[#401B8C] sm:text-6xl lg:text-7xl xl:text-[82px]">
              KBC <span className="text-[var(--color-gold)]">Support.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#401B8C] sm:text-lg">
              Tell us what you need help with and our team will direct your enquiry to the right person. Do not include passwords or highly sensitive information.
            </p>
          </div>

          <div className="relative">
            <img
              className="block aspect-[1080/594] w-full object-contain"
              src="/assets/illustrations/support-data-analytics.svg"
              alt="Animated illustration representing digital support and data tools"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-soft)] px-5 pb-20 pt-4 sm:px-8 sm:pb-24 sm:pt-6 lg:px-12" aria-labelledby="support-areas-heading">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <SupportEyebrow>How we can help</SupportEyebrow>
            <h2 id="support-areas-heading" className="mt-6 !font-['Poppins',sans-serif] text-4xl font-semibold leading-tight !text-[#401B8C] sm:text-5xl">Start with the support you need.</h2>
            <p className="mt-5 text-base leading-7 text-[#401B8C]">Use the form below for learner, programme, platform, safeguarding or wellbeing support.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {supportAreas.map(({ title, body, icon: Icon }) => (
              <article className="group rounded-2xl border border-[#401B8C]/10 bg-white p-7 shadow-[0_18px_50px_rgba(64,27,140,0.07)] transition duration-300 hover:-translate-y-2 hover:border-[#401B8C]/30 hover:shadow-[0_26px_60px_rgba(64,27,140,0.13)]" key={title}>
                <span className="grid h-12 w-12 place-items-center rounded-xl !bg-[#401B8C] text-[var(--color-gold)]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                <h3 className="mt-7 !font-['Poppins',sans-serif] text-2xl font-semibold !text-[#401B8C]">{title}</h3>
                <span className="mt-5 block h-2 w-14 rounded-[50%] border-t-[1.5px] !border-[#401B8C] transition-[width] duration-500 group-hover:w-full" aria-hidden="true" />
                <p className="mt-5 text-sm leading-7 text-[#401B8C]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="support-form" className="scroll-mt-28 bg-white px-3 py-20 sm:px-8 sm:py-24 lg:px-12" aria-label="KBC support form">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[22px] border border-[#401B8C]/10 bg-white shadow-[0_24px_70px_rgba(64,27,140,0.10)]">
          <iframe
            ref={supportFormRef}
            aria-label="KBC Support"
            className="block w-full border-0 bg-white"
            style={{ height: `${supportFormHeight}px` }}
            src={zohoSupportFormUrl}
            title="Kent Business College support form"
            loading="lazy"
            allow="camera"
            scrolling="no"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

      </section>

    </div>
  );
}
