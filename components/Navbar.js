"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isEmeraldPage = pathname === "/features" || pathname === "/pricing";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Industries", href: "#industries" },
    { name: "Blogs", href: "#" },
  ];

  const scrolledBg = isEmeraldPage ? "bg-[#0f3d2e] border-b border-white/10 shadow-lg" : "bg-[#0b1220]/90 shadow-lg";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? `${scrolledBg} py-3` : (isEmeraldPage ? "bg-[#0f3d2e] border-b border-white/5" : "bg-transparent") + " py-5 transition-all"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#00b274] to-[#00d48a] rounded-lg rotate-12 flex items-center justify-center">
              <span className="text-white font-bold -rotate-12">T</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Triostack</span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium text-slate-300 hover:text-[#00b274] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:block text-sm font-medium text-white hover:text-[#00b274] transition-colors">
            Login
          </a>
          <a
            href="#"
            className="bg-[#00e19d] text-[#0b1220] px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#00c98c] transition-all hover:shadow-[0_0_20px_rgba(0,225,157,0.3)]"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}
