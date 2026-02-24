"use client";

import { useState } from "react";
import { usePopup } from "@/context/PopupContext";
import { useTranslations } from "@/context/LanguageContext";
import CTA from "@/components/CTA";

export default function Tarieven() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { openPopup } = usePopup();
  const t = useTranslations();
  const content = t.tarieven;

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white section-padding">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-headings">{content.heroTitle}</h1>
          <p className="text-lg text-white/90">
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 font-headings">{content.comparisonTitle}</h2>
          <p className="text-center text-gray-600 mb-10 text-lg">
            {content.comparisonSubtitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.comparisonItems.map((item: { label: string; detail: string; price: string; highlight?: boolean }, i: number) => (
              <div
                key={i}
                className={`rounded-xl p-6 text-center transition-all ${item.highlight
                    ? "bg-accent text-white shadow-xl ring-2 ring-accent scale-105"
                    : "bg-gray-50 text-gray-700 border border-gray-200"
                  }`}
              >
                <p className={`text-sm mb-1 ${item.highlight ? "text-white/80" : "text-gray-500"}`}>{item.detail}</p>
                <p className="font-bold text-lg mb-2">{item.label}</p>
                <p className={`text-2xl font-bold ${item.highlight ? "text-white" : "text-primary"}`}>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Accordion */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 font-headings">{content.programsTitle}</h2>
          <div className="space-y-3">
            {content.programs.map((program: { name: string; subtitle: string; details: { label: string; price: string }[]; description: string }, i: number) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="text-lg font-bold font-headings">{program.name}</h3>
                    <p className="text-sm text-gray-500">{program.subtitle}</p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="space-y-2">
                      {program.details.map((d: { label: string; price: string }, j: number) => (
                        <div key={j} className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3">
                          <span className="text-gray-700">{d.label}</span>
                          <span className="font-bold text-primary">{d.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 text-center mt-6">
            {t.pricing.disclaimer}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 font-headings">{content.faqTitle}</h2>
          <div className="space-y-3">
            {content.faqItems.map((faq: { question: string; answer: string }, i: number) => {
              const faqIndex = i + 100; // offset to avoid collision with program indexes
              return (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === faqIndex ? null : faqIndex)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ml-4 ${openIndex === faqIndex ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === faqIndex && (
                    <div className="px-5 pb-5 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-headings">{content.ctaTitle}</h2>
          <p className="text-lg text-white/80 mb-8">{content.ctaDescription}</p>
          <button
            onClick={openPopup}
            className="bg-accent text-white font-bold py-4 px-10 rounded-lg text-lg hover:opacity-90 transition-all shadow-lg"
          >
            {content.ctaButton}
          </button>
        </div>
      </section>
    </main>
  );
}
