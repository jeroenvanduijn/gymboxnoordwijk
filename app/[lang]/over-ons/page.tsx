"use client";

import { useTranslations } from "@/context/LanguageContext";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function OverOnsPage() {
  const t = useTranslations();
  const { overOns } = t;

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white section-padding">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-headings">{overOns.pageTitle}</h1>
          <p className="text-2xl md:text-3xl font-medium text-white/90 mb-6">{overOns.pageSubtitle}</p>
          <p className="text-white text-lg leading-relaxed">{overOns.intro}</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 font-headings">{overOns.storyTitle}</h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            {overOns.storyParagraphs.map((p, i) => (
              <p key={i} className={i === 9 ? "text-2xl font-bold text-primary" : ""} style={{ whiteSpace: "pre-line" }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom anders */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 font-headings">{overOns.waaromAndersTitle}</h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            {overOns.waaromAndersParagraphs.map((p, i) => (
              <p key={i} style={{ whiteSpace: "pre-line" }}>
                {i === 2 ? <em>{p}</em> : p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-headings">{overOns.teamTitle}</h2>
          <div className="flex flex-wrap gap-4 mb-16">
            {overOns.teamMembers.map((name, i) => (
              <span key={i} className="bg-gray-100 text-gray-800 font-medium px-5 py-3 rounded-lg border border-gray-200 text-lg">
                {name}
              </span>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-6 font-headings">{overOns.coachesTitle}</h3>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            {overOns.coachesParagraphs.map((p, i) => (
              <p key={i} className={i === 2 ? "font-bold text-primary text-xl" : ""}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 font-headings">{t.cta.readyTitle}</h2>
          <p className="text-lg mb-8 text-white/80">{t.cta.readyDescription}</p>
          <Link
            href={siteConfig.cta.primaryUrl}
            className="bg-accent text-white font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-all shadow-lg text-lg"
          >
            {t.cta.primaryText}
          </Link>
        </div>
      </section>
    </main>
  );
}
