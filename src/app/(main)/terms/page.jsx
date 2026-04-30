const TermsPage = () => {
  return (
    <section className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        Legal
      </p>
      <h1 className="mt-1 text-3xl font-bold text-slate-900 md:text-4xl">
        Terms & Conditions
      </h1>
      <p className="mt-3 text-sm text-slate-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <div className="mt-8 space-y-6 text-sm leading-7 text-slate-700">
        <article>
          <h2 className="text-lg font-semibold text-slate-900">1. Acceptance of Terms</h2>
          <p className="mt-2">
            By using SkillSphere, you agree to these terms and all applicable laws. If you
            do not agree, please do not use the platform.
          </p>
        </article>

        <article>
          <h2 className="text-lg font-semibold text-slate-900">2. User Responsibilities</h2>
          <p className="mt-2">
            You are responsible for maintaining your account security and for all activities
            performed under your account credentials.
          </p>
        </article>

        <article>
          <h2 className="text-lg font-semibold text-slate-900">3. Course Content</h2>
          <p className="mt-2">
            All content is provided for educational purposes. You may not copy, resell, or
            redistribute course materials without permission.
          </p>
        </article>

        <article>
          <h2 className="text-lg font-semibold text-slate-900">4. Account Suspension</h2>
          <p className="mt-2">
            We reserve the right to suspend or terminate accounts that violate platform
            policies, misuse services, or attempt unauthorized actions.
          </p>
        </article>

        <article>
          <h2 className="text-lg font-semibold text-slate-900">5. Changes to Terms</h2>
          <p className="mt-2">
            These terms may be updated from time to time. Continued use of the platform after
            updates means you accept the revised terms.
          </p>
        </article>
      </div>
    </section>
  );
};

export default TermsPage;
