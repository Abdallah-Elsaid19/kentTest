import { useEffect, useRef, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import styles from "./Footer.module.css";

const basePath = __BASE_PATH__.endsWith("/") ? __BASE_PATH__ : `${__BASE_PATH__}/`;
const footerAsset = (path: string) => `${basePath}our-story/assets/${path.replace(/^\/+/, "")}`;
const footerSponsorAsset = (file: string) => `${basePath}assets/logos/footer-partners/${file}`;

const footerNavigation = [
  {
    title: "Our Colleges",
    links: [
      { label: "College of Project Controls and Project Management", href: "/college-of-project-controls-and-project-management" },
      { label: "College of Marketing", href: "/college-of-marketing" },
      { label: "College of Leadership", href: "/college-of-leadership" },
    ],
  },
  {
    title: "Apprenticeships",
    links: [
      { label: "Associate Project Manager – Level 4", href: "/associate-project-manager-level-4" },
      { label: "Project Controls Professional – Level 6", href: "/project-controls-professional-level-6" },
      { label: "Marketing Executive – Level 4", href: "/marketing-executive-level-4" },
      { label: "Marketing Manager – Level 6", href: "/marketing-manager-level-6" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Our Experts", href: "/our-experts" },
      { label: "Our Partners", href: "/our-partners" },
      { label: "Governance Board", href: "/governance-board" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Learner Support", href: "/support" },
      { label: "Employer Support", href: "/employers" },
      { label: "Safeguarding & Prevent", href: "/safeguarding-handbook" },
      { label: "Report a Safeguarding Concern", href: "mailto:safeguarding@kentbusinesscollege.com" },
      { label: "Contact Us", href: "/contact" },
      { label: "Book an Information Session", href: "/book-session" },
      { label: "FAQ", href: "/faq" },
    ],
  },
] as const;

const footerSponsorLogos = [
  { name: "University of Lincoln", file: "university-lincoln.png" },
  { name: "BMT", file: "bmt.png" },
  { name: "Nolan Business Solutions", file: "nolan.png" },
  { name: "Network Rail", file: "network-rail.png" },
  { name: "Liverpool City Council", file: "liverpool.png" },
  { name: "Wincanton", file: "wincanton.png" },
  { name: "West Lancashire College", file: "west-lancashire.png" },
  { name: "Watts", file: "watts.png" },
  { name: "London School of Economics and Political Science", file: "lse.png" },
  { name: "Lolly", file: "lolly.png" },
] as const;

function SponsorTrack({ copy = false }: { copy?: boolean }) {
  return (
    <div className="footer-reveal__sponsors-track" aria-hidden={copy || undefined}>
      {footerSponsorLogos.map((logo) => (
        <img
          key={`${copy ? "copy" : "main"}-${logo.file}`}
          className="footer-reveal__sponsor-logo"
          src={footerSponsorAsset(logo.file)}
          alt={copy ? "" : logo.name}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      ))}
    </div>
  );
}

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sponsorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const panel = panelRef.current;
    const content = contentRef.current;
    const sponsors = sponsorsRef.current;
    if (!footer || !panel || !content || !sponsors) return;

    const tracks = Array.from(sponsors.querySelectorAll<HTMLElement>(".footer-reveal__sponsors-track"));
    const syncLayout = () => {
      panel.style.setProperty("--footer-panel-h", `${panel.offsetHeight}px`);
      panel.style.setProperty("--footer-content-top", `${content.offsetTop}px`);
    };

    syncLayout();
    const resizeObserver = "ResizeObserver" in window ? new ResizeObserver(syncLayout) : null;
    resizeObserver?.observe(footer);
    resizeObserver?.observe(panel);
    if (!resizeObserver) window.addEventListener("resize", syncLayout);

    tracks.forEach((track) => {
      track.style.animation = "none";
    });

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const autoSpeed = 40;
    const maxFlickSpeed = 700;
    let trackWidth = tracks[0]?.getBoundingClientRect().width ?? 0;
    let offset = 0;
    let velocity = autoSpeed;
    let hovering = false;
    let dragging = false;
    let coasting = false;
    let dragStartX = 0;
    let dragStartOffset = 0;
    let activePointerId: number | null = null;
    let samples: Array<{ time: number; offset: number }> = [];
    let previousFrame: number | null = null;
    let animationFrame = 0;

    const measureTrack = () => {
      trackWidth = tracks[0]?.getBoundingClientRect().width ?? 0;
    };
    const applyOffset = () => {
      if (!trackWidth) return;
      const x = -(((offset % trackWidth) + trackWidth) % trackWidth);
      tracks.forEach((track) => {
        track.style.transform = `translate3d(${x}px, 0, 0)`;
      });
    };
    const tick = (timestamp: number) => {
      if (previousFrame === null) previousFrame = timestamp;
      const delta = Math.min((timestamp - previousFrame) / 1000, 0.05);
      previousFrame = timestamp;
      if (!dragging && (!hovering || coasting) && !reduceMotion) {
        offset += velocity * delta;
        velocity += (autoSpeed - velocity) * Math.min(1, 3 * delta);
        if (coasting && Math.abs(velocity - autoSpeed) < 2) coasting = false;
        applyOffset();
      }
      animationFrame = window.requestAnimationFrame(tick);
    };

    const handleEnter = () => {
      hovering = true;
    };
    const handleLeave = () => {
      hovering = false;
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0 && event.pointerType === "mouse") return;
      dragging = true;
      coasting = false;
      activePointerId = event.pointerId;
      dragStartX = event.clientX;
      dragStartOffset = offset;
      samples = [{ time: performance.now(), offset }];
      sponsors.setPointerCapture(event.pointerId);
      sponsors.classList.add("is-dragging");
    };
    const handlePointerMove = (event: PointerEvent) => {
      if (!dragging || event.pointerId !== activePointerId) return;
      offset = dragStartOffset - (event.clientX - dragStartX);
      applyOffset();
      const now = performance.now();
      samples.push({ time: now, offset });
      while (samples.length > 2 && now - samples[0].time > 120) samples.shift();
    };
    const endDrag = (event: PointerEvent) => {
      if (!dragging || event.pointerId !== activePointerId) return;
      dragging = false;
      sponsors.classList.remove("is-dragging");
      if (sponsors.hasPointerCapture(event.pointerId)) sponsors.releasePointerCapture(event.pointerId);
      const first = samples[0];
      const last = samples[samples.length - 1];
      const elapsed = first && last ? (last.time - first.time) / 1000 : 0;
      velocity = elapsed > 0
        ? Math.max(-maxFlickSpeed, Math.min(maxFlickSpeed, (last.offset - first.offset) / elapsed))
        : autoSpeed;
      samples = [];
      activePointerId = null;
      coasting = true;
    };

    window.addEventListener("resize", measureTrack);
    sponsors.addEventListener("mouseenter", handleEnter);
    sponsors.addEventListener("mouseleave", handleLeave);
    sponsors.addEventListener("pointerdown", handlePointerDown);
    sponsors.addEventListener("pointermove", handlePointerMove);
    sponsors.addEventListener("pointerup", endDrag);
    sponsors.addEventListener("pointercancel", endDrag);
    measureTrack();
    applyOffset();
    animationFrame = window.requestAnimationFrame(tick);

    return () => {
      resizeObserver?.disconnect();
      if (!resizeObserver) window.removeEventListener("resize", syncLayout);
      window.removeEventListener("resize", measureTrack);
      window.cancelAnimationFrame(animationFrame);
      sponsors.removeEventListener("mouseenter", handleEnter);
      sponsors.removeEventListener("mouseleave", handleLeave);
      sponsors.removeEventListener("pointerdown", handlePointerDown);
      sponsors.removeEventListener("pointermove", handlePointerMove);
      sponsors.removeEventListener("pointerup", endDrag);
      sponsors.removeEventListener("pointercancel", endDrag);
    };
  }, []);

  const assetVariables = {
    "--footer-mask-image": `url("${footerAsset("images/footer-mask.svg")}")`,
    "--footer-outline-image": `url("${footerAsset("images/footer-mask-outline.svg")}")`,
  } as CSSProperties;

  return (
    <div className={styles.scope} style={assetVariables}>
      <footer ref={footerRef} className="footer-reveal !bg-white !bg-none" id="siteFooter" data-footer-managed="true">
        <img className="footer-reveal__blobs select-none !opacity-25 sm:!opacity-[0.35]" src={footerAsset("images/footer-blobs.svg")} alt="" aria-hidden="true" draggable={false} />
        <div
          ref={panelRef}
          className="footer-reveal__panel isolate !pb-12 xl:!w-[min(1600px,100%)] xl:!pb-24"
          onPointerMoveCapture={(event) => {
            const panel = event.currentTarget;
            if (!window.matchMedia("(min-width: 1280px) and (hover: hover) and (pointer: fine)").matches) {
              panel.style.setProperty("--footer-pointer-opacity", "0");
              return;
            }
            const rect = panel.getBoundingClientRect();
            if (!rect.width || !rect.height) return;
            panel.style.setProperty("--footer-pointer-x", `${(event.clientX - rect.left) * panel.offsetWidth / rect.width}px`);
            panel.style.setProperty("--footer-pointer-y", `${(event.clientY - rect.top) * panel.offsetHeight / rect.height}px`);
            panel.style.setProperty("--footer-pointer-opacity", "1");
          }}
          onPointerLeave={(event) => event.currentTarget.style.setProperty("--footer-pointer-opacity", "0")}
          onPointerCancel={(event) => event.currentTarget.style.setProperty("--footer-pointer-opacity", "0")}
        >
          <div className="footer-reveal__mask rounded-[36px] !bg-primary !bg-none xl:rounded-none xl:[mask-image:var(--footer-mask-image)] xl:[mask-repeat:no-repeat] xl:[mask-size:100%_100%]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 z-[2] hidden xl:block rounded-[36px] border-2 border-[#f5c94f]/75 xl:rounded-none xl:border-0 xl:bg-[#f5c94f]/75 xl:[mask-image:var(--footer-outline-image)] xl:[mask-repeat:no-repeat] xl:[mask-size:100%_100%]" aria-hidden="true" />
          <div className="footer-reveal__cursorShine !hidden xl:!block !z-[2] rounded-[36px] !mix-blend-normal !opacity-[var(--footer-pointer-opacity,0)] ![mask-image:none] ![-webkit-mask-image:none] xl:rounded-none xl:![mask-image:var(--footer-mask-image)] xl:![-webkit-mask-image:var(--footer-mask-image)] !bg-[radial-gradient(360px_circle_at_var(--footer-pointer-x,50%)_var(--footer-pointer-y,50%),rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.16)_35%,transparent_100%)]" aria-hidden="true" />
          <div className="footer-reveal__edgeGlow !hidden xl:!block !z-[2] !opacity-[var(--footer-pointer-opacity,0)] !bg-[radial-gradient(460px_circle_at_var(--footer-pointer-x,50%)_var(--footer-pointer-y,50%),#f5c94f_0%,rgba(245,201,79,0.65)_35%,transparent_80%)] ![filter:drop-shadow(0_0_6px_rgba(245,201,79,0.8))]" aria-hidden="true" />

          <div className="footer-reveal__media">
            <video className="footer-reveal__video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
              <source src={footerAsset("video/ibis_footer_video.mp4")} type="video/mp4" />
            </video>
          </div>

          <div ref={contentRef} className="footer-reveal__content !pt-24 sm:!pt-32 xl:!pt-40 ![mask-image:none] ![-webkit-mask-image:none]">
            <div className="relative z-[3] mx-auto mb-8 grid w-[86%] grid-cols-1 gap-y-8 text-left sm:grid-cols-2 sm:gap-x-8 xl:w-[90%] xl:grid-cols-[1.3fr_1fr_1.15fr_1fr_1.15fr] xl:gap-x-0 xl:pt-4">
              <div className="flex min-w-0 flex-col items-center gap-4 text-center sm:col-span-2 xl:col-span-1 xl:items-start xl:text-left xl:pr-5">
                <Link to="/" className="flex items-center gap-3 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5c94f]" aria-label="Kent Business College home">
                  <img className="h-12 w-auto shrink-0" src={footerAsset("images/kent-crest-white.png")} alt="" aria-hidden="true" />
                  <span className="font-serif text-[23px] leading-tight">Kent Business College</span>
                </Link>
                <p className="m-0 max-w-[32ch] text-sm leading-relaxed text-[#e7ddfa]">Supporting employers and professionals through high-quality apprenticeship training and professional qualifications.</p>
                <div className="flex flex-wrap gap-2 [&>a]:!h-10 [&>a]:!w-10 [&>a]:!border-white/35 [&>a]:!bg-transparent [&>a:focus-visible]:outline [&>a:focus-visible]:outline-2 [&>a:focus-visible]:outline-offset-4 [&>a:focus-visible]:outline-[#f5c94f]">
                  <Link to="/social/linkedin" className="footer-reveal__social-icon" aria-label="LinkedIn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="4" stroke="currentColor" strokeWidth="1.6" /><path d="M7.5 10.2v6.3M7.5 7.3v.1M11.1 16.5v-4.9c0-.9 0-2.4 2.4-2.4s2.5 1.5 2.5 2.9v4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                  <Link to="/social/x" className="footer-reveal__social-icon" aria-label="X">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                  </Link>
                  <Link to="/social/facebook" className="footer-reveal__social-icon" aria-label="Facebook">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14.5 21v-7.5h2.5l.4-3h-2.9V8.4c0-.9.3-1.5 1.6-1.5h1.4V4.2C17.1 4.1 16 4 14.8 4c-2.7 0-4.4 1.6-4.4 4.5v2.1H7.9v3h2.5V21h4.1z" fill="currentColor" /></svg>
                  </Link>
                  <Link to="/social/instagram" className="footer-reveal__social-icon" aria-label="Instagram">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" /><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" /></svg>
                  </Link>
                </div>
                <p className="m-0 font-['Yellowtail',cursive] text-lg font-normal leading-relaxed text-[#f5c94f]">People. Progress. A Stronger Future.</p>
              </div>

              {footerNavigation.map((column) => (
                <nav key={column.title} className="min-w-0 border-t border-white/30 pt-5 text-center sm:text-left xl:border-l xl:border-t-0 xl:px-5 xl:pt-0" aria-label={column.title}>
                  <h2 className="mb-5 text-[11px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-[#bba2e8]">{column.title}</h2>
                  <ul className="m-0 flex list-none flex-col gap-3 p-0">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link className="group inline-flex max-w-full items-center justify-center gap-1 text-[13px] font-medium leading-relaxed text-[#e7ddfa] transition-colors hover:text-[#f5c94f] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5c94f] sm:inline xl:text-sm" to={link.href}>
                          <span className="min-w-0">{link.label}</span>{" "}
                          <ChevronRight className="inline h-4 w-4 shrink-0 text-[#f5c94f] transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" strokeWidth={2.5} aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>

            <div ref={sponsorsRef} className="footer-reveal__sponsors" aria-label="Our partners">
              <SponsorTrack />
              <SponsorTrack copy />
            </div>
          </div>
        </div>

        <div className="footer-reveal__bottom !justify-center text-center sm:!justify-between sm:text-left !text-primary [&_a]:!text-primary [&_a:hover]:underline [&_a]:underline-offset-4">
          <span>© 2026 Kent Business College. All rights reserved.</span>
          <div className="footer-reveal__bottom-links w-full justify-center sm:w-auto">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
