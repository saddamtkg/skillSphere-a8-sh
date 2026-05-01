# SkillSphere

SkillSphere is an online learning demo where learners browse courses, open course details (protected), and maintain a profile—with email/password login, optional Google and GitHub sign-in via Better Auth (MongoDB), and a configurable public course API (`NEXT_PUBLIC_API_URL`).

## Live URL

Set your deployed site (example placeholder):

- Production: `https://skill-sphere-a8-sh.vercel.app` _(replace with your domain)_

---

## Quick site review

| Area | What you get |
|------|----------------|
| **Home** | Hero slider, curated sections (popular/trending), instructors spotlight, tips. |
| **Courses** | Listing with server-side-friendly data fetch, optional search/filter patterns. |
| **Course detail** | Dynamic route `[id]`; access gated via auth middleware proxy. |
| **Auth** | Login & register (`react-hook-form`), email/password validation, password **show/hide** (eye icon), Google/GitHub tiles. |
| **Profile** | View + update flow for signed-in users. |
| **Polish** | Custom `404`, loading UI, metadata helpers, `next/image` with remote hosts for courses + OAuth avatars. |

**Suggested manual QA:** register → login → open a course → edit profile → try social login on prod with **OAuth env vars scoped to Production** on Vercel (not Preview-only).

---

## Optimization scorecard (estimated)

These are **rough targets** for a production Lighthouse run (Chrome DevTools → Lighthouse → Mobile, clear cache). Exact numbers depend on network, CDN, Render API latency for `NEXT_PUBLIC_API_URL`, and deployed region.

| Category | Estimated range | Notes for this codebase |
|---------|----------------|-------------------------|
| **Performance** | ~78–92 | Next.js App Router + static/dynamic split; hero Swiper/Image cost varies; JSON API latency is the main bottleneck. |
| **Accessibility** | ~90–98 | Form labels, `aria-invalid`/errors, `#main-content` landmark, toggle button with accessible name for password visibility. |
| **Best Practices** | ~92–100 | HTTPS on Vercel; cookies handled by Better Auth; keep secrets server-only (`BETTER_AUTH_SECRET`, OAuth secrets never `NEXT_PUBLIC_`). |
| **SEO** | ~88–95 | Per-route metadata & `metadataBase` pattern via `site-url` helper improves absolute URLs when configured. |

**How to maximize scores:** optimize hero assets (sizes, blur placeholders), tighten Swiper payloads, prefetch only where needed, and ensure course API responds quickly globally.

---

## Core features

- Home page with hero slider, popular courses, trending courses, top instructors, and learning tips.
- Course listing with search.
- Middleware-based protection for `/courses/[id]` and profile routes (see `middleware`/`proxy`).
- Better Auth: email/password + MongoDB adapter; Google & GitHub when env keys are present.
- Profile view/update; loading states and custom `not-found`.

## Tech stack

- Next.js App Router (`next@16`)
- Tailwind CSS v4 + DaisyUI
- Better Auth + official Mongo adapter pattern (`mongodb` + `mongodbAdapter`)
- Framer Motion, Swiper, Lucide (password toggle), react-icons (social icons)
- React Hook Form, React Hot Toast
- Course data via `fetch`/`cache` helpers in `src/lib/data-fetch.js`

## Environment variables

### Local (`.env` / `.env.local`)

```env
BETTER_AUTH_SECRET=your_secure_random_secret
BETTER_AUTH_URL=http://localhost:3000
MONGO_URI=your_mongodb_connection_string
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000

# OAuth (optional; omit if not using social buttons)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

### Vercel

Add **the same keys** used locally. Critically:

- Scope **Production _and_ Preview** for **all** OAuth client vars (`GOOGLE_*`, `GITHUB_*`) if you test the primary domain—Preview-only scopes cause **`500`** on `/api/auth/sign-in/social` on production.
- Set `BETTER_AUTH_URL` and `NEXT_PUBLIC_BASE_URL` to the **canonical HTTPS deployment URL** (not `localhost`).
- Register OAuth redirect URLs with each provider for that origin, for example:

  `https://<your-project>.vercel.app/api/auth/callback/google`  
  `https://<your-project>.vercel.app/api/auth/callback/github`

## Image remote patterns

`next.config.mjs` whitelists common hosts (Unsplash, i.ibb.co, JSON placeholder avatars, **Google/GitHub avatar CDNs**) so authenticated users’ profile images work with `<Image />`.

## Local development

```bash
npm install
npm run dev
```

Optional fake API (`db.json`):

```bash
npm run server
```

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |
| `npm run server` | json-server on port `5000` |

## Project notes

- Client course requests use `NEXT_PUBLIC_API_URL` in `src/lib/data-fetch.js`.
- Better Auth is mounted at `src/app/api/auth/[...all]/route.js`.
- Password visibility toggle implementation: `src/components/auth/PasswordInputWithToggle.jsx` (used by login/register).
