"use client";

import { useTranslations } from "@/context/LanguageContext";
import Link from "next/link";
import { siteConfig } from "@/config/site";

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
  const { aanbod } = t;

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white section-padding">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-headings">{aanbod.pageTitle}</h1>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aanbod.items.map((item, i) => (
              <div key={i} className={`bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 ${i === 0 ? "md:col-span-2 lg:col-span-3 bg-gradient-to-r from-primary to-primary-dark text-white border-0" : ""}`}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${i === 0 ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>
                  {iconMap[item.key] || iconMap.crossfit}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${i === 0 ? "text-2xl" : ""}`}>{item.title}</h3>
                <p className={`leading-relaxed ${i === 0 ? "text-white/80 text-lg" : "text-gray-600"}`}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50 text-center">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 font-headings">{t.cta.readyTitle}</h2>
          <p className="text-gray-600 text-lg mb-8">{t.cta.readyDescription}</p>
          <Link
            href={siteConfig.cta.primaryUrl}
            className="bg-primary text-white font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-all shadow-lg text-lg"
          >
            {t.cta.primaryText}
          </Link>
        </div>
      </section>
    </main>
  );
}
