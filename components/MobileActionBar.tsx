import { Phone, Navigation } from 'lucide-react';
import { hospital } from '@/data/hospital';

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-px border-t border-ink-100 bg-white/95 backdrop-blur-md shadow-[0_-8px_24px_-8px_rgba(13,26,23,0.15)] lg:hidden">
      <a
        href={hospital.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 bg-teal-700 py-3.5 text-sm font-semibold text-white active:bg-teal-800"
      >
        <Phone className="h-4 w-4" strokeWidth={2.5} />
        Call Now
      </a>
      <a
        href={hospital.mapsDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-harbor-700 py-3.5 text-sm font-semibold text-white active:bg-harbor-800"
      >
        <Navigation className="h-4 w-4" strokeWidth={2.5} />
        Directions
      </a>
    </div>
  );
}
