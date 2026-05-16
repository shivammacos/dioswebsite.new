const VALUES = [
  { label: 'Innovation', body: 'Cutting-edge technology that compounds over time.' },
  { label: 'Transparency', body: 'Clear pricing. No hidden costs. Ever.' },
  { label: 'Integrity', body: 'Ethical practices in every decision we make.' },
  { label: 'Excellence', body: 'Institutional standards held to retail expectations.' },
];

const STATS = [
  { value: '50K+', label: 'Active Traders' },
  { value: '150+', label: 'Countries' },
  { value: '10+', label: 'Years Experience' },
  { value: '24/7', label: 'Support' },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 border-t border-white/10 bg-ink-950 px-6 py-24 text-white lg:px-10"
    >
      <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-12 lg:items-start">
        <div className="flex flex-col gap-5 lg:col-span-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-crimson-500">
            About Dios Derivatives
          </p>
          <h2 className="text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl">
            Next-Generation
            <br />
            <span className="text-crimson-500">Trading Platform.</span>
          </h2>
          <p className="max-w-[55ch] text-base text-white/60">
            Dios Derivatives was founded to bring institutional-grade execution and tools to every
            trader. We combine deep liquidity, modern engineering, and a relentless focus on the
            people who actually use the platform.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {VALUES.map((v) => (
              <div
                key={v.label}
                className="rounded-xl border border-white/10 bg-ink-800/50 p-4"
              >
                <p className="text-sm font-bold uppercase tracking-wider text-crimson-500">
                  {v.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/60">{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-6">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800/80 to-ink-900 p-7 transition hover:border-crimson-600"
            >
              <p className="font-mono text-5xl font-extrabold leading-none text-crimson-500 md:text-6xl">
                {s.value}
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-white/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
