"use client";

export default function HeroForm() {
  return (
    <div className="animate-slide-up [animation-delay:400ms] opacity-0 glass-card rounded-2xl p-8 w-full max-w-md transform transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-1">Get Started Today</h2>
        <p className="text-slate-500 text-sm">We'll get back to you shortly</p>
      </div>
      
      <div className="mb-6">
        <span className="text-[10px] font-bold text-[#00b274] tracking-[0.2em] uppercase">Message Us</span>
      </div>
      
      <form className="space-y-4">
        <div>
          <input 
            type="text" 
            placeholder="Full Name *" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00b274]/20 focus:border-[#00b274] transition-all"
            required
          />
        </div>
        <div>
          <input 
            type="tel" 
            placeholder="Phone Number *" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00b274]/20 focus:border-[#00b274] transition-all"
            required
          />
        </div>
        <div>
          <input 
            type="email" 
            placeholder="Work Email *" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00b274]/20 focus:border-[#00b274] transition-all"
            required
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Company Name (Optional)" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00b274]/20 focus:border-[#00b274] transition-all"
          />
        </div>
        <div>
          <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#00b274]/20 focus:border-[#00b274] transition-all appearance-none cursor-pointer">
            <option value="">CRM Solutions</option>
            <option value="enterprise">Enterprise CRM</option>
            <option value="sales">Sales Automation</option>
            <option value="custom">Custom Implementation</option>
          </select>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-[#00b274] text-white font-bold py-4 rounded-xl hover:bg-[#009661] transition-all duration-300 shadow-lg shadow-[#00b274]/30 active:scale-[0.98] mt-2"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
