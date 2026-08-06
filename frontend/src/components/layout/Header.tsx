import { ChevronDown, Menu } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { primaryNavigation, type NavItem } from "@/data/navigation";
import { NavigationButton } from "@/components/navigation";
import MobileMenu, { type MobileMenuItem } from "./MobileMenu";

function SmartLink({ href, external, children, className, onClick }: { href: string; external?: boolean; children: React.ReactNode; className?: string; onClick?: () => void }) {
  return external ? <a href={href} className={className} target="_blank" rel="noreferrer" onClick={onClick}>{children}</a> : <Link to={href} className={className} onClick={onClick}>{children}</Link>;
}

function DesktopItem({ item, open, onOpen, onClose }: { item: NavItem; open: boolean; onOpen: () => void; onClose: () => void }) {
  if (!item.children || !item.children.length) return <SmartLink href={item.href || "/"} external={item.external} className="kbc-nav-link">{item.label}</SmartLink>;
  return (
    <div className="kbc-nav-dropdown" onMouseEnter={onOpen} onMouseLeave={onClose} onFocus={onOpen} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) onClose(); }}>
      <button className="kbc-nav-link" type="button" aria-expanded={open} onClick={() => open ? onClose() : onOpen()}>{item.label}<ChevronDown size={14} aria-hidden="true" /></button>
      {open && <div className={`kbc-mega-menu ${item.label === "Colleges" ? "kbc-mega-menu--wide" : ""}`}>
        <p className="kbc-mega-menu__title">{item.label}</p>
        <div className="kbc-mega-menu__links">{item.children.map((child) => <SmartLink key={child.label} href={child.href} external={child.external}>{child.label}<span aria-hidden="true">→</span></SmartLink>)}</div>
      </div>}
    </div>
  );
}

export function Header() {
  const location = useLocation();
  const isLearnerHome = location.pathname === "/learners";
  const isExperienceHome = location.pathname === "/" || isLearnerHome;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [homeScrolled, setHomeScrolled] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);
  useEffect(() => {
    if (!desktopOpen) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setDesktopOpen(null); };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [desktopOpen]);
  useEffect(() => {
    if (!isExperienceHome) return;
    const updateHeader = () => setHomeScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, [isExperienceHome]);

  if (isExperienceHome) {
    const sectionLinks = isLearnerHome
      ? [
          ["Programmes", "#learner-programmes"],
          ["How it works", "#learner-how"],
          ["Learner support", "#learner-support"],
          ["Career progression", "#learner-recognition"],
          ["Stories", "#learner-stories"],
        ]
      : [
          ["KBC", "#solutions"],
          ["Solutions", "#solutions"],
          ["Programmes", "#programmes"],
          ["Results", "/stories"],
          ["Funding", "#funding"],
        ];
    const mobileItems: MobileMenuItem[] = [
      { label: "Employers", path: "/" },
      { label: "Learners", path: "/learners" },
      ...sectionLinks.map(([label, path]) => ({ label, path })),
      { label: "Resources", path: isLearnerHome ? "#learner-events" : "#resources" },
    ];
    const mobileFooter = isLearnerHome
      ? <div className="grid gap-3"><NavigationButton to="/eligibility" fullWidth onClick={closeMobileMenu}>Apply now</NavigationButton><NavigationButton to="/contact" variant="secondary" fullWidth onClick={closeMobileMenu}>Get advice</NavigationButton></div>
      : <div className="grid gap-3"><NavigationButton to="/book-session" fullWidth onClick={closeMobileMenu}>Book consultation</NavigationButton><NavigationButton to="/contact" variant="secondary" fullWidth onClick={closeMobileMenu}>Contact sales</NavigationButton></div>;
    return (
      <header className={`figma-header ${isLearnerHome ? "is-learner" : ""} ${homeScrolled ? "is-scrolled" : ""}`} ref={headerRef}>
        <div className="figma-header__notice !gap-3 !px-4 !text-[9px] sm:!gap-5 sm:!px-5 sm:!text-xs"><span className="min-w-0">Fully funded apprenticeship pathways for eligible employers and professionals.</span><Link className="shrink-0" to="/book-session">Check your route</Link></div>
        <div className="figma-header__main">
          <div className="figma-header__inner">
            <Link to="/" className="figma-header__brand" aria-label="Kent Business College home"><img src={homeScrolled ? "/assets/logos/kbc-logo.png" : "/assets/logos/kbc-logo-light.webp"} alt="Kent Business College" /></Link>
            <div className="figma-header__audience" aria-label="Choose your audience"><Link className={!isLearnerHome ? "is-active" : ""} to="/">Employers</Link><Link className={isLearnerHome ? "is-active" : ""} to="/learners">Learners</Link></div>
            <nav className="figma-header__nav" aria-label="Primary navigation">
              {sectionLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}<a className="figma-header__resources" href={isLearnerHome ? "#learner-events" : "#resources"}>Resources <ChevronDown aria-hidden="true" /></a>
            </nav>
            <div className="figma-header__actions">{isLearnerHome ? <><Link className="figma-header__advice" to="/contact">Get advice</Link><Link className="figma-btn figma-header__apply" to="/eligibility">Apply now</Link></> : <><Link to="/contact">Contact sales</Link><Link className="figma-btn figma-header__consultation" to="/book-session">Book consultation</Link></>}<button ref={menuButtonRef} type="button" className={`figma-header__toggle ${homeScrolled ? "!text-kbc-purple-950" : "!text-white"}`} aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label="Open menu" onClick={() => setMobileOpen(true)}><Menu /></button></div>
          </div>
        </div>
        <MobileMenu isOpen={mobileOpen} onClose={closeMobileMenu} currentPath={`${location.pathname}${location.hash}`} returnFocusRef={menuButtonRef} items={mobileItems} footer={mobileFooter} />
      </header>
    );
  }

  const genericMobileItems: MobileMenuItem[] = primaryNavigation.map((item) => ({
    label: item.label,
    path: item.href,
    external: item.external,
    children: item.children?.map((child) => ({ label: child.label, path: child.href, external: child.external })),
  }));
  const genericMobileFooter = <div className="grid gap-3"><NavigationButton to="/employer-agreement" fullWidth onClick={closeMobileMenu}>Apply Now</NavigationButton><NavigationButton to="/book-session" variant="secondary" fullWidth onClick={closeMobileMenu}>Book an Information Session</NavigationButton></div>;

  return (
    <header className="kbc-header" ref={headerRef}>
      <div className="kbc-topbar" aria-hidden="true" />
      <div className="kbc-header__main"><div className="kbc-container kbc-header__inner">
        <Link to="/" className="kbc-brand" aria-label="Kent Business College home"><img src="/assets/logos/kbc-logo.png" alt="Kent Business College" /></Link>
        <nav className="kbc-desktop-nav" aria-label="Primary navigation">{primaryNavigation.map((item) => <DesktopItem key={item.label} item={item} open={desktopOpen === item.label} onOpen={() => setDesktopOpen(item.label)} onClose={() => setDesktopOpen(null)} />)}</nav>
        <div className="kbc-header__actions"><Link className="kbc-button kbc-button--primary kbc-header__apply" to="/employer-agreement">Apply Now</Link><button ref={menuButtonRef} type="button" className="kbc-menu-toggle" aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label="Open menu" onClick={() => setMobileOpen(true)}><Menu /></button></div>
      </div></div>
      <MobileMenu isOpen={mobileOpen} onClose={closeMobileMenu} currentPath={`${location.pathname}${location.hash}`} returnFocusRef={menuButtonRef} items={genericMobileItems} footer={genericMobileFooter} />
    </header>
  );
}
