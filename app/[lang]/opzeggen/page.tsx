"use client";

import { useEffect } from "react";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/context/LanguageContext";

export default function Opzeggen() {
  const t = useTranslations();
  const content = t.opzeggen;

  useEffect(() => {
    // Load GHL form embed script
    const script = document.createElement("script");
    script.src = "https://links.gymops.nl/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white section-padding">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-headings">{content.heroTitle}</h1>
          <p className="text-lg text-white/90">
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Important Info */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 font-headings">{content.infoTitle}</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              <strong>{content.noticePeriod.split(".")[0]}:</strong> {content.noticePeriod}
            </p>
            <p>
              <strong>{content.noticeExample.split("?")[0]}?</strong> {content.noticeExample.split("?").slice(1).join("?").trim()}
            </p>
            <p>
              {content.accessNote}
            </p>
            <p className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
              💡 <strong>{content.pauseNote}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Cancellation Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 font-headings">{content.formTitle}</h2>
          <div className="bg-white rounded-2xl shadow-lg p-2 md:p-4">
            <iframe
              src="https://links.gymops.nl/widget/form/augCoihjd4guzTFTcaoL"
              style={{ width: "100%", height: "1065px", border: "none", borderRadius: "3px" }}
              id="inline-augCoihjd4guzTFTcaoL"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Cancellation Form"
              data-height="1065"
              data-layout-iframe-id="inline-augCoihjd4guzTFTcaoL"
              data-form-id="augCoihjd4guzTFTcaoL"
              title="Cancellation Form"
            />
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p className="mb-2">{content.contactAlt}</p>
            <p>
              <a href={`mailto:${siteConfig.gym.email}`} className="text-primary hover:underline font-semibold">{siteConfig.gym.email}</a>
              {" · "}
              <a href={`tel:${siteConfig.gym.phone}`} className="text-primary hover:underline font-semibold">{siteConfig.gym.phone}</a>
            </p>
          </div>
        </div>
      </section>

      {/* Doubt section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 font-headings">{content.doubtTitle}</h2>
          <p className="text-gray-700 text-lg mb-6">
            {content.doubtText}
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-all"
          >
            {content.doubtCta}
          </a>
        </div>
      </section>
    </main>
  );
}
