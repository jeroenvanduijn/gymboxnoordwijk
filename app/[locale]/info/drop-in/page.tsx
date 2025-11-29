"use client";

import { useTranslations } from 'next-intl';

export default function DropIn() {
  const t = useTranslations('dropIn');
  const sportbitUrl = "https://crossfitleiden.sportbitapp.nl/web/nl/dropinplanner/kalender";

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-jonquil to-yellow-600 text-gray-900 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-xl max-w-2xl mb-8">
            {t('hero.subtitle')}
          </p>
          <a
            href={sportbitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 bg-white text-cinnabar border-2 border-cinnabar hover:bg-gray-50"
          >
            {t('hero.cta')}
          </a>
        </div>
      </section>

      {/* Hoe werkt het? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('howItWorks.title')}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">1</div>
                <div>
                  <h3 className="font-bold text-xl mb-3">{t('howItWorks.step1Title')}</h3>
                  <p className="text-gray-700 mb-3" dangerouslySetInnerHTML={{ __html: t('howItWorks.step1Text') }} />
                  <ul className="text-gray-700 space-y-2">
                    <li dangerouslySetInnerHTML={{ __html: t('howItWorks.step1Option1') }} />
                    <li dangerouslySetInnerHTML={{ __html: t('howItWorks.step1Option2') }} />
                  </ul>
                  <p className="text-gray-600 text-sm mt-3">{t('howItWorks.step1Note')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">2</div>
                <div>
                  <h3 className="font-bold text-xl mb-3">{t('howItWorks.step2Title')}</h3>
                  <p className="text-gray-700">
                    {t('howItWorks.step2Text')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">3</div>
                <div>
                  <h3 className="font-bold text-xl mb-3">{t('howItWorks.step3Title')}</h3>
                  <p className="text-gray-700">
                    {t('howItWorks.step3Text')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Praktische Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('practicalInfo.title')}</h2>
            <div className="bg-white rounded-xl p-8 space-y-6 shadow-lg">
              <div>
                <h3 className="font-bold text-lg mb-3">{t('practicalInfo.priceTitle')}</h3>
                <ul className="text-gray-700 space-y-1 mb-3">
                  <li dangerouslySetInnerHTML={{ __html: '• ' + t('practicalInfo.price1') }} />
                  <li dangerouslySetInnerHTML={{ __html: '• ' + t('practicalInfo.price2') }} />
                  <li dangerouslySetInnerHTML={{ __html: '• ' + t('practicalInfo.price3') }} />
                </ul>
                <p className="text-sm text-gray-600">{t('practicalInfo.priceNote')}</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">{t('practicalInfo.whatToBringTitle')}</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• {t('practicalInfo.bring1')}</li>
                  <li>• {t('practicalInfo.bring2')}</li>
                  <li>• {t('practicalInfo.bring3')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('faq.title')}</h2>
            <div className="space-y-4">
              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  {t('faq.q1')}
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  {t('faq.a1')}
                </p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  {t('faq.q2')}
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  {t('faq.a2')}
                </p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  {t('faq.q3')}
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  {t('faq.a3')}
                </p>
              </details>

              <details className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  {t('faq.q4')}
                  <span className="text-cinnabar text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  {t('faq.a4')}
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Afsluitende CTA */}
      <section className="section-padding bg-gradient-to-r from-jonquil to-yellow-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{t('cta.title')}</h2>
          <p className="text-xl mb-8 text-gray-900 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <a
            href={sportbitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 bg-white text-cinnabar border-2 border-cinnabar hover:bg-gray-50"
          >
            {t('cta.button')}
          </a>
        </div>
      </section>
    </>
  );
}
