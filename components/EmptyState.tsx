import { ClipboardList, Phone } from 'lucide-react';
import { hospital } from '@/data/hospital';

export default function EmptyState({
  title = 'Details coming soon',
  description = 'This information is being confirmed and will be published here shortly.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="card-surface flex flex-col items-center gap-4 px-6 py-14 text-center sm:py-16">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-700">
        <ClipboardList className="h-6 w-6" />
      </span>
      <div className="max-w-md">
        <h3 className="font-display text-xl font-medium text-ink-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">{description}</p>
      </div>
      <a
        href={hospital.phoneHref}
        className="mt-2 inline-flex items-center gap-2 rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-teal-800"
      >
        <Phone className="h-4 w-4" strokeWidth={2.5} />
        Call {hospital.phoneDisplay}
      </a>
    </div>
  );
}
