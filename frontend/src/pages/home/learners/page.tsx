import { RouteMeta } from "@/components/seo/RouteMeta";
import "@/styles/learner-home.css";
import { CareerDirectionsSection } from "./components/CareerDirectionsSection";
import { LearnerEventsSection } from "./components/LearnerEventsSection";
import { LearnerFinalCta } from "./components/LearnerFinalCta";
import { LearnerHeroSection } from "./components/LearnerHeroSection";
import { LearnerHowSection } from "./components/LearnerHowSection";
import { LearnerProgrammesSection } from "./components/LearnerProgrammesSection";
import { LearnerRecognitionSection } from "./components/LearnerRecognitionSection";
import { LearnerStorySection } from "./components/LearnerStorySection";
import { LearnerSupportSection } from "./components/LearnerSupportSection";
import { LearnerTrustedSection } from "./components/LearnerTrustedSection";

export default function LearnersHomePage() {
  return (
    <main className="learner-home overflow-hidden">
      <RouteMeta fallbackTitle="Learners | Kent Business College" fallbackDescription="Build role-relevant professional capability through Kent Business College apprenticeships, coaching and recognised pathways." />
      <LearnerHeroSection />
      <LearnerTrustedSection />
      <CareerDirectionsSection />
      <LearnerProgrammesSection />
      <LearnerHowSection />
      <LearnerSupportSection />
      <LearnerRecognitionSection />
      <LearnerStorySection />
      <LearnerEventsSection />
      <LearnerFinalCta />
    </main>
  );
}
