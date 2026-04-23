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

      {/* Sticky Bottom Help Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-[#0b1220]/80 backdrop-blur-md border-t border-white/5 py-4 z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Need help fast?</span>
            <a href="tel:+919211941924" className="text-xl font-bold text-white hover:text-[#00b274] transition-all inline-block animate-pulse-slow">+91 9211941924</a>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <p className="text-[10px] text-slate-500 uppercase tracking-wider">Instant consultation | Fast callback | No obligation</p>
        </div>
      </div>
    </main>
  );
}
