"use client";

import { useTranslations } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { Translations } from "@/config/translations";
import Link from "next/link";

export default function HoeWerktHetSection({ content }: { content: Translations['howItWorks'] }) {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-headings">{content.title}</h2>
                    {/* Subtitle removed as per simplified design */}
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

                    {content.steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-lg border-4 border-white">
                                {i + 1}
                            </div>
                            <h3 className="text-xl font-bold mb-4 h-auto">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
