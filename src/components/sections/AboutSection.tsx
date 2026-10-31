import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { SectionLabel } from '../common/SectionLabel';
import { WordsPullUpMultiStyle } from '../common/WordsPullUpMultiStyle';
import { AnimatedLetter } from '../common/AnimatedLetter';

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const paragraphText =
    "From compelling product imagery to cinematic short-form films, we combine creative direction, storytelling, and modern AI production to help brands communicate through visuals that feel intentional and distinctive.";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const chars = paragraphText.split('');

  return (
    <section id="about" className="py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-black relative">
      {/* Inner Rounded Card matching Prisma Reference */}
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto bg-surface-about border border-white/10 rounded-2xl md:rounded-[2.5rem] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden"
      >
        <div className="flex justify-center">
          <SectionLabel text="INDEPENDENT CREATIVE STUDIO" />
        </div>

        {/* Editorial Multi-Style Headline */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-typo-main leading-[1.02] sm:leading-[0.95] max-w-4xl mx-auto my-8">
          <WordsPullUpMultiStyle
            segments={[
              { text: "We don't just" },
              { text: 'create ads.', isSerifItalic: true },
              { text: 'We create attention.' }
            ]}
          />
        </div>

        {/* Scroll-Linked Character-by-Character Paragraph Reveal */}
        <div className="max-w-2xl mx-auto mt-10 md:mt-14 text-base sm:text-lg md:text-xl text-primary font-light leading-relaxed">
          {chars.map((char, index) => (
            <AnimatedLetter
              key={index}
              char={char}
              index={index}
              totalChars={chars.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
