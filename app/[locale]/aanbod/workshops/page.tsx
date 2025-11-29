import Link from "next/link";
import { getLocale } from 'next-intl/server';
import IntroCtaSection from "@/components/IntroCtaSection";

export default async function Workshops() {
  const locale = await getLocale();
  return (
    <>
      <section className="bg-gradient-to-r from-chinese-violet to-purple-700 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Workshops & Speciale Trainingen</h1>
          <p className="text-xl max-w-2xl">
            Verdiep je kennis, leer nieuwe skills en word beter in specifieke bewegingen of onderwerpen.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat Zijn Onze Workshops?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Naast onze reguliere lessen organiseren we regelmatig workshops en speciale trainingen.
              Dit zijn gerichte sessies van 1-3 uur waarin we dieper ingaan op specifieke onderwerpen, technieken of bewegingen.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Perfect voor leden die een skill willen verbeteren, beginners die extra uitleg willen,
              of iedereen die zich wil verdiepen in een specifiek onderwerp.
            </p>

            <div className="bg-chinese-violet/10 rounded-xl p-6">
              <p className="text-gray-700">
                <strong>💡 Voor iedereen:</strong> Workshops zijn toegankelijk voor alle niveaus –
                van complete beginners tot gevorderde atleten. We geven altijd verschillende opties.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Voorbeelden van Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🏋️</div>
              <h3 className="text-xl font-bold mb-3">Gewichtheffen Basis</h3>
              <p className="text-gray-700 mb-3">
                Leer de fundamenten van Olympic weightlifting: de snatch en clean & jerk.
              </p>
              <p className="text-sm text-gray-600">
                Techniek, progressie en veiligheid staan centraal
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🤸</div>
              <h3 className="text-xl font-bold mb-3">Gymnastics Skills</h3>
              <p className="text-gray-700 mb-3">
                Pull-ups, handstands, muscle-ups – leer hoe je deze bewegingen opbouwt.
              </p>
              <p className="text-sm text-gray-600">
                Van beginner tot gevorderd, iedereen op eigen niveau
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-xl font-bold mb-3">Mobility & Bewegelijkheid</h3>
              <p className="text-gray-700 mb-3">
                Verbeter je mobiliteit, voorkom blessures en beweeg vrijer.
              </p>
              <p className="text-sm text-gray-600">
                Praktische oefeningen voor dagelijks gebruik
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🍎</div>
              <h3 className="text-xl font-bold mb-3">Voeding & Lifestyle</h3>
              <p className="text-gray-700 mb-3">
                Leer de basis van gezonde voeding, meal prep en hoe je energie optimaliseert.
              </p>
              <p className="text-sm text-gray-600">
                Simpele, haalbare tips voor drukke ouders
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🏃</div>
              <h3 className="text-xl font-bold mb-3">Running & Endurance</h3>
              <p className="text-gray-700 mb-3">
                Verbeter je hardlooptechniek en bouw conditie op.
              </p>
              <p className="text-sm text-gray-600">
                Voor beginners én ervaren hardlopers
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-3">Kracht Fundamenten</h3>
              <p className="text-gray-700 mb-3">
                Squat, deadlift, bench press – de basis van krachtontwikkeling.
              </p>
              <p className="text-sm text-gray-600">
                Techniek en progressie voor veilig sterker worden
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Praktische Informatie</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">📅 Wanneer zijn workshops?</h3>
                <p className="text-gray-700">
                  We organiseren regelmatig workshops in het weekend of op doordeweekse avonden.
                  Het schema wordt maandelijks bekend gemaakt via WhatsApp, email en Instagram.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">💰 Wat kosten workshops?</h3>
                <p className="text-gray-700">
                  Voor leden zijn de meeste workshops gratis of tegen gereduceerd tarief (€10-€25).
                  Niet-leden zijn ook welkom tegen een hoger tarief. Check de specifieke workshop voor details.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">👥 Hoe meld ik me aan?</h3>
                <p className="text-gray-700">
                  Aanmelden gaat via onze WhatsApp groep, Instagram of email. Plekken zijn beperkt (meestal 8-15 personen)
                  dus wees er snel bij!
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">🎯 Moet ik lid zijn?</h3>
                <p className="text-gray-700">
                  Nee, ook niet-leden kunnen deelnemen aan workshops. Wel zijn de kosten hoger voor niet-leden en hebben
                  leden voorrang bij aanmelden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Aankomende Workshops</h2>
            <div className="bg-white rounded-xl p-8">
              <p className="text-lg text-gray-700 mb-4">
                We updaten ons workshop-schema maandelijks. Wil je op de hoogte blijven?
              </p>
              <p className="text-gray-600">
                Volg ons op Instagram{" "}
                <a href="https://instagram.com/crossfitleiden" className="text-cinnabar font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                  @crossfitleiden
                </a>
                {" "}of meld je aan voor onze nieuwsbrief.
              </p>
            </div>
          </div>
        </div>
      </section>

      <IntroCtaSection
        title="Interesse in Onze Workshops?"
        subtitle="Word lid en krijg toegang tot alle workshops. Plan een gratis intro en ontdek wat CrossFit Leiden voor jou kan betekenen!"
        buttonLabel="Plan een Gratis Intro"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Vragen over workshops of wil je een specifieke workshop voorstellen?{" "}
              <Link href={`/${locale}/contact`} className="text-chinese-violet font-semibold hover:underline">
                Neem contact met ons op
              </Link>
              {" "}– we horen graag van je!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
