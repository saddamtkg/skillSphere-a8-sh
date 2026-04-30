import CourseCard from "@/components/courses/CourseCard";
import { getAllCourses } from "@/lib/data-fetch";

const coursesPage = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;
  const courses = await getAllCourses();
  const query = resolvedSearchParams?.search?.toLowerCase()?.trim() || "";

  // This filters courses by title based on search query.
  const filteredCourses = query
    ? courses.filter((course) => course.title.toLowerCase().includes(query))
    : courses;

  return (
    <section className="mt-2">
      <div className="mb-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            All Courses
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900 md:text-4xl">
            Explore SkillSphere Courses
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Browse every course and find the right learning path for your goal.
          </p>
        </div>

        <form className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <label
            htmlFor="search"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Search by course title
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="search"
              name="search"
              defaultValue={resolvedSearchParams?.search || ""}
              placeholder="Type course title..."
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-slate-500"
            />
            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {filteredCourses.length ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <p className="text-sm font-medium text-slate-700">
            No course found for &quot;{resolvedSearchParams?.search}&quot;.
          </p>
        </div>
      )}
    </section>
  );
};

export default coursesPage
