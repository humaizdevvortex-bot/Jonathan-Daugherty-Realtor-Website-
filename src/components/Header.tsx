import { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { AGENT_INFO } from '../data/agentData';
import { Logo } from './Logo';

interface HeaderProps {
  onContactClick: () => void;
}

export function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Properties', href: '#properties' },
    { label: 'Sold Homes', href: '#sold-homes' },
    { label: 'Services', href: '#services' },
    { label: 'Communities', href: '#communities' },
    { label: 'Reviews', href: '#reviews' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-full px-5 py-3 sm:px-7 sm:py-3.5 transition-all duration-300 flex items-center justify-between gap-6 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-black/5 border border-[#E7E3DC]'
            : 'bg-white/90 backdrop-blur-sm border border-[#E7E3DC]/70 shadow-sm'
        }`}
      >
        {/* Brand Zone: Bespoke Logo Emblem and Wordmark */}
        <a
          href="#"
          className="focus-visible:outline-2 focus-visible:outline-[#A77B43] rounded-lg group"
          aria-label="Jonathan Daugherty Realtor"
        >
          <Logo size="sm" variant="dark" />
        </a>

        {/* Navigation Links: Clean unboxed typography */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs tracking-wider uppercase font-semibold text-[#545454] hover:text-[#242424] transition-colors relative py-1 focus-visible:outline-2 focus-visible:outline-[#A77B43]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={AGENT_INFO.phoneRaw}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#545454] hover:text-[#A77B43] transition-colors px-2 py-1.5 focus-visible:outline-2 focus-visible:outline-[#A77B43]"
            title="Call Jonathan directly"
          >
            <Phone className="w-3.5 h-3.5 text-[#A77B43]" />
            <span className="tabular-nums">{AGENT_INFO.phone}</span>
          </a>
          <button
            onClick={onContactClick}
            className="px-4 py-2 bg-[#A77B43] hover:bg-[#825B2E] text-white text-xs font-semibold tracking-wide uppercase rounded-full transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A77B43]"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={AGENT_INFO.phoneRaw}
            className="p-2 rounded-full text-[#A77B43] hover:bg-neutral-100 transition-colors"
            aria-label="Call Jonathan"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-[#242424] hover:bg-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#A77B43]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 max-w-6xl mx-auto bg-white rounded-2xl p-5 shadow-xl border border-[#E7E3DC] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-semibold text-[#242424] hover:bg-[#EFEEE9] rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#747474]" />
              </a>
            ))}
            <div className="pt-3 border-t border-[#E7E3DC] flex flex-col gap-2.5">
              <a
                href={AGENT_INFO.phoneRaw}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-[#242424] bg-[#EFEEE9] rounded-xl"
              >
                <Phone className="w-3.5 h-3.5 text-[#A77B43]" />
                <span>Call {AGENT_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-2.5 bg-[#A77B43] text-white text-xs font-semibold uppercase tracking-wider rounded-xl text-center shadow-sm"
              >
                Contact Jonathan
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
