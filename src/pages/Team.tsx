import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import PageHeader from "@/components/PageHeader";
import debbiePhoto from "@/assets/debbie-anaby.png";
import shacharPhoto from "@/assets/shachar-zachariah.png";
import amitalPhoto from "@/assets/amital-isaac.jpeg";
import kfirPhoto from "@/assets/kfir-cohen.jpeg";
import miriPhoto from "@/assets/miri-sklair-levi.png";
import yuvalPhoto from "@/assets/yuval-ben-simhon.jpeg";
import giladPhoto from "@/assets/gilad-yerushalmi.jpeg.asset.json";

interface Member {
  name: string;
  role: string;
  bio: string;
  longBio: string;
  photo?: string;
  linkedin?: string;
}

const members: Member[] = [
  {
    name: "Debbie Anaby, PhD",
    role: "Principal Investigator",
    bio: "Debbie Anaby is Head of the Breast Cancer Imaging Lab at Sheba Medical Center, where she leads research in advanced breast imaging, MRI analysis, and artificial intelligence for early breast cancer detection. Her work focuses on transforming breast MRI interpretation into a more objective and quantitative process, with the goal of increasing diagnostic accuracy and helping reduce unnecessary biopsies and imaging examinations. Her research combines clinical imaging expertise with innovative AI-driven technologies to advance personalized breast cancer screening and diagnosis.",
    longBio: "Debbie Anaby is Head of the Breast Cancer Imaging Lab at Sheba Medical Center, where she leads research in advanced breast imaging, MRI analysis, and artificial intelligence for early breast cancer detection. Her work focuses on transforming breast MRI interpretation into a more objective and quantitative process, with the goal of increasing diagnostic accuracy and helping reduce unnecessary biopsies and imaging examinations. Her research combines clinical imaging expertise with innovative AI-driven technologies to advance personalized breast cancer screening and diagnosis.",
    photo: debbiePhoto,
    linkedin: "https://www.linkedin.com/in/debbie-anaby/",
  },
  {
    name: "Prof. Miri Sklair-Levi, MD",
    role: "Clinical Lead",
    bio: "",
    longBio: "Add detailed bio here.",
    photo: miriPhoto,
  },
  {
    name: "Kfir Cohen, M.Sc.",
    role: "Researcher & Data Scientist",
    bio: "Kfir is a Senior AI Researcher and Data Scientist at the BreaCIL Laboratory, Sheba Medical Center, where he focuses on applying data science and advanced computational methods to medical imaging.",
    longBio: "Kfir is a Senior AI Researcher and Data Scientist at the BreaCIL Laboratory, Sheba Medical Center, where he focuses on applying data science and advanced computational methods to medical imaging. His work involves the development of innovative algorithms, machine learning models, and image analysis tools designed to extract meaningful insights from clinical data and support medical research. In addition to his technical expertise, Kfir contributes to the scientific community through academic writing, publishing research papers, and drafting grant proposals, effectively bridging the gap between algorithmic innovation and clinical application.",
    photo: kfirPhoto,
    linkedin: "https://www.linkedin.com/in/kfir-cohen-03b085142/",
  },
  {
    name: "Yuval Ben Simhon-Zisk, B.Sc.",
    role: "Research Programmer & Data Scientist",
    bio: "Yuval holds a B.Sc. in Computer Science and Mathematics. She works on machine learning and medical imaging analysis at Breacil Lab, developing computational tools for analyzing medical data.",
    longBio: "Yuval holds a B.Sc. in Computer Science and Mathematics. She works on machine learning and medical imaging analysis at Breacil Lab, developing computational tools for analyzing medical data. She is particularly interested in deep learning and data-driven approaches for improving medical research.",
    photo: yuvalPhoto,
    linkedin: "https://www.linkedin.com/in/yuval-ben-simhon/",
  },
  {
    name: "Shahar Zachariah Levert, MA, PhD. Candidate",
    role: "Research Programmer & Data Scientist",
    bio: "Shahar is a PhD researcher at Tel Aviv University specializing in computational medical imaging, with a focus on developing machine learning methods for lesion detection and analysis.",
    longBio: "Shahar Zachariah Levert is a PhD researcher at Tel Aviv University specializing in computational medical imaging, with a focus on developing machine learning methods for lesion detection and analysis. She has a strong background in medical image analysis and clinically driven research, with experience building and validating imaging pipelines on real-world clinical data, including applications in breast imaging and brain MRI.\n\nHer work focuses on translating advanced computational methods into tools that support clinical decision-making. In parallel, she leads the TAU Nucleate student community, promoting innovation and entrepreneurship in the life sciences. Outside of research, she enjoys traveling and exploring new places and cultures.",
    photo: shacharPhoto,
    linkedin: "https://www.linkedin.com/in/shahar-zachariah-levert-0a3534187",
  },
  {
    name: "Gilad Yerushalmi, B.Sc.",
    role: "Medical Imaging Research Engineer",
    bio: "Gilad is a research engineer at the BreaciL laboratory at Sheba Medical Center. He specializes in applying machine learning and deep learning to the field of medical imaging. His work spans developing advanced algorithms to support research initiatives and building innovative applications that enable data-driven clinical decision-making. Beyond the lab, Gilad is an active individual with a passion for climbing, biking, running, and a particular fondness for Austrian novelists.",
    longBio: "Gilad is a research engineer at the BreaciL laboratory at Sheba Medical Center. He specializes in applying machine learning and deep learning to the field of medical imaging. His work spans developing advanced algorithms to support research initiatives and building innovative applications that enable data-driven clinical decision-making. Beyond the lab, Gilad is an active individual with a passion for climbing, biking, running, and a particular fondness for Austrian novelists.",
    photo: giladPhoto.url,
    linkedin: "https://www.linkedin.com/in/gilad-yerushalmi-8b7133175/",
  },
  {
    name: "Amital Isaac, MA, BA, BA",
    role: "Clinical Research Associate",
    bio: "Amital is a medical student in the Sheba-Nicosia program. She is pursuing a specialization in Gynecology, driven by a commitment to advancing women's health through both clinical practice and research.",
    longBio: "Amital is a medical student in the Sheba-Nicosia program. She is pursuing a specialization in Gynecology, driven by a commitment to advancing women's health through both clinical practice and research. She maximizes her impact in medicine by blending a unique background in journalism and multimedia with her clinical knowledge — both in the lab and beyond. Her work reflects a patient-centered approach that bridges rigorous scientific inquiry with compelling communication. Outside of medicine, Amital is an avid outdoors enthusiast who finds inspiration in nature and loves to compete in triathlon.",
    photo: amitalPhoto,
    linkedin: "https://www.linkedin.com/in/amitalisaac2027/",
  },
];

