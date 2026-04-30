# Assignment Category: category-A8-Orange
## 🎓 SkillSphere – Online Learning Platform

### 🚩🚩 [Explanation Video Link]

---

### 📝 Project Theme
A modern online learning platform where users can explore courses, watch lessons, and enroll in skill-based programs like Web Development, Design, Marketing, and more.

---

### ✅ Key Things You Must Do
*   **GitHub Commits:** Include at least 10 meaningful commits with descriptive messages.
*   **Readme.md:** Include a README file with the project name, purpose, live URL, key features, and any npm packages you have used.
*   **Responsiveness:** Ensure the website is fully responsive on mobile, tablet, and desktop.
*   **Environment Variables:** Secure configuration keys using environment variables.
*   **Unique Design:** Create a unique design that goes with the given Concept.
*   **Host your Application:** You can choose deployment systems like Vercel or Render for hosting.
    *   Ensure that the page doesn't throw any error on reloading from any routes.

---

### 🏗️ Main Requirements

#### 1. Layout Structure
**🔝 Navbar**
*   Logo/Name (SkillSphere)
*   Links: Home, Courses, My Profile
*   **If logged in:** Show user avatar & Logout button
*   **If logged out:** Login / Register buttons

**🔻 Footer**
*   Contact info, Social links, Terms & Conditions, Privacy policy

**📦 Main Layout**
*   Persistent Navbar & Footer
*   Route-based rendering (Next.js App Router)

#### 2. JSON Data Generation
Generate at least 6 courses with the following structure:
```json
{
  "id": 1,
  "title": "Complete Web Development Bootcamp",
  "instructor": "John Doe",
  "duration": "20 hours",
  "rating": 4.8,
  "level": "Beginner",
  "description": "Learn full-stack web development from scratch.",
  "image": "https://postimg.cc",
  "category": "Development"
}
```

#### 3. Home Page Sections
*   **🎥 Hero Section:** Banner / slider (e.g., “Upgrade Your Skills Today 🚀”)
*   **🔥 Popular Courses:** Show Top 3 highest-rated courses.
    *   Card info: Image, Title, Instructor, Rating, View Details button.
*   **📌 Learning Tips Section:** Study techniques, Time management tips.
*   **🏆 Top Instructors Section:** 3–4 instructor cards.
*   **👉 Extra Section:** “Trending Courses” or “New Releases”.

#### 4. All Courses Page
*   Display all course data.
*   Clicking the “Details” button will navigate to the course details page.
*   **🔍 Challenge:** Add a search input to search courses by title.

#### 5. Course Details Page 🔒 (Protected Route)
*   Only accessible if logged in.
*   If not logged in → redirect to login. After login → redirect back.
*   Show: Full course details & Course curriculum (static list).

#### 6. Authentication
**User Login:**
*   Fields: Email, Password, Login button.
*   Social Login: Google only.
*   On Success: Navigate to Home. On Error: Show toast/error message.
*   Link to Register page.

**User Registration:**
*   Fields: Name, Email, Photo-url(link), Password, Register Button.
*   On Success: Navigate to Login.
*   Social Login: Google only (Navigate to Home).
*   *Note: Don’t implement email verification or forget password.*

#### 7. My Profile & Update Feature (Challenge)
*   **My Profile Page:** Show logged-in profile data.
*   **Update Information:**
    *   An "Update" button that takes the user to another route.
    *   Form with 2 fields: Image and Name.
    *   Use [BetterAuth Update User Documentation](https://better-auth.com).

---

### 🛠️ Tech Stack & Other Requirements
*   **Framework:** Next JS (App Router)
*   **CSS:** Tailwind CSS
*   **UI Component:** DaisyUI / HeroUI
*   **Auth:** BetterAuth
*   **Notifications:** Use Toast notifications.
*   **UX:** Show loader on data fetching, Not-found page implementation, No crashes on reload.
*   **NPM Packages (Use at least one):** Animate.css, React-Spring, Motion, Swiper js.

---

### 📤 What to Submit
*   Your Github Repo Link
*   Your Live Link
