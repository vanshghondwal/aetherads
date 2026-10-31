import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, Phone, Mail, Sparkles } from 'lucide-react';
import { STUDIO_CONFIG } from '../../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'FILMS', href: '#films' },
    { label: 'STILLS', href: '#portfolio' },
    { label: 'STUDIO', href: '#about' },
    { label: 'PACKAGES', href: '#packages', badge: 'CUSTOM' },
    { label: 'STANDARDS', href: '#standards' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <>
      {/* Floating Island Navigation Dock */}
      <header
        className={`fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-[94%] max-w-5xl transition-all duration-300 ease-out`}
      >
        <nav
          className={`relative w-full rounded-full border transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
            isScrolled
              ? 'bg-black/85 backdrop-blur-2xl border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.85)]'
              : 'bg-black/60 backdrop-blur-xl border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
          }`}
        >
          {/* Brand Logo / Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-2 group flex-shrink-0"
            aria-label="Aether Ads Home"
          >
            <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
              <span className="font-mono text-xs font-bold">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-typo-main group-hover:text-primary transition-colors">
                AETHER<span className="text-primary font-normal">.ADS</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-mono text-[11px] tracking-widest text-typo-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 text-gray-300 hover:text-primary transition-colors flex items-center gap-1.5 group"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-primary/15 text-primary border border-primary/30 tracking-tight font-sans">
                    {link.badge}
                  </span>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right Action: CTA Button + Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-primary hover:bg-[#ebe9d7] text-black font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md shadow-primary/10"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-white/20 flex items-center justify-center text-primary transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Luxury Cinematic Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-20 z-40 bg-black/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl lg:hidden flex flex-col justify-between max-w-lg mx-auto"
          >
            <div className="flex flex-col space-y-4 mb-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  STUDIO DIRECTORY
                </span>
                <span className="font-mono text-[10px] text-gray-500 uppercase">
                  {STUDIO_CONFIG.name}
                </span>
              </div>

              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-typo-main hover:text-primary transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-gray-500 group-hover:text-primary">
                      0{idx + 1}
                    </span>
                    <span className="text-xl font-medium uppercase tracking-tight">
                      {link.label}
                    </span>
                  </div>
                  {link.badge ? (
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {link.badge}
                    </span>
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-primary transition-colors" />
                  )}
                </a>
              ))}
            </div>

            {/* Mobile Drawer Bottom Contacts */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full bg-primary text-black font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-2">
                <a
                  href={`tel:${STUDIO_CONFIG.phone}`}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2 text-gray-300 hover:text-primary"
                >
                  <Phone className="w-3 h-3 text-primary flex-shrink-0" />
                  <span className="truncate">{STUDIO_CONFIG.phone}</span>
                </a>
                <a
                  href={`mailto:${STUDIO_CONFIG.email}`}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2 text-gray-300 hover:text-primary"
                >
                  <Mail className="w-3 h-3 text-primary flex-shrink-0" />
                  <span className="truncate">Email Us</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;