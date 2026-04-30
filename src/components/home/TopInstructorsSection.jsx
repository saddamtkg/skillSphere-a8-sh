import Image from "next/image";
import Reveal from "@/components/shared/Reveal";

const TopInstructorsSection = ({ instructors = [] }) => {
  return (
    <Reveal className="mt-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        Top Instructors
      </p>
      <h2 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
        Learn From Experts
      </h2>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {instructors.map((instructor) => (
          <article
            key={instructor.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
              <Image
                src={instructor.image}
                alt={instructor.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <h3 className="mt-3 text-base font-semibold text-slate-900">
              {instructor.name}
            </h3>
            <p className="mt-1 text-sm text-slate-600">{instructor.title}</p>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs">
              <span className="rounded-full bg-amber-100 px-2 py-1 font-semibold text-amber-700">
                {instructor.rating}
              </span>
              <span className="text-slate-500">
                {instructor.students}+ students
              </span>
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
};

export default TopInstructorsSection;
