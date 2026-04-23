"use client";

import React, { useState } from 'react';

export default function ConsultationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <section className="py-24 px-6 bg-[#0B1220] relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00b274]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image */}
          <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-auto lg:h-[500px] shadow-2xl">
            <img 
              src="/img.png" 
              alt="Expert Consultation" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/60 to-transparent" />
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[#00b274] text-xs font-bold uppercase tracking-[0.4em] block">
                NEED EXPERT HELP?
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Still Confused? Let Our <br className="hidden md:block" /> Experts Guide You
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                Get personalized consultation to understand how our CRM can fit your business needs and improve operations.
              </p>
            </div>

            <button 
              onClick={toggleModal}
              className="group relative px-10 py-5 bg-gradient-to-r from-[#00b274] to-[#008a5a] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(0,178,116,0.3)] hover:shadow-[0_15px_40px_rgba(0,178,116,0.5)] cursor-pointer"
            >
              <span className="relative z-10">Book Expert Consultation</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          onClick={toggleModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" />
          
          {/* Modal Box */}
          <div 
            className="bg-[#0E1A2B] w-full max-w-md rounded-2xl p-8 border border-white/10 shadow-2xl relative z-10 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Icon */}
            <button 
              onClick={toggleModal}
              className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Book a Consultation</h3>
              <p className="text-slate-400 text-sm">Fill in the details below and we'll get back to you.</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); toggleModal(); }}>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest ml-1">Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00b274] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest ml-1">Company Email *</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00b274] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest ml-1">Phone Number *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+91 00000 00000"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00b274] transition-all"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#00b274] to-[#008a5a] text-white font-bold py-4 rounded-full shadow-lg shadow-[#00b274]/20 hover:shadow-[#00b274]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-4"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
