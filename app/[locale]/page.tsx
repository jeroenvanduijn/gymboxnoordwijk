"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import CTAButton from "@/components/CTAButton";
import HighLevelPopup from "@/components/HighLevelPopup";
import KickstartBlock from "@/components/KickstartBlock";
import IntroCtaSection from "@/components/IntroCtaSection";

export default function Home() {
  const t = useTranslations('home');

  return (
    <>
      {/* 1. HERO - Result-focused, beginner-reassuring */}
      <section className="relative bg-gray-900 text-white section-padding">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/hero-background-5.jpg"
            alt="CrossFit Leiden"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70 z-10"></div>
        <div className="relative z-20 container-custom">
          <div className="max-w-3xl">
            {/* Google Review Stars */}
            <div className="mb-6">
              <p className="text-yellow-400 text-lg">
                ⭐ ⭐ ⭐ ⭐ ⭐ <span className="text-white ml-2">{t('hero.googleReviews')}</span>
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {t('hero.subtitle')}
            </p>
            <CTAButton variant="hero" className="inline-block">
              {t('hero.cta')}
            </CTAButton>
            <p className="text-sm text-gray-300 mt-4">
              {t('hero.ctaNote')}
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHY CROSSFIT LEIDEN - 5 USPs for busy parents & beginners */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('why.title')}</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            {t('why.subtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* USP 1 - Personal Coaching */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('why.usp1Title')}</h3>
              <p className="text-gray-600">
                {t('why.usp1Text')}
              </p>
            </div>

            {/* USP 2 - Beginner Friendly */}
            <div className="text-center">
              <div className="w-16 h-16 bg-verdigris/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('why.usp2Title')}</h3>
              <p className="text-gray-600">
                {t('why.usp2Text')}
              </p>
            </div>

            {/* USP 3 - Warm Community */}
            <div className="text-center">
              <div className="w-16 h-16 bg-jonquil/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-jonquil" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('why.usp3Title')}</h3>
              <p className="text-gray-600">
                {t('why.usp3Text')}
              </p>
            </div>

            {/* USP 4 - Safe & Professional */}
            <div className="text-center">
              <div className="w-16 h-16 bg-chinese-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-chinese-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('why.usp4Title')}</h3>
              <p className="text-gray-600">
                {t('why.usp4Text')}
              </p>
            </div>

            {/* USP 5 - Flexible Schedule */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('why.usp5Title')}</h3>
              <p className="text-gray-600">
                {t('why.usp5Text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS - 3 Simple Steps */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('howItWorks.title')}</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Step 1 */}
            <div className="flex items-start gap-6 bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-cinnabar rounded-full flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{t('howItWorks.step1Title')}</h3>
                <p className="text-lg text-gray-700">
                  {t('howItWorks.step1Text')}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6 bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-verdigris rounded-full flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{t('howItWorks.step2Title')}</h3>
                <p className="text-lg text-gray-700 mb-3">
                  {t('howItWorks.step2Text')}
                </p>
                <p className="text-sm text-gray-600 italic">
                  {t('howItWorks.step2Note')}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6 bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-jonquil rounded-full flex items-center justify-center flex-shrink-0 text-gray-900 text-2xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{t('howItWorks.step3Title')}</h3>
                <p className="text-lg text-gray-700">
                  {t('howItWorks.step3Text')}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton variant="white-bg">
              {t('howItWorks.cta')}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* 4. KICKSTART BLOCK - 28-day Beginner Program */}
      <KickstartBlock />

      {/* 5. SOCIAL PROOF - Google Review Widget */}
      <section className="section-padding bg-white py-8 md:py-12">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t('socialProof.title')}</h2>

          {/* Google Review Widget - Fixed Container */}
          <div className="max-w-6xl mx-auto">
            <div className="relative w-full min-h-[500px] md:min-h-[400px]">
              <script type='text/javascript' src='https://reputationhub.site/reputation/assets/review-widget.js'></script>
              <iframe
                className='lc_reviews_widget'
                src='https://reputationhub.site/reputation/widgets/review_widget/s0YuoK12A9YPXCKsfUp3?widgetId=690b468e0591d2ab3477c77a'
                frameBorder='0'
                scrolling='no'
                style={{
                  minWidth: '100%',
                  width: '100%',
                  minHeight: '500px',
                  height: '100%',
                  border: 'none'
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ - 6 Common Beginner Questions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('faq.title')}</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white rounded-lg p-6 shadow-sm group">
              <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>{t('faq.q1')}</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-700 mt-4">
                {t('faq.a1')}
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white rounded-lg p-6 shadow-sm group">
              <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>{t('faq.q2')}</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-700 mt-4">
                {t('faq.a2')}
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white rounded-lg p-6 shadow-sm group">
              <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>{t('faq.q3')}</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 space-y-3">
                <p className="text-gray-700">
                  {t('faq.a3p1')}
                </p>
                <p className="text-gray-700">
                  {t('faq.a3p2')}
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white rounded-lg p-6 shadow-sm group">
              <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>{t('faq.q4')}</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-700 mt-4">
                {t('faq.a4')}
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white rounded-lg p-6 shadow-sm group">
              <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>{t('faq.q5')}</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-700 mt-4">
                {t('faq.a5')}
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-white rounded-lg p-6 shadow-sm group">
              <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>{t('faq.q6')}</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-700 mt-4">
                {t('faq.a6')}
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 7. FOOTER CTA - Warm Final Push */}
      <IntroCtaSection
        title={t('footerCta.title')}
        subtitle={t('footerCta.subtitle')}
        buttonLabel={t('footerCta.button')}
      />

      <HighLevelPopup />
    </>
  );
}
