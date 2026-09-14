import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import backgroundWoman from "@/assets/background-woman.jpg";

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Persistent background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: isHome
            ? `url(${backgroundWoman})`
            : `linear-gradient(135deg, hsl(240 30% 85%), hsl(270 25% 88%))`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          opacity: isHome ? 0.5 : 1,
        }}
      />
      <Navbar />
      <main className="flex-1 pt-[var(--nav-height)] relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
