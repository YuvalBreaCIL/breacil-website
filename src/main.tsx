import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import siteSettings from "./content/settings.json";

const FONT_SIZE_SCALE: Record<string, string> = {
  small: "87.5%",
  medium: "100%",
  large: "112.5%",
};

document.documentElement.style.setProperty("--font-family-site", siteSettings.fontFamily);
document.documentElement.style.fontSize = FONT_SIZE_SCALE[siteSettings.fontSize] ?? "100%";

createRoot(document.getElementById("root")!).render(<App />);
