import { useLocation } from "react-router-dom";
import pinkFlower from "@/assets/pink-flower-new.png.asset.json";

const Footer = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <footer className="bg-secondary py-12 relative z-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={pinkFlower.url} alt="" className="h-6 w-auto opacity-70" />
            <div>
              <span className="font-heading text-lg font-bold text-foreground">BREACIL</span>
              <p className="text-sm text-muted-foreground mt-1">The Breast Cancer Imaging Laboratory at Sheba Medical Center</p>
            </div>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BREACIL. All rights reserved.
            </p>
            {isHome && (
              <p className="text-xs text-muted-foreground/70 mt-1">Artwork by Noa Russo</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
