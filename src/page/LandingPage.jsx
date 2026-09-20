import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import Navbar from "../components/landing/Navbar";
import HeroBackground from "../components/HeroBackground";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import AgentsSection from "../components/landing/AgentsSection";
import ResourcesSection from "../components/landing/ResourcesSection";
import PlansSection from "../components/landing/PlansSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import FAQSection from "../components/landing/FAQSection";
import Footer from "../components/landing/Footer";

export default function LandingPage() {

    return (

        <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden">

            <HeroBackground />

            <Navbar />

            <main>

                <HeroSection />

                <FeaturesSection />

                <HowItWorksSection />

                <AgentsSection />

                <ResourcesSection />

                <PlansSection />

                <TestimonialsSection />

                <FAQSection />

            </main>

            <Footer />

        </div>

    );

}