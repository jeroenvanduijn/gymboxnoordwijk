"use client";

import { siteConfig } from "@/config/site";

interface CTAButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'header' | 'white-bg' | 'hero';
  text?: string;
}

export default function CTAButton({ children, className = '', variant = 'white-bg', text }: CTAButtonProps) {

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).openDemoPopup) {
      (window as any).openDemoPopup();
    }
  };

  const baseClasses = 'inline-block font-bold transition-all cursor-pointer text-center';

  const variantClasses = {
    header: 'bg-accent text-white px-6 py-2 rounded-md hover:opacity-90 shadow-sm text-sm',
    'white-bg': 'bg-primary text-white px-8 py-3 rounded-lg hover:opacity-90 shadow-md hover:shadow-lg',
    hero: 'bg-primary text-white px-8 py-4 rounded-lg hover:opacity-90 shadow-lg text-lg transform hover:-translate-y-1'
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {text || children || siteConfig.cta.primaryText}
    </button>
  );
}
