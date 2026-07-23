# Vidant Bhardwaj — Portfolio (Frontend)

React (Vite, plain JavaScript) + Tailwind CSS + Framer Motion.

> Talks to the Express API in `../backend` for the contact form. See that
> folder's README to run it. The contact form falls back to opening your
> mail client automatically if the backend isn't running/deployed yet.

## Getting started

```bash
cp .env.example .env.local   # set VITE_API_URL if the backend isn't on :4000
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Structure

```
src/
  data/                # ALL real content — profile.js, projects.js, skills.js, codingProfiles.js
  components/
    layout/             # Navbar, Footer, Loader, ScrollProgress
    sections/            # Hero, About, Projects, Skills, CodingProfiles, Contact
    shared/               # Placeholder/ImageOrPlaceholder, RevealOnScroll, MagneticButton, Counter, StatImage
  styles/globals.css       # design tokens as utility classes (.card, .btn-primary, .log-label, etc.)
  App.jsx
  main.jsx
public/
  resume.pdf
  images/                  # drop your portrait + project screenshots here — see root README checklist
  favicon.svg, og-image.svg, robots.txt, sitemap.xml
```

## Placeholder system

See the root `README.md` for the full image checklist. Short version: every
placeholder shows you the exact path it's expecting on the page itself —
drop a file there and it swaps in automatically, no code edits required.

## Notes

- TruthLens is clearly labeled as a **team** hackathon project in its card,
  with your specific contribution called out separately — consistent with
  the honesty principle in the PRD.
- The About section folds achievements and education into a "Milestones"
  strip rather than separate nav sections, per the approved PRD structure.
- Below-the-fold sections rely on Framer Motion's `whileInView` (not route-level
  code-splitting, since this is a single-page Vite SPA) to keep animation
  work off the critical path.

## Deploying to Vercel

1. Push to GitHub, set the project root directory to `frontend/`.
2. Import at [vercel.com/new](https://vercel.com/new) — Vite is auto-detected.
3. Add `VITE_API_URL` as an environment variable pointing at your deployed backend.
4. Deploy.
