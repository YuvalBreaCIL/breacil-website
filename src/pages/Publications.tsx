import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  category: string;
  doi?: string;
  pmid?: string;
}

const publications: Publication[] = [
  {
    title: "Exploring pancreatic variability in BRCA carriers vs. Non-Carriers: A diffusion tensor MRI study",
    authors: "Raitses-Gurevich M, Tau N, Moss Massasa EE, Shahar S, Refaeli D, Mayer C, Apter S, Inbar Y, Degani H, Golan T, Anaby D",
    journal: "Eur J Radiol", year: 2026, category: "Diffusion MRI",
    doi: "https://doi.org/10.1016/j.ejrad.2025.112483",
  },
  {
    title: "Breast cancer outcomes after skin- and nipple-sparing mastectomy in BRCA pathogenic mutation carriers versus non-BRCA carriers",
    authors: "Moshe N, Haisraely O, Globus O, Faermann R, Abu-Shehada N, Anaby D, Gal Yam E, Balint Lahat N, Galper S, Menes T, Haik J, Sklair-Levy M, Oedegaard C, Kuehn T, Morrow M, Poortmans P, Bernstein-Molho R, Kaidar-Person O",
    journal: "Radiother Oncol", year: 2025, category: "Breast Cancer",
    doi: "https://doi.org/10.1016/j.radonc.2025.110710",
  },
  {
    title: "Residual breast tissue after mastectomy and reconstruction: A substudy of the SECRET project",
    authors: "Kaidar-Person O, Sklair-Levy M, Anaby D, Bernstein-Molho R, van Maaren MC, de Munck L, de Ruysscher D, Offersen B, Poortmans P, Boersma LJ; SECRET group",
    journal: "Eur J Surg Oncol", year: 2024, category: "Breast Cancer",
    doi: "https://doi.org/10.1016/j.ejso.2024.108607",
  },
  {
    title: "A BRILLIANT-BRCA study: residual breast tissue after mastectomy and reconstruction",
    authors: "Kaidar-Person O, Faermann R, Polikar D, Cohen K, Bernstein-Molho R, Morrow M, Boersma LJ, Offersen BV, Poortmans P, Sklair-Levy M, Anaby D",
    journal: "Breast Cancer Res Treat", year: 2024, category: "Breast Cancer",
    doi: "https://doi.org/10.1007/s10549-024-07425-4",
  },
  {
    title: "Relaxation-Diffusion T2-ADC Correlations in Breast Cancer Patients: A Spatiotemporally Encoded 3T MRI Assessment",
    authors: "Otikovs M, Nissan N, Furman-Haran E, Anaby D, Agassi R, Sklair-Levy M, Frydman L",
    journal: "Diagnostics (Basel)", year: 2023, category: "Diffusion MRI",
    doi: "https://doi.org/10.3390/diagnostics13233516",
  },
  {
    title: "Ultrafast DCE-MRI for discriminating pregnancy-associated breast cancer lesions from lactation related background parenchymal enhancement",
    authors: "Nissan N, Anaby D, Mahameed G, Bauer E, Moss Massasa EE, Menes T, Agassi R, Brodsky A, Grimm R, Nickel MD, Roccia E, Sklair-Levy M",
    journal: "Eur Radiol", year: 2023, category: "Breast Cancer",
    doi: "https://doi.org/10.1007/s00330-023-09805-8",
  },
  {
    title: "Prostate lesions characterization using diffusion-weighted spatiotemporal encoded MRI: Feasibility and initial assessment",
    authors: "Otikovs M, Portnoy O, Anaby D, Rosenzweig B, Nissan N, Frydman L",
    journal: "Magn Reson Med", year: 2023, category: "Diffusion MRI",
    doi: "https://doi.org/10.1002/mrm.29641",
  },
  {
    title: "'Earlier than Early' Detection of Breast Cancer in Israeli BRCA Mutation Carriers Applying AI-Based Analysis to Consecutive MRI Scans",
    authors: "Anaby D, Shavin D, Zimmerman-Moreno G, Nissan N, Friedman E, Sklair-Levy M",
    journal: "Cancers (Basel)", year: 2023, category: "AI & Imaging",
    doi: "https://doi.org/10.3390/cancers15123120",
  },
  {
    title: "Probing lipids relaxation times in breast cancer using magnetic resonance spectroscopic fingerprinting",
    authors: "Nissan N, Kulpanovich A, Agassi R, Allweis T, Haas I, Carmon E, Furman-Haran E, Anaby D, Sklair-Levy M, Tal A",
    journal: "Eur Radiol", year: 2023, category: "Breast Cancer",
    doi: "https://doi.org/10.1007/s00330-023-09560-w",
  },
  {
    title: "MRI can accurately diagnose breast cancer during lactation",
    authors: "Nissan N, Massasa EEM, Bauer E, Halshtok-Neiman O, Shalmon A, Gotlieb M, Faermann R, Samoocha D, Yagil Y, Ziv-Baran T, Anaby D, Sklair-Levy M",
    journal: "Eur Radiol", year: 2023, category: "Breast Cancer",
    doi: "https://doi.org/10.1007/s00330-022-09234-z",
  },
  {
    title: "Breast cancer imaging with glucosamine CEST (chemical exchange saturation transfer) MRI: first human experience",
    authors: "Rivlin M*, Anaby D*, Nissan N, Zaiss M, Deshmane A, Navon G, Sklair-Levy M",
    journal: "Eur Radiol", year: 2022, category: "Breast Cancer",
    doi: "https://doi.org/10.1007/s00330-022-08772-w",
  },
  {
    title: "MRI of the Lactating Breast: Computer-Aided Diagnosis False Positive Rates and Background Parenchymal Enhancement Kinetic Features",
    authors: "Nissan N, Sorin V, Bauer E, Anaby D, Samoocha D, Yagil Y, Faermann R, Halshtok-Neiman O, Shalmon A, Gotlieb M, Sklair-Levy M",
    journal: "Acad Radiol", year: 2022, category: "Breast Cancer",
    doi: "https://doi.org/10.1016/j.acra.2021.11.003",
  },
  {
    title: "Background parenchymal enhancement and uptake as breast cancer imaging biomarkers: A state-of-the-art review",
    authors: "Bauer E, Levy MS, Domachevsky L, Anaby D, Nissan N",
    journal: "Clin Imaging", year: 2022, category: "Breast Cancer",
    doi: "https://doi.org/10.1016/j.clinimag.2021.11.021",
  },
  {
    title: "Neurite density of white matter significantly correlates with tuberous sclerosis complex disease severity",
    authors: "Anaby D, Shrot S, Belenky E, Ben-Zeev B, Tzadok M",
    journal: "Neuroimage Clin", year: 2022, category: "Diffusion MRI",
    doi: "https://doi.org/10.1016/j.nicl.2022.103085",
  },
  {
    title: "Diffusivity in breast malignancies analyzed for b > 1000 s/mm² at 1 mm in-plane resolutions: Insight from Gaussian and non-Gaussian behaviors",
    authors: "Otikovs M, Nissan N, Furman-Haran E, Anaby D, Allweis TM, Agassi R, Sklair-Levy M, Frydman L",
    journal: "J Magn Reson Imaging", year: 2021, category: "Diffusion MRI",
    doi: "https://doi.org/10.1002/jmri.27489",
  },
  {
    title: "Breast MRI during lactation: effects on tumor conspicuity using dynamic contrast-enhanced (DCE) in comparison with diffusion tensor imaging (DTI) parametric maps",
    authors: "Nissan N, Allweis T, Menes T, Brodsky A, Paluch-Shimon S, Haas I, Golan O, Miller Y, Barlev H, Carmon E, Brodsky M, Anaby D, Lawson P, Halshtok-Neiman O, Shalmon A, Gotlieb M, Faermann R, Konen E, Sklair-Levy M",
    journal: "Eur Radiol", year: 2020, category: "Breast Cancer",
    doi: "https://doi.org/10.1007/s00330-019-06435-x",
  },
  {
    title: "Breast MRI Without Contrast Is Feasible and Appropriate During Pregnancy",
    authors: "Nissan N, Anaby D, Sklair-Levy M",
    journal: "J Am Coll Radiol", year: 2019, category: "Breast Cancer",
    doi: "https://doi.org/10.1016/j.jacr.2018.11.027",
  },
];

const Publications = () => {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Peer-reviewed research from the BREACIL team."
      />

      <section className="page-section">
        <div className="section-container">
          <div className="divide-y divide-border">
            {publications.map((pub, i) => (
              <motion.article
                key={pub.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.03, 0.3) }}
                className="py-8 first:pt-0 last:pb-0 group grid lg:grid-cols-12 gap-6"
              >
                <div className="lg:col-span-2">
                  <span className="font-heading text-3xl font-bold text-accent tabular-nums">
                    {pub.year}
                  </span>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="font-heading text-lg font-semibold leading-snug group-hover:text-accent transition-colors">
                    {pub.doi ? (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-1.5"
                      >
                        {pub.title}
                        <ExternalLink className="h-3.5 w-3.5 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </a>
                    ) : (
                      pub.title
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {pub.authors}
                  </p>
                  <p className="text-sm font-heading font-semibold text-foreground/80 mt-2 italic">
                    {pub.journal}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Publications;
