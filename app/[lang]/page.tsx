import HeroSection from "@/components/sections/HeroSection";
import RecognitionSection from "@/components/sections/RecognitionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HoeWerktHetSection from "@/components/sections/HoeWerktHetSection";
import KickstartSection from "@/components/sections/KickstartSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { getDictionary } from "@/lib/get-dictionary";
import { Language } from "@/config/translations";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang: Language = ["nl", "en"].includes(lang) ? (lang as Language) : "nl";
  const dict = await getDictionary(validLang);

  return (
    <main>
      <HeroSection content={dict.hero} />
      <RecognitionSection content={dict.recognition} />
      <KickstartSection content={dict.kickstart} />
      <HoeWerktHetSection content={dict.howItWorks} />
      <TestimonialsSection />
      {/* Passing content to FeaturesSection (Programs) if needed, but keeping it simple for now as it might be complex refactor. 
         Ideally FeaturesSection should also accept props. 
      */}
      <FeaturesSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
