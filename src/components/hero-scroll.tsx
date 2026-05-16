import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

export default function HeroScroll() {
  return (
    <FlowArt aria-label="DIOS Derivatives — Trading Terminal">
      {/* 01 — Hero */}
      <FlowSection
        aria-label="Trade without borders"
        style={{ backgroundColor: '#C8102E', color: '#ffffff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — Dios Derivatives</p>
        <hr className="my-[2vw] border-none border-t border-white/40" />
        <div>
          <h1 className="text-[clamp(3.5rem,12vw,14rem)] font-extrabold leading-[0.85] uppercase tracking-tight">
            Trade
            <br />
            Without
            <br />
            Borders
          </h1>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/40" />
        <div className="flex flex-wrap items-end justify-between gap-6">
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Where institutional precision meets modern speed. DIOS gives every trader
            the edge that was once reserved for the few.
          </p>
          <div className="flex gap-3">
            <a
              href="#open-account"
              className="rounded-full bg-white px-7 py-3 text-sm font-bold uppercase tracking-wider text-[#C8102E] transition hover:bg-[#0A0A0A] hover:text-white"
            >
              Open Account
            </a>
            <a
              href="#markets"
              className="rounded-full border border-white px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-[#C8102E]"
            >
              Explore Markets
            </a>
          </div>
        </div>
      </FlowSection>

      {/* 02 — Why Choose */}
      <FlowSection
        aria-label="Why choose Dios"
        style={{ backgroundColor: '#0A0A0A', color: '#ffffff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
          02 — Why choose Dios
        </p>
        <hr className="my-[2vw] border-none border-t border-white/40" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-extrabold leading-[0.85] uppercase tracking-tight">
            A Platform
            <br />
            Built For
            <br />
            Modern Traders
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/40" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="font-mono text-[clamp(2rem,5vw,4rem)] font-bold leading-none text-[#C8102E]">
              0.0s
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-wider">Execution</p>
            <p className="mt-1 text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">
              Sub-millisecond order routing through tier-1 liquidity providers.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="font-mono text-[clamp(2rem,5vw,4rem)] font-bold leading-none text-[#C8102E]">
              500+
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-wider">Instruments</p>
            <p className="mt-1 text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">
              Forex, indices, commodities, crypto, and shares — one account.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="font-mono text-[clamp(2rem,5vw,4rem)] font-bold leading-none text-[#C8102E]">
              99.9%
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-wider">Uptime</p>
            <p className="mt-1 text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">
              Redundant infrastructure with 24/7 system monitoring.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/40" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Institutional liquidity</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">
              Access deep liquidity pools for seamless trade execution at any size.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Real-time pricing</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">
              Accurate, up-to-the-second market data direct from the source.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">No dealing desk</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">
              Direct market access. Transparent pricing. Zero conflicts of interest.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* 03 — Markets */}
      <FlowSection
        aria-label="Multiple markets"
        style={{ backgroundColor: '#FAFAF7', color: '#0A0A0A' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
          03 — Markets
        </p>
        <hr className="my-[2vw] border-none border-t border-black/30" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-extrabold leading-[0.85] uppercase tracking-tight">
            Five
            <br />
            Markets.
            <br />
            One Account.
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/30" />
        <p className="max-w-[55ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Trade forex, indices, commodities, crypto, and shares in a single terminal — with
          professional spreads and lightning-fast execution.
        </p>
        <hr className="my-[2vw] border-none border-t border-black/30" />
        <div className="flex flex-wrap gap-[3vw]">
          {[
            { label: 'Forex', count: '80+ Pairs', sub: 'Major, minor & exotic' },
            { label: 'Indices', count: '15+ Indices', sub: 'Global stock indices' },
            { label: 'Commodities', count: '20+ Assets', sub: 'Gold, silver, oil & more' },
            { label: 'Crypto', count: '50+ Cryptos', sub: 'Digital asset CFDs' },
            { label: 'Shares', count: '300+ Stocks', sub: 'Top global companies' },
          ].map((m) => (
            <div key={m.label} className="min-w-[160px] flex-1">
              <p className="text-sm font-bold uppercase tracking-wider text-[#C8102E]">
                {m.label}
              </p>
              <p className="mt-2 text-[clamp(1.2rem,2vw,1.8rem)] font-bold leading-tight">
                {m.count}
              </p>
              <p className="mt-1 text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">
                {m.sub}
              </p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* 04 — Platforms */}
      <FlowSection
        aria-label="Powerful platforms"
        style={{ backgroundColor: '#C8102E', color: '#ffffff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — Platforms</p>
        <hr className="my-[2vw] border-none border-t border-white/40" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-extrabold leading-[0.85] uppercase tracking-tight">
            Web.
            <br />
            Mobile.
            <br />
            Desktop.
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/40" />
        <p className="max-w-[55ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Trade from anywhere. Identical accounts, synchronised positions, the same professional
          tools across every device.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/40" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Web Trader</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-80">
              No download required. One-click trading, advanced indicators, and multi-chart
              layouts — straight from the browser.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Mobile App</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-80">
              Push notifications, biometric login, and quick deposits. Trade the market wherever
              the market moves.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Desktop Terminal</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-80">
              Algorithmic trading, custom scripts, and full depth-of-market for power users.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* 05 — Ready */}
      <FlowSection
        aria-label="Ready to trade"
        style={{ backgroundColor: '#0A0A0A', color: '#ffffff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
          05 — Get started
        </p>
        <hr className="my-[2vw] border-none border-t border-white/40" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-extrabold leading-[0.85] uppercase tracking-tight">
            Ready
            <br />
            To
            <br />
            Trade?
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/40" />
        <div className="flex flex-wrap items-end justify-between gap-6">
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Open an account in minutes. Verify your identity, fund your wallet, and start trading
            global markets with a platform built around you.
          </p>
          <a
            href="#open-account"
            className="rounded-full bg-[#C8102E] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-[#C8102E]"
          >
            Open Account Now
          </a>
        </div>
      </FlowSection>
    </FlowArt>
  );
}
