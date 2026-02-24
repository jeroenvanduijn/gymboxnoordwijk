"use client";

import CTA from "@/components/CTA";
import { useTranslations } from "@/context/LanguageContext";
import RoosterEmbed from "@/components/RoosterEmbed";
import Image from "next/image";

export default function Rooster() {
  const t = useTranslations();

  return (
    <>
      {/* Hero with background image */}
      <section className="relative overflow-hidden text-white section-padding">
        <Image
          src="https://8reapzspluqk4ou3.public.blob.vercel-storage.com/fotos/hero-background-153.jpg"
          alt="Gymbox rooster"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-accent/80"></div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t.schedule.title}</h1>
          <p className="text-xl max-w-2xl text-white">
            {t.schedule.subtitle}
          </p>
        </div>
      </section>

      {/* SportBit Schedule Embed */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <RoosterEmbed />
        </div>
      </section>

      {/* CTA */}
      <CTA
        variant="footer"
        href="/starten"
      />
    </>
  );
}
