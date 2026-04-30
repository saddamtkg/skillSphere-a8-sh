import Link from "next/link";
import CourseCard from "@/components/courses/CourseCard";
import Reveal from "@/components/shared/Reveal";

const PopularCoursesSection = ({ courses = [] }) => {
  return (
    <section className="mt-12">
      <Reveal className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Popular Courses
          </p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
            Top Rated Courses
          </h2>
        </div>
        <Link
          href="/courses"
          className="text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900"
        >
          View all
        </Link>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default PopularCoursesSection;
