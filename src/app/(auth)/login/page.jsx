import { Suspense } from "react";
import LoginForm from "@/components/auth/LoginForm";
import Reveal from "@/components/shared/Reveal";

const loginFormFallback = (
  <div className="flex min-h-[280px] w-full max-w-lg items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
    <span className="loading loading-spinner loading-md text-slate-700" />
  </div>
);

const loginPage = () => {
  return (
    <section className="c-container flex min-h-[calc(100vh-80px)] items-center justify-center py-10">
      <Reveal>
        <Suspense fallback={loginFormFallback}>
          <LoginForm />
        </Suspense>
      </Reveal>
    </section>
  );
};

export default loginPage;
