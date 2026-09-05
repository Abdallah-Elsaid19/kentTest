import { ArrowRight, BriefcaseBusiness, Building2, FolderOpen, GraduationCap, Menu, UserRound, Users, type LucideIcon } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { primaryNavigation, type NavItem } from "@/data/navigation";
import { NavigationButton } from "@/components/navigation";
import MobileMenu, { type MobileMenuItem } from "./MobileMenu";

interface SmartLinkProps {
  href: string;
  external?: boolean;
  children: ReactNode;
  className?: string;
  ariaCurrent?: "page";
  onClick?: () => void;
  navigationParent?: string;
}

function SmartLink({ href, external, children, className, ariaCurrent, onClick, navigationParent }: SmartLinkProps) {
  return external
    ? <a href={href} className={className} target="_blank" rel="noreferrer" aria-current={ariaCurrent} onClick={onClick}>{children}</a>
    : <Link to={href} state={navigationParent ? { headerNavigationParent: navigationParent } : undefined} className={className} aria-current={ariaCurrent} onClick={onClick}>{children}</Link>;
}

function isCurrentPath(href: string | undefined, external: boolean | undefined, currentPath: string) {
  if (!href || external) return false;
  const path = href.split(/[?#]/, 1)[0];
  return path === "/" ? currentPath === "/" : currentPath === path || currentPath.startsWith(`${path}/`);
}

const menuCopy: Record<string, { eyebrow: string; title: string; description: string; image: string; imageAlt: string }> = {
  Colleges: {
    eyebrow: "Colleges",
    title: "Explore Our Colleges",
    description: "Discover specialist colleges in Project Management, Project Controls, Marketing and Leadership.",
    image: "/assets/images/header-menus/colleges.jpg",
    imageAlt: "Kent Business College campus",
  },
  Programmes: {
    eyebrow: "Programmes",
    title: "Our Programmes",
    description: "Industry-recognised apprenticeships that blend academic excellence with practical workplace capability.",
    image: "/assets/images/header-menus/programmes.jpg",
    imageAlt: "Professionals learning together at work",
  },
  "Who We Are": {
    eyebrow: "Who We Are",
    title: "About KBC",
    description: "We partner with employers and professional bodies to deliver programmes that transform careers and organisations.",
    image: "/assets/images/header-menus/who-we-are.jpg",
    imageAlt: "Kent Business College team meeting",
  },
  Resources: {
    eyebrow: "Resources",
    title: "Resources & Insights",
    description: "Access case studies, events, learning materials and expert insights to support your development.",
    image: "/assets/images/header-menus/resources.jpg",
    imageAlt: "Kent Business College learning event",
  },
  "For Learners": {
    eyebrow: "For Learners",
    title: "For Learners",
    description: "Develop your career through an industry-recognised apprenticeship that connects learning with real work.",
    image: "/assets/images/header-menus/for-learners.jpg",
    imageAlt: "Kent Business College learner",
  },
  "For Employers": {
    eyebrow: "For Employers",
    title: "For Employers",
    description: "Build workforce capability through programmes that develop skilled, job-ready talent for your organisation.",
    image: "/assets/images/header-menus/for-employers.jpg",
    imageAlt: "Employers planning workforce development",
  },
};

const menuIcons: Record<string, LucideIcon> = {
  Colleges: Building2,
  Programmes: GraduationCap,
  "Who We Are": Users,
  Resources: FolderOpen,
  "For Learners": UserRound,
  "For Employers": BriefcaseBusiness,
};

function DesktopDropdownPanel({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const copy = menuCopy[item.label] ?? {
    eyebrow: item.label,
    title: item.label,
    description: "Explore the available Kent Business College routes and resources.",
    image: "/assets/images/about-campus.jpg",
    imageAlt: "Kent Business College",
  };
  const MenuIcon = menuIcons[item.label] ?? Building2;

  return (
    <div className="kbc-readdy-header__dropdown-panel" id={`desktop-menu-${item.label.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="kbc-readdy-header__dropdown-intro">
        <div className="kbc-readdy-header__dropdown-eyebrow"><span aria-hidden="true"><MenuIcon size={15} /></span>{copy.eyebrow}</div>
        <h2>{copy.title}</h2>
        <div className="kbc-readdy-header__dropdown-arc" aria-hidden="true" />
        <p>{copy.description}</p>
      </div>
      <div className="kbc-readdy-header__dropdown-links">
        {item.children?.map((child) => (
          <SmartLink
            key={child.label}
            href={child.href}
            external={child.external}
            navigationParent={item.label}
            onClick={onNavigate}
          >
            <span className="kbc-readdy-header__dropdown-icon" aria-hidden="true"><ArrowRight size={15} /></span>
            <span>{child.label}</span>
          </SmartLink>
        ))}
      </div>
      <div className="kbc-readdy-header__dropdown-media">
        <img src={copy.image} alt={copy.imageAlt} loading="eager" decoding="async" />
      </div>
    </div>
  );
}

interface DesktopItemProps {
  item: NavItem;
  active: boolean;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onQueueClose: () => void;
}

function DesktopItem({ item, active, open, onOpen, onClose, onQueueClose }: DesktopItemProps) {
  const linkClassName = `kbc-readdy-header__nav-link${active ? " is-active" : ""}`;

  if (!item.children?.length) {
    return (
      <SmartLink href={item.href || "/"} external={item.external} className={linkClassName} ariaCurrent={active ? "page" : undefined}>
        <span>{item.label}</span>
      </SmartLink>
    );
  }

  const menuId = `desktop-menu-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div
      className="kbc-readdy-header__nav-item"
      onMouseEnter={onOpen}
      onMouseLeave={onQueueClose}
      onFocus={onOpen}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) onClose(); }}
    >
      <button
        className={linkClassName}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => open ? onClose() : onOpen()}
      >
        <span>{item.label}</span>
      </button>
      {open && <DesktopDropdownPanel item={item} onNavigate={onClose} />}
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
  const closeTimerRef = useRef<number | null>(null);
  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  const cancelQueuedClose = useCallback(() => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const openDesktopMenu = useCallback((label: string) => {
    cancelQueuedClose();
    setDesktopOpen(label);
  }, [cancelQueuedClose]);

  const closeDesktopMenu = useCallback(() => {
    cancelQueuedClose();
    setDesktopOpen(null);
  }, [cancelQueuedClose]);

  const queueDesktopClose = useCallback(() => {
    cancelQueuedClose();
    closeTimerRef.current = window.setTimeout(() => setDesktopOpen(null), 200);
  }, [cancelQueuedClose]);

  useEffect(() => () => cancelQueuedClose(), [cancelQueuedClose]);

  useEffect(() => {
    if (!desktopOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDesktopMenu();
    };
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) closeDesktopMenu();
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [closeDesktopMenu, desktopOpen]);

  useEffect(() => {
    closeDesktopMenu();
    closeMobileMenu();
  }, [closeDesktopMenu, closeMobileMenu, location.pathname]);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, [location.pathname]);

  const mobileItems: MobileMenuItem[] = useMemo(() => primaryNavigation.map((item) => ({
    label: item.label,
    path: item.href,
    external: item.external,
    children: item.children?.map((child) => ({
      label: child.label,
      path: child.href,
      external: child.external,
      navigationParent: item.label,
    })),
  })), []);

  const mobileFooter = (
    <div className="grid gap-3">
      <NavigationButton to="/book-session" variant="secondary" fullWidth onClick={closeMobileMenu}>Book an Information Session</NavigationButton>
    </div>
  );

  const startsSolid = ["/contact", "/support", "/employer-agreement"].includes(location.pathname);
  const showSolidHeader = isScrolled || startsSolid;
  const useLightLogo = !showSolidHeader;
  const splitIndex = Math.ceil(primaryNavigation.length / 2);
  const leftNavigation = primaryNavigation.slice(0, splitIndex);
  const rightNavigation = primaryNavigation.slice(splitIndex);
  const requestedNavigationLabel = (location.state as { headerNavigationParent?: string } | null)?.headerNavigationParent;
  const requestedNavigationItem = primaryNavigation.find((item) => item.label === requestedNavigationLabel);
  const requestedNavigationMatches = requestedNavigationItem && (
    isCurrentPath(requestedNavigationItem.href, requestedNavigationItem.external, location.pathname)
      || requestedNavigationItem.children?.some((child) => isCurrentPath(child.href, child.external, location.pathname))
  );
  const activeNavigationLabel = requestedNavigationMatches ? requestedNavigationLabel : primaryNavigation.find((item) => (
    isCurrentPath(item.href, item.external, location.pathname)
      || item.children?.some((child) => isCurrentPath(child.href, child.external, location.pathname))
  ))?.label;

  const renderDesktopItem = (item: NavItem) => (
    <DesktopItem
      key={item.label}
      item={item}
      active={activeNavigationLabel === item.label}
      open={desktopOpen === item.label}
      onOpen={() => openDesktopMenu(item.label)}
      onClose={closeDesktopMenu}
      onQueueClose={queueDesktopClose}
    />
  );

  return (
    <header className={`kbc-readdy-header${showSolidHeader ? " is-solid" : ""}`} ref={headerRef}>
      <div className="kbc-readdy-header__notice">
        <span>Fully funded apprenticeship pathways for eligible employers and professionals.</span>
        <Link to="/book-session">Check your route</Link>
      </div>
      <div className="kbc-readdy-header__main">
        <div className="kbc-readdy-header__inner">
          <div className="kbc-readdy-header__brand-row">
            <span />
            <Link to="/" className="kbc-readdy-header__brand" aria-label="Kent Business College home">
              <img src={useLightLogo ? "/assets/logos/kbc-logo-readdy-light.webp" : "/assets/logos/kbc-logo-readdy-colour.webp"} alt="Kent Business College" loading="eager" decoding="async" fetchPriority="high" />
            </Link>
            <span />
          </div>
          <div className="kbc-readdy-header__nav-row">
            <nav className="kbc-readdy-header__nav kbc-readdy-header__nav--left" aria-label="Primary navigation">{leftNavigation.map(renderDesktopItem)}</nav>
            <Link to="/" className="kbc-readdy-header__mobile-brand" aria-label="Kent Business College home">
              <img src={useLightLogo ? "/assets/logos/kbc-logo-readdy-light.webp" : "/assets/logos/kbc-logo-readdy-colour.webp"} alt="Kent Business College" loading="eager" decoding="async" fetchPriority="high" />
            </Link>
            <div className="kbc-readdy-header__brand-space" aria-hidden="true" />
            <nav className="kbc-readdy-header__nav kbc-readdy-header__nav--right" aria-label="Secondary primary navigation">{rightNavigation.map(renderDesktopItem)}</nav>
            <div className="kbc-readdy-header__actions">
              <button
                ref={menuButtonRef}
                type="button"
                className="kbc-readdy-header__toggle"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
              ><Menu size={25} /></button>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={mobileOpen} onClose={closeMobileMenu} currentPath={`${location.pathname}${location.hash}`} activeParent={activeNavigationLabel} returnFocusRef={menuButtonRef} items={mobileItems} footer={mobileFooter} />
    </header>
  );
}
