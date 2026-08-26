import { useEffect, useRef, useState } from "react";
import { ArrowDown, BookOpenCheck, Headphones, ShieldCheck } from "lucide-react";

import { NavigationButton } from "@/components/navigation";
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
      <p className={`text-xs font-bold uppercase leading-5 tracking-[0.2em] ${inverse ? "text-kbc-gold-400" : "text-primary"}`}>{children}</p>
      <span className={`mx-auto mt-3 block h-2 w-[calc(100%_+_24px)] -translate-x-3 rounded-[50%] border-t-[1.5px] ${inverse ? "border-kbc-gold-400" : "border-primary"}`} aria-hidden="true" />
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
    <div className="overflow-hidden bg-white font-body text-kbc-purple-950">
      <RouteMeta
        fallbackTitle="KBC Support | Kent Business College"
        fallbackDescription="Contact Kent Business College for learner, programme, platform, safeguarding and wellbeing support."
      />

      <section className="relative min-h-[100svh] overflow-hidden bg-primary pb-20 pt-[150px] text-white sm:pt-[164px]" aria-labelledby="support-heading">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(168,120,178,0.38),transparent_28%),radial-gradient(circle_at_12%_90%,rgba(214,176,78,0.12),transparent_30%)]" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[calc(100svh_-_230px)] w-[calc(100%_-_3rem)] max-w-[1350px] items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 max-sm:w-[calc(100%_-_2rem)]">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <SupportEyebrow inverse>Help when you need it</SupportEyebrow>
            <h1 id="support-heading" className="mt-6 max-w-[680px] font-heading text-5xl font-medium leading-none tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
              KBC <span className="text-kbc-gold-400">Support.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              Tell us what you need help with and our team will direct your enquiry to the right person. Do not include passwords or highly sensitive information.
            </p>
            <NavigationButton className="mt-8 w-full sm:w-auto" variant="accent" to="#support-form">
              Contact support <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </NavigationButton>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/8 p-3 shadow-[0_30px_90px_rgba(20,5,30,0.34)] sm:p-5">
            <div className="overflow-hidden rounded-[20px] bg-[#7474ad]">
              <img
                className="block aspect-[1080/594] w-full object-cover"
                src="/assets/illustrations/data-analytics-techniques.svg"
                alt="Animated illustration representing digital learner support and data tools"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-kbc-purple-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="support-areas-heading">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <SupportEyebrow>How we can help</SupportEyebrow>
            <h2 id="support-areas-heading" className="mt-6 font-heading text-4xl font-semibold leading-tight sm:text-5xl">Start with the support you need.</h2>
            <p className="mt-5 text-base leading-7 text-kbc-purple-700">Use the form below for learner, programme, platform, safeguarding or wellbeing support.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {supportAreas.map(({ title, body, icon: Icon }) => (
              <article className="group rounded-2xl border border-primary/10 bg-white p-7 shadow-[0_18px_50px_rgba(75,23,109,0.07)] transition duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_26px_60px_rgba(75,23,109,0.13)]" key={title}>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-kbc-gold-400"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                <h3 className="mt-7 font-heading text-2xl font-semibold">{title}</h3>
                <span className="mt-5 block h-0.5 w-14 bg-primary transition-[width] duration-500 group-hover:w-full" aria-hidden="true" />
                <p className="mt-5 text-sm leading-7 text-kbc-purple-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="support-form" className="scroll-mt-28 bg-white px-3 py-20 sm:px-8 sm:py-24 lg:px-12" aria-label="KBC support form">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[22px] border border-primary/10 bg-white shadow-[0_24px_70px_rgba(75,23,109,0.10)]">
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
