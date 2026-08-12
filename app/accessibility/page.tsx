import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SquareParking, DoorOpen, Accessibility as AccessibilityIcon, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { hospital } from '@/data/hospital';

export const metadata: Metadata = {
  title: 'Accessibility',
  description:
    'RPC Emergency Hospital offers wheelchair accessible parking, entrance, and exit in Marhowrah, Saran, Bihar.',
  alternates: { canonical: '/accessibility' },
};

const icons: Record<string, ReactNode> = {
  parking: <SquareParking className="h-7 w-7" />,
  entrance: <DoorOpen className="h-7 w-7" />,
  exit: <AccessibilityIcon className="h-7 w-7" />,
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Accessibility"
        title="Accessible by design"
        description="RPC Emergency Hospital has confirmed the following wheelchair accessibility features."
      />

      <section className="bg-white">
        <div className="container-hospital py-16 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-3">
            {hospital.accessibility.map((item) => (
              <div key={item.id} className="card-surface p-7">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  {icons[item.id]}
                </span>
                <h2 className="mt-5 font-display text-xl font-medium text-ink-900">{item.label}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 card-surface flex flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="font-display text-xl font-medium text-ink-900">
                Need more accessibility information?
              </h3>
              <p className="mt-1 text-sm text-ink-500">
                For any accessibility need not covered here, please call ahead and our team will
                help you plan your visit.
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
