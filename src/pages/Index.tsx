import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PaymentFlowSection } from "@/components/PaymentFlowSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { DashboardSection } from "@/components/DashboardSection";
import { JewelleryUseCaseSection } from "@/components/JewelleryUseCaseSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { PricingSection } from "@/components/PricingSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PaymentFlowSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <DashboardSection />
      <JewelleryUseCaseSection />
      <SocialProofSection />
      <PricingSection />
      <FinalCTASection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;