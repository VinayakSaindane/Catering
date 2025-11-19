import HeroSection from "@/components/home/HeroSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import SeasonalHighlight from "@/components/home/SeasonalHighlight";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Kingsland Restaurant & Banquets | Dining • Events • Rooms";
  }, []);

  return (
    <main>
      <HeroSection />
      <IntroductionSection />
      <SeasonalHighlight />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Home;
