import BenifitSection from "./_components/_sections/BenifitSection";
import FeaturesSection from "./_components/_sections/FeaturesSection";
import HeroSection from "./_components/_sections/HeroSection";
import PricingSection from "./_components/_sections/PricingSection";
import SupportSection from "./_components/_sections/SupportSection";
import TestimonialsSection from "./_components/_sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="bg-[#F9F8FE]">
        <SupportSection />
        <FeaturesSection />
        <BenifitSection />
      </div>
      <PricingSection />
      <TestimonialsSection />
    </>
  );
}
