import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Check, 
  Sliders, 
  Layers, 
  Film, 
  Image as ImageIcon, 
  ArrowRight, 
  Clapperboard, 
  Box, 
  Flame, 
  Palette,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { SectionLabel } from '../common/SectionLabel';
import { WordsPullUpMultiStyle } from '../common/WordsPullUpMultiStyle';

interface PackagesSectionProps {
  onSelectPackage?: (summaryText: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  // Custom Package Builder State
  const [imageCount, setImageCount] = useState<number>(5);
  const [videoCount, setVideoCount] = useState<number>(3);
  const [videoFormat, setVideoFormat] = useState<'short' | 'long' | 'both'>('short');
  const [creativeStyle, setCreativeStyle] = useState<'cinematic' | 'anime' | '3d' | '2d'>('cinematic');

  const formatLabels: Record<string, string> = {
    short: 'Short-Form (9:16 Reels / TikTok / Shorts)',
    long: 'Long-Form (16:9 Widescreen / Commercials)',
    both: 'Multi-Ratio Mix (Vertical + Landscape)'
  };

  const styleLabels: Record<string, string> = {
    cinematic: 'Cinematic Hyper-Realistic',
    anime: 'Anime & Stylized Motion',
    '3d': '3D CGI & Product VFX',
    '2d': '2D Motion Graphics & Vector'
  };

  const handleMonthlySelect = () => {
    const text = `Hi Aether Ads, I am interested in your Monthly Creative Retainer (10 Static Image Ads + 5 Video Ads). Please share pricing and details for our brand.`;
    if (onSelectPackage) {
      onSelectPackage(text);
    } else {
      const contact = document.getElementById('contact');
      contact?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCustomSelect = () => {
    const text = `Hi Aether Ads, I would like to request a custom quote for a bespoke package:\n• Image Ads: ${imageCount}\n• Video Ads: ${videoCount}\n• Video Format: ${formatLabels[videoFormat]}\n• Visual Style: ${styleLabels[creativeStyle]}\n\nPlease let me know the quote and timeline.`;
    if (onSelectPackage) {
      onSelectPackage(text);
    } else {
      const contact = document.getElementById('contact');
      contact?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const styleCards = [
    {
      id: 'cinematic',
      title: 'Cinematic Photoreal',
      icon: Film,
      desc: 'Hollywood-grade lighting, macro product textures, luxury atmosphere, and fluid organic motion.',
      badge: 'High Conversion'
    },
    {
      id: 'anime',
      title: 'Anime & Stylized',
      icon: Flame,
      desc: 'Vibrant cel-shaded aesthetics, dynamic Japanese anime action, and high-energy viral storytelling.',
      badge: 'Gen-Z Trending'
    },
    {
      id: '3d',
      title: '3D CGI & Product VFX',
      icon: Box,
      desc: 'Impossible physics, floating exploded views, fluid simulations, and futuristic product rendering.',
      badge: 'Zero 3D Shoot Cost'
    },
    {
      id: '2d',
      title: '2D Motion & Kinetic',
      icon: Palette,
      desc: 'Bold typography-led motion, high-contrast poster aesthetics, and sharp animated vectors.',
      badge: 'Clean & Punchy'
    }
  ];

  return (
    <section id="packages" className="py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-black relative border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/[0.03] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <SectionLabel text="ENGAGEMENT MODELS // PRODUCTION PACKAGES" />
          
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight uppercase leading-[0.9] mt-3">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Affordable ads.', className: 'text-primary' },
                { text: 'Zero limits.', className: 'text-gray-500' }
              ]}
            />
          </div>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 font-light max-w-2xl mt-6">
            We deliver world-class advertising visuals across <span className="text-primary font-medium">Cinematic, Anime, 3D CGI, and 2D styles</span> at radically affordable studio rates. No bloated agency overheads—just pure creative output.
          </p>
        </div>

        {/* Creative Visual Styles Range */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary/80">
              Creative Range & Visual Aesthetics
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {styleCards.map((style, idx) => {
              const IconComp = style.icon;
              return (
                <motion.div
                  key={style.id}
                  className="rounded-2xl p-6 bg-surface-card border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/[0.04] rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/50 transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5">
                        {style.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-medium text-typo-main uppercase tracking-tight mb-2">
                      {style.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      {style.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-primary/70">
                    <span>AI-ACCELERATED</span>
                    <span>100% AFFORDABLE</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Two Production Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 01: Monthly Creative Retainer */}
          <motion.div
            className="lg:col-span-5 rounded-3xl p-8 md:p-10 bg-surface-about border border-primary/30 flex flex-col justify-between relative shadow-2xl overflow-hidden group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Top Glow Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
            
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="font-mono text-[11px] uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/25 font-semibold">
                  MONTHLY RETAINER
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
                  RECURRING PIPELINE
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-typo-main uppercase leading-tight mb-3">
                Full-Throttle Monthly Ad Growth
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-8">
                Designed for ambitious direct-to-consumer & ecommerce brands needing a nonstop stream of high-converting visual ads to eliminate ad fatigue on Meta & TikTok.
              </p>

              {/* Deliverable Highlights */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl font-bold text-typo-main tracking-tight font-mono">10 IMAGE ADS</span>
                    <p className="text-[11px] text-gray-400 font-light">Custom product creatives in 1:1 Feed & 9:16 Story formats</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Clapperboard className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl font-bold text-typo-main tracking-tight font-mono">5 VIDEO ADS</span>
                    <p className="text-[11px] text-gray-400 font-light">Short-form cinematic motion videos with sound design</p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-xs text-gray-300 font-light mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Fresh creative batch delivered every month</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Cinematic, Anime, 3D, or 2D styles on demand</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Rapid 72-hour turnaround on first drafts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>100% full commercial rights & master assets</span>
                </li>
              </ul>
            </div>

            {/* Price Notice & Action */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">INVESTMENT</span>
                  <span className="text-base sm:text-lg font-medium text-primary">Affordable Studio Retainer</span>
                </div>
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-md self-start sm:self-auto">
                  Quote Provided Upon Inquiry
                </span>
              </div>

              <button
                onClick={handleMonthlySelect}
                className="w-full py-4 rounded-full bg-primary text-black font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#eae8d8] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-primary/20"
              >
                <span>Inquire For Monthly Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Card 02: Interactive Build-Your-Own Package */}
          <motion.div
            className="lg:col-span-7 rounded-3xl p-8 md:p-10 bg-surface-card border border-white/15 flex flex-col justify-between relative shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="font-mono text-[11px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-typo-main border border-white/15 font-semibold flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-primary" />
                  <span>BUILD YOUR OWN</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  100% CUSTOMIZABLE
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-typo-main uppercase leading-tight mb-3">
                Custom Deliverables Studio Suite
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-8">
                Need a specific count for an upcoming product launch? Configure your ideal balance of static image creatives, short or long-form videos, and preferred visual aesthetics.
              </p>

              {/* Interactive Selectors */}
              <div className="space-y-6 mb-8">
                
                {/* 1. Image Ads Count */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-gray-300 flex items-center gap-2">
                      <ImageIcon className="w-3.5 h-3.5 text-primary" />
                      <span>Static Product Image Ads</span>
                    </label>
                    <span className="font-mono text-sm font-bold text-primary">
                      {imageCount} {imageCount === 1 ? 'Ad' : 'Ads'}
                    </span>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {[0, 3, 5, 10, 15].map((cnt) => (
                      <button
                        key={cnt}
                        type="button"
                        onClick={() => setImageCount(cnt)}
                        className={`py-2 rounded-xl text-xs font-mono transition-all ${
                          imageCount === cnt
                            ? 'bg-primary text-black font-bold shadow-md'
                            : 'bg-black/60 border border-white/10 text-gray-400 hover:border-white/30'
                        }`}
                      >
                        {cnt === 0 ? 'None' : `${cnt}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Video Ads Count */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-gray-300 flex items-center gap-2">
                      <Clapperboard className="w-3.5 h-3.5 text-primary" />
                      <span>Cinematic Video Ads</span>
                    </label>
                    <span className="font-mono text-sm font-bold text-primary">
                      {videoCount} {videoCount === 1 ? 'Video' : 'Videos'}
                    </span>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {[0, 1, 3, 5, 8].map((cnt) => (
                      <button
                        key={cnt}
                        type="button"
                        onClick={() => setVideoCount(cnt)}
                        className={`py-2 rounded-xl text-xs font-mono transition-all ${
                          videoCount === cnt
                            ? 'bg-primary text-black font-bold shadow-md'
                            : 'bg-black/60 border border-white/10 text-gray-400 hover:border-white/30'
                        }`}
                      >
                        {cnt === 0 ? 'None' : `${cnt}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Video Format / Duration */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-gray-300 mb-2">
                    Video Format & Aspect Ratio
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'short', label: 'Short-Form (9:16)', sub: 'Reels / Shorts' },
                      { id: 'long', label: 'Long-Form (16:9)', sub: 'Commercials / TVC' },
                      { id: 'both', label: 'Both / Mixed', sub: 'Omnichannel Kit' }
                    ].map((fmt) => (
                      <button
                        key={fmt.id}
                        type="button"
                        onClick={() => setVideoFormat(fmt.id as 'short' | 'long' | 'both')}
                        className={`p-3 rounded-xl text-left font-mono transition-all border ${
                          videoFormat === fmt.id
                            ? 'bg-primary/10 border-primary text-primary'
                            : 'bg-black/60 border-white/10 text-gray-400 hover:border-white/25'
                        }`}
                      >
                        <div className="text-xs font-bold">{fmt.label}</div>
                        <div className="text-[10px] text-gray-500 font-sans mt-0.5">{fmt.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Creative Style */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-gray-300 mb-2">
                    Primary Creative Style
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'cinematic', label: 'Cinematic' },
                      { id: 'anime', label: 'Anime Style' },
                      { id: '3d', label: '3D CGI VFX' },
                      { id: '2d', label: '2D Motion' }
                    ].map((sty) => (
                      <button
                        key={sty.id}
                        type="button"
                        onClick={() => setCreativeStyle(sty.id as 'cinematic' | 'anime' | '3d' | '2d')}
                        className={`py-2 px-3 rounded-xl text-center font-mono text-xs transition-all border ${
                          creativeStyle === sty.id
                            ? 'bg-primary/15 border-primary text-primary font-bold'
                            : 'bg-black/60 border-white/10 text-gray-400 hover:border-white/25'
                        }`}
                      >
                        {sty.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Live Configuration Pill */}
              <div className="p-4 rounded-2xl bg-black/80 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs mb-8">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-mono text-gray-400 uppercase">Selected Configuration:</span>
                </div>
                <div className="font-mono text-primary font-medium text-right sm:text-left">
                  {imageCount} Images + {videoCount} Videos ({styleLabels[creativeStyle]})
                </div>
              </div>
            </div>

            {/* Price Notice & Action */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">PRICING METHOD</span>
                  <span className="text-base sm:text-lg font-medium text-primary">Custom Quote on Inquiry</span>
                </div>
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-md self-start sm:self-auto">
                  Zero Obligation Quote
                </span>
              </div>

              <button
                onClick={handleCustomSelect}
                className="w-full py-4 rounded-full bg-white/10 hover:bg-primary text-typo-main hover:text-black font-mono text-xs uppercase tracking-widest font-semibold transition-all border border-white/20 hover:border-primary flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom Pricing For This Build</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Bottom Affordable AI Assurance */}
        <div className="mt-12 p-6 rounded-2xl bg-[#121212] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-gray-300 font-light">
              <strong className="text-typo-main font-semibold">Radically Affordable Pricing:</strong> We use state-of-the-art AI generation pipelines to achieve high-end studio visuals without the traditional ₹5,00,000+ camera crew and studio rental costs.
            </span>
          </div>

          <a
            href="#contact"
            className="font-mono text-xs text-primary hover:underline underline-offset-4 flex-shrink-0 uppercase tracking-wider"
          >
            Direct Inquiries: +91 8595216037
          </a>
        </div>

      </div>
    </section>
  );
};
export default PackagesSection;