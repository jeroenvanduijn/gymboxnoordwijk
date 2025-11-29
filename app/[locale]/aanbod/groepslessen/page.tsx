import Link from "next/link";
import { getLocale } from 'next-intl/server';
import IntroCtaSection from "@/components/IntroCtaSection";

export default async function Groepslessen() {
  const locale = await getLocale();
  return (
    <>
      {/* Hero - Warm & Welcoming */}
      <section className="bg-gradient-to-r from-cinnabar to-cinnabar/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">CrossFit Groepslessen</h1>
          <p className="text-xl max-w-2xl">
            Train samen in een groep waar iedereen elkaar aanmoedigt. Elke les is anders, altijd uitdagend én altijd aangepast aan jouw niveau.
            Je bent nooit alleen – hier doe je het samen!
          </p>
        </div>
      </section>

      {/* Wat zijn groepslessen - Beginner-friendly */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Hoe werken onze groepslessen?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Onze groepslessen zijn de kern van CrossFit Leiden. Elke dag trainen we samen onder begeleiding van een ervaren coach.
              Het mooie? <strong>Je hoeft niet fit te zijn om te beginnen</strong> – we passen alles aan op jouw niveau.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Elke training is anders: vandaag werk je aan kracht, morgen aan conditie, overmorgen aan bewegingskwaliteit.
              Die variatie maakt het leuk én effectief! En het beste: je traint samen met anderen die net zo hard hun best doen als jij.
            </p>
            <div className="bg-cinnabar/10 rounded-xl p-6 mt-6">
              <p className="text-gray-700">
                <strong>💡 Belangrijk om te weten:</strong> Iedereen doet dezelfde training, maar op zijn of haar eigen niveau.
                Beginners gebruiken lichtere gewichten of eenvoudigere bewegingen. Gevorderden maken het uitdagender.
                De coach helpt je kiezen wat bij jou past!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lesopbouw - Simplified & Clear */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6 text-center">Hoe ziet een les eruit?</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Dit is een voorbeeld van een les. Soms vier onderdelen, soms twee. Het kan bijvoorbeeld ook een warming up zijn met daarna een langere cardio workout.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Part 1 */}
            <div className="bg-white rounded-xl p-6">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-center">1. Warming-up</h3>
              <p className="text-sm text-gray-600 mb-3 text-center">10-15 minuten</p>
              <p className="text-gray-700 text-center">
                We starten rustig met bewegen, stretchen en je lichaam voorbereiden. Zo voorkom je blessures en ben je klaar voor de training!
              </p>
            </div>

            {/* Part 2 */}
            <div className="bg-white rounded-xl p-6">
              <div className="w-16 h-16 bg-jonquil/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-center">2. Techniek & Kracht</h3>
              <p className="text-sm text-gray-600 mb-3 text-center">10-15 minuten</p>
              <p className="text-gray-700 text-center">
                Oefenen met de bewegingen die je vandaag gaat doen. De coach legt alles uit en let op je techniek.
                Stap voor stap leren we je hoe het moet!
              </p>
            </div>

            {/* Part 3 */}
            <div className="bg-white rounded-xl p-6">
              <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-center">3. Hoofdtraining</h3>
              <p className="text-sm text-gray-600 mb-3 text-center">15-25 minuten</p>
              <p className="text-gray-700 text-center">
                Hier gaan we! Dit is het intensieve deel waar je echt gaat werken. Iedereen doet mee op zijn of haar eigen tempo.
                Samen zweten, elkaar aanmoedigen!
              </p>
            </div>

            {/* Part 4 */}
            <div className="bg-white rounded-xl p-6">
              <div className="w-16 h-16 bg-chinese-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧘</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-center">4. Cooling-down</h3>
              <p className="text-sm text-gray-600 mb-3 text-center">5-10 minuten</p>
              <p className="text-gray-700 text-center">
                Rustig uitlopen, stretchen en je lichaam laten herstellen. Perfect moment om even na te praten met de groep!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie - More Personal & Reassuring */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Is dit iets voor mij?</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Kort antwoord: ja! Groepslessen zijn voor iedereen. Hier zijn een paar voorbeelden:
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-6">
                <div className="w-10 h-10 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Je hebt nog nooit gesport</h3>
                  <p className="text-gray-700">
                    Perfect! 80% van onze leden had geen sportervaring toen ze begonnen.
                    We beginnen bij nul en leren je alles stap voor stap. De coach let extra op je en de groep helpt je op weg.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-6">
                <div className="w-10 h-10 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Je bent druk met werk en gezin</h3>
                  <p className="text-gray-700">
                    Daar snappen we alles van! Onze lessen duren precies 60 minuten en zijn super efficiënt.
                    In een uur krijg je een volledige training – geen minuut verspild. We hebben lessen van vroeg tot laat, dus er is altijd wel iets dat past.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-6">
                <div className="w-10 h-10 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Je hebt een blessure of fysieke beperking</h3>
                  <p className="text-gray-700">
                    Vertel het gewoon aan de coach! We hebben veel ervaring met het aanpassen van oefeningen.
                    Oude knie? Rugpijn? We werken eromheen en zorgen dat je veilig kunt trainen zonder risico.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-6">
                <div className="w-10 h-10 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Je sport al en zoekt nieuwe uitdaging</h3>
                  <p className="text-gray-700">
                    Ook top! We kunnen elke training uitdagender maken met meer gewicht, hogere snelheid of moeilijkere varianten.
                    Je zult nooit meer uitgeleerd raken – CrossFit blijft je uitdagen!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tijden & Frequentie - Clear Schedule Info */}
      <section className="section-padding bg-verdigris/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Wanneer kun je komen?</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              We hebben dagelijks meerdere lessen, van vroege ochtend tot late avond. Kies wat jou past!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">🌅</div>
                <h4 className="font-bold text-xl mb-2">Ochtend</h4>
                <p className="text-gray-600 mb-3">6 tot 11 uur</p>
                <p className="text-sm text-gray-600">Perfect voor de werk, fris en energiek de dag in!</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">☀️</div>
                <h4 className="font-bold text-xl mb-2">Middag</h4>
                <p className="text-gray-600 mb-3">12 tot 13 uur</p>
                <p className="text-sm text-gray-600">Lunchbreak? Trainingsbreak! Perfecte pauze van je werkdag.</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">🌙</div>
                <h4 className="font-bold text-xl mb-2">Avond</h4>
                <p className="text-gray-600 mb-3">16 tot 22 uur</p>
                <p className="text-sm text-gray-600">Na het werk of als de kids op bed liggen – tijd voor jezelf!</p>
              </div>
            </div>

            {/* Frequency Recommendation */}
            <div className="bg-white rounded-xl p-8">
              <h3 className="font-bold text-xl mb-4 text-center">Hoe vaak moet ik komen?</h3>
              <p className="text-gray-700 mb-4 text-center">
                We raden <strong>2-3x per week</strong> aan voor goede resultaten, maar je mag zo vaak komen als je wilt met je lidmaatschap.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="font-bold text-lg mb-1">1x per week</p>
                  <p className="text-sm text-gray-600">Goed begin, fitness onderhouden</p>
                </div>
                <div className="text-center p-4 bg-cinnabar/10 rounded-lg border-2 border-cinnabar">
                  <p className="font-bold text-lg mb-1">2-3x per week</p>
                  <p className="text-sm text-gray-600">Aanbevolen! Echt resultaat zien</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="font-bold text-lg mb-1">4-5x per week</p>
                  <p className="text-sm text-gray-600">Voor de fanatiekelingen!</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href={`/${locale}/rooster`} className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all">
                Bekijk het Volledige Rooster
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wat neem je mee - Practical & Friendly */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Wat neem je mee naar de les?</h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">👕</span>
                  <div>
                    <p className="font-semibold mb-1">Sportkleding</p>
                    <p className="text-sm text-gray-600">Comfortabel en ademend</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">👟</span>
                  <div>
                    <p className="font-semibold mb-1">Stabiele schoenen voor krachttraining</p>
                    <p className="text-sm text-gray-600">Geen hardloopschoenen voor de krachtdelen</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">👟</span>
                  <div>
                    <p className="font-semibold mb-1">Optioneel hardloopschoenen</p>
                    <p className="text-sm text-gray-600">Voor workouts met rennen</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">💧</span>
                  <div>
                    <p className="font-semibold mb-1">Waterfles en handdoek</p>
                    <p className="text-sm text-gray-600">Blijf gehydrateerd en fris</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-verdigris/10 rounded-lg">
                <p className="text-gray-700 text-center">
                  <strong>💪 Al het trainingsmateriaal hebben wij!</strong><br />
                  <span className="text-sm">Gewichten, touwjes, rowers, bikes – je hoeft niks zelf mee te nemen.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guided by certified coaches */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Guided by certified coaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Rochelle */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20rochelle.png"
                  alt="Rochelle"
                  className="w-16 h-16 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-bold text-lg">Rochelle</h3>
                  <p className="text-cinnabar text-sm font-semibold">Lead Coach</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Rochelle is turncoach op nationaal niveau en brengt die expertise naar CrossFit Leiden. Ze is geweldig met kinderen en volwassenen, en helpt iedereen om bewegingen veilig te leren.
              </p>
            </div>

            {/* Natália */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/Coach%20Natalia.png"
                  alt="Natália"
                  className="w-16 h-16 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-bold text-lg">Natália</h3>
                  <p className="text-cinnabar text-sm font-semibold">Coach</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Natália komt uit Brazilië en verhuisde in 2022 naar Nederland. Met een diploma in bewegingswetenschappen en een passie voor hardlopen brengt ze creativiteit en positiviteit naar elke les.
              </p>
            </div>

            {/* Sem */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20sem.png"
                  alt="Sem Li"
                  className="w-16 h-16 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-bold text-lg">Sem Li</h3>
                  <p className="text-cinnabar text-sm font-semibold">Coach</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Sem is altijd vrolijk en maakt graag contact met iedereen in zijn lessen. Hij houdt van Olympic weightlifting en staat elke ochtend om 5 uur op om te trainen voordat hij de eerste les geeft.
              </p>
            </div>

            {/* Max */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20max.png"
                  alt="Max"
                  className="w-16 h-16 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-bold text-lg">Max</h3>
                  <p className="text-cinnabar text-sm font-semibold">Kickstart Lead Coach</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Max heeft jaren ervaring als personal trainer en CrossFit coach. Hij houdt van wandelen en kamperen met zijn familie. Als coach creëert Max een leuke en positieve sfeer waar iedereen zich welkom voelt.
              </p>
            </div>

            {/* Jeffrey */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20jef.png"
                  alt="Jeffrey Perez Stoof"
                  className="w-16 h-16 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-bold text-lg">Jeffrey Perez</h3>
                  <p className="text-cinnabar text-sm font-semibold">GetShredded Lead Coach</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Jeffrey was profvoetballer voordat hij CrossFit coach werd. Hij snapt wat het betekent om te presteren én om je op je gemak te voelen. Jeffrey past zijn coaching aan op wat jij nodig hebt.
              </p>
            </div>

            {/* Erin */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/Coach%20Erin.png"
                  alt="Erin"
                  className="w-16 h-16 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-bold text-lg">Erin</h3>
                  <p className="text-cinnabar text-sm font-semibold">Coach</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Erin coachte al in 2019 bij CrossFit Leiden en is nu terug. Overdag werkt ze bij Defensie waar ze militairen helpt mentaal sterk te blijven. In haar vrije tijd geeft ze salsalessen.
              </p>
            </div>

            {/* Hoite */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
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
                Hoite is een van onze toegewijde coaches die graag met beginners werkt. Hij neemt de tijd om bewegingen goed uit te leggen en zorgt ervoor dat je je op je gemak voelt tijdens de les.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <IntroCtaSection
        title="Klaar om het te proberen?"
        subtitle="Alle nieuwe leden beginnen met een gratis intro. Dit is een ontspannen gesprek van 20-30 minuten waar je niet hoeft te sporten – gewoon kennismaken en kijken of het bij je past!"
        buttonLabel="Plan Mijn Gratis Intro"
      />
    </>
  );
}
