import Link from "next/link";
import { getLocale } from 'next-intl/server';
import IntroCtaSection from "@/components/IntroCtaSection";

export default async function SportPerformancePage() {
  const locale = await getLocale();
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cinnabar to-cinnabar/80 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sport &amp; Performance
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Professionele Strength & Conditioning voor teams, selecties en organisaties.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Voor wie?</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              <strong>Ons Sport & Performance programma is speciaal ontwikkeld voor teams, selecties en organisaties</strong>
              die hun prestaties willen verbeteren door professionele Strength & Conditioning training.
            </p>
            <p>
              Of je nu een rugby selectie bent, bij de brandweer of politie werkt, of met je team betere resultaten wilt behalen –
              wij verzorgen gestructureerde training op maat.
            </p>
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Voor wie is dit programma?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Rugby */}
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🏉</div>
              <h3 className="text-xl font-bold mb-3">Rugby Selecties</h3>
              <p className="text-gray-700">
                Kracht, explosiviteit en tacticale conditie voor rugbyteams van alle niveaus.
              </p>
            </div>

            {/* Brandweer */}
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🚒</div>
              <h3 className="text-xl font-bold mb-3">Brandweer</h3>
              <p className="text-gray-700">
                Functionele kracht en uithoudingsvermogen voor fysiek veeleisend werk.
              </p>
            </div>

            {/* Politie */}
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">👮</div>
              <h3 className="text-xl font-bold mb-3">Politie</h3>
              <p className="text-gray-700">
                Kracht, snelheid en operationele fitheid voor het politiewerk.
              </p>
            </div>

            {/* Teams */}
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">⚽</div>
              <h3 className="text-xl font-bold mb-3">Sportteams</h3>
              <p className="text-gray-700">
                Prestatiegericht trainen voor voetbal, hockey, handbal en andere teamsporten.
              </p>
            </div>

            {/* Bedrijven */}
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3">Bedrijven</h3>
              <p className="text-gray-700">
                Teambuilding en fitheid voor je team. Vitale medewerkers presteren beter.
              </p>
            </div>

            {/* Custom */}
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Maatwerk</h3>
              <p className="text-gray-700">
                Jouw organisatie of team heeft specifieke wensen? We denken graag mee!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Wat bieden wij?</h2>

          <div className="space-y-8">
            {/* Strength & Conditioning */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strength & Conditioning</h3>
              <p className="text-gray-700 mb-4">
                Gestructureerde kracht- en conditietraining gericht op verbetering van:
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-cinnabar flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Maximale kracht
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-cinnabar flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Explosiviteit & snelheid
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-cinnabar flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Uithoudingsvermogen
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-cinnabar flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Bewegingskwaliteit
                </li>
              </ul>
            </div>

            {/* Performance Testing */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Testing</h3>
              <p className="text-gray-700 mb-4">
                Objectieve metingen om voortgang te monitoren en training bij te sturen:
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-cinnabar flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Krachttesten (1RM, maxes)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-cinnabar flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Snelheids- en sprongtesten
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-cinnabar flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Conditietesten
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-cinnabar flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Bewegingsanalyse
                </li>
              </ul>
            </div>

            {/* Periodisering */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Periodisering & Planning</h3>
              <p className="text-gray-700">
                Trainingsprogramma's op maat, afgestemd op jullie seizoen, wedstrijdkalender of operationele eisen.
                We zorgen dat jullie op het juiste moment in topvorm zijn.
              </p>
            </div>

            {/* Team Training */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Teamtraining & Coaching</h3>
              <p className="text-gray-700">
                Professionele coaching tijdens sessies. We zorgen voor de juiste motivatie, techniek en intensiteit.
                Trainen als team versterkt niet alleen je lijf, maar ook de onderlinge band.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guided by certified coaches */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Guided by certified coaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Jari */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20jari.png"
                  alt="Jari"
                  className="w-16 h-16 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-bold text-lg">Jari Jansen</h3>
                  <p className="text-cinnabar text-sm font-semibold">Movement Specialist</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Jari geeft workshops en helpt teams met pijn, beperkte mobiliteit of techniek. Hij heeft uitgebreide ervaring met bewegingsanalyse en performance verbetering.
              </p>
            </div>

            {/* Hoite */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/hoite.png"
                  alt="Hoite"
                  className="w-16 h-16 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-bold text-lg">Hoite</h3>
                  <p className="text-cinnabar text-sm font-semibold">Coach</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Hoite is toegewijd aan het werken met teams en atleten. Hij neemt de tijd om bewegingen goed uit te leggen en zorgt voor effectieve training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Hoe werkt het?</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cinnabar rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kennismaking & Intake</h3>
                  <p className="text-gray-700">
                    We bespreken jullie doelen, beschikbaarheid en specifieke wensen. Wat wil je bereiken en wanneer?
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cinnabar rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Maatwerk Programma</h3>
                  <p className="text-gray-700">
                    Op basis van jullie doelen stellen we een programma op. Frequentie, intensiteit en focus worden afgestemd op jullie situatie.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cinnabar rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Start Training</h3>
                  <p className="text-gray-700">
                    Jullie team start met professioneel begeleide sessies. We monitoren voortgang en passen waar nodig aan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Interesse in een teamtraining?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Neem contact op voor een vrijblijvend gesprek over de mogelijkheden en een offerte op maat.
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-bold hover:bg-cinnabar/90 transition-all shadow-md"
          >
            Vraag Offerte Aan
          </Link>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title="Ook als individu welkom"
        subtitle="Zoek je persoonlijke training? Bekijk onze andere programma's of plan een gratis intro."
        buttonLabel="Plan een Gratis Intro"
      />
    </>
  );
}
