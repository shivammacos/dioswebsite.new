import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Markets', href: '#markets' },
  { label: 'Platforms', href: '#platforms' },
  { label: 'Accounts', href: '#accounts' },
  { label: 'Tools', href: '#tools' },
  { label: 'Company', href: '#about' },
  { label: 'Support', href: '#support' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-crimson-600 text-base font-extrabold text-white shadow-[0_0_16px_rgba(200,16,46,0.5)]">
            D
          </span>
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Dios <span className="text-crimson-500">Derivatives</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/60 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#login"
            className="text-sm font-semibold text-white/70 transition hover:text-white"
          >
            Log In
          </a>
          <a
            href="#open-account"
            className="rounded-full border border-crimson-600/60 bg-crimson-600/80 px-5 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(200,16,46,0.3)] backdrop-blur-sm transition hover:bg-crimson-600 hover:shadow-[0_0_28px_rgba(200,16,46,0.5)]"
          >
            Open Account
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md text-white lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={cn(
          'overflow-hidden border-t border-white/10 bg-white/5 backdrop-blur-2xl transition-[max-height] duration-300 lg:hidden',
          open ? 'max-h-[420px]' : 'max-h-0',
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                onClick={() => setOpen(false)}
                href={link.href}
                className="block rounded-md px-2 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex gap-2 px-2">
            <a
              href="#login"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full border border-white/30 px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Log In
            </a>
            <a
              href="#open-account"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full bg-crimson-600 px-4 py-2 text-center text-sm font-bold text-white"
            >
              Open Account
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
