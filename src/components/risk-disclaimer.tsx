import { TriangleAlert } from 'lucide-react';

export default function RiskDisclaimer() {
  return (
    <section id="risk-disclaimer" className="relative z-10 border-t-4 border-crimson-600 bg-[#0f0000] px-6 py-16 text-white lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mb-10 flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-crimson-600 text-white">
            <TriangleAlert size={24} strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-500">
              Important Legal Notice
            </p>
            <h2 className="mt-1 text-2xl font-extrabold uppercase tracking-tight text-white md:text-3xl">
              Risk Warning &amp; Disclaimer
            </h2>
          </div>
        </div>

        {/* Main warning block */}
        <div className="mb-8 rounded-2xl border border-crimson-700/50 bg-crimson-950/40 px-8 py-7">
          <p className="text-[15px] font-bold leading-relaxed text-white">
            Trading leveraged financial instruments — including forex, contracts for difference
            (CFDs), indices, commodities, cryptocurrencies, and equities — involves a{' '}
            <span className="text-crimson-400">
              substantial risk of loss and may not be suitable for all investors.
            </span>{' '}
            You may lose some or all of your invested capital. Do not trade with funds you cannot
            afford to lose.
          </p>
        </div>

        {/* Risk paragraphs grid */}
        <div className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-white/8 bg-white/4 p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-crimson-500">
              Leverage Risk
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              Leverage amplifies both profits and losses. A small adverse price movement can result
              in a loss exceeding your total deposit. Ensure you fully understand how margin and
              leverage work before opening a position.
            </p>
          </div>

          <div className="rounded-xl border border-white/8 bg-white/4 p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-crimson-500">
              Market Volatility
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              Financial markets can be highly volatile and unpredictable. Prices may move rapidly
              against your position due to economic events, political developments, or changes in
              market sentiment.
            </p>
          </div>

          <div className="rounded-xl border border-white/8 bg-white/4 p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-crimson-500">
              No Guaranteed Returns
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              Past performance is not indicative of future results. No trading strategy, system,
              or signal service can guarantee profits. All forward-looking statements are
              speculative.
            </p>
          </div>

          <div className="rounded-xl border border-white/8 bg-white/4 p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-crimson-500">
              Counterparty &amp; Liquidity Risk
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              CFDs are over-the-counter (OTC) instruments. In fast-moving or illiquid markets,
              orders may be filled at a price different from that requested (slippage), and
              positions may not always be closable at the desired price.
            </p>
          </div>

          <div className="rounded-xl border border-white/8 bg-white/4 p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-crimson-500">
              Cryptocurrency Risk
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              Digital assets are extremely volatile and largely unregulated in many jurisdictions.
              Crypto CFDs may experience rapid and significant price swings. Regulatory changes
              could affect availability and value without notice.
            </p>
          </div>

          <div className="rounded-xl border border-white/8 bg-white/4 p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-crimson-500">
              Not Financial Advice
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              Nothing on this website constitutes investment advice, financial advice, trading
              advice, or any other type of advice. You should conduct your own due diligence and
              consult an independent financial adviser before making any investment decisions.
            </p>
          </div>
        </div>

        {/* Regulatory note */}
        <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-6">
          <p className="text-xs leading-relaxed text-white/50">
            <span className="font-semibold text-white/70">Regulatory Notice: </span>
            Dios Derivatives operates in accordance with applicable laws and regulations in
            jurisdictions where it is licensed. Services are not offered in jurisdictions where
            their provision would be contrary to local laws or regulations. By accessing this
            website and using our services, you confirm that you are not a resident of any
            restricted jurisdiction and that you have read, understood, and accepted this risk
            warning in its entirety.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-white/50">
            <span className="font-semibold text-white/70">Eligibility: </span>
            Trading leveraged products is only appropriate for clients who understand the risks
            involved and have sufficient financial resources to bear those risks. Retail clients
            are subject to negative balance protection where applicable under local regulation.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-white/50">
            <span className="font-semibold text-white/70">Statistics Disclaimer: </span>
            CFDs are complex instruments. A significant proportion of retail investor accounts
            lose money when trading CFDs. You should consider whether you understand how CFDs
            work and whether you can afford to take the high risk of losing your money.
          </p>
        </div>
      </div>
    </section>
  );
}
