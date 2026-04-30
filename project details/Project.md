# SkillSphere – Online Learning Platform
## Project Plan & Task Checklist

---

### 🛠️ Tech Stack (Final Decision)

| টেক | কি ব্যবহার করব | কেন |
|-----|----------------|-----|
| Framework | Next.js 16 (App Router) | Already installed |
| CSS | Tailwind CSS v4 | Already installed |
| UI Library | HeroUI (`@heroui/react`) | Premium look, requirement |
| Authentication | BetterAuth | Assignment requirement |
| Animation | Framer Motion (`motion`) | Assignment npm requirement |
| Icons | Lucide React | Clean & modern |
| Forms | React Hook Form | Validation, requirement |
| Toast | React Hot Toast | Notification requirement |
| Database | Prisma + SQLite (dev) → PostgreSQL (prod) | Simple dev, scalable later |
| Course Data | Static `db.json` (read via Next.js server) | Works in dev & production both |

> **Note:** JSON Server development-only alternative can be used locally, but for Vercel deployment we will read `db.json` directly via server components.

---

### 📦 Packages to Install

> **আমাকে install করতে হবে — এগুলো run করো:**

#### Step 1 — Production Dependencies
```bash
npm install @heroui/react framer-motion better-auth react-hook-form react-hot-toast lucide-react @prisma/client
```

#### Step 2 — Dev Dependencies
```bash
npm install -D prisma json-server
```

#### Step 3 — Prisma Initialize
```bash
npx prisma init --datasource-provider sqlite
```

#### Step 4 — (Optional) JSON Server script add in package.json
```json
"json-server": "json-server --watch src/data/db.json --port 3001"
```

---

### 🔑 Environment Variables (`.env.local`)

```env
# BetterAuth
BETTER_AUTH_SECRET=tomar_random_secret_ki_ekta_likho
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth (Google Cloud Console theke nite hobe)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Database (Prisma SQLite for dev)
DATABASE_URL="file:./dev.db"
```

---

### 🗂️ Folder Structure (Target)

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.js
│   │   └── register/
│   │       └── page.js
│   ├── (main)/
│   │   ├── layout.js              ← Navbar + Footer wrap kora layout
│   │   ├── page.js                ← Home page
│   │   ├── courses/
│   │   │   ├── page.js            ← All Courses (with search)
│   │   │   └── [id]/
│   │   │       └── page.js        ← Course Details (Protected)
│   │   ├── my-profile/
│   │   │   ├── page.js            ← Profile page
│   │   │   └── update/
│   │   │       └── page.js        ← Update name & image
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.js       ← BetterAuth handler
│   ├── not-found.js               ← 404 page
│   ├── globals.css
│   └── layout.js                  ← Root layout (HeroUI + Toast provider)
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── CourseCard.js
│   ├── HeroSlider.js
│   ├── InstructorCard.js
│   └── LoadingSpinner.js
├── lib/
│   ├── auth.js                    ← BetterAuth server config
│   ├── auth-client.js             ← BetterAuth client
│   └── prisma.js                  ← Prisma client singleton
├── data/
│   └── db.json                    ← 6+ courses + instructor data
└── prisma/
    └── schema.prisma              ← Database schema
```

---

### ✅ Task Order — Step by Step (Phase by Phase)

---

### 🧭 Data Mapping — Kon Data Kothai Use Hobe

Base URL (local): `http://localhost:5000`

- **Home Hero Section (`/`)** → `GET /heroSlides`
- **Home Popular Courses (`/`)** → `GET /courses` (client/server e rating desc sort kore top 3 nibo)
- **Home Learning Tips (`/`)** → `GET /learningTips`
- **Home Top Instructors (`/`)** → `GET /instructors` (top 3-4 show korbo)
- **Home Trending Courses (`/`)** → `GET /courses` (category/rating logic diye filtered list)
- **All Courses Page (`/courses`)** → `GET /courses`
- **Courses Search (`/courses`)** → `GET /courses?q=searchText` (na hole client-side filter)
- **Course Details (`/courses/[id]`)** → `GET /courses/:id`

#### Detail Page Extra Data (UI consistency jonno)
- **Related Courses (optional card section)** → `GET /courses?category=...`
- **Instructor highlight (optional)** → `GET /instructors?name=...` (course er instructor namer sathe match)

#### My Profile / Auth Data (Important)
- **`/my-profile` and `/my-profile/update` data source** → `db.json` na, **BetterAuth + Prisma**
- Mane: course/instructor/tips/hero data `json-server` theke, kintu user/session/profile data auth DB theke ashbe

---

#### 🔧 Phase 1: Initial Setup & Configuration

