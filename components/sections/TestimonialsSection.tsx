"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/context/LanguageContext";

export default function TestimonialsSection() {
    const t = useTranslations();
    const { testimonials } = siteConfig.proof;

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">{t.testimonials.title}</h2>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex text-accent">
                            {[1, 2, 3, 4, 5].map(i => (
                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="font-semibold text-gray-900">
                            {siteConfig.gym.reviewSummary.rating}/5 {t.testimonials.ratingText.replace('{count}', String(siteConfig.gym.reviewSummary.count))}
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <div key={i} className="bg-gray-50 p-8 rounded-2xl relative">
                            <div className="absolute top-8 right-8 text-primary/10">
                                <svg className="w-16 h-16 fill-current" viewBox="0 0 32 32">
                                    <path d="M10 8v8H6v-8h4m0-4H6c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h8V4h-4zM24 8v8h-4v-8h4m0-4h-4c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h8V4h-4z" />
                                </svg>
                            </div>

                            <div className="flex items-center mb-6">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 bg-gray-200">
                                    {item.image && (
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    )}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">{item.name}</div>
                                    <div className="text-sm text-gray-500">{item.role}</div>
                                </div>
                            </div>

                            <p className="text-gray-700 relative z-10 leading-relaxed">
                                &ldquo;{item.quote}&rdquo;
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
