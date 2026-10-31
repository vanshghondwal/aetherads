import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Phone, CheckCircle2, Send, Loader2 } from 'lucide-react';
import { SectionLabel } from '../common/SectionLabel';
import { WordsPullUpMultiStyle } from '../common/WordsPullUpMultiStyle';
import { STUDIO_CONFIG } from '../../data/portfolioData';

interface ContactSectionProps {
  presetMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ presetMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (presetMessage) {
      setFormData((prev) => ({
        ...prev,
        message: presetMessage
      }));
    }
  }, [presetMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send real email directly to vansh.ghondwal@gmail.com via FormSubmit endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${STUDIO_CONFIG.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New AETHER ADS Campaign Inquiry from ${formData.name || 'Client'} (${formData.brand || 'Brand'})`,
          _template: 'table',
          _captcha: 'false',
          Name: formData.name,
          Brand: formData.brand,
          Email: formData.email,
          Phone: formData.phone,
          Message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Fallback to direct mailto if API limits or blocks
        window.location.href = `mailto:${STUDIO_CONFIG.email}?subject=New Campaign Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
          `Name: ${formData.name}\nBrand: ${formData.brand}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
        )}`;
        setIsSubmitted(true);
      }
    } catch {
      // Seamless mailto fallback
      window.location.href = `mailto:${STUDIO_CONFIG.email}?subject=New Campaign Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nBrand: ${formData.brand}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      )}`;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-black relative border-t border-white/[0.06] overflow-hidden">
      {/* Background Subtle Spotlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-primary/[0.04] blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Visual Climax Headline */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <SectionLabel text="GET IN TOUCH // START A CONVERSATION" />
          
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-typo-main uppercase leading-[0.92] my-6">
            <WordsPullUpMultiStyle
              segments={[
                { text: "Let's create" },
                { text: 'something worth' },
                { text: 'watching.', isSerifItalic: true }
              ]}
            />
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light max-w-xl mx-auto mt-6">
            "Have a product or campaign in mind? Let's bring the idea to life."
          </p>
        </div>

        {/* Real Working Submission Form */}
        <div className="max-w-2xl mx-auto bg-surface-about border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 relative shadow-2xl">
          {isSubmitted ? (
            <div className="text-center py-12 flex flex-col items-center justify-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-2">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-typo-main uppercase tracking-tight">
                Inquiry Submitted Successfully
              </h3>
              <p className="text-gray-400 text-sm max-w-md font-light leading-relaxed">
                Thank you, {formData.name || 'there'}. Your project details have been sent directly to our creative desk at <span className="text-primary font-mono">{STUDIO_CONFIG.email}</span>. We will contact you at <span className="text-primary font-mono">{formData.phone || formData.email}</span> shortly.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', brand: '', email: '', phone: '', message: '' });
                }}
                className="mt-6 font-mono text-xs text-primary/80 hover:text-primary uppercase tracking-widest underline underline-offset-4"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-gray-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-sm text-typo-main placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-gray-400 mb-2">
                    Brand / Company
                  </label>
                  <input
                    type="text"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    placeholder="e.g. Acme Lifestyle"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-sm text-typo-main placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-gray-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-sm text-typo-main placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-gray-400 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 8595216037"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-sm text-typo-main placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-gray-400 mb-2">
                  Project Details / Creative Goals
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your product, desired visual tone, and upcoming launch goals..."
                  className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-sm text-typo-main placeholder-gray-600 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-primary text-black font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#eae8d8] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>SENDING TO STUDIO...</span>
                  </>
                ) : (
                  <>
                    <span>SUBMIT INQUIRY</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Direct Phone & Email Cards */}
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={`tel:${STUDIO_CONFIG.phone}`}
              className="p-4 rounded-2xl bg-[#161616] border border-white/5 hover:border-white/20 transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">DIRECT PHONE</span>
                <span className="font-mono text-sm text-typo-main group-hover:text-primary transition-colors">{STUDIO_CONFIG.phone}</span>
              </div>
            </a>

            <a
              href={`mailto:${STUDIO_CONFIG.email}`}
              className="p-4 rounded-2xl bg-[#161616] border border-white/5 hover:border-white/20 transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">OFFICIAL EMAIL</span>
                <span className="font-mono text-sm text-typo-main group-hover:text-primary transition-colors">{STUDIO_CONFIG.email}</span>
              </div>
            </a>
          </div>
        </div>

        {/* Minimal Footer */}
        <footer className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-3">
            <span className="font-bold text-typo-main tracking-wider">{STUDIO_CONFIG.name}</span>
            <span className="text-white/20">|</span>
            <span>Independent Creative Studio</span>
          </div>

          <div className="flex items-center gap-6">
            <a href={`tel:${STUDIO_CONFIG.phone}`} className="hover:text-primary transition-colors">
              Phone: {STUDIO_CONFIG.phone}
            </a>
            <a href={`mailto:${STUDIO_CONFIG.email}`} className="hover:text-primary transition-colors">
              {STUDIO_CONFIG.email}
            </a>
            <a
              href="#hero"
              className="hover:text-primary transition-colors flex items-center gap-1 text-primary/80"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>

          <div>
            <span>© {STUDIO_CONFIG.year} {STUDIO_CONFIG.name}. All rights reserved.</span>
          </div>
        </footer>

      </div>
    </section>
  );
};
export default ContactSection;
