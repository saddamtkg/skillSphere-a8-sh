"use client";

import { signUp } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PasswordInputWithToggle from "./PasswordInputWithToggle";
import SocialAuthButtons from "./SocialAuthButtons";

const RegisterForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // This handles user registration with name, email, image and password.
  const onSubmit = async (values) => {
    setServerError("");

    const result = await signUp.email({
      name: values.name,
      email: values.email,
      password: values.password,
      image: values.image,
    });

    if (result?.error) {
      const message =
        result.error.message || "Registration failed. Please try again.";
      setServerError(message);
      toast.error(message);
      return;
    }

    toast.success("Account created successfully!");
    router.push("/login");
    router.refresh();
  };

  return (
    <div className="w-full max-w-lg min-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        Get Started
      </p>
      <h1 className="mt-1 text-2xl font-bold text-slate-900">
        Create an Account
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        aria-label="Create SkillSphere account"
        className="mt-6 space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your full name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "register-name-error" : undefined}
            autoComplete="name"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-slate-500"
            {...register("name", {
              required: "Name is required.",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters.",
              },
            })}
          />
          {errors.name && (
            <p
              id="register-name-error"
              role="alert"
              className="mt-1 text-xs text-red-600"
            >
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "register-email-error" : undefined}
            autoComplete="email"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-slate-500"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email.",
              },
            })}
          />
          {errors.email && (
            <p
              id="register-email-error"
              role="alert"
              className="mt-1 text-xs text-red-600"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="image"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Photo URL
          </label>
          <input
            id="image"
            type="url"
            placeholder="https://example.com/photo.jpg"
            aria-invalid={errors.image ? "true" : "false"}
            aria-describedby={errors.image ? "register-image-error" : undefined}
            autoComplete="off"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-slate-500"
            {...register("image", {
              required: "Photo URL is required.",
            })}
          />
          {errors.image && (
            <p
              id="register-image-error"
              role="alert"
              className="mt-1 text-xs text-red-600"
            >
              {errors.image.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Password
          </label>
          <PasswordInputWithToggle
            id="password"
            aria-invalid={errors.password ? "true" : "false"}
            aria-describedby={
              errors.password ? "register-password-error" : undefined
            }
            autoComplete="new-password"
            registerProps={register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters.",
              },
            })}
          />
          {errors.password && (
            <p
              id="register-password-error"
              role="alert"
              className="mt-1 text-xs text-red-600"
            >
              {errors.password.message}
            </p>
          )}
        </div>

        {serverError && (
          <p role="alert" className="text-sm text-red-600">
            {serverError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Creating account..." : "Register"}
        </button>
      </form>
      <SocialAuthButtons disabled={isSubmitting} />

      <p className="mt-5 text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-slate-900 hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
