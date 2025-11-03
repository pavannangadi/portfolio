# Pampanna Angadi — Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, animated personal portfolio built with Next.js 16 (App Router) and Tailwind CSS, featuring framer‑motion animations, shadcn/ui components, and Vercel Analytics.

## Features
- Next.js 16 with App Router (SSR/ISR, Turbopack dev server)
- Tailwind CSS 4 with utility‑first styling
- framer‑motion animations for hero and interactions
- shadcn/ui + Radix Primitives (buttons, dialogs, dropdowns, etc.)
- Light/Dark theme toggle via `next-themes`
- Sections: Hero, Skills, Experience, Projects, Contact
- Vercel Analytics integrated

## Tech Stack
- React 19, Next.js 16
- Tailwind CSS 4, tailwindcss-animate
- framer-motion
- shadcn/ui + Radix UI
- TypeScript support configured (mixed JS/TS allowed)

## Getting Started
1. Install dependencies
```bash
pnpm i
# or
npm i
# or
yarn
```

2. Run the development server
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```
Then open `http://localhost:3000`.

3. Production build
```bash
pnpm build && pnpm start
# or
npm run build && npm start
# or
yarn build && yarn start
```

## Project Structure
```text
app/                 # Next.js App Router pages/layouts
  layout.tsx         # Root layout (includes Vercel Analytics)
  page.tsx           # Home page
components/          # shadcn/ui and shared UI primitives
  ui/                # Generated UI components (Radix-based)
src/                 # Client components for portfolio sections
  App.jsx            # Main portfolio composition (sections)
  components/
    Navbar.jsx       # Navbar with logo/title ("Pavan")
    Hero.jsx         # Hero section with animated title
    Skills.jsx       # Skills grid
    Experience.jsx   # Work/experience timeline
    Projects.jsx     # Projects showcase
    Contact.jsx      # Contact section (uses EmailJS)
styles/              # Global styles
public/              # Static assets
```

## Scripts
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint ."
}
```

## Configuration Notes
- Hydration: Browser extensions (e.g., Grammarly) may inject attributes into `<body>`. `app/layout.tsx` uses `suppressHydrationWarning` on `<body>` to avoid noisy hydration warnings during development.
- The UI component set in `components/ui` is Radix‑based and can be extended via shadcn.

## Environment (optional)
- Email sending (Contact form) uses `@emailjs/browser`. If you enable it, configure the required keys as environment variables or in a safe client config per EmailJS docs.

## Deployment
- Recommended: Vercel. Push to GitHub and import the repo into Vercel.
- Build command: `next build`
- Output: Next.js (server/edge as configured)

## License
MIT License © 2025 Pampanna Angadi. See [`LICENSE`](LICENSE).
