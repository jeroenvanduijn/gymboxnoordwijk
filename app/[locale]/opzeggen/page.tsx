"use client";
import { useLocale } from 'next-intl';

import { useEffect } from "react";

export default function OpzeggenPage() {
  const locale = useLocale();
  useEffect(() => {
    // Load the HighLevel script for the cancellation form
    const script = document.createElement('script');
    script.src = 'https://kilo.gymleadmachine.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <section className="bg-gradient-to-r from-gray-700 to-gray-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Abonnement Opzeggen
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Jammer dat je gaat! We horen graag waarom je stopt, zodat we onze dienstverlening kunnen verbeteren.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Belangrijke informatie</h2>
            <div className="bg-gray-50 rounded-xl p-6 space-y-3 text-gray-700">
              <p>
                <strong>Opzegtermijn:</strong> We hanteren minimaal 1 kalendermaand opzegtermijn (tenzij jouw abonnement hierop afwijkt, zoals GetShredded met 2 maanden).
              </p>
              <p>
                <strong>Voorbeeld:</strong> Wil je per 1 januari stoppen? Dan moet je voor 1 december opzeggen.
              </p>
              <p>
                Je blijft welkom tot het einde van de betaalde periode. Je hebt nog steeds toegang tot alle lessen.
              </p>
              <p>
                Wil je liever even pauzeren? Neem dan contact met ons op – we denken graag met je mee!
              </p>
            </div>
          </div>

          {/* HighLevel Cancellation Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Opzegformulier</h3>

            <div className="bg-white rounded-lg overflow-hidden">
              <iframe
                src="https://kilo.gymleadmachine.com/widget/form/w5EXGx4kP2dLSKIsFarq"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '1018px',
                  border: 'none',
                  borderRadius: '7px'
                }}
                id="inline-w5EXGx4kP2dLSKIsFarq" 
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Cancellation Form"
                data-height="1018"
                data-layout-iframe-id="inline-w5EXGx4kP2dLSKIsFarq"
                data-form-id="w5EXGx4kP2dLSKIsFarq"
                title="Cancellation Form"
              />
            </div>

            {/* Alternative: Direct contact */}
            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-4">
                Of neem direct contact op:
              </p>
              <div className="space-y-2">
                <p>
                  <a href="mailto:welcome@crossfitleiden.com" className="text-cinnabar font-semibold hover:underline">
                    welcome@crossfitleiden.com
                  </a>
                </p>
                <p>
                  <a href="tel:0712340477" className="text-cinnabar font-semibold hover:underline">
                    071 - 234 0477
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="mt-12 bg-jonquil/10 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-center">We horen graag van je</h3>
            <p className="text-gray-700 text-center">
              Jouw feedback helpt ons beter te worden. Wat kunnen we verbeteren?
              Wat vond je goed? Laat het ons weten!
            </p>
          </div>
        </div>
      </section>

      {/* Maybe Reconsider */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Twijfel je nog?</h2>
          <p className="text-gray-700 mb-6">
            Heb je vragen of wil je praten over alternatieven? We denken graag mee over oplossingen.
          </p>
          <a
            href={`/${locale}/contact`}
            className="inline-block bg-cinnabar text-white px-8 py-3 rounded-lg font-bold hover:bg-cinnabar/90 transition-all"
          >
            Neem Contact Op
          </a>
        </div>
      </section>
    </>
  );
}
