import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  scrollYProgress: MotionValue<number>;
  reducedMotion?: boolean;
}

export const AnimatedLetter: React.FC<AnimatedLetterProps> = ({
  char,
  index,
  totalChars,
  scrollYProgress,
  reducedMotion = false
}) => {
  if (reducedMotion) {
    return <span>{char}</span>;
  }

  const charProgress = totalChars > 0 ? index / totalChars : 0;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);

  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block transition-colors duration-75">
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
};
export default AnimatedLetter;
