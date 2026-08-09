import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="figma-footer">
      <div className="figma-shell figma-footer__grid">
        <div className="figma-footer__about">
          <img src="/assets/logos/kbc-logo-light.webp" alt="Kent Business College" />
          <p className="!text-sm">Kent Business College provides specialist professional development in project management, project controls, marketing and leadership.</p>
        </div>

        <nav aria-label="Programme links">
          <h2 className="!text-xs">Programmes</h2>
          <a className="!text-sm" href="https://kentbusinesscollege.com/college-of-project-management/">Project Management</a>
          <a className="!text-sm" href="https://kentbusinesscollege.com/college-of-project-management/">Project Controls</a>
          <a className="!text-sm" href="https://kentbusinesscollege.com/college-of-marketing/">Marketing</a>
          <a className="!text-sm" href="https://kentbusinesscollege.com/college-of-leadership/">Leadership</a>
        </nav>

        <nav aria-label="Audience links">
          <h2 className="!text-xs">For you</h2>
          <Link className="!text-sm" to="/employer-agreement">Employers</Link>
          <Link className="!text-sm" to="/apprentices">Professionals</Link>
          <Link className="!text-sm" to="/events">Events</Link>
          <Link className="!text-sm" to="/employer-agreement">Apply now</Link>
        </nav>

        <nav aria-label="KBC links">
          <h2 className="!text-xs">KBC</h2>
          <Link className="!text-sm" to="/about">Who we are</Link>
          <Link className="!text-sm" to="/our-experts">Our experts</Link>
          <Link className="!text-sm" to="/our-partners">Our partners</Link>
          <Link className="!text-sm" to="/contact">Contact</Link>
        </nav>

        <nav aria-label="Quality links">
          <h2 className="!text-xs">Quality</h2>
          <Link className="!text-sm" to="/safeguarding-handbook">Safeguarding</Link>
          <Link className="!text-sm" to="/faq">FAQ</Link>
          <a className="!text-sm" href="/privacy">Privacy</a>
          <a className="!text-sm" href="/accessibility">Accessibility</a>
        </nav>
      </div>

      <div className="figma-shell figma-footer__bottom !text-xs">
        <span>Kent Business College Ltd · Company No. 10367575 · UKPRN 10093689</span>
        <span>© 2026 Kent Business College. All rights reserved.</span>
      </div>
    </footer>
  );
}
