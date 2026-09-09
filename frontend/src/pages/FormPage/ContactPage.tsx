import { useCmsBindings } from "@/features/cms/publicContent";
import { useEffect, useState } from "react";
import {
  Clock3,
  GraduationCap,
  Laptop,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
  UserRound,
  Wrench,
} from "lucide-react";

import { FaqSection } from "@/components/common/FaqSection";
import { RouteMeta } from "@/components/seo/RouteMeta";

const zohoContactFormUrl =
  "https://forms.zohopublic.com/ibisconsultancy1/form/ContactUs1/formperma/dn-4pdfoLRb3z73pi7fvJ1aXkQZ1U6BnnOkiQorc2i0?zf_rszfm=1";

const zohoContactFormId = "dn-4pdfoLRb3z73pi7fvJ1aXkQZ1U6BnnOkiQorc2i0";

const contactDetails = [
  {
    title: "{{cms:contact.pages_form_page_contact_page_contact_details.title_001}}",
    detail: "{{cms:contact.pages_form_page_contact_page_contact_details.detail_002}}",
    href: "{{cms:contact.pages_form_page_contact_page_contact_details.href_003}}",
    icon: Phone,
  },
  {
    title: "{{cms:contact.pages_form_page_contact_page_contact_details.title_004}}",
    detail: "{{cms:contact.pages_form_page_contact_page_contact_details.detail_005}}",
    supporting: "{{cms:contact.pages_form_page_contact_page_contact_details.supporting_006}}",
    href: "{{cms:contact.pages_form_page_contact_page_contact_details.href_007}}",
    icon: MapPin,
  },
  {
    title: "{{cms:contact.pages_form_page_contact_page_contact_details.title_008}}",
    detail: "{{cms:contact.pages_form_page_contact_page_contact_details.detail_009}}",
    supporting: "{{cms:contact.pages_form_page_contact_page_contact_details.supporting_010}}",
    href: "{{cms:contact.pages_form_page_contact_page_contact_details.href_011}}",
    icon: Mail,
  },
];

const contactDirectory = [
  {
    title: "{{cms:contact.pages_form_page_contact_page_contact_directory.title_012}}",
    description: "{{cms:contact.pages_form_page_contact_page_contact_directory.description_013}}",
    person: "{{cms:contact.pages_form_page_contact_page_contact_directory.person_014}}",
    contacts: ["office@kentbusinesscollege.org"],
    response: "{{cms:contact.pages_form_page_contact_page_contact_directory.response_015}}",
    icon: UserRound,
  },
  {
    title: "{{cms:contact.pages_form_page_contact_page_contact_directory.title_016}}",
    description: "{{cms:contact.pages_form_page_contact_page_contact_directory.description_017}}",
    person: "{{cms:contact.pages_form_page_contact_page_contact_directory.person_018}}",
    contacts: ["student@kentbusinesscollege.org"],
    response: "{{cms:contact.pages_form_page_contact_page_contact_directory.response_019}}",
    icon: GraduationCap,
  },
  {
    title: "{{cms:contact.pages_form_page_contact_page_contact_directory.title_020}}",
    description: "{{cms:contact.pages_form_page_contact_page_contact_directory.description_021}}",
    person: "{{cms:contact.pages_form_page_contact_page_contact_directory.person_022}}",
    contacts: ["+44 7387 332776", "office@kentbusinesscollege.org"],
    response: "{{cms:contact.pages_form_page_contact_page_contact_directory.response_023}}",
    icon: Laptop,
  },
];

const contactFaqs = [
  {
    question: "{{cms:contact.pages_form_page_contact_page_contact_faqs.question_024}}",
    answer: "{{cms:contact.pages_form_page_contact_page_contact_faqs.answer_025}}",
  },
  {
    question: "{{cms:contact.pages_form_page_contact_page_contact_faqs.question_026}}",
    answer: "{{cms:contact.pages_form_page_contact_page_contact_faqs.answer_027}}",
  },
  {
    question: "{{cms:contact.pages_form_page_contact_page_contact_faqs.question_028}}",
    answer: "{{cms:contact.pages_form_page_contact_page_contact_faqs.answer_029}}",
  },
  {
    question: "{{cms:contact.pages_form_page_contact_page_contact_faqs.question_030}}",
    answer: "{{cms:contact.pages_form_page_contact_page_contact_faqs.answer_031}}",
  },
  {
    question: "{{cms:contact.pages_form_page_contact_page_contact_faqs.question_032}}",
    answer: "{{cms:contact.pages_form_page_contact_page_contact_faqs.answer_033}}",
  },
];

