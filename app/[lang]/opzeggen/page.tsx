"use client";

import { useEffect } from "react";
import { siteConfig } from "@/config/site";

export default function Opzeggen() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-headings">Abonnement Opzeggen</h1>
          <p className="text-lg text-white/90">
            Jammer dat je gaat! We horen graag waarom je stopt, zodat we onze dienstverlening kunnen verbeteren.
          </p>
        </div>
      </section>

      {/* Important Info */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 font-headings">Belangrijke informatie</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              <strong>Opzegtermijn:</strong> We hanteren minimaal 1 kalendermaand opzegtermijn.
            </p>
            <p>
              <strong>Voorbeeld:</strong> Wil je per 1 januari stoppen? Dan moet je voor 1 december opzeggen.
            </p>
            <p>
              Je blijft welkom tot het einde van de betaalde periode. Je hebt nog steeds toegang tot alle lessen.
            </p>
            <p className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
              💡 <strong>Wil je liever even pauzeren?</strong> Neem dan contact met ons op – we denken graag met je mee!
            </p>
          </div>
        </div>
      </section>

      {/* Cancellation Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 font-headings">Opzegformulier</h2>
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
            <p className="mb-2">Of neem direct contact op:</p>
            <p>
              <a href={`mailto:${siteConfig.gym.email}`} className="text-primary hover:underline font-semibold">{siteConfig.gym.email}</a>
              {" · "}
              <a href={`tel:${siteConfig.gym.phone}`} className="text-primary hover:underline font-semibold">{siteConfig.gym.phone}</a>
            </p>
          </div>
        </div>
      </section>

      {/* Twijfel section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 font-headings">Twijfel je nog?</h2>
          <p className="text-gray-700 text-lg mb-6">
            Heb je vragen of wil je praten over alternatieven? We denken graag mee over oplossingen.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-all"
          >
            Neem Contact Op
          </a>
        </div>
      </section>
    </main>
  );
}
