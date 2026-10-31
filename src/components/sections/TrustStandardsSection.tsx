import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Layers, Sparkles, Film, CheckCircle } from 'lucide-react';
import { SectionLabel } from '../common/SectionLabel';
import { WordsPullUpMultiStyle } from '../common/WordsPullUpMultiStyle';

export const TrustStandardsSection: React.FC = () => {
  const standards = [
    {
      icon: Clock,
      title: '72-Hour Rapid Delivery',
      desc: 'No waiting 4 to 6 weeks for traditional studio shoots. Receive your initial commercial draft within 48–72 hours.'
    },
    {
      icon: ShieldCheck,
      title: '100% Commercial Rights',
      desc: 'Complete ownership and royalty-free licensing. Use your master creatives across paid ads, social media, and storefronts indefinitely.'
    },
    {
      icon: Layers,
      title: 'Multi-Format Campaign Packaging',
      desc: 'Exported ready-to-run across all acquisition channels in 9:16 Vertical (Reels/TikTok), 1:1 Feed, and 4:5 Story ratios.'
    },
    {
      icon: Film,
      title: '4K Ultra-HD Mastering',
      desc: 'Color-graded and mastered with optical clarity, fluid physical dynamics, and crisp typography that looks razor-sharp on Retina screens.'
    },
    {
      icon: Sparkles,
      title: 'Zero Studio Rental Costs',
      desc: 'No shipping physical products or paying expensive location fees. We synthesize hyper-realistic environments from your packshots.'
    },
    {
      icon: CheckCircle,
      title: 'Structured Revision Protocol',
      desc: 'Dedicated refinement cycle ensuring lighting, brand palettes, and narrative pacing match your vision before sign-off.'
    }
  ];

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-black relative border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <SectionLabel text="WHY BRANDS PARTNER WITH US // PRODUCTION STANDARDS" />
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-typo-main uppercase leading-[0.9]">
              <WordsPullUpMultiStyle
                segments={[
                  { text: 'Crafted for' },
                  { text: 'results.', isSerifItalic: true }
                ]}
              />
            </div>
          </div>

          <div className="max-w-md pb-2">
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
              We eliminate the friction, exorbitant costs, and delays of legacy commercial sets. Here is what every collaboration guarantees:
            </p>
          </div>
        </div>

        {/* 6 Grid Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {standards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                className="p-8 rounded-2xl md:rounded-3xl bg-surface-about border border-white/10 hover:border-white/30 transition-all duration-300 group flex flex-col justify-between"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black border border-white/15 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-typo-main uppercase mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Callout Bar (Traditional Shoot vs Aether Ads) */}
        <motion.div
          className="mt-12 p-6 sm:p-8 rounded-2xl md:rounded-3xl bg-[#141414] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-primary text-black font-semibold uppercase">
              STUDIO ADVANTAGE
            </span>
            <span className="text-gray-300">
              Traditional Ad Shoot: <strong>3–5 Weeks & ₹2,00,000+</strong> vs. AETHER ADS: <strong>72 Hours & 80% Lower Overhead</strong>
            </span>
          </div>

          <a
            href="#contact"
            className="text-xs font-mono uppercase tracking-widest text-primary hover:text-white flex items-center gap-1.5 transition-colors flex-shrink-0"
          >
            <span>Book Your Campaign</span>
            <span>↗</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
export default TrustStandardsSection;
