"use client";

import { useState } from "react";
import { usePopup } from "@/context/PopupContext";
import { useTranslations } from "@/context/LanguageContext";
import CTA from "@/components/CTA";

const programs = [
  {
    name: "Gymbox Kickstart",
    subtitle: "De perfecte start voor iedereen",
    details: [
      { label: "2x Personal Training", price: "€160" }
    ],
    description: "Ons kickstart programma helpt je op weg met 2 persoonlijke trainingssessies. Je coach leert je de basisbewegingen, bespreekt je doelen en maakt een plan dat bij jou past."
  },
  {
    name: "Group Coaching",
    subtitle: "max 12 personen • elke les gecoacht",
    details: [
      { label: "Basic – 9 credits/maand", price: "€105/mnd" },
      { label: "Limited – 13 credits/maand", price: "€125/mnd" },
      { label: "Max – 26 credits/maand", price: "€145/mnd" }
    ],
    description: "Train in kleine groepen onder begeleiding van een ervaren coach. Elke les wordt aangepast aan jouw niveau. Kies het pakket dat bij jouw trainingsfrequentie past."
  },
  {
    name: "Personal Training",
    subtitle: "1-op-1 coaching",
    details: [
      { label: "60 minuten sessie", price: "€80" }
    ],
    description: "Persoonlijke aandacht, op maat gemaakte training en maximaal resultaat. Ideaal als je specifieke doelen hebt of extra begeleiding wilt."
  },
  {
    name: "Teens Membership",
    subtitle: "Voor tieners",
    details: [
      { label: "1x per week", price: "€39/mnd" },
      { label: "2x per week", price: "€59/mnd" }
    ],
    description: "Speciaal programma voor tieners om op een veilige en leuke manier te trainen onder begeleiding van onze coaches."
  },
  {
    name: "Kids Membership",
    subtitle: "Voor kinderen",
    details: [],
    description: "Een leuk en veilig programma voor kinderen. Neem contact met ons op voor meer informatie over beschikbaarheid en prijzen."
  },
  {
    name: "Flex Friday",
    subtitle: "Neem een vriend mee",
    details: [],
    description: "Op vrijdag mag je gratis een vriend of vriendin meenemen om samen te trainen. De perfecte manier om Gymbox te laten ontdekken!"
  }
];

const comparisons = [
  { emoji: "☕", label: "Dagelijkse flat white", price: "€100", period: "per maand" },
  { emoji: "🍽️", label: "1x per week uit eten", price: "€320", period: "per maand" },
  { emoji: "📺", label: "Streaming abonnementen", price: "€50", period: "per maand" },
  { emoji: "💪", label: "Gymbox Noordwijk", price: "€105", period: "per maand", highlight: true }
];

export default function Tarieven() {
  const t = useTranslations();
  const { openPopup } = usePopup();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white section-padding">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-headings">
            Investeer in je gezondheid voor maar €3,50 per dag
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Persoonlijke coaching in kleine groepen, een warme community en maandelijks opzegbare memberships. Geen verborgen kosten.
          </p>
        </div>
      </section>

      {/* Waar geef je het aan uit? */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center font-headings">
            Waar geef je het aan uit?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {comparisons.map((item, i) => (
              <div
                key={i}
                className={`text-center p-6 rounded-2xl transition-all ${item.highlight
                    ? "bg-primary text-white shadow-xl transform scale-105 ring-4 ring-primary/30"
                    : "bg-gray-50 border border-gray-100"
                  }`}
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <p className={`text-sm font-medium mb-3 ${item.highlight ? "text-white/80" : "text-gray-500"}`}>
                  {item.label}
                </p>
                <p className={`text-2xl md:text-3xl font-bold ${item.highlight ? "text-white" : "text-gray-900"}`}>
                  {item.price}
                </p>
                <p className={`text-xs mt-1 ${item.highlight ? "text-white/70" : "text-gray-400"}`}>
                  {item.period}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg max-w-2xl mx-auto">
            Je betaalt óf nu aan je gezondheid, óf later aan klachten, weinig energie en zorgkosten. Bij ons bouw je rustig en veilig aan een fitter leven.
          </p>
        </div>
      </section>

      {/* Programs Dropdown */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-headings">
            Onze Programma&apos;s
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Klik op een programma voor meer informatie en prijzen
          </p>
          <div className="space-y-3">
            {programs.map((program, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">{program.name}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{program.subtitle}</p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === i ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Expandable content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-5 md:px-6 pb-6 border-t border-gray-100 pt-4">
                    <p className="text-gray-600 mb-4">{program.description}</p>

                    {program.details.length > 0 && (
                      <div className="space-y-2">
                        {program.details.map((detail, j) => (
                          <div key={j} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                            <span className="text-gray-700">{detail.label}</span>
                            <span className="font-bold text-primary text-lg">{detail.price}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {program.details.length === 0 && (
                      <p className="text-gray-500 italic text-sm">Neem contact op voor prijzen en beschikbaarheid.</p>
                    )}

                    <button
                      onClick={openPopup}
                      className="mt-4 bg-primary text-white font-semibold py-2.5 px-6 rounded-lg hover:opacity-90 transition-all text-sm"
                    >
                      Plan een Gratis Intro
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center font-headings">Veelgestelde Vragen</h2>
          <div className="space-y-4">
            {[
              { q: "Moet ik fit zijn om te beginnen?", a: "Nee, je begint op jouw niveau. Wij begeleiden je stap voor stap." },
              { q: "Kan ik mijn abonnement pauzeren?", a: "Ja, dat kan. Pauzeringen zijn mogelijk met 1 maand opzegtermijn." },
              { q: "Hoe werkt de betaling?", a: "Automatische incasso. Geen inschrijfkosten. Geen kleine lettertjes." },
              { q: "Wat maakt Gymbox anders?", a: "Kleine groepen, persoonlijke coaching, warme community. Bij ons hoef je het niet alleen te doen." }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 font-headings text-white">Klaar om in jezelf te investeren?</h2>
          <p className="text-lg mb-8 text-white/80">
            Plan je gratis intro en kom kennismaken. Geen verplichtingen, gewoon ontdekken of Gymbox bij jou past.
          </p>
          <button
            onClick={openPopup}
            className="bg-accent text-white font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-all shadow-lg text-lg"
          >
            {t.cta.primaryText}
          </button>
        </div>
      </section>
    </main>
  );
}
