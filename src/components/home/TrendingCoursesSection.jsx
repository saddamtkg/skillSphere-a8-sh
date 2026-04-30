import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

const TrendingCoursesSection = ({ courses = [] }) => {
  return (
    <Reveal className="mb-4 mt-12 rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm md:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
        Trending
      </p>
      <h2 className="mt-1 text-2xl font-bold md:text-3xl">Trending Courses</h2>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800/70 p-4"
          >
            <div>
              <h3 className="text-sm font-semibold md:text-base">{course.title}</h3>
              <p className="mt-1 text-xs text-slate-300">{course.category}</p>
            </div>
            <Link
              href={`/courses/${course.id}`}
              className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-900"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </Reveal>
  );
};

export default TrendingCoursesSection;
