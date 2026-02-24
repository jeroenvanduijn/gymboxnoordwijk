"use client";

import { useTranslations } from "@/context/LanguageContext";
import { usePopup } from "@/context/PopupContext";
import Image from "next/image";

export default function DropInPage() {
    const t = useTranslations();
    const { openPopup } = usePopup();
    const d = t.dropIn;

    return (
        <main className="pt-24">
            {/* Hero */}
            <section className="relative overflow-hidden text-white section-padding">
                <Image
                    src="https://8reapzspluqk4ou3.public.blob.vercel-storage.com/fotos/hero-background-148.jpg"
                    alt="Drop-in training at Gymbox"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-accent/80"></div>
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-headings text-white">{d.title}</h1>
                    <p className="text-xl text-white/90 mb-8">{d.subtitle}</p>
                    <a
                        href="https://crossfitleiden.sportbitapp.nl/web/nl/dropinplanner/kalender"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-all shadow-lg text-lg"
                    >
                        {d.bookCta}
                    </a>
                </div>
            </section>

            {/* How it works */}
            <section className="section-padding bg-white">
                <div className="container-custom max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 font-headings text-center">{d.howTitle}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {d.howSteps.map((step, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent text-2xl font-bold mx-auto mb-4">
                                    {i + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-headings">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Practical Info */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 font-headings text-center">{d.practicalTitle}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Price */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                <span className="text-2xl">💶</span>
                                {d.priceTitle}
                            </h3>
                            <ul className="space-y-2">
                                {d.priceItems.map((item, i) => (
                                    <li key={i} className="text-gray-600 flex items-start gap-2">
                                        <span>•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-500 text-sm mt-4">{d.paymentNote}</p>
                        </div>

                        {/* What to bring */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                <span className="text-2xl">🎒</span>
                                {d.bringTitle}
                            </h3>
                            <ul className="space-y-2">
                                {d.bringItems.map((item, i) => (
                                    <li key={i} className="text-gray-600 flex items-start gap-2">
                                        <span>•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding bg-white">
                <div className="container-custom max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 font-headings text-center">{d.faqTitle}</h2>
                    <div className="space-y-6">
                        {d.faqItems.map((faq, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-primary text-white text-center">
                <div className="container-custom max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 font-headings text-white">{d.ctaTitle}</h2>
                    <p className="text-lg mb-8 text-white/80">{d.ctaDescription}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://crossfitleiden.sportbitapp.nl/web/nl/dropinplanner/kalender"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all shadow-lg text-lg"
                        >
                            {d.bookCta}
                        </a>
                        <button
                            onClick={openPopup}
                            className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white/10 transition-all text-lg"
                        >
                            {d.newHereCta}
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
