import { Phone, MessageCircle } from 'lucide-react';
import { hospital } from '@/data/hospital';

export default function CtaBanner() {
  return (
    <section className="bg-white">
      <div className="container-hospital py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-xl3 bg-teal-800 px-6 py-14 text-center sm:px-14 sm:py-16">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                'radial-gradient(circle at 10% 10%, rgba(255,255,255,0.25), transparent 35%), radial-gradient(circle at 90% 90%, rgba(255,255,255,0.15), transparent 40%)',
            }}
            aria-hidden
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
              Need to reach us right now?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-teal-50 sm:text-base">
              Call the hospital directly, or send us a message on WhatsApp and we'll get back to you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={hospital.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-teal-800 shadow-soft transition-all hover:bg-teal-50 active:scale-[0.98]"
              >
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                {hospital.phoneDisplay}
              </a>
              <a
                href={hospital.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20 active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
