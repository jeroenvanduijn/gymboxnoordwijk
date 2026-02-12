"use client";

import { siteConfig } from "@/config/site";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function RecognitionSection() {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-bold font-headings text-gray-900 mb-8">
                            {siteConfig.recognition.title}
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="grid gap-4 mb-10 text-left md:text-center">
                            {siteConfig.recognition.bullets.map((bullet, index) => (
                                <div key={index} className="flex items-center md:justify-center gap-3 text-lg md:text-xl text-gray-700">
                                    <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{bullet}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <p className="text-xl font-medium text-primary">
                            {siteConfig.recognition.closing}
                        </p>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
