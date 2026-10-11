import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import publicationsContent from "@/content/publications.json";

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  category: string;
  doi?: string;
  pmid?: string;
}

const publications: Publication[] = publicationsContent.items;

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
