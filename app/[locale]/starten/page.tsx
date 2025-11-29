"use client";

import { useEffect } from "react";

export default function StartenPage() {
  useEffect(() => {
    // Load HighLevel booking widget script
    const script = document.createElement('script');
    script.src = 'https://kilo.gymleadmachine.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Adjust iframe heights after script loads
    const adjustIframeHeight = () => {
      const iframes = document.querySelectorAll('iframe[src*="gymleadmachine"]');
      iframes.forEach((iframe: any) => {
        iframe.style.height = '700px';
      });
    };

    script.onload = () => {
      setTimeout(adjustIframeHeight, 1000);
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-cinnabar to-cinnabar/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Plan Je Gratis Intro</h1>
          <p className="text-xl max-w-3xl">
            Alle nieuwe leden starten met een gratis intro. Kies hieronder of je dit in de gym wilt doen of online via video call.
          </p>
        </div>
      </section>

      {/* Two Booking Options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Option A - Fysieke Intro */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-cinnabar rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Fysieke Intro</h2>
                    <p className="text-gray-600">In de gym</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Kom langs in onze box. We leren elkaar kennen over een kop koffie, je krijgt een rondleiding en we beantwoorden al je vragen.
                  Je hoeft niet te sporten – gewoon kennismaken!
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-verdigris flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>20-30 minuten kennismaken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-verdigris flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Rondleiding door de gym</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-verdigris flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Geen sportkleding nodig</span>
                  </li>
                </ul>
              </div>

              {/* Booking Calendar Iframe */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <iframe
                  src="https://kilo.gymleadmachine.com/widget/booking/rcNXO9PBrW3gx8CtKZhO"
                  style={{
                    width: '100%',
                    height: '700px',
                    border: 'none',
                    borderRadius: '8px'
                  }}
                  id="inline-rcNXO9PBrW3gx8CtKZhO"
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Fysieke Intro Booking"
                  data-height="700"
                  data-layout-iframe-id="inline-rcNXO9PBrW3gx8CtKZhO"
                  data-form-id="rcNXO9PBrW3gx8CtKZhO"
                  title="Fysieke Intro Booking"
                />
              </div>
            </div>

            {/* Option B - Online Intro */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Online Intro</h2>
                    <p className="text-gray-600">Via video call</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Liever eerst online kennismaken? Geen probleem! We plannen een video call waarin we al je vragen beantwoorden
                  en uitleggen hoe CrossFit Leiden werkt.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-verdigris flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>15-20 minuten video call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-verdigris flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vanuit je eigen huis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-verdigris flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Perfect voor drukke schema's</span>
                  </li>
                </ul>
              </div>

              {/* Booking Calendar Iframe */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <iframe
                  src="https://kilo.gymleadmachine.com/widget/booking/rwOfSnWorZvegIJBRtHq"
                  style={{
                    width: '100%',
                    height: '700px',
                    border: 'none',
                    borderRadius: '8px'
                  }}
                  id="inline-rwOfSnWorZvegIJBRtHq"
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Online Intro Booking"
                  data-height="700"
                  data-layout-iframe-id="inline-rwOfSnWorZvegIJBRtHq"
                  data-form-id="rwOfSnWorZvegIJBRtHq"
                  title="Online Intro Booking"
                />
              </div>
            </div>
          </div>

          {/* Help Text */}
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <p className="text-gray-600">
              <strong>Nog vragen?</strong> Bel of mail ons gerust op{" "}
              <a href="tel:0712340477" className="text-cinnabar hover:underline">071 - 234 0477</a>
              {" "}of{" "}
              <a href="mailto:welcome@crossfitleiden.com" className="text-cinnabar hover:underline">welcome@crossfitleiden.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Wat gebeurt er daarna?
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6 bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#E4572E] rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Kennismaking & rondleiding</h3>
                  <p className="text-lg text-gray-700">
                    We leren je kennen, luisteren naar je doelen en beantwoorden al je vragen.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#17BEBB] rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Persoonlijk advies</h3>
                  <p className="text-lg text-gray-700">
                    We leggen uit hoe onze aanpak werkt en of de Kickstart bij jou past. Helemaal vrijblijvend.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#6A4C93] rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Jouw plan voor de komende weken</h3>
                  <p className="text-lg text-gray-700">
                    Wil je door? Dan maken we samen een beginplan dat past bij jouw tijd, niveau en doelen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
