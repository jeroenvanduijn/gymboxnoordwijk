import Link from "next/link";
import { getTranslations, getLocale } from 'next-intl/server';
import IntroCtaSection from "@/components/IntroCtaSection";

export default async function Aanbod() {
  const t = await getTranslations('programs');
  const locale = await getLocale();

  return (
    <>
      {/* Hero - Result-focused */}
      <section className="bg-gradient-to-r from-verdigris to-verdigris/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-xl max-w-2xl">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Intro - Beginner Reassurance */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('intro.title')}</h2>
            <p className="text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: t('intro.subtitle') }} />
          </div>

          {/* Main Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Kickstart */}
            <div className="bg-gradient-to-br from-verdigris/10 to-verdigris/5 rounded-2xl p-8 border-2 border-verdigris relative">
              <div className="absolute top-4 right-4 bg-verdigris text-white text-xs font-bold px-3 py-1 rounded-full">
                {t('kickstart.badge')}
              </div>
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">{t('kickstart.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('kickstart.description')}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-verdigris mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{t('kickstart.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-verdigris mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{t('kickstart.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-verdigris mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{t('kickstart.feature3')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-verdigris mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{t('kickstart.feature4')}</span>
                </li>
              </ul>
              <Link href={`/${locale}/starten`} className="block text-center bg-verdigris text-white py-3 px-6 rounded-lg font-semibold hover:bg-verdigris/90 transition-all">
                {t('kickstart.link')}
              </Link>
            </div>

            {/* Groepslessen - PRIMAIR */}
            <div className="bg-gradient-to-br from-cinnabar/10 to-cinnabar/5 rounded-2xl p-8 border-2 border-cinnabar relative">
              <div className="absolute top-4 right-4 bg-cinnabar text-white text-xs font-bold px-3 py-1 rounded-full">
                {t('groupClasses.badge')}
              </div>
              <div className="text-6xl mb-4">🏋️</div>
              <h3 className="text-2xl font-bold mb-3">{t('groupClasses.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('groupClasses.description')}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cinnabar mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{t('groupClasses.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cinnabar mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{t('groupClasses.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cinnabar mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{t('groupClasses.feature3')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cinnabar mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{t('groupClasses.feature4')}</span>
                </li>
              </ul>
              <Link href={`/${locale}/aanbod/groepslessen`} className="block text-center bg-cinnabar text-white py-3 px-6 rounded-lg font-semibold hover:bg-cinnabar/90 transition-all mb-3">
                {t('groupClasses.link')}
              </Link>
              <Link href={`/${locale}/starten`} className="block text-center text-cinnabar font-semibold hover:underline">
                {t('groupClasses.ctaLink')}
              </Link>
            </div>

            {/* Private Coaching */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-6xl mb-4">👤</div>
              <h3 className="text-2xl font-bold mb-3">{t('personal.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('personal.description')}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-verdigris mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{t('personal.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-verdigris mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{t('personal.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-verdigris mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{t('personal.feature3')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-verdigris mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{t('personal.feature4')}</span>
                </li>
              </ul>
              <Link href={`/${locale}/aanbod/private-coaching`} className="block text-center bg-verdigris text-white py-3 px-6 rounded-lg font-semibold hover:bg-verdigris/90 transition-all">
                {t('personal.link')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">{t('special.title')}</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            {t('special.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Small Group Training */}
            <Link href={`/${locale}/aanbod/small-group`} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cinnabar transition-colors">{t('special.smallGroup.title')}</h3>
              <p className="text-sm text-gray-700 mb-3">
                {t('special.smallGroup.description')}
              </p>
              <p className="text-xs text-cinnabar font-semibold">Meer info →</p>
            </Link>

            {/* Hyrox */}
            <Link href={`/${locale}/aanbod/hyrox`} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cinnabar transition-colors">{t('special.hyrox.title')}</h3>
              <p className="text-sm text-gray-700 mb-3">
                {t('special.hyrox.description')}
              </p>
              <p className="text-xs text-cinnabar font-semibold">Meer info →</p>
            </Link>

            {/* Fysiofabriek */}
            <Link href={`/${locale}/aanbod/fysiofabriek`} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="text-4xl mb-3">🩺</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cinnabar transition-colors">{t('special.fysiofabriek.title')}</h3>
              <p className="text-sm text-gray-700 mb-3">
                {t('special.fysiofabriek.description')}
              </p>
              <p className="text-xs text-cinnabar font-semibold">Meer info →</p>
            </Link>

            {/* Nutrition */}
            <Link href={`/${locale}/contact`} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="text-4xl mb-3">🍎</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cinnabar transition-colors">{t('special.nutrition.title')}</h3>
              <p className="text-sm text-gray-700 mb-3">
                {t('special.nutrition.description')}
              </p>
              <p className="text-xs text-cinnabar font-semibold">Meer info →</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Youth Programs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">{t('youth.title')}</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            {t('youth.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link href={`/${locale}/aanbod/pre-teens`} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="text-5xl mb-4 text-center">👧👦</div>
              <h3 className="text-xl font-bold mb-2 text-center">{t('youth.preTeens.title')}</h3>
              <p className="text-gray-700 text-center text-sm">
                {t('youth.preTeens.description')}
              </p>
            </Link>

            <Link href={`/${locale}/aanbod/teens`} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="text-5xl mb-4 text-center">🧑‍🎓</div>
              <h3 className="text-xl font-bold mb-2 text-center">{t('youth.teens.title')}</h3>
              <p className="text-gray-700 text-center text-sm">
                {t('youth.teens.description')}
              </p>
            </Link>

            <Link href={`/${locale}/aanbod/sport-performance`} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="text-5xl mb-4 text-center">⚽</div>
              <h3 className="text-xl font-bold mb-2 text-center">{t('youth.sportPerformance.title')}</h3>
              <p className="text-gray-700 text-center text-sm">
                {t('youth.sportPerformance.description')}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Schedule Times Highlight */}
      <section className="section-padding bg-verdigris/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('schedule.title')}</h2>
            <p className="text-lg text-gray-700 mb-8">
              {t('schedule.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6">
                <div className="text-3xl mb-2">🌅</div>
                <h4 className="font-semibold mb-1">{t('schedule.morning')}</h4>
                <p className="text-gray-600">{t('schedule.morningTime')}</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-3xl mb-2">☀️</div>
                <h4 className="font-semibold mb-1">{t('schedule.afternoon')}</h4>
                <p className="text-gray-600">{t('schedule.afternoonTime')}</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-3xl mb-2">🌙</div>
                <h4 className="font-semibold mb-1">{t('schedule.evening')}</h4>
                <p className="text-gray-600">{t('schedule.eveningTime')}</p>
              </div>
            </div>
            <Link href={`/${locale}/rooster`} className="inline-block bg-verdigris text-white px-8 py-4 rounded-lg font-semibold hover:bg-verdigris/90 transition-all">
              {t('schedule.link')}
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">{t('whyUs.title')}</h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              {t('whyUs.subtitle')}
            </p>
            <div className="bg-gray-50 rounded-xl p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cinnabar mr-3 text-2xl flex-shrink-0">✓</span>
                  <div dangerouslySetInnerHTML={{ __html: t('whyUs.feature1') }} />
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-3 text-2xl flex-shrink-0">✓</span>
                  <div dangerouslySetInnerHTML={{ __html: t('whyUs.feature2') }} />
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-3 text-2xl flex-shrink-0">✓</span>
                  <div dangerouslySetInnerHTML={{ __html: t('whyUs.feature3') }} />
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-3 text-2xl flex-shrink-0">✓</span>
                  <div dangerouslySetInnerHTML={{ __html: t('whyUs.feature4') }} />
                </li>
                <li className="flex items-start">
                  <span className="text-cinnabar mr-3 text-2xl flex-shrink-0">✓</span>
                  <div dangerouslySetInnerHTML={{ __html: t('whyUs.feature5') }} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title={t('cta.title')}
        subtitle={t('cta.subtitle')}
        buttonLabel={t('cta.button')}
      />
    </>
  );
}
