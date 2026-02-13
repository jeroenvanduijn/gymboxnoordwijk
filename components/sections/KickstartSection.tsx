"use client";

import { siteConfig } from "@/config/site";
import { Translations } from "@/config/translations";
import Image from "next/image";
import Link from "next/link";

export default function KickstartSection({ content }: { content: Translations['kickstart'] }) {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headings text-gray-900">
                                {content.title}
                            </h2>
                            <p className="text-lg text-primary font-medium mb-8">
                                {content.subtitle}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {content.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700 font-medium">{bullet}</span>
                                    </li>
                                ))}
                            </ul>

                            <div>
                                <Link
                                    href="/starten" // Fixed to /starten as in siteConfig ctaUrl for Hero
                                    className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-xl hover:bg-opacity-90 transition-all shadow-md"
                                >
                                    {content.cta}
                                </Link>
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
            </div>
        </section>
    );
}
