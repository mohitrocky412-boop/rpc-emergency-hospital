import type { ReactNode } from 'react';
import { TrainFront, Mail, Cross } from 'lucide-react';

/**
 * The signature visual element of this design: a simple wayfinding strip
 * that mirrors how a real visitor actually finds this hospital — by
 * walking from two landmarks everyone in Marhowrah already knows.
 */
export default function Wayfinding({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 800 160"
        fill="none"
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Route diagram: Railway Station and Post Office are both near RPC Emergency Hospital"
      >
        <path
          d="M100 80 C 250 20, 350 20, 400 80"
          stroke="#72d5c3"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="route-path animate-dash"
        />
        <path
          d="M400 80 C 450 140, 550 140, 700 80"
          stroke="#72d5c3"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="route-path animate-dash"
          style={{ animationDelay: '0.3s' }}
        />
      </svg>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
        <LandmarkChip icon={<TrainFront className="h-4 w-4" />} label="Railway Station" />
        <LandmarkChip icon={<Cross className="h-5 w-5" />} label="RPC Emergency Hospital" emphasized />
        <LandmarkChip icon={<Mail className="h-4 w-4" />} label="Post Office" />
      </div>
    </div>
  );
}

function LandmarkChip({
  icon,
  label,
  emphasized,
}: {
  icon: ReactNode;
  label: string;
  emphasized?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-soft sm:h-12 sm:w-12 ${
          emphasized
            ? 'border-teal-700 bg-teal-700 text-white'
            : 'border-teal-200 bg-white text-teal-700'
        }`}
      >
        {icon}
      </span>
      <span className={`max-w-[7rem] text-[11px] font-medium leading-tight sm:text-xs ${emphasized ? 'text-ink-900 font-semibold' : 'text-ink-500'}`}>
        {label}
      </span>
    </div>
  );
}
