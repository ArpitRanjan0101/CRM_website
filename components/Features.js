import Reveal from "./Reveal";

const features = [
  {
    title: "Secure Storage",
    description: "Protect sensitive records with layered access control and enterprise-grade retention policies.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 5 6v6c0 4.2 2.9 8.1 7 9 4.1-.9 7-4.8 7-9V6l-7-3Z" />
      </svg>
    ),
  },
  {
    title: "Easy Document Access",
    description: "Find the right asset instantly with structured metadata, previews, and clean search flows.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
      </svg>
    ),
  },
  {
    title: "Fast Download",
    description: "Move from capture to delivery in seconds with polished exports and zero-clutter handoff tools.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v10m0 0 4-4m-4 4-4-4M5 20h14" />
      </svg>
    ),
  },
  {
    title: "Real-time Management",
    description: "Track updates, status changes, and team activity from a live control surface built for operators.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 14h4l2-5 4 10 2-5h4" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="shell py-12 sm:py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <Reveal>
          <div className="max-w-md">
            <span className="section-tag">Core Features</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Professional tools, presented with less noise.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We trimmed the visual weight here into a cleaner feature grid so the site feels more confident and less
              boxed in.
            </p>
          </div>
        </Reveal>

        <div className="section-frame">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 90}>
              <article className="grid gap-4 py-7 sm:grid-cols-[auto_1fr] sm:gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-800 shadow-sm">
                  {feature.icon}
                </div>
                <div className="max-w-xl">
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
