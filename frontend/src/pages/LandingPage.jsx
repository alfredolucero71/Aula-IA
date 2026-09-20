import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import AgentsSection from "../components/landing/AgentsSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <Navbar />

      <main>
        <HeroSection />

        <FeaturesSection />

        <AgentsSection />

        <HowItWorksSection />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}