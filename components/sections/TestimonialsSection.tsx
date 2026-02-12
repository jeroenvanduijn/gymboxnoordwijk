"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/context/LanguageContext";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TestimonialsSection() {
    const t = useTranslations();
    const { testimonials } = siteConfig.proof;

    return (
        <section className="section-padding bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 -z-0"></div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-headings uppercase tracking-tight">{t.testimonials.title}</h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <div className="flex items-center justify-center gap-2 mb-4 bg-gray-100 inline-flex px-6 py-2 rounded-full">
                            <div className="flex text-accent">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="font-bold text-gray-900">
                                {siteConfig.gym.reviewSummary.rating}/5 {t.testimonials.ratingText.replace('{count}', String(siteConfig.gym.reviewSummary.count))}
                            </span>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <ScrollReveal key={i} delay={0.1 * i} direction="up" className="h-full">
                            <div className="bg-gray-50 hover:bg-white p-8 rounded-2xl relative h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-gray-100 group">
                                <div className="absolute top-8 right-8 text-primary/10 group-hover:text-accent/20 transition-colors">
                                    <svg className="w-16 h-16 fill-current" viewBox="0 0 32 32">
                                        <path d="M10 8v8H6v-8h4m0-4H6c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h8V4h-4zM24 8v8h-4v-8h4m0-4h-4c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h8V4h-4z" />
                                    </svg>
                                </div>

                                <div className="flex items-center mb-6">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white shadow-md group-hover:border-accent transition-colors">
                                        {item.image && (
                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                        )}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-lg font-headings uppercase">{item.name}</div>
                                        <div className="text-sm text-gray-500 font-medium text-accent">{item.role}</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 relative z-10 leading-relaxed italic">
                                    &ldquo;{item.quote}&rdquo;
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
