import { useHomeSection } from "../contentContext";
import { ArrowRight, Check, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import "@/styles/pathways-section.css";

type Audience = "professionals" | "employers";

type PathwayCard = {
  eyebrow: string;
  title: string;
  emphasis?: string;
  emphasisGold?: boolean;
  description: string;
  points?: readonly string[];
  note?: string;
  detail?: string;
  linkLabel?: string;
  to?: string;
};

type AudienceContent = {
  cards: PathwayCard[];
  image: string;
  imageAlt: string;
  stats: Array<{ value: string; label: string }>;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel: string;
  secondaryTo: string;
};

function PathwayCard({ card }: { card: PathwayCard }) {
  return (
    <article className="figma-pathways__route-card">
      <p className="figma-pathways__card-eyebrow">{card.eyebrow}</p>
      <h3>{card.emphasis ? <><strong className={card.emphasisGold ? "is-gold" : undefined}>{card.emphasis}</strong><span>{card.title}</span></> : card.title}</h3>
      <p className="figma-pathways__card-copy">{card.description}</p>
      {card.points && (
        <ul className="mt-5 space-y-3 text-[13px] leading-6 text-[var(--color-muted)]">
          {card.points.map((point) => <li className="flex items-start gap-2.5" key={point}>
            <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>{point}</span>
          </li>)}
        </ul>
      )}
      {card.note && <p className="mt-4 text-xs leading-5 text-[var(--color-muted)]">{card.note}</p>}
      {card.detail && (
        <p className="figma-pathways__card-detail"><SlidersHorizontal aria-hidden="true" /> {card.detail}</p>
      )}
      {card.linkLabel && card.to && (
        <Link className="figma-pathways__card-link" to={card.to}>
          <span>{card.linkLabel}</span><ArrowRight aria-hidden="true" />
        </Link>
      )}
    </article>
  );
}

export function DevelopmentModelSection() {
  const section = useHomeSection("development");
  const audienceContent: Record<Audience, AudienceContent> = section.audienceContent;

  const [audience, setAudience] = useState<Audience>("employers");
  const content = audienceContent[audience];

  return (
    <section className="figma-pathways" id="solutions" aria-labelledby="pathways-title">
      <div className="figma-shell">
        <header className="mx-auto max-w-[970px] text-center">
          <FigmaSectionHeading
            id="pathways-title"
            eyebrow={section.copy.eyebrow}
            title={section.copy.title}
            description={section.copy.description}
          />
        </header>

        <div className="figma-pathways__audiences" role="tablist" aria-label="Choose your pathway">
          <button
            className={`figma-pathways__audience ${audience === "professionals" ? "is-active" : ""}`}
            type="button"
            role="tab"
            aria-selected={audience === "professionals"}
            aria-controls="pathway-audience-panel"
            onClick={() => setAudience("professionals")}
          >
            <small>{section.copy.note}</small>
            <strong>{section.copy.text}</strong>
            <span>{section.copy.text2}</span>
          </button>
          <button
            className={`figma-pathways__audience ${audience === "employers" ? "is-active" : ""}`}
            type="button"
            role="tab"
            aria-selected={audience === "employers"}
            aria-controls="pathway-audience-panel"
            onClick={() => setAudience("employers")}
          >
            <small>{section.copy.note2}</small>
            <strong>{section.copy.text3}</strong>
            <span>{section.copy.text4}</span>
          </button>
        </div>

        <div id="pathway-audience-panel" role="tabpanel" className="figma-pathways__tabpanel" key={audience}>
          <div className="figma-pathways__showcase">
            <div className="figma-pathways__route-column">
              <PathwayCard card={content.cards[0]} />
              <PathwayCard card={content.cards[1]} />
            </div>

            <figure className="figma-pathways__showcase-media">
              <img src={content.image} alt={content.imageAlt} loading="lazy" decoding="async" />
            </figure>

            <div className="figma-pathways__route-column">
              <PathwayCard card={content.cards[2]} />
              <PathwayCard card={content.cards[3]} />
            </div>
          </div>

          <div className="figma-pathways__stats">
            {content.stats.map((stat) => <div key={stat.value}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
          </div>

          <div className="figma-pathways__actions">
            <Link className="figma-pathways__primary" to={content.primaryTo}>{content.primaryLabel} <ArrowRight aria-hidden="true" /></Link>
            <Link className="figma-pathways__secondary" to={content.secondaryTo}>{content.secondaryLabel}</Link>
          </div>

          {audience === "employers" && (
            <p className="figma-pathways__footnote">{section.copy.paragraph}</p>
          )}
        </div>
      </div>
    </section>
  );
}
