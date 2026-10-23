# Surhires — Marketing Website

A colorful, welcoming, responsive **frontend-only recruitment marketing website** built with **Next.js (App Router) + TypeScript + Tailwind CSS v4** for job seekers and hiring teams.

---

## Live Routes & Page Architecture

| Route | Page | Key Sections & Interactive Features |
| --- | --- | --- |
| `/` | **Home** | Hero wash with compact working job search + original candidate/role UI composition, *Built for teams and talent* trust strip, 3-step *How Surhires works*, 6 featured jobs with interactive preview modal, 3 stories with soft lavender accent card, accessible FAQ accordion, gradient CTA banner |
| `/jobs` | **Jobs Listing** | *“Find work that moves you forward”* hero, live keyword/role/company search, location & job-type filters, quick category pills, removable active filter chips, `aria-live` result count, interactive job preview modal, empty state with one-click filter reset |
| `/employers` | **Employers** | *“Meet the people who move your business forward”* hero + hiring funnel snapshot, 4 value pillars, synced 3-tier pricing plans (*Starter*, *Growth — Recommended*, *Scale*), validated client-side *Post a Job* demo form with sample prefill & accessible confirmation state, Employer FAQ |

Shared sticky translucent `Navbar` (with keyboard-accessible mobile drawer) and the modular Framer Motion + Lucide React `Footer` (`Footer.tsx`, `FooterCTA.tsx`, `FooterNewsletter.tsx`, `FooterLinks.tsx`, `SocialLinks.tsx`, `FooterBottomBar.tsx`, and `FooterAmbientGlow.tsx`) render across every route via `src/app/layout.tsx` with `MotionConfig reducedMotion="user"`.

---

## Getting Started

### Prerequisites
- **Node.js** 20+ and **npm**

### Install & Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to explore all three routes.

### Quality & Verification Scripts

```bash
npx next typegen      # Generate Next.js route types
npm run typecheck     # TypeScript strict check (tsc --noEmit)
npm run lint          # ESLint verification
npm run build         # Production Next.js build
npm run start         # Serve production build locally
```

---

## Design System Choices (`src/app/globals.css`)

### Color System — *Colorful, not chaotic*

Surhires pairs a warm off-white canvas (`#FFFCF7`) and deep brand navy (`#172554`) with vivid violet (`#7C3AED`) for primary actions, teal (`#0D9488` / `#0F766E`) for secondary actions and positive states, and restrained coral (`#F97360`) and sunshine (`#FACC15`) highlights.

| Token | Hex | Usage |
| --- | --- | --- |
| `brand-950` | `#172554` | Headings, wordmark, strong UI text |
| `brand-800` | `#1E3A8A` | Navigation hover accents |
| `violet-600` / `violet-700` | `#7C3AED` / `#6D28D9` | Primary CTA buttons, active states, focus ring (WCAG AA 5.70:1+ with white text) |
| `violet-100` | `#EDE9FE` | Eyebrow pills, soft icon tiles, highlighted plan accents |
| `teal-600` / `teal-700` | `#0D9488` / `#0F766E` | Supporting accents, icons, accessible secondary buttons |
| `teal-100` | `#CCFBF1` | Soft badges, matched role highlights |
| `coral-500` / `coral-100` | `#F97360` / `#FFE4DE` | Decorative accents, contract/salary pills, step tiles |
| `sunshine-400` / `sunshine-100` | `#FACC15` / `#FEF9C3` | Subtle spark details, rating & part-time pills |
| `canvas` / `surface` / `surface-muted` | `#FFFCF7` / `#FFFFFF` / `#F4F3FF` | Alternating section surfaces for crisp card separation |
| `text-primary` / `text-secondary` | `#172033` / `#596579` | High-contrast body copy (15.8:1 and 5.7:1+ contrast) |
| `success` / `error` | `#15803D` / `#B91C1C` | Inline validation & confirmation banners |

### Decorative Gradients
- **Hero wash:** `linear-gradient(135deg, #EDE9FE 0%, #CCFBF1 55%, #FFFCF7 100%)`
- **CTA banner:** `linear-gradient(90deg, #7C3AED 0%, #0D9488 100%)`
- **Footer surface:** Crisp white (`#FFFFFF`) with a multi-accent gradient hairline and subtle radial violet/teal/coral ambient glows

