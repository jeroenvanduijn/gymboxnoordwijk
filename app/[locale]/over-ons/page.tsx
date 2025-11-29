"use client";

import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import CTAButton from "@/components/CTAButton";

export default function OverOns() {
  const t = useTranslations('about');
  const locale = useLocale();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cinnabar to-cinnabar/80 text-white section-padding">
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

      {/* Waarom CrossFit Leiden anders is */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('whyDifferent.title')}</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p dangerouslySetInnerHTML={{ __html: t('whyDifferent.p1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('whyDifferent.p2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('whyDifferent.p3') }} />
              <p>{t('whyDifferent.p4')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Het verhaal achter CrossFit Leiden */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('story.title')}</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>{t('story.p1')}</p>
              <p>{t('story.p2')}</p>
              <p>{t('story.p3')}</p>
              <p>{t('story.p4')}</p>
              <p>{t('story.p5')}</p>
              <p>{t('story.p6')}</p>
              <p>{t('story.p7')}</p>
              <p>{t('story.p8')}</p>
              <p>{t('story.p9')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Onze missie voor Leiden */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('mission.title')}</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p className="text-xl font-semibold text-gray-900">
                {t('mission.statement')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waar we voor staan */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('values.community.title')}</h3>
              <p className="text-gray-700">
                {t('values.community.text')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('values.everyone.title')}</h3>
              <p className="text-gray-700 mb-4">
                {t('values.everyone.text')}
              </p>
              <div className="text-sm text-gray-600 text-left space-y-1">
                <p>{t('values.everyone.list1')}</p>
                <p>{t('values.everyone.list2')}</p>
                <p>{t('values.everyone.list3')}</p>
                <p>{t('values.everyone.list4')}</p>
                <p>{t('values.everyone.list5')}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-jonquil/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('values.personal.title')}</h3>
              <p className="text-gray-700 mb-4">
                {t('values.personal.text')}
              </p>
              <div className="text-sm text-gray-600 text-left space-y-1">
                <p>{t('values.personal.list1')}</p>
                <p>{t('values.personal.list2')}</p>
                <p>{t('values.personal.list3')}</p>
                <p>{t('values.personal.list4')}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href={`/${locale}/over-ons/team`} className="text-cinnabar font-semibold hover:underline text-lg inline-flex items-center gap-2">
              {t('values.teamLink')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cinnabar">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('cta.subtitle')}
            </p>
            <CTAButton variant="white-bg">
              {t('cta.button')}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
