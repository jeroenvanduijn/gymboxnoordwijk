"use client";

/**
 * IntroCtaSection - Herbruikbare CTA sectie voor gratis intro
 *
 * Deze component toont een oranje call-to-action sectie die de intro popup opent
 * via window.openCFLPopup() in plaats van te linken naar /starten.
 *
 * Props:
 * - title: Hoofdtekst van de CTA
 * - subtitle: Beschrijving/extra tekst (optioneel)
 * - buttonLabel: Tekst op de button (standaard: "Plan Mijn Gratis Intro")
 */

interface IntroCtaSectionProps {
  title: string;
  subtitle?: string;
  buttonLabel?: string;
}

export default function IntroCtaSection({
  title,
  subtitle,
  buttonLabel = "Plan Mijn Gratis Intro"
}: IntroCtaSectionProps) {

  // Handler voor opening van de intro popup
  // De popup wordt gedefinieerd in HighLevelPopup component
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
      (window as any).openCFLPopup();
    }
  };

  return (
    <section
      className="section-padding text-white"
      style={{ backgroundColor: '#EF4D37' }}
    >
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        {subtitle && (
          <p className="text-xl mb-8 max-w-2xl mx-auto">{subtitle}</p>
        )}
        <button
          onClick={handleClick}
          className="inline-block px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-2 border-[#E25C2A] hover:bg-[#E25C2A]/10"
          style={{
            backgroundColor: '#FFFFFF',
            color: '#E25C2A'
          }}
        >
          {buttonLabel}
        </button>
      </div>
    </section>
  );
}
