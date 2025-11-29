import Link from "next/link";
import { getLocale } from 'next-intl/server';
import IntroCtaSection from "@/components/IntroCtaSection";

export default async function SemiPrivate() {
  const locale = await getLocale();
  return (
    <>
      <section className="bg-gradient-to-r from-verdigris to-teal-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Small Group Training (max 5 Personen)</h1>
          <p className="text-xl max-w-2xl">
            De perfecte balans tussen persoonlijke aandacht en groepsdynamiek.
            Train met maximaal 5 personen en krijg een programma op maat.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is Small Group Training?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Small Group Training (ook wel semi-private genoemd) is training in een kleine groep van maximaal 5 personen.
              Je krijgt veel persoonlijke aandacht van je coach, maar traint wel samen met anderen die vergelijkbare doelen hebben.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Het programma wordt aangepast op jullie specifieke wensen: afvallen, sterker worden, herstel na blessure,
              of training voor een specifieke sport. De perfecte keuze als je meer begeleiding wilt dan in groepslessen,
              maar toch de motivatie van een groep waardeert.
            </p>

            <div className="bg-verdigris/10 rounded-xl p-6">
              <p className="text-gray-700">
                <strong>💡 Perfect voor:</strong> Vrienden die samen willen trainen, collega's, gezinsleden,
                of mensen die meer aandacht willen maar niet 1-op-1.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Gespecialiseerde Small Group Programma's</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Naast algemene small group training bieden we ook specifieke programma's aan met gerichte doelen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* GetShredded */}
            <div className="bg-white rounded-xl p-8 border-2 border-cinnabar/20">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold mb-3">GetShredded</h3>
              <p className="text-gray-700 mb-4">
                GetShredded is ons small group programma voor drukke ouders die fitter, sterker en slanker willen worden. Je traint drie keer per week in een kleine groep met persoonlijke aandacht. Geen metingen, geen ingewikkelde schema's, gewoon een aanpak die werkt.
              </p>

              {/* Coach */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-sm font-semibold text-gray-600 mb-3">Guided by:</p>
                <div className="flex items-center">
                  <img
                    src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20jef.png"
                    alt="Jeffrey Perez"
                    className="w-14 h-14 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-bold">Jeffrey Perez</p>
                    <p className="text-sm text-cinnabar font-semibold">GetShredded Lead Coach</p>
                  </div>
                </div>
              </div>

              <div className="bg-cinnabar/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-700">
                  <strong>Gemiddelde resultaten in 12 weken.</strong>
                </p>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-lg font-bold text-cinnabar">€450 per maand</p>
                <p className="text-lg font-bold text-cinnabar">€400 per maand <span className="text-sm font-normal text-gray-600">(bij 6 maanden commitment)</span></p>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Je kunt elke maand starten.</strong>
              </p>
            </div>

            {/* Unlock Motion */}
            <div className="bg-white rounded-xl p-8 border-2 border-verdigris/20">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-2xl font-bold mb-3">Unlock Motion</h3>
              <p className="text-gray-700 mb-4">
                Unlock Motion is ons semi private programma voor iedereen die beter wil bewegen. Je start met een Body APK waarin we kijken naar compensaties, houding, ademhaling en bewegingspatronen. Vanuit daar maken we een persoonlijk plan om pijnvrijer, sterker en stabieler te bewegen. Denk aan betere core kracht, betere mobiliteit en een betere basishouding.
              </p>

              {/* Coach */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-sm font-semibold text-gray-600 mb-3">Guided by:</p>
                <div className="flex items-center">
                  <img
                    src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20jari.png"
                    alt="Jari Jansen"
                    className="w-14 h-14 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-bold">Jari Jansen</p>
                    <p className="text-sm text-verdigris font-semibold">Movement Specialist</p>
                  </div>
                </div>
              </div>

              <p className="text-lg font-bold text-verdigris mb-2">€1575</p>
              <p className="text-sm text-gray-600">12 weken programma</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700">
              Interesse in een van deze programma's?{" "}
              <Link href={`/${locale}/contact`} className="text-verdigris font-semibold hover:underline">
                Neem contact op
              </Link>
              {" "}voor meer informatie of plan een gratis intro!
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Voordelen van Small Group</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Persoonlijke Aandacht</h3>
              <p className="text-gray-700">
                Met maximaal 5 personen krijg je veel individuele feedback en begeleiding van je coach.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Programma Op Maat</h3>
              <p className="text-gray-700">
                Het programma wordt aangepast op jullie gezamenlijke doelen en individuele niveaus.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Betere Prijs Dan 1-op-1</h3>
              <p className="text-gray-700">
                Goedkoper dan private coaching, maar met dezelfde kwaliteit en aandacht.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold mb-3">Motivatie van Groep</h3>
              <p className="text-gray-700">
                Train samen, moedig elkaar aan en behaal doelen als team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <IntroCtaSection
        title="Interesse in Small Group Training?"
        subtitle="Plan een gratis intro. We bespreken je doelen, laten je de gym zien en kijken of small group iets voor jou is!"
        buttonLabel="Plan een Gratis Intro"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Vragen over small group training?{" "}
              <Link href={`/${locale}/contact`} className="text-verdigris font-semibold hover:underline">
                Neem contact met ons op
              </Link>
              {" "}– we helpen je graag!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
