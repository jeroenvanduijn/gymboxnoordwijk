"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Translations } from "@/config/translations";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HeroSection({ content }: { content: Translations['hero'] }) {
    return (
        <section className="relative min-h-[90vh] flex items-center py-20 bg-gray-900 text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={siteConfig.hero.image}
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gray-900/40 z-10"></div>
                {/* Gradient Overlay for extra readability on left side */}
                <div className="absolute inset-0 z-20 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent"></div>
            </div>

            <div className="container-custom relative z-30 h-full flex flex-col justify-center">
                <div className="max-w-4xl">
                    {/* Review Stars - Top Left (Social Proof) */}
                    <ScrollReveal delay={0.1} direction="down">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex text-accent">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-white font-medium text-base tracking-wide">{content.reviewBadge}</span>
                        </div>
                    </ScrollReveal>

                    {/* Headline */}
                    <ScrollReveal delay={0.2} direction="left">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 font-headings leading-[1.1] tracking-tight text-white">
                            {content.headline}
                        </h1>
                    </ScrollReveal>

                    {/* Subheadline */}
                    <ScrollReveal delay={0.3} direction="left">
                        <div className="mb-10 max-w-2xl">
                            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-medium">
                                {content.subheadline}
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* CTA Section */}
                    <ScrollReveal delay={0.4} direction="up">
                        <div className="flex flex-col items-start gap-4">
                            <Link
                                href={content.ctaUrl || "/starten"}
                                className="group relative bg-accent text-primary text-lg md:text-xl font-bold py-4 px-10 rounded-2xl transition-all hover:bg-white hover:text-accent shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <span className="uppercase tracking-wide">{content.cta}</span>
                            </Link>
                            {content.ctaSubtext && (
                                <p className="text-sm md:text-base text-gray-200 flex items-center gap-2 font-medium opacity-90">
                                    {content.ctaSubtext}
                                </p>
                            )}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
