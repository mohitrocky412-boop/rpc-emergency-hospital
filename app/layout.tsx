import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import { getHospitalStructuredData } from '@/lib/structuredData';
import { hospital, siteUrl } from '@/data/hospital';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT', 'WONK'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jbmono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jbmono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${hospital.name} — Marhowrah, Saran, Bihar`,
    template: `%s | ${hospital.name}`,
  },
  description:
    'RPC Emergency Hospital is located near the Post Office and Railway Station in Marhowrah, Saran, Bihar. Wheelchair accessible parking, entrance, and exit. Call +91 79 4742 7538.',
  keywords: [
    'RPC Emergency Hospital',
    'hospital in Marhowrah',
    'Saran Bihar hospital',
    'emergency hospital Marhowrah',
    'hospital near Marhowrah railway station',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: hospital.name,
    title: `${hospital.name} — Marhowrah, Saran, Bihar`,
    description:
      'Located near the Post Office and Railway Station in Marhowrah, Saran, Bihar. Wheelchair accessible parking, entrance, and exit.',
    images: [{ url: '/images/og-cover.png', width: 1200, height: 630, alt: hospital.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${hospital.name} — Marhowrah, Saran, Bihar`,
    description: 'Emergency hospital near the Post Office and Railway Station in Marhowrah, Saran, Bihar.',
    images: ['/images/og-cover.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#0c6259',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = getHospitalStructuredData();

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jbmono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-teal-800 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
