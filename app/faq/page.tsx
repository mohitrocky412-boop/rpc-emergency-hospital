import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import { hospital } from '@/data/hospital';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about RPC Emergency Hospital in Marhowrah, Saran, Bihar — location, contact, accessibility, and directions.',
  alternates: { canonical: '/faq' },
};

const faqs: FaqItem[] = [
  {
    question: 'Where is RPC Emergency Hospital located?',
    answer: `${hospital.address.full}. The hospital is located near both the Marhowrah Post Office and the Marhowrah Railway Station.`,
  },
  {
    question: 'How do I contact the hospital?',
    answer: `You can call the hospital directly at ${hospital.phoneDisplay}, or message us on WhatsApp using the same number. There is also an enquiry form on our Contact page.`,
  },
  {
    question: 'Is the hospital wheelchair accessible?',
    answer:
      'Yes. RPC Emergency Hospital has wheelchair accessible parking, a wheelchair accessible entrance, and a wheelchair accessible exit.',
  },
  {
    question: 'How do I get directions to the hospital?',
    answer:
      'Tap the "Get Directions" button anywhere on this website to open the hospital location in Google Maps, with turn-by-turn navigation from wherever you are. No account or app installation is required.',
  },
  {
    question: 'What departments or services are available?',
    answer:
      "We are in the process of confirming and publishing our full list of departments and services. In the meantime, please call the hospital directly to ask about a specific service you need.",
  },
  {
    question: "What are the hospital's visiting or opening hours?",
    answer:
      'Confirmed timings have not yet been published on this website. Please call the hospital directly for the most accurate, up-to-date information on hours.',
  },
  {
    question: "I can't find the information I need — what should I do?",
    answer: `For anything not covered on this website, please call us at ${hospital.phoneDisplay} and our team will be happy to help.`,
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Quick answers about location, contact, accessibility, and directions."
      />
      <section className="bg-white">
        <div className="container-hospital max-w-3xl py-16 sm:py-20">
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
