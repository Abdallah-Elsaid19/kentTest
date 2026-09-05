import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { type ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import "@/styles/pathways-section.css";

type Audience = "professionals" | "employers";

type PathwayCard = {
  eyebrow: string;
  title: ReactNode;
  description: string;
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

const audienceContent: Record<Audience, AudienceContent> = {
  professionals: {
    cards: [
      { eyebrow: "01", title: "Specialist Knowledge", description: "Develop role-relevant professional capability" },
      { eyebrow: "02", title: "Expert Learning", description: "Learn with experienced professionals" },
      { eyebrow: "03", title: "Workplace Evidence", description: "Apply development through real work" },
      { eyebrow: "04", title: "Professional Progression", description: "Build evidence for greater responsibility" },
    ],
    image: "/assets/images/professional-pathway-training.png",
    imageAlt: "A professional learning project management with an expert trainer",
    stats: [
      { value: "Specialist", label: "role-relevant knowledge" },
      { value: "Expert-led", label: "professional learning" },
      { value: "Workplace", label: "applied evidence" },
      { value: "Progression", label: "greater responsibility" },
    ],
    primaryLabel: "Explore Professional Programmes",
    primaryTo: "/programmes",
    secondaryLabel: "Find Your Pathway",
    secondaryTo: "/learners",
  },
  employers: {
    cards: [
      { eyebrow: "01 - Government funded", title: "DfE Fully Funded", description: "Complete professional programmes for eligible employers and employees.", linkLabel: "View funded programmes", to: "/programmes" },
      { eyebrow: "02 - IPC bursary", title: <><strong>50%</strong><span>IPC Bursary</span></>, description: "Commercial specialist modules with 50% bursary support on selected options.", detail: "Selected specialist modules", linkLabel: "Explore 50% supported modules", to: "/programmes" },
      { eyebrow: "03 - Enhanced IPC bursary", title: <><strong className="is-gold">75%</strong><span>IPC Bursary</span></>, description: "Enhanced bursary support for selected specialist modules.", detail: "Selected specialist modules", linkLabel: "Explore 75% supported modules", to: "/programmes" },
      { eyebrow: "04 - Flexible professional development", title: "Flexible Development", description: "Choose one module or combine several around your organisation's capability needs.", linkLabel: "Build your development mix", to: "/book-session" },
    ],
    image: "/assets/images/professional-development-employers.png",
    imageAlt: "Experienced professionals developing an organisation strategy together",
    stats: [
      { value: "DfE", label: "fully funded route" },
      { value: "50%", label: "IPC bursary support" },
      { value: "75%", label: "enhanced IPC bursary" },
      { value: "Flexible", label: "professional modules" },
    ],
    primaryLabel: "Explore Employer Programmes",
    primaryTo: "/programmes",
    secondaryLabel: "Check Eligibility & Funding",
    secondaryTo: "/eligibility",
  },
};

function PathwayCard({ card }: { card: PathwayCard }) {
  return (
    <article className="figma-pathways__route-card">
      <p className="figma-pathways__card-eyebrow">{card.eyebrow}</p>
      <h3>{card.title}</h3>
      <p className="figma-pathways__card-copy">{card.description}</p>
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
  const [audience, setAudience] = useState<Audience>("employers");
  const content = audienceContent[audience];

  return (
    <section className="figma-pathways" id="solutions" aria-labelledby="pathways-title">
      <div className="figma-shell">
        <header className="mx-auto max-w-[970px] text-center">
          <FigmaSectionHeading
            id="pathways-title"
            eyebrow="Choose your pathway"
            title="Professional development built around real work"
            description="Whether you are developing your own capability or building capability across your organisation, Kent Business College helps you find the right professional route."
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
            <small>Working professionals</small>
            <strong>For Professionals</strong>
            <span>Professional development &amp; progression</span>
          </button>
          <button
            className={`figma-pathways__audience ${audience === "employers" ? "is-active" : ""}`}
            type="button"
            role="tab"
            aria-selected={audience === "employers"}
            aria-controls="pathway-audience-panel"
            onClick={() => setAudience("employers")}
          >
            <small>Organisations</small>
            <strong>For Employers</strong>
            <span>Workforce capability &middot; Funding &amp; bursaries</span>
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
            <p className="figma-pathways__footnote">DfE funding is subject to eligibility, employer participation and funding confirmation. IPC bursary support applies to selected commercial modules and is subject to module eligibility, approval and availability.</p>
          )}
        </div>
      </div>
    </section>
  );
}
