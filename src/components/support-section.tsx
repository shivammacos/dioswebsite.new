import { MessageCircle, Mail, BookOpen, HelpCircle } from 'lucide-react';

const CHANNELS = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    sub: 'Instant support',
    cta: 'Start Chat',
    href: '#chat',
  },
  {
    icon: Mail,
    title: 'Email Support',
    sub: 'Response within 24 hours',
    cta: 'Send Email',
    href: 'mailto:support@dios.example',
  },
  {
    icon: BookOpen,
    title: 'Help Center',
    sub: 'Browse the knowledge base',
    cta: 'Visit Center',
    href: '#help',
  },
  {
    icon: HelpCircle,
    title: 'FAQs',
    sub: 'Find quick answers',
    cta: 'View FAQs',
    href: '#faq',
  },
];

export default function SupportSection() {
  return (
    <section
      id="support"
      className="relative z-10 border-t border-white/10 bg-ink-900 px-6 py-24 text-white lg:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-14 flex flex-col gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-crimson-500">Support</p>
          <h2 className="text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl">
            Need Help? We're Here
            <br />
            <span className="text-crimson-500">24/7.</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.title}
                href={c.href}
                className="group flex flex-col rounded-2xl border border-white/10 bg-ink-800/60 p-7 transition hover:-translate-y-1 hover:border-crimson-600 hover:bg-ink-800"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-crimson-600/15 text-crimson-500 transition group-hover:bg-crimson-600 group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold">{c.title}</h3>
                <p className="mt-1 text-sm text-white/60">{c.sub}</p>
                <span className="mt-6 text-sm font-bold uppercase tracking-wider text-crimson-500 transition group-hover:text-white">
                  {c.cta} →
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
