import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { hospital } from '@/data/hospital';

export default function AboutPreview() {
  return (
    <section className="bg-white">
      <div className="container-hospital py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow">About us</p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink-900 sm:text-4xl">
              A hospital placed where you can actually find it
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink-600 sm:text-lg">
            <p>
              {hospital.name} sits in Marhowrah, Saran, right beside the two places most people
              already navigate by — the local Post Office and the Railway Station. That means
              directions are simple: if a rickshaw driver, a neighbour, or a fellow passenger
              knows the station or the post office, they know how to bring you here.
            </p>
            <p>
              The hospital has been built with accessibility in mind, with wheelchair accessible
              parking, entrance, and exit, so arriving and leaving is straightforward for
              patients and visitors alike.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              Read more about us
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