const Team = () => {
  const [selected, setSelected] = useState<Member | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Who We Are"
        title="A multidisciplinary team driven by curiosity and clinical impact."
        description="Scientists, clinicians, and engineers working together to advance breast imaging."
      />

      <section className="page-section">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-6">
            {members.map((member, i) => (
              <motion.button
                type="button"
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                onClick={() => setSelected(member)}
                className="bg-card p-6 text-left hover:bg-secondary/60 transition-colors group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] border border-border rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-full bg-accent/10 text-accent flex items-center justify-center font-heading text-xl font-bold overflow-hidden shrink-0 ring-2 ring-background">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      member.name
                        .split(" ")
                        .filter((n) => !n.includes(","))
                        .map((n) => n[0])
                        .join("")
                    )}
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="ml-auto text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <h3 className="font-heading text-base font-semibold leading-tight">
                    {member.name}
                  </h3>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-xs font-heading font-semibold tracking-[0.15em] uppercase text-accent mt-2">
                  {member.role}
                </p>
                {member.bio && (
                  <p className="text-muted-foreground mt-3 leading-relaxed text-sm line-clamp-4">
                    {member.bio}
                  </p>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full bg-accent/10 text-accent flex items-center justify-center font-heading text-2xl font-bold shrink-0 overflow-hidden">
                {selected?.photo ? (
                  <img src={selected.photo} alt={selected.name} className="w-full h-full object-cover" />
                ) : (
                  selected?.name
                    .split(" ")
                    .filter((n) => !n.includes(","))
                    .map((n) => n[0])
                    .join("")
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <DialogTitle className="font-heading text-xl">{selected?.name}</DialogTitle>
                  {selected?.linkedin && (
                    <a
                      href={selected.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-accent text-sm font-heading font-medium mt-1">{selected?.role}</p>
              </div>
            </div>
          </DialogHeader>
          <div className="text-muted-foreground leading-relaxed text-sm space-y-4">
            {selected?.longBio.split("\n\n").map((paragraph, i) => {
              const boldMatch = paragraph.match(/^\*\*(.+)\*\*$/);
              if (boldMatch) {
                return (
                  <h4 key={i} className="font-heading font-semibold text-foreground mt-2">
                    {boldMatch[1]}
                  </h4>
                );
              }
              return <p key={i}>{paragraph}</p>;
            })}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Team;
