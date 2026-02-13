"use client";

import CTA from "@/components/CTA";
import { siteConfig } from "@/config/site";
import RoosterEmbed from "@/components/RoosterEmbed";

export default function Rooster() {
  const content = siteConfig.schedule;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.title}</h1>
          <p className="text-xl max-w-2xl">
            {content.subtitle}
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

