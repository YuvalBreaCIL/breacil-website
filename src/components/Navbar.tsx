import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import breacilLogo from "@/assets/breacil-logo.png";
import shebaLogo from "@/assets/sheba-logo.png.asset.json";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "OUR RESEARCH", path: "/research" },
  { label: "PUBLICATIONS", path: "/publications" },
  { label: "WHO WE ARE", path: "/team" },
  { label: "CURRENT PROJECTS", path: "/projects" },
  { label: "BREACIL NEWS", path: "/news" },
  { label: "OUR COLLABORATORS", path: "/partners" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="section-container flex items-center justify-between h-[var(--nav-height)]">
        <Link to="/" className="flex-shrink-0 flex items-center gap-3">
          <img src={breacilLogo} alt="BREACIL - Breast Cancer Imaging Laboratory" className="h-10 w-auto" />
          <div className="h-8 w-px bg-border" />
          <img src={shebaLogo.url} alt="Sheba Medical Center" className="h-10 w-auto" />
        </Link>


        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`font-heading text-xs font-semibold tracking-widest transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <ul className="section-container py-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block font-heading text-xs font-semibold tracking-widest py-2 ${
                      location.pathname === item.path
                        ? "text-accent"
                        : "text-foreground/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
