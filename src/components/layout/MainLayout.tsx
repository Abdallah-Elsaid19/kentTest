import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import SupportChat from "@/components/common/SupportChat";
import CookieBanner from "@/components/common/CookieBanner";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <SupportChat />
      <CookieBanner />
    </div>
  );
}