import { FaqSection } from "@/components/common/FaqSection";
import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { FigmaTestimonialsSection } from "@/pages/home/components/FigmaTestimonialsSection";
import { FigmaUpcomingEventsSection } from "@/pages/home/components/FigmaUpcomingEventsSection";
import { RecognitionStandardsSection } from "@/pages/home/components/RecognitionStandardsSection";
import { TrustedOrganisations } from "@/pages/home/components/TrustedOrganisations";
import { BenefitsSection } from "./component/BenefitsSection";
import { CapabilitiesSection } from "./component/CapabilitiesSection";
import { CareerPathwaysSection } from "./component/CareerPathwaysSection";
import { CollegePageNav } from "./component/CollegePageNav";
import { FinalCTASection } from "./component/FinalCTASection";
import { HeroSection } from "./component/HeroSection";
import { OverviewSection } from "./component/OverviewSection";
import { ProgrammesSection } from "./component/ProgrammesSection";
import { StudyModelSection } from "./component/StudyModelSection";
import { faqCopy, marketingFaqs } from "./data";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: marketingFaqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function MarketingCollegePage() {
  return (
    <div className="bg-white font-body text-[var(--color-ink)]">
      <RouteMeta
        seo={{ schema: [faqSchema] }}
        fallbackTitle="College of Marketing | Kent Business College"
        fallbackDescription="Discover Kent Business College's College of Marketing — DfE-funded Marketing Executive and Marketing Manager apprenticeships that turn customer insight into measurable commercial growth."
      />
      <HeroSection />
      <CollegePageNav />
      <OverviewSection />
      <ProgrammesSection />
      <CapabilitiesSection />
      <BenefitsSection />
      <StudyModelSection />
      <CareerPathwaysSection />
      <div className="kbc-figma-home">
        <div id="marketing-events" className="scroll-mt-20 sm:scroll-mt-32">
          <FigmaUpcomingEventsSection />
        </div>
        <div id="marketing-recognition" className="scroll-mt-20 sm:scroll-mt-32">
          <RecognitionStandardsSection />
        </div>
        <div id="marketing-trusted" className="scroll-mt-20 sm:scroll-mt-32">
          <TrustedOrganisations />
        </div>
      </div>
      <div className="kbc-figma-home">
        <FigmaTestimonialsSection />
      </div>
      <FaqSection
        id="marketing-faq"
        eyebrow={faqCopy.eyebrow}
        title={faqCopy.title}
        description={faqCopy.description}
        items={marketingFaqs}
        action={<NavigationButton className="!min-h-14 min-w-[230px] sm:!min-h-16" to="/book-session">{faqCopy.cta}</NavigationButton>}
      />
      <FinalCTASection />
    </div>
  );
}
