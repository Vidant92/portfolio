# Product Requirement Document
## Vidant Bhardwaj — Personal Brand Website
**Status:** Draft for review — no code has been written yet
**Version:** 1.0

---

## 1. Design Philosophy

### Concept: "The Build Log"

Both reference sites work for different reasons. Image 1 (Abhay Parekh) earns its premium feel through **restraint** — a huge dark canvas, one small anchor point, quiet technical texture, and tiny personality details tucked into corners instead of shouted in the hero. Image 2 (Preet Chaudhary) earns its personality through **voice and graphic confidence** — self-aware copy, one bold color moment, tactile hard-shadow shapes.

Neither should be copied. The direction for this site borrows the *principles*, not the *styles*, and applies them to something neither reference does: **honest storytelling from a student who's still building.**

The organizing metaphor is a **build log** — the site reads like a working engineer's journal: dated entries, a running project log, an evolving skillset, real numbers from real contests. It's premium because of restraint, typography, and craft — not because it pretends to be something it isn't. You are a final-year B.Tech CS student. The site should feel confident and expensive *while saying that plainly*, the same way a well-designed personal essay feels more credible than a résumé stuffed with buzzwords.

### Core principles

1. **One accent, used deliberately.** Not five gradients competing for attention — one confident color that shows up at moments that matter (a highlighted word, a button, a stamp) and disappears everywhere else.
2. **Voice over buzzwords.** Copy sounds like you talking, not a template's placeholder text. Short, direct, occasionally dry.
3. **Big type carries the page.** Typography *is* the primary visual element — not decorations, not stock illustrations.
4. **Small rewards for a second look.** An easter egg or two (in the spirit of Image 1's bunny/globe), placed so they don't compete with the main content.
5. **Honesty as a design constraint.** No fabricated job titles, no inflated seniority. The confidence comes from craft quality, not from claims.
6. **Light theme, warm not clinical.** Off-white "paper," not stark hospital white — warmth is what makes light themes feel premium instead of empty.

---

## 2. Color System

*(Proposal — pending your sign-off before implementation.)*

A light, warm, editorial palette with a single confident accent, plus one deep "ink" tone reserved for high-contrast moments (like a closing section or a stat highlight) — this is what gives the site depth without adding more colors.

| Token | Hex | Usage |
|---|---|---|
| `paper` (background) | `#FAF7F2` | Primary background — warm off-white, not stark white |
| `paper-raised` | `#FFFFFF` | Cards / raised surfaces on top of paper |
| `ink` (primary text) | `#14171C` | Headlines, primary body text |
| `ink-muted` | `#5B6169` | Secondary text, captions |
| `accent` (primary) | `#FF5A36` | Burnt-orange/red — CTAs, highlighted words, active states, the one "signature" color |
| `accent-soft` | `#FFE4DB` | Accent tint for subtle backgrounds/badges |
| `deep` (contrast ink) | `#12181F` | Deep navy-charcoal — used for one or two high-contrast "break" sections (e.g. closing/contact) so the page has visual rhythm, not just one long light scroll |
| `deep-paper` | `#F4F1EA` on `deep` sections | Inverted text-on-dark for those sections |
| `line` (borders/dividers) | `#E4DFD4` | Hairline borders, dividers, grid texture |
| `success` | `#3F7A57` | "Currently building / open to X" status dot |

**Why this palette:** the burnt-orange accent is energetic and confident (matches "playful but professional") without being a pastel/candy color, and it's warm rather than corporate-blue — differentiating from the extremely common blue/cyan "tech portfolio" look. The deep charcoal-navy section is the one deliberate contrast break, giving the page rhythm (à la Image 1's dark canvas) without making the whole site dark.

*If you'd rather lean into a different accent family (e.g. a deep forest green, or a muted indigo), say so now — this is the easiest thing to change before build starts.*

---

## 3. Typography

| Role | Typeface (proposed) | Notes |
|---|---|---|
| Display / Headlines | **Fraunces** (variable serif) | Warm, editorial, premium — big serif headlines are the single biggest differentiator from generic sans-only dev portfolios |
| Body | **Inter** | Clean, highly legible at small sizes, pairs well against a serif display |
| Labels / captions / "log" tags | **IBM Plex Mono** | Used sparingly for entry numbers, dates, tags — reinforces the "build log" metaphor without turning the whole site into a code editor |

