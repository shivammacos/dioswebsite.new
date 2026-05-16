import {
  CandlestickChart,
  CalendarClock,
  Newspaper,
  ShieldAlert,
  History,
  Bot,
} from 'lucide-react';

const TOOLS = [
  {
    icon: CandlestickChart,
    title: 'Advanced Charting',
    body: '50+ technical indicators, drawing tools, and multi-timeframe views.',
  },
  {
    icon: CalendarClock,
    title: 'Economic Calendar',
    body: 'Real-time macro events, central-bank decisions, and earnings.',
  },
  {
    icon: Newspaper,
    title: 'Market Analysis',
    body: 'Daily research and trade ideas from senior analysts.',
  },
  {
    icon: ShieldAlert,
    title: 'Risk Management',
    body: 'Stop-loss, take-profit, trailing stops, and margin alerts.',
  },
  {
    icon: History,
    title: 'Trade History',
    body: 'Detailed analytics, P&L reporting, and tax-ready exports.',
  },
  {
    icon: Bot,
    title: 'Automated Trading',
    body: 'Build, backtest, and deploy strategies via our open API.',
  },
];

export default function ToolsSection() {
  return (
    <section
      id="tools"
      className="relative z-10 border-t border-white/10 bg-ink-950 px-6 py-24 text-white lg:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-14 flex flex-col gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-crimson-500">
            Tools & Features
          </p>
          <h2 className="text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl">
            Everything You Need to
            <br />
            <span className="text-crimson-500">Trade Smarter.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <article
                key={tool.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60 p-7 transition hover:-translate-y-1 hover:border-crimson-600 hover:bg-ink-800"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-crimson-600/15 text-crimson-500 transition group-hover:bg-crimson-600 group-hover:text-white">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold">{tool.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{tool.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
