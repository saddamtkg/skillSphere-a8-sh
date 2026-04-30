export const metadata = {
  title: "Privacy Policy",
  description:
    "Read how SkillSphere collects, uses, and protects your account and learning data.",
};

const PrivacyPage = () => {
  return (
    <section className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        Legal
      </p>
      <h1 className="mt-1 text-3xl font-bold text-slate-900 md:text-4xl">Privacy Policy</h1>
      <p className="mt-3 text-sm text-slate-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <div className="mt-8 space-y-6 text-sm leading-7 text-slate-700">
        <article>
          <h2 className="text-lg font-semibold text-slate-900">1. Information We Collect</h2>
          <p className="mt-2">
            We collect basic account information such as your name, email address, and profile
            image to provide personalized access to the platform.
          </p>
        </article>

        <article>
          <h2 className="text-lg font-semibold text-slate-900">2. How We Use Your Data</h2>
          <p className="mt-2">
            Your information is used to manage authentication, maintain your learning profile,
            and improve your experience on SkillSphere.
          </p>
        </article>

        <article>
          <h2 className="text-lg font-semibold text-slate-900">3. Data Sharing</h2>
          <p className="mt-2">
            We do not sell your personal information. Data may be shared only with essential
            service providers required to operate the platform securely.
          </p>
        </article>

        <article>
          <h2 className="text-lg font-semibold text-slate-900">4. Data Security</h2>
          <p className="mt-2">
            We use reasonable technical safeguards to protect user data. However, no system is
            completely secure, so users should also keep strong passwords.
          </p>
        </article>

        <article>
          <h2 className="text-lg font-semibold text-slate-900">5. Contact</h2>
          <p className="mt-2">
            For privacy-related questions, contact us at{" "}
            <a className="font-semibold text-slate-900" href="mailto:support@skillsphere.com">
              support@skillsphere.com
            </a>
            .
          </p>
        </article>
      </div>
    </section>
  );
};

export default PrivacyPage;
