import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Smooth progress counter simulation with rapid initial rise
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoaded(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        // Accelerate smoothly
        const diff = 100 - prev;
        const step = Math.max(1, Math.floor(diff * 0.12));
        return Math.min(100, prev + step);
      });
    }, 40);

    // Also listen to document ready state
    const handleLoad = () => {
      setPercent(100);
    };

    if (document.readyState === 'complete') {
      // document already loaded
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleLoad);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex flex-col justify-between p-6 sm:p-10 md:p-16 select-none pointer-events-auto"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs font-mono tracking-widest text-primary/70 uppercase">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>AETHER ADS</span>
            </span>
            <span>CREATIVE STUDIO</span>
          </div>

          {/* Center Brand & Progress */}
          <div className="flex flex-col items-center justify-center text-center my-auto">
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight uppercase text-typo-main mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              AETHER ADS
            </motion.h1>

            <motion.p
              className="font-serif italic text-lg sm:text-2xl text-primary/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Ads that make people stop.
            </motion.p>

            {/* Progress Counter & Line */}
            <div className="w-48 sm:w-64 max-w-full flex flex-col items-center gap-3">
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-primary"
                  style={{ width: `${percent}%` }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                />
              </div>

              <div className="w-full flex items-center justify-between font-mono text-[11px] text-gray-400 tracking-widest">
                <span>LOADING</span>
                <span className="text-primary font-bold">{String(percent).padStart(3, '0')}%</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest">
            <span>AI COMMERCIAL PRODUCTION</span>
            <span>2026 EDITION</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Preloader;
