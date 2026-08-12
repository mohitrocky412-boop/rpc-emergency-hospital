import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { hospital } from '@/data/hospital';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for the ${hospital.name} website.`,
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy Policy" title="Privacy policy" />
      <section className="bg-white">
        <div className="container-hospital max-w-3xl space-y-8 py-16 sm:py-20">
          <div className="space-y-3 text-sm leading-relaxed text-ink-600 sm:text-base">
            <p>
              This privacy policy explains how {hospital.name} ("we", "us", "the hospital")
              handles information collected through this website.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-medium text-ink-900">Information we collect</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-600 sm:text-base">
              If you use the enquiry form on this website, we collect the name, phone number, and
              message you choose to provide. This information is used only to open a pre-filled
              message in WhatsApp for you to send to the hospital — it is not stored by this
              website or transmitted to any server other than WhatsApp, which you control.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-medium text-ink-900">How we use contact details</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-600 sm:text-base">
              If you call or message the hospital directly using the phone number or WhatsApp
              link on this website, that conversation happens between you and the hospital
              through your phone or WhatsApp account, subject to WhatsApp's own privacy practices.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-medium text-ink-900">Cookies and analytics</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-600 sm:text-base">
              This website does not currently use tracking cookies or third-party analytics.
              Should that change in the future, this page will be updated to reflect it.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-medium text-ink-900">Contact us</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-600 sm:text-base">
              If you have questions about this privacy policy, please contact the hospital at{' '}
              <a href={hospital.phoneHref} className="font-semibold text-teal-700 hover:text-teal-800">
                {hospital.phoneDisplay}
              </a>
              .
            </p>
          </div>

          <p className="text-xs text-ink-400">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>
    </>
  );
}