- [ ] **1.1** — Packages install koro (uprokte list dekhো)
- [ ] **1.2** — `src/lib/prisma.js` — Prisma client singleton banao
- [ ] **1.3** — `prisma/schema.prisma` — BetterAuth er jonno User, Session, Account model banao
- [ ] **1.4** — `npx prisma migrate dev --name init` run koro
- [ ] **1.5** — `.env.local` file banao (uprokte template dekhো)
- [ ] **1.6** — `src/lib/auth.js` — BetterAuth server config (Google + credentials)
- [ ] **1.7** — `src/lib/auth-client.js` — BetterAuth client config
- [ ] **1.8** — `src/app/api/auth/[...all]/route.js` — BetterAuth API route
- [ ] **1.9** — `src/app/layout.js` — Root layout a HeroUI Provider + React Hot Toast add koro

---

#### 📊 Phase 2: Course Data Setup

- [ ] **2.1** — `src/data/db.json` banao with **6+ courses** (id, title, instructor, duration, rating, level, description, image, category)
- [ ] **2.2** — `src/data/db.json` a **3-4 instructor** data o rakho (name, title, image, bio, courses_count)
- [ ] **2.3** — Course data read korar utility function banao (`src/lib/data.js`)

**Course JSON Structure:**
```json
{
  "courses": [
    {
      "id": 1,
      "title": "Complete Web Development Bootcamp",
      "instructor": "John Doe",
      "duration": "20 hours",
      "rating": 4.8,
      "level": "Beginner",
      "description": "Learn full-stack web development from scratch.",
      "image": "https://i.postimg.cc/...",
      "category": "Development",
      "curriculum": ["HTML Basics", "CSS & Tailwind", "JavaScript ES6", "React", "Next.js", "MongoDB"]
    }
  ],
  "instructors": [
    {
      "id": 1,
      "name": "John Doe",
      "title": "Senior Web Developer",
      "image": "https://i.postimg.cc/...",
      "courses_count": 5,
      "rating": 4.9
    }
  ]
}
```

---

#### 🏗️ Phase 3: Layout & Navigation

- [ ] **3.1** — `src/app/(main)/layout.js` — Navbar + Footer wrap kora layout
- [ ] **3.2** — `src/components/Navbar.js` — Logo, links, conditional auth state (avatar/logout vs login/register)
- [ ] **3.3** — `src/components/Footer.js` — Contact info, social links, Terms & Conditions, Privacy Policy
- [ ] **3.4** — `src/components/LoadingSpinner.js` — Loader component

---

#### 🏠 Phase 4: Home Page (`/`)

- [ ] **4.1** — **Hero Section** — Banner/Slider with Framer Motion animation ("Upgrade Your Skills Today 🚀", "Learn from Industry Experts")
- [ ] **4.2** — **Popular Courses Section** — Top 3 highest-rated courses fetch kore card a show koro (Image, Title, Instructor, Rating, View Details button)
- [ ] **4.3** — **Learning Tips Section** — Study techniques + Time management tips (static content, nice card layout)
- [ ] **4.4** — **Top Instructors Section** — 3-4 instructor cards (name, title, image, rating)
- [ ] **4.5** — **Trending Courses Section** (extra requirement) — Different category theke course show koro

---

#### 📚 Phase 5: All Courses Page (`/courses`)

- [ ] **5.1** — Sob courses fetch kore grid/list a show koro
- [ ] **5.2** — **Search Functionality** (Challenge) — Title diye search input banao (client-side filter)
- [ ] **5.3** — `src/components/CourseCard.js` — Reusable course card (Image, Title, Instructor, Rating, Level, "View Details" button)

---

#### 🔒 Phase 6: Course Details Page (`/courses/[id]`) — Protected Route

- [ ] **6.1** — Dynamic route setup
- [ ] **6.2** — **Auth check:** Login na hole → `/login` a redirect, login howar por → course page a back redirect
- [ ] **6.3** — Full course details show koro (image, title, instructor, duration, level, rating, description)
- [ ] **6.4** — Static **Course Curriculum** list show koro (e.g., "Module 1: HTML Basics", "Module 2: CSS")

---

#### 🔑 Phase 7: Authentication Pages

- [ ] **7.1** — `src/app/(auth)/login/page.js` — Login form (Email + Password + Google)
  - React Hook Form validation
  - BetterAuth `signIn.email()` + `signIn.social({ provider: "google" })`
  - Error → React Hot Toast
  - Success → Home page redirect
  - Link to Register page
- [ ] **7.2** — `src/app/(auth)/register/page.js` — Register form (Name + Email + Photo URL + Password + Google)
  - React Hook Form validation
  - BetterAuth `signUp.email()`
  - Success → Login page redirect
  - Error → React Hot Toast
  - Link to Login page
