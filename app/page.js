import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ProductShowcase from "@/components/ProductShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import TestimonialSection from "@/components/TestimonialSection";
import BrandSection from "@/components/BrandSection";
import ConsultationSection from "@/components/ConsultationSection";
import GooglePlaySection from "@/components/GooglePlaySection";


export default function HomePage() {
  return (
    <main className="min-h-screen relative bg-[#0b1220]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <PricingSection />
      <TestimonialSection />
      <ConsultationSection />
      <GooglePlaySection />
      <FAQSection />

      <BrandSection />
      <TrustSection />
      <ContactSection />
    </main>

  );
}
