"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import IntroCtaSection from "@/components/IntroCtaSection";

export default function Rooster() {
  const t = useTranslations('schedule');
  const locale = useLocale();
  const [activeRooster, setActiveRooster] = useState<'groepslessen' | 'small-group'>('groepslessen');

  useEffect(() => {
    // Wait for embed_rooster to be available, then initialize the active schedule
    const checkAndInit = () => {
      if (typeof window !== 'undefined' && (window as any).embed_rooster) {
        // Clear the container first
        const container = document.getElementById('sportbit-rooster');
        if (container) {
          container.innerHTML = '&nbsp;';
        }

        // Initialize the appropriate category based on active rooster
        const category = activeRooster === 'groepslessen' ? 7 : 1;
        (window as any).embed_rooster.init('https://crossfitleiden.sportbitapp.nl/', category);
      } else {
        // Retry after 100ms
        setTimeout(checkAndInit, 100);
      }
    };

    // Start checking after a short delay
    const timer = setTimeout(checkAndInit, 500);

    return () => clearTimeout(timer);
  }, [activeRooster]); // Re-run when activeRooster changes

  return (
    <>
      {/* Hero - Simplified */}
      <section className="bg-gradient-to-r from-jonquil to-jonquil/80 text-gray-900 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero.title')}</h1>
          <p className="text-xl max-w-2xl">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Lesson Overview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('ourClasses.title')}</h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              {t('ourClasses.subtitle')}
            </p>

            {/* Group Classes */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t('groupClasses.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Training */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-verdigris to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">💪</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.training.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.training.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.training.for')}
                  </p>
                </div>

                {/* Hyrox */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-cinnabar to-red-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">🏃</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.hyrox.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.hyrox.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.hyrox.for')}
                  </p>
                </div>

                {/* Flex Friday */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-jonquil to-yellow-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">🎉</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.flexFriday.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.flexFriday.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.flexFriday.for')}
                  </p>
                </div>

                {/* Running */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">🏃‍♂️</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.running.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.running.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.running.for')}
                  </p>
                </div>

                {/* Olympic Lifting */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">🏋️</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.olympicLifting.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.olympicLifting.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.olympicLifting.for')}
                  </p>
                </div>

                {/* Teens */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">👦</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.teens.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.teens.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.teens.for')}
                  </p>
                </div>

                {/* Pre Teens */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">🧒</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.preTeens.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.preTeens.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.preTeens.for')}
                  </p>
                </div>

                {/* Urban Training */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">🌆</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.urbanTraining.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.urbanTraining.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.urbanTraining.for')}
                  </p>
                </div>

                {/* Mobility */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">🧘</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.mobility.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.mobility.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.mobility.for')}
                  </p>
                </div>

                {/* Gymnastics */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">🤸</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t('groupClasses.gymnastics.title')}</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('groupClasses.gymnastics.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('groupClasses.gymnastics.for')}
                  </p>
                </div>

              </div>
            </div>

            {/* Small Group */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t('smallGroup.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                {/* GetShredded */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-cinnabar">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold">{t('smallGroup.getShredded.title')}</h4>
                    <span className="bg-cinnabar text-white text-xs px-2 py-1 rounded-full">{t('smallGroup.badge')}</span>
                  </div>
                  <div className="h-40 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-5xl">🔥</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('smallGroup.getShredded.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('smallGroup.getShredded.for')}
                  </p>
                </div>

                {/* Unlock Motion */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-cinnabar">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold">{t('smallGroup.unlockMotion.title')}</h4>
                    <span className="bg-cinnabar text-white text-xs px-2 py-1 rounded-full">{t('smallGroup.badge')}</span>
                  </div>
                  <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-5xl">🔓</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('smallGroup.unlockMotion.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('smallGroup.unlockMotion.for')}
                  </p>
                </div>

                {/* Kickstart */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-cinnabar">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold">{t('smallGroup.kickstart.title')}</h4>
                    <span className="bg-cinnabar text-white text-xs px-2 py-1 rounded-full">{t('smallGroup.badge')}</span>
                  </div>
                  <div className="h-40 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-5xl">🚀</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    {t('smallGroup.kickstart.description')}
                  </p>
                  <p className="text-xs text-cinnabar font-semibold">
                    {t('smallGroup.kickstart.for')}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-lg text-gray-700 mb-4">
              {t('scheduleInfo.intro')}
            </p>
            <Link href={`/${locale}/starten`} className="text-cinnabar font-semibold hover:underline text-lg">
              {t('scheduleInfo.link')}
            </Link>
          </div>

          {/* Rooster Type Selector */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
              <button
                onClick={() => setActiveRooster('groepslessen')}
                className={`flex-1 p-6 rounded-xl border-2 transition-all ${
                  activeRooster === 'groepslessen'
                    ? 'border-verdigris bg-verdigris/10 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-verdigris/50'
                }`}
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-3xl">👥</span>
                  <h3 className="text-2xl font-bold">{t('selector.groupClasses.title')}</h3>
                </div>
                <p className="text-sm text-gray-700 text-center">
                  {t('selector.groupClasses.subtitle')}
                </p>
                {activeRooster === 'groepslessen' && (
                  <div className="mt-3 text-center">
                    <span className="inline-block bg-verdigris text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {t('selector.groupClasses.badge')}
                    </span>
                  </div>
                )}
              </button>

              <button
                onClick={() => setActiveRooster('small-group')}
                className={`flex-1 p-6 rounded-xl border-2 transition-all ${
                  activeRooster === 'small-group'
                    ? 'border-cinnabar bg-cinnabar/10 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-cinnabar/50'
                }`}
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-3xl">🎯</span>
                  <h3 className="text-2xl font-bold">{t('selector.smallGroup.title')}</h3>
                </div>
                <p className="text-sm text-gray-700 text-center">
                  {t('selector.smallGroup.subtitle')}
                </p>
                {activeRooster === 'small-group' && (
                  <div className="mt-3 text-center">
                    <span className="inline-block bg-cinnabar text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {t('selector.smallGroup.badge')}
                    </span>
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Sportbit Schedule Embed */}
          <div className="bg-gray-50 rounded-xl p-4 md:p-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm min-h-[600px]">
              <link rel="stylesheet" href="https://crossfitleiden.sportbitapp.nl/cbm/css/embed/rooster/rooster.css" type="text/css" />
              <Script
                src="https://crossfitleiden.sportbitapp.nl/cbm/embed/rooster/cdn/"
                strategy="afterInteractive"
              />
              <div id="sportbit-rooster">&nbsp;</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick tips */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">{t('tips.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-2">{t('tips.tip1.title')}</h4>
                <p className="text-gray-700 text-sm">
                  {t('tips.tip1.text')}
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-2">{t('tips.tip2.title')}</h4>
                <p className="text-gray-700 text-sm">
                  {t('tips.tip2.text')}
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-2">{t('tips.tip3.title')}</h4>
                <p className="text-gray-700 text-sm">
                  {t('tips.tip3.text')}
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-2">{t('tips.tip4.title')}</h4>
                <p className="text-gray-700 text-sm">
                  {t('tips.tip4.text')}
                </p>
              </div>
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

      {/* Questions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              {t.rich('questions.text', {
                a: (chunks) => (
                  <Link href={`/${locale}/contact`} className="text-cinnabar font-semibold hover:underline">
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
