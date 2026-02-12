import HeroSection from "@/components/sections/HeroSection";
import ZelftestSection from "@/components/sections/ZelftestSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WaaromSection from "@/components/sections/WaaromSection";
import HoeWerktHetSection from "@/components/sections/HoeWerktHetSection";
import KickstartSection from "@/components/sections/KickstartSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ZelftestSection />
      <WaaromSection />
      <HoeWerktHetSection />
      <KickstartSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
