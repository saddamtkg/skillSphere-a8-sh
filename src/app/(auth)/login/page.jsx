import LoginForm from "@/components/auth/LoginForm";
import Reveal from "@/components/shared/Reveal";

// Only relative in-app redirects (blocks open redirects like "//evil.com").
const safeRedirectPath = (raw) => {
  if (raw == null || typeof raw !== "string") return "/";
  const decoded = decodeURIComponent(raw.trim()).split("#")[0] || "/";
  if (!decoded.startsWith("/") || decoded.startsWith("//")) return "/";
  if (decoded.includes("://")) return "/";
  return decoded;
};

const loginPage = async ({ searchParams }) => {
  const resolved = await searchParams;
  const redirectPath = safeRedirectPath(resolved?.redirect ?? "");

  return (
    <section className="c-container flex min-h-[calc(100vh-80px)] items-center justify-center py-10">
      <Reveal>
        <LoginForm redirectPath={redirectPath} />
      </Reveal>
    </section>
  );
};

export default loginPage;
