import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Reveal from "@/components/shared/Reveal";
import { Home, Compass } from "lucide-react";

export const metadata = {
  title: "Page Not Found · SkillSphere",
  description: "The page you are looking for does not exist or was moved.",
};

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="c-container py-12 md:py-20">
        <Reveal className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-8 py-16 text-center shadow-sm md:px-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.28),transparent_55%)]"
          />
          <div className="relative mx-auto max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
              SkillSphere
            </p>
            <p className="mt-8 text-[5.5rem] font-black leading-none tracking-tight text-slate-900 sm:text-[7rem]">
              404
            </p>
            <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              This page wandered off-course
            </h1>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-600 md:text-base">
              The link may be outdated, or we removed it for a smoother learning journey. Pick a direction
              below and continue from our main paths.
            </p>

            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                <Home aria-hidden size={18} strokeWidth={2.25} />
                Back home
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
              >
                <Compass aria-hidden size={18} strokeWidth={2.25} />
                Browse courses
              </Link>
            </div>
          </div>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
