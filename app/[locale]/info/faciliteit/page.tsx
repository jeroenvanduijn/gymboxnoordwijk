import Link from "next/link";
import { getLocale } from 'next-intl/server';

export default async function Faciliteit() {
  const locale = await getLocale();
  return (
    <>
      <section className="bg-gradient-to-r from-cinnabar to-orange-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">De Faciliteit 🏢</h1>
          <p className="text-xl max-w-2xl">
            Ontdek onze box: modern, compleet en gemaakt voor een geweldige trainervaring.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Welkom in onze Box</h2>
            <p className="text-lg text-gray-700 mb-4">
              CrossFit Leiden is gevestigd aan de Rooseveltstraat 49C in Leiden, op het bedrijventerrein Roosevelt.
              Onze ruime box van 400m² biedt alle equipment en voorzieningen die je nodig hebt voor een complete CrossFit ervaring.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Equipment & Faciliteiten</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">💪 Kracht Equipment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 12 Power racks met pull-up bars</li>
                <li>• Olympic barbells & bumper plates</li>
                <li>• Dumbbells (5-50kg)</li>
                <li>• Kettlebells (8-32kg)</li>
                <li>• Competition bumpers</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">🏃 Cardio Equipment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 10 Concept2 rowers</li>
                <li>• 6 Assault bikes</li>
                <li>• 4 SkiErgs</li>
                <li>• Running track buiten</li>
                <li>• Jump ropes</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">🎯 Overige Equipment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• GHD machines</li>
                <li>• Sleds & prowlers</li>
                <li>• Wall balls & medicine balls</li>
                <li>• Plyo boxes (diverse hoogtes)</li>
                <li>• Battle ropes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🚿</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Kleedkamers & Douches</h3>
                <p className="text-gray-700">Schone, ruime kleedkamers met douches en lockers</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">☕</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Lounge Area</h3>
                <p className="text-gray-700">Gezellige lounge met koffie en thee voor/na de training</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">🚗</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Gratis Parkeren</h3>
                <p className="text-gray-700">Ruim parkeerterrein direct voor de deur</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">📶</div>
              <div>
                <h3 className="font-bold text-lg mb-1">WiFi</h3>
                <p className="text-gray-700">Gratis WiFi in de hele box</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Locatie & Bereikbaarheid</h2>
            <div className="bg-white rounded-xl p-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">📍 Adres</h3>
                  <p className="text-gray-700">Rooseveltstraat 49C, 2321 BL Leiden</p>
                  <p className="text-sm text-gray-600">(Bedrijventerrein Roosevelt, 1e etage)</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">🚗 Met de auto</h3>
                  <p className="text-gray-700">Gratis parkeren voor de deur. Vanaf A4 afrit Leiden 5 minuten</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">🚴 Met de fiets</h3>
                  <p className="text-gray-700">Vanaf Leiden Centraal ~10 minuten fietsen</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">🚌 Openbaar vervoer</h3>
                  <p className="text-gray-700">Bus 43 stopt om de hoek</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cinnabar text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Kom langs!</h2>
          <p className="text-xl mb-8">Loop gerust eens binnen om de box te zien - de koffie staat klaar.</p>
          <Link href={`/${locale}/contact`} className="bg-white text-cinnabar px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block">
            Plan een Rondleiding
          </Link>
        </div>
      </section>
    </>
  );
}
