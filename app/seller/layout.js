import Navbar from "@/components/seller/Navbar";
import Sidebar from "@/components/seller/Sidebar";

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <section className="flex w-full">
        <Sidebar />
        {children}
      </section>
    </main>
  );
};

export default Layout;
