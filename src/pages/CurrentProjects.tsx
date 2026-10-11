import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import projectsContent from "@/content/projects.json";

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = projectsContent.items;

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
