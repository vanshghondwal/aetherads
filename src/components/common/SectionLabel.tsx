import React from 'react';

interface SectionLabelProps {
  text: string;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ text, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-[0.25em] text-primary/70 uppercase mb-4 ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block"></span>
      <span>{text}</span>
    </div>
  );
};
export default SectionLabel;
