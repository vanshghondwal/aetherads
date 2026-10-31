import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { StillItem } from '../../data/portfolioData';

interface PortfolioImageProps {
  still: StillItem;
  onSelect: () => void;
  className?: string;
}

export const PortfolioImage: React.FC<PortfolioImageProps> = ({ still, onSelect, className = '' }) => {
  return (
    <motion.div
      className={`group relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#111111] border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-black/80 ${className}`}
      onClick={onSelect}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Full-Bleed Artwork Container with Cinematic Framing */}
      <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden bg-black">
        <img
          src={still.src}
          alt={still.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.92] group-hover:brightness-100"
        />

        {/* Ambient Dark Gradient for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 font-mono text-[10px] tracking-widest uppercase">
          <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-primary">
            {still.index}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-gray-300">
            {still.category}
          </span>
        </div>

        {/* Bottom Editorial Caption (Always Crisp and Clean) */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 flex items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] tracking-widest text-primary/80 uppercase block mb-1">
              {still.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-typo-main uppercase leading-snug">
              {still.title}
            </h3>
          </div>

          <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black group-hover:scale-110 transition-all duration-300 flex-shrink-0">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default PortfolioImage;
