"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/context/LanguageContext";

export default function FeaturesSection() {
    const t = useTranslations();
    const { programs } = t;

    const programIcons = siteConfig.programs.items.map(item => item.icon);

    return (
        <section className="section-padding bg-gray-50 bg-opacity-50">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">{programs.title}</h2>
                    <p className="text-gray-600 text-lg">{programs.subtitle}</p>
                </div>

                {/* Primary Offer Highlight */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-16">
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="uppercase tracking-widest text-sm font-bold text-primary mb-2">{programs.mostPopular}</div>
                            <h3 className="text-3xl font-bold mb-4">{programs.primaryOffer.name}</h3>
                            <p className="text-gray-600 mb-6 text-lg">
                                {programs.primaryOffer.description}
                            </p>
                            <ul className="space-y-3 mb-8">
                                {programs.primaryOffer.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={siteConfig.programs.primaryOffer.link}
                                className="bg-primary text-white text-center font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all shadow-md self-start"
                            >
                                {programs.learnMore}
                            </Link>
                        </div>
                        <div
                            className="bg-gray-200 min-h-[300px]"
                            style={{
                                backgroundImage: `url('${siteConfig.programs.primaryOffer.image}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        ></div>
                    </div>
                </div>

                {/* Other Programs Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {programIcons.map((icon, i) => {
                        const key = icon === 'group' ? 'group' : icon === 'personal' ? 'personal' : 'nutrition';
                        const item = programs.items[key as keyof typeof programs.items];
                        return (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                                    {icon === 'group' && (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    )}
                                    {icon === 'personal' && (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                    )}
                                    {icon === 'nutrition' && (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    )}
                                </div>
                                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
