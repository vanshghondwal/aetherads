import React, { useState } from 'react';
import { Preloader } from './components/common/Preloader';
import { HeroSection } from './components/sections/HeroSection';
import { FilmsSection } from './components/sections/FilmsSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { AboutSection } from './components/sections/AboutSection';
import { WhatWeCreateSection } from './components/sections/WhatWeCreateSection';
import { TrustStandardsSection } from './components/sections/TrustStandardsSection';
import { FaqSection } from './components/sections/FaqSection';
import { ContactSection } from './components/sections/ContactSection';
import { VideoLightbox } from './components/portfolio/VideoLightbox';
import { ImageLightbox } from './components/portfolio/ImageLightbox';
import { FILMS_DATA, STILLS_DATA, FilmItem } from './data/portfolioData';

export const App: React.FC = () => {
  const [activeFilm, setActiveFilm] = useState<FilmItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleNextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % STILLS_DATA.length);
    }
  };

  const handlePrevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + STILLS_DATA.length) % STILLS_DATA.length);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-typo-main selection:bg-primary selection:text-black">
      {/* Luxury Studio Preloader */}
      <Preloader />

      {/* 01 — Hero */}
      <HeroSection />

      {/* 02 — Selected Films */}
      <FilmsSection onSelectFilm={(film) => setActiveFilm(film)} />

      {/* 03 — Advertising Portfolio */}
      <PortfolioSection onSelectImage={(index) => setActiveImageIndex(index)} />

      {/* 04 — About the Studio */}
      <AboutSection />

      {/* 05 — What We Create */}
      <WhatWeCreateSection />

      {/* 06 — Production Standards & Trust */}
      <TrustStandardsSection />

      {/* 07 — Frequently Asked Questions */}
      <FaqSection />

      {/* 08 — Contact & Footer */}
      <ContactSection />

      {/* Modals / Lightboxes */}
      <VideoLightbox
        film={activeFilm}
        onClose={() => setActiveFilm(null)}
      />

      <ImageLightbox
        stills={STILLS_DATA}
        currentIndex={activeImageIndex}
        onClose={() => setActiveImageIndex(null)}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </div>
  );
};
export default App;