const additionalContactOptions = [
  {
    title: "{{cms:contact.pages_form_page_contact_page_additional_contact_options.title_034}}",
    description: "{{cms:contact.pages_form_page_contact_page_additional_contact_options.description_035}}",
    icon: Phone,
  },
  {
    title: "{{cms:contact.pages_form_page_contact_page_additional_contact_options.title_036}}",
    description: "{{cms:contact.pages_form_page_contact_page_additional_contact_options.description_037}}",
    icon: MessageCircleMore,
  },
  {
    title: "{{cms:contact.pages_form_page_contact_page_additional_contact_options.title_038}}",
    description: "{{cms:contact.pages_form_page_contact_page_additional_contact_options.description_039}}",
    icon: Wrench,
  },
];

function ContactEyebrow({ children, inverse = false }: { children: string; inverse?: boolean }) {
  const cms = useCmsBindings(["contact"]);

  return cms.render((
    <div className="w-fit">
      <p className={`text-xs font-bold uppercase leading-5 tracking-[0.2em] ${inverse ? "text-[var(--color-gold)]" : "!text-[#401B8C]"}`}>{children}</p>
      <span className={`mx-auto mt-3 block h-2 w-[calc(100%_+_24px)] -translate-x-3 rounded-[50%] border-t-[1.5px] ${inverse ? "border-[var(--color-gold)]" : "!border-[#401B8C]"}`} aria-hidden="true" />
    </div>
  ));
}

