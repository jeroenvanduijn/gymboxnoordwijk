"use client";

import { useTranslations } from "@/context/LanguageContext";
import { usePopup } from "@/context/PopupContext";
import Image from "next/image";

export default function OverOnsPage() {
  const t = useTranslations();
  const { openPopup } = usePopup();
  const { overOns } = t;

  return (
    <main className="pt-24">
      {/* Hero - Title & Subtitle */}
      <section className="bg-accent py-16 md:py-24">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-headings text-primary mb-6">{overOns.pageTitle}</h1>
          <p className="text-2xl md:text-3xl font-medium text-primary">{overOns.pageSubtitle}</p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="section-padding bg-white pb-0">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed">{overOns.intro}</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 font-headings">{overOns.storyTitle}</h2>

          {/* Kees photo */}
          <div className="float-right ml-8 mb-6 w-48 md:w-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://8reapzspluqk4ou3.public.blob.vercel-storage.com/fotos/coaches/coach-Kees-Houwaart.webp"
              alt="Kees Houwaart - Oprichter Gymbox"
              width={256}
              height={320}
              className="object-cover w-full h-auto"
            />
          </div>

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

      {/* Coaches */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 font-headings">{overOns.coachesTitle}</h3>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Coaches photo */}
            <div className="w-full md:w-2/5 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://8reapzspluqk4ou3.public.blob.vercel-storage.com/fotos/hero-background-156.jpg"
                alt="Gymbox coaches team"
                width={500}
                height={350}
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              {overOns.coachesParagraphs.map((p, i) => (
                <p key={i} className={i === 2 ? "font-bold text-primary text-xl" : ""}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 font-headings text-white">{t.cta.readyTitle}</h2>
          <p className="text-lg mb-8 text-white/80">{t.cta.readyDescription}</p>
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
