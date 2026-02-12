"use client";

import { useState } from "react";
import { useTranslations } from "@/context/LanguageContext";

export default function FAQSection() {
    const t = useTranslations();
    const { faq } = t;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-headings">{faq.title}</h2>

                <div className="space-y-4">
                    {faq.items.map((item, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <button
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <span className="font-bold text-lg text-gray-900">{item.question}</span>
                                <span className={`transform transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}>
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