### Typography & Motion
- **Font:** **Geist Sans** self-hosted via `next/font/google` (`display: swap`) for zero external font render blocking.
- **Scale:** Fluid hero display (`clamp(2.6rem, 5vw, 4.75rem)`, line-height `1.05`), fluid section headings (`clamp(1.8rem, 3vw, 3rem)`), sentence-case labels and buttons throughout, and comfortable `60–65ch` paragraph widths.
- **Motion:** GPU-only `opacity` and `transform` animations (`fadeUp`, `scaleIn`, gentle ambient hero drift, `200ms` card lift, smooth CSS grid-row accordion expansion). All motion collapses cleanly under `@media (prefers-reduced-motion: reduce)`.

---

## Project Folder Structure

```text
src/
├── app/
│   ├── layout.tsx          # Geist font, metadata, skip-link, Navbar & Footer
│   ├── page.tsx            # Home route (/)
│   ├── jobs/page.tsx       # Jobs Listing route (/jobs)
│   ├── employers/page.tsx  # Employers route (/employers)
│   ├── not-found.tsx       # Branded 404 route
│   ├── sitemap.ts          # Dynamic XML sitemap
│   ├── robots.ts           # Search crawler rules
│   └── globals.css         # Theme tokens, gradients, motion & reduced-motion rules
├── components/
│   ├── layout/             # logo.tsx, navbar.tsx, footer.tsx
│   ├── home/               # hero-section, employer-logos, how-it-works, featured-roles, testimonials, final-cta
│   ├── jobs/               # job-card, job-filters, jobs-explorer, job-preview-modal, empty-state
│   ├── employers/          # pricing-plans, post-job-form, employer-interactive-sections
│   └── ui/                 # container, button, badge, card, section-heading, form-field, faq-accordion
├── data/                   # sample-jobs.ts, pricing-plans.ts, testimonials.ts, faqs.ts
├── lib/                    # utils.ts
└── types/                  # index.ts
```

Pages and static sections are **React Server Components** by default; `"use client"` is scoped exclusively to interactive islands (`Navbar`, `FeaturedRoles`, `JobsExplorer`, `JobFilters`, `JobPreviewModal`, `EmployerInteractiveSections`, `PostJobForm`, and `FaqAccordion`).

---

## Accessibility & SEO Highlights

- **Semantic structure:** Landmark elements (`header`, `nav`, `main`, `section`, `aside`, `footer`), skip-to-content link, and strictly ordered headings (`h1` → `h2` → `h3`) with a single `h1` per route.
- **Keyboard & screen reader support:**
  - Visible `3px` high-contrast violet `:focus-visible` outline across every link, button, chip, and input.
  - Mobile menu exposes `aria-expanded` & `aria-controls`, closes on navigation or `Escape`, and restores focus to its trigger button.
  - Job Preview modal traps scroll, closes on `Escape` or backdrop click, focuses its close button on open, and restores focus to the originating `"View job"` button on close.
  - Form inputs bind explicit `<label htmlFor>`, `aria-invalid`, `aria-describedby`, `role="alert"` error messages with icons, automatic focus to the first invalid control, and a focused `role="status"` confirmation panel.
- **SEO:** Unique route titles, descriptions, canonical URLs, Open Graph / Twitter metadata, `sitemap.xml`, and `robots.txt`.

---

## Assumptions & Scope Disclaimers

1. **Frontend-only assignment:** All 12 job listings, pricing tiers, metrics, and testimonials come from typed local data files under `src/data/`. No authentication, payment processing, or database storage is used by any page. *(An unused `/api/health` endpoint from the sandbox template remains intact solely for preview container health checks.)*
2. **Demo form transparency:** Submitting the *Post a Job* form validates every field client-side and renders an explicit confirmation notice clarifying that no live job listing was published or transmitted.
3. **Original brand & illustrative content:** The Surhires geometric logo mark, UI compositions, company names, and sample stories are original fictional content created for this assignment and imply no real-world commercial endorsement.

---

## Future Improvements

- Sync active `/jobs` filter state back into the browser URL via `router.replace` for shareable filtered links.
- Add dedicated `/jobs/[id]` static pages with Schema.org `JobPosting` JSON-LD structured data.
- Introduce saved-role bookmarking via `localStorage` with a badge count in the navigation bar.
- Add end-to-end Playwright + `@axe-core/playwright` automated accessibility assertions in CI.
