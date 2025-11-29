import Link from "next/link";
import { getLocale } from 'next-intl/server';
import IntroCtaSection from "@/components/IntroCtaSection";

export default async function PreTeens() {
  const locale = await getLocale();
  return (
    <>
      <section className="bg-gradient-to-r from-verdigris to-cyan-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sporten voor Kinderen (9-12 jaar)</h1>
          <p className="text-xl max-w-2xl">
            Laat je kind sterker, zelfverzekerder en fitter worden in een veilige, leuke omgeving.
            Speciaal aangepaste lessen voor basisschool-leeftijd – geen ervaring nodig!
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Waarom Onze Kinderlessen?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Onze lessen voor 9-12 jarigen zijn speciaal ontworpen voor kinderen in de basisschoolleeftijd.
              We focussen op plezier, beweging en een gezonde relatie met sport opbouwen – niet op presteren of competitie.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Alle oefeningen zijn leeftijdsgeschikt en veilig, met veel aandacht voor goede bewegingspatronen
              die ze hun hele leven kunnen gebruiken. En het belangrijkste: het voelt als spelen, niet als trainen!
            </p>

            <div className="bg-verdigris/10 rounded-xl p-6">
              <p className="text-gray-700">
                <strong>💡 Voor ouders:</strong> Onze coaches zijn gecertificeerd in kindercoaching en EHBO.
                Groepen zijn klein (max 12 kids) voor veel persoonlijke aandacht. De eerste les mag je als ouder meekijken!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Wat Leert Je Kind?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-3">Sterker & Fitter Worden</h3>
              <p className="text-gray-700 mb-2">
                Bouw kracht, coördinatie en conditie op tijdens een belangrijke groeifase
              </p>
              <p className="text-sm text-gray-600">
                Zonder zware gewichten of risico's – alles is aangepast op hun leeftijd
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">😊</div>
              <h3 className="text-xl font-bold mb-3">Zelfvertrouwen Opbouwen</h3>
              <p className="text-gray-700 mb-2">
                Ontdekken wat hun lichaam kan en trots zijn op kleine overwinningen
              </p>
              <p className="text-sm text-gray-600">
                "Ik kan het!" momenten die ze ook buiten de sportschool helpen
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-3">Gezonde Gewoontes</h3>
              <p className="text-gray-700 mb-2">
                Leren dat bewegen leuk is – niet iets wat "moet" voor school
              </p>
              <p className="text-sm text-gray-600">
                Een positieve relatie met sport die ze hopelijk hun hele leven behouden
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Sociale Vaardigheden</h3>
              <p className="text-gray-700 mb-2">
                Samenwerken, anderen aanmoedigen en omgaan met uitdagingen
              </p>
              <p className="text-sm text-gray-600">
                In een veilige omgeving waar iedereen elkaar helpt en niemand uitgelachen wordt
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">Focus & Discipline</h3>
              <p className="text-gray-700 mb-2">
                Luisteren naar instructies, doorzetten en zich concentreren op een taak
              </p>
              <p className="text-sm text-gray-600">
                Vaardigheden die ook op school en thuis helpen!
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">📵</div>
              <h3 className="text-xl font-bold mb-3">Minder Schermtijd</h3>
              <p className="text-gray-700 mb-2">
                Een uur per week zonder iPad, telefoon of game console
              </p>
              <p className="text-sm text-gray-600">
                En ze missen het niet eens – ze hebben te veel plezier!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe ziet een les eruit */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Hoe Ziet een Les Eruit?</h2>
            <p className="text-center text-gray-700 mb-8">
              Elke les duurt 45-60 minuten en volgt dezelfde opbouw, zodat kinderen weten wat ze kunnen verwachten:
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Warming-up met Spelletjes (10 min)</h3>
                  <p className="text-gray-700 mb-1">
                    We starten met tikspelletjes, estafettes of andere actieve spelletjes om warm te worden
                  </p>
                  <p className="text-sm text-gray-600">
                    Kinderen merken niet eens dat ze aan het opwarmen zijn – het voelt als pauze-spelen!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Beweging van de Dag Leren (15 min)</h3>
                  <p className="text-gray-700 mb-1">
                    We focussen op één beweging (bijv. squats, push-ups, springen) en leren de juiste techniek
                  </p>
                  <p className="text-sm text-gray-600">
                    Op een speelse manier, met duidelijke uitleg en oefeningen die ze aankunnen
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">De Uitdaging (15-20 min)</h3>
                  <p className="text-gray-700 mb-1">
                    Een leuke training in teams of individueel, met de bewegingen die ze net geleerd hebben
                  </p>
                  <p className="text-sm text-gray-600">
                    Aangepast op hun niveau – sommigen doen meer, anderen minder. Iedereen doet mee!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Cool-down & High-fives (5 min)</h3>
                  <p className="text-gray-700 mb-1">
                    Rustig uitlopen, stretchen en elkaar feliciteren met de prestaties
                  </p>
                  <p className="text-sm text-gray-600">
                    Positief afsluiten is belangrijk – iedereen gaat met een goed gevoel naar huis!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials van ouders */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Wat Ouders Zeggen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Mijn zoon van 9 is nooit sportief geweest en werd altijd als laatste gekozen bij gym. Bij CrossFit Kids
                bloeit hij helemaal op! Hij is zoveel zelfverzekerder geworden."
              </p>
              <div>
                <p className="font-semibold">Sandra, moeder van Luuk (9)</p>
                <p className="text-sm text-gray-600">Traint sinds 6 maanden</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Onze dochter is super energiek en zat voorheen alleen maar achter de iPad. Nu vraagt ze ons drie keer per week
                of ze naar CrossFit mag. Ze kan haar energie kwijt én maakt vriendjes!"
              </p>
              <div>
                <p className="font-semibold">Tom & Lisa, ouders van Emma (10)</p>
                <p className="text-sm text-gray-600">Traint sinds 1 jaar</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Als ouder vond ik het eerst spannend – is het niet te zwaar? Maar ik zag al snel dat de coaches precies weten
                hoe je met kinderen werkt. Veilig, leuk, en Mees wordt elke week sterker!"
              </p>
              <div>
                <p className="font-semibold">Jeroen, vader van Mees (8)</p>
                <p className="text-sm text-gray-600">Traint sinds 4 maanden</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                "Het mooiste? Dat de kinderen niet met elkaar concurreren, maar elkaar aanmoedigen. Mijn dochter heeft er twee
                vriendinnen gemaakt waar ze ook buiten CrossFit mee afspreekt!"
              </p>
              <div>
                <p className="font-semibold">Marieke, moeder van Sophie (11)</p>
                <p className="text-sm text-gray-600">Traint sinds 8 maanden</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guided by certified coaches */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Guided by certified coaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Rochelle */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20rochelle.png"
                  alt="Rochelle"
                  className="w-16 h-16 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-bold text-lg">Rochelle</h3>
                  <p className="text-verdigris text-sm font-semibold">Lead Coach</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Rochelle is turncoach op nationaal niveau en brengt die expertise naar CrossFit Leiden. Ze is geweldig met kinderen en helpt iedereen om bewegingen spelenderwijs te leren.
              </p>
            </div>

            {/* Natália */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/Coach%20Natalia.png"
                  alt="Natália"
                  className="w-16 h-16 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-bold text-lg">Natália</h3>
                  <p className="text-verdigris text-sm font-semibold">Coach</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Natália komt uit Brazilië met een diploma in bewegingswetenschappen. Ze coacht met veel energie en geduld en maakt training leuk voor jonge kinderen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Praktische info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Praktische Informatie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-verdigris/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">📅 Wanneer?</h3>
                <p className="text-gray-700 mb-2">Woensdag 15:00</p>
                <p className="text-sm text-gray-600">
                  1 training per week
                </p>
              </div>

              <div className="bg-verdigris/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">👥 Groepsgrootte</h3>
                <p className="text-gray-700 mb-2">Maximaal 12 kinderen per les</p>
                <p className="text-sm text-gray-600">
                  Kleine groepen = veel persoonlijke aandacht van de coaches
                </p>
              </div>

              <div className="bg-verdigris/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">💰 Prijs</h3>
                <p className="text-gray-700 mb-2">€42,50 per maand</p>
                <p className="text-sm text-gray-600">
                  Maandelijks opzegbaar
                </p>
              </div>

              <div className="bg-verdigris/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">👨‍👩‍👧 Voor Ouders</h3>
                <p className="text-gray-700 mb-2">Je mag de eerste les meekijken</p>
                <p className="text-sm text-gray-600">
                  Daarna wachten in de waiting area of drop-off + pick-up
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde Vragen</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Is CrossFit niet te zwaar voor kinderen?</h3>
                <p className="text-gray-700">
                  Nee! Onze kinderlessen gebruiken NOOIT zware gewichten en alles is aangepast op hun leeftijd en ontwikkeling.
                  We focussen op lichaamsgewicht oefeningen, spelletjes en lichte materialen. Veiligheid staat voorop.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Moet mijn kind al sportief zijn om mee te doen?</h3>
                <p className="text-gray-700">
                  Absoluut niet! We hebben kinderen die super sportief zijn, maar ook kinderen die nog nooit gesport hebben.
                  Iedereen doet op eigen niveau en niemand wordt uitgelachen. Het gaat om plezier en vooruitgang.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Wat als mijn kind verlegen is of niet durft?</h3>
                <p className="text-gray-700">
                  Dat zien we regelmatig! Onze coaches zijn hier ervaren in. De eerste les mag je als ouder meekijken,
                  en je kind mag meedoen op een manier die voor hem/haar comfortabel aanvoelt. Geen druk, eigen tempo.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Zijn de coaches gecertificeerd?</h3>
                <p className="text-gray-700">
                  Ja! Alle coaches hebben certificeringen in kindercoaching én zijn EHBO gecertificeerd.
                  Ze weten precies hoe ze met deze leeftijdsgroep werken en hoe ze bewegingen veilig en leuk maken.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Hoeveel keer per week moet mijn kind komen?</h3>
                <p className="text-gray-700">
                  Dat bepaal je zelf! Sommige kinderen komen 1x per week, anderen 3x. We raden 2x per week aan voor
                  optimale vooruitgang, maar je bent vrij om te kiezen. Het abonnement is onbeperkt.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Wat moet mijn kind meenemen?</h3>
                <p className="text-gray-700">
                  Gewoon comfortabele sportkleding (bijv. wat ze ook bij gym dragen), sportschoenen en een waterfles.
                  Verder hebben we alles in huis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title="Laat Je Kind een Gratis Intro Doen!"
        subtitle="Nieuwsgierig of dit iets voor je kind is? Meld je aan voor een gratis intro. Je mag meekijken, je kind kan kennismaken met de coaches en andere kinderen, en daarna beslissen jullie samen of het leuk is!"
        buttonLabel="Plan Gratis Intro"
      />

      {/* Final note */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Vragen over de kinderlessen of twijfel je nog?{" "}
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
