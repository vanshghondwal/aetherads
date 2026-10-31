import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export interface TextSegment {
  text: string;
  isSerifItalic?: boolean;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  className?: string;
  delay?: number;
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({
  segments,
  className = '',
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  let globalWordIndex = 0;

  return (
    <div ref={ref} className={`leading-[0.95] ${className}`}>
      {segments.map((segment, segIdx) => {
        const words = segment.text.split(' ');
        const isItalic = segment.isSerifItalic;

        return (
          <span
            key={segIdx}
            className={`inline-block mr-[0.25em] last:mr-0 ${
              isItalic ? 'font-serif italic font-normal text-primary' : ''
            } ${segment.className || ''}`}
          >
            {words.map((word, wIdx) => {
              const currentDelay = delay + globalWordIndex * 0.08;
              globalWordIndex++;

              return (
                <span key={wIdx} className="inline-block overflow-hidden mr-[0.22em] last:mr-0 align-baseline">
                  <motion.span
                    className="inline-block"
                    initial={{ y: 24, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
                    transition={{
                      duration: 0.75,
                      delay: currentDelay,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
};
export default WordsPullUpMultiStyle;
