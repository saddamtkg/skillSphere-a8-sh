"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const SocialAuthButtons = ({ disabled = false }) => {
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({ provider: "google" });
    console.log(data,"google data");
    if (data.error) {
      toast.error(data.error.message);
    } else {
      toast.success("Login successful");
    }
  };
  const handleGitHubLogin = async () => {
    const data = await authClient.signIn.social({ provider: "github" });
    console.log(data,"github data");
    if (data.error) {
      toast.error(data.error.message);
    } else {
      toast.success("Login successful");
    }
  };

  return (
    <div className="mt-5">
      <div className="relative mb-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-200" />
        </div>
        <p className="relative mx-auto w-fit bg-white px-3 text-xs font-medium uppercase tracking-wide text-slate-500">
          or continue with
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={disabled}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70"
          aria-label="Continue with Google"
        >
          <FaGoogle className="text-red-500" />
          Google
        </button>

        <button
          type="button"
          onClick={handleGitHubLogin}
          disabled={disabled}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70"
          aria-label="Continue with GitHub"
        >
          <FaGithub />
          GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialAuthButtons;
