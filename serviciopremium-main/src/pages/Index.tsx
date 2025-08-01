import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { UrgencySection } from "@/components/sections/UrgencySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <ServiceSection />
      <BenefitsSection />
      <FeaturesSection />
      <PricingSection />
      <UrgencySection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
