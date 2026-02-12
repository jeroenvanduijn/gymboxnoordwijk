"use client";

import { useTranslations } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function HoeWerktHetSection() {
    const t = useTranslations();
    const { hoeWerktHet } = t;

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-headings">{hoeWerktHet.title}</h2>
                    <p className="text-gray-600 text-lg">{hoeWerktHet.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

                    {hoeWerktHet.steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-lg border-4 border-white">
                                {i + 1}
                            </div>
                            <h3 className="text-xl font-bold mb-4 h-14 flex items-center justify-center">{step.title.replace(/^\d+\.\s/, '')}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {step.description}
                            </p>
                            {step.cta && (
                                <Link
                                    href={siteConfig.cta.primaryUrl}
                                    className="bg-accent text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-all shadow-md mt-auto"
                                >
                                    {step.cta}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center max-w-2xl mx-auto p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-gray-700 font-medium text-lg">
                        {hoeWerktHet.cta}
                    </p>
                </div>
            </div>
        </section>
    );
}
