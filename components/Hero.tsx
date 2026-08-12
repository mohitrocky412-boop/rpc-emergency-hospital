import { Phone, Navigation, MessageSquareText, MapPin } from 'lucide-react';
import Button from './Button';
import Wayfinding from './Wayfinding';
import { hospital } from '@/data/hospital';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        className="absolute inset-0 -z-10 opacity-[0.6]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(15,125,114,0.10), transparent 45%), radial-gradient(circle at 85% 10%, rgba(57,102,172,0.10), transparent 40%)',
        }}
        aria-hidden
      />
      <div className="container-hospital grid gap-12 pb-16 pt-10 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24 lg:pt-20">
        <div className="animate-fadeUp">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-500 animate-pulseSoft" />
            Marhowrah, Saran &middot; Bihar 841418
          </span>
          <h1 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.08] text-ink-900 sm:text-5xl lg:text-[3.4rem]">
            RPC Emergency Hospital,
            <span className="block text-teal-700">right beside the station.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-600 sm:text-lg">
            Easy to find, easy to reach — steps from the Marhowrah Post Office and Marhowrah
            Railway Station. Wheelchair accessible parking, entrance, and exit throughout.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={hospital.phoneHref} icon={<Phone className="h-4 w-4" strokeWidth={2.5} />}>
              Call Now
            </Button>
            <Button
              href={hospital.mapsDirectionsUrl}
              variant="secondary"
              external
              icon={<Navigation className="h-4 w-4" strokeWidth={2.5} />}
            >
              Get Directions
            </Button>
            <Button
              href="/contact#enquiry"
              variant="ghost"
              icon={<MessageSquareText className="h-4 w-4" strokeWidth={2.5} />}
            >
              Make an Enquiry
            </Button>
          </div>

          <div className="mt-9 flex items-start gap-2.5 text-sm text-ink-500">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
            <span>{hospital.address.line1}, {hospital.address.line2}</span>
          </div>
        </div>

        <div className="relative animate-fadeUp [animation-delay:150ms]">
          <div className="card-surface overflow-hidden p-6 sm:p-8">
            <p className="eyebrow mb-6">How people find us</p>
            <Wayfinding />
            <p className="mt-6 text-sm leading-relaxed text-ink-500">
              If you can find the railway station or the post office in Marhowrah, you can find
              us — we sit right between the two.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {hospital.accessibility.map((a) => (
                <span
                  key={a.id}
                  className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-800"
                >
                  {a.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
