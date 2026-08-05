import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SkipLink } from "./SkipLink";

export function MainLayout() {
  return <div className="flex min-h-screen flex-col bg-slate-50 text-slate-950"><SkipLink /><Header /><main id="main-content" className="flex-1"><Outlet /></main><Footer /><ScrollRestoration /></div>;
}
