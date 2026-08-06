import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const quickLinks = [
  ["Safeguarding Handbook", "/safeguarding-handbook"],
  ["Courses", "/courses"],
  ["Events", "/events"],
  ["Who We Are", "/who-we-are"],
];

const collegeLinks = [
  ["College of Project Management", "https://kentbusinesscollege.com/college-of-project-management/"],
  ["College of Marketing", "https://kentbusinesscollege.com/college-of-marketing/"],
  ["College of Leadership", "https://kentbusinesscollege.com/college-of-leadership/"],
];

export function Footer() {
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "/learners") {
    return (
      <footer className="figma-footer">
        <div className="figma-shell figma-footer__grid">
          <div className="figma-footer__about"><img src="/assets/logos/kbc-logo-light.webp" alt="Kent Business College" /><p className="!text-sm">Kent Business College provides specialist professional development in project management, project controls, marketing and leadership.</p></div>
          <nav aria-label="Programme links"><h2 className="!text-xs">Programmes</h2><a className="!text-sm" href="https://kentbusinesscollege.com/college-of-project-management/">Project Management</a><a className="!text-sm" href="https://kentbusinesscollege.com/college-of-project-management/">Project Controls</a><a className="!text-sm" href="https://kentbusinesscollege.com/college-of-marketing/">Marketing</a><a className="!text-sm" href="https://kentbusinesscollege.com/college-of-leadership/">Leadership</a></nav>
          <nav aria-label="Audience links"><h2 className="!text-xs">For you</h2><Link className="!text-sm" to="/employer-agreement">Employers</Link><Link className="!text-sm" to="/apprentices">Professionals</Link><Link className="!text-sm" to="/events">Events</Link><Link className="!text-sm" to="/employer-agreement">Apply now</Link></nav>
          <nav aria-label="KBC links"><h2 className="!text-xs">KBC</h2><Link className="!text-sm" to="/who-we-are">Who we are</Link><Link className="!text-sm" to="/our-experts">Our experts</Link><Link className="!text-sm" to="/our-partners">Our partners</Link><Link className="!text-sm" to="/contact">Contact</Link></nav>
          <nav aria-label="Quality links"><h2 className="!text-xs">Quality</h2><Link className="!text-sm" to="/safeguarding-handbook">Safeguarding</Link><Link className="!text-sm" to="/faq">FAQ</Link><a className="!text-sm" href="/privacy">Privacy</a><a className="!text-sm" href="/accessibility">Accessibility</a></nav>
        </div>
        <div className="figma-shell figma-footer__bottom !text-xs"><span>Kent Business College Ltd · Company No. 10367575 · UKPRN 10093689</span><span>© 2026 Kent Business College. All rights reserved.</span></div>
      </footer>
    );
  }

  return (
    <footer className="kbc-footer">
      <div className="kbc-container kbc-footer__contact-strip"><a href="tel:+441622958955"><Phone aria-hidden="true" />+44 (0)1622 958955</a><a href="mailto:office@kentbusinesscollege.org"><Mail aria-hidden="true" />office@kentbusinesscollege.org</a></div>
      <div className="kbc-container kbc-footer__grid">
        <div className="kbc-footer__about"><img className="!bg-transparent !p-0" src="/assets/logos/kbc-logo-light.webp" alt="Kent Business College" /><p>Kent Business College is a Limited Liability Company incorporated in the UK in 2016 with Registration No. 10367575. It is VAT registered under No. 441 4420 31 and holds a UK Provider Reference Number (UKPRN) of 10093689. Kent Business College is a Premier Accredited Trainer Provider by the Project Management Institute (PMI) with Provider No.</p><div className="kbc-footer__socials"><a href="https://www.linkedin.com/company/kent-business-college/" aria-label="LinkedIn"><Linkedin /></a><a href="https://www.facebook.com/kentbusinesscollege" aria-label="Facebook"><Facebook /></a><a href="https://www.instagram.com/kentbusinesscollege/" aria-label="Instagram"><Instagram /></a><a href="https://www.youtube.com/" aria-label="YouTube"><Youtube /></a></div></div>
        <nav aria-label="Footer quick links"><h2>Quick Links</h2>{quickLinks.map(([label, href]) => <Link to={href} key={label}>{label}</Link>)}</nav>
        <nav aria-label="College links"><h2>Colleges</h2>{collegeLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav>
        <div className="kbc-footer__contact"><h2>Contact Us</h2><a href="tel:+441622958955"><Phone aria-hidden="true" />+441622958955</a><a href="mailto:office@kentbusinesscollege.org"><Mail aria-hidden="true" />office@kentbusinesscollege.org</a><span>Mon-Fri: 8:30AM - 5:00PM</span><p><MapPin aria-hidden="true" />29-37 Maidstone Innovation Centre, Gidds Pond Way, Weavering, Maidstone ME14 5FY</p></div>
      </div>
      <div className="kbc-footer__bottom"><div className="kbc-container"><span>All Rights Reserved © 2026 ,Developed by Kent Business College Development Team.</span></div></div>
    </footer>
  );
}
