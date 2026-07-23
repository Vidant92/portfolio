# Vidant Bhardwaj — Portfolio

A premium personal-brand portfolio built around a "build log" concept —
see `PRD-Vidant-Bhardwaj-Portfolio.md` for the full approved design spec.

```
portfolio/
├── frontend/   # React (Vite, JavaScript) + Tailwind + Framer Motion
├── backend/    # Express + MongoDB — powers the contact form
└── README.md   # you are here
```

## Quick start

```bash
# Terminal 1 — backend
cd backend
cp .env.example .env
npm install
npm run dev        # http://localhost:4000

# Terminal 2 — frontend
cd frontend
cp .env.example .env.local
npm install
npm run dev         # http://localhost:5173
```

## 📸 Image checklist — everything you still need to add

Every placeholder on the live site shows its exact expected path directly
on the placeholder itself, so you can't get this wrong — but here's the
full list in one place too:

| # | What | Path | Recommended size |
|---|---|---|---|
| 1 | Your portrait | `frontend/public/images/profile.jpg` | 1200×1500 |
| 2 | CrowdSafe Nexus screenshot | `frontend/public/images/projects/crowdsafe-nexus.png` | 1600×1000 |
| 3 | Deep Packet Inspection Engine screenshot | `frontend/public/images/projects/deep-packet-inspection.png` | 1600×1000 |
| 4 | MedConnect screenshot | `frontend/public/images/projects/medconnect.png` | 1600×1000 |
| 5 | TruthLens screenshot | `frontend/public/images/projects/truthlens.png` | 1600×1000 |
| 6 | AI Diet Planner screenshot | `frontend/public/images/projects/ai-diet-planner.png` | 1600×1000 |
| 7 | Smart Parking System screenshot | `frontend/public/images/projects/smart-parking.png` | 1600×1000 |

**How it works:** drop a file at the exact path above and refresh — the
`ImageOrPlaceholder` component tries to load it automatically, and only
falls back to the labeled placeholder if the file isn't there yet. No code
changes needed either way.

Your résumé PDF is already in place at `frontend/public/resume.pdf`.

## Design system

All color/type tokens live in `frontend/tailwind.config.js` and
`frontend/src/styles/globals.css` — change a value once there and it
propagates everywhere, since every component consumes the tokens (`bg-accent`,
`text-ink-muted`, `.card`, `.btn-primary`, etc.) rather than hardcoded values.

## Content

All real content — projects, skills, achievements, education, socials —
lives in `frontend/src/data/`. Update a project or add a new one by editing
`projects.js`; nothing else needs to change.

## Deployment

- **Frontend** → Vercel (free tier). Root directory: `frontend/`.
- **Backend** → Render/Railway/Fly.io (free tier). Set `CORS_ORIGIN` to your
  deployed frontend URL, and point the frontend's `VITE_API_URL` at the
  deployed backend URL.

See `frontend/README.md` and `backend/README.md` for full details on each half.
