import React from 'react';
import { SectionLabel } from '../common/SectionLabel';
import { WordsPullUpMultiStyle } from '../common/WordsPullUpMultiStyle';
import { PortfolioVideo } from '../portfolio/PortfolioVideo';
import { FILMS_DATA, FilmItem } from '../../data/portfolioData';

interface FilmsSectionProps {
  onSelectFilm: (film: FilmItem) => void;
}

export const FilmsSection: React.FC<FilmsSectionProps> = ({ onSelectFilm }) => {
  return (
    <section id="films" className="py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <SectionLabel text="SELECTED FILMS / 001—004" />
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight text-typo-main uppercase leading-[0.88]">
              <WordsPullUpMultiStyle
                segments={[
                  { text: 'Made to' },
                  { text: 'move.', isSerifItalic: true }
                ]}
              />
            </div>
          </div>

          <div className="max-w-md pb-2">
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
              Cinematic product storytelling for the brands of tomorrow. High-velocity physics, evocative lighting, and fluid macro detail engineered for modern screens.
            </p>
          </div>
        </div>

        {/* Editorial Film Layout:
            - Film 1: Large Featured Frame
            - Film 2 & 3: Balanced 2-column Grid
            - Film 4: Wide Cinematic Landscape Frame
        */}
        <div className="space-y-8 md:space-y-10">
          
          {/* Film 01: Large Featured */}
          {FILMS_DATA[0] && (
            <PortfolioVideo
              film={FILMS_DATA[0]}
              onSelect={onSelectFilm}
              className="w-full"
            />
          )}

          {/* Film 02 & 03: Balanced Two-Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {FILMS_DATA[1] && (
              <PortfolioVideo
                film={FILMS_DATA[1]}
                onSelect={onSelectFilm}
              />
            )}
            {FILMS_DATA[2] && (
              <PortfolioVideo
                film={FILMS_DATA[2]}
                onSelect={onSelectFilm}
              />
            )}
          </div>

          {/* Film 04: Wide Landscape Frame */}
          {FILMS_DATA[3] && (
            <PortfolioVideo
              film={FILMS_DATA[3]}
              onSelect={onSelectFilm}
              className="w-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};
export default FilmsSection;
