import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SkipLink } from "./SkipLink";
import { ScrollAnimations } from "@/components/motion/ScrollAnimations";

export function MainLayout() {
  return <div className="kbc-site"><SkipLink /><Header /><ScrollAnimations /><main id="main-content"><Outlet /></main><Footer /><ScrollRestoration /></div>;
}
