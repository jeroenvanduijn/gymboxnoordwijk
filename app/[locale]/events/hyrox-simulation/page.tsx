import Link from "next/link";

export default function HyroxSimulation() {
  return (
    <>
      <section className="bg-gradient-to-r from-cinnabar to-red-700 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hyrox Simulation 🏆</h1>
          <p className="text-xl max-w-2xl">
            Volledige Hyrox race simulatie in onze box. Test jezelf, train met een doel, claim je medal!
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wat is onze Hyrox Simulation?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Onze Hyrox Simulation is een volledig in-house Hyrox race event. Je doorloopt alle 8 officiële Hyrox stations
              in hetzelfde format als een echte Hyrox race: 8 rondes van 1km running + station.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Perfect als voorbereiding voor een officiële Hyrox race, of gewoon als ultimate challenge voor jezelf!
            </p>
            <div className="text-center">
              <a
                href="https://hyrox.crossfitleiden.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all shadow-lg"
              >
                Ga naar HYROX Sim Website
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Event Format</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Het Parcours</h3>
              <div className="space-y-4">
                {[
                  '1km Run → SkiErg (1000m)',
                  '1km Run → Sled Push (50m)',
                  '1km Run → Sled Pull (50m)',
                  '1km Run → Burpee Broad Jump (80m)',
                  '1km Run → Rowing (1000m)',
                  '1km Run → Farmers Carry (200m)',
                  '1km Run → Sandbag Lunges (100m)',
                  '1km Run → Wall Balls (100 reps)'
                ].map((station, i) => (
                  <div key={i} className="flex items-center gap-4 pb-4 border-b border-gray-200 last:border-0">
                    <div className="w-8 h-8 bg-cinnabar rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-gray-700">{station}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">🏃 Solo Division</h3>
                <p className="text-gray-700">Doe de volledige race individueel. Voor de echte warriors!</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">👥 Doubles Division</h3>
                <p className="text-gray-700">Doe het met een partner - verdeel de stations zoals je wilt!</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">✂️ Halve Race</h3>
                <p className="text-gray-700">Nog niet klaar voor de volledige afstand? Doe de halve race!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Voor wie?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-cinnabar/5 rounded-lg p-4">
                <p className="text-gray-700">✅ Voorbereiding voor officiële Hyrox race</p>
              </div>
              <div className="bg-cinnabar/5 rounded-lg p-4">
                <p className="text-gray-700">✅ Challenge jezelf en test je grenzen</p>
              </div>
              <div className="bg-cinnabar/5 rounded-lg p-4">
                <p className="text-gray-700">✅ Team building met collega's of vrienden</p>
              </div>
              <div className="bg-cinnabar/5 rounded-lg p-4">
                <p className="text-gray-700">✅ Nieuwe fitness goal nastreven</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cinnabar/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Hyrox Simulation Events</h2>
            <div className="bg-white rounded-xl p-8 mb-6">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-4">Ervaar de Volledige HYROX Race</h3>
              <p className="text-lg text-gray-700 mb-6">
                Regelmatig organiseren we HYROX simulaties in onze box. 8 rondes van 1km rennen + alle 8 stations,
                of kies voor de halve race als je daar nog niet klaar voor bent.
              </p>
              <div className="space-y-2 text-left max-w-md mx-auto mb-6">
                <p className="text-gray-700">🏃 <strong>Opties:</strong> Volledige race, halve race</p>
                <p className="text-gray-700">👥 <strong>Divisions:</strong> Solo of Doubles</p>
                <p className="text-gray-700">🏅 <strong>Included:</strong> Finisher medal, professionele timing, rankings, foto's</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Wil je meedoen maar heb je nog nooit Hyrox gedaan? Sluit je aan bij onze{" "}
              <Link href="/aanbod/hyrox" className="text-cinnabar font-semibold hover:underline">
                Hyrox trainingen
              </Link>
              !
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meer Informatie & Inschrijven</h2>
          <p className="text-xl mb-8">Check de officiële HYROX Simulation website voor data en inschrijving!</p>
          <a
            href="https://hyrox.crossfitleiden.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-cinnabar px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block"
          >
            Ga naar HYROX Sim Website
          </a>
        </div>
      </section>
    </>
  );
}
