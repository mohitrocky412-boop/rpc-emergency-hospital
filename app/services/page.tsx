import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ServicesSection from '@/components/ServicesSection';
import { hospital } from '@/data/hospital';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Departments and services at RPC Emergency Hospital, Marhowrah, Saran, Bihar, will be listed here as they are confirmed.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our care departments"
        description="We're publishing our verified list of services here. Nothing is listed until it has been confirmed by the hospital."
      />
      <ServicesSection showAll />

      <section className="bg-cream">
        <div className="container-hospital py-14 sm:py-16">
          <div className="card-surface flex flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="font-display text-xl font-medium text-ink-900">
                Looking for a specific department?
              </h3>
              <p className="mt-1 text-sm text-ink-500">
                Call the hospital directly and our team can tell you what's currently available.
              </p>
            </div>
            <a
              href={hospital.phoneHref}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:bg-teal-800"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              {hospital.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
