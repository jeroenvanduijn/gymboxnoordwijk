"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/context/LanguageContext";

export default function HeroSection() {
    const t = useTranslations();
    const { hero } = t;

    const bgImageStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${siteConfig.hero.image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <section className="relative py-24 md:py-32 bg-gray-900 text-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20" style={bgImageStyle}></div>
            <div className="container-custom relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        {/* Review Badge */}
                        <div className="inline-flex items-center gap-2 bg-accent/20 text-accent font-bold px-4 py-1.5 rounded-full text-sm mb-6 border border-accent/20">
                            <div className="flex text-accent">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            {hero.reviewBadge}
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-heading leading-tight">
                            {hero.headline}
                        </h1>
                        <p className="text-xl md:text-2xl font-semibold text-accent mb-4">
                            {hero.tagline}
                        </p>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            {hero.subheadline}
                        </p>
                        <ul className="space-y-4 mb-10">
                            {hero.bullets.map((bullet, i) => (
                                <li key={i} className="flex items-center text-lg">
                                    <svg className="w-6 h-6 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                        <div>
                            <Link
                                href={siteConfig.hero.ctaUrl}
                                className="bg-accent hover:bg-opacity-90 text-white text-lg font-bold py-4 px-10 rounded-lg transition-all inline-block shadow-lg"
                            >
                                {hero.cta}
                            </Link>
                            <p className="mt-4 text-sm text-gray-400 flex items-center gap-2">
                                <span>👉</span> {hero.ctaSubtext}
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 hidden md:block">
                        <Image
                            src={siteConfig.hero.image}
                            alt="Gymbox Noordwijk"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                            <div className="text-white font-bold text-xl">
                                {siteConfig.gym.reviewSummary.count}+ Happy Members
                            </div>
                            <div className="text-accent">
                                Rated {siteConfig.gym.reviewSummary.rating}/5 stars
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
