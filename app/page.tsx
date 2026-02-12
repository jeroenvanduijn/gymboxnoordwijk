import HeroSection from "@/components/sections/HeroSection";
import RecognitionSection from "@/components/sections/RecognitionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HoeWerktHetSection from "@/components/sections/HoeWerktHetSection";
import KickstartSection from "@/components/sections/KickstartSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RecognitionSection />
      <KickstartSection />
      <HoeWerktHetSection />
      <TestimonialsSection />
      <FeaturesSection />
      {/* Kept Features (Results/Programs?) as 'Aanbod' might be useful, or should it be removed? User didn't explicitly say remove 'Aanbod' section, but 'Recognition' replaces problem agitation. 'Features' is usually 'Programs'. Let's keep it low priority or remove if 'Aanbod' is covered elsewhere. User said 'Homepage Reordering' to include Pricing/Other. Let's strictly follow user request if possible. 
      User Request Order: 
      1. Hero (with Social Proof)
      2. Recognition ("Herken je dit?")
      3. Kickstart ("Safe start")
      4. How It Works
      5. Testimonials
      6. Pricing/Offer (Optional? User mentioned 'Pricing/Offer' in my plan. I should add PricingSection if I have one, or maybe FeaturesSection IS the offer?)
      7. FAQ
      Let's look at available components. `PricingSection` doesn't exist in the import list of page.tsx. `FeaturesSection` usually lists programs. `CTASection` is at bottom.
      I'll assume `FeaturesSection` acts as the "Offer/Programs" section for now.
      */}
      <FAQSection />
      <CTASection />
    </main>
  );
}
