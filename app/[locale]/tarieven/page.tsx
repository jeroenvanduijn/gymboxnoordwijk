"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import IntroCtaSection from "@/components/IntroCtaSection";

export default function Tarieven() {
  const t = useTranslations('pricing');
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/faciliteit/hero-background-15.jpg"
            alt={t('hero.imageAlt')}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/60"></div>
        </div>

        <div className="relative z-20 container-custom section-padding">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {t('hero.subtitle')}
            </p>
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
                  (window as any).openCFLPopup();
                }
              }}
              className="inline-block bg-white text-[#E25C2A] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#E25C2A]/10 transition-all shadow-lg hover:shadow-xl border-2 border-[#E25C2A]"
            >
              {t('hero.button')}
            </button>
          </div>
        </div>
      </section>

      {/* Kostenvergelijking */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t('comparison.title')}</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{t('comparison.coffee.emoji')}</div>
                <p className="font-semibold mb-2">{t('comparison.coffee.title')}</p>
                <p className="text-2xl font-bold text-gray-900">{t('comparison.coffee.price')}</p>
                <p className="text-sm text-gray-600">{t('comparison.coffee.period')}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{t('comparison.dining.emoji')}</div>
                <p className="font-semibold mb-2">{t('comparison.dining.title')}</p>
                <p className="text-2xl font-bold text-gray-900">{t('comparison.dining.price')}</p>
                <p className="text-sm text-gray-600">{t('comparison.dining.period')}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{t('comparison.streaming.emoji')}</div>
                <p className="font-semibold mb-2">{t('comparison.streaming.title')}</p>
                <p className="text-2xl font-bold text-gray-900">{t('comparison.streaming.price')}</p>
                <p className="text-sm text-gray-600">{t('comparison.streaming.period')}</p>
              </div>

              <div className="bg-[#E25C2A]/10 border-2 border-[#E25C2A] rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{t('comparison.crossfit.emoji')}</div>
                <p className="font-semibold mb-2">{t('comparison.crossfit.title')}</p>
                <p className="text-2xl font-bold text-[#E25C2A]">{t('comparison.crossfit.price')}</p>
                <p className="text-sm text-gray-600">{t('comparison.crossfit.period')}</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-700">
                {t('comparison.message')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programma's met accordions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('programs.title')}</h2>
            <p className="text-lg text-gray-600 mb-10 text-center">
              {t('programs.subtitle')}
            </p>

            <div className="space-y-4">
              {/* Kickstart */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('kickstart')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F4D35E]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.kickstart.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.kickstart.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'kickstart' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'kickstart' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <div className="text-center mb-4">
                        <p className="text-3xl font-bold text-[#E25C2A]">{t('programs.kickstart.price')}</p>
                        <p className="text-sm text-gray-600">{t('programs.kickstart.period')}</p>
                      </div>

                      <p className="text-gray-700">
                        {t('programs.kickstart.description')}
                      </p>

                      <div className="bg-gray-50 rounded-lg p-5">
                        <h4 className="font-bold text-gray-900 mb-3">{t('programs.kickstart.included')}</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-[#E25C2A] mt-1">✓</span>
                            <span>{t('programs.kickstart.item1')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E25C2A] mt-1">✓</span>
                            <span>{t('programs.kickstart.item2')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E25C2A] mt-1">✓</span>
                            <span>{t('programs.kickstart.item3')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E25C2A] mt-1">✓</span>
                            <span>{t('programs.kickstart.item4')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E25C2A] mt-1">✓</span>
                            <span>{t('programs.kickstart.item5')}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Group Coaching */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('group')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#E25C2A]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.group.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.group.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'group' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'group' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <p className="text-gray-700">
                        {t('programs.group.description')}
                      </p>

                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-bold text-gray-900">{t('programs.group.base.title')}</h4>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-[#E25C2A]">{t('programs.group.base.price')}</p>
                              <p className="text-sm text-gray-600">{t('programs.group.base.period')}</p>
                            </div>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>{t('programs.group.base.item1')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>{t('programs.group.base.item2')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>{t('programs.group.base.item3')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>{t('programs.group.base.item4')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>{t('programs.group.base.item5')}</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-bold text-gray-900">{t('programs.group.pro.title')}</h4>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-[#E25C2A]">{t('programs.group.pro.price')}</p>
                              <p className="text-sm text-gray-600">{t('programs.group.pro.period')}</p>
                            </div>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>{t('programs.group.pro.item1')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>{t('programs.group.pro.item2')}</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-bold text-gray-900">{t('programs.group.elite.title')}</h4>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-[#E25C2A]">{t('programs.group.elite.price')}</p>
                              <p className="text-sm text-gray-600">{t('programs.group.elite.period')}</p>
                            </div>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>{t('programs.group.elite.item1')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>{t('programs.group.elite.item2')}</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-center text-gray-600 italic">
                        {t('programs.group.note')}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Small Group / Semi-Private */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('small')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#17BEBB]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.small.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.small.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'small' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'small' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <p className="text-gray-700">
                        {t('programs.small.description')}
                      </p>

                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-bold text-gray-900">{t('programs.small.tier3.title')}</h4>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-[#E25C2A]">{t('programs.small.tier3.price')}</p>
                              <p className="text-sm text-gray-600">{t('programs.small.tier3.period')}</p>
                              <p className="text-sm text-gray-600">{t('programs.small.tier3.period2')}</p>
                            </div>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>{t('programs.small.tier3.item1')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>{t('programs.small.tier3.item2')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>{t('programs.small.tier3.item3')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>{t('programs.small.tier3.item4')}</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-lg font-bold text-gray-900">{t('programs.small.tier2.title')}</h4>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-[#E25C2A]">{t('programs.small.tier2.price')}</p>
                              <p className="text-sm text-gray-600">{t('programs.small.tier2.period')}</p>
                            </div>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>{t('programs.small.tier2.item1')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>{t('programs.small.tier2.item2')}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#E25C2A] mt-1">✓</span>
                              <span>{t('programs.small.tier2.item3')}</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-center text-gray-600 italic">
                        {t('programs.small.note')}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Unlock Motion */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('unlock')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#17BEBB]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🔓</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.unlock.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.unlock.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'unlock' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'unlock' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-[#E25C2A]">{t('programs.unlock.price')}</p>
                        <p className="text-sm text-gray-600">{t('programs.unlock.period')}</p>
                      </div>

                      <p className="text-gray-700">
                        {t('programs.unlock.description')}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Body APK */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('body-apk')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#E25C2A]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.bodyApk.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.bodyApk.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'body-apk' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'body-apk' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-[#E25C2A]">{t('programs.bodyApk.price')}</p>
                      </div>

                      <p className="text-gray-700">
                        {t('programs.bodyApk.description')}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Personal Training */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('pt')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F4D35E]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💪</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.pt.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.pt.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'pt' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'pt' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <p className="text-gray-700">
                        {t('programs.pt.description')}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-5">
                          <h4 className="text-lg font-bold text-gray-900 mb-4">{t('programs.pt.pt60.title')}</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">{t('programs.pt.pt60.tier1')}</span>
                              <span className="text-xl font-bold text-[#E25C2A]">{t('programs.pt.pt60.price1')}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">{t('programs.pt.pt60.tier2')}</span>
                              <span className="text-xl font-bold text-[#E25C2A]">{t('programs.pt.pt60.price2')}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-5">
                          <h4 className="text-lg font-bold text-gray-900 mb-4">{t('programs.pt.pt30.title')}</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">{t('programs.pt.pt30.tier1')}</span>
                              <span className="text-xl font-bold text-[#E25C2A]">{t('programs.pt.pt30.price1')}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700">{t('programs.pt.pt30.tier2')}</span>
                              <span className="text-xl font-bold text-[#E25C2A]">{t('programs.pt.pt30.price2')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Monthly Private Coaching */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('skill')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#E25C2A]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.skill.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.skill.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'skill' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'skill' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <p className="text-gray-700">
                        {t('programs.skill.description')}
                      </p>

                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                          <span className="font-semibold text-gray-900">{t('programs.skill.skill1')}</span>
                          <span className="text-xl font-bold text-[#E25C2A]">{t('programs.skill.price1')}</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                          <span className="font-semibold text-gray-900">{t('programs.skill.skill2')}</span>
                          <span className="text-xl font-bold text-[#E25C2A]">{t('programs.skill.price2')}</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                          <span className="font-semibold text-gray-900">{t('programs.skill.skill4')}</span>
                          <span className="text-xl font-bold text-[#E25C2A]">{t('programs.skill.price4')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Nutrition Kickstart */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('nutrition-kickstart')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#17BEBB]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🍎</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.nutritionKickstart.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.nutritionKickstart.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'nutrition-kickstart' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'nutrition-kickstart' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <div className="text-center mb-4">
                        <p className="text-3xl font-bold text-[#E25C2A]">{t('programs.nutritionKickstart.price')}</p>
                        <p className="text-sm text-gray-600">{t('programs.nutritionKickstart.period')}</p>
                      </div>

                      <p className="text-gray-700">
                        {t('programs.nutritionKickstart.description')}
                      </p>

                      <div className="bg-gray-50 rounded-lg p-5">
                        <h4 className="font-bold text-gray-900 mb-3">{t('programs.nutritionKickstart.included')}</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-[#E25C2A] mt-1">✓</span>
                            <span>{t('programs.nutritionKickstart.item1')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E25C2A] mt-1">✓</span>
                            <span>{t('programs.nutritionKickstart.item2')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E25C2A] mt-1">✓</span>
                            <span>{t('programs.nutritionKickstart.item3')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#E25C2A] mt-1">✓</span>
                            <span>{t('programs.nutritionKickstart.item4')}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Nutrition Membership */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('nutrition')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#17BEBB]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🥗</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.nutrition.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.nutrition.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'nutrition' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'nutrition' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-[#E25C2A]">{t('programs.nutrition.price')}</p>
                        <p className="text-sm text-gray-600">{t('programs.nutrition.period')}</p>
                      </div>

                      <p className="text-gray-700 text-center">
                        {t('programs.nutrition.description')}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Teens */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('teens')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F4D35E]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🧑</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.teens.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.teens.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'teens' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'teens' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-6">
                      <p className="text-gray-700">
                        {t('programs.teens.description')}
                      </p>

                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                          <span className="font-semibold text-gray-900">{t('programs.teens.tier1')}</span>
                          <span className="text-xl font-bold text-[#E25C2A]">{t('programs.teens.price1')}</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                          <span className="font-semibold text-gray-900">{t('programs.teens.tier2')}</span>
                          <span className="text-xl font-bold text-[#E25C2A]">{t('programs.teens.price2')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Base Weekend */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('base-weekend')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F4D35E]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📚</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.baseWeekend.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.baseWeekend.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'base-weekend' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'base-weekend' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-[#E25C2A]">{t('programs.baseWeekend.price')}</p>
                      </div>

                      <p className="text-gray-700">
                        {t('programs.baseWeekend.description')}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Flex Friday */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('flex')}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F4D35E]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👫</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{t('programs.flex.title')}</h3>
                      <p className="text-sm text-gray-600">{t('programs.flex.subtitle')}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform ${openSection === 'flex' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === 'flex' && (
                  <div className="px-6 pb-6 border-t">
                    <div className="pt-6 space-y-4">
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-900">{t('programs.flex.time')}</p>
                        <p className="text-sm text-gray-600">{t('programs.flex.schedule')}</p>
                      </div>

                      <p className="text-gray-700">
                        {t('programs.flex.description')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Review Widget */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t('reviews.title')}</h2>

          {/* Google Review Widget */}
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

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t('faq.title')}</h2>

            <div className="space-y-4">
              <details className="bg-white rounded-xl p-6 group">
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

              <details className="bg-white rounded-xl p-6 group">
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

              <details className="bg-white rounded-xl p-6 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>{t('faq.q3')}</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4">
                  {t('faq.a3')}
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 group">
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
