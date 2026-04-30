"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const readUrlSearchParams = () =>
  typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();

const CourseSearchForm = ({ initialSearch = "" }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchText, setSearchText] = useState(initialSearch);

  // This handles search submit and clears query on empty input.
  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedValue = searchText.trim();

    if (!trimmedValue) {
      router.push(pathname);
      return;
    }

    const params = readUrlSearchParams();
    params.set("search", trimmedValue);
    router.push(`${pathname}?${params.toString()}`);
  };

  // This clears search query instantly when input becomes empty.
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchText(value);

    if (!value.trim() && readUrlSearchParams().get("search")) {
      const params = readUrlSearchParams();
      params.delete("search");
      const queryString = params.toString();
      router.replace(queryString ? `${pathname}?${queryString}` : pathname);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <label htmlFor="search" className="mb-2 block text-sm font-medium text-slate-700">
        Search by course title
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="search"
          name="search"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Type course title..."
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-slate-500"
        />
        <button
          type="submit"
          className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default CourseSearchForm;
