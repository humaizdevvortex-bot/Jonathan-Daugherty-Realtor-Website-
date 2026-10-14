import { Phone, Mail, MapPin, ArrowUp, Instagram, Linkedin, Home, ExternalLink } from 'lucide-react';
import { AGENT_INFO } from '../data/agentData';
import { Logo } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#202020] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
          {/* Brand & Brokerage (col-span-4) */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <Logo size="md" variant="light" />
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed mb-4 max-w-sm">
              Providing premier residential real estate advisory across Jacksonville, St. Johns County, Mandarin, Riverside, and Northeast Florida coastal communities with 19 years of verified performance.
            </p>

            <div className="text-[11px] text-neutral-500 font-medium">
              FL Real Estate License: <span className="text-neutral-300">{AGENT_INFO.license}</span>
            </div>
          </div>

          {/* Navigation Links (col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Jonathan</a>
              </li>
              <li>
                <a href="#properties" className="hover:text-white transition-colors">Featured Listings</a>
              </li>
              <li>
                <a href="#sold-homes" className="hover:text-white transition-colors">Verified Sold Homes</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Buyer & Seller Services</a>
              </li>
              <li>
                <a href="#communities" className="hover:text-white transition-colors">Neighborhoods</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Client Reviews</a>
              </li>
            </ul>
          </div>

          {/* Contact Details (col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A77B43] shrink-0" />
                <a href={AGENT_INFO.phoneRaw} className="hover:text-white transition-colors tabular-nums">
                  {AGENT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A77B43] shrink-0" />
                <a href={`mailto:${AGENT_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {AGENT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A77B43] shrink-0 mt-0.5" />
                <span>{AGENT_INFO.officeAddress}</span>
              </li>
            </ul>
          </div>

          {/* Connect & Verified Badges (col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4">
              Verified Profiles
            </h4>
            <div className="flex flex-col gap-2 mb-4">
              <a
                href={AGENT_INFO.social.zillow}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-xs text-neutral-300 hover:text-white transition-colors flex items-center justify-between border border-neutral-700/50"
              >
                <span className="flex items-center gap-2">
                  <Home className="w-3.5 h-3.5 text-[#A77B43]" />
                  <span>Zillow Agent Profile</span>
                </span>
                <span className="text-[11px] text-[#A77B43] font-bold">5.0 ★ (148)</span>
              </a>

              <a
                href={AGENT_INFO.social.homes}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-xs text-neutral-300 hover:text-white transition-colors flex items-center justify-between border border-neutral-700/50"
              >
                <span className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#A77B43]" />
                  <span>Homes.com Profile</span>
                </span>
                <span className="text-[11px] text-neutral-400">Verified</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={AGENT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={AGENT_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="ml-auto p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs"
                title="Scroll to top"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Disclaimers Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {currentYear} Jonathan Daugherty · Future Home Realty. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-neutral-400">
            <span>Equal Housing Opportunity</span>
            <span>·</span>
            <span>Florida Licensed Real Estate Professional</span>
            <span>·</span>
            <span>Jacksonville, FL</span>
          </div>
        </div>

        <div className="mt-4 text-[10px] text-neutral-600 leading-normal">
          Information provided on this site is believed to be accurate but is not guaranteed. Property listings, pricing, and availability are subject to change, prior sale, or withdrawal without notice. Buyer representation provided under Florida legal standards.
        </div>
      </div>
    </footer>
  );
}
