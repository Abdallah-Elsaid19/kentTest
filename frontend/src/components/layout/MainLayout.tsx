import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SkipLink } from "./SkipLink";

export function MainLayout() {
  return (
    <div className="kbc-site">
      <SkipLink />
      <Header />
      <main id="main-content" className="relative z-[2] bg-[var(--color-surface)]">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
