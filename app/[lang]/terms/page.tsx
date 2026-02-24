"use client";

import { siteConfig } from "@/config/site";
import { useTranslations } from "@/context/LanguageContext";

export default function Terms() {
  const t = useTranslations();

  return (
    <section className="section-padding bg-white max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">{t.terms.pageTitle}</h1>
      <div className="prose prose-blue max-w-none text-gray-700">
        <p>{t.terms.placeholderText} {siteConfig.gym.name}.</p>
        <h3>1. {t.terms.acceptance}</h3>
        <p>{t.terms.acceptanceText}</p>

        <h3>2. {t.terms.membership}</h3>
        <p>{siteConfig.gym.name} {t.terms.membershipText}</p>

        <p className="mt-8 text-sm text-gray-500">{t.terms.lastUpdated} {new Date().toLocaleDateString()}</p>
      </div>
    </section>
  );
}
