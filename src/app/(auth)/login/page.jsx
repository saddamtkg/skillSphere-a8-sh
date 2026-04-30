import LoginForm from "@/components/auth/LoginForm";
import Reveal from "@/components/shared/Reveal";

const loginPage = () => {
  return (
    <section className="c-container flex min-h-[calc(100vh-80px)] items-center justify-center py-10">
      <Reveal>
        <LoginForm />
      </Reveal>
    </section>
  );
};

export default loginPage;
