import { MapPin, TrainFront, Mail, Navigation } from 'lucide-react';
import { hospital } from '@/data/hospital';
import SectionHeading from './SectionHeading';
import MapEmbed from './MapEmbed';
import Button from './Button';

export default function LocationPreview() {
  return (
    <section className="bg-cream">
      <div className="container-hospital py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Location"
              title="Find us between two Marhowrah landmarks"
              description="Whether you're arriving by train or asking a neighbour for directions, two familiar landmarks will get you here."
            />
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-sm leading-relaxed text-ink-700 sm:text-base">
                  {hospital.address.line1}, {hospital.address.line2}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  <TrainFront className="h-4 w-4" />
                </span>
                <span className="text-sm leading-relaxed text-ink-700 sm:text-base">
                  Beside {hospital.landmarks.railwayStation}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="text-sm leading-relaxed text-ink-700 sm:text-base">
                  Beside {hospital.landmarks.postOffice}
                </span>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={hospital.mapsDirectionsUrl} external icon={<Navigation className="h-4 w-4" strokeWidth={2.5} />}>
                Get Directions
              </Button>
              <Button href="/location" variant="secondary">
                View full location details
              </Button>
            </div>
          </div>

          <MapEmbed className="h-80 w-full sm:h-96 lg:h-[26rem]" />
        </div>
      </div>
    </section>
  );
}
