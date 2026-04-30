import RegisterForm from "@/components/auth/RegisterForm";

const registerPage = () => {
  return (
    <section className="c-container flex min-h-[calc(100vh-80px)] items-center justify-center py-10">
      <RegisterForm />
    </section>
  );
};

export default registerPage;
