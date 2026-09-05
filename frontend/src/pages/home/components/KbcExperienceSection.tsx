import {
  Award,
  BadgePercent,
  CalendarDays,
  Check,
  Clock3,
  GraduationCap,
  Headphones,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import { ArrowLink } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

const qualifications = ["CIM", "APM", "PMI", "APMG", "ChPP", "IPC", "ICostE", "CaSA"];

const fundBenefits = [
  "Professional exam fees",
  "Registration fees",
  "APM ChPP application & preparation support where applicable",
  "Workshop travel",
  "Graduation rewards",
  "No hidden costs",
  "Professional memberships",
  "Relevant professional exam support",
  "ICostE / Certified Professional Cost Engineer pathway support where applicable",
  "Graduation ceremony",
  "Laptop prize where applicable",
];

const supportBenefits = [
  "Live interactive learning",
  "Session recordings",
  "Catch-up support",
  "One-to-one tutoring",
];

const eventBenefits = [
  "KBC professional Masterclasses",
  "London Masterclass events",
  "Networking opportunities",
  "Optional UK in-person workshops",
  "Professional community",
];

const workshopLocations = ["London", "Kent", "Nottingham", "Derby", "Birmingham", "York", "Manchester"];

export function KbcExperienceSection() {
  return (
    <section className="figma-experience" aria-labelledby="kbc-experience-title">
      <div className="figma-shell figma-experience__shell">
        <header className="figma-experience__intro">
          <FigmaSectionHeading
            id="kbc-experience-title"
            eyebrow="Why Kent Business College"
            title="The programme is only part of the experience."
            description="Kent Business College combines workplace-focused professional learning with recognised qualifications, specialist support, professional events and additional investment designed to extend development beyond the core programme."
            align="center"
          />
          <strong>More built into your professional development.</strong>
        </header>

        <div className="figma-experience__grid">
          <article className="figma-experience__feature">
            <img
              src="/assets/images/figma-home/kbc-experience-networking.png"
              alt="Women professionals networking at an evening event"
              loading="lazy"
            />
            <div className="figma-experience__feature-shade" aria-hidden="true" />
            <span className="figma-experience__label figma-experience__label--gold">The KBC experience</span>
            <div className="figma-experience__feature-copy">
              <h3>Development that extends beyond the core programme.</h3>
              <ArrowLink to="/events" tone="inverse" direction="up-right">
                Explore the full experience
              </ArrowLink>
            </div>
          </article>

          <div className="figma-experience__cards">
            <article className="figma-experience__benefit-card figma-experience__benefit-card--qualifications">
              <div className="figma-experience__benefit-topline">
                <span className="figma-experience__benefit-icon"><GraduationCap aria-hidden="true" /></span>
              </div>
              <span className="figma-experience__label">Professional qualifications &amp; pathways</span>
              <h4>Go beyond programme completion.</h4>
              <p className="figma-experience__benefit-description">
                Selected programmes include support towards relevant professional qualifications,
                memberships, registration and examination costs.
              </p>
              <ul className="figma-experience__badges" aria-label="Professional bodies and pathways">
                {qualifications.map((qualification) => <li key={qualification}>{qualification}</li>)}
              </ul>
            </article>

            <article className="figma-experience__benefit-card">
              <div className="figma-experience__benefit-topline">
                <span className="figma-experience__benefit-icon"><BadgePercent aria-hidden="true" /></span>
                <img className="figma-experience__brand-logo" src="/assets/logos/kbc-logo-figma.png" alt="Kent Business College" loading="lazy" />
              </div>
              <span className="figma-experience__label">Kent Business College Fund</span>
              <h4>Additional investment from KBC</h4>
              <p className="figma-experience__benefit-description">Separate from Department for Education apprenticeship funding.</p>
              <ul className="figma-experience__benefits">
                {fundBenefits.map((benefit) => (
                  <li key={benefit}><Check aria-hidden="true" /> <span>{benefit}</span></li>
                ))}
              </ul>
              <small className="figma-experience__benefit-disclaimer">
                Selected KBC Fund benefits are limited to the first 30 eligible learners per applicable
                cohort where specified.
              </small>
              <ArrowLink to="/funding-eligibility#kbc-fund-details" direction="up-right">
                Discover the KBC Fund
              </ArrowLink>
            </article>
          </div>
        </div>

        <div className="figma-experience__more">
          <div className="figma-experience__more-grid">
            <article className="figma-experience__benefit-card figma-experience__benefit-card--support">
              <div className="figma-experience__benefit-topline">
                <span className="figma-experience__benefit-icon"><Headphones aria-hidden="true" /></span>
                <img className="figma-experience__brand-logo" src="/assets/logos/kbc-logo-figma.png" alt="Kent Business College" loading="lazy" />
              </div>
              <span className="figma-experience__label">Extended tutoring &amp; professional guidance</span>
              <h4>Support that fits your working week</h4>
              <ul className="figma-experience__compact-list">
                {supportBenefits.map((benefit) => <li key={benefit}><Check aria-hidden="true" /><span>{benefit}</span></li>)}
              </ul>
              <div className="figma-experience__support-stats">
                <span><CalendarDays aria-hidden="true" /><strong>7 days a week</strong></span>
                <span><Clock3 aria-hidden="true" /><strong>Until 9:00 PM</strong></span>
              </div>
            </article>

            <article className="figma-experience__benefit-card figma-experience__benefit-card--events">
              <div className="figma-experience__event-copy">
                <span className="figma-experience__benefit-icon"><Users aria-hidden="true" /></span>
                <span className="figma-experience__label">Professional Masterclasses &amp; events</span>
                <h4>Learn and network with professionals</h4>
                <ul className="figma-experience__compact-list">
                  {eventBenefits.map((benefit) => <li key={benefit}><Check aria-hidden="true" /><span>{benefit}</span></li>)}
                </ul>
              </div>
              <figure className="figma-experience__event-media">
                <img src="/assets/images/learner-home/masterclass.webp" alt="Professionals attending a KBC Masterclass" loading="lazy" />
                <figcaption>
                  <MapPin aria-hidden="true" />
                  <span><strong>London Masterclasses</strong>Hosted at the Marble Arch Hotel three times a year — bringing together learners, employers, line managers and training leaders.</span>
                </figcaption>
              </figure>
            </article>

            <article className="figma-experience__benefit-card figma-experience__benefit-card--travel">
              <span className="figma-experience__benefit-icon"><MapPin aria-hidden="true" /></span>
              <span className="figma-experience__label">Travel support &amp; professional experiences</span>
              <h4>Reach the experiences that matter</h4>
              <ul className="figma-experience__compact-list">
                <li><Check aria-hidden="true" /><span>Travel support for applicable workshops</span></li>
                <li><Check aria-hidden="true" /><span>Travel costs for KBC Masterclasses where included</span></li>
              </ul>
              <div className="figma-experience__locations">
                <span className="figma-experience__locations-label">Workshop locations</span>
                <div>{workshopLocations.map((location) => <span key={location}>{location}</span>)}</div>
              </div>
            </article>

            <article className="figma-experience__benefit-card figma-experience__benefit-card--recognition">
              <span className="figma-experience__benefit-icon"><GraduationCap aria-hidden="true" /></span>
              <span className="figma-experience__label">Recognition, graduation &amp; further development</span>
              <h4>Recognition that extends your pathway</h4>
              <div className="figma-experience__recognition-grid">
                <div>
                  <img className="figma-experience__recognition-logo figma-experience__recognition-logo--crest" src="/assets/logos/kbc-crest.png" alt="Kent Business College crest" loading="lazy" />
                  <span><strong>Graduation</strong>Rochester Cathedral and professional-body graduation where applicable</span>
                </div>
                <div>
                  <span className="figma-experience__recognition-mark"><Award aria-hidden="true" /></span>
                  <span><strong>Rewards &amp; prizes</strong>Graduation rewards and laptop prize where applicable</span>
                </div>
                <div>
                  <img
                    className="figma-experience__recognition-logo figma-experience__recognition-logo--apm"
                    src="https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/c49b55b4496342219ee90b7b048c7dc7.png"
                    alt="APM Recognised Assessment for the ChPP standard"
                    loading="lazy"
                  />
                  <span><strong>Further development</strong>Eligible Level 7 development and ChPP progression support</span>
                </div>
                <div>
                  <span className="figma-experience__recognition-mark"><Sparkles aria-hidden="true" /></span>
                  <span><strong>Professional community</strong>Student Clubs Memberships · London · Kent · Manchester · Liverpool · Birmingham</span>
                </div>
              </div>
              <p className="figma-experience__health-note"><Check aria-hidden="true" /> Private health care insurance where included.</p>
            </article>
          </div>

          <footer className="figma-experience__more-footer">
            <small>Benefits vary by programme, eligibility, cohort and availability.</small>
            <ArrowLink to="/about" direction="up-right">Discover Why KBC</ArrowLink>
          </footer>
        </div>
      </div>
    </section>
  );
}
