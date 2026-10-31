import React from 'react';
import { SectionLabel } from '../common/SectionLabel';
import { WordsPullUpMultiStyle } from '../common/WordsPullUpMultiStyle';
import { PortfolioImage } from '../portfolio/PortfolioImage';
import { STILLS_DATA } from '../../data/portfolioData';

interface PortfolioSectionProps {
  onSelectImage: (index: number) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectImage }) => {
  return (
    <section id="portfolio" className="py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-black relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <SectionLabel text="STILL FRAMES / 001—010" />
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight text-typo-main uppercase leading-[0.88]">
              <WordsPullUpMultiStyle
                segments={[
                  { text: 'Every frame' },
                  { text: 'matters.', isSerifItalic: true }
                ]}
              />
            </div>
          </div>

          <div className="max-w-md pb-2">
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
              Precision still advertising campaigns. Each composition is designed with deliberate light architecture, typography integration, and high product presence.
            </p>
          </div>
        </div>

        {/* Curated Editorial Grid for all 10 Images */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {STILLS_DATA.map((still, idx) => (
            <PortfolioImage
              key={still.id}
              still={still}
              onSelect={() => onSelectImage(idx)}
              className={still.gridSpan || 'md:col-span-6 lg:col-span-4'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PortfolioSection;
