import { useCmsBindings } from "@/features/cms/publicContent";
import { useEffect, useLayoutEffect } from "react";

import { RouteMeta } from "@/components/seo/RouteMeta";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FacultySection } from "@/pages/PeoplePage/components/FacultySection";

import { initFluidMask } from "./animations/initFluidMask";
import { initHero3d } from "./animations/initHero3d";
import { initMain } from "./animations/initMain";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Partners from "./components/Partners";
import ThenNow from "./components/ThenNow";
import Values from "./components/Values";
import VisionMission from "./components/VisionMission";
import "./ourStory.module.css";

function useOurStoryAnimations() {
  useEffect(() => {
    let cancelled = false;
    let disposeMain: (() => void) | undefined;
    let disposeFluid: (() => void) | undefined;
    let disposeHero: (() => void) | undefined;

    // Avoid starting the non-reentrant WebGL engines during React
    // StrictMode's development-only mount probe.
    const startTimer = window.setTimeout(() => {
      if (cancelled) return;
      disposeFluid = initFluidMask();
      disposeMain = initMain();
      disposeHero = initHero3d();
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(startTimer);
      disposeHero?.();
      disposeFluid?.();
      disposeMain?.();
    };
  }, []);
}

export default function AboutPage() {
  const cms = useCmsBindings(["about","experts","partners"]);

  useLayoutEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  useOurStoryAnimations();

  return cms.render((
    <>
      <RouteMeta
        fallbackTitle={cms.text("about.pages_about_page_page_about_page.fallback_title_001")}
        fallbackDescription={cms.text("about.pages_about_page_page_about_page.fallback_description_002")}
      />
      <Header />

      <div data-our-story-page>
        <div className="cursor-dot" id="cursorDot" aria-hidden="true" />
        <div className="cursor-ring" id="cursorRing" aria-hidden="true" />
        <div className="scroll-vignette scroll-vignette--top" aria-hidden="true" />
        <div className="scroll-vignette scroll-vignette--bottom" aria-hidden="true" />

        <div className="page-content" id="pageContent">
          <Hero />
          <ThenNow />
          <VisionMission />
          <Values />
          <FacultySection id="leadership" />
          <Impact />
          <Partners />
        </div>

      </div>
      <Footer />
    </>
  ));
}
