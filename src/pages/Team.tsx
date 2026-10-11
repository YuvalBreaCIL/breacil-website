import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import PageHeader from "@/components/PageHeader";
import teamContent from "@/content/team.json";

interface Member {
  name: string;
  role: string;
  bio: string;
  longBio: string;
  photo?: string;
  linkedin?: string;
}

const members: Member[] = teamContent.members;

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
