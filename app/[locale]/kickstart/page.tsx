"use client";

import Link from "next/link";
import { useLocale } from 'next-intl';
import IntroCtaSection from "@/components/IntroCtaSection";

export default function Kickstart() {
  const locale = useLocale();
  // Handler for opening the intro popup
  const handlePopupClick = () => {
    if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
      (window as any).openCFLPopup();
    }
  };
  return (
    <>
      {/* Hero sectie */}
      <section className="bg-gradient-to-r from-jonquil via-yellow-400 to-jonquil text-gray-900 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Start veilig en sterk met onze Kickstart
            </h1>
            <p className="text-xl mb-8 text-gray-800">
              Ons 28-dagen beginnersprogramma voor mensen zonder ervaring. Persoonlijke begeleiding, veilige opbouw, op jouw tempo.
            </p>
            <button
              onClick={handlePopupClick}
              className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all shadow-lg text-lg cursor-pointer"
            >
              Plan een Gratis Intro
            </button>
          </div>
        </div>
      </section>

      {/* Wat is de Kickstart */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is de Kickstart?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Ons 28-dagen beginnersprogramma voor mensen zonder ervaring. Persoonlijke begeleiding, veilige opbouw, op jouw tempo.
            </p>
            <div className="bg-jonquil/10 rounded-lg p-5 mb-6">
              <p className="text-gray-800">
                <strong>Belangrijk:</strong> Je begint altijd met een gratis intro. In dat gesprek kijken we samen of de Kickstart de beste start voor jou is.
              </p>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Gedurende <strong>28 dagen</strong> werk je aan je energie, routine en krijg je alle basis-bewegingen
              onder de knie – volledig op jouw tempo, met persoonlijke begeleiding van onze coaches.
            </p>

            <div className="bg-jonquil/20 rounded-xl p-6 mt-6">
              <h3 className="font-bold text-lg mb-3">Waar focussen we op?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cinnabar mr-2">✓</span>
                  <span><strong>Veilig starten</strong> – Geen high-skill bewegingen, wel veel aandacht voor goede techniek</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-2">✓</span>
                  <span><strong>Meer energie</strong> – Bouw conditie en kracht op zonder te overtrainen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-2">✓</span>
                  <span><strong>Een routine creëren</strong> – Leer hoe je training inpast in je drukke leven</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-2">✓</span>
                  <span><strong>Vertrouwen opbouwen</strong> – Ontdek wat je lichaam kan, stap voor stap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie is het */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Voor Wie is de Kickstart?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-3">👋</div>
                <h3 className="font-bold text-lg mb-2">Complete Beginners</h3>
                <p className="text-gray-700">
                  Nog nooit CrossFit gedaan? Perfect. De Kickstart is speciaal gemaakt voor jou.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
                <h3 className="font-bold text-lg mb-2">Drukke Ouders</h3>
                <p className="text-gray-700">
                  Heb je structuur en een duidelijk plan nodig? De Kickstart geeft je houvast.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-3">⏸️</div>
                <h3 className="font-bold text-lg mb-2">Lang Niet Gesport</h3>
                <p className="text-gray-700">
                  Is het jaren geleden? Geen probleem. We bouwen rustig op vanaf jouw niveau.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-3">🩹</div>
                <h3 className="font-bold text-lg mb-2">Onzekerheid of Blessures</h3>
                <p className="text-gray-700">
                  Heb je een oude blessure of ben je onzeker? We passen alles aan op jouw situatie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat zit er in de Kickstart */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Wat Zit Er in de Kickstart?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">🏋️</span>
                  2-3 keer per week trainen
                </h3>
                <p className="text-gray-700">
                  In groepslessen of semi-private, afhankelijk van wat bij jou past. Flexibel in te plannen.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">👨‍🏫</span>
                  Persoonlijke coachbegeleiding
                </h3>
                <p className="text-gray-700">
                  Onze coaches kennen jouw naam, jouw doel en jouw situatie. Elke les krijg je persoonlijke feedback.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">📐</span>
                  Techniektraining op jouw niveau
                </h3>
                <p className="text-gray-700">
                  Leer de basis-bewegingen (squats, push-ups, deadlifts) op een veilige manier die past bij jouw lichaam.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">🍎</span>
                  Voeding & leefstijl basics
                </h3>
                <p className="text-gray-700">
                  Simpele, haalbare tips over voeding, slaap en herstel – geen ingewikkelde diëten.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">📊</span>
                  Een progressieplan
                </h3>
                <p className="text-gray-700">
                  Veilige opbouw die past bij jouw niveau. Niet te snel, niet te langzaam – precies goed.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">👥</span>
                  Community onboarding
                </h3>
                <p className="text-gray-700">
                  Je leert andere leden kennen, voelt je welkom en wordt onderdeel van de CFL familie.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">🔄</span>
                  Mini check-in halverwege
                </h3>
                <p className="text-gray-700">
                  Na 2 weken evalueren we samen hoe het gaat en passen we waar nodig aan.
                </p>
              </div>

              <div className="bg-verdigris/5 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  Evaluatie aan het einde
                </h3>
                <p className="text-gray-700">
                  Na 28 dagen bespreken we jouw vooruitgang en geven we persoonlijk advies voor je vervolg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe werkt het starten - 3 stappen */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Hoe Werkt Het Starten?</h2>
            <p className="text-center text-gray-700 mb-12 text-lg">
              Beginnen bij CrossFit Leiden is makkelijk. We leiden je door 3 eenvoudige stappen:
            </p>

            <div className="space-y-8">
              {/* Stap 1 */}
              <div className="bg-white rounded-xl p-8 shadow-sm flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-jonquil rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mr-6">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Plan een Gratis Intro</h3>
                  <p className="text-gray-700 mb-3">
                    Dit is een rustig gesprek van 30 minuten. <strong>Geen workout</strong>, geen verplichtingen.
                    We maken kennis, geven je een rondleiding en luisteren naar jouw doelen en situatie.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Je krijgt ook antwoord op al je vragen over de Kickstart, planning en tarieven.
                  </p>
                </div>
              </div>

              {/* Stap 2 */}
              <div className="bg-white rounded-xl p-8 shadow-sm flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-jonquil rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mr-6">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Maak Kennis met de Kickstart</h3>
                  <p className="text-gray-700 mb-3">
                    Tijdens de intro leggen we het hele Kickstart-programma uit. Je hoort precies wat je kunt verwachten,
                    hoe de begeleiding werkt en hoe we jou helpen veilig te starten.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Past het bij je? Dan plannen we meteen je eerste les in.
                  </p>
                </div>
              </div>

              {/* Stap 3 */}
              <div className="bg-white rounded-xl p-8 shadow-sm flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-jonquil rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mr-6">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Start Jouw 28-Dagen Traject</h3>
                  <p className="text-gray-700 mb-3">
                    Je start met je eerste les in een kleine, veilige groep. Onze coaches begeleiden je elke stap van de weg.
                    Vragen? Die kun je altijd stellen.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Na 28 dagen ben je klaar om door te gaan met onze reguliere lessen – of je kiest voor een ander programma.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={handlePopupClick}
                className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all shadow-lg text-lg cursor-pointer"
              >
                Plan een Gratis Intro
              </button>
              <p className="text-gray-600 text-sm mt-4">
                Het gesprek is gratis en vrijblijvend. Geen verplichtingen!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guided by certified coaches */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Guided by certified coaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Coach Max */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20max.png"
                  alt="Coach Max"
                  className="w-20 h-20 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-xl">Coach Max</h3>
                  <p className="text-cinnabar font-semibold">Kickstart Lead Coach</p>
                </div>
              </div>
              <p className="text-gray-700">
                Max is de coach die zelfs tijdens burpees blijft glimlachen. Rustig, duidelijk en positief – en hij zorgt dat jij je meteen thuis voelt.
              </p>
            </div>

            {/* Coach Annie */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/Coach%20Annie%20%20%283%29.png"
                  alt="Coach Annie"
                  className="w-20 h-20 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-xl">Coach Annie</h3>
                  <p className="text-cinnabar font-semibold">Nutrition Coach</p>
                </div>
              </div>
              <p className="text-gray-700">
                Annie is onze rustige kracht. Geen gedoe, geen drama – gewoon praktische tips die passen in je drukke leven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultaten van leden - Social proof */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Wat Zeggen Leden Over de Kickstart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">👨</div>
                <div>
                  <p className="font-bold">Matthew, 43</p>
                  <p className="text-sm text-gray-600">Father of 4 kids</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Just completed the intake month – what a great experience. Max explained everything so clearly and kept it fun. If you're thinking about it, just book. The environment is incredibly welcoming."
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">👩</div>
                <div>
                  <p className="font-bold">Liselotte, 42</p>
                  <p className="text-sm text-gray-600">Mother of a young child</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I'm so glad I started training here. After one month of small-group training and nutrition guidance, I already feel fitter and have more energy. The coaches are professional and relaxed."
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">👩</div>
                <div>
                  <p className="font-bold">Julia, 44</p>
                  <p className="text-sm text-gray-600">Mom with low energy</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "If you're hesitating: DO IT. I started the Kickstart at the end of October and it changed everything. After four weeks of coaching and community, I feel fitter, stronger and honestly happier."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde Vragen</h2>
            <div className="space-y-4">
              <details className="bg-white rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Moet ik fit zijn om de Kickstart te doen?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Absoluut niet! De Kickstart is speciaal gemaakt voor beginners die nog niet fit zijn.
                  We passen alles aan op jouw niveau en bouwen rustig op.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Hoe vaak train ik tijdens de Kickstart?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  We raden 2-3 keer per week aan voor de beste resultaten. Dat is haalbaar naast werk en gezin,
                  en geeft je lichaam genoeg tijd om te herstellen.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Is de Kickstart verplicht?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Nee, maar we raden het sterk aan! 95% van onze nieuwe leden kiest voor de Kickstart omdat het rust,
                  structuur en vertrouwen geeft. Het is de beste manier om veilig te starten.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Kan ik na de Kickstart stoppen?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Ja, je kunt maandelijks opzeggen. Maar de meeste mensen gaan graag door omdat ze merken
                  hoeveel verschil het maakt in hun energie en welzijn!
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  Train ik alleen of in een groep?
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Nee, je traint in een kleine groep van max 5 personen.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Afsluitende CTA */}
      <IntroCtaSection
        title="Benieuwd of de Kickstart bij jou past?"
        subtitle="Plan een gratis intro – geen workout, alleen een rustig gesprek en een rondleiding. We leggen je graag alles uit en beantwoorden al je vragen. Volledig vrijblijvend!"
        buttonLabel="Plan een Gratis Intro"
      />

      {/* Final note */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Heb je vragen over de Kickstart of wil je meer weten?{" "}
              <Link href={`/${locale}/contact`} className="text-cinnabar font-semibold hover:underline">
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
