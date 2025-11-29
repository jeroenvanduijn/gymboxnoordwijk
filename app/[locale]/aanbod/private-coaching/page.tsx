import Link from "next/link";
import { getLocale } from 'next-intl/server';
import IntroCtaSection from "@/components/IntroCtaSection";

export default async function PrivateCoaching() {
  const locale = await getLocale();
  return (
    <>
      <section className="bg-gradient-to-r from-chinese-violet to-purple-700 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Private Coaching: 1-op-1 Begeleiding</h1>
          <p className="text-xl max-w-2xl">
            Persoonlijke training op jouw tijd, helemaal afgestemd op jouw doelen en situatie.
            Perfect als je specifieke aandacht nodig hebt of graag in je eigen tempo werkt.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is Private Coaching?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Bij private coaching train je 1-op-1 met een van onze coaches. Geen groep, geen afleiding –
              alleen jij en je coach die 100% gefocust is op jouw vooruitgang, techniek en doelen.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Elke sessie wordt volledig afgestemd op jou: wat je wilt bereiken, waar je mee worstelt,
              en wat past bij je lichaam en je leven. Flexibele tijden, op jouw tempo, met maximale resultaten.
            </p>

            <div className="bg-chinese-violet/10 rounded-xl p-6">
              <p className="text-gray-700">
                <strong>💡 Goed om te weten:</strong> Private coaching is duurder dan groepslessen, maar levert vaak
                sneller resultaat op doordat alles 100% op jou is afgestemd. Veel mensen combineren het:
                1-2x private + groepslessen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Voordelen van 1-op-1 Coaching</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Volledig Persoonlijk Programma</h3>
              <p className="text-gray-700 mb-3">
                Jouw training wordt 100% afgestemd op jouw doelen, blessures, beperkingen en voorkeuren
              </p>
              <p className="text-sm text-gray-600">
                Of je nu wilt afvallen, sterker worden, of herstellen van een blessure – je coach maakt een plan specifiek voor jou
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold mb-3">Volledige Aandacht</h3>
              <p className="text-gray-700 mb-3">
                Je coach kijkt elke seconde naar jouw techniek en geeft direct feedback
              </p>
              <p className="text-sm text-gray-600">
                Geen wachten tot de coach bij jou is zoals in groepslessen – alle aandacht gaat naar jou
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3">Flexibele Planning</h3>
              <p className="text-gray-700 mb-3">
                Train wanneer het jou uitkomt – ochtend vroeg, middag pauze, of 's avonds laat
              </p>
              <p className="text-sm text-gray-600">
                Perfect voor onregelmatige werkschema's of als groepslestijden niet bij je passen
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Sneller Resultaat</h3>
              <p className="text-gray-700 mb-3">
                Doordat alles op jou is afgestemd, bereik je doelen vaak veel sneller
              </p>
              <p className="text-sm text-gray-600">
                Minder tijd verspillen aan oefeningen die niet bij je passen – elke minuut telt
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🤫</div>
              <h3 className="text-xl font-bold mb-3">Geen Groepsdruk</h3>
              <p className="text-gray-700 mb-3">
                Perfect als je onzeker bent, liever niet in een groep werkt, of extra tijd nodig hebt
              </p>
              <p className="text-sm text-gray-600">
                Niemand die meekijkt – alleen jij en je coach in een veilige, ondersteunende omgeving
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3">Techniek Perfectie</h3>
              <p className="text-gray-700 mb-3">
                Leer bewegingen perfect uitvoeren voordat je aan intensiteit toevoegt
              </p>
              <p className="text-sm text-gray-600">
                Ideaal om sterke fundamenten te leggen of om slechte gewoontes te doorbreken
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Is Private Coaching iets voor jou?</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Private coaching is perfect als je jezelf herkent in een van deze situaties:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Herstel van een blessure met specifieke beperkingen</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Onzeker of nerveus om in een groep te trainen</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Onregelmatig werkschema waardoor groepslessen niet passen</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Specifiek doel (afvallen, sterker, wedstrijd) met tijdslimiet</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Complete beginner die techniek perfect wil leren</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700">✅ Extra aandacht nodig voor specifieke bewegingen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guided by certified coaches */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Guided by certified coaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                Natália komt uit Brazilië met een diploma in bewegingswetenschappen. Ze brengt creativiteit en positiviteit naar elke sessie en coacht met veel energie en geduld.
              </p>
            </div>

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
                Rochelle is turncoach op nationaal niveau en brengt die expertise naar CrossFit Leiden. Ze helpt iedereen om bewegingen veilig en effectief te leren.
              </p>
            </div>

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
                Jari helpt leden met pijn, beperkte mobiliteit of techniek. Als je ergens last van hebt, is de kans groot dat Jari je kan helpen dit op te lossen.
              </p>
            </div>

            {/* Jeffrey */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20jef.png"
                  alt="Jeffrey Perez"
                  className="w-16 h-16 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-bold text-lg">Jeffrey Perez</h3>
                  <p className="text-cinnabar text-sm font-semibold">GetShredded Lead Coach</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Jeffrey was profvoetballer voordat hij CrossFit coach werd. Hij past zijn coaching aan op wat jij nodig hebt, of je nu uitdaging zoekt of juist rustig wilt opbouwen.
              </p>
            </div>

            {/* Annie */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/Coach%20Annie%20%20%283%29.png"
                  alt="Annie"
                  className="w-16 h-16 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-bold text-lg">Annie</h3>
                  <p className="text-cinnabar text-sm font-semibold">Voedingscoach</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Annie helpt leden met praktische voedingsadviezen die passen bij een druk leven. Geen extreme diëten, maar simpele stappen die werken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pakketten & Tarieven */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Pakketten & Tarieven</h2>

            {/* Punchcards */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Personal Training Punchcards</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* 60 min */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">60 minuten PT</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">5 sessies</span>
                      <span className="text-xl font-bold text-[#E25C2A]">€450</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">10 sessies</span>
                      <span className="text-xl font-bold text-[#E25C2A]">€800</span>
                    </div>
                  </div>
                </div>

                {/* 30 min */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">30 minuten PT</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">5 sessies</span>
                      <span className="text-xl font-bold text-[#E25C2A]">€225</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">10 sessies</span>
                      <span className="text-xl font-bold text-[#E25C2A]">€400</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly Private Coaching */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Monthly Private Coaching</h3>
              <p className="text-gray-700 mb-4">
                Elke maand een privé coachmoment waarin je werkt aan techniek, kracht, mobiliteit of herstel.
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Skill 1</span>
                  <span className="text-xl font-bold text-[#E25C2A]">€90 p/m</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Skill 2</span>
                  <span className="text-xl font-bold text-[#E25C2A]">€175 p/m</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Skill 4</span>
                  <span className="text-xl font-bold text-[#E25C2A]">€370 p/m</span>
                </div>
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
            <div className="space-y-4">
              <details className="bg-white rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Hoe vaak moet ik trainen voor resultaat?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Dat hangt van je doel af. Voor techniek leren: 5-10 sessies is vaak genoeg. Voor blijvende resultaten
                  (afvallen, sterker): minimaal 1x per week voor 8-12 weken. Veel mensen starten met 2x per week en
                  schalen af naar 1x per week onderhoud.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Welke coach krijg ik?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Tijdens het intakegesprek bespreken we jouw doelen en koppelen we je aan de coach die het beste bij je past
                  (bijv. specialisatie in blessures, afvallen, of kracht). Je houdt dezelfde coach voor continuïteit.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Kan ik later overstappen naar groepslessen?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Absoluut! Veel mensen starten met private coaching om techniek te leren en stappen daarna over naar
                  groepslessen. We helpen je graag met de overgang op het juiste moment.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Hoe flexibel is het plannen?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Zeer flexibel! Je spreekt tijden af met je coach die bij jullie beiden passen. Annuleren kan tot
                  24 uur van tevoren. Ideaal voor onregelmatige schema's.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Wat als ik niet tevreden ben?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Na de eerste sessie kun je kosteloos stoppen als het niet bij je past. Daarna geldt voor pakketten:
                  ongebruikte sessies kun je binnen 3 maanden omzetten of terugkrijgen (minus €25 administratie).
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Krijg ik ook een voedingsplan?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  Op verzoek wel! Vooral bij doelen zoals afvallen combineren we training met voedingsadvies.
                  Dit is inclusief in de prijs – geen extra kosten.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title="Klaar voor persoonlijke begeleiding?"
        subtitle="Start met een gratis intakegesprek (30 min). We bespreken jouw doelen, welke coach bij je past, en stellen een plan op. Daarna kun je beslissen of private coaching iets voor jou is. Geen verplichtingen!"
        buttonLabel="Boek Gratis Intakegesprek"
      />

      {/* Final note */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Vragen over private coaching of twijfel je tussen groepslessen en 1-op-1?{" "}
              <Link href={`/${locale}/contact`} className="text-chinese-violet font-semibold hover:underline">
                Neem contact met ons op
              </Link>
              {" "}– we helpen je graag de juiste keuze maken!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
