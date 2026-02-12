"use client";

import CTA from "@/components/CTA";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/context/LanguageContext";

export default function Ervaringen() {
  const t = useTranslations();
  const testimonials = siteConfig.proof.testimonials;

  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">{t.testimonials.title}</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-primary text-4xl mb-4 font-serif">&ldquo;</div>
                <p className="text-gray-700 italic mb-6 min-h-[80px] leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: item.image ? `url('${item.image}')` : undefined }}></div>
                  <div>
                    <div className="font-bold text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA variant="footer" href="/starten" />
    </>
  );
}
