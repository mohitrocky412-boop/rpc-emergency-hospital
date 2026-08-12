'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Cross } from 'lucide-react';
import { hospital, nav } from '@/data/hospital';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled ? 'border-ink-100 bg-white/90 backdrop-blur-md shadow-soft' : 'border-transparent bg-cream/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-hospital flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-700 text-white shadow-soft sm:h-10 sm:w-10 group-hover:bg-teal-800 transition-colors">
            <Cross className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold text-ink-900 sm:text-lg">
              RPC Emergency Hospital
            </span>
            <span className="hidden text-[11px] font-mono uppercase tracking-[0.14em] text-teal-700 sm:block">
              Marhowrah &middot; Saran &middot; Bihar
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                pathname === item.href
                  ? 'bg-teal-50 text-teal-800'
                  : 'text-ink-700 hover:bg-ink-50 hover:text-ink-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={hospital.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-teal-800 hover:shadow-lift"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            Call Now
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink-800 hover:bg-ink-100 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-16 z-40 origin-top overflow-hidden border-b border-ink-100 bg-white shadow-lift transition-all duration-300 ease-out sm:top-20 lg:hidden ${
          open ? 'max-h-[28rem] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <nav className="container-hospital flex flex-col gap-1 py-4" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-xl px-4 py-3 text-base font-medium ${
                pathname === item.href ? 'bg-teal-50 text-teal-800' : 'text-ink-800 hover:bg-ink-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={hospital.phoneHref}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-5 py-3.5 text-sm font-semibold text-white shadow-soft"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            Call {hospital.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
