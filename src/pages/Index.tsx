import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BookOpen, Users, Microscope, Newspaper } from "lucide-react";

import pinkFlower from "@/assets/pink-flower-new.png.asset.json";
import breastMriHero from "@/assets/breast-mri-hero.png";
import shebaLogo from "@/assets/sheba-logo.png.asset.json";
import breacilLogo from "@/assets/breacil-logo.png";

const exploreLinks = [
  { label: "Our research", to: "/research", icon: Microscope },
  { label: "Current projects", to: "/projects", icon: BookOpen },
  { label: "Who we are", to: "/team", icon: Users },
];

const recentPublications = [
  {
    title: "Exploring pancreatic variability in BRCA carriers vs. Non-Carriers: A diffusion tensor MRI study",
    journal: "Eur J Radiol",
    year: 2026,
  },
  {
    title: "Breast cancer outcomes after skin- and nipple-sparing mastectomy in BRCA mutation carriers",
    journal: "Radiother Oncol",
    year: 2025,
  },
  {
    title: "A BRILLIANT-BRCA study: residual breast tissue after mastectomy and reconstruction",
    journal: "Breast Cancer Res Treat",
    year: 2024,
  },
];

const Index = () => {
  return (
    <>
      {/* Editorial title band */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="section-container relative z-10 pt-6 pb-16 lg:pt-8 lg:pb-24">

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-2 hidden lg:block pt-3">
              {/* Decorative dotted grid à la MGH */}
              <div
                className="w-24 h-32 opacity-60"
                style={{
                  backgroundImage:
                    "radial-gradient(hsl(var(--accent)) 1.2px, transparent 1.2px)",
                  backgroundSize: "10px 10px",
                }}
                aria-hidden
              />
            </div>
            <div className="lg:col-span-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="font-heading font-bold tracking-tight text-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
              >
                <span className="block">BreaCIL</span>
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-foreground/70 font-semibold">Breast Cancer Imaging Laboratory</span>
              </motion.h1>
              <div className="mt-6 flex items-start gap-3">
                <span className="h-px w-12 bg-accent mt-3" />
                <span className="text-base md:text-lg font-heading font-semibold tracking-[0.15em] uppercase text-accent leading-snug">
                  Division of Diagnostic Imaging
                  <span className="block">Sheba Medical Center, Tel HaShomer</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Main content + sidebar */}
      <section className="page-section">
        <div className="section-container grid lg:grid-cols-12 gap-12">
          {/* Main */}
          <div className="lg:col-span-8 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-base md:text-lg font-heading font-semibold tracking-[0.15em] uppercase text-accent">
                Our Mission
              </span>
              <h2 className="mt-3 section-title !text-3xl md:!text-4xl">
                Image-guided, personalized breast screening.
              </h2>
              <img src={pinkFlower.url} alt="" className="h-4 w-auto opacity-50 mt-4" />
              <div className="mt-6 space-y-5 text-foreground/75 leading-relaxed font-body">
                <p>
                  The core focus of BREACIL lies in the personalization of breast screening strategies.
                  We believe that decisions regarding screening pathways should be guided by objective
                  features extracted from breast images, rather than relying solely on subjective
                  evaluations from a radiologist's visual assessment.
                </p>
                <p>
                  The resulting outcome is expected to be an earlier detection of breast cancer,
                  minimization of false-positive biopsies, and an elevation of the standard of patient
                  care and quality of life.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-xl overflow-hidden ring-1 ring-border bg-black"
            >
              <img
                src={breastMriHero}
                alt="Breast MRI scan used in BREACIL Lab research"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/research"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-heading text-sm font-semibold hover:bg-accent/90 transition-colors"
              >
                Our Research <ArrowRight size={16} />
              </Link>
              <Link
                to="/publications"
                className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-3 rounded-md font-heading text-sm font-semibold hover:bg-foreground/5 transition-colors"
              >
                Publications
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-2 text-accent">
                <BookOpen size={16} />
                <span className="font-heading text-xs font-semibold tracking-[0.18em] uppercase">
                  Recent Publications
                </span>
              </div>
              <ul className="mt-5 divide-y divide-border">
                {recentPublications.map((pub) => (
                  <li key={pub.title} className="py-4 first:pt-0 last:pb-0">
                    <h3 className="font-heading text-sm font-semibold leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1.5">
                      {pub.journal} · {pub.year}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                to="/publications"
                className="mt-5 inline-flex items-center gap-1.5 text-accent font-heading text-sm font-semibold hover:underline"
              >
                View all <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-2 text-accent">
                <Newspaper size={16} />
                <span className="font-heading text-xs font-semibold tracking-[0.18em] uppercase">
                  BREACIL News
                </span>
              </div>
              <p className="mt-4 text-sm text-foreground/75 leading-relaxed">
                Stay up to date with announcements, conference talks, and recent milestones from the lab.
              </p>
              <Link
                to="/news"
                className="mt-4 inline-flex items-center gap-1.5 text-accent font-heading text-sm font-semibold hover:underline"
              >
                Read the news <ArrowRight size={14} />
              </Link>
            </motion.div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Index;
