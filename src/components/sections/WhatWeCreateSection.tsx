import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import { WordsPullUpMultiStyle } from '../common/WordsPullUpMultiStyle';
import { SectionLabel } from '../common/SectionLabel';

export const WhatWeCreateSection: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-black relative border-t border-white/[0.06] overflow-hidden">
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <SectionLabel text="SERVICES // PRODUCTION CAPABILITIES" />
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight uppercase leading-[0.9]">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Made for brands.', className: 'text-primary' },
                { text: 'Built for attention.', className: 'text-gray-500' }
              ]}
            />
          </div>
        </div>

        {/* Prisma 4-Column Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-3 md:gap-2">
          
          {/* Card 01 — Cinematic Video (Full Background Video) */}
          <motion.div
            className="relative rounded-2xl overflow-hidden h-[420px] lg:h-[480px] bg-black border border-white/10 flex flex-col justify-between p-6 group"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/portfolio/agency/photos/A Little Chocolate, Brighter Day.png"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] group-hover:scale-105 transition-transform duration-700"
            >
              <source src="/portfolio/agency/videos/Transform_storyboard_into_video_20261027153937.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

            <div className="relative z-10 font-mono text-[10px] tracking-widest text-primary uppercase">
              VIDEO PRODUCTION
            </div>

            <div className="relative z-10">
              <span className="font-serif italic text-3xl sm:text-4xl text-primary block leading-none mb-2">
                Stories in motion.
              </span>
              <p className="text-xs text-gray-300 font-light">
                Sensory commercial films tailored for high-engagement feeds.
              </p>
            </div>
          </motion.div>

          {/* Card 02 — Product Advertising */}
          <motion.div
            className="rounded-2xl h-[420px] lg:h-[480px] bg-surface-card border border-white/10 flex flex-col justify-between p-6 hover:border-white/20 transition-colors"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-gray-400 uppercase mb-4">
                <span>01</span>
                <span className="text-primary">STILLS</span>
              </div>

              {/* Real Thumbnail */}
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-black/60 border border-white/10 mb-4 p-1">
                <img
                  src="/portfolio/agency/photos/Portronics Vader Pro Gaming Mouse Ad.png"
                  alt="Product thumbnail"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-2xl font-medium tracking-tight text-typo-main uppercase mb-4">
                Product Creatives.
              </h3>

              <ul className="space-y-2.5 text-xs text-gray-400 font-light">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>Product-focused compositions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>Social-first visual formats</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>Campaign-ready artwork</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>Consistent creative direction</span>
                </li>
              </ul>
            </div>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-white transition-colors pt-4 border-t border-white/10"
            >
              <span>Explore Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Card 03 — AI Video Production */}
          <motion.div
            className="rounded-2xl h-[420px] lg:h-[480px] bg-surface-card border border-white/10 flex flex-col justify-between p-6 hover:border-white/20 transition-colors"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-gray-400 uppercase mb-4">
                <span>02</span>
                <span className="text-primary">MOTION</span>
              </div>

              <div className="w-16 h-16 rounded-xl overflow-hidden bg-black/60 border border-white/10 mb-4 p-1">
                <img
                  src="/portfolio/agency/photos/Minimalist Vitamin C Serum Glow.png"
                  alt="Motion thumbnail"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-2xl font-medium tracking-tight text-typo-main uppercase mb-4">
                Cinematic Ads.
              </h3>

              <ul className="space-y-2.5 text-xs text-gray-400 font-light">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>Short-form ad storytelling</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>Product-led scenes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>Lifestyle creative concepts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>Video-ready campaign assets</span>
                </li>
              </ul>
            </div>

            <a
              href="#films"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-white transition-colors pt-4 border-t border-white/10"
            >
              <span>Explore Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Card 04 — Campaign Creative Direction */}
          <motion.div
            className="rounded-2xl h-[420px] lg:h-[480px] bg-surface-card border border-white/10 flex flex-col justify-between p-6 hover:border-white/20 transition-colors"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-gray-400 uppercase mb-4">
                <span>03</span>
                <span className="text-primary">DIRECTION</span>
              </div>

              <div className="w-16 h-16 rounded-xl overflow-hidden bg-black/60 border border-white/10 mb-4 p-1">
                <img
                  src="/portfolio/agency/photos/More Than a Watch_ Premium SYLVI Timepiece.png"
                  alt="Direction thumbnail"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-2xl font-medium tracking-tight text-typo-main uppercase mb-4">
                Creative Direction.
              </h3>

              <ul className="space-y-2.5 text-xs text-gray-400 font-light">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>Concept development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>Visual art direction</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>Cohesive campaign styling</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>Multi-format deliverables</span>
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-white transition-colors pt-4 border-t border-white/10"
            >
              <span>Discuss Campaign</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default WhatWeCreateSection;
