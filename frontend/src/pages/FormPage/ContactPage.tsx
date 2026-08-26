import { useEffect, useState } from "react";
import {
  ChevronDown,
  Clock3,
  FileUp,
  GraduationCap,
  Laptop,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
  PhoneCall,
  UserRound,
} from "lucide-react";

import { RouteMeta } from "@/components/seo/RouteMeta";

const zohoContactFormUrl =
  "https://forms.zohopublic.com/ibisconsultancy1/form/ContactUs1/formperma/dn-4pdfoLRb3z73pi7fvJ1aXkQZ1U6BnnOkiQorc2i0?zf_rszfm=1";

const zohoContactFormId = "dn-4pdfoLRb3z73pi7fvJ1aXkQZ1U6BnnOkiQorc2i0";

const contactDetails = [
  {
    title: "Call us",
    detail: "+44 (0)1622 958955",
    supporting: "Monday–Friday, 8:30 AM–5:00 PM",
    href: "tel:+441622958955",
    icon: Phone,
  },
  {
    title: "Our office",
    detail: "29–37 Maidstone Innovation Centre",
    supporting: "Gidds Pond Way, Weavering, Maidstone ME14 5FY",
    href: "https://maps.google.com/?q=29-37+Maidstone+Innovation+Centre+Gidds+Pond+Way+Weavering+Maidstone+ME14+5FY",
    icon: MapPin,
  },
  {
    title: "Email us",
    detail: "office@kentbusinesscollege.org",
    supporting: "Send an enquiry at any time",
    href: "mailto:office@kentbusinesscollege.org",
    icon: Mail,
  },
];

const contactDirectory = [
  {
    title: "Admissions Department",
    description: "For enquiries about the application process, programme eligibility and enrolment.",
    person: "Alice, Enrolment Officer",
    contacts: ["office@kentbusinesscollege.org"],
    response: "Within 24 hours",
    icon: UserRound,
  },
  {
    title: "Student & Academic Support",
    description: "For current learners needing assistance with registration, learning or support services.",
    person: "Ella, Coordinator",
    contacts: ["student@kentbusinesscollege.org"],
    response: "Same day",
    icon: GraduationCap,
  },
  {
    title: "IT Support",
    description: "For technical assistance with online learning platforms, accounts and digital resources.",
    person: "Fouda, IT Admin",
    contacts: ["+44 7387 332776", "office@kentbusinesscollege.org"],
    response: "Same day for urgent issues; within 24 hours as standard",
    icon: Laptop,
  },
];

const contactFaqs = [
  {
    question: "What are your office hours?",
    answer: "Our office is open Monday to Friday from 8:30 AM to 5:00 PM, and Saturday from 9:00 AM to 1:00 PM. We are closed on Sunday.",
  },
  {
    question: "How quickly can I expect a response?",
    answer: "Most enquiries receive a response within one working day. Urgent learner and IT support requests are prioritised during business hours.",
  },
  {
    question: "Can I schedule a campus tour?",
    answer: "Yes. Send your preferred date and time through the contact form and our team will confirm availability with you.",
  },
  {
    question: "How do I submit documents securely?",
    answer: "Use the contact form to request the correct secure upload route. Please do not email sensitive documents unless a member of our team asks you to do so.",
  },
  {
    question: "Is there parking available for visitors?",
    answer: "Yes, designated visitor parking spaces are available at our main campus. Follow the visitor-parking signs on arrival; parking is free for the first two hours.",
  },
];

const additionalContactOptions = [
  {
    title: "Request an info session",
    description: "Prefer to speak with someone directly? Ask one of our representatives to call you back at a suitable time.",
    icon: PhoneCall,
  },
  {
    title: "Live chat",
    description: "Get immediate assistance through live chat during business hours for quick questions.",
    icon: MessagesSquare,
  },
  {
    title: "Document submission",
    description: "Need to submit documents securely? Ask for the correct upload portal for your application or form.",
    icon: FileUp,
  },
];

