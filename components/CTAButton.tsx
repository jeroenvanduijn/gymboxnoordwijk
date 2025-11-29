"use client";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'header' | 'white-bg' | 'hero';
}

export default function CTAButton({ children, className = '', variant = 'white-bg' }: CTAButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
      (window as any).openCFLPopup();
    }
  };

  const baseClasses = 'inline-block font-bold transition-all cursor-pointer';

  const variantClasses = {
    header: 'bg-white text-[#E25C2A] px-8 py-3 rounded-lg hover:bg-[#E25C2A]/10 shadow-md hover:shadow-lg border-2 border-[#E25C2A]',
    'white-bg': 'bg-white text-[#E25C2A] px-8 py-3 rounded-lg hover:bg-[#E25C2A]/10 shadow-md hover:shadow-lg border-2 border-[#E25C2A]',
    hero: 'bg-white text-[#E25C2A] px-8 py-4 rounded-lg hover:bg-[#E25C2A]/10 shadow-lg text-lg border-2 border-[#E25C2A]'
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
