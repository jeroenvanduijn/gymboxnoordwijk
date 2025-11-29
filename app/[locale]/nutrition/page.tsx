"use client";
import { useLocale } from 'next-intl';

import Link from "next/link";
import IntroCtaSection from "@/components/IntroCtaSection";
import CTAButton from "@/components/CTAButton";

export default function Nutrition() {
  const locale = useLocale();
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-verdigris to-teal-700 text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Eet beter. Voel je sterker. Met een plan dat bij jouw leven past.
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Persoonlijke voedingscoaching met Coach Annie. Geen strenge diëten, geen ingewikkelde plannen.
                Gewoon praktische begeleiding die werkt.
              </p>
              <CTAButton className="bg-cinnabar hover:bg-cinnabar/90">
                Plan een Gratis Intro
              </CTAButton>
              <p className="text-sm text-gray-200 mt-4">
                ✨ Warme, persoonlijke begeleiding in het hart van Leiden
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/Coach%20Annie%20%20%283%29.png"
                alt="Coach Annie"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Hoe het werkt</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Van kennismaking tot resultaat in vier simpele stappen
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-verdigris text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Plan een gratis intro</h3>
              <p className="text-gray-700">
                Een vrijblijvend kennismakingsgesprek om jouw doelen en uitdagingen te bespreken.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cinnabar text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Bepaal je persoonlijke plan</h3>
              <p className="text-gray-700">
                We kiezen samen het programma dat het beste bij jou past: 1-op-1 of groepsprogramma.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-verdigris/70 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Wekelijkse begeleiding</h3>
              <p className="text-gray-700">
                Persoonlijke check-ins, praktische tips en directe ondersteuning wanneer je het nodig hebt.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cinnabar/70 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Zie en voel het resultaat</h3>
              <p className="text-gray-700">
                Meer energie, beter slapen, sterker voelen – duurzame verandering die blijft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Coach Annie */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/Coach%20Annie%20%20%283%29.png"
                alt="Coach Annie"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Maak kennis met Coach Annie</h2>
              <p className="text-lg text-gray-700 mb-4">
                Annie is onze voedingscoach. Rustig, duidelijk en warm in haar begeleiding. Ze helpt je niet met
                strenge diëten of ingewikkelde plannen, maar met simpele stappen die passen bij jouw leven.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Geen oordeel, geen perfectie – gewoon praktische tips die werken. Annie begrijpt dat je een druk
                leven hebt en helpt je om gezonde keuzes te maken zonder dat het voelt als een extra last.
              </p>
              <CTAButton className="bg-cinnabar hover:bg-cinnabar/90">
                Plan een Gratis Intro
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Program 1: 1-on-1 Coaching */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Onze Programma's</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            {/* 1-on-1 Coaching */}
            <div className="bg-gradient-to-br from-cinnabar/10 to-cinnabar/5 rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-cinnabar/20">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">1-op-1 Coaching</h3>
              <p className="text-gray-700 mb-6">
                Volledig persoonlijk voedingsprogramma met wekelijkse begeleiding. Kies tussen data-gedreven
                (met tracking) of principes-gebaseerd (zonder tracking). Maximale ondersteuning en duidelijke resultaten.
              </p>

              <div className="bg-white/70 rounded-xl p-6 mb-6">
                <h4 className="font-bold mb-4">Dit krijg je:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-cinnabar mr-2">✓</span>
                    <span>Volledig gepersonaliseerd plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cinnabar mr-2">✓</span>
                    <span>Wekelijkse 1-op-1 check-ins</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cinnabar mr-2">✓</span>
                    <span>WhatsApp ondersteuning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cinnabar mr-2">✓</span>
                    <span>Focus op basics: eiwit, groente, beweging, calorieën</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cinnabar mr-2">✓</span>
                    <span>Hoge accountability</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-3xl font-bold text-cinnabar mb-2">€350 per maand</p>
                <p className="text-gray-600">Minimaal 2 maanden</p>
              </div>

              <p className="text-sm text-gray-700 mb-6">
                <strong>Perfect voor:</strong> Maximale begeleiding en duidelijke resultaten
              </p>

              <Link
                href={`/${locale}/contact`}
                className="block text-center bg-cinnabar text-white py-4 px-6 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all"
              >
                Neem Contact Op
              </Link>
            </div>

            {/* 28-Day Kickstart */}
            <div className="bg-gradient-to-br from-verdigris/10 to-verdigris/5 rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-verdigris/20">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Voeding Kickstart (28 dagen)</h3>
              <p className="text-gray-700 mb-4">
                Dit is hetzelfde 28-dagen Kickstart programma, maar dan alleen het voedingsdeel.
                Perfect voor zowel leden als niet-leden die een kickstart willen in hun voeding.
              </p>
              <p className="text-gray-700 mb-6">
                Groepsprogramma van 4 weken met dagelijkse check-ins en wekelijkse thema's. Simpele,
                haalbare stappen die je direct kunt toepassen.
              </p>

              <div className="bg-white/70 rounded-xl p-6 mb-6">
                <h4 className="font-bold mb-4">Dit krijg je:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-verdigris mr-2">✓</span>
                    <span>Groepsbegeleiding (max 10 personen)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-verdigris mr-2">✓</span>
                    <span>Dagelijkse check-ins via app</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-verdigris mr-2">✓</span>
                    <span>Wekelijkse thema's en focus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-verdigris mr-2">✓</span>
                    <span>Simpele, haalbare actie-stappen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-verdigris mr-2">✓</span>
                    <span>Ook te volgen zonder training (voor niet-leden)</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-3xl font-bold text-verdigris mb-2">€200 totaal</p>
                <p className="text-gray-600">28 dagen programma</p>
              </div>

              <p className="text-sm text-gray-700 mb-6">
                <strong>Perfect voor:</strong> Groepsenergie en een kickstart van 4 weken
              </p>

              <Link
                href={`/${locale}/contact`}
                className="block text-center bg-verdigris text-white py-4 px-6 rounded-lg font-semibold hover:bg-verdigris/90 transition-all"
              >
                Neem Contact Op
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Welk programma past bij jou?</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Vergelijk beide programma's en kies wat het beste bij jouw situatie past
          </p>

          {/* Desktop Table */}
          <div className="hidden md:block max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-6 text-left font-bold"></th>
                  <th className="p-6 text-center font-bold text-cinnabar text-xl">1-op-1 Coaching</th>
                  <th className="p-6 text-center font-bold text-verdigris text-xl">Voeding Kickstart</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-6 font-semibold">Structuur</td>
                  <td className="p-6 text-center bg-cinnabar/5">Volledig persoonlijk</td>
                  <td className="p-6 text-center bg-verdigris/5">Groepsprogramma</td>
                </tr>
                <tr className="border-t">
                  <td className="p-6 font-semibold">Begeleiding</td>
                  <td className="p-6 text-center bg-cinnabar/5">Wekelijkse 1-op-1 sessies</td>
                  <td className="p-6 text-center bg-verdigris/5">Dagelijkse check-ins + groep</td>
                </tr>
                <tr className="border-t">
                  <td className="p-6 font-semibold">Aanpak</td>
                  <td className="p-6 text-center bg-cinnabar/5">Data-gedreven of principes</td>
                  <td className="p-6 text-center bg-verdigris/5">Simpele actie-stappen</td>
                </tr>
                <tr className="border-t">
                  <td className="p-6 font-semibold">Prijs</td>
                  <td className="p-6 text-center bg-cinnabar/5 font-bold text-cinnabar">€350/maand</td>
                  <td className="p-6 text-center bg-verdigris/5 font-bold text-verdigris">€200 totaal</td>
                </tr>
                <tr className="border-t">
                  <td className="p-6 font-semibold">Duur</td>
                  <td className="p-6 text-center bg-cinnabar/5">Minimaal 2 maanden</td>
                  <td className="p-6 text-center bg-verdigris/5">28 dagen</td>
                </tr>
                <tr className="border-t">
                  <td className="p-6 font-semibold">Voor wie</td>
                  <td className="p-6 text-center bg-cinnabar/5">Leden en niet-leden</td>
                  <td className="p-6 text-center bg-verdigris/5">Leden en niet-leden</td>
                </tr>
                <tr className="border-t">
                  <td className="p-6 font-semibold">Perfect voor</td>
                  <td className="p-6 text-center bg-cinnabar/5">Maximale ondersteuning</td>
                  <td className="p-6 text-center bg-verdigris/5">Kickstart in groepsverband</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            <div className="bg-gradient-to-br from-cinnabar/10 to-cinnabar/5 rounded-xl p-6 border-2 border-cinnabar/20">
              <h3 className="text-xl font-bold text-cinnabar mb-4">1-op-1 Coaching</h3>
              <div className="space-y-3 text-sm">
                <div><span className="font-semibold">Structuur:</span> Volledig persoonlijk</div>
                <div><span className="font-semibold">Begeleiding:</span> Wekelijkse 1-op-1 sessies</div>
                <div><span className="font-semibold">Aanpak:</span> Data-gedreven of principes</div>
                <div><span className="font-semibold">Prijs:</span> <span className="text-cinnabar font-bold">€350/maand</span></div>
                <div><span className="font-semibold">Duur:</span> Minimaal 2 maanden</div>
                <div><span className="font-semibold">Voor wie:</span> Leden en niet-leden</div>
                <div><span className="font-semibold">Perfect voor:</span> Maximale ondersteuning</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-verdigris/10 to-verdigris/5 rounded-xl p-6 border-2 border-verdigris/20">
              <h3 className="text-xl font-bold text-verdigris mb-4">Voeding Kickstart</h3>
              <div className="space-y-3 text-sm">
                <div><span className="font-semibold">Structuur:</span> Groepsprogramma</div>
                <div><span className="font-semibold">Begeleiding:</span> Dagelijkse check-ins + groep</div>
                <div><span className="font-semibold">Aanpak:</span> Simpele actie-stappen</div>
                <div><span className="font-semibold">Prijs:</span> <span className="text-verdigris font-bold">€200 totaal</span></div>
                <div><span className="font-semibold">Duur:</span> 28 dagen</div>
                <div><span className="font-semibold">Voor wie:</span> Leden en niet-leden</div>
                <div><span className="font-semibold">Perfect voor:</span> Kickstart in groepsverband</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton className="bg-cinnabar hover:bg-cinnabar/90">
              Plan een Gratis Intro
            </CTAButton>
            <p className="text-sm text-gray-600 mt-4">
              Nog niet zeker? Tijdens de gratis intro helpen we je het juiste programma te kiezen
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Wat zeggen anderen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 relative">
              <div className="text-4xl text-cinnabar/20 mb-4">"</div>
              <p className="text-gray-700 mb-6">
                Ik stopte eindelijk met teveel nadenken over eten. Annie hielp me simpele gewoontes te bouwen
                die ik echt kon volhouden. Geen stress meer, gewoon gezonde keuzes die normaal voelen.
              </p>
              <p className="font-semibold">— Lisa, 42</p>
              <p className="text-sm text-gray-600">Moeder van 3 kinderen</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 relative">
              <div className="text-4xl text-cinnabar/20 mb-4">"</div>
              <p className="text-gray-700 mb-6">
                Ik voelde me de hele weg ondersteund. Geen oordeel, alleen praktisch advies.
                Na 4 weken had ik meer energie en voelde ik me sterker dan in jaren.
              </p>
              <p className="font-semibold">— Tom, 38</p>
              <p className="text-sm text-gray-600">Drukke ondernemer</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 relative">
              <div className="text-4xl text-cinnabar/20 mb-4">"</div>
              <p className="text-gray-700 mb-6">
                Annie hielp me begrijpen wat werkt voor mij. Niet een standaard plan, maar advies dat
                paste bij mijn leven. Het voelde makkelijk, niet als nog een to-do.
              </p>
              <p className="font-semibold">— Sandra, 45</p>
              <p className="text-sm text-gray-600">Moeder met druk werk</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Veelgestelde Vragen</h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Moet ik lid zijn van CrossFit Leiden?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Nee! Beide voedingsprogramma's zijn beschikbaar voor iedereen, ook als je niet bij ons traint.
                  Natuurlijk werkt de combinatie van training én voeding het beste, maar het is geen vereiste.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Welk programma is beter voor mij?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Dat bespreken we tijdens je gratis intro! Als je maximale ondersteuning en persoonlijke
                  aandacht wilt, is 1-op-1 coaching ideaal. Als je graag de groepsenergie voelt en een kickstart
                  van 4 weken wilt, kies dan voor de Voeding Kickstart.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Moet ik calorieën tellen of eten wegen?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Bij 1-op-1 coaching kun je kiezen: data-gedreven (met tracking) of principes-gebaseerd (zonder tracking).
                  Bij de Voeding Kickstart werken we met simpele richtlijnen en geen verplichte tracking.
                  We passen het aan op wat voor jou werkt.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Ga ik op een streng dieet?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Absoluut niet! We geloven niet in strenge diëten of extreme veranderingen. We focussen op
                  simpele, haalbare stappen: meer eiwit, meer groente, voldoende beweging en calorieën in balans.
                  Geen verboden, geen perfectie – gewoon gezonde gewoontes die blijven.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Past dit bij mijn drukke leven?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Ja! Beide programma's zijn speciaal ontworpen voor drukke mensen. We geven je praktische tips
                  die passen bij jouw leven – geen ingewikkelde meal prep of uren in de keuken.
                  Als het niet praktisch is, werkt het niet.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Is de Voeding Kickstart hetzelfde als het Kickstart programma?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  De Voeding Kickstart is hetzelfde 28-dagen programma als ons reguliere Kickstart programma,
                  maar dan alleen het voedingsdeel (zonder de training sessies). Perfect voor mensen die al ergens
                  anders trainen of eerst alleen aan hun voeding willen werken.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <IntroCtaSection
        title="Klaar om gezonder te gaan eten?"
        subtitle="Plan een gratis intro en ontdek welk voedingsprogramma het beste bij jou past. Geen verplichtingen, gewoon een goed gesprek over jouw doelen."
        buttonLabel="Plan een Gratis Intro"
      />
    </>
  );
}