export function ContactPage() {
  const cms = useCmsBindings(["contact"]);
  const cmsValues = cms.resolve({ zohoContactFormId, zohoContactFormUrl, contactDetails, contactDirectory, contactFaqs, additionalContactOptions });

  const [contactFormHeight, setContactFormHeight] = useState(600);

  useEffect(() => {
    const resizeContactForm = (event: MessageEvent) => {
      if (event.origin !== "https://forms.zohopublic.com" || typeof event.data !== "string") return;

      const [formId, rawHeight] = event.data.split("|");
      const nextHeight = Number.parseInt(rawHeight, 10);

      if (formId === zohoContactFormId && Number.isFinite(nextHeight)) {
        setContactFormHeight(Math.max(nextHeight + 20, 600));
      }
    };

    window.addEventListener("message", resizeContactForm);
    return () => window.removeEventListener("message", resizeContactForm);
  }, []);

  return cms.render((
    <div className="overflow-hidden bg-white !font-['Poppins',sans-serif] text-[#401B8C] [&_*]:!font-['Poppins',sans-serif]">
      <RouteMeta
        fallbackTitle={cms.text("contact.pages_form_page_contact_page_contact_page.fallback_title_040")}
        fallbackDescription={cms.text("contact.pages_form_page_contact_page_contact_page.fallback_description_041")}
      />

      <section className="kbc-page-hero-offset--solid relative overflow-hidden bg-white pb-12 sm:pb-16" aria-labelledby="contact-heading">
        <div className="relative mx-auto grid w-[calc(100%_-_40px)] max-w-[1240px] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-[58px] max-sm:w-[calc(100%_-_32px)]">
          <div className="flex flex-col items-center text-center lg:max-w-[470px] lg:items-start lg:text-left">
            <ContactEyebrow>{cms.text("contact.pages_form_page_contact_page_contact_page.text_042")}</ContactEyebrow>
            <h1 id="contact-heading" className="mt-6 max-w-[680px] !font-['Poppins',sans-serif] text-5xl font-medium leading-[0.96] tracking-tight !text-[#401B8C] sm:text-6xl lg:text-7xl xl:text-[82px]">
              {cms.text("contact.pages_form_page_contact_page_contact_page.text_043")}<span className="text-[var(--color-gold)]">{cms.text("contact.pages_form_page_contact_page_contact_page.text_044")}</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#401B8C] sm:text-lg">
              {cms.text("contact.pages_form_page_contact_page_contact_page.text_045")}</p>
          </div>

          <div className="relative">
            <img
              className="block aspect-[13/8] w-full object-contain"
              src={cms.text("contact.pages_form_page_contact_page_contact_page.src_046")}
              alt={cms.text("contact.pages_form_page_contact_page_contact_page.alt_047")}
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-3 pb-20 pt-4 sm:px-8 sm:pb-24 sm:pt-6 lg:px-12" aria-label={cms.text("contact.pages_form_page_contact_page_contact_page.aria_label_048")}>
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[22px] border border-primary/10 bg-white shadow-[0_24px_70px_rgba(64,27,140,0.10)]">
          <div className="flex items-center gap-4 border-b border-primary/10 px-6 py-5 sm:px-8">
            <img className="h-12 w-auto object-contain sm:h-14" src={cms.text("contact.pages_form_page_contact_page_contact_page.src_049")} alt={cms.text("contact.pages_form_page_contact_page_contact_page.alt_050")} decoding="async" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] !text-[#401B8C]">{cms.text("contact.pages_form_page_contact_page_contact_page.text_051")}</p>
              <h2 className="mt-1 !font-['Poppins',sans-serif] text-2xl font-semibold !text-[#401B8C] sm:text-3xl">{cms.text("contact.pages_form_page_contact_page_contact_page.text_052")}</h2>
            </div>
          </div>
          <div className="px-5 pb-6 pt-5 sm:px-8 sm:pb-8 lg:px-12 lg:pb-10 lg:pt-7">
            <iframe
              aria-label={cms.text("contact.pages_form_page_contact_page_contact_page.aria_label_053")}
              className="block w-full border-0 bg-white"
              style={{ height: `${contactFormHeight}px` }}
              src={cmsValues.zohoContactFormUrl}
              title={cms.text("contact.pages_form_page_contact_page_contact_page.title_054")}
              loading="lazy"
              scrolling="no"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-24 sm:px-8 lg:px-12" aria-label={cms.text("contact.pages_form_page_contact_page_contact_page.aria_label_055")}>
        <div className="mx-auto grid max-w-[1200px] divide-y divide-primary/10 rounded-3xl border border-primary/10 bg-[var(--color-soft)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {cmsValues.contactDetails.map(({ title, detail, supporting, href, icon: Icon }) => (
            <a className="group flex min-h-64 flex-col items-center justify-center px-6 py-10 text-center transition hover:bg-white" href={href} key={title} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
              <span className="grid h-14 w-14 place-items-center rounded-full !bg-[#401B8C] text-[var(--color-gold)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_28px_rgba(64,27,140,0.20)]">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 !font-['Poppins',sans-serif] text-xl font-semibold !text-[#401B8C]">{title}</h2>
              <strong className="mt-3 text-sm leading-6 !text-[#401B8C]">{detail}</strong>
              {supporting && <span className="mt-2 max-w-xs text-xs leading-6 text-[#401B8C]">{supporting}</span>}
            </a>
          ))}
        </div>

        <div className="mx-auto mt-6 grid max-w-[1200px] gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-primary/10 bg-white px-6 py-5 shadow-[0_14px_40px_rgba(64,27,140,0.05)] sm:px-8">
            <div className="flex items-center gap-3 border-b border-primary/10 pb-4">
              <Clock3 className="h-5 w-5 shrink-0 !text-[#401B8C]" aria-hidden="true" />
              <h2 className="!font-['Poppins',sans-serif] text-lg font-semibold !text-[#401B8C]">{cms.text("contact.pages_form_page_contact_page_contact_page.text_056")}</h2>
            </div>
            <dl className="mt-4 grid gap-3 text-sm text-[#401B8C] sm:grid-cols-[minmax(150px,1fr)_1fr] sm:text-base">
              <dt className="font-semibold !text-[#401B8C]">{cms.text("contact.pages_form_page_contact_page_contact_page.text_057")}</dt><dd>{cms.text("contact.pages_form_page_contact_page_contact_page.text_058")}</dd>
              <dt className="font-semibold !text-[#401B8C]">{cms.text("contact.pages_form_page_contact_page_contact_page.text_059")}</dt><dd>{cms.text("contact.pages_form_page_contact_page_contact_page.text_060")}</dd>
              <dt className="font-semibold !text-[#401B8C]">{cms.text("contact.pages_form_page_contact_page_contact_page.text_061")}</dt><dd>{cms.text("contact.pages_form_page_contact_page_contact_page.text_062")}</dd>
            </dl>
          </div>

          <div className="min-h-[260px] overflow-hidden rounded-2xl border border-primary/10 bg-[var(--color-soft)] shadow-[0_14px_40px_rgba(64,27,140,0.05)]">
            <iframe
              className="block h-full min-h-[260px] w-full border-0"
              src={cms.text("contact.pages_form_page_contact_page_contact_page.src_063")}
              title={cms.text("contact.pages_form_page_contact_page_contact_page.title_064")}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-soft)] px-5 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="contact-directory-heading">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <ContactEyebrow>{cms.text("contact.pages_form_page_contact_page_contact_page.text_065")}</ContactEyebrow>
            <h2 id="contact-directory-heading" className="mt-6 !font-['Poppins',sans-serif] text-4xl font-semibold leading-tight !text-[#401B8C] sm:text-5xl">{cms.text("contact.pages_form_page_contact_page_contact_page.text_066")}</h2>
            <p className="mt-4 text-base leading-7 text-[#401B8C]">{cms.text("contact.pages_form_page_contact_page_contact_page.text_067")}</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {cmsValues.contactDirectory.map(({ title, description, person, contacts, response, icon: Icon }) => (
              <article className="group flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-7 shadow-[0_18px_48px_rgba(64,27,140,0.07)] transition duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_26px_60px_rgba(64,27,140,0.13)]" key={title}>
                <span className="grid h-12 w-12 place-items-center rounded-full !bg-[rgba(64,27,140,0.10)] !text-[#401B8C]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                <h3 className="mt-6 !font-['Poppins',sans-serif] text-xl font-semibold !text-[#401B8C]">{title}</h3>
                <span className="mt-4 block h-2 w-14 rounded-[50%] border-t-[1.5px] !border-[#401B8C] transition-[width] duration-500 group-hover:w-full" aria-hidden="true" />
                <p className="mt-4 text-sm leading-6 text-[#401B8C]">{description}</p>
                <div className="mt-6 space-y-3 border-t border-primary/10 pt-5 text-sm text-[#401B8C]">
                  <p className="flex gap-3"><UserRound className="mt-0.5 h-4 w-4 shrink-0 !text-[#401B8C]" aria-hidden="true" /><span>{person}</span></p>
                  {contacts.map((contact) => (
                    <p className="flex gap-3" key={contact}><Mail className="mt-0.5 h-4 w-4 shrink-0 !text-[#401B8C]" aria-hidden="true" /><span className="break-all">{contact}</span></p>
                  ))}
                  <p className="flex gap-3"><Clock3 className="mt-0.5 h-4 w-4 shrink-0 !text-[#401B8C]" aria-hidden="true" /><span>{cms.text("contact.pages_form_page_contact_page_contact_page.text_068")}{response}</span></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection id="contact-faq" eyebrow={cms.text("contact.pages_form_page_contact_page_contact_page.eyebrow_069")} title={cms.text("contact.pages_form_page_contact_page_contact_page.title_070")} items={cmsValues.contactFaqs} />

      <section className="bg-[var(--color-soft)] px-5 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="additional-contact-heading">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <ContactEyebrow>{cms.text("contact.pages_form_page_contact_page_contact_page.text_071")}</ContactEyebrow>
            <h2 id="additional-contact-heading" className="mt-6 !font-['Poppins',sans-serif] text-4xl font-semibold leading-tight !text-[#401B8C] sm:text-5xl">{cms.text("contact.pages_form_page_contact_page_contact_page.text_072")}</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cmsValues.additionalContactOptions.map(({ title, description, icon: Icon }) => (
              <article className="group rounded-2xl border border-primary/10 bg-white p-7 shadow-[0_18px_48px_rgba(64,27,140,0.07)] transition duration-300 hover:-translate-y-2 hover:border-primary/30" key={title}>
                <span className="grid h-16 w-16 place-items-center rounded-full !bg-[rgba(64,27,140,0.10)] !text-[#401B8C]"><Icon className="h-6 w-6 stroke-[2.5]" aria-hidden="true" /></span>
                <h3 className="mt-6 !font-['Poppins',sans-serif] text-xl font-semibold capitalize !text-[#401B8C]">{title}</h3>
                <span className="mt-4 block h-2 w-14 rounded-[50%] border-t-[1.5px] !border-[#401B8C] transition-[width] duration-500 group-hover:w-full" aria-hidden="true" />
                <p className="mt-4 text-sm leading-7 text-[#401B8C]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  ));
}
