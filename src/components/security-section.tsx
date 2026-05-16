import { Lock, KeyRound, ScrollText, Activity } from 'lucide-react';

const PILLARS = [
  { icon: Lock, label: 'Secure payment gateways' },
  { icon: KeyRound, label: 'AES-256 encrypted data' },
  { icon: ScrollText, label: 'Compliance-ready infrastructure' },
  { icon: Activity, label: '24/7 system monitoring' },
];

export default function SecuritySection() {
  return (
    <section className="relative z-10 border-t border-white/10 bg-ink-900 px-6 py-24 text-white lg:px-10">
      <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-crimson-500">
            Security & Trust
          </p>
          <h2 className="text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl">
            Security
            <br />
            You Can <span className="text-crimson-500">Rely On.</span>
          </h2>
          <p className="max-w-[55ch] text-base text-white/60">
            Funds are segregated in tier-1 banking partners. All data is encrypted in transit and
            at rest. Our infrastructure is audited annually and built to institutional standards.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.label}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-800/60 p-5"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-crimson-600/15 text-crimson-500">
                  <Icon size={22} />
                </div>
                <p className="text-sm font-semibold text-white">{p.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
