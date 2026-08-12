import type { Metadata } from 'next';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import EnquiryForm from '@/components/EnquiryForm';
import { hospital } from '@/data/hospital';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact RPC Emergency Hospital in Marhowrah, Saran, Bihar. Call +91 79 4742 7538, message on WhatsApp, or send an enquiry.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to RPC Emergency Hospital"
        description="Call, message on WhatsApp, or send an enquiry below."
      />

      <section className="bg-white">
        <div className="container-hospital grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="space-y-4">
            <a
              href={hospital.phoneHref}
              className="card-surface flex items-center gap-4 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-700 text-white">
                <Phone className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span>
                <span className="block text-xs font-mono uppercase tracking-[0.14em] text-ink-400">
                  Call
                </span>
                <span className="block font-display text-lg font-medium text-ink-900">
                  {hospital.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              href={hospital.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface flex items-center gap-4 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span>
                <span className="block text-xs font-mono uppercase tracking-[0.14em] text-ink-400">
                  WhatsApp
                </span>
                <span className="block font-display text-lg font-medium text-ink-900">
                  Message us
                </span>
              </span>
            </a>

            <a
              href={hospital.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface flex items-center gap-4 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-harbor-700 text-white">
                <MapPin className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span>
                <span className="block text-xs font-mono uppercase tracking-[0.14em] text-ink-400">
                  Address
                </span>
                <span className="block font-display text-base font-medium leading-snug text-ink-900">
                  {hospital.address.line1}, {hospital.address.line2}
                </span>
              </span>
            </a>
          </div>

          <div id="enquiry" className="scroll-mt-24">
            <p className="eyebrow mb-4">Make an enquiry</p>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
