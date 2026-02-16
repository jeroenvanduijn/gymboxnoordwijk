"use client";

import { siteConfig } from "@/config/site";
import { Translations } from "@/config/translations";
import Image from "next/image";
import { usePopup } from "@/context/PopupContext";

export default function KickstartSection({ content }: { content: Translations['kickstart'] }) {
    const { openPopup } = usePopup();

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                {/* Header Card */}
                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headings text-gray-900">
                                {content.title}
                            </h2>
                            <p className="text-lg text-primary font-medium mb-6">
                                {content.subtitle}
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {content.description}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {content.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700 font-medium">{bullet}</span>
                                    </li>
                                ))}
                            </ul>

                            <div>
                                <button
                                    onClick={openPopup}
                                    className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-xl hover:bg-opacity-90 transition-all shadow-md"
                                >
                                    {content.cta}
                                </button>
                            </div>
                        </div>
                        <div className="relative h-64 md:h-auto bg-gray-200">
                            <Image
                                src={siteConfig.media.placeholders.community}
                                alt="Kickstart training"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10"></div>
                        </div>
                    </div>
                </div>

                {/* Detailed Info Grid */}
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Left Column */}
                    <div className="space-y-12">
                        {/* What is it? */}
                        {content.whatList && content.whatList.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-bold mb-4 font-headings">{content.whatTitle}</h3>
                                <ul className="space-y-3">
                                    {content.whatList.map((item, i) => (
                                        <li key={i} className="flex gap-3">
                                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* When does it start? */}
                        {content.whenTitle && (
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold mb-2 font-headings">{content.whenTitle}</h3>
                                <p className="text-gray-600">{content.whenDescription}</p>
                            </div>
                        )}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-12">
                        {/* Who is it for? */}
                        {content.whoList && content.whoList.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-bold mb-4 font-headings">{content.whoTitle}</h3>
                                <ul className="space-y-3">
                                    {content.whoList.map((item, i) => (
                                        <li key={i} className="flex gap-3">
                                            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Why Personal Training? */}
                        {content.whyList && content.whyList.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-bold mb-2 font-headings">{content.whyTitle}</h3>
                                <p className="text-gray-500 italic mb-4">{content.whySubtitle}</p>
                                <ul className="space-y-3">
                                    {content.whyList.map((item, i) => (
                                        <li key={i} className="flex gap-3">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
