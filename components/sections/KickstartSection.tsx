"use client";

import { useTranslations } from "@/context/LanguageContext";

export default function KickstartSection() {
    const t = useTranslations();
    const { kickstart } = t;

    return (
        <section className="section-padding bg-gray-900 text-white">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading text-accent">{kickstart.title}</h2>
                    <h3 className="text-2xl font-bold mb-4">{kickstart.subtitle}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{kickstart.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* When & Who */}
                    <div className="space-y-12">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <h4 className="text-xl font-bold mb-4 text-primary-light">{kickstart.whenTitle}</h4>
                            <p className="text-gray-300 leading-relaxed translate-y-1">
                                {kickstart.whenDescription.replace(/\*.*?\*/g, (match) => `<strong>${match.slice(1, -1)}</strong>`)}
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <span className="bg-accent text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">?</span>
                                {kickstart.whoTitle}
                            </h4>
                            <ul className="space-y-3">
                                {kickstart.whoList.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* What & Why */}
                    <div className="space-y-12">
                        <div className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl border border-white/10 shadow-xl">
                            <h4 className="text-xl font-bold mb-6 text-white">{kickstart.whatTitle}</h4>
                            <ul className="space-y-3">
                                {kickstart.whatList.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/90">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-2">{kickstart.whyTitle}</h4>
                            <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider">{kickstart.whySubtitle}</p>
                            <ul className="grid gap-3">
                                {kickstart.whyList.map((item, i) => (
                                    <li key={i} className="bg-white/5 p-3 rounded-lg border border-white/5 flex items-center gap-3">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* How to Start - Steps */}
                <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <h3 className="text-2xl font-bold mb-8 text-center">{kickstart.howToStartTitle}</h3>
                    <div className="space-y-6">
                        {kickstart.howToStartSteps.map((step, i) => {
                            const [bold, rest] = step.split('–');
                            return (
                                <div key={i} className="flex items-center gap-4 md:gap-6">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-white rounded-full flex-shrink-0 flex items-center justify-center font-bold text-lg md:text-xl">
                                        {i + 1}
                                    </div>
                                    <div className="text-lg">
                                        <span className="font-bold block md:inline md:mr-2">{bold}</span>
                                        {rest && <span className="text-gray-600">– {rest}</span>}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
