import { ArrowRight, Crown, GraduationCap, Handshake, Mail, Users, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type FooterLink = { label: string; to: string };

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-kbc-gold-400">
      <Icon size={18} aria-hidden="true" />
    </span>
  );
}

function FooterColumn({ icon, title, links }: { icon: LucideIcon; title: string; links: FooterLink[] }) {
  return (
    <nav aria-label={title}>
      <div className="flex items-center gap-3">
        <IconBadge icon={icon} />
        <p className="font-heading text-sm font-semibold text-white">{title}</p>
      </div>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to} className="group flex items-center justify-between gap-2 border-b border-white/5 pb-3 text-sm text-white/60 transition-colors hover:text-white">
              <span>{link.label}</span>
              <ArrowRight size={14} aria-hidden="true" className="shrink-0 text-white/30 transition-transform group-hover:translate-x-0.5 group-hover:text-kbc-gold-400" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-heading text-2xl font-bold text-white">{value}</p>
      <p className="mt-1 text-xs text-white/55">{label}</p>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-kbc-purple-950 pb-6 text-white/70">
      <div className="h-2" style={{ backgroundColor: "#c9cbd8" }} />
      <div className="h-2" style={{ backgroundColor: "#6f6a80" }} />
      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div>
            <img src="https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/16480272afc94729b2911a62d1bbf85d.webp" alt="Kent Business College" className="h-24 w-auto" />
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-white/55">Professional education that builds capability, confidence and results for individuals and organisations.</p>
          </div>

          <FooterColumn
            icon={Users}
            title="Who we are"
            links={[
              { label: "Our purpose", to: "/about" },
              { label: "Our approach", to: "/about" },
              { label: "Leadership team", to: "/about" },
              { label: "Careers at KBC", to: "/about" },
              { label: "News and insights", to: "/blog" },
            ]}
          />

          <FooterColumn
            icon={GraduationCap}
            title="Our experts"
            links={[
              { label: "Academic experts", to: "/our-experts" },
              { label: "Industry practitioners", to: "/our-experts" },
              { label: "Guest speakers", to: "/our-experts" },
              { label: "Advisory panel", to: "/governance-board" },
              { label: "Thought leadership", to: "/blog" },
            ]}
          />

          <FooterColumn
            icon={Handshake}
            title="Our partners"
            links={[
              { label: "University partners", to: "/our-partners" },
              { label: "Industry partnerships", to: "/our-partners" },
              { label: "Employers", to: "/employer-agreement" },
              { label: "Professional bodies", to: "/our-partners" },
              { label: "Community partners", to: "/our-partners" },
            ]}
          />

          <FooterColumn
            icon={Mail}
            title="Contact Us"
            links={[
              { label: "Contact us", to: "/contact" },
              { label: "Support", to: "/support" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-kbc-gold-500/15 text-kbc-gold-400"><Crown size={22} aria-hidden="true" /></span>
            <div>
              <p className="font-heading text-base font-semibold text-white">Built for impact</p>
              <p className="mt-1 max-w-xs text-xs leading-relaxed text-white/55">We combine academic excellence with real-world experience to deliver education that drives meaningful outcomes.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-8">
            <Stat value="15+" label="Years of excellence" />
            <Stat value="10,000+" label="Professionals trained" />
            <Stat value="500+" label="Employers partnered" />
          </div>
          <Link to="/about" className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-kbc-gold-400 hover:text-kbc-gold-300">View our impact <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-5 text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>Kent Business College Ltd · Company No. 10367575 · UKPRN 10093689</span>
          <span>© 2026 Kent Business College. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
