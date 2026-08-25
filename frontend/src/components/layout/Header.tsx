import { ChevronDown, Menu } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { primaryNavigation, type NavItem } from "@/data/navigation";
import { NavigationButton } from "@/components/navigation";
import MobileMenu, { type MobileMenuItem } from "./MobileMenu";

function SmartLink({ href, external, children, className, ariaCurrent, onClick }: { href: string; external?: boolean; children: React.ReactNode; className?: string; ariaCurrent?: "page"; onClick?: () => void }) {
  return external ? <a href={href} className={className} target="_blank" rel="noreferrer" aria-current={ariaCurrent} onClick={onClick}>{children}</a> : <Link to={href} className={className} aria-current={ariaCurrent} onClick={onClick}>{children}</Link>;
}

function isCurrentPath(href: string | undefined, external: boolean | undefined, currentPath: string) {
  if (!href || external) return false;
  const path = href.split(/[?#]/, 1)[0];
  return path === "/" ? currentPath === "/" : currentPath === path || currentPath.startsWith(`${path}/`);
}

function DesktopItem({ item, currentPath, open, onOpen, onClose }: { item: NavItem; currentPath: string; open: boolean; onOpen: () => void; onClose: () => void }) {
  const isActive = isCurrentPath(item.href, item.external, currentPath)
    || Boolean(item.children?.some((child) => isCurrentPath(child.href, child.external, currentPath)));
  const linkClassName = `kbc-nav-link${isActive ? " is-active" : ""}`;

  if (!item.children || !item.children.length) return <SmartLink href={item.href || "/"} external={item.external} className={linkClassName} ariaCurrent={isActive ? "page" : undefined}>{item.label}</SmartLink>;
  return (
    <div className="kbc-nav-dropdown" onMouseEnter={onOpen} onMouseLeave={onClose} onFocus={onOpen} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) onClose(); }}>
      <button className={linkClassName} type="button" aria-expanded={open} onClick={() => open ? onClose() : onOpen()}>{item.label}<ChevronDown size={14} aria-hidden="true" /></button>
      {open && <div className={`kbc-mega-menu ${item.label === "Colleges" ? "kbc-mega-menu--wide" : ""}`}>
        <p className="kbc-mega-menu__title">{item.label}</p>
        <div className="kbc-mega-menu__links">{item.children.map((child) => <SmartLink key={child.label} href={child.href} external={child.external}>{child.label}<span aria-hidden="true">→</span></SmartLink>)}</div>
      </div>}
    </div>
  );
}

export function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, [location.pathname]);

  const mobileItems: MobileMenuItem[] = primaryNavigation.map((item) => ({
    label: item.label,
    path: item.href,
    external: item.external,
    children: item.children?.map((child) => ({ label: child.label, path: child.href, external: child.external })),
  }));
  const mobileFooter = <div className="grid gap-3"><NavigationButton to="/employer-agreement" fullWidth onClick={closeMobileMenu}>Apply Now</NavigationButton><NavigationButton to="/book-session" variant="secondary" fullWidth onClick={closeMobileMenu}>Book an Information Session</NavigationButton></div>;
  const showScrolledHeader = isScrolled || location.pathname === "/employer-agreement";
  const useLightLogo = !showScrolledHeader;

  return (
    <header className={`figma-header is-reference-nav ${showScrolledHeader ? "is-scrolled" : ""}`} ref={headerRef}>
      <div className="figma-header__notice !gap-3 !px-4 !text-[9px] sm:!gap-5 sm:!px-5 sm:!text-xs"><span className="min-w-0">Fully funded apprenticeship pathways for eligible employers and professionals.</span><Link className="shrink-0" to="/book-session">Check your route</Link></div>
      <div className="figma-header__main">
        <div className="figma-header__inner">
          <Link to="/" className="figma-header__brand" aria-label="Kent Business College home"><img src={useLightLogo ? "/assets/logos/kbc-logo-light.webp" : "/assets/logos/kbc-logo.png"} alt="Kent Business College" loading="lazy" decoding="async" /></Link>
          <nav className="figma-header__nav" aria-label="Primary navigation">
            {primaryNavigation.map((item) => <DesktopItem key={item.label} item={item} currentPath={location.pathname} open={desktopOpen === item.label} onOpen={() => setDesktopOpen(item.label)} onClose={() => setDesktopOpen(null)} />)}
          </nav>
          <div className="figma-header__actions"><NavigationButton className="figma-btn figma-header__apply" to="/employer-agreement">Apply Now</NavigationButton><button ref={menuButtonRef} type="button" className={`figma-header__toggle ${useLightLogo ? "!text-white" : "!text-kbc-purple-950"}`} aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label="Open menu" onClick={() => setMobileOpen(true)}><Menu /></button></div>
        </div>
      </div>
      <MobileMenu isOpen={mobileOpen} onClose={closeMobileMenu} currentPath={`${location.pathname}${location.hash}`} returnFocusRef={menuButtonRef} items={mobileItems} footer={mobileFooter} />
    </header>
  );
}
