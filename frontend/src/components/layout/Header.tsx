import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { NavigationButton } from "@/components/navigation";
import MobileMenu, { type MobileMenuItem } from "./MobileMenu";

type HeaderLink = {
  label: string;
  path: string;
  description?: string;
  meta?: string;
  external?: boolean;
  pending?: boolean;
};

type MegaGroup = {
  title: string;
  description?: string;
  path?: string;
  external?: boolean;
  links: HeaderLink[];
};

type HeaderItem = HeaderLink & { groups?: MegaGroup[]; compact?: boolean };

const headerItems: HeaderItem[] = [
  {
    label: "Colleges",
    path: "/colleges",
    groups: [
      {
        title: "Project Management",
        description: "Delivery, governance, planning and controls capability.",
        path: "/college-of-project-management",
        links: [
          { label: "Associate Project Manager Level 4", path: "/associate-project-manager-level-4" },
          { label: "Project Controls Professional Level 6", path: "/project-controls-professional-level-6" },
        ],
      },
      {
        title: "Marketing",
        description: "Customer insight, campaigns and strategic marketing leadership.",
        path: "/college-of-marketing",
        links: [
          { label: "Marketing Executive Level 4", path: "/marketing-executive-level-4" },
          { label: "Marketing Manager Level 6", path: "/marketing-manager-level-6" },
        ],
      },
      {
        title: "Leadership & Strategy",
        description: "Executive capability and evidence-led strategic decisions.",
        path: "/college-of-leadership",
        links: [
          { label: "Diploma Level 7", path: "/college-of-leadership" },
          { label: "Explore leadership pathways", path: "/college-of-leadership" },
        ],
      },
    ],
  },
  {
    label: "Programmes",
    path: "/programmes",
    groups: [
      {
        title: "Projects",
        description: "Build confident project delivery and controls capability.",
        links: [
          { label: "Associate Project Manager", path: "/associate-project-manager-level-4", description: "Project delivery, stakeholders and governance", meta: "Level 4" },
          { label: "Project Controls Professional", path: "/project-controls-professional-level-6", description: "Planning, cost, risk and performance", meta: "Level 6" },
        ],
      },
      {
        title: "Marketing",
        description: "Progress from campaign delivery to strategic leadership.",
        links: [
          { label: "Marketing Executive", path: "/marketing-executive-level-4", description: "Campaigns, channels and customer insight", meta: "Level 4" },
          { label: "Marketing Manager", path: "/marketing-manager-level-6", description: "Commercial and strategic marketing", meta: "Level 6" },
        ],
      },
      {
        title: "Leadership",
        description: "Develop senior management and organisational direction.",
        links: [
          { label: "Strategy & Leadership", path: "/college-of-leadership", description: "Executive decisions and sustainable growth", meta: "Level 7" },
        ],
      },
    ],
  },
  { label: "Who We Are", path: "/about" },
  { label: "Events", path: "/events" },
  {
    label: "Resources",
    path: "/courses",
    groups: [
      {
        title: "Learn & explore",
        links: [
          { label: "Courses", path: "/courses", description: "Explore wider learning opportunities" },
          { label: "Information sessions", path: "/book-session", description: "Meet the team before applying" },
          { label: "KBC store", path: "/store", description: "Books, materials and learning resources" },
          { label: "Search", path: "/search", description: "Find content across KBC" },
        ],
      },
      {
        title: "Learner journey",
        links: [
          { label: "Learner hub", path: "/learners", description: "Programmes, support and career progression" },
          { label: "Learner stories", path: "/stories", description: "Workplace learning in practice" },
          { label: "Check eligibility", path: "/eligibility", description: "Understand your route and next step" },
          { label: "Learner support", path: "/support", description: "Get help from the KBC team" },
        ],
      },
      {
        title: "Career & employers",
        links: [
          { label: "Explore jobs", path: "/explore-jobs", description: "Career opportunities and direction" },
          { label: "Browse programmes", path: "/programmes", description: "Compare professional pathways" },
          { label: "Employer agreement", path: "/employer-agreement", description: "Start employer onboarding" },
          { label: "Contact sales", path: "/contact", description: "Discuss workforce development" },
        ],
      },
    ],
  },
  {
    label: "More",
    path: "/faq",
    compact: true,
    groups: [{
      title: "More from KBC",
      links: [
        { label: "FAQ", path: "/faq" },
        { label: "Blog", path: "/blog" },
        { label: "Our Experts", path: "/our-experts" },
        { label: "Our Partners", path: "/our-partners" },
        { label: "Governance Board", path: "/governance-board" },
        { label: "Safeguarding Handbook", path: "/safeguarding-handbook" },
        { label: "Contact Us", path: "/contact" },
        { label: "KBC Support", path: "/support" },
      ],
    }],
  },
  {
    label: "Apprentice",
    path: "/apprentices",
    compact: true,
    groups: [{
      title: "Apprentice access",
      links: [
        { label: "Apprentices", path: "/apprentices" },
        { label: "Login to LMS", path: "", pending: true },
        { label: "Login to APTEM", path: "", pending: true },
        { label: "Apprentices’ Stories", path: "/apprentices/stories" },
      ],
    }],
  },
  {
    label: "Employer",
    path: "/employer-dashboard",
    compact: true,
    groups: [{
      title: "Employer services",
      links: [
        { label: "Dashboard", path: "/employer-dashboard" },
        { label: "Explore Jobs", path: "/explore-jobs" },
        { label: "Employer Agreement", path: "/employer-agreement" },
      ],
    }],
  },
];

