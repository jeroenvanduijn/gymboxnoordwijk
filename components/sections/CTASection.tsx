"use client";

import { useTranslations } from "@/context/LanguageContext";
import { usePopup } from "@/context/PopupContext";

export default function CTASection() {
    const t = useTranslations();
    const { openPopup } = usePopup();

    return (
        <section className="py-20 bg-primary text-white text-center">
            <div className="container-custom">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-headings text-white">
                    {t.cta.readyTitle}
                </h2>
                <p className="text-xl mb-10 max-w-2xl mx-auto text-white">
                    {t.cta.readyDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={openPopup}
                        className="bg-white text-primary font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        {t.cta.primaryText}
                    </button>
                    <button
                        onClick={() => window.location.href = '/rooster'}
                        className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        {t.cta.secondaryText}
                    </button>
                </div>
            </div>
        </section>
    );
}
