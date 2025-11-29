"use client";

import { useTranslations } from 'next-intl';
import IntroCtaSection from "@/components/IntroCtaSection";

export default function TeamPage() {
  const t = useTranslations('team');

  const coaches = [
    {
      key: "saskia",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/saskia.png"
    },
    {
      key: "rochelle",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20rochelle.png"
    },
    {
      key: "jeffrey",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20jef.png"
    },
    {
      key: "jari",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20jari.png"
    },
    {
      key: "max",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20max.png"
    },
    {
      key: "natalia",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/Coach%20Natalia.png"
    },
    {
      key: "annie",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/Coach%20Annie%20%20%283%29.png"
    },
    {
      key: "sem",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/coach%20sem.png"
    },
    {
      key: "erin",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/Coach%20Erin.png"
    },
    {
      key: "hoite",
      image: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/hoite.png"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-verdigris to-verdigris/80 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Owners Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              {t('owners.intro')}
            </p>

            <div className="bg-gray-50 rounded-2xl overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/coaches/jeroen%20en%20kees.png"
                    alt="Jeroen van Duijn & Kees Houwaart"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">{t('owners.title')}</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg text-cinnabar mb-2">{t('owners.kees.name')}</h4>
                      <p className="text-gray-700 leading-relaxed">
                        {t('owners.kees.bio')}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg text-cinnabar mb-2">{t('owners.jeroen.name')}</h4>
                      <p className="text-gray-700 leading-relaxed">
                        {t('owners.jeroen.bio')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8">
                <div className="bg-white rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    {t('owners.story')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-verdigris/10 rounded-xl p-6 text-center">
              <p className="text-gray-700">
                {t('owners.meetCta')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('coaches.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coaches.map((coach) => (
              <div key={coach.key} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-200 flex items-center justify-center overflow-hidden">
                  {coach.image ? (
                    <img
                      src={coach.image}
                      alt={t(`coaches.${coach.key}.name`)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-6xl">👤</span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{t(`coaches.${coach.key}.name`)}</h3>
                  <p className="text-cinnabar font-semibold mb-4">{t(`coaches.${coach.key}.role`)}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{t(`coaches.${coach.key}.story`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Coaches Matter */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('whyMatters.title')}</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>{t('whyMatters.p1')}</p>
            <p>{t('whyMatters.p2')}</p>
            <p>{t('whyMatters.p3')}</p>
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
