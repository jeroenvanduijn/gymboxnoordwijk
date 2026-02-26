"use client";

import { useTranslations } from "@/context/LanguageContext";
import { usePopup } from "@/context/PopupContext";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  kickstart: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  crossfit: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  build: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
  hyrox: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  personal: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  nutrition: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  rehab: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  kids: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
};

export default function AanbodPage() {
  const t = useTranslations();
  const { openPopup } = usePopup();
  const { aanbod } = t;

  return (
    <main className="pt-24 min-h-screen bg-gray-50">
      {/* Hero with background image */}
      <section className="relative overflow-hidden text-white py-24 lg:py-32 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://8reapzspluqk4ou3.public.blob.vercel-storage.com/fotos/hero-background-148.jpg"
            alt="Gymbox training"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/20 z-10"></div>
          {/* Gradient Overlay for extra readability on left side */}
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent"></div>
        </div>

        <div className="container-custom relative z-30 max-w-4xl mx-auto md:mx-0">
          <ScrollReveal direction="left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-headings tracking-tight text-white">{aanbod.pageTitle}</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aanbod.items.map((item, i) => (
              <ScrollReveal key={i} delay={0.1 * (i % 3)} className={`${i === 0 ? "md:col-span-2 lg:col-span-3" : "h-full"}`}>
                {i === 0 ? (
                  <div className="group bg-gray-900 p-8 md:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden border border-gray-800">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700"></div>

                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-primary mb-6 shadow-lg relative z-10 hover:bg-white hover:text-accent transition-colors">
                      {iconMap[item.key] || iconMap.crossfit}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 font-headings uppercase text-white relative z-10 tracking-tight">{item.title}</h3>
                    <p className="leading-relaxed text-gray-300 text-lg md:text-xl max-w-3xl relative z-10">{item.description}</p>
                  </div>
                ) : (
                  <div className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-accent/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>

                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300 relative z-10">
                      {iconMap[item.key] || iconMap.crossfit}
                    </div>

                    <h3 className="font-bold text-xl mb-3 font-headings uppercase group-hover:text-accent transition-colors relative z-10">{item.title}</h3>
                    <p className="text-gray-600 relative z-10">{item.description}</p>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container-custom max-w-2xl mx-auto">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold mb-4 font-headings text-white">{t.cta.readyTitle}</h2>
            <p className="text-lg text-white/90 mb-8">{t.cta.readyDescription}</p>
            <button
              onClick={openPopup}
              className="bg-accent text-primary font-bold py-4 px-10 rounded-lg text-lg hover:bg-white transition-all shadow-lg transform hover:-translate-y-1 uppercase tracking-wide"
            >
              {t.cta.primaryText}
            </button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
