'use client';

import { FormEvent, useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { hospital } from '@/data/hospital';

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fullName = String(data.get('name') || '');
    const phone = String(data.get('phone') || '');
    const message = String(data.get('message') || '');

    const text = [
      `Enquiry from RPC Emergency Hospital website`,
      `Name: ${fullName}`,
      `Phone: ${phone}`,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    const url = `https://wa.me/${hospital.whatsappNumber}?text=${encodeURIComponent(text)}`;
    setName(fullName);
    setSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  if (submitted) {
    return (
      <div className="card-surface flex flex-col items-center gap-3 px-6 py-14 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-700">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="font-display text-xl font-medium text-ink-900">
          Thanks{name ? `, ${name}` : ''} — enquiry ready to send
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-500">
          We opened WhatsApp with your enquiry pre-filled. Just hit send there, or call us
          directly if you don't hear back right away.
        </p>
        <a href={hospital.phoneHref} className="mt-2 text-sm font-semibold text-teal-700 hover:text-teal-800">
          Call {hospital.phoneDisplay} instead
        </a>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-xs font-medium text-ink-400 hover:text-ink-600"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-5 p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-700">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink-700">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="e.g. 98765 43210"
          className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us briefly what you'd like to ask about"
          className="w-full resize-none rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-teal-800 active:scale-[0.98] sm:w-auto"
      >
        <Send className="h-4 w-4" strokeWidth={2.5} />
        Send Enquiry via WhatsApp
      </button>
      <p className="text-xs text-ink-400">
        Sending an enquiry opens WhatsApp with your details filled in, so you can review and send
        it to the hospital yourself.
      </p>
    </form>
  );
}
