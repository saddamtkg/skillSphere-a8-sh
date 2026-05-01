import Reveal from "@/components/shared/Reveal";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <Reveal className="h-full">
      <article className="h-full flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
        <div className="relative h-60 w-full">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            {course.category}
          </p>
          <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-slate-900">
            {course.title}
          </h3>
          <p className="mt-2 text-sm text-slate-600">{course.instructor}</p>
          <div className="mt-auto pt-4 flex items-center justify-between">
            <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
              {course.rating} / 5
            </span>
            <Link
              href={`/courses/${course.id}`}
              className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800"
            >
              View Details
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
};

export default CourseCard;
