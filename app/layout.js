import "./globals.css";
import Chatbot from "@/components/Chatbot";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialStickyBar from "@/components/SocialStickyBar";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "CRM Solutions | Premium Enterprise Software",
  description: "Custom-built CRM solutions for Indian enterprises focusing on GST compliance and ROI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SocialStickyBar />
        {children}
        <div className="hidden md:block">
          <Chatbot />
          <WhatsAppButton />
        </div>
        
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
      </body>
    </html>
  );
}
