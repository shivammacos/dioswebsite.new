const TICKERS = [
  { symbol: 'EUR/USD', price: '1.1623', change: '+0.12%', up: true },
  { symbol: 'GBP/USD', price: '1.3344', change: '+0.08%', up: true },
  { symbol: 'USD/JPY', price: '158.56', change: '-0.21%', up: false },
  { symbol: 'AUD/USD', price: '0.7145', change: '+0.03%', up: true },
  { symbol: 'XAU/USD', price: '4,552.07', change: '+0.55%', up: true },
  { symbol: 'BTC/USD', price: '80,484.49', change: '-1.42%', up: false },
  { symbol: 'ETH/USD', price: '2,254.84', change: '+2.18%', up: true },
  { symbol: 'WTI/USD', price: '78.14', change: '+0.34%', up: true },
  { symbol: 'US500', price: '5,872.11', change: '+0.09%', up: true },
  { symbol: 'NAS100', price: '20,983.62', change: '+0.42%', up: true },
];

export default function MarketTicker() {
  const list = [...TICKERS, ...TICKERS];
  return (
    <div className="fixed top-16 z-40 w-full overflow-hidden border-b border-white/10 bg-ink-900/95 backdrop-blur">
      <div className="marquee-track flex w-max gap-8 px-6 py-2 font-mono text-xs">
        {list.map((t, idx) => (
          <div key={`${t.symbol}-${idx}`} className="flex items-center gap-2 whitespace-nowrap">
            <span className="font-bold text-white/80">{t.symbol}</span>
            <span className="text-white">{t.price}</span>
            <span className={t.up ? 'text-[#00b86b]' : 'text-[#ff3b3b]'}>{t.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
