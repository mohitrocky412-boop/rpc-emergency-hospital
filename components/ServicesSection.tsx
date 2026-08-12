import { Stethoscope, ArrowUpRight } from 'lucide-react';
import { services } from '@/data/hospital';
import SectionHeading from './SectionHeading';
import EmptyState from './EmptyState';
import Link from 'next/link';

export default function ServicesSection({ showAll = false }: { showAll?: boolean }) {
  const list = showAll ? services : services.slice(0, 6);

  return (
    <section className="bg-white">
      <div className="container-hospital py-16 sm:py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Care departments"
            description="Verified departments and services will be listed here as they are confirmed by the hospital."
          />
          {!showAll && services.length > 6 && (
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              View all services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="mt-10">
          {list.length === 0 ? (
            <EmptyState
              title="Services list coming soon"
              description="We're confirming our full list of departments and services. Please call the hospital to ask about a specific department in the meantime."
            />
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((service, i) => (
                <div
                  key={service.id}
                  className="card-surface group p-6 transition-all hover:-translate-y-1 hover:shadow-lift animate-fadeUp"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                    <Stethoscope className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-medium text-ink-900">{service.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{service.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
