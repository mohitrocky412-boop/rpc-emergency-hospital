import type { Metadata } from 'next';
import { MapPin, TrainFront, Mail, Accessibility } from 'lucide-react';
import { hospital } from '@/data/hospital';
import PageHero from '@/components/PageHero';
import Wayfinding from '@/components/Wayfinding';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'RPC Emergency Hospital is located in Marhowrah, Saran, Bihar, near the Post Office and Railway Station, with wheelchair accessible parking, entrance, and exit.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Rooted in Marhowrah"
        description="A hospital built around a simple idea: care should be easy to find, especially in an emergency."
      />

      <section className="bg-white">
        <div className="container-hospital grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="space-y-6 text-base leading-relaxed text-ink-600 sm:text-lg">
            <p>
              {hospital.name} is located in Marhowrah, in the Saran district of Bihar. The
              hospital's address places it deliberately: right near the Marhowrah Post Office and
              the Marhowrah Railway Station, two of the most recognisable landmarks in the area.
            </p>
            <p>
              That location matters. For anyone arriving from out of town by train, or for a
              local resident giving directions to a friend, "near the railway station and post
              office" is often all the guidance needed to reach the hospital's doors.
            </p>
            <p>
              We've also made sure the basics of arrival are covered — wheelchair accessible
              parking, a wheelchair accessible entrance, and a wheelchair accessible exit — so
              getting in and out of the hospital is straightforward for every visitor.
            </p>
            <p className="text-sm text-ink-400">
              Further details about our departments, medical staff, and facilities will be added
              to this page once confirmed. For anything not yet listed here, please{' '}
              <a href={hospital.phoneHref} className="font-semibold text-teal-700 hover:text-teal-800">
                call the hospital directly
              </a>
              .
            </p>
          </div>

          <div className="card-surface p-6 sm:p-8">
            <p className="eyebrow mb-6">Getting here</p>
            <Wayfinding />
            <ul className="mt-8 space-y-4 text-sm text-ink-600">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                {hospital.address.full}
              </li>
              <li className="flex items-center gap-3">
                <TrainFront className="h-4 w-4 shrink-0 text-teal-600" />
                Near {hospital.landmarks.railwayStation}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-teal-600" />
                Near {hospital.landmarks.postOffice}
              </li>
              <li className="flex items-center gap-3">
                <Accessibility className="h-4 w-4 shrink-0 text-teal-600" />
                Wheelchair accessible parking, entrance &amp; exit
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
