import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import pinkstarLogo from "@/assets/pinkstar-logo.png";
import arcLogo from "@/assets/arc-logo.png.asset.json";
import mohLogo from "@/assets/moh-logo.png.asset.json";
import shebaLogo from "@/assets/sheba-logo.png.asset.json";
import icrfLogo from "@/assets/icrf-logo.png.asset.json";

const partners = [
  {
    name: "Orit Kaidar-Person, MD, PhD",
    role: "Head of Breast Radiotherapy, Sheba Medical Center",
  },
  {
    name: "Maria Raitses-Gurevich, PhD",
    role: "Research Head of Comprehensive Pancreatic Cancer Program",
  },
  {
    name: "Maya Dadiani, PhD",
    role: "Senior Researcher, Breast Cancer Translational Research lab",
  },
];

const students = [
  "Guy Bar-Chen",
  "Ido Benifla",
  "Hila Bufman, MD",
  "Tikva Moravia",
  "Noam Namir De-Levi",
  "Yael Tur",
  "Eden Tal",
];

const Partners = () => {
  return (
    <>
      <PageHeader
        eyebrow="Our Collaborators"
        title="Partners who help us turn imaging research into clinical impact."
        description="We collaborate with leading institutions and organizations to advance breast cancer imaging research."
      />

      {/* Featured spinoff */}
      <section className="page-section">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-accent">
                Featured Spinoff
              </span>
              <h2 className="mt-3 section-title !text-3xl md:!text-4xl">Pink Star</h2>
              <p className="mt-5 text-foreground/75 leading-relaxed">
                Pinkstar is a Sheba ARC spinoff company from BREACIL, focused on early detection of
                breast cancer through breast MRI.
              </p>
              <a
                href="https://www.pinkstar.life/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-heading text-sm font-semibold hover:bg-accent/90 transition-colors"
              >
                Visit Pink Star <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-card border border-border rounded-xl p-12 flex items-center justify-center min-h-[280px]"
            >
              <img src={pinkstarLogo} alt="Pink Star" className="h-32 w-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Institutional partners */}
      <section className="bg-secondary border-y border-border py-16">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-center gap-16">
            <img src={shebaLogo.url} alt="Sheba Tel HaShomer Medical Center" className="h-20 w-auto" />
            <img
              src={arcLogo.url}
              alt="ARC Innovation at Sheba Medical Center"
              className="h-20 w-auto"
            />
            <img src={mohLogo.url} alt="Israel Ministry of Health" className="h-16 w-auto" />
            <img src={icrfLogo.url} alt="Israel Cancer Research Fund" className="h-20 w-auto" />
          </div>
        </div>
      </section>

      {/* Partners & students */}
      <section className="page-section">
        <div className="section-container grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-accent">
              Our Partners
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold">Clinical & research partners</h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {partners.map((p) => (
                <li key={p.name} className="py-5">
                  <p className="font-heading font-semibold text-foreground">{p.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{p.role}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-accent">
              Students
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold">Working with us</h2>
            <ul className="mt-8 grid sm:grid-cols-2 gap-2">
              {students.map((s) => (
                <li
                  key={s}
                  className="bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground/80 font-body"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
