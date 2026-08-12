import Link from 'next/link';
import { Phone, Home } from 'lucide-react';
import { hospital } from '@/data/hospital';

export default function NotFound() {
  return (
    <section className="bg-cream">
      <div className="container-hospital flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-3xl font-medium text-ink-900 sm:text-4xl">
          We couldn't find that page
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-500 sm:text-base">
          The page you're looking for may have moved. Try heading back home, or call the
          hospital directly if you need help right away.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:bg-teal-800"
          >
            <Home className="h-4 w-4" strokeWidth={2.5} />
            Back to Home
          </Link>
          <a
            href={hospital.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-6 py-3.5 text-sm font-semibold text-teal-800 hover:border-teal-400"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            {hospital.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
