import Link from "next/link";
import IntroCtaSection from "@/components/IntroCtaSection";

export default function DeVolgendeRondePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#6A4C93] to-[#6A4C93]/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">De Volgende Ronde</h1>
          <p className="text-xl max-w-3xl">
            Ons jaarlijkse community event. Een dag vol competitie, gezelligheid en teamspirit.
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Over Het Event</h2>
            <p className="text-lg text-gray-700 mb-6">
              De Volgende Ronde is ons jaarlijkse interne competitie event. In teams van 3-4 personen neem je deel aan verschillende
              workouts die je conditie, kracht en teamwork testen.
            </p>

            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Event Details</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex gap-4">
                  <div className="w-24 font-semibold">Wanneer:</div>
                  <div>Najaar 2025 (datum volgt)</div>
                </div>
                <div className="flex gap-4">
                  <div className="w-24 font-semibold">Waar:</div>
                  <div>CrossFit Leiden, Marie Diebenplaats 108</div>
                </div>
                <div className="flex gap-4">
                  <div className="w-24 font-semibold">Teams:</div>
                  <div>3-4 personen per team</div>
                </div>
                <div className="flex gap-4">
                  <div className="w-24 font-semibold">Niveau:</div>
                  <div>Scaled en RX divisions</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Waarom Meedoen?</h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#6A4C93] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Test jezelf in een leuke, supportive sfeer</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#6A4C93] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Bouw teamspirit met je mede-leden</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#6A4C93] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Geniet van BBQ, muziek en goede sfeer na afloop</span>
              </li>
            </ul>

            <div className="bg-[#F4D35E]/10 rounded-xl p-6 text-center">
              <p className="text-lg font-semibold text-gray-900">
                Inschrijvingen openen 8 weken voor het event
              </p>
              <p className="text-gray-700 mt-2">
                Volg ons op Instagram voor updates!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title="Nieuwsgierig naar onze community?"
        subtitle="Kom kennismaken tijdens een gratis intro. Dan vertellen we je alles over onze events!"
        buttonLabel="Plan een Gratis Intro"
      />
    </>
  );
}
