"use client";

import HeroSection from "@/components/sections/HeroSection";
import RecognitionSection from "@/components/sections/RecognitionSection";
import HoeWerktHetSection from "@/components/sections/HoeWerktHetSection";
import KickstartSection from "@/components/sections/KickstartSection";
import WaaromSection from "@/components/sections/WaaromSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { useTranslations } from "@/context/LanguageContext";

export default function Home() {
    const t = useTranslations();

    return (
        <>
            <HeroSection content={t.hero} />
            <RecognitionSection content={t.recognition} />
            <HoeWerktHetSection content={t.howItWorks} />
            <KickstartSection content={t.kickstart} />
            <WaaromSection />
            <FeaturesSection />
            <TestimonialsSection />
            <FAQSection />
            <CTASection />
        </>
    );
}
