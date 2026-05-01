# SkillSphere

SkillSphere is an online learning platform where users can explore courses, view details, and manage profiles with authentication.

## Live URL

Add your deployed URL:

- Production: `https://your-domain.vercel.app`

## Core Features

- Home page with hero slider, popular courses, trending courses, top instructors, and learning tips.
- Course list with title-based search.
- Protected route flow for courses and profile pages.
- Better Auth email/password login and registration.
- Profile view and profile update.
- Loading states, custom 404 page, and route-level metadata.

## Tech Stack

- Next.js App Router (`next@16`)
- Tailwind CSS v4 + DaisyUI
- Better Auth + MongoDB adapter
- Framer Motion + Swiper
- React Hook Form + React Hot Toast

## Environment Variables

Create `.env.local` for local development:

```env
BETTER_AUTH_SECRET=your_secure_random_secret
BETTER_AUTH_URL=http://localhost:3000
MONGO_URI=your_mongodb_connection_string
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Vercel Environment Variables

Set these in Vercel Project Settings:

- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL` (example: `https://your-domain.vercel.app`)
- `MONGO_URI`
- `NEXT_PUBLIC_BASE_URL` (same as deployed site URL)
- `NEXT_PUBLIC_API_URL` (public API/fake-server URL)

## Local Development

Install dependencies:

```bash
npm install
```

Run Next.js dev server:

```bash
npm run dev
```

Run fake API server (`db.json`):

```bash
npm run server
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run server` - Start json-server on port `5000`

## Notes

- Client data fetch uses `NEXT_PUBLIC_API_URL` in `src/lib/data-fetch.js`.
- Better Auth API is served from `src/app/api/auth/[...all]/route.js`.
