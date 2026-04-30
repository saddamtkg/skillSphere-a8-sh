"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import Reveal from "@/components/shared/Reveal";

const MyProfilePage = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <section className="flex min-h-[40vh] items-center justify-center">
        <p className="text-sm font-medium text-slate-600">Loading profile...</p>
      </section>
    );
  }

  const user = session?.user;

  if (!user) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-xl font-semibold text-slate-900">Profile not found</h1>
        <p className="mt-2 text-sm text-slate-600">
          Please login again to access your profile.
        </p>
        <Link
          href="/login"
          className="mt-5 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
        >
          Go to Login
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl">
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-slate-900/95 px-6 py-8 text-white md:px-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
            My Profile
          </p>
          <h1 className="mt-1 text-2xl font-bold md:text-3xl">Account Information</h1>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "User"}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              ) : (
                <span className="inline-flex h-full w-full items-center justify-center text-xl font-bold text-slate-700">
                  {user.name?.charAt(0)?.toUpperCase() || "U"}
                </span>
              )}
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                {user.name || "Unnamed User"}
              </h2>
              <p className="mt-1 text-sm text-slate-600">{user.email}</p>
            </div>
          </div>

          <div className="mt-7 grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Name
              </p>
              <p className="mt-1 text-sm font-medium text-slate-800">
                {user.name || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Email
              </p>
              <p className="mt-1 text-sm font-medium text-slate-800">
                {user.email || "N/A"}
              </p>
            </div>
          </div>

          <Link
            href="/my-profile/update"
            className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Update Information
          </Link>
        </div>
        </div>
      </Reveal>
    </section>
  );
};

export default MyProfilePage;
