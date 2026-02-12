"use client";

import { useTranslations } from "@/context/LanguageContext";

export default function ZelftestSection() {
    const t = useTranslations();
    const { zelftest } = t;

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                            {zelftest.title}
                        </h2>
                        <p className="text-xl font-semibold text-gray-800 mb-4">
                            {zelftest.subtitle}
                        </p>
                        <p className="text-gray-600 text-lg mb-2 leading-relaxed"
                            dangerouslySetInnerHTML={{
                                __html: zelftest.description
                                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            }}
                        />
                        <p className="text-gray-500 mb-8">
                            {zelftest.noJudgement}
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-6 mb-8">
                            <div className="flex items-center gap-2">
                                <span className="text-xl">⏱️</span>
                                <span className="font-semibold text-gray-800">{zelftest.stats.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xl">📊</span>
                                <span className="font-semibold text-gray-800">{zelftest.stats.questions}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xl">🎯</span>
                                <span className="font-semibold text-gray-800">{zelftest.stats.result}</span>
                            </div>
                        </div>

                        <button className="bg-primary text-white text-lg font-bold py-4 px-10 rounded-lg hover:opacity-90 transition-all shadow-lg">
                            {zelftest.cta}
                        </button>
                    </div>

                    {/* Right: Example Questions Card */}
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <h3 className="text-xl font-bold mb-6 text-gray-900">
                            {zelftest.exampleTitle}
                        </h3>
                        <div className="space-y-4">
                            {zelftest.examples.map((example, i) => {
                                const emojis = ["💪", "⚡", "🎵"];
                                return (
                                    <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                                        <span className="text-xl mt-0.5">{emojis[i]}</span>
                                        <span className="text-gray-700 font-medium">{example}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center gap-2">
                                    <span className="text-sm">•</span>
                                    {zelftest.moreQuestions}
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-sm">•</span>
                                    <strong>{zelftest.freeLabel}</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
