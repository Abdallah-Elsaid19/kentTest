import { useEffect, useRef, type CSSProperties } from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

const basePath = __BASE_PATH__.endsWith("/") ? __BASE_PATH__ : `${__BASE_PATH__}/`;
const footerAsset = (path: string) => `${basePath}our-story/assets/${path.replace(/^\/+/, "")}`;
const footerSponsorAsset = (file: string) => `${basePath}assets/logos/footer-partners/${file}`;

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

    const setGlow = (event: PointerEvent) => {
      const rect = panel.getBoundingClientRect();
      panel.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
      panel.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
    };
    const clearGlow = () => {
      panel.style.setProperty("--glow-x", "-9999px");
      panel.style.setProperty("--glow-y", "-9999px");
    };
    footer.addEventListener("pointermove", setGlow);
    footer.addEventListener("pointerleave", clearGlow);

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
      footer.removeEventListener("pointermove", setGlow);
      footer.removeEventListener("pointerleave", clearGlow);
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
      <footer ref={footerRef} className="footer-reveal" id="siteFooter" data-footer-managed="true">
        <img className="footer-reveal__blobs" src={footerAsset("images/footer-blobs.svg")} alt="" aria-hidden="true" />

        <div ref={panelRef} className="footer-reveal__panel">
          <div className="footer-reveal__mask" aria-hidden="true" />
          <div className="footer-reveal__glass" aria-hidden="true" />
          <div className="footer-reveal__cursorShine" aria-hidden="true" />
          <div className="footer-reveal__edgeGlow" aria-hidden="true" />

          <div className="footer-reveal__media">
            <video className="footer-reveal__video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
              <source src={footerAsset("video/ibis_footer_video.mp4")} type="video/mp4" />
            </video>
          </div>

          <div ref={contentRef} className="footer-reveal__content">
            <div className="footer-reveal__row">
              <div className="footer-reveal__col footer-reveal__col--brand">
                <Link to="/" className="footer-reveal__brand" aria-label="Kent Business College home">
                  <img src={footerAsset("images/kent-crest-white.png")} alt="" aria-hidden="true" />
                  <span>Kent Business College</span>
                </Link>
                <p className="footer-reveal__brand-tagline">Turning teams into chartered professionals through fully funded apprenticeships and qualifications.</p>
                <div className="footer-reveal__social-row">
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
              </div>

              <nav className="footer-reveal__col footer-reveal__col--links" aria-label="Colleges">
                <span className="footer-reveal__col-label">Colleges</span>
                <Link to="/college-of-project-management">College of Project Management</Link>
                <Link to="/college-of-project-controls">College of Project Controls</Link>
                <Link to="/college-of-marketing">College of Marketing</Link>
                <Link to="/college-of-leadership">College of Leadership</Link>
              </nav>

              <nav className="footer-reveal__col footer-reveal__col--links" aria-label="Programmes">
                <span className="footer-reveal__col-label">Programmes</span>
                <Link to="/associate-project-manager-level-4">Associate Project Manager L4</Link>
                <Link to="/project-controls-professional-level-6">Project Controls Professional L6</Link>
                <Link to="/marketing-executive-level-4">Marketing Executive L4</Link>
                <Link to="/marketing-manager-level-6">Marketing Manager L6</Link>
                <Link to="/mba-diploma-level-7">MBA / Diploma L7</Link>
              </nav>

              <nav className="footer-reveal__col footer-reveal__col--links" aria-label="About">
                <span className="footer-reveal__col-label">About</span>
                <Link to="/about">Who We Are</Link>
                <Link to="/our-experts">Our Experts</Link>
                <Link to="/our-partners">Our Partners</Link>
                <Link to="/governance-board">Governance Board</Link>
                <Link to="/safeguarding-handbook">Safeguarding Handbook</Link>
              </nav>

              <nav className="footer-reveal__col footer-reveal__col--links" aria-label="Support">
                <span className="footer-reveal__col-label">Support</span>
                <Link to="/faq">FAQ</Link>
                <Link to="/support">KBC Support</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/book-session">Book a Session</Link>
              </nav>
            </div>

            <div ref={sponsorsRef} className="footer-reveal__sponsors" aria-label="Our partners">
              <SponsorTrack />
              <SponsorTrack copy />
            </div>
          </div>
        </div>

        <div className="footer-reveal__bottom">
          <span>© 2026 Kent Business College. All rights reserved.</span>
          <div className="footer-reveal__bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
