import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="shell py-12 sm:py-16 lg:py-24">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <Reveal>
          <div>
            <span className="section-tag">About Triocord</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              An enterprise-ready system with a calm, premium operating experience
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Triocord is designed for teams that need dependable document recording, precise organization, and a
              refined day-to-day workflow. From controlled capture to polished delivery, every interaction is tuned for
              clarity, trust, and speed.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The product brings together secure storage, fast retrieval, and real-time oversight in a single clean
              interface that feels executive-ready from the first session.
            </p>

            <div className="section-frame mt-8 grid gap-5 py-6 sm:grid-cols-2">
              {[
                ["Audit-ready", "Structured history and transparent handoff trails across the full lifecycle."],
                ["Team aligned", "Shared dashboards and status views that keep operations in sync."],
              ].map(([title, copy]) => (
                <div key={title}>
                  <p className="text-base font-semibold text-slate-900">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass-panel relative overflow-hidden p-6 sm:p-7">
            <div className="absolute right-6 top-6 h-32 w-32 rounded-full bg-sky-200/60 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Operations workspace</p>
                  <p className="text-xs text-slate-500">Professional controls without visual clutter.</p>
                </div>
                <span className="rounded-full bg-slate-950 px-3 py-1 text-[11px] font-semibold text-white">Enterprise</span>
              </div>

              <div className="soft-rule mt-6 grid gap-6 pt-6 md:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[28px] bg-slate-950 p-5 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Workspace health</p>
                  <p className="mt-4 text-4xl font-semibold">98%</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Teams operate from a stable, organized control center with reliable visibility.
                  </p>
                </div>

                <div>
                  <div className="space-y-4">
                    {[
                      ["Admin workspace", "Full visibility"],
                      ["Team upload zone", "Controlled access"],
                      ["Retention policies", "Auto applied"],
                    ].map(([title, detail]) => (
                      <div key={title} className="flex items-center justify-between border-b border-slate-200/80 pb-4 last:border-b-0 last:pb-0">
                        <span className="text-sm font-medium text-slate-800">{title}</span>
                        <span className="text-xs text-slate-500">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="soft-rule mt-6 pt-6">
                    <p className="text-sm font-semibold text-slate-900">Delivery assurance</p>
                    <div className="mt-4 flex items-end gap-2">
                      {[36, 52, 60, 74, 66, 82, 92].map((height) => (
                        <span key={height} className="w-full rounded-t-2xl bg-gradient-to-t from-slate-900 to-sky-400" style={{ height: `${height}px` }} />
                      ))}
                    </div>
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
