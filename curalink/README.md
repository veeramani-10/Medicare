# Curalink — Premium Healthcare Landing Page

A production-ready, original healthcare SaaS landing page built with React + Vite,
Tailwind CSS, Framer Motion, and React Icons. Inspired by the brief you gave me
(white + purple + blue gradient, glassmorphism, premium SaaS feel) — not a copy
of any specific reference.

## Getting started

This was built without internet access on my end, so dependencies have **not**
been installed yet. On your machine, with a normal internet connection:

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## What's inside

```
src/
  components/   Reusable UI: Navbar, Button, GlassCard, FAQAccordion,
                TestimonialCarousel, ThemeToggle, CustomCursor, ChatButton,
                ScrollProgressBar, BackToTop, AnimatedCounter, VitalLine, etc.
  sections/     Hero, Features, DashboardShowcase, TrustedCompanies,
                Doctors, Appointment, Testimonials, FAQ, CTABanner, Footer
  hooks/        useTheme, useScrollProgress, useCounter, useMediaQuery
  utils/        data.js — all placeholder copy (doctors, features, FAQs,
                testimonials, stats) in one place, easy to swap for real content
```

## Design notes

- **Palette**: white/near-white surfaces with a violet-to-blue gradient
  (`#7C3AED → #3B82F6`) as the single recurring accent — used sparingly on
  CTAs, icons, and the signature "vital line" motif rather than everywhere.
- **Type**: Plus Jakarta Sans for display/headings, Inter for body copy,
  Space Grotesk for numeric data (stats, counters) — loaded via Google Fonts
  in `index.html`.
- **Signature element**: `VitalLine.jsx` — a heartbeat/pulse line that draws
  itself in once scrolled into view, used as a section divider. It's the one
  motif this design should be remembered by.
- **Content**: Doctor portraits use randomuser.me placeholder photos, and
  hero/dashboard imagery uses Unsplash placeholder photography — swap these
  for your own licensed assets before shipping to production. Company logos
  in the "Trusted by" section are original placeholder wordmarks (not real
  company names/logos), since I can't reproduce real brand marks.

## Swapping in real content

Everything text-based (doctor names, FAQs, testimonials, feature copy,
company names) lives in `src/utils/data.js`. Update that one file and it
flows through every section automatically.

## Notes on "bonus features"

Implemented: scroll-reveal animations, animated counters, glassmorphism
cards, gradient/ripple buttons, floating elements + mouse parallax in the
hero, scroll progress bar, back-to-top button, dark/light mode toggle,
loading skeletons, lazy-loaded below-the-fold sections, FAQ accordion,
testimonial carousel, floating chat button, animated background blobs,
custom cursor (desktop/fine-pointer only, auto-disabled on touch),
page fade-in, and `prefers-reduced-motion` support throughout.

A few items from the original wishlist are environment-dependent rather
than code you can ship as-is:
- **"Interactive map"** is built as a stylized, dependency-free SVG map with
  clickable pins (no external API key required). If you want a real Google
  Maps/Mapbox embed, drop in `@react-google-maps/api` or `react-map-gl` and
  swap the markup in `src/sections/Appointment.jsx`.
- **Lighthouse 95+** depends on final images/fonts/hosting — the code here
  (lazy loading, `loading="lazy"` on images, minimal JS on the critical
  path) is written to make that achievable, but only a real Lighthouse run
  after deployment can confirm the score.
