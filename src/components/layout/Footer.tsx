import { Link } from "react-router-dom";
import { footerLinkGroups } from "@/mocks/data";

export default function Footer() {
  return (
    <footer className="bg-kbc-dark-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-kbc-gold-500 rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-kbc-purple-900 text-lg leading-none">
                  KBC
                </span>
              </div>
              <div>
                <span className="font-heading font-semibold text-white text-base leading-tight block">
                  Kent Business
                </span>
                <span className="font-heading font-semibold text-kbc-gold-400 text-sm leading-tight block">
                  College
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-4 max-w-xs">
              Turning teams into chartered professionals through fully funded
              apprenticeships and qualifications.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-kbc-gold-500 hover:text-kbc-dark-900 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-kbc-gold-500 hover:text-kbc-dark-900 transition-colors"
                aria-label="Twitter"
              >
                <i className="ri-twitter-x-fill" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-kbc-gold-500 hover:text-kbc-dark-900 transition-colors"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-kbc-gold-500 hover:text-kbc-dark-900 transition-colors"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading font-semibold text-sm text-kbc-gold-400 mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/70 hover:text-kbc-gold-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-white/70 hover:text-kbc-gold-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-semibold text-base text-white mb-1">
                Subscribe to our newsletter
              </h3>
              <p className="text-sm text-white/60">
                Get the latest news, events, and programme updates.
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-2" data-readdy-form onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-kbc-gold-500"
                required
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-kbc-gold-500 text-kbc-dark-900 text-sm font-semibold rounded-lg hover:bg-kbc-gold-400 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <p>
              &copy; {new Date().getFullYear()} Kent Business College. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-white/70 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white/70 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-white/70 transition-colors">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}