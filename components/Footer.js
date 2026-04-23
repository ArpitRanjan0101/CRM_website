import BrandLogo from "./BrandLogo";

const links = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#contact",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56a1.97 1.97 0 1 0-3.94 0 1.97 1.97 0 0 0 3.94 0ZM20.44 13.04c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.86V8.5H9.36c.04.87 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.02 1.88 2.52V20H20v-7.96h.44Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#contact",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.26l-4.9-7.42L5.56 22H2.45l7.25-8.29L1.98 2h6.42l4.43 6.8L18.9 2Zm-1.09 18h1.72L7.46 3.9H5.61L17.81 20Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#contact",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#080E1A] text-white border-t border-white/5">
      <div className="shell py-14 sm:py-16 max-w-7xl mx-auto px-6">
        <div className="border-b border-white/10 pb-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#00b274]">Ready to simplify the workflow</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                A sharper, lighter interface for serious CRM operations.
              </h2>
            </div>
            <a href="#contact" className="bg-[#00b274] hover:bg-[#009661] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105">
              Start a Conversation
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr_0.7fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00b274] to-[#00d48a] rounded-lg rotate-12 flex items-center justify-center">
                <span className="text-white font-bold -rotate-12">T</span>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">Triostack</p>
                <p className="text-sm text-slate-400">Premium CRM Solutions</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Built for Indian enterprises that need secure lead management, automated workflows, and GST-ready invoicing without the complexity.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Navigation</p>
            <nav className="mt-4 grid gap-3 sm:grid-cols-2">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-slate-300 transition hover:text-[#00b274]">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Connect</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-[#00b274]/50 hover:text-white hover:bg-white/5"
                  aria-label={`Open ${social.label} link`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Triostack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
