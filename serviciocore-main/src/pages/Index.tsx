import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import UrgencySection from "@/components/UrgencySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <BenefitsSection />
      <PricingSection />
      <UrgencySection />
      <ContactSection />
    </div>
  );
};

export default Index;