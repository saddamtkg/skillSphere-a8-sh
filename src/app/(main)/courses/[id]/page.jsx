import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/shared/Reveal";
import { getCourseById } from "@/lib/data-fetch";

const courseDetailsPage = async ({ params }) => {
  const resolvedParams = await params;
  const course = await getCourseById(resolvedParams?.id);

  if (!course) {
    notFound();
  }

  const staticCurriculum = [
    "Introduction and course roadmap",
    "Core concepts and practical examples",
    "Project building step by step",
    "Best practices and real-world tips",
    "Final review and next learning path",
  ];

  return (
    <section className="mx-auto max-w-4xl">
      <Link
        href="/courses"
        className="mb-5 inline-flex text-sm font-semibold text-slate-700 hover:text-slate-900"
      >
        ← Back to courses
      </Link>

      <Reveal>
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="relative h-56 w-full md:h-80">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        <div className="p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {course.category} · {course.level}
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
            {course.title}
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Instructor: {course.instructor} · Duration: {course.duration} · Rating:{" "}
            {course.rating}
          </p>
          <p className="mt-5 leading-7 text-slate-700">{course.description}</p>

          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-900">Course Curriculum</h2>
            <ul className="mt-3 space-y-2">
              {staticCurriculum.map((item, index) => (
                <li key={item} className="text-sm text-slate-700">
                  {index + 1}. {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </article>
      </Reveal>
    </section>
  );
};

export default courseDetailsPage