- [ ] **7.3** — Google OAuth setup — Google Cloud Console a project banao, OAuth credentials nao, BetterAuth a configure koro

---

#### 👤 Phase 8: My Profile & Update (Challenge)

- [ ] **8.1** — `src/app/(main)/my-profile/page.js` — Logged-in user er info show koro (name, email, photo)
- [ ] **8.2** — "Update" button → `/my-profile/update` a navigate koro
- [ ] **8.3** — `src/app/(main)/my-profile/update/page.js` — Form with 2 fields: **Image URL** + **Name**
- [ ] **8.4** — BetterAuth `updateUser()` use koro profile update korar jonno
- [ ] **8.5** — Success/Error toast notification

---

#### ✨ Phase 9: UX Polish & Animations

- [ ] **9.1** — Framer Motion animation — Hero Section a slide/fade animation
- [ ] **9.2** — Framer Motion — Course cards a hover + entrance animation
- [ ] **9.3** — Loading spinner — Data fetch howar somoy show koro
- [ ] **9.4** — `src/app/not-found.js` — Custom 404 page
- [ ] **9.5** — Full responsiveness check (mobile 📱, tablet 📟, desktop 🖥️)
- [ ] **9.6** — SSR/hydration issues fix (localStorage, window object guards)

---

#### 🚀 Phase 10: Deployment

- [ ] **10.1** — Production DB setup — [Neon](https://neon.tech) (free PostgreSQL) ya [Turso](https://turso.tech) (free SQLite) use koro
- [ ] **10.2** — `prisma/schema.prisma` a provider change koro (`sqlite` → `postgresql`)
- [ ] **10.3** — `npx prisma migrate deploy` production DB a run koro
- [ ] **10.4** — Vercel a deploy koro
- [ ] **10.5** — Vercel a environment variables add koro (BETTER_AUTH_SECRET, BETTER_AUTH_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, DATABASE_URL)
- [ ] **10.6** — Sob routes test koro — reload error nei?

---

#### 📝 Phase 11: Final Checks & Submission

- [ ] **11.1** — `README.md` update koro (project name, purpose, live URL, key features, npm packages used)
- [ ] **11.2** — At least **10 meaningful git commits** check koro
- [ ] **11.3** — Sob requirements ek bar check koro (nicher checklist dekhো)
- [ ] **11.4** — GitHub repo link + Live link submit koro

---

### 📋 Final Assignment Checklist (PDF theke)

#### Must Do
- [ ] At least 10 meaningful GitHub commits
- [ ] README.md (name, purpose, live URL, features, packages)
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] Environment variables for all config keys
- [ ] Unique design
- [ ] Deployed on Vercel (no reload errors on any route)

#### Layout
- [ ] Navbar: Logo, Home, Courses, My Profile, conditional login/avatar
- [ ] Footer: Contact, social links, Terms, Privacy

#### Data
- [ ] 6+ courses with correct JSON schema

#### Home Page
- [ ] Hero Section (banner/slider)
- [ ] Popular Courses (top 3 by rating)
- [ ] Learning Tips Section
- [ ] Top Instructors Section (3-4 cards)
- [ ] Extra Section: Trending Courses (requirement)

#### Courses
- [ ] All Courses page
- [ ] Search by title (Challenge ✨)
- [ ] Course Details page (protected route)
- [ ] Redirect to login if not authenticated, redirect back after login

#### Authentication
- [ ] Login: email/password + Google
- [ ] Register: name, email, photo-url, password + Google
- [ ] Toast on success/error
- [ ] NO email verification / forgot password

#### Profile (Challenge ✨)
- [ ] My Profile page
- [ ] Update profile: name + image URL

#### UX
- [ ] Toast notifications everywhere
- [ ] Loader on data fetch
- [ ] Not-found (404) page
- [ ] No crash on reload
- [ ] At least one animation package: **Framer Motion** ✅

---

### 💡 Code Style Rules (as decided)
- Comments: Banglish a likhbo — `// ai function ta courses fetch korar jonno use kora hoyeche`
- Folder structure: Clean, scalable
- No direct DB call in components — always use `lib/` functions
- Server Components theke data fetch, Client Components a interactivity

---

### 🔗 Important Links
- [BetterAuth Docs](https://better-auth.com/docs)
- [BetterAuth Update User](https://better-auth.com/docs/concepts/users-accounts#update-user)
- [HeroUI Docs](https://www.heroui.com/docs)
- [Framer Motion Docs](https://motion.dev)
- [Prisma Docs](https://www.prisma.io/docs)
- [Neon (Free PostgreSQL)](https://neon.tech)
