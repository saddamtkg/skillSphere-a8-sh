import Reveal from "@/components/shared/Reveal";

const LearningTipsSection = ({ tips = [] }) => {
  return (
    <Reveal className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        Learning Tips
      </p>
      <h2 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
        Study Smarter Every Day
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {tips.map((tip) => (
          <article
            key={tip.id}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4"
          >
            <h3 className="text-base font-semibold text-slate-900">{tip.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{tip.description}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
};

export default LearningTipsSection;
