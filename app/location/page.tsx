import type { Metadata } from 'next';
import { MapPin, TrainFront, Mail, Navigation, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import MapEmbed from '@/components/MapEmbed';
import Button from '@/components/Button';
import Wayfinding from '@/components/Wayfinding';
import { hospital } from '@/data/hospital';

export const metadata: Metadata = {
  title: 'Location & Directions',
  description:
    'RPC Emergency Hospital is located near the Post Office and Railway Station in Marhowrah, Saran, Bihar – 841418. Get directions with one tap.',
  alternates: { canonical: '/location' },
};

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Location"
        title="Getting to RPC Emergency Hospital"
        description="Full address, nearby landmarks, and one-tap directions."
      />

      <section className="bg-white">
        <div className="container-hospital grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="card-surface p-6 sm:p-8">
              <p className="eyebrow mb-2">Full address</p>
              <p className="font-display text-xl font-medium leading-snug text-ink-900 sm:text-2xl">
                {hospital.address.line1}
              </p>
              <p className="mt-1 text-lg text-ink-600">{hospital.address.line2}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={hospital.mapsDirectionsUrl} external icon={<Navigation className="h-4 w-4" strokeWidth={2.5} />}>
                  Get Directions
                </Button>
                <Button href={hospital.phoneHref} variant="secondary" icon={<Phone className="h-4 w-4" strokeWidth={2.5} />}>
                  Call to Ask the Way
                </Button>
              </div>

              <hr className="my-7 border-ink-100" />

              <p className="eyebrow mb-4">Nearby landmarks</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                    <TrainFront className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-800">{hospital.landmarks.railwayStation}</p>
                    <p className="text-sm text-ink-500">The hospital is located near this railway station.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-800">{hospital.landmarks.postOffice}</p>
                    <p className="text-sm text-ink-500">The hospital is located near this post office.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card-surface mt-6 p-6 sm:p-8">
              <p className="eyebrow mb-6">Wayfinding</p>
              <Wayfinding />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <MapEmbed className="h-96 w-full flex-1 lg:h-full" />
            <p className="flex items-start gap-2.5 text-sm text-ink-500">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
              Map data from Google Maps. Tap "Get Directions" above to open turn-by-turn navigation
              in the Google Maps app or website — no account or API key required.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
