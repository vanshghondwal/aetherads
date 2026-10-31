import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface WordsPullUpProps {
  text: string;
  className?: string;
  delay?: number;
  wordClassName?: string;
}

export const WordsPullUp: React.FC<WordsPullUpProps> = ({
  text,
  className = '',
  delay = 0,
  wordClassName = ''
}) => {
  const ref = useRef<HTMLHeadingElement | HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const words = text.split(' ');

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden pr-[0.08em] mr-[0.25em] last:mr-0 align-bottom">
          <motion.span
            className={`inline-block ${wordClassName}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + index * 0.08,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};
export default WordsPullUp;