**Scale (desktop):**
- Hero name: 96–140px, tight tracking, serif
- Section headings: 40–56px
- Body: 17–18px, 1.6 line-height
- Captions/labels: 12–13px mono, uppercase, wide tracking

**Hierarchy rule:** every section opens with a small mono "log" label (e.g. `ENTRY 02 — PROJECTS`) before the big serif heading — this is the one repeated structural motif tying the whole page together, replacing the old "code comment" motif from the previous build.

---

## 4. Layout

- Single-page scroll, section-based (consistent with a portfolio's primary use case: a recruiter scanning top to bottom).
- Generous whitespace — sections given room to breathe rather than packed tightly (this was called out explicitly as a preference).
- Asymmetric grid moments: not everything centered — some sections offset content left/right with the "log" label anchoring the opposite side, avoiding the dead-centered, static feel of Image 1.
- A subtle dot/grid texture (light warm-gray, very low opacity) as background texture on 1–2 sections only — a nod to Image 1's technical texture, used sparingly rather than everywhere.
- One dark "deep" section (contact/closing) breaks the rhythm near the end, so the page isn't one uninterrupted light scroll.
- Section dividers styled as thin hairlines with a small mono page-number-style mark, reinforcing the "log/journal" feel.

---

## 5. Hero Section

Honest, confident, uncluttered.

**Content, top to bottom:**
1. Small mono eyebrow: `ENTRY 01 — INTRODUCTION` or similar
2. Status line: a small dot + `Final Year B.Tech CS Student · Open to SDE / Full-Stack Internships` (real, not fabricated — mirrors Image 1's status-line idea but truthful to your stage)
3. **Huge serif headline:** `Vidant Bhardwaj`
4. A one-line role/positioning statement in a distinct treatment (not a typing animation — a single confident line, possibly with the accent color underlining or highlighting one word)
5. Short story-voice intro paragraph (2–3 sentences, your voice, not a tagline) — something like: solving problems, building full projects end to end, still learning, hackathons as proof of that
6. CTA row: `View My Work`, `Download Résumé` — two, not three or four, kept minimal per Image 2's restraint
7. Social row (GitHub, LinkedIn, LeetCode, GeeksforGeeks, Codeforces, X — X last, per your earlier instruction)
8. One small "easter egg" detail somewhere in a corner (to be decided together — a small doodle, a subtle interactive element, or a tiny stat like "problems solved today" — nothing that competes with the main content)
9. Scroll cue at the bottom

**Explicitly excluded:** typing-loop animations, fake code snippets/IDE windows, oversized buzzword stacks, anything implying professional experience you don't have yet.

---

## 6. About

Framed as the first real "log entry" — narrative, not a bullet dump.

- Large pull-quote style opening line
- 3–4 short paragraphs in your voice covering: who you are today (final year CS student), what you're drawn to (backend + AI), how DSA/competitive programming shaped your habits, what hackathons taught you
- A small "currently" strip: what you're learning right now, in a mono/tag style
- Highlight stats (DSA solved, LeetCode rating, CGPA, hackathon finals) presented as annotated numbers, not generic stat cards — each with a one-line human caption instead of just a label
- Named placeholder for your portrait (see Section 14)

---

## 7. Projects

All **six** projects, in this exact order:

1. CrowdSafe Nexus
2. Deep Packet Inspection Engine
3. MedConnect
4. TruthLens
5. AI Diet Planner
6. Smart Parking Management System

**Per-project card contents:**
- Log-style tag (`ENTRY 02.01`, `02.02`, etc.)
- Project name + one-line tagline
- Named placeholder for a hero image/screenshot (see Section 14)
- Overview paragraph
- Feature list
- Tech stack chips
- Challenges faced
- **Your specific contribution** — critical for TruthLens, which was a **team hackathon project**. The card will clearly say it was built with a team and describe specifically what you owned, rather than implying solo authorship. This keeps the whole page's honesty standard consistent.
- GitHub button (all six have repos) + Live Demo button where applicable (MedConnect)
- Expand/collapse interaction for full detail, keeping the initial scan lightweight

**Filtering:** by technology tag, as before — useful since the six projects now span AI/CV, Java/networking, MERN, and DB-driven systems, which is a wider spread worth letting recruiters filter through.

---

## 8. Skills

Presented as a **toolkit**, not a plain grid of pills — categories get a short one-line editorial framing (e.g. "Languages I think in", "What I reach for on the backend") so it reads as part of the story rather than a resume dump. Categories: Languages, Frontend, Backend, Databases, AI/ML, Tools — same underlying data as before, restyled.

---

## 9. Coding Profiles

LeetCode, GitHub, GeeksforGeeks, Codeforces — in that order, X excluded from this section as before. Live stat cards (contribution graph, streak, LeetCode card) restyled in the new light/warm palette, with skeleton loading and graceful fallback if an external badge service is slow/unreachable.

---

## 10. Contact

This is the one **deep/dark** section — a deliberate rhythm break near the end of the page. Warm, inviting closing copy (not corporate "Let's connect!" boilerplate), contact form, direct email/phone, social row repeated.

Form submits to the backend contact API; if that fails, falls back to opening the visitor's mail client pre-filled (same resilient pattern as before, carried forward since it worked well).

---

## 11. Footer

Minimal: small monogram, social icons, "written & built by Vidant Bhardwaj," back-to-top control. No clutter.

---

## 12. Animations

- Scroll-reveals on section entry (fade + slight rise), used consistently but not excessively — "don't overuse animations" is a stated preference, so motion supports content rather than performing for its own sake
- Magnetic hover on primary CTAs only (not every element)
- Section transitions styled subtly like a page turn (opacity + slight vertical offset) reinforcing the log/journal metaphor
- Numbers (stats) count up once when scrolled into view
- All motion respects `prefers-reduced-motion`

---

## 13. Loading Experience

A short (under ~1.5s), premium loading sequence themed to the build-log concept — e.g. a monogram "stamping" in or a short ink-line draw-on animation — not a generic spinner. Skips automatically on very fast connections/repeat visits within a session so it never feels like a tax on returning visitors.

---

## 14. Skeleton Loading

Shimmer-style loading states (matching the new warm palette) for:
- Portrait and project images once they're wired up
- External coding-profile stat cards/badges
- Any content that loads asynchronously

Skeletons use the `paper-raised` / `line` tones so they feel native to the palette rather than a generic gray box.

---

## 15. Placeholder System

This is being rebuilt specifically to solve the problem you flagged: it should be **obvious and easy** to know exactly which file goes where.

Every placeholder will:
- Visually indicate its purpose (portrait vs. project vs. other) with a distinct icon/style
- **Display the exact expected file path directly on the placeholder itself** — e.g. a portrait placeholder literally shows the label `/public/images/profile.jpg` in the UI, not just a generic silhouette icon
- Show recommended dimensions/aspect ratio next to the path (e.g. `1200×1500 · portrait`)
- Be swappable by dropping the file at that exact path — no code changes needed
- Include a short checklist in the README listing every expected image path in one place, so you can see everything you still need to add at a glance instead of hunting through components

This applies to: your portrait, and one hero image per project (six total).

---

## 16. Accessibility

- WCAG AA contrast minimum for all text — the accent orange (`#FF5A36`) will be checked against `paper` and adjusted if needed for text use vs. background-only use
- Full keyboard navigation, visible focus rings in the accent color
- Semantic heading order, landmark regions, skip-to-content link
- Alt text on every image (including placeholders, describing what will go there)
- `prefers-reduced-motion` fully respected
- Form fields properly labeled, with accessible error states

---

## 17. SEO

- Full metadata: title, description, keywords accurate to your actual stage (student, not job titles you don't hold)
- Open Graph + Twitter Card image
- JSON-LD `Person` structured data
- `sitemap.xml`, `robots.txt`
- Custom favicon/monogram
- Semantic HTML throughout so content is crawlable without relying on JS execution where avoidable

---

## 18. Performance

- Target Lighthouse ≥ 95 across Performance/Accessibility/Best Practices/SEO
- Code-splitting for below-the-fold sections
- Lazy-loaded images with proper `width`/`height` to avoid layout shift
- Font subsetting/preloading for the serif + sans + mono trio (three type families is more than the previous build — will be watched carefully so it doesn't hurt load time; likely 2 weights each, subset to used characters)
- Minimal animation library footprint; avoid animating properties that trigger layout/repaint where possible

---

## 19. Mobile Experience

- Type scale steps down proportionally (hero name ~48–64px on mobile vs. 96–140px desktop)
- Single-column stacking for all multi-column sections
- Touch targets ≥ 44px
- Hamburger nav with the same section list
- Reduced/simplified motion on mobile (shorter distances, fewer simultaneous animations) both for feel and for performance on lower-end devices
- Dark "deep" contact section and all placeholders behave identically on mobile — no feature is dropped, only re-laid-out

---

## 20. Folder Structure

Consistent with your MERN comfort and the production-style split you asked for previously:

```
portfolio/
├── frontend/                  # React + Vite (JavaScript)
│   ├── public/
│   │   └── images/            # portrait + project images live here (see placeholder system)
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/        # Navbar, Footer, Loader, ScrollProgress, etc.
│   │   │   ├── sections/      # Hero, About, Projects, Skills, CodingProfiles, Contact
│   │   │   └── shared/        # RevealOnScroll, Placeholder, Skeleton, etc.
│   │   ├── data/               # projects.js, skills.js, profile.js — all real content, one place
│   │   ├── hooks/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── .env.example
├── backend/                   # Node.js + Express + MongoDB
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── config/
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── README.md
```

---

## 21. Tech Stack

Per your preference — sticking with **MERN + plain JavaScript** (no TypeScript) since that's what you're most comfortable debugging yourself:

| Layer | Choice | Why |
|---|---|---|
| Frontend framework | **React (Vite, JavaScript)** | Fast dev server, no build complexity of a meta-framework you'd have to learn to debug |
| Styling | **Tailwind CSS** | Fast to build with, easy to tweak values yourself without hunting through separate CSS files |
| Animation | **Framer Motion** | Works identically in plain JS, no TypeScript required |
| Icons | **lucide-react** + **react-icons** | Covers both UI icons and brand/coding-profile icons |
| Backend | **Node.js + Express** | Matches MERN, simple mental model, easy to extend |
| Database | **MongoDB (Atlas free tier) via Mongoose** | Matches MERN "M," used for contact-form submissions |
| Email (optional) | **Nodemailer** | Only if/when you add SMTP credentials — falls back gracefully without them |
| Deployment | **Vercel** (frontend) + **Render** (backend) | Free tiers, matches your earlier deployment target |

*Where JavaScript/MERN genuinely can't cover something well (e.g. if we end up wanting server-rendered SEO beyond what a Vite SPA + prerendering gives us), I'll flag it plainly and propose the smallest reasonable addition rather than silently switching stacks on you.*

---

## 22. Implementation Plan

No code until you approve this PRD. Once approved, proposed build order:

1. **Foundations** — repo/folder scaffold, Tailwind + font setup, color/type tokens as a real design-system file (so every later step just consumes tokens rather than hardcoding values)
2. **Hero + Navbar + Footer** — get the core shell and the most important first impression right before anything else
3. **About + Skills** — narrative and toolkit sections
4. **Projects** — all six, with the full placeholder system wired in from the start
5. **Coding Profiles + Contact (+ backend)** — live stat cards, contact form, Express API
6. **Motion pass** — scroll-reveals, magnetic buttons, loader, page-turn transitions layered on top of a working, static version
7. **Accessibility + SEO + Performance audit** — contrast checks, metadata, Lighthouse pass, image/font optimization
8. **Mobile QA** — full pass at small breakpoints
9. **Deployment** — Vercel + Render, environment variables, final smoke test

---

## Open questions for you before I start building

1. **Accent color** — happy with the burnt-orange (`#FF5A36`), or want to see an alternative direction (deep green, indigo, etc.)?
2. **The one "easter egg" detail in the hero** — any preference, or should I propose a couple of options?
3. **Fraunces (serif) for headlines** — good with a serif for the premium/editorial feel, or would you rather stay all-sans for a cleaner tech look?
4. Anything in this PRD that doesn't feel like "you" — flag it now, it's far cheaper to change here than after it's built.
