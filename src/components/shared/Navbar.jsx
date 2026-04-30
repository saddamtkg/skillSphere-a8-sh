"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/my-profile", label: "My Profile" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // This checks if a link is active.
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <nav className="c-container flex h-16 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="rounded-xl bg-slate-900 p-2 text-white transition-transform duration-200 group-hover:scale-105">
            <GraduationCap size={18} />
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            SkillSphere
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive(link.href)
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/login"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-slate-900 hover:text-slate-900"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Register
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full border-b border-slate-200 bg-white shadow-lg md:hidden"
          >
            <div className="c-container flex flex-col gap-2 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex gap-2">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-center text-sm font-medium text-slate-700"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded-lg bg-slate-900 px-3 py-2 text-center text-sm font-medium text-white"
                >
                  Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
