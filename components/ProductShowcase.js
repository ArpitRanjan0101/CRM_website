"use client";

export default function ProductShowcase() {
  return (
    <section className="bg-gradient-to-b from-[#0b1220] to-[#0e1a2b] py-24 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#00b274]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Video */}
          <div className="relative group animate-fade-in opacity-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00b274]/20 to-blue-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#0b1220]">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              >
                <source src="https://cdn.pixabay.com/video/2021/04/12/70851-537446545_large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="animate-slide-up opacity-0 [animation-delay:200ms]">
            <div className="mb-8 text-center lg:text-left">
              <span className="text-[#00b274] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                Our Product
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Smart CRM Platform for <br className="hidden lg:block" /> Modern Businesses
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Streamline your sales, automate workflows, and manage multi-branch operations 
                with our powerful CRM platform designed for Indian enterprises.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-6 mb-10">
              {[
                { title: "Real-time analytics dashboard", desc: "Gain instant insights into your sales performance and customer trends." },
                { title: "Automated lead management", desc: "Never lose a lead again with our intelligent automated tracking system." },
                { title: "GST-ready invoicing", desc: "Generate compliant invoices and manage tax filings with ease." }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#00b274] shadow-[0_0_8px_#00b274]" />
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1 group-hover:text-[#00b274] transition-colors">{feature.title}</h3>
                    <p className="text-slate-500 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center lg:text-left">
              <button className="relative group bg-gradient-to-r from-[#00b274] to-[#00d48a] text-white px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-[#00b274]/20 hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10">Book a Demo</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
