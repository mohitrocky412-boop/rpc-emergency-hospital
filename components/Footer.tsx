import Link from 'next/link';
import { Phone, MapPin, Cross } from 'lucide-react';
import { hospital, nav } from '@/data/hospital';

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-950 text-ink-200">
      <div className="container-hospital grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-white">
              <Cross className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-semibold text-white">{hospital.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-300">
            Serving Marhowrah and the surrounding Saran district, located right beside two
            landmarks everyone already knows: the Post Office and the Railway Station.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-teal-400">Navigate</h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink-300 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy" className="text-sm text-ink-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-teal-400">Reach us</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-300">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
              <span>
                {hospital.address.line1}
                <br />
                {hospital.address.line2}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-teal-400" />
              <a href={hospital.phoneHref} className="hover:text-white transition-colors">
                {hospital.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-hospital flex flex-col gap-2 py-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {hospital.name}. All rights reserved.</p>
          <p>Marhowrah, Saran, Bihar &ndash; 841418</p>
        </div>
      </div>
    </footer>
  );
}
