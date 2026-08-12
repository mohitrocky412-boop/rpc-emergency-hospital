import { hospital, siteUrl } from '@/data/hospital';

/**
 * MedicalOrganization / Hospital structured data.
 * Only fields that have been verified by the hospital are included.
 * Do NOT add ratings, reviews, opening hours, or amenity claims here
 * unless they have been explicitly confirmed — see data/hospital.ts.
 */
export function getHospitalStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hospital',
    name: hospital.name,
    url: siteUrl,
    telephone: hospital.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: hospital.address.line1,
      addressLocality: hospital.address.locality,
      addressRegion: hospital.address.state,
      postalCode: hospital.address.postalCode,
      addressCountry: 'IN',
    },
    accessibilityFeature: hospital.accessibility.map((a) => a.label),
    hasMap: hospital.mapsSearchUrl,
    isAccessibleForFree: false,
  };
}
