import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SectionLabel } from '../common/SectionLabel';
import { WordsPullUpMultiStyle } from '../common/WordsPullUpMultiStyle';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'How does the production process work? Do I need to ship physical products?',
    answer: 'No physical shipping is required. You simply send us your existing product packshots, high-resolution phone/camera reference photos, and brand assets. Our AI production pipeline builds photorealistic 3D studio sets, physics environments, and dynamic lighting around your actual product geometry.'
  },
  {
    question: 'What deliverables and resolutions will our brand receive?',
    answer: 'You receive master 4K Ultra-HD video files and high-resolution static ad visuals formatted specifically for your advertising channels. Deliverables include 9:16 Vertical (Instagram Reels, TikTok, YouTube Shorts), 1:1 Square (Meta feed, carousel ads), and 4:5 Portrait.'
  },
  {
    question: 'What is the typical turnaround time for a campaign?',
    answer: 'Our standard delivery for first-round campaign concepts is 48 to 72 hours. Once you review the drafts, any requested refinements or adjustments are typically completed within 24 to 48 hours.'
  },
  {
    question: 'Do we own full commercial rights to the advertising creatives?',
    answer: 'Yes, 100%. Upon completion and delivery, your brand holds full commercial, perpetual, and royalty-free rights to deploy the creatives across paid advertising networks, social channels, eCommerce stores, and digital billboards globally.'
  },
  {
    question: 'Can we integrate our own brand guidelines, logo, and fonts?',
    answer: 'Absolutely. We meticulously follow your official brand guidelines, including exact HEX color palettes, typography specifications, logo placements, and tone of voice, ensuring all still and motion assets look seamlessly native to your brand.'
  },
  {
    question: 'How do we get started on an upcoming launch?',
    answer: 'Simply fill out the inquiry form below with your brand details and project vision, or call our creative desk directly at 8595216037. We will discuss your campaign goals and begin visual development immediately.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-black relative border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel text="COMMON QUESTIONS // TRANSPARENT PRODUCTION" />
          <div className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-typo-main uppercase leading-[0.95] mt-2">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Everything you need' },
                { text: 'to know.', isSerifItalic: true }
              ]}
            />
          </div>
          <p className="text-gray-400 text-sm md:text-base font-light max-w-xl mx-auto mt-4">
            Answers to common questions regarding our creative workflow, turnaround times, and commercial rights.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-surface-about border border-white/10 rounded-2xl overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-base sm:text-lg text-typo-main tracking-tight">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-primary flex-shrink-0 transition-transform">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-gray-400 font-light leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default FaqSection;
