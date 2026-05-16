const COLUMNS = [
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Legal Documents', 'Privacy Policy'],
  },
  {
    title: 'Trading',
    links: ['Markets', 'Platforms', 'Accounts', 'Fees'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Tutorials', 'Glossary', 'Economic Calendar'],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-ink-950 px-6 pt-20 pb-10 text-white lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-crimson-600 text-lg font-extrabold text-white">
                D
              </span>
              <span className="text-base font-bold uppercase tracking-[0.15em]">
                Dios <span className="text-crimson-500">Derivatives</span>
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
              Empowering traders worldwide with cutting-edge technology, transparent pricing, and
              reliable execution. Built for the modern market.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/55 transition hover:text-crimson-500"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1" />
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Dios Derivatives. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">
            Trading leveraged products involves a substantial risk of loss and may not be suitable
            for all investors. See our full{' '}
            <a href="#risk-disclaimer" className="underline hover:text-crimson-500">
              Risk Warning
            </a>{' '}
            for details.
          </p>
        </div>
      </div>
    </footer>
  );
}
