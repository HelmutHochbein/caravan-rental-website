# Caravan Rental Website

A performant, animated single-page website for a motorhome rental business — built with Next.js 16, React 19, and Tailwind CSS v4. Features a multi-step booking inquiry form, GSAP-powered scroll animations, a lightbox gallery, and a cookie-consent-gated Google Maps embed. Deployed to Strato shared hosting via GitHub Actions.

## Problem → Solution → Result

The client needed a mobile-first landing page that communicates trust quickly and converts visitors into booking inquiries — without a backend or database. The solution uses a mailto-based multi-step form (no server required), lazy-loaded video for Core Web Vitals, and GSAP + Framer Motion for polished scroll animations.

## Architecture

```
┌─────────────────────────────────────────┐
│  Next.js 16 App Router (static export)  │
│                                         │
│  src/app/                               │
│  ├── page.tsx           (main page)     │
│  ├── rechtliches/       (legal pages)   │
│  └── components/                        │
│      ├── Hero.tsx       (GSAP + video)  │
│      ├── Gallery.tsx    (lightbox)      │
│      ├── MultiStepForm.tsx  (4-step)    │
│      ├── CalendarSection.tsx            │
│      ├── CookieBanner.tsx  (consent)    │
│      └── ...                            │
│                                         │
│  Static export → SFTP → Strato hosting  │
└─────────────────────────────────────────┘
         │
         │  GitHub Actions CI/CD
         ▼
    Strato shared hosting
```

**No backend** — the booking form composes a pre-filled mailto link. Google Maps loads only after cookie consent.

## Tech Stack

- **Next.js 16** · **React 19** · **TypeScript**
- **Tailwind CSS v4** (PostCSS plugin, no config file)
- **GSAP** + **Framer Motion** for scroll-triggered animations
- **Bun** as package manager / build tool
- **GitHub Actions** → SFTP deploy to shared hosting (see `docs/deploy.yml`)

## Local Setup

```bash
bun install
bun dev          # http://localhost:3000
bun run build    # static export → ./out/
```

## CI/CD

Push to `main` → GitHub Actions builds with Bun → deploys `./out/*` via SFTP.

Required GitHub secrets: `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD`

(The workflow file is at `docs/deploy.yml` — move to `.github/workflows/` to activate.)

## Key Design Decisions

- **Static export** (`output: 'export'`) — no Node.js runtime on shared hosting; pure static files served by Apache.
- **Tailwind v4** — utility-first with CSS custom properties for the brand colour palette, no separate config file.
- **Lazy video** — hero video uses `preload="none"` and loads after LCP to avoid penalising Core Web Vitals on mobile.
- **Cookie-gated Maps** — Google Maps iframe renders only after the user accepts non-essential cookies; before that, a placeholder with a static link is shown.
- **mailto form** — avoids any backend or third-party form service; trade-off is dependency on the visitor's local email client.
