import RegisterForm from "@/components/auth/RegisterForm";
import Reveal from "@/components/shared/Reveal";

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
