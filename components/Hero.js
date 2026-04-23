import Reveal from "./Reveal";

function PlayIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8.5 7.2a1 1 0 0 1 1.52-.86l7.04 4.8a1 1 0 0 1 0 1.72l-7.04 4.8A1 1 0 0 1 8.5 16.8V7.2Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="shell pb-16 pt-14 sm:pb-20 lg:pb-24 lg:pt-20">
      <div className="grid items-end gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="max-w-xl">
            <span className="section-tag">Minimal Document Workflow</span>
            <h1 className="text-balance mt-6 text-4xl font-semibold tracking-[-0.05em] text-[var(--text-strong)] sm:text-5xl lg:text-7xl">
              Record, organize, and deliver documents with calm precision.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--text-muted)] sm:text-lg">
              Triocord gives modern teams one clean operating layer for controlled capture, searchable access, and
              presentation-ready delivery without a cluttered interface.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#document" className="btn-primary min-w-44">
                Download App
              </a>
              <a href="#about" className="btn-secondary min-w-44">
                <PlayIcon />
                Explore Platform
              </a>
            </div>

            <div className="section-frame mt-10 grid gap-6 py-6 sm:grid-cols-3">
              {[
                { label: "Secure retention", value: "99.98%" },
                { label: "Average retrieval", value: "2.1 sec" },
                { label: "Active teams", value: "180+" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-950">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="absolute right-10 top-8 h-48 w-48 rounded-full bg-sky-200/35 blur-3xl" />
          <div className="glass-panel grid-pattern relative overflow-hidden p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">Recording dashboard</p>
                <p className="mt-1 text-sm text-slate-500">Live visibility across approvals, sync state, and delivery readiness.</p>
              </div>
              <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                System healthy
              </div>
            </div>

            <div className="soft-rule mt-6 pt-6">
              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      { label: "Files synced", value: "1,284" },
                      { label: "Review queue", value: "18" },
                      { label: "Exports today", value: "64" },
                    ].map((item) => (
                      <div key={item.label}>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                        <p className="mt-2 text-2xl font-semibold text-slate-950">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[28px] bg-slate-950 p-5 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">Capture stream</p>
                        <p className="mt-1 text-xs text-slate-400">Review every document action in sequence.</p>
                      </div>
                      <button
                        type="button"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-950"
                        aria-label="Play product demo"
                      >
                        <PlayIcon />
                      </button>
                    </div>
                    <div className="mt-6 flex h-40 items-end gap-2">
                      {[42, 58, 48, 66, 62, 74, 68, 88, 80, 96].map((height, index) => (
                        <span
                          key={height}
                          className={`w-full rounded-t-full ${index > 6 ? "bg-sky-300" : "bg-slate-700"}`}
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-6">
                  <div className="rounded-[26px] bg-white/85 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Workflow pulse</p>
                    <p className="mt-3 text-4xl font-semibold text-slate-950">24h uptime</p>
                    <div className="mt-4 h-2 rounded-full bg-slate-200">
                      <div className="h-2 w-[88%] rounded-full bg-gradient-to-r from-slate-900 to-sky-500" />
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      Teams work from a single calm surface instead of disconnected document tools.
                    </p>
                  </div>

                  <div className="soft-rule space-y-4 pt-5">
                    {[
                      ["Triocord Guide.pdf", "Updated 3 mins ago"],
                      ["Quarterly Review.docx", "Shared with leadership"],
                      ["Ops Archive.zip", "Ready for delivery"],
                    ].map(([title, detail]) => (
                      <div key={title} className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{title}</p>
                          <p className="mt-1 text-sm text-slate-500">{detail}</p>
                        </div>
                        <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Ready</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
