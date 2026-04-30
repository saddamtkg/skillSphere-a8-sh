import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/my-profile", label: "My Profile" },
];

const legalLinks = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
];

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: FaFacebookF },
  { href: "https://github.com", label: "GitHub", icon: FaGithub },
  { href: "https://linkedin.com", label: "LinkedIn", icon: FaLinkedinIn },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="c-container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold text-white">SkillSphere</h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Learn practical skills with modern courses, expert mentors, and a
            smooth learning journey.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-slate-400" />
              <a
                href="mailto:support@skillsphere.com"
                className="transition-colors duration-200 hover:text-white"
              >
                support@skillsphere.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-slate-400" />
              <a
                href="tel:+8801700000000"
                className="transition-colors duration-200 hover:text-white"
              >
                +880 1700-000000
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-slate-400" />
              Thakurgaon, Rangpur, Bangladesh
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
            Social & Legal
          </h4>
          <div className="mt-4 flex items-center gap-2">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-700 p-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:text-white"
                  aria-label={item.label}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
          <ul className="mt-4 space-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4">
        <p className="c-container text-center text-xs text-slate-500">
          © {year} SkillSphere. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
