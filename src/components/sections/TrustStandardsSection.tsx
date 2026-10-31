import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Clock, 
  Layers, 
  Sparkles, 
  Film, 
  CheckCircle, 
  Volume2, 
  Maximize2, 
  Flame, 
  Cpu, 
  Workflow, 
  ArrowRight,
  Check,
  X
} from 'lucide-react';
import { SectionLabel } from '../common/SectionLabel';
import { WordsPullUpMultiStyle } from '../common/WordsPullUpMultiStyle';

export const TrustStandardsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'specs' | 'comparison' | 'workflow'>('specs');

  const standardsCards = [
    {
      icon: Clock,
      stat: '72H',
      statLabel: 'RAPID TURNAROUND',
      title: '72-Hour First Draft Delivery',
      desc: 'No waiting 4 to 6 weeks for physical camera crews. We deliver your initial cinematic ad draft within 48 to 72 hours so you can launch campaigns on schedule.',
      highlight: 'Speed to Market'
    },
    {
      icon: Film,
      stat: '4K',
      statLabel: 'ULTRA-HD MASTERING',
      title: 'Cinematic 4K Resolution & 60 FPS',
      desc: 'Every still frame and video is mastered in native 4K with cinema-grade color grading, sharp typography, and macro product detailing that never blurs on high-DPI displays.',
      highlight: 'Retina-Ready'
    },
    {
      icon: Layers,
      stat: '3x',
      statLabel: 'MULTI-ASPECT RATIOS',
      title: 'Omnichannel Ad Packaging',
      desc: 'Exported ready to run across every ad network: 9:16 Vertical (Reels, TikTok, Shorts), 1:1 Square (Meta/Amazon Feeds), and 16:9 Landscape (Hero & YouTube).',
      highlight: 'Full Coverage'
    },
    {
      icon: Volume2,
      stat: 'ASMR',
      statLabel: 'CUSTOM SOUND DESIGN',
      title: 'Spatial Audio & Sound Design',
      desc: 'Videos include bespoke sound design: atmospheric textures, product foley, satisfying ASMR clicks and fluid swooshes, and commercially licensed background tracks.',
      highlight: 'Sensory Impact'
    },
    {
      icon: ShieldCheck,
      stat: '100%',
      statLabel: 'COMMERCIAL RIGHTS',
      title: 'Complete Commercial Ownership',
      desc: 'You receive 100% unrestricted, royalty-free commercial ownership. Run your ads worldwide across Meta, Google, TikTok, TV, and billboard campaigns without licensing fees.',
      highlight: 'Zero Royalty Fees'
    },
    {
      icon: Cpu,
      stat: '₹0',
      statLabel: 'ZERO SHOOT OVERHEAD',
      title: 'No Shipping or Studio Rentals',
      desc: 'Save ₹2,00,000+ in studio booking, lighting rigs, models, and courier risks. We synthesize hyper-realistic 3D environments straight from your product photos.',
      highlight: '80% Cost Savings'
    }
  ];

  const comparisonRows = [
    {
      feature: 'First Draft Delivery',
      traditional: '3 to 5 Weeks',
      aether: '48 to 72 Hours',
      advantage: true
    },
    {
      feature: 'Production Cost',
      traditional: '₹2,00,000 – ₹5,00,000+',
      aether: 'Radically Affordable Studio Rates',
      advantage: true
    },
    {
      feature: 'Physical Product Shipping',
      traditional: 'Required (Fragile courier risk)',
      aether: 'Zero shipping (Photos/Packshots only)',
      advantage: true
    },
    {
      feature: 'Multi-Ratio Adaptations',
      traditional: 'Extra re-shoot / edit charges',
      aether: 'Included (9:16, 1:1, 16:9)',
      advantage: true
    },
    {
      feature: 'Style Versatility',
      traditional: 'Limited to physical set',
      aether: 'Cinematic, Anime, 3D CGI & 2D',
      advantage: true
    },
    {
      feature: 'Commercial Licensing',
      traditional: 'Complex renewals & talent fees',
      aether: '100% Perpetual Global Rights',
      advantage: true
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Packshot & Asset Ingestion',
      desc: 'You send us product photos, packaging angles, logo files, and brand style guides. No expensive physical courier needed.'
    },
    {
      step: '02',
      title: 'Art Direction & Set Synthesis',
      desc: 'We construct hyper-realistic 3D environments, studio lighting, fluid physics, or anime/editorial stylings matching your target audience.'
    },
    {
      step: '03',
      title: '48–72H First Cut Review',
      desc: 'You receive initial 4K draft renders and stills. We review pacing, text overlays, and brand tonality together.'
    },
    {
      step: '04',
      title: 'Final 4K Master Handover',
      desc: 'Approved creatives are exported in all aspect ratios with sound design, ready to upload directly to your Meta, Google, and TikTok ad managers.'
    }
  ];

  return (
    <section id="standards" className="py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-black relative border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/[0.03] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <SectionLabel text="QUALITY GUARANTEE // PRODUCTION STANDARDS" />
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-typo-main uppercase leading-[0.9] mt-3">
              <WordsPullUpMultiStyle
                segments={[
                  { text: 'Crafted for' },
                  { text: 'perfection.', isSerifItalic: true }
                ]}
              />
            </div>
          </div>

          <div className="max-w-md pb-2">
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
              Every still creative and video ad we craft adheres to strict commercial benchmarks. Here is how we deliver agency-grade output at speed and affordability.
            </p>
          </div>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex items-center gap-2 p-1.5 rounded-full bg-surface-card border border-white/10 w-fit mb-12 max-w-full overflow-x-auto">
          {[
            { id: 'specs', label: '01 // PRODUCTION BENCHMARKS' },
            { id: 'comparison', label: '02 // STUDIO VS TRADITIONAL SHOOT' },
            { id: 'workflow', label: '03 // 4-STEP REVISION PROTOCOL' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'specs' | 'comparison' | 'workflow')}
              className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-primary text-black font-bold shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 01: Production Benchmarks (6 Detailed Cards) */}
        {activeTab === 'specs' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {standardsCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-surface-about border border-white/10 hover:border-primary/40 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-primary/[0.03] rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-black border border-white/15 flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="text-right">
                        <span className="font-mono text-2xl font-bold text-primary block leading-none">
                          {item.stat}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-gray-500">
                          {item.statLabel}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-medium tracking-tight text-typo-main uppercase mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-primary/70">
                    <span className="uppercase">{item.highlight}</span>
                    <span>STANDARDS // VERIFIED</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* TAB 02: Comparison Table (Aether Ads vs Traditional Shoots) */}
        {activeTab === 'comparison' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-surface-about border border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="p-6 sm:p-8 border-b border-white/10 bg-surface-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary block mb-1">
                  OBJECTIVE COMPARISON
                </span>
                <h4 className="text-2xl font-medium text-typo-main uppercase tracking-tight">
                  Why Modern Brands Choose AI Production
                </h4>
              </div>
              <span className="text-xs font-mono text-gray-400 bg-black/60 px-3 py-1.5 rounded-full border border-white/10">
                100% Commercial Advantage
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm font-light">
                <thead>
                  <tr className="border-b border-white/10 font-mono text-xs uppercase tracking-wider text-gray-400 bg-black/40">
                    <th className="py-4 px-6">Deliverable Criteria</th>
                    <th className="py-4 px-6 text-gray-500">Traditional Agency Shoot</th>
                    <th className="py-4 px-6 text-primary font-bold bg-primary/5">AETHER ADS Studio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-medium text-typo-main font-mono text-xs">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-gray-400 flex items-center gap-2">
                        <X className="w-4 h-4 text-red-400/80 flex-shrink-0" />
                        <span>{row.traditional}</span>
                      </td>
                      <td className="py-4 px-6 text-primary bg-primary/[0.02] font-medium">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{row.aether}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-black/60 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
              <span className="text-gray-400">
                Ready to skip expensive shoot delays and launch next week?
              </span>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-primary text-black font-semibold uppercase hover:bg-white transition-all flex items-center gap-1.5"
              >
                <span>Start Your Campaign</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}

        {/* TAB 03: 4-Step Production Workflow */}
        {activeTab === 'workflow' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-surface-about border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black border border-white/15 flex items-center justify-center font-mono text-primary text-lg font-bold mb-6">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-medium text-typo-main uppercase tracking-tight mb-3">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 font-mono text-[10px] text-primary/70 uppercase">
                  Phase 0{idx + 1} // Guaranteed
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl md:rounded-3xl bg-[#141414] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono">
            <span className="px-3.5 py-1 rounded-full bg-primary text-black font-bold uppercase tracking-wider">
              ZERO RISK GUARANTEE
            </span>
            <span className="text-gray-300">
              Structured revisions included with every engagement until visual alignment is achieved.
            </span>
          </div>

          <a
            href="#contact"
            className="text-xs font-mono uppercase tracking-widest text-primary hover:text-white flex items-center gap-2 transition-colors flex-shrink-0"
          >
            <span>Inquire Directly: +91 8595216037</span>
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};
export default TrustStandardsSection;