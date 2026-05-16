const STEPS = [
  { n: '01', title: 'Register your account', body: 'Sign up in minutes with email or social.' },
  { n: '02', title: 'Verify your identity', body: 'Quick automated KYC — usually under 10 minutes.' },
  { n: '03', title: 'Deposit funds', body: 'Bank transfer, cards, e-wallets, or crypto.' },
  { n: '04', title: 'Start trading', body: 'Access global markets across every device.' },
];

export default function GetStartedSection() {
  return (
    <section
      id="open-account"
      className="relative z-10 border-t border-white/10 bg-paper px-6 py-24 text-ink-900 lg:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-14 flex flex-col gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-crimson-600">
            Get Started
          </p>
          <h2 className="text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl">
            Start Trading in
            <br />
            <span className="text-crimson-600">Minutes.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, idx) => (
            <article
              key={s.n}
              className="relative flex flex-col rounded-2xl border border-ink-200 bg-white p-7 transition hover:-translate-y-1 hover:border-crimson-600"
            >
              <span className="font-mono text-5xl font-extrabold text-crimson-600">{s.n}</span>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.body}</p>
              {idx < STEPS.length - 1 && (
                <span className="absolute right-5 top-9 hidden text-ink-200 lg:block">→</span>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-ink-900 bg-ink-900 p-8 text-white">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-crimson-500">
              Ready when you are
            </p>
            <p className="mt-2 text-2xl font-bold md:text-3xl">
              Open your account in under 5 minutes.
            </p>
          </div>
          <a
            href="#open-account"
            className="rounded-full bg-crimson-600 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-crimson-600"
          >
            Open Account Now
          </a>
        </div>
      </div>
    </section>
  );
}
