import { Suspense, useCallback, useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SkipLink } from "./SkipLink";
import { PageLoadingState } from "@/components/ui/AsyncState";
import { pageRegistry } from "@/features/cms/pageRegistry";

export type MainLayoutOutletContext = { markPageReady: () => void };

export function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const waitsForContent = isHome || Object.values(pageRegistry).some(page => page.route === location.pathname.replace(/\/$/, ""));
  const [readyLocationKey, setReadyLocationKey] = useState<string | null>(null);
  const markPageReady = useCallback(() => setReadyLocationKey(location.key), [location.key]);
  const showFooter = !waitsForContent || readyLocationKey === location.key;

  useEffect(() => {
    if (isHome && !location.hash) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [isHome, location.hash, location.key]);

  return (
    <div className="kbc-site">
      <SkipLink />
      <Header />
      <Suspense fallback={<main id="main-content"><PageLoadingState /></main>}>
        <main id="main-content" className="relative z-[2] min-h-screen bg-[var(--color-surface)]">
          <Outlet context={{ markPageReady } satisfies MainLayoutOutletContext} />
        </main>
        {showFooter && <Footer />}
      </Suspense>
      <ScrollRestoration />
    </div>
  );
}
