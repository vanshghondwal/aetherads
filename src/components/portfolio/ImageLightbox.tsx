import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { StillItem } from '../../data/portfolioData';

interface ImageLightboxProps {
  stills: StillItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  stills,
  currentIndex,
  onClose,
  onNext,
  onPrev
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (currentIndex === null || !stills[currentIndex]) return null;

  const still = stills[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl h-full max-h-[92vh] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-gray-400 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-primary font-bold">{still.index} / {String(stills.length).padStart(3, '0')}</span>
            <span className="text-white/20">|</span>
            <span className="text-typo-main uppercase tracking-wide">{still.title}</span>
            <span className="hidden sm:inline text-primary/60">• {still.category}</span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 hover:bg-white/10 transition-colors"
            aria-label="Close image lightbox"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Center Image with Navigation Buttons */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden py-4">
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 z-10 w-11 h-11 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all"
            aria-label="Previous artwork"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <img
            src={still.src}
            alt={still.title}
            className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-2xl transition-all duration-300"
          />

          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 z-10 w-11 h-11 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all"
            aria-label="Next artwork"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Information Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-400 gap-2 border-t border-white/10">
          <span className="font-light text-gray-300">{still.description}</span>
          <span className="text-[11px] text-primary/70">USE ← → ARROW KEYS TO NAVIGATE</span>
        </div>
      </div>
    </div>
  );
};
export default ImageLightbox;
