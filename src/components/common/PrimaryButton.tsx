import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PrimaryButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  href,
  onClick,
  className = '',
  iconClassName = ''
}) => {
  const content = (
    <span className="flex items-center gap-3 group-hover:gap-4 transition-all duration-250 ease-out">
      <span className="font-medium tracking-tight text-xs sm:text-sm uppercase">{text}</span>
      <span className="w-8 h-8 rounded-full bg-black text-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-250 ease-out flex-shrink-0">
        <ArrowRight className={`w-3.5 h-3.5 ${iconClassName}`} />
      </span>
    </span>
  );

  const baseClasses = `group inline-flex items-center justify-between pl-6 pr-2 py-2 rounded-full bg-primary text-black hover:bg-[#eae8d8] transition-colors duration-250 cursor-pointer ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={baseClasses} onClick={onClick}>
      {content}
    </button>
  );
};
export default PrimaryButton;
