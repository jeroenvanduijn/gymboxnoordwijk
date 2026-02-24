"use client";

import { siteConfig } from "@/config/site";
import { useTranslations } from "@/context/LanguageContext";
import { usePopup } from "@/context/PopupContext";

type CTAVariant =
  | "hero"
  | "inline"
  | "footer"
  | "sidebar"
  | "card"
  | "banner"
  | "button-primary"
  | "button-secondary"
  | "text-link"
  | "floating";

interface CTAProps {
  variant: CTAVariant;
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
  className?: string;
}

export default function CTA({
  variant,
  title,
  description,
  buttonText,
  href = "#",
  className = "",
}: CTAProps) {
  const t = useTranslations();
  const { openPopup } = usePopup();

  const safeTitle = title || t.cta.readyTitle;
  const safeDesc = description || t.cta.readyDescription;
  const safeBtnText = buttonText || t.cta.primaryText;

  // If the href points to /starten, open popup instead
  const isPopupCTA = href === "/starten" || href === siteConfig.cta.primaryUrl;

  const handleClick = (e: React.MouseEvent) => {
    if (isPopupCTA) {
      e.preventDefault();
      openPopup();
    }
  };

  if (variant === "hero") {
    return (
      <div className={`text-center ${className}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{safeTitle}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{safeDesc}</p>
        <button
          onClick={handleClick}
          className="inline-block bg-primary text-white px-10 py-5 rounded-lg text-lg font-bold hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          {safeBtnText}
        </button>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className={`bg-gray-50 rounded-lg p-6 my-8 border-l-4 border-primary ${className}`}>
        <h3 className="text-2xl font-bold mb-3">{safeTitle}</h3>
        <p className="text-gray-700 mb-4">{safeDesc}</p>
        <button
          onClick={handleClick}
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
        >
          {safeBtnText}
        </button>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <section className={`section-padding bg-primary text-white ${className}`}>
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{safeTitle}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">{safeDesc}</p>
          <button
            onClick={handleClick}
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
          >
            {safeBtnText}
          </button>
        </div>
      </section>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all ${className}`}
    >
      {safeBtnText}
    </button>
  );
}
