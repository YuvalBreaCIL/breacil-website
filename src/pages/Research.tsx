import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import researchContent from "@/content/research.json";

const areas = researchContent.areas;

const Research = () => {
  return (
    <>
      <PageHeader
        eyebrow="Our Research"
        title="Advancing breast imaging through quantitative science."
        description="Interdisciplinary inquiry at the intersection of imaging, computation, and clinical practice."
      />

      {/* Explore band */}
      <section className="bg-primary text-primary-foreground">
        <div className="section-container py-12 lg:py-14">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <h2 className="lg:col-span-5 font-heading text-2xl md:text-3xl font-semibold tracking-tight">
              Explore our work
            </h2>
            <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-primary-foreground/15">
              {[
                { label: "Current projects", to: "/projects" },
                { label: "Publications", to: "/publications" },
              ].map((l) => (
                <li key={l.to} className="bg-primary">
                  <Link
                    to={l.to}
                    className="group flex items-center justify-between gap-3 px-5 py-5 hover:bg-primary-foreground/5 transition-colors"
                  >
                    <span className="font-heading text-sm font-semibold tracking-wide">
                      {l.label}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Research areas */}
      <section className="page-section">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-accent">
                Research Areas
              </span>
              <h2 className="mt-3 section-title !text-3xl md:!text-4xl">
                Six focus areas, one mission.
              </h2>
            </div>
            <p className="lg:col-span-8 text-foreground/70 leading-relaxed text-lg lg:pt-12">
              From early detection in high-risk women to advanced characterization of background
              parenchymal enhancement, our work translates imaging science into clinical impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {areas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card p-8 hover:bg-secondary/60 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="font-heading text-sm font-semibold text-accent tabular-nums mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-3">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {area.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;