function ContactEyebrow({ children, inverse = false }: { children: string; inverse?: boolean }) {
  return (
    <div className="w-fit">
      <p className={`text-xs font-bold uppercase leading-5 tracking-[0.2em] ${inverse ? "text-kbc-gold-400" : "text-primary"}`}>{children}</p>
      <span className={`mx-auto mt-3 block h-2 w-[calc(100%_+_24px)] -translate-x-3 rounded-[50%] border-t-[1.5px] ${inverse ? "border-kbc-gold-400" : "border-primary"}`} aria-hidden="true" />
    </div>
  );
}

export function ContactPage() {
  const [contactFormHeight, setContactFormHeight] = useState(600);
  const [activeFaq, setActiveFaq] = useState(0);

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

  return (
    <div className="overflow-hidden bg-white font-body text-kbc-purple-950">
      <RouteMeta
        fallbackTitle="Contact Us | Kent Business College"
        fallbackDescription="Contact Kent Business College about programmes, apprenticeships, employer support and professional learning."
      />

      <section className="relative min-h-[100svh] overflow-hidden bg-primary pb-20 pt-[150px] text-white sm:pt-[164px]" aria-labelledby="contact-heading">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(168,120,178,0.38),transparent_28%),radial-gradient(circle_at_12%_90%,rgba(214,176,78,0.12),transparent_30%)]" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[calc(100svh_-_230px)] w-[calc(100%_-_3rem)] max-w-[1350px] items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 max-sm:w-[calc(100%_-_2rem)]">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <ContactEyebrow inverse>Contact KBC</ContactEyebrow>
            <h1 id="contact-heading" className="mt-6 max-w-[680px] font-heading text-5xl font-medium leading-none tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
              Let’s start a <span className="text-kbc-gold-400">conversation.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              Whether you are exploring a programme, developing your team or looking for learner support, our team will help you find the right next step.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/8 p-3 shadow-[0_30px_90px_rgba(20,5,30,0.34)] sm:p-5">
            <div className="overflow-hidden rounded-[20px] bg-[#eef1fb]">
              <img
                className="block aspect-[3/2] w-full object-contain"
                src="/assets/illustrations/customer-support-agent.svg"
                alt="Customer support agent helping with an enquiry"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-3 py-20 sm:px-8 sm:py-24 lg:px-12" aria-label="Kent Business College contact form">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[22px] border border-primary/10 bg-white shadow-[0_24px_70px_rgba(75,23,109,0.10)]">
          <div className="flex items-center gap-4 border-b border-primary/10 px-6 py-5 sm:px-8">
            <img className="h-12 w-auto object-contain sm:h-14" src="/assets/logos/kbc-logo.png" alt="Kent Business College" decoding="async" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">Contact form</p>
              <h2 className="mt-1 font-heading text-2xl font-semibold text-kbc-purple-950 sm:text-3xl">Contact KBC</h2>
            </div>
          </div>
          <div className="px-5 pb-6 pt-5 sm:px-8 sm:pb-8 lg:px-12 lg:pb-10 lg:pt-7">
            <iframe
              aria-label="Kent Business College Contact Us Page"
              className="block w-full border-0 bg-white"
              style={{ height: `${contactFormHeight}px` }}
              src={zohoContactFormUrl}
              title="Kent Business College contact form"
              loading="lazy"
              scrolling="no"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-24 sm:px-8 lg:px-12" aria-label="Kent Business College contact details">
        <div className="mx-auto grid max-w-[1200px] divide-y divide-primary/10 rounded-3xl border border-primary/10 bg-kbc-purple-50 md:grid-cols-3 md:divide-x md:divide-y-0">
          {contactDetails.map(({ title, detail, supporting, href, icon: Icon }) => (
            <a className="group flex min-h-64 flex-col items-center justify-center px-6 py-10 text-center transition hover:bg-white" href={href} key={title} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
              <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-kbc-gold-400 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_28px_rgba(75,23,109,0.20)]">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-heading text-xl font-semibold">{title}</h2>
              <strong className="mt-3 text-sm leading-6 text-primary">{detail}</strong>
              <span className="mt-2 max-w-xs text-xs leading-6 text-kbc-purple-700">{supporting}</span>
            </a>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-[1200px] rounded-2xl border border-primary/10 bg-white px-6 py-5 shadow-[0_14px_40px_rgba(75,23,109,0.05)] sm:px-8">
          <div className="flex items-center gap-3 border-b border-primary/10 pb-4">
            <Clock3 className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <h2 className="font-heading text-lg font-semibold text-primary">Office hours</h2>
          </div>
          <dl className="mt-4 grid gap-3 text-sm text-kbc-purple-700 sm:grid-cols-[minmax(150px,1fr)_2fr] sm:text-base">
            <dt className="font-semibold text-kbc-purple-950">Monday–Friday:</dt><dd>8:30 AM – 5:00 PM</dd>
            <dt className="font-semibold text-kbc-purple-950">Saturday:</dt><dd>9:00 AM – 1:00 PM</dd>
            <dt className="font-semibold text-kbc-purple-950">Sunday:</dt><dd>Closed</dd>
          </dl>
        </div>
      </section>

      <section className="bg-kbc-purple-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="contact-directory-heading">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <ContactEyebrow>Find the right team</ContactEyebrow>
            <h2 id="contact-directory-heading" className="mt-6 font-heading text-4xl font-semibold leading-tight sm:text-5xl">Contact Directory</h2>
            <p className="mt-4 text-base leading-7 text-kbc-purple-700">Connect directly with the department that can best assist with your enquiry.</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {contactDirectory.map(({ title, description, person, contacts, response, icon: Icon }) => (
              <article className="group flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-7 shadow-[0_18px_48px_rgba(75,23,109,0.07)] transition duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_26px_60px_rgba(75,23,109,0.13)]" key={title}>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                <h3 className="mt-6 font-heading text-xl font-semibold text-kbc-purple-950">{title}</h3>
                <span className="mt-4 block h-0.5 w-12 bg-primary transition-[width] duration-500 group-hover:w-full" aria-hidden="true" />
                <p className="mt-4 text-sm leading-6 text-kbc-purple-700">{description}</p>
                <div className="mt-6 space-y-3 border-t border-primary/10 pt-5 text-sm text-kbc-purple-700">
                  <p className="flex gap-3"><UserRound className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /><span>{person}</span></p>
                  {contacts.map((contact) => (
                    <p className="flex gap-3" key={contact}><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /><span className="break-all">{contact}</span></p>
                  ))}
                  <p className="flex gap-3"><Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /><span>Response time: {response}</span></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="contact-faq-heading">
        <div className="mx-auto max-w-[1000px]">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <ContactEyebrow>Quick answers</ContactEyebrow>
            <h2 id="contact-faq-heading" className="mt-6 font-heading text-4xl font-semibold leading-tight sm:text-5xl">Frequently Asked Questions</h2>
          </div>

          <div className="mt-12 divide-y divide-primary/10 border-y border-primary/10">
            {contactFaqs.map(({ question, answer }, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={question}>
                  <button
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-heading text-lg font-semibold text-kbc-purple-950 transition hover:text-primary"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setActiveFaq(isOpen ? -1 : index)}
                  >
                    <span>{question}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden"><p className="max-w-3xl pb-6 text-sm leading-7 text-kbc-purple-700 sm:text-base">{answer}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-kbc-purple-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="additional-contact-heading">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <ContactEyebrow>More support</ContactEyebrow>
            <h2 id="additional-contact-heading" className="mt-6 font-heading text-4xl font-semibold leading-tight sm:text-5xl">Additional Ways to Connect</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {additionalContactOptions.map(({ title, description, icon: Icon }) => (
              <article className="group rounded-2xl border border-primary/10 bg-white p-7 shadow-[0_18px_48px_rgba(75,23,109,0.07)] transition duration-300 hover:-translate-y-2 hover:border-primary/30" key={title}>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                <h3 className="mt-6 font-heading text-xl font-semibold capitalize text-kbc-purple-950">{title}</h3>
                <span className="mt-4 block h-0.5 w-12 bg-primary transition-[width] duration-500 group-hover:w-full" aria-hidden="true" />
                <p className="mt-4 text-sm leading-7 text-kbc-purple-700">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
