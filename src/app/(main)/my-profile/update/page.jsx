"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { authClient, useSession } from "@/lib/auth-client";

const UpdateProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending, refetch } = useSession();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      image: "",
    },
  });

  useEffect(() => {
    if (!session?.user) return;
    setValue("name", session.user.name || "");
    setValue("image", session.user.image || "");
  }, [session, setValue]);

  // This updates user name and photo URL.
  const onSubmit = async (values) => {
    let result = null;

    if (typeof authClient.updateUser === "function") {
      result = await authClient.updateUser({
        name: values.name,
        image: values.image,
      });
    } else {
      const response = await fetch("/api/auth/update-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          image: values.image,
        }),
      });

      const data = await response.json();
      result = response.ok
        ? { data, error: null }
        : { data: null, error: { message: data?.message || "Update failed." } };
    }

    if (result?.error) {
      toast.error(result.error.message || "Profile update failed.");
      return;
    }

    toast.success("Profile updated successfully!");
    await refetch();
    router.push("/my-profile");
    router.refresh();
  };

  if (isPending) {
    return (
      <section className="flex min-h-[40vh] items-center justify-center">
        <p className="text-sm font-medium text-slate-600">Loading profile data...</p>
      </section>
    );
  }

  if (!session?.user) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-xl font-semibold text-slate-900">User not found</h1>
        <p className="mt-2 text-sm text-slate-600">
          Please login again to update your profile.
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
    <section className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        Update Profile
      </p>
      <h1 className="mt-1 text-2xl font-bold text-slate-900">Edit Your Information</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-slate-500"
            {...register("name", {
              required: "Name is required.",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters.",
              },
            })}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="image" className="mb-1.5 block text-sm font-medium text-slate-700">
            Image URL
          </label>
          <input
            id="image"
            type="url"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-slate-500"
            {...register("image", {
              required: "Image URL is required.",
            })}
          />
          {errors.image && (
            <p className="mt-1 text-xs text-red-600">{errors.image.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Updating..." : "Update Information"}
          </button>
          <Link
            href="/my-profile"
            className="rounded-xl border border-slate-300 px-5 py-2.5 text-center text-sm font-semibold text-slate-700"
          >
            Cancel
          </Link>
        </div>
      </form>
    </section>
  );
};

export default UpdateProfilePage;