function isPathActive(pathname: string, path: string) {
  if (!path || path.startsWith("http")) return false;
  return pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));
}

function MenuLink({ item, className, onClick }: { item: HeaderLink; className?: string; onClick?: () => void }) {
  if (item.pending) return <span className={`${className || ""} is-pending`} aria-disabled="true"><span>{item.label}</span><small>External link coming soon</small></span>;
  const content = <><span>{item.label}</span>{item.description && <small>{item.description}</small>}{item.external && <ArrowUpRight aria-hidden="true" />}</>;
  return item.external
    ? <a className={className} href={item.path} target="_blank" rel="noreferrer" onClick={onClick}>{content}</a>
    : <Link className={className} to={item.path} onClick={onClick}>{content}</Link>;
}

function CompactMenu({ item, onNavigate }: { item: HeaderItem; onNavigate: () => void }) {
  const links = item.groups?.flatMap((group) => group.links) || [];
  return (
    <div className="figma-compact-menu">
      <div className="figma-compact-menu__panel">
        <span>{item.groups?.[0]?.title}</span>
        <div>{links.map((link) => <MenuLink item={link} className="figma-compact-menu__link" onClick={onNavigate} key={link.label} />)}</div>
      </div>
    </div>
  );
}

function MegaMenu({ item, onNavigate }: { item: HeaderItem; onNavigate: () => void }) {
  const programmeLinks = item.label === "Programmes"
    ? item.groups?.flatMap((group) => group.links.map((link) => ({ ...link, discipline: group.title }))) || []
    : [];
  return (
    <div className={`figma-mega-menu ${item.label === "Programmes" ? "is-programmes" : ""}`}>
      <div className="figma-mega-menu__panel">
        <div className="figma-mega-menu__intro">
          <span>Explore KBC</span>
          <h2>{item.label}</h2>
          <p>{item.label === "Colleges" ? "Three specialist colleges. One consistent professional standard." : item.label === "Programmes" ? "Compare funded professional pathways by discipline and level." : "Useful content, people, support and essential college information."}</p>
          <Link to={item.path} onClick={onNavigate}>View all {item.label.toLowerCase()} <ArrowUpRight aria-hidden="true" /></Link>
        </div>
        {item.label === "Programmes" ? (
          <div className="figma-mega-menu__programmes">
            <div className="figma-mega-menu__programmes-heading"><div><span>Available pathways</span><h3>Choose the capability you want to build.</h3></div><Link to="/programmes" onClick={onNavigate}>Compare all programmes <ArrowUpRight aria-hidden="true" /></Link></div>
            <div className="figma-mega-menu__programme-grid">
              {programmeLinks.map((programme) => (
                <div className="figma-mega-menu__programme-card" key={programme.label}>
                  <div><span>{programme.discipline}</span>{programme.meta && <b>{programme.meta}</b>}</div>
                  <MenuLink item={programme} onClick={onNavigate} className="figma-mega-menu__programme-link" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="figma-mega-menu__groups">
            {item.groups?.map((group) => (
              <section className="figma-mega-menu__group" key={group.title}>
                {group.path ? <MenuLink item={{ label: group.title, path: group.path, external: group.external }} className="figma-mega-menu__group-title" onClick={onNavigate} /> : <h3>{group.title}</h3>}
                {group.description && <p>{group.description}</p>}
                <div>
                  {group.links.map((link) => (
                    <MenuLink item={link} key={`${group.title}-${link.label}`} onClick={onNavigate} className="figma-mega-menu__link" />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function toMobileItems(): MobileMenuItem[] {
  return headerItems.map((item) => {
    if (!item.groups) return { label: item.label, path: item.path, external: item.external };
    const children: MobileMenuItem[] = item.compact ? [] : [{ label: `View all ${item.label.toLowerCase()}`, path: item.path }];
    item.groups.forEach((group) => {
      if (group.path) children.push({ label: group.title, path: group.path, external: group.external });
      group.links.forEach((link) => {
        if (!children.some((child) => child.path === link.path && child.label === link.label)) children.push({ label: link.label, path: link.path, external: link.external, pending: link.pending });
      });
    });
    return { label: item.label, children };
  });
}

const mobileItems = toMobileItems();

export function Header() {
  const location = useLocation();
  const usesOverlayHeader = location.pathname === "/" || location.pathname === "/learners";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [homeScrolled, setHomeScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);
  const closeMegaMenu = useCallback(() => setOpenMenu(null), []);

  useEffect(() => {
    closeMegaMenu();
  }, [location.pathname, closeMegaMenu]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMegaMenu();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [closeMegaMenu]);

  useEffect(() => {
    if (!usesOverlayHeader) {
      setHomeScrolled(false);
      return;
    }
    const updateHeader = () => setHomeScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, [usesOverlayHeader]);

  const isSolid = !usesOverlayHeader;
  const useDarkLogo = isSolid || homeScrolled;
  const mobileFooter = (
    <div className="grid gap-3">
      <NavigationButton to="/book-session" fullWidth onClick={closeMobileMenu}>Book consultation</NavigationButton>
      <NavigationButton to="/contact" variant="secondary" fullWidth onClick={closeMobileMenu}>Contact sales</NavigationButton>
    </div>
  );

  return (
    <header className={`figma-header is-unified ${isSolid ? "is-solid" : ""} ${homeScrolled ? "is-scrolled" : ""}`} ref={headerRef}>
      <div className="figma-header__notice !gap-3 !px-4 !text-[9px] sm:!gap-5 sm:!px-5 sm:!text-xs">
        <span className="min-w-0">Fully funded apprenticeship pathways for eligible employers and professionals.</span>
        <Link className="shrink-0" to="/book-session">Check your route</Link>
      </div>
      <div className="figma-header__main">
        <div className="figma-header__inner">
          <Link to="/" className="figma-header__brand" aria-label="Kent Business College home">
            <img src={useDarkLogo ? "/assets/logos/kbc-logo.png" : "/assets/logos/kbc-logo-light.webp"} alt="Kent Business College" />
          </Link>
          <nav className="figma-header__nav" aria-label="Primary navigation">
            {headerItems.map((item) => {
              const active = isPathActive(location.pathname, item.path) || Boolean(item.groups?.some((group) => group.links.some((link) => isPathActive(location.pathname, link.path))));
              if (!item.groups) return <Link className={active ? "is-active" : ""} to={item.path} key={item.label}>{item.label}</Link>;
              const expanded = openMenu === item.label;
              return (
                <div className="figma-header__nav-item" key={item.label} onMouseEnter={() => setOpenMenu(item.label)} onMouseLeave={closeMegaMenu} onFocus={() => setOpenMenu(item.label)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) closeMegaMenu(); }}>
                  <button className={active ? "is-active" : ""} type="button" aria-expanded={expanded} onClick={() => setOpenMenu(expanded ? null : item.label)}>{item.label}<ChevronDown aria-hidden="true" /></button>
                  {expanded && (item.compact ? <CompactMenu item={item} onNavigate={closeMegaMenu} /> : <MegaMenu item={item} onNavigate={closeMegaMenu} />)}
                </div>
              );
            })}
          </nav>
          <div className="figma-header__actions">
            <Link to="/contact">Contact sales</Link>
            <Link className="figma-btn figma-header__consultation" to="/book-session">Book consultation</Link>
            <button ref={menuButtonRef} type="button" className={`figma-header__toggle ${useDarkLogo ? "!text-kbc-purple-950" : "!text-white"}`} aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label="Open menu" onClick={() => setMobileOpen(true)}><Menu /></button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={mobileOpen} onClose={closeMobileMenu} currentPath={`${location.pathname}${location.hash}`} returnFocusRef={menuButtonRef} items={mobileItems} footer={mobileFooter} />
    </header>
  );
}
