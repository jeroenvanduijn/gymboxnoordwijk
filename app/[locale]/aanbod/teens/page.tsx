import Link from "next/link";
import { getLocale } from 'next-intl/server';
import IntroCtaSection from "@/components/IntroCtaSection";

export default async function Teens() {
  const locale = await getLocale();
  return (
    <>
      <section className="bg-gradient-to-r from-cinnabar to-red-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Voor Tieners (13-17 jaar)</h1>
          <p className="text-xl max-w-2xl">
            Word sterker, fitter en zelfverzekerder. Train met jouw leeftijdsgenoten in een positieve, no-judgement omgeving.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Waarom Onze Teens Lessen?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Onze lessen voor 13-17 jarigen zijn speciaal ontworpen voor middelbare scholieren.
              Dit is de perfecte leeftijd om echte kracht op te bouwen, atletische vaardigheden te ontwikkelen
              en gezonde gewoontes te creëren die je leven lang meegaan.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We trainen vergelijkbaar met volwassenen (echte gewichten, echte oefeningen) maar altijd met
              aandacht voor veiligheid, correcte techniek en passende belasting voor groeiende lichamen.
            </p>

            <div className="bg-cinnabar/10 rounded-xl p-6">
              <p className="text-gray-700">
                <strong>💡 Voor ouders:</strong> Alle coaches zijn gecertificeerd en ervaren in werken met tieners.
                We focussen op veilig kracht opbouwen zonder over-training. Ouderlijke toestemming verplicht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Wat Leer Je?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-3">Kracht & Atletiek</h3>
              <p className="text-gray-700 mb-2">
                Bouw echte spierkracht, snelheid, uithoudingsvermogen en atletische vaardigheden
              </p>
              <p className="text-sm text-gray-600">
                Perfect voor elke sport die je doet, of gewoon om fit te blijven
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">Zelfvertrouwen</h3>
              <p className="text-gray-700 mb-2">
                Zie jezelf sterker worden, persoonlijke records behalen, doelen bereiken
              </p>
              <p className="text-sm text-gray-600">
                Ontdek dat je meer kunt dan je dacht – fysiek én mentaal
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">Discipline & Focus</h3>
              <p className="text-gray-700 mb-2">
                Leer doelen stellen, hard werken en resultaten boeken
              </p>
              <p className="text-sm text-gray-600">
                Vaardigheden die ook helpen bij school, sport en later je carrière
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Positieve Community</h3>
              <p className="text-gray-700 mb-2">
                Train met anderen die ook willen groeien, zonder negativiteit of pesten
              </p>
              <p className="text-sm text-gray-600">
                Iedereen moedigt elkaar aan – ongeacht je niveau
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">📵</div>
              <h3 className="text-xl font-bold mb-3">Gezonde Afleiding</h3>
              <p className="text-gray-700 mb-2">
                Een positieve manier om energie kwijt te raken en stress te verminderen
              </p>
              <p className="text-sm text-gray-600">
                Beter dan uren achter je telefoon of game console
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">⚽</div>
              <h3 className="text-xl font-bold mb-3">Voor Elke Sport</h3>
              <p className="text-gray-700 mb-2">
                Veel sporters gebruiken CrossFit als aanvullende training (voetbal, hockey, tennis, etc.)
              </p>
              <p className="text-sm text-gray-600">
                Je wordt sterker, sneller en explosieve in je hoofdsport
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Is Dit Iets Voor Jou?</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Onze teens lessen zijn perfect als je jezelf herkent in een van deze situaties:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">✅ Je wilt sterker en fitter worden</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">✅ Je doet een sport en wilt beter worden</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">✅ Je hebt nog nooit gesport (ook oké!)</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">✅ Je zoekt een uitdaging naast school</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">✅ Je wilt trainen met leeftijdsgenoten</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">✅ Je wilt leren hoe je veilig met gewichten traint</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guided by certified coaches */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Guided by certified coaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Rochelle */}
            <div className="bg-gray-50 rounded-xl p-6">
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
                Rochelle is turncoach op nationaal niveau en brengt die expertise naar CrossFit Leiden. Ze is geweldig met tieners en helpt iedereen om bewegingen veilig te leren.
              </p>
            </div>

            {/* Natália */}
            <div className="bg-gray-50 rounded-xl p-6">
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
                Natália coacht de Teens sessies met veel energie en geduld. Ze komt uit Brazilië met een diploma in bewegingswetenschappen en weet perfect hoe ze met jonge atleten moet werken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Praktische info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Praktische Informatie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">📅 Wanneer?</h3>
                <p className="text-gray-700 mb-2">Woensdag 17:00<br/>Zaterdag 10:00</p>
                <p className="text-sm text-gray-600">
                  Kies zelf hoe vaak je komt (1x of 2x per week)
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">⏱️ Lesduur</h3>
                <p className="text-gray-700 mb-2">60 minuten per les</p>
                <p className="text-sm text-gray-600">
                  Inclusief warming-up, training en cool-down
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">💰 Prijs</h3>
                <p className="text-gray-700 mb-2">€42,50/maand (1x per week)<br/>€80/maand (2x per week)</p>
                <p className="text-sm text-gray-600">
                  Maandelijks opzegbaar
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3">👥 Groepsgrootte</h3>
                <p className="text-gray-700 mb-2">Max 15 teens per les</p>
                <p className="text-sm text-gray-600">
                  Genoeg aandacht van coaches voor iedereen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde Vragen</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Moet ik al ervaring hebben?</h3>
                <p className="text-gray-700">
                  Nee! We hebben zowel complete beginners als ervaren sporters. Alles wordt uitgelegd en aangepast op jouw niveau.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Is het niet te zwaar?</h3>
                <p className="text-gray-700">
                  We bouwen langzaam op en coaches zorgen dat je veilig traint. Sommigen tillen meer, anderen minder – iedereen op eigen niveau.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Kan ik komen als ik een andere sport doe?</h3>
                <p className="text-gray-700">
                  Zeker! Veel tieners combineren CrossFit met hun hoofdsport (voetbal, hockey, etc.). Het maakt je sterker en sneller in je sport.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Kan ik een gratis intro doen?</h3>
                <p className="text-gray-700">
                  Ja, absoluut! We beginnen altijd met een gratis intro. Zo kun je kennismaken en kijken of het bij je past zonder verplichtingen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title="Klaar om te beginnen?"
        subtitle="Plan een gratis intro. Geen ervaring nodig, gewoon kennismaken!"
        buttonLabel="Plan Gratis Intro"
      />

      {/* Final note */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Vragen of twijfel je nog?{" "}
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
