"use client";

export const dynamic = 'force-dynamic';

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const allFeatures = [
  {
    category: "Sales & CRM",
    items: [
      {
        title: "Lead Management",
        description: "Capture leads from websites, social media, and offline events automatically. Assign them to sales reps based on region or product interest.",
        icon: "🎯"
      },
      {
        title: "Pipeline Visualization",
        description: "A drag-and-drop Kanban board to track deals from initial contact to closure. Custom stages to match your unique sales cycle.",
        icon: "📈"
      },
      {
        title: "Contact Management",
        description: "360-degree view of your customers, including interaction history, purchase records, and communication logs in one place.",
        icon: "👥"
      }
    ]
  },
  {
    category: "Automation & Workflow",
    items: [
      {
        title: "Automated Follow-ups",
        description: "Set up automated email and WhatsApp follow-ups for new leads or stagnant deals to ensure no opportunity is missed.",
        icon: "⚡"
      },
      {
        title: "Task Reminders",
        description: "Smart notifications for your team regarding meetings, calls, and pending tasks. Sync with Google and Outlook calendars.",
        icon: "🔔"
      },
      {
        title: "Document Automation",
        description: "Generate quotes, invoices, and proposals in seconds using pre-built templates and auto-filling customer data.",
        icon: "📄"
      }
    ]
  },
  {
    category: "Finance & Compliance",
    items: [
      {
        title: "GST-Ready Billing",
        description: "Generate GST-compliant invoices with automated tax calculations. Support for CGST, SGST, and IGST based on location.",
        icon: "💰"
      },
      {
        title: "Expense Tracking",
        description: "Track business expenses and employee reimbursements. Upload receipts and categorize spending for easier accounting.",
        icon: "🏦"
      },
      {
        title: "Tax Filing Support",
        description: "Export data directly for GST returns. Maintain audit logs and financial history to stay 100% compliant with local laws.",
        icon: "⚖️"
      }
    ]
  },
  {
    category: "Analytics & Reporting",
    items: [
      {
        title: "Sales Forecasts",
        description: "Predict future revenue based on current pipeline data and historical performance. Plan your inventory and resources effectively.",
        icon: "📊"
      },
      {
        title: "Team Performance",
        description: "Track conversion rates, call logs, and response times for every team member. Reward top performers and identify training needs.",
        icon: "🏆"
      },
      {
        title: "Custom Dashboards",
        description: "Create your own views with the metrics that matter most to you. Real-time updates ensure you always have the pulse of your business.",
        icon: "🖥️"
      }
    ]
  }
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#0B1220]">
      <Navbar />

      {/* Page Hero Section - Solid Theme */}
      <div className="pt-24 pb-12 bg-[#0d2a2f] relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

        {/* Subtle separator line between navbar and content */}
        <div className="absolute top-[80px] left-0 w-full h-[2px] bg-white/10 z-20" />

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              CRM Features
            </h1>
            <nav className="flex text-sm text-white/70 font-medium">
              <ol className="flex items-center gap-2">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><span>&gt;</span></li>
                <li><a href="#" className="hover:text-white transition-colors">Service</a></li>
                <li><span>&gt;</span></li>
                <li className="text-white">CRM Features</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-24 px-6 relative">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00b274]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="space-y-24">
            {allFeatures.map((group, groupIdx) => (
              <div key={group.category} className="space-y-12">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
                    {group.category}
                  </h2>
                  <div className="h-px w-full bg-white/10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.items.map((feature, idx) => (
                    <Reveal key={feature.title} delay={idx * 100}>
                      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00b274]/30 transition-all duration-500 group">
                        <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00b274] transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-32 p-12 rounded-3xl bg-gradient-to-br from-[#00b274]/10 to-blue-500/10 border border-white/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#00b274]/5 blur-3xl rounded-full" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">Ready to see these features in action?</h3>
              <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
                Join hundreds of Indian enterprises that use Triostack to automate their sales and grow 2x faster.
              </p>
              <a
                href="/#contact"
                className="inline-block bg-[#00b274] hover:bg-[#009661] text-white px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
              >
                Start Your Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
