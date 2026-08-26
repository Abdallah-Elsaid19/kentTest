import {
  BookOpenCheck,
  CheckCircle2,
  HeartHandshake,
  Laptop2,
  Megaphone,
  Scale,
  ShieldCheck,
  Siren,
  Users,
} from "lucide-react";
import { useState } from "react";

import { RouteMeta } from "@/components/seo/RouteMeta";

const policySections = [
  {
    id: "adult-learners",
    number: "01",
    eyebrow: "Safeguarding",
    title: "Commitment to Safeguarding Adult Learners (18+)",
    icon: ShieldCheck,
    paragraphs: [
      "KBC is committed to safeguarding all of our learners and protecting their right to live and learn in safety, free from abuse or neglect. We maintain thorough and effective safeguarding arrangements that meet or exceed legal requirements. Safeguarding is everyone’s responsibility at KBC – all staff and associates have an active role in protecting learners from harm, and learner welfare is our paramount concern. We foster a culture where staff are vigilant and learners feel safe, valued, and respected enough to speak up about any issue. Our approach to safeguarding aligns with relevant legislation and guidance (e.g. the Education Acts, Care Act 2014, and Keeping Children Safe in Education) to ensure an outstanding standard of care and protection.",
      "KBC’s safeguarding practices extend to all adult learners, including those who may be vulnerable adults. We fully recognize our duty to promote the welfare of vulnerable adult learners (for example, individuals with care needs or disabilities) and we are morally committed to the safeguarding of all learners regardless of age or vulnerability. We emphasize the principle of empowerment: adults are involved in decisions about their safety. Our staff take into account each learner’s views, wishes, beliefs, and feelings when deciding any safeguarding action. We also work proactively with external agencies and partners where necessary to prevent harm, protect learners’ rights to safety, and ensure safeguarding is effective across all our programs.",
    ],
  },
  {
    id: "prevent-duty",
    number: "02",
    eyebrow: "Prevent Duty",
    title: "Compliance with the Prevent Duty (Anti-Radicalisation)",
    icon: Siren,
    paragraphs: [
      "KBC fully complies with the Prevent Duty, which is part of the UK government’s counter-terrorism strategy. The Counter Terrorism and Security Act 2015 places a statutory duty on education providers to “have due regard to the need to prevent people from being drawn into terrorism”. In line with this duty, we have robust policies and staff training in place to prevent radicalisation and extremist influence among our learners. Prevent concerns are treated with the same urgency as any safeguarding concern – any member of our college community who is at risk of radicalisation will receive prompt support and intervention. We raise awareness among learners and staff about the dangers of extremist ideologies and how to report any concerns. KBC acts responsibly and swiftly if we suspect any learner is being exposed to or influenced by extremist activities. Through these measures, we actively support the protection of our learners from terrorism, in harmony with our safeguarding obligations.",
    ],
  },
  {
    id: "british-values",
    number: "03",
    eyebrow: "College culture",
    title: "Promoting British Values",
    icon: Scale,
    paragraphs: [
      "As part of our Prevent Duty and our broader educational mission, KBC actively promotes the fundamental British values of democracy, the rule of law, individual liberty, and mutual respect and tolerance of those with different faiths and beliefs. These values are integrated into our curriculum and college culture. We encourage open discussion and critical thinking so that learners gain an understanding of citizens’ rights and responsibilities in a democratic society and the importance of respect and tolerance. KBC challenges any opinions or behaviors that contravene these fundamental values. By embedding British values, we aim to equip learners to become respectful, responsible members of society and to strengthen the barriers against extremism. Our college community stands for respect, diversity, and equal opportunity, reflecting the ideals of modern British society in which our learners live and work.",
    ],
  },
  {
    id: "edi",
    number: "04",
    eyebrow: "Inclusive learning",
    title: "Equality, Diversity, and Inclusion (EDI)",
    icon: Users,
    paragraphs: [
      "Equality, diversity, and inclusion are at the heart of KBC’s ethos. We are committed to treating everyone fairly and with respect, valuing the rich diversity of our learners, staff, and partners. In line with the Equality Act 2010, we strive to eliminate discrimination and provide equal opportunities in all aspects of teaching, learning, and support.",
      "This commitment means embedding EDI principles into our curriculum design, classroom practice, and support services.",
      "We actively ensure that no learner is excluded or disadvantaged on the basis of characteristics such as age, disability, sex or gender identity, race or ethnicity, sexual orientation, religion or belief, or any other protected characteristic.",
      "All learners are encouraged to share their perspectives and experiences, which enriches our learning environment.",
      "KBC provides inclusive learner support to meet diverse needs, including those of learners with disabilities or additional learning needs. We make reasonable adjustments wherever necessary to help every learner participate fully. Our staff receive training on cultural competence, unconscious bias, and inclusive teaching strategies to maintain a learning environment where everyone feels respected and safe to be themselves. By embedding EDI in daily practice, we nurture a culture that celebrates differences and promotes dignity, tolerance, and fairness for all.",
    ],
  },
  {
    id: "wellbeing",
    number: "05",
    eyebrow: "Learner welfare",
    title: "Learner Safety, Wellbeing, and Mental Health Support",
    icon: HeartHandshake,
    paragraphs: [
      "We recognise that safeguarding goes beyond protection from immediate harm – it encompasses the broader wellbeing and mental health of our learners. KBC is committed to promoting learner health and wellbeing alongside academic progress. We have systems in place to identify and support learners who may be struggling with mental health issues, stress, or personal difficulties. Our Learner Support Team offers confidential advice and can assist learners with mental health needs or learning difficulties, ensuring they receive appropriate support and adjustments. We also proactively signpost learners to external mental health services or counseling as needed.",
      "The college’s safeguarding approach is founded on the principle of doing what is in the best interests of the learner. We aim to empower adult learners by involving them in decisions and respecting their autonomy, while still providing robust protection. We promote the wellbeing of adults by considering their views and feelings and protecting their right to live in safety, free from abuse and neglect. Any learner who has a concern about their own safety or wellbeing will be listened to and supported. By cultivating an environment of trust and care, we ensure that learners feel comfortable seeking help – whether they face bullying, harassment, mental health challenges, or any form of abuse. KBC’s overarching goal is that every learner feels safe, supported, and able to thrive both academically and personally.",
    ],
  },
  {
    id: "online-safety",
    number: "06",
    eyebrow: "Digital learning",
    title: "Online Safety",
    icon: Laptop2,
    paragraphs: [
      "KBC takes online safety as seriously as physical on-site safety. Many of our learning activities and resources are digital, and we recognise the potential risks that come with online engagement – such as cyberbullying, online harassment, radicalisation, fraud, or exposure to harmful content. We therefore maintain a robust approach to e-safety to protect our learners and staff in virtual spaces. Our college provides guidance and training on safe and responsible online behavior. Learners are taught about protecting their personal data, using social media responsibly, and recognizing and reporting online risks. We ensure that our online learning platforms are secure (password-protected and monitored) and that only authorised users can access them.",
      "To reinforce safe online practices, we keep our community informed of up-to-date cyber safety advice. For example, we encourage learners and staff to follow the UK National Cyber Security Centre’s Stay Safe Online guidance, which offers practical tips for online security. Our IT usage is monitored in line with our safeguarding policy to detect and prevent inappropriate activity. Any incidents of cyberbullying or online misconduct are taken seriously and dealt with under our safeguarding and disciplinary procedures. By combining technological safeguards with education on digital citizenship, KBC ensures that learners can benefit from online resources confidently and safely.",
    ],
  },
  {
    id: "recruitment-training",
    number: "07",
    eyebrow: "Staff standards",
    title: "Safer Recruitment and Staff Training",
    icon: BookOpenCheck,
    paragraphs: [
      "KBC employs rigorous safer recruitment practices to prevent unsuitable individuals from working with our learners. All prospective staff and volunteers who will have substantial access to learners undergo thorough vetting and background checks. This includes verification of identity, qualifications and experience, receipt of satisfactory references, and an enhanced DBS check (Disclosure and Barring Service) for roles involving regulated activity. Where relevant, we also conduct barred list checks and obtain additional overseas police checks for candidates who have lived or worked abroad. We maintain a single central record of all required pre-employment checks. Furthermore, at least one member of every hiring panel is trained in safer recruitment techniques to ensure our hiring decisions keep safeguarding considerations at the forefront. These measures reflect our unwavering commitment to learner safety from the outset of any staff member’s engagement.",
      "All KBC staff (including academic, support, and contracted staff) receive comprehensive induction and ongoing training in safeguarding. This training covers child and adult protection procedures, Prevent Duty (anti-radicalisation), equality and diversity, professional boundaries, and how to respond to and report concerns. We provide regular refresher training and updates so that everyone remains aware of the latest safeguarding guidelines and understands their responsibilities. Safeguarding and Prevent updates are embedded into staff continuous professional development, and our Designated Safeguarding Leads offer workshops or briefings throughout the year to reinforce best practices. By ensuring our staff are well-trained and confident, we embed a vigilant, safety-first culture within the college’s workforce. No staff member is allowed unsupervised contact with learners until all checks are complete and essential safeguarding training is undertaken. This vigilant approach to recruitment and training helps maintain an environment where learner safety is always the top priority.",
    ],
  },
  {
    id: "whistleblowing",
    number: "08",
    eyebrow: "Openness",
    title: "Whistleblowing Procedures",
    icon: Megaphone,
    paragraphs: [
      "We are committed to an atmosphere of openness and accountability. KBC has a clear whistleblowing policy that encourages staff to voice any concerns about wrongdoing or poor practice, especially relating to the safety and wellbeing of learners. We promote a culture of respect, openness, vigilance and whistleblowing in which all employees feel able to raise concerns without fear. All staff are regularly reminded that they have a duty to speak up if they observe behavior by colleagues (or even senior managers) that compromises learner safety or contravenes our safeguarding standards.",
      "Our whistleblowing procedures ensure that such concerns can be reported confidentially and will be taken seriously and handled appropriately. Staff know how to raise concerns and who to approach – concerns can be reported directly to the Designated Safeguarding Lead or senior management, or even externally to authorities if necessary, in line with our policy. We assure all whistleblowers that they will be protected from retaliation. By empowering staff to report issues and by acting promptly on every concern raised, we reinforce our safeguarding culture and continuously improve our practices. (For instance, staff can also access the NSPCC Whistleblowing Helpline for independent advice if they feel unable to report internally.) Maintaining these whistleblowing avenues helps ensure that any potential safeguarding problems are identified and addressed at an early stage, keeping our learners safe.",
    ],
  },
  {
    id: "raising-concerns",
    number: "09",
    eyebrow: "Speak up",
    title: "Raising Safeguarding Concerns (Learners)",
    icon: CheckCircle2,
    paragraphs: [
      "It is vitally important to us that learners themselves feel able to raise any safeguarding concerns. We ensure that all learners are made aware of how they can report a safeguarding issue – whether it’s something affecting them personally or concerns about a fellow learner. We clearly communicate the reporting channels during learner induction and in student handbooks, tutorials, and posters. Learners are informed that they can talk to any staff member (for example, their tutor or a trusted member of staff) about a safeguarding or wellbeing concern, and that staff member will help. We also publish guidance on our website and learner platforms about how to recognize safeguarding issues and who to contact. As a result, all learners know how they can raise concerns about themselves or others, and how those concerns will be dealt with.",
    ],
  },
];

