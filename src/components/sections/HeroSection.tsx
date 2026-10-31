import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Menu, X } from 'lucide-react';
import { WordsPullUp } from '../common/WordsPullUp';
import { PrimaryButton } from '../common/PrimaryButton';
import { STUDIO_CONFIG } from '../../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section id="hero" className="w-full h-screen p-3 sm:p-4 md:p-6 bg-black relative select-none">
      {/* Prisma Inset Rounded Container */}
      <div className="w-full h-full relative rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-12 border border-white/[0.08]">
        
        {/* Background Cinematic Video (Requested Video: 3f467cc01908c12bda49d6d10deb1a32_720w.mp4) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/portfolio/agency/photos/Minimalist Vitamin C Serum Glow.png"
            className="w-full h-full object-cover object-center filter brightness-[0.52] contrast-[1.08]"
          >
            <source src="/portfolio/agency/videos/3f467cc01908c12bda49d6d10deb1a32_720w.mp4" type="video/mp4" />
          </video>
          
          {/* Overlays: 1. Film grain, 2. Dark vignette gradient */}
          <div className="absolute inset-0 noise-overlay opacity-70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none" />
        </div>

        {/* PRISMA HANGING BLACK NAVBAR CAPSULE */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-5 py-2.5 md:px-8 md:py-3 border-x border-b border-white/15 flex items-center gap-6 md:gap-8 shadow-2xl">
            <div className="hidden sm:flex items-center gap-6 md:gap-8 text-xs font-mono tracking-widest text-typo-nav">
              <a href="#films" className="hover:text-primary transition-colors">WORK</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">PORTFOLIO</a>
              <a href="#about" className="hover:text-primary transition-colors">STUDIO</a>
              <a href="#services" className="hover:text-primary transition-colors">SERVICES</a>
              <a href="#contact" className="hover:text-primary transition-colors">CONTACT</a>
            </div>

            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden text-primary flex items-center gap-2 font-mono text-xs"
              aria-label="Toggle menu"
            >
              <span>MENU</span>
              {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </button>
          </nav>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-4 right-4 z-40 bg-black/95 backdrop-blur-xl border border-white/15 rounded-2xl p-6 sm:hidden flex flex-col gap-4 font-mono text-xs tracking-wider">
            <a href="#films" onClick={() => setMobileMenuOpen(false)} className="text-typo-main hover:text-primary py-2 border-b border-white/10">01 // SELECTED WORK</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-typo-main hover:text-primary py-2 border-b border-white/10">02 // STILL FRAMES</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-typo-main hover:text-primary py-2 border-b border-white/10">03 // ABOUT STUDIO</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-typo-main hover:text-primary py-2 border-b border-white/10">04 // SERVICES</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-primary py-2">05 // CONTACT</a>
          </div>
        )}

        {/* Top Meta Label */}
        <div className="relative z-10 pt-10 sm:pt-12">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs tracking-[0.25em] text-primary/70 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>{STUDIO_CONFIG.subtitle}</span>
          </div>
        </div>

        {/* Main Center/Lower Composition */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto pb-4">
          
          {/* Left 8 Cols: Giant Studio Wordmark with Asterisk - Fluid size so 'R' and '*' are 100% visible */}
          <div className="lg:col-span-8 min-w-0 pr-2">
            <h1 className="text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[10.5vw] 2xl:text-[11vw] font-medium leading-[0.88] tracking-tight text-typo-main uppercase flex items-start whitespace-nowrap">
              <WordsPullUp text={STUDIO_CONFIG.name} delay={0.1} />
              <span className="text-[0.45em] font-light text-primary ml-1 align-top inline-block leading-none">*</span>
            </h1>
          </div>

          {/* Right 4 Cols: Supporting description & CTA */}
          <div className="lg:col-span-4 flex flex-col justify-end gap-6 sm:gap-8 max-w-md pb-2">
            <motion.p
              className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.3] font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              An independent creative studio making product visuals and cinematic ads impossible to scroll past.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <PrimaryButton text="Explore Our Work" href="#films" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar: Small Labels */}
        <div className="relative z-10 w-full flex items-center justify-between pt-6 border-t border-white/10 text-[10px] sm:text-xs font-mono tracking-widest text-primary/60 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            <span className="hidden sm:inline">INDEPENDENT CREATIVE STUDIO / AI-POWERED PRODUCTION</span>
            <span className="sm:hidden">AI CREATIVE STUDIO</span>
          </div>

          <a
            href="#films"
            className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
