import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { getMetadataBaseUrl } from "@/lib/site-url";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: getMetadataBaseUrl(),
  title: {
    default: "SkillSphere · Learn skills online",
    template: "%s · SkillSphere",
  },
  description:
    "SkillSphere helps you explore courses, gain practical skills, and learn from structured paths in web development, design, marketing, and more.",
  keywords: [
    "SkillSphere",
    "online courses",
    "skills",
    "learning platform",
    "web development",
    "education",
  ],
  authors: [{ name: "SkillSphere" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "SkillSphere",
    title: "SkillSphere · Learn skills online",
    description:
      "Explore courses and grow with a modern learning experience—popular tracks, mentors, and clear paths.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkillSphere · Learn skills online",
    description:
      "Explore courses and grow with a modern learning platform for practical skills.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-slate-900">
        <a
          href="#main-content"
          className="sr-only outline-none focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2600,
            style: {
              border: "1px solid #e2e8f0",
              background: "#ffffff",
              color: "#0f172a",
            },
          }}
        />
      </body>
    </html>
  );
}
