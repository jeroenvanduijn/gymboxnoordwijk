"use client";

import Image from "next/image";
import CTA from "@/components/CTA";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/context/LanguageContext";

export default function OverOns() {
  const t = useTranslations();

  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.waarom.title}</h1>
          <p className="text-xl max-w-2xl">
            {t.hero.tagline}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t.waarom.solutionTitle}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t.waarom.solutionDescription}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t.hero.subheadline}
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg bg-gray-200">
              <Image
                src={siteConfig.media.placeholders.community}
                alt="Gymbox Community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTA variant="footer" href="/starten" />
    </>
  );
}
