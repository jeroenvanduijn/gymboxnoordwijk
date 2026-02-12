"use client";

import Link from "next/link";
import CTA from "@/components/CTA";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/context/LanguageContext";

export default function Aanbod() {
  const t = useTranslations();
  const { programs } = t;

  const programKeys: Array<'group' | 'personal' | 'nutrition'> = ['group', 'personal', 'nutrition'];
  const icons: Record<string, string> = { group: "🏋️", personal: "👤", nutrition: "🥗" };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{programs.title}</h1>
          <p className="text-xl max-w-2xl">
            {programs.subtitle}
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {programKeys.map((key, index) => {
              const item = programs.items[key];
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 text-2xl">
                    {icons[key]}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {item.description}
                  </p>

                  <Link href="/starten" className="block text-center bg-primary text-white py-4 px-8 rounded-lg font-bold hover:opacity-90 transition-all shadow-md">
                    {t.cta.primaryText}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        variant="footer"
        href={siteConfig.cta.primaryUrl}
      />
    </>
  );
}
