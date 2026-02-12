"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/context/LanguageContext";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HeroSection() {
    const t = useTranslations();
    const { hero } = t;

    const bgImageStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('${siteConfig.hero.image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <section className="relative min-h-[90vh] flex items-center py-20 bg-gray-900 text-white overflow-hidden">
            <div className="absolute inset-0 z-0" style={bgImageStyle}></div>

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent"></div>

            <div className="container-custom relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="max-w-2xl">
                        {/* Review Badge */}
                        <ScrollReveal delay={0.1} direction="down">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm mb-8">
                                <div className="flex text-accent">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="font-medium tracking-wide">{hero.reviewBadge}</span>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2} direction="left">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-headings leading-tight uppercase tracking-tight">
                                {hero.headline}
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3} direction="left">
                            <p className="text-xl md:text-3xl font-medium text-accent mb-6 font-headings uppercase tracking-wide">
                                {hero.tagline}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
                                {hero.subheadline}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.5}>
                            <ul className="space-y-3 mb-10">
                                {hero.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-center text-lg text-gray-200">
                                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                                            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>

                        <ScrollReveal delay={0.6} direction="up">
                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                <Link
                                    href={siteConfig.hero.ctaUrl}
                                    className="group relative bg-accent hover:bg-accent/90 text-white text-lg font-bold py-4 px-10 rounded-sm transition-all shadow-[0_0_20px_rgba(var(--color-accent),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-accent),0.5)] transform hover:-translate-y-1"
                                >
                                    <span className="uppercase tracking-wider">{hero.cta}</span>
                                    <div className="absolute inset-0 rounded-sm ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></div>
                                </Link>
                                <p className="text-sm text-gray-400 flex items-center gap-2">
                                    <span className="animate-bounce-right">👉</span> {hero.ctaSubtext}
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Image side - hidden on mobile, visible on desktop */}
                    <div className="relative hidden md:block h-[600px] w-full">
                        <ScrollReveal delay={0.4} direction="right" className="h-full w-full">
                            <div className="relative h-full w-full rounded-sm overflow-hidden border-8 border-white/5 shadow-2xl skew-x-[-2deg] hover:skew-x-0 transition-transform duration-700 ease-out">
                                <Image
                                    src={siteConfig.hero.image}
                                    alt="Gymbox Noordwijk"
                                    fill
                                    className="object-cover scale-105 hover:scale-110 transition-transform duration-1000"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                <div className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-md p-6 border-l-4 border-accent">
                                    <div className="text-white font-bold text-2xl font-headings uppercase">
                                        {siteConfig.gym.reviewSummary.count}+ Happy Members
                                    </div>
                                    <div className="text-accent flex items-center gap-2 mt-1 font-medium">
                                        <span>Rated {siteConfig.gym.reviewSummary.rating}/5 stars</span>
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
