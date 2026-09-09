import { useHomeSection } from "../contentContext";
import { SharedHomeSection } from "../SharedHomeSection";
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

function ExperienceContent() {
  const content = useHomeSection("experience");
  const { qualifications, fundBenefits, supportBenefits, eventBenefits, workshopLocations } = content;

  return (
    <section className="figma-experience" aria-labelledby="kbc-experience-title">
      <div className="figma-shell figma-experience__shell">
        <header className="figma-experience__intro">
          <FigmaSectionHeading
            id="kbc-experience-title"
            eyebrow={content.copy.eyebrow}
            title={content.copy.title}
            description={content.copy.description}
            align="center"
          />
          <strong>{content.copy.text}</strong>
        </header>

        <div className="figma-experience__grid">
          <article className="figma-experience__feature">
            <img
              src={content.copy.src}
              alt={content.copy.alt}
              loading="lazy"
            />
            <div className="figma-experience__feature-shade" aria-hidden="true" />
            <span className="figma-experience__label figma-experience__label--gold">{content.copy.text2}</span>
            <div className="figma-experience__feature-copy">
              <h3>{content.copy.heading}</h3>
              <ArrowLink to={content.copy.to} tone="inverse" direction="up-right">
                {content.copy.linkLabel}</ArrowLink>
            </div>
          </article>

          <div className="figma-experience__cards">
            <article className="figma-experience__benefit-card figma-experience__benefit-card--qualifications">
              <div className="figma-experience__benefit-topline">
                <span className="figma-experience__benefit-icon"><GraduationCap aria-hidden="true" /></span>
              </div>
              <span className="figma-experience__label">{content.copy.text3}</span>
              <h4>{content.copy.heading2}</h4>
              <p className="figma-experience__benefit-description">
                {content.copy.paragraph}</p>
              <ul className="figma-experience__badges" aria-label="Professional bodies and pathways">
                {qualifications.map((qualification) => <li key={qualification}>{qualification}</li>)}
              </ul>
            </article>

            <article className="figma-experience__benefit-card">
              <div className="figma-experience__benefit-topline">
                <span className="figma-experience__benefit-icon"><BadgePercent aria-hidden="true" /></span>
                <img className="figma-experience__brand-logo" src={content.copy.src2} alt={content.copy.alt2} loading="lazy" />
              </div>
              <span className="figma-experience__label">{content.copy.text4}</span>
              <h4>{content.copy.heading3}</h4>
              <p className="figma-experience__benefit-description">{content.copy.paragraph2}</p>
              <ul className="figma-experience__benefits">
                {fundBenefits.map((benefit) => (
                  <li key={benefit}><Check aria-hidden="true" /> <span>{benefit}</span></li>
                ))}
              </ul>
              <small className="figma-experience__benefit-disclaimer">
                {content.copy.note}</small>
              <ArrowLink to={content.copy.to2} direction="up-right">
                {content.copy.linkLabel2}</ArrowLink>
            </article>
          </div>
        </div>

        <div className="figma-experience__more">
          <div className="figma-experience__more-grid">
            <article className="figma-experience__benefit-card figma-experience__benefit-card--support">
              <div className="figma-experience__benefit-topline">
                <span className="figma-experience__benefit-icon"><Headphones aria-hidden="true" /></span>
                <img className="figma-experience__brand-logo" src={content.copy.src3} alt={content.copy.alt3} loading="lazy" />
              </div>
              <span className="figma-experience__label">{content.copy.text5}</span>
              <h4>{content.copy.heading4}</h4>
              <ul className="figma-experience__compact-list">
                {supportBenefits.map((benefit) => <li key={benefit}><Check aria-hidden="true" /><span>{benefit}</span></li>)}
              </ul>
              <div className="figma-experience__support-stats">
                <span><CalendarDays aria-hidden="true" /><strong>{content.copy.text6}</strong></span>
                <span><Clock3 aria-hidden="true" /><strong>{content.copy.text7}</strong></span>
              </div>
            </article>

            <article className="figma-experience__benefit-card figma-experience__benefit-card--events">
              <div className="figma-experience__event-copy">
                <span className="figma-experience__benefit-icon"><Users aria-hidden="true" /></span>
                <span className="figma-experience__label">{content.copy.text8}</span>
                <h4>{content.copy.heading5}</h4>
                <ul className="figma-experience__compact-list">
                  {eventBenefits.map((benefit) => <li key={benefit}><Check aria-hidden="true" /><span>{benefit}</span></li>)}
                </ul>
              </div>
              <figure className="figma-experience__event-media">
                <img src={content.copy.src4} alt={content.copy.alt4} loading="lazy" />
                <figcaption>
                  <MapPin aria-hidden="true" />
                  <span><strong>{content.copy.text9}</strong>{content.copy.text10}</span>
                </figcaption>
              </figure>
            </article>

            <article className="figma-experience__benefit-card figma-experience__benefit-card--travel">
              <span className="figma-experience__benefit-icon"><MapPin aria-hidden="true" /></span>
              <span className="figma-experience__label">{content.copy.text11}</span>
              <h4>{content.copy.heading6}</h4>
              <ul className="figma-experience__compact-list">
                <li><Check aria-hidden="true" /><span>{content.copy.text12}</span></li>
                <li><Check aria-hidden="true" /><span>{content.copy.text13}</span></li>
              </ul>
              <div className="figma-experience__locations">
                <span className="figma-experience__locations-label">{content.copy.text14}</span>
                <div>{workshopLocations.map((location) => <span key={location}>{location}</span>)}</div>
              </div>
            </article>

            <article className="figma-experience__benefit-card figma-experience__benefit-card--recognition">
              <span className="figma-experience__benefit-icon"><GraduationCap aria-hidden="true" /></span>
              <span className="figma-experience__label">{content.copy.text15}</span>
              <h4>{content.copy.heading7}</h4>
              <div className="figma-experience__recognition-grid">
                <div>
                  <img className="figma-experience__recognition-logo figma-experience__recognition-logo--crest" src={content.copy.src5} alt={content.copy.alt5} loading="lazy" />
                  <span><strong>{content.copy.text16}</strong>{content.copy.text17}</span>
                </div>
                <div>
                  <span className="figma-experience__recognition-mark"><Award aria-hidden="true" /></span>
                  <span><strong>{content.copy.text18}</strong>{content.copy.text19}</span>
                </div>
                <div>
                  <img
                    className="figma-experience__recognition-logo figma-experience__recognition-logo--apm"
                    src={content.copy.src6}
                    alt={content.copy.alt6}
                    loading="lazy"
                  />
                  <span><strong>{content.copy.text20}</strong>{content.copy.text21}</span>
                </div>
                <div>
                  <span className="figma-experience__recognition-mark"><Sparkles aria-hidden="true" /></span>
                  <span><strong>{content.copy.text22}</strong>{content.copy.text23}</span>
                </div>
              </div>
              <p className="figma-experience__health-note"><Check aria-hidden="true" /> {content.copy.paragraph3}</p>
            </article>
          </div>

          <footer className="figma-experience__more-footer">
            <small>{content.copy.note2}</small>
            <ArrowLink to={content.copy.to3} direction="up-right">{content.copy.linkLabel3}</ArrowLink>
          </footer>
        </div>
      </div>
    </section>
  );
}

export function KbcExperienceSection() {
  return <SharedHomeSection section="experience"><ExperienceContent /></SharedHomeSection>;
}
