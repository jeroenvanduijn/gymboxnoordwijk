import Link from "next/link";

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
  title = "Klaar om te starten?",
  description = "Plan een gratis intro en ontdek hoe CrossFit Leiden jouw leven kan veranderen.",
  buttonText = "Plan een Gratis Intro",
  href = "/starten",
  className = "",
}: CTAProps) {
  // Variant 1: Hero CTA - Large, prominent, for hero sections
  if (variant === "hero") {
    return (
      <div className={`text-center ${className}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
        <Link
          href={href}
          className="inline-block bg-cinnabar text-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-cinnabar/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          {buttonText}
        </Link>
      </div>
    );
  }

  // Variant 2: Inline CTA - Compact, for within content
  if (variant === "inline") {
    return (
      <div className={`bg-chinese-violet/10 rounded-lg p-6 my-8 ${className}`}>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link
          href={href}
          className="inline-block bg-cinnabar text-white px-6 py-3 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all"
        >
          {buttonText}
        </Link>
      </div>
    );
  }

  // Variant 3: Footer CTA - Full-width section at end of pages
  if (variant === "footer") {
    return (
      <section className={`section-padding bg-cinnabar text-white ${className}`}>
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
          <Link
            href={href}
            className="inline-block bg-white text-cinnabar px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
          >
            {buttonText}
          </Link>
        </div>
      </section>
    );
  }

  // Variant 4: Sidebar CTA - Compact, sticky-friendly
  if (variant === "sidebar") {
    return (
      <div className={`bg-gradient-to-br from-cinnabar to-red-700 text-white rounded-xl p-6 ${className}`}>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="mb-4 text-sm">{description}</p>
        <Link
          href={href}
          className="block text-center bg-white text-cinnabar px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
        >
          {buttonText}
        </Link>
      </div>
    );
  }

  // Variant 5: Card CTA - Card-style with icon/emoji
  if (variant === "card") {
    return (
      <div className={`bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow ${className}`}>
        <div className="text-5xl mb-4">💪</div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
        <Link
          href={href}
          className="inline-block bg-cinnabar text-white px-6 py-3 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all"
        >
          {buttonText}
        </Link>
      </div>
    );
  }

  // Variant 6: Banner CTA - Horizontal banner style
  if (variant === "banner") {
    return (
      <div className={`bg-gradient-to-r from-chinese-violet to-purple-700 text-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 ${className}`}>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>
        <Link
          href={href}
          className="bg-white text-chinese-violet px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all whitespace-nowrap"
        >
          {buttonText}
        </Link>
      </div>
    );
  }

  // Variant 7: Button Primary - Just the button, primary style
  if (variant === "button-primary") {
    return (
      <Link
        href={href}
        className={`inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all ${className}`}
      >
        {buttonText}
      </Link>
    );
  }

  // Variant 8: Button Secondary - Just the button, secondary style
  if (variant === "button-secondary") {
    return (
      <Link
        href={href}
        className={`inline-block bg-chinese-violet text-white px-8 py-4 rounded-lg font-semibold hover:bg-chinese-violet/90 transition-all ${className}`}
      >
        {buttonText}
      </Link>
    );
  }

  // Variant 9: Text Link - Simple text link with arrow
  if (variant === "text-link") {
    return (
      <Link
        href={href}
        className={`inline-flex items-center gap-2 text-cinnabar font-semibold hover:underline text-lg ${className}`}
      >
        {buttonText}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    );
  }

  // Variant 10: Floating CTA - Fixed position, appears on scroll
  if (variant === "floating") {
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <Link
          href={href}
          className="block bg-cinnabar text-white px-6 py-4 rounded-full font-semibold hover:bg-cinnabar/90 transition-all shadow-2xl hover:shadow-xl transform hover:scale-105"
        >
          {buttonText}
        </Link>
      </div>
    );
  }

  // Default fallback
  return (
    <Link
      href={href}
      className={`inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all ${className}`}
    >
      {buttonText}
    </Link>
  );
}
