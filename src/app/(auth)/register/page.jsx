import RegisterForm from "@/components/auth/RegisterForm";
import Reveal from "@/components/shared/Reveal";

export const metadata = {
  title: "Create account",
  description:
    "Create your SkillSphere account with name, email, profile photo, and password to start learning.",
};

const registerPage = () => {
  return (
    <section className="c-container flex min-h-[calc(100vh-80px)] items-center justify-center py-10">
      <Reveal>
        <RegisterForm />
      </Reveal>
    </section>
  );
};

export default registerPage;