const safeguardingLeads = ["Paul Hibbins", "Professor Yousef Sultan", "Tina Wright"];

function PolicyEyebrow({ children, inverse = false }: { children: string; inverse?: boolean }) {
  return (
    <div className="w-fit">
      <p className={`text-xs font-bold uppercase leading-5 tracking-[0.2em] ${inverse ? "text-kbc-gold-400" : "text-primary"}`}>{children}</p>
      <span
        className={`mx-auto mt-3 block h-2 w-[calc(100%_+_24px)] -translate-x-3 rounded-[50%] border-t-[1.5px] ${inverse ? "border-kbc-gold-400" : "border-primary"}`}
        aria-hidden="true"
      />
    </div>
  );
}

export function SafeguardingPage() {
  const [activeSectionId, setActiveSectionId] = useState(policySections[0].id);
  const selectedSection = policySections.find((section) => section.id === activeSectionId) || policySections[0];
  const showingContacts = activeSectionId === "safeguarding-contacts";

  return (
    <div className="overflow-hidden bg-white font-body text-kbc-purple-950">
      <RouteMeta
        fallbackTitle="Safeguarding, Prevent and Inclusion | Kent Business College"
        fallbackDescription="Kent Business College safeguarding, Prevent Duty, equality, diversity and inclusion policy statement for adult learners."
      />

      <section className="relative min-h-[100svh] overflow-hidden bg-primary pb-20 pt-[150px] text-white sm:pt-[164px]" aria-labelledby="safeguarding-heading">
        <img
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/64f1a25597dd489bad84534465bcc5c3.webp"
          alt=""
          aria-hidden="true"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-primary/85" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_14%,rgba(168,120,178,0.34),transparent_27%),radial-gradient(circle_at_14%_86%,rgba(214,176,78,0.13),transparent_30%)]" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[calc(100svh_-_230px)] w-[calc(100%_-_3rem)] max-w-[1100px] items-center justify-center max-sm:w-[calc(100%_-_2rem)]">
          <div className="flex w-full flex-col items-center text-center">
            <PolicyEyebrow inverse>Safety, dignity and inclusion</PolicyEyebrow>
            <h1 id="safeguarding-heading" className="mt-6 max-w-[1040px] font-heading text-5xl font-medium leading-none tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[78px]">
              Safeguarding, Prevent, and <span className="text-kbc-gold-400">Inclusion.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/78 sm:text-lg">
              Kent Business College is dedicated to providing a safe, inclusive environment in which all adult learners can learn and thrive.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-kbc-purple-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="policy-statement-heading">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <PolicyEyebrow>Policy statement</PolicyEyebrow>
              <h2 id="policy-statement-heading" className="mt-6 max-w-2xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">
                Every learner has the right to feel safe, valued and able to thrive.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-kbc-purple-700">
              <p>
                Kent Business College (KBC) is dedicated to providing a safe, inclusive environment in which all adult learners can learn and thrive. We recognize that safeguarding describes the function of protecting all our learners, including those over 18.
              </p>
              <p>
                As a provider of higher-level apprenticeships and adult education, we fully commit to safeguarding every learner’s welfare and meeting our statutory and moral responsibilities to an Outstanding standard.
              </p>
              <p>
                This statement outlines our commitment to safeguarding, compliance with the Prevent Duty, and the embedding of equality, diversity, and inclusion in all aspects of college life.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              [ShieldCheck, "Safeguarding", "Protecting every learner’s right to live and learn safely."],
              [Siren, "Prevent Duty", "Acting promptly to prevent radicalisation and extremist influence."],
              [Users, "Inclusion", "Embedding equality, dignity and fair opportunity in college life."],
            ].map(([Icon, title, body]) => {
              const CardIcon = Icon as typeof ShieldCheck;
              return (
                <article className="group rounded-2xl border border-primary/10 bg-white p-7 shadow-[0_18px_50px_rgba(75,23,109,0.07)] transition duration-300 ease-out hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_26px_60px_rgba(75,23,109,0.14)]" key={title as string}>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-kbc-gold-400"><CardIcon className="h-5 w-5" aria-hidden="true" /></span>
                  <h3 className="mt-6 font-heading text-xl font-semibold">{title as string}</h3>
                  <span className="mt-5 block h-0.5 w-14 bg-primary transition-[width] duration-500 ease-out group-hover:w-full" aria-hidden="true" />
                  <p className="mt-5 text-sm leading-7 text-kbc-purple-700">{body as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12" aria-label="Safeguarding policy">
        <div className="mx-auto grid max-w-[1200px] items-start gap-12 lg:grid-cols-[270px_1fr] lg:gap-16">
          <div className="lg:hidden">
            <label className="mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-primary" htmlFor="safeguarding-section-select">Choose a section</label>
            <select
              className="min-h-14 w-full rounded-xl border border-primary/15 bg-kbc-purple-50 px-4 text-sm font-semibold text-primary outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
              id="safeguarding-section-select"
              value={activeSectionId}
              onChange={(event) => setActiveSectionId(event.target.value)}
            >
              {policySections.map((section) => <option value={section.id} key={section.id}>{section.title}</option>)}
              <option value="safeguarding-contacts">Safeguarding Contacts</option>
            </select>
          </div>

          <aside className="hidden rounded-2xl border border-primary/10 bg-kbc-purple-50 p-5 lg:sticky lg:top-28 lg:block" aria-label="Policy contents">
            <div className="grid gap-1" role="tablist" aria-orientation="vertical">
              {policySections.map((section) => (
                <button
                  className={`rounded-xl px-3 py-2.5 text-left text-sm font-medium leading-5 transition ${activeSectionId === section.id ? "bg-primary text-white shadow-sm" : "text-kbc-purple-700 hover:bg-white hover:text-primary"}`}
                  type="button"
                  role="tab"
                  aria-selected={activeSectionId === section.id}
                  aria-controls="safeguarding-tab-panel"
                  onClick={() => setActiveSectionId(section.id)}
                  key={section.id}
                >
                  {section.title}
                </button>
              ))}
              <button
                className={`rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${showingContacts ? "bg-primary text-white shadow-sm" : "text-kbc-purple-700 hover:bg-white hover:text-primary"}`}
                type="button"
                role="tab"
                aria-selected={showingContacts}
                aria-controls="safeguarding-tab-panel"
                onClick={() => setActiveSectionId("safeguarding-contacts")}
              >
                Safeguarding Contacts
              </button>
            </div>
          </aside>

          <div id="safeguarding-tab-panel" role="tabpanel" tabIndex={0} className="outline-none">
            {!showingContacts ? (() => {
              const { id, number, eyebrow, title, icon: Icon, paragraphs } = selectedSection;
              return (
              <article className="min-h-[680px] animate-fade-in rounded-3xl border border-primary/10 bg-white p-6 shadow-[0_20px_55px_rgba(75,23,109,0.06)] sm:p-9" id={id} key={id}>
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-kbc-gold-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold tracking-[0.16em] text-primary/45">{number}</span>
                </div>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
                <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
                <div className="mt-6 space-y-5 text-[15px] leading-8 text-kbc-purple-700 sm:text-base">
                  {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </article>
              );
            })() : (
              <article className="min-h-[680px] animate-fade-in rounded-3xl bg-primary p-6 text-white shadow-[0_20px_55px_rgba(75,23,109,0.16)] sm:p-9" key="safeguarding-contacts">
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-kbc-gold-400 text-primary"><ShieldCheck className="h-5 w-5" aria-hidden="true" /></span>
                  <span className="text-xs font-bold tracking-[0.16em] text-white/45">10</span>
                </div>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-kbc-gold-400">Safeguarding contacts</p>
                <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">Speak up. We are here to help.</h2>
                <p className="mt-6 max-w-3xl text-[15px] leading-8 text-white/72 sm:text-base">
                  KBC’s designated safeguarding leads (DSLs) are the primary points of contact for any safeguarding or Prevent concerns. Our DSL team provides expert guidance and support to ensure the safety of our college community.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {safeguardingLeads.map((name) => (
                    <div className="rounded-2xl border border-white/15 bg-white/8 p-5" key={name}>
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-kbc-gold-400 text-primary"><ShieldCheck className="h-5 w-5" aria-hidden="true" /></span>
                      <h3 className="mt-5 font-heading text-lg font-semibold leading-snug text-white">{name}</h3>
                      <p className="mt-2 text-xs leading-5 text-white/62">Designated Safeguarding Lead</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-white p-6 text-kbc-purple-950 sm:p-7">
                  <p className="text-sm leading-7 text-kbc-purple-700">
                    Learners or staff can reach the Safeguarding Team for advice, support, or to report a concern. We encourage you to contact us immediately if you have any worries about safety or wellbeing.
                  </p>
                  <a className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-bold text-white transition hover:bg-primary-dark" href="mailto:safeguarding@kentbusinesscollege.com">
                    safeguarding@kentbusinesscollege.com
                  </a>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
