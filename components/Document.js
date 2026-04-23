import Reveal from "./Reveal";

function FileIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v5h5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6M9 17h6" />
    </svg>
  );
}

export default function Document() {
  return (
    <section id="document" className="shell py-12 sm:py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <Reveal>
          <div>
            <span className="section-tag">Document Access</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Download polished resources with one clean action
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              This section includes a real downloadable file from the public folder, so the action is fully functional
              and production-ready rather than a placeholder button.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Instant access from /public/sample.pdf",
                "Simple, reliable anchor-based download flow",
                "Minimal presentation layer with no extra framing",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass-panel p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-sky-100 text-sky-700">
                  <FileIcon />
                </span>
                <div>
                  <p className="text-lg font-semibold text-slate-950">Triocord Guide.pdf</p>
                  <p className="mt-1 text-sm text-slate-500">PDF document - 184 KB - Updated for 2026 onboarding</p>
                </div>
              </div>

              <a href="/sample.pdf" download className="btn-primary sm:min-w-48">
                Download Document
              </a>
            </div>

            <div className="soft-rule mt-6 pt-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Preview summary</p>
                  <p className="mt-1 text-xs text-slate-500">A lightweight document included directly inside the project.</p>
                </div>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-700">
                  Ready to download
                </span>
              </div>

              <div className="mt-5 rounded-[26px] border border-dashed border-slate-300 bg-white/75 p-5">
                <div className="space-y-3">
                  <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                  <div className="h-3 w-full rounded-full bg-slate-100" />
                  <div className="h-3 w-5/6 rounded-full bg-slate-100" />
                  <div className="h-24 rounded-[20px] bg-[linear-gradient(135deg,#dbeafe,#f8fafc)]" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
