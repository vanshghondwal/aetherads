import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { FilmItem } from '../../data/portfolioData';

interface PortfolioVideoProps {
  film: FilmItem;
  onSelect: (film: FilmItem) => void;
  className?: string;
}

export const PortfolioVideo: React.FC<PortfolioVideoProps> = ({ film, onSelect, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.preload = 'auto';
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      className={`group relative bg-[#111111] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-black/80 ${className}`}
      onClick={() => onSelect(film)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.98, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`w-full overflow-hidden relative bg-black ${film.aspectClass || 'aspect-video'}`}>
        <video
          ref={videoRef}
          src={film.src}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.92] group-hover:brightness-100"
        />
        
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-widest uppercase z-10">
          <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-primary">
            {film.index}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-gray-300">
            {film.category}
          </span>
        </div>

        {/* Center Play Icon Badge */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center text-primary transform group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-xl">
            <Play className="w-6 h-6 ml-0.5 fill-current" />
          </div>
        </div>

        {/* Bottom Floating Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 flex flex-col justify-end">
          <div className="font-mono text-[10px] tracking-widest text-primary/80 uppercase mb-1">
            {film.category}
          </div>
          <div className="flex items-end justify-between gap-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-typo-main uppercase">
              {film.title}
            </h3>
            <span className="font-mono text-[10px] tracking-widest uppercase text-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
              VIEW FILM ↗
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 mt-2 font-light leading-relaxed max-w-2xl line-clamp-2">
            {film.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default PortfolioVideo;
