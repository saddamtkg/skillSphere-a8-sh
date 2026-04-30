import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default layout;
