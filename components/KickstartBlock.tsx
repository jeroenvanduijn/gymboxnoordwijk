"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';
import CTAButton from "./CTAButton";

export default function KickstartBlock() {
  const t = useTranslations('kickstartBlock');

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t('title')}
          </h2>

          {/* Hero Image */}
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-lg">
            <Image
              src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/hero-background-6.jpg"
              alt={t('imageAlt')}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {t('description')}
          </p>
          <p className="text-base text-gray-600 leading-relaxed bg-jonquil/10 rounded-lg p-4">
            <span dangerouslySetInnerHTML={{ __html: t('important') }} />
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16 max-w-5xl mx-auto">
          {/* Voor wie is het */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-5">
              {t('forWho.title')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-verdigris flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{t('forWho.item1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-verdigris flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{t('forWho.item2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-verdigris flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{t('forWho.item3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-verdigris flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{t('forWho.item4')}</span>
              </li>
            </ul>
          </div>

          {/* Wat zit erin */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-5">
              {t('whatsIncluded.title')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-jonquil flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                </svg>
                <span className="text-gray-700">{t('whatsIncluded.item1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-jonquil flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                </svg>
                <span className="text-gray-700">{t('whatsIncluded.item2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-jonquil flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                </svg>
                <span className="text-gray-700">{t('whatsIncluded.item3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-jonquil flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                </svg>
                <span className="text-gray-700">{t('whatsIncluded.item4')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Hoe werkt het - Korter & scanbaarder */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('howToStart.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Stap 1 */}
            <div className="text-center">
              <div className="w-14 h-14 bg-jonquil rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-gray-900">1</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {t('howToStart.step1Title')}
              </h4>
              <p className="text-gray-600 text-sm">
                {t('howToStart.step1Text')}
              </p>
            </div>

            {/* Stap 2 */}
            <div className="text-center">
              <div className="w-14 h-14 bg-verdigris rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {t('howToStart.step2Title')}
              </h4>
              <p className="text-gray-600 text-sm">
                {t('howToStart.step2Text')}
              </p>
            </div>

            {/* Stap 3 */}
            <div className="text-center">
              <div className="w-14 h-14 bg-cinnabar rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {t('howToStart.step3Title')}
              </h4>
              <p className="text-gray-600 text-sm">
                {t('howToStart.step3Text')}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials - Nieuwe reviews */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('testimonials.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Matthew */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-3">
                <svg className="w-7 h-7 text-jonquil/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                {t('testimonials.matthew.text')}
              </p>
              <p className="text-gray-900 font-semibold">{t('testimonials.matthew.name')}</p>
              <p className="text-gray-500 text-sm">{t('testimonials.matthew.subtitle')}</p>
            </div>

            {/* Liselotte */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-3">
                <svg className="w-7 h-7 text-jonquil/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                {t('testimonials.liselotte.text')}
              </p>
              <p className="text-gray-900 font-semibold">{t('testimonials.liselotte.name')}</p>
              <p className="text-gray-500 text-sm">{t('testimonials.liselotte.subtitle')}</p>
            </div>

            {/* Julia */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-3">
                <svg className="w-7 h-7 text-jonquil/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                {t('testimonials.julia.text')}
              </p>
              <p className="text-gray-900 font-semibold">{t('testimonials.julia.name')}</p>
              <p className="text-gray-500 text-sm">{t('testimonials.julia.subtitle')}</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t('cta.title')}
          </h3>
          <p className="text-gray-700 mb-6">
            {t('cta.subtitle')}
          </p>
          <CTAButton variant="white-bg">
            {t('cta.button')}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
