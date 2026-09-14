import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Early Detection of Breast Cancer",
    description:
      "Working on an early detection project focused on identifying small breast tumors from routine MRI scans. The project combines advanced image processing and machine-learning methods to extract informative features from both the tumor region and its surrounding tissue. The goal is to improve early diagnosis and support clinical decision-making by detecting malignancies at stages where they are most treatable.",
  },
  {
    title: "Interstitial Fluid Velocity (IFV) Project",
    description:
      "Developing a non-invasive imaging-based approach to assess interstitial fluid velocity (IFV) around breast tumors using standard MRI data. The project integrates image segmentation, contour analysis, and mathematical modeling to estimate fluid flow patterns associated with tumor physiology. This work aims to provide quantitative biomarkers related to tumor aggressiveness and treatment response without the need for invasive measurements.",
  },
  {
    title: 'Project "Brilliant": Advanced AI for Post-Mastectomy Surveillance',
    description:
      "Standard diagnostic AI tools are optimized for intact breast anatomy and often fail to process the altered chest wall geometry following mastectomy. To address this gap, we developed a specialized deep learning framework designed to identify and map Residual Breast Tissue (RBT) — anatomical remnants where tumor recurrence can occur. By overcoming the challenges of surgical scarring and complex tissue distortion, this model aims to provide a robust, automated solution for monitoring cancer survivors.",
  },
  {
    title: "AI in Lactation: Enhancing Diagnostic Sensitivity",
    description:
      "Detecting malignancy in breastfeeding women is a significant clinical challenge, as the physiological process of lactation creates high Background Parenchymal Enhancement (BPE) that can mask pathological findings on MRI. Our research focuses on characterizing these unique signal patterns to distinguish between normal lactational activity and tumor uptake. We are engineering an algorithm that effectively filters this biological noise, aimed at restoring diagnostic sensitivity.",
  },
  {
    title: "Tissue Microstructure Modeling",
    description:
      "Using diffusion MRI to model the microstructural properties of breast tissue. This work explores how water diffusion patterns can reveal information about tissue architecture, cellularity, and extracellular matrix composition — all critical indicators of tumor presence and grade. The models translate imaging signals into clinically interpretable tissue parameters.",
  },
  {
    title: "Radiomics for Treatment Response",
    description:
      "Extracting high-dimensional quantitative features from breast MRI to predict and monitor response to neoadjuvant chemotherapy. This radiomics pipeline identifies imaging biomarkers that correlate with pathological complete response, enabling non-invasive early assessment of treatment efficacy and supporting personalized therapy decisions.",
  },
];

const CurrentProjects = () => {
  return (
    <>
      <PageHeader
        eyebrow="Current Projects"
        title="Active research initiatives in the lab."
        description="A look at the questions our researchers are tackling today."
      />

      <section className="page-section">
        <div className="section-container max-w-4xl">
          <div className="divide-y divide-border">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group py-10 lg:py-14 first:pt-0 last:pb-0"
              >
                <div className="grid grid-cols-[auto_1fr] gap-x-8 lg:gap-x-14 gap-y-4">
                  <div className="font-heading text-sm tracking-[0.2em] text-accent pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl lg:text-3xl font-medium tracking-tight leading-tight text-foreground">
                      {project.title}
                    </h3>
                    <div className="mt-5 h-px w-12 bg-accent/40 group-hover:w-20 transition-all duration-500" />
                    <p className="mt-6 text-muted-foreground leading-relaxed text-base max-w-2xl">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CurrentProjects;
