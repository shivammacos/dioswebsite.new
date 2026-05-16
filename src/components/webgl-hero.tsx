import { SmokeBackground } from '@/components/ui/spooky-smoke-animation';
import { LiquidButton } from '@/components/ui/liquid-glass-button';

export default function WebGLHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Smoke shader — fills section, no fixed positioning */}
      <div className="absolute inset-0">
        <SmokeBackground smokeColor="#C8102E" />
      </div>

      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl px-4 pt-20">
        {/* Double-border card */}
        <div className="rounded-2xl border border-white/20 p-2 shadow-[0_0_80px_rgba(200,16,46,0.2)]">
          <div className="relative overflow-hidden rounded-xl border border-white/15 bg-black/40 px-10 py-14 text-center backdrop-blur-sm">

            {/* Live indicator */}
            <div className="mb-7 flex items-center justify-center gap-2">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
                Markets Live — 500+ Instruments
              </p>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2.8rem,8vw,7rem)] font-extrabold leading-[0.88] uppercase tracking-tight text-white">
              Trade
              <br />
              <span className="text-[#C8102E]">The World.</span>
            </h1>

            {/* Subtext */}
            <p className="mx-auto mt-6 max-w-[46ch] text-sm leading-relaxed text-white/60 md:text-base">
              Institutional-grade execution. Deep liquidity. Real-time pricing across forex,
              indices, commodities, crypto, and shares — in one terminal.
            </p>

            {/* Stats row */}
            <div className="mx-auto mt-8 flex max-w-md flex-wrap justify-center gap-x-8 gap-y-3 border-y border-white/10 py-6">
              {[
                { v: '0.0s', l: 'Execution' },
                { v: '99.9%', l: 'Uptime' },
                { v: '500+', l: 'Instruments' },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="font-mono text-2xl font-extrabold text-[#C8102E]">{s.v}</p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-white/50">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <LiquidButton size="xl" className="border border-white/30 text-white">
                <a href="#open-account" className="px-2">Open Account</a>
              </LiquidButton>
              <a
                href="#markets"
                className="flex h-12 items-center rounded-md px-6 text-sm font-bold uppercase tracking-wider text-white/70 transition hover:text-white"
              >
                Explore Markets →
              </a>
            </div>

          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-10 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-white/30">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
            <span className="h-6 w-px bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
