import LoginForm from "@/components/auth/LoginForm";

const loginPage = () => {
  return (
    <section className="c-container flex min-h-[calc(100vh-80px)] items-center justify-center py-10">
      <LoginForm />
    </section>
  );
};

export default loginPage;
