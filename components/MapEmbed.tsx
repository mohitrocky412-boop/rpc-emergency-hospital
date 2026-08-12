import { hospital } from '@/data/hospital';

export default function MapEmbed({ className = '' }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl2 border border-ink-100 shadow-card ${className}`}>
      <iframe
        title={`Map showing ${hospital.name} in Marhowrah, Saran, Bihar`}
        src={hospital.mapsEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 320 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
