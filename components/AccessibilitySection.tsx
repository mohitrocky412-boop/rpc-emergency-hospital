import type { ReactNode } from 'react';
import { Accessibility, DoorOpen, SquareParking } from 'lucide-react';
import { hospital } from '@/data/hospital';
import SectionHeading from './SectionHeading';

const icons: Record<string, ReactNode> = {
  parking: <SquareParking className="h-6 w-6" />,
  entrance: <DoorOpen className="h-6 w-6" />,
  exit: <Accessibility className="h-6 w-6" />,
};

export default function AccessibilitySection() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(114,213,195,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(114,213,195,0.15), transparent 45%)',
        }}
        aria-hidden
      />
      <div className="container-hospital relative py-16 sm:py-20">
        <SectionHeading
          eyebrow="Accessibility"
          title="Built to welcome every patient"
          description="Wheelchair accessibility has been confirmed across the parts of the hospital that matter most for arrival and departure."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {hospital.accessibility.map((item, i) => (
            <div
              key={item.id}
              className="rounded-xl2 border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm animate-fadeUp"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/20 text-teal-300">
                {icons[item.id]}
              </span>
              <h3 className="mt-4 font-display text-lg font-medium text-white">{item.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
