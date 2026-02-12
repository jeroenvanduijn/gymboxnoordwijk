"use client";

import { useTranslations } from "@/context/LanguageContext";

export default function WaaromSection() {
    const t = useTranslations();
    const { waarom } = t;

    return (
        <section className="section-padding bg-gray-900 text-white">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left: Pain Points */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
                            {waarom.title}
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            {waarom.subtitle}
                        </p>
                        <div className="space-y-4">
                            {waarom.painPoints.map((point, i) => (
                                <div key={i} className="flex items-start gap-4 bg-white/5 p-5 rounded-xl border border-white/10">
                                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-300 text-lg">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Solution */}
                    <div className="bg-gradient-to-br from-primary/80 to-primary p-10 rounded-2xl border border-white/10 shadow-2xl">
                        <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                            {waarom.solutionTitle}
                        </h3>
                        <p className="text-gray-200 text-lg leading-relaxed">
                            {waarom.solutionDescription}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
