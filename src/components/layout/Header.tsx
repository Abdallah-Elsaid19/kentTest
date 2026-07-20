import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { toggleMobileMenu, setScrollY } from "@/store/slices/uiSlice";
import DesktopNavigation from "@/components/navigation/DesktopNavigation";
import MobileNavigation from "@/components/navigation/MobileNavigation";
import { navigationItems } from "@/mocks/data";

export default function Header() {
  const dispatch = useAppDispatch();
  const scrollY = useAppSelector((state) => state.ui.scrollY);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);
      dispatch(setScrollY(y));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-kbc-gold-500 text-kbc-dark-900 text-center text-xs sm:text-sm font-medium py-2 px-4">
        <span className="inline-flex items-center gap-2">
          <i className="ri-information-line" />
          Fully funded apprenticeships available for eligible learners and employers. 
          <Link to="/apply" className="underline hover:no-underline font-semibold ml-1">
            Apply today
          </Link>
        </span>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-kbc-purple-700 shadow-lg"
            : "bg-kbc-purple-700/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 bg-kbc-gold-500 rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-kbc-purple-900 text-lg leading-none">
                  KBC
                </span>
              </div>
              <div className="hidden sm:block">
                <span className="font-heading font-semibold text-white text-base leading-tight block">
                  Kent Business
                </span>
                <span className="font-heading font-semibold text-kbc-gold-400 text-sm leading-tight block">
                  College
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <DesktopNavigation items={navigationItems} />

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://lms.kentbusinesscollege.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/80 hover:text-white transition-colors whitespace-nowrap"
              >
                LMS Login
              </a>
              <Link
                to="/apply"
                className="px-4 py-2 bg-kbc-gold-500 text-kbc-dark-900 text-sm font-semibold rounded-lg hover:bg-kbc-gold-400 transition-colors whitespace-nowrap"
              >
                Apply Now
              </Link>
              <Link
                to="/book-session"
                className="px-4 py-2 border-2 border-white/30 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Book Session
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => dispatch(toggleMobileMenu())}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <i className="ri-menu-line text-xl text-white" />
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation items={navigationItems} />
    </>
  );
}