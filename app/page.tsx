import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import AboutPreview from '@/components/AboutPreview';
import ServicesSection from '@/components/ServicesSection';
import AccessibilitySection from '@/components/AccessibilitySection';
import LocationPreview from '@/components/LocationPreview';
import CtaBanner from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'RPC Emergency Hospital in Marhowrah, Saran, Bihar — near the Post Office and Railway Station. Wheelchair accessible parking, entrance and exit. Call +91 79 4742 7538.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesSection />
      <AccessibilitySection />
      <LocationPreview />
      <CtaBanner />
    </>
  );
}
