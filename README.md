# RPC Emergency Hospital — Website

A production-ready Next.js 14 (App Router) + TypeScript + Tailwind CSS website for
RPC Emergency Hospital, Marhowrah, Saran, Bihar.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
app/                    Pages (App Router) — one folder per route
  page.tsx              Home
  about/page.tsx
  services/page.tsx
  accessibility/page.tsx
  location/page.tsx
  contact/page.tsx
  faq/page.tsx
  privacy-policy/page.tsx
  layout.tsx             Root layout: fonts, SEO defaults, Navbar/Footer
  sitemap.ts              Generates /sitemap.xml
  robots.ts                Generates /robots.txt
  not-found.tsx            Custom 404
components/              Reusable UI components
data/hospital.ts         Single source of truth for all hospital content
lib/structuredData.ts    JSON-LD (schema.org Hospital) builder
public/images/           Static images (OG cover, etc.)
```

## Editing content

Almost everything on the site is driven by **`data/hospital.ts`**. Open that file to:

- Update the phone number, address, or WhatsApp number
- Add real **services/departments** — fill in the `services` array:
  ```ts
  export const services: Service[] = [
    { id: 'general-medicine', name: 'General Medicine', description: 'Short description here.' },
  ];
  ```
  The Services section on the homepage and the `/services` page will automatically
  render these as cards — no other code changes needed.
- Add **doctors**, **facilities**, **timings**, **insurance partners**, **certifications**,
  **awards**, or **testimonials** the same way, using the empty placeholder arrays already
  defined in that file. Each is typed, so your editor will guide you on the shape.

No medical services, doctors, timings, or facilities were invented for this build —
those sections intentionally show a "coming soon" empty state (with a call-to-call prompt)
until real, verified data is added.

## Design system

- Colors, fonts, shadows, and border radii are defined once in `tailwind.config.ts`
  (teal / harbor-blue / ink palette, Fraunces display + Inter body + JetBrains Mono utility type).
- Shared UI patterns live in `components/`: `Button`, `SectionHeading`, `PageHero`,
  `EmptyState`, `MapEmbed`, `Wayfinding` (the landmark route diagram used across the site).

## SEO

- Per-page `<title>` / meta description via each page's exported `metadata`.
- Open Graph + Twitter card image at `public/images/og-cover.png`.
- `Hospital` JSON-LD structured data in the root layout (`lib/structuredData.ts`), built
  only from verified fields in `data/hospital.ts`.
- `/sitemap.xml` and `/robots.txt` are generated automatically from `app/sitemap.ts` and
  `app/robots.ts`.
- Before going live, update `siteUrl` in `data/hospital.ts` to your real production domain
  so canonical URLs, sitemap, and Open Graph tags are correct.

## Maps / directions

No Google Maps API key is required. The site uses:
- A public Google Maps **embed** (`https://maps.google.com/maps?q=...&output=embed`) for the
  inline map.
- A Google Maps **search/directions URL** for the "Get Directions" buttons, which opens
  Google Maps (app or website) with the hospital pre-searched.

Both are built from a single `mapsQuery` string in `data/hospital.ts`.

## Deploying to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to https://vercel.com/new and import the repository.
3. Framework preset: Vercel will auto-detect **Next.js** — no configuration needed.
4. Click **Deploy**.

Or, from the command line:

```bash
npm install -g vercel
vercel
```

Follow the prompts; `vercel --prod` deploys to production once you're happy with a preview.

After deploying, update `siteUrl` in `data/hospital.ts` to your live Vercel URL (or custom
domain) and redeploy so SEO metadata and the sitemap point to the correct address.
