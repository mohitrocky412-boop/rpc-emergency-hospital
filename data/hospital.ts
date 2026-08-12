/**
 * Central data file for RPC Emergency Hospital.
 *
 * Everything under VERIFIED has been supplied and confirmed.
 * Everything under PLACEHOLDER is intentionally left empty so the
 * hospital can add it later without a developer touching layout code.
 *
 * To add a service, doctor, timing, or facility: fill in the relevant
 * placeholder array/field below. The site will render it automatically.
 */

export const hospital = {
  name: 'RPC Emergency Hospital',
  shortName: 'RPC Emergency Hospital',
  tagline: 'Emergency care for Marhowrah, right by the station',
  phoneDisplay: '+91 79 4742 7538',
  phoneHref: 'tel:+917947427538',
  whatsappNumber: '917947427538',
  whatsappHref:
    'https://wa.me/917947427538?text=' +
    encodeURIComponent('Hello, I would like to make an enquiry at RPC Emergency Hospital.'),
  address: {
    line1: 'Near Post Office, Near Railway Station',
    line2: 'Marhowrah, Saran – 841418, Bihar, India',
    locality: 'Marhowrah',
    district: 'Saran',
    state: 'Bihar',
    postalCode: '841418',
    country: 'India',
    full: 'Near Post Office, Near Railway Station, Marhowrah, Saran – 841418, Bihar, India',
  },
  landmarks: {
    postOffice: 'Marhowrah Post Office',
    railwayStation: 'Marhowrah Railway Station',
  },
  mapsQuery:
    'RPC Emergency Hospital, Near Post Office, Near Railway Station, Marhowrah, Saran, Bihar 841418, India',
  get mapsSearchUrl() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.mapsQuery)}`;
  },
  get mapsEmbedUrl() {
    return `https://maps.google.com/maps?q=${encodeURIComponent(this.mapsQuery)}&z=15&output=embed`;
  },
  get mapsDirectionsUrl() {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(this.mapsQuery)}`;
  },
  accessibility: [
    {
      id: 'parking',
      label: 'Wheelchair accessible parking',
      description: 'Dedicated parking space for visitors and patients using wheelchairs.',
    },
    {
      id: 'entrance',
      label: 'Wheelchair accessible entrance',
      description: 'Step-free entrance for easy access into the hospital.',
    },
    {
      id: 'exit',
      label: 'Wheelchair accessible exit',
      description: 'Step-free exit for safe and easy departure.',
    },
  ],
} as const;

/**
 * PLACEHOLDER — Services / Departments
 * No verified services have been provided yet, so this list is empty.
 * Add items here in this shape once confirmed:
 *
 * { id: 'general-medicine', name: 'General Medicine', description: '...' }
 *
 * The Services section is built to render nicely whether this array
 * has 0, a few, or many entries.
 */
export type Service = {
  id: string;
  name: string;
  description: string;
};
export const services: Service[] = [];

/**
 * PLACEHOLDER — Doctors
 * No verified doctor details have been provided yet. Add entries once
 * confirmed, in this shape:
 *
 * { id: 'dr-name', name: 'Dr. Full Name', qualification: 'MBBS, MD', specialty: '...' }
 */
export type Doctor = {
  id: string;
  name: string;
  qualification: string;
  specialty: string;
};
export const doctors: Doctor[] = [];

/**
 * PLACEHOLDER — Facilities (e.g. ICU, Ambulance, Pharmacy, Lab, Imaging)
 * Nothing has been confirmed yet.
 */
export type Facility = {
  id: string;
  name: string;
  description: string;
};
export const facilities: Facility[] = [];

/**
 * PLACEHOLDER — Timings
 * No confirmed operating hours or 24/7 claims have been provided.
 * Fill in once confirmed, e.g.:
 * { days: 'Monday – Saturday', hours: '9:00 AM – 8:00 PM' }
 */
export type Timing = {
  days: string;
  hours: string;
};
export const timings: Timing[] = [];

/**
 * PLACEHOLDER — Insurance partners, certifications, and awards.
 * Nothing has been confirmed yet.
 */
export const insurancePartners: string[] = [];
export const certifications: string[] = [];
export const awards: string[] = [];

/**
 * PLACEHOLDER — Patient testimonials.
 * None have been supplied or verified.
 */
export type Testimonial = {
  id: string;
  quote: string;
  author: string;
};
export const testimonials: Testimonial[] = [];

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/accessibility', label: 'Accessibility' },
  { href: '/location', label: 'Location' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const;

export const siteUrl = 'https://www.rpcemergencyhospital.in';
