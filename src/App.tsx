import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { SolutionSection } from "./components/SolutionSection";
import { PlatformSection } from "./components/PlatformSection";
import { PricingSection } from "./components/PricingSection";
import { PartnerSection } from "./components/PartnerSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SolutionSection />
        <PlatformSection />
        <PricingSection />
        <PartnerSection />
      </main>
      <Footer />
    </div>
  );
}