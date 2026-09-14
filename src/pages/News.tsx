import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const newsItems = [
  {
    title: "The end of missed diagnoses? How AI is detecting breast cancer cases that physicians overlook",
    summary:
      "\"The future of AI in medicine is only at its beginning. The digital revolution is no longer a futuristic dream—it is happening now,\" write Professor Miri Sklair-Levy and Dr. Debbie Anaby.",
    source: "Calcalist Tech",
    date: "October 9, 2024",
    url: "https://www.calcalistech.com/ctechnews/article/bjuatjgyyg",
  },
];

const News = () => {
  return (
    <>
      <PageHeader
        eyebrow="BREACIL News"
        title="News, features, and milestones from the lab."
        description="Press coverage, conference talks, and recent announcements."
      />

      <section className="page-section">
        <div className="section-container max-w-4xl">
          <div className="divide-y divide-border">
            {newsItems.map((item, i) => (
              <motion.a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="py-8 first:pt-0 last:pb-0 group grid lg:grid-cols-12 gap-6"
              >
                <div className="lg:col-span-3">
                  <p className="text-xs font-heading font-semibold tracking-[0.18em] uppercase text-accent">
                    {item.source}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{item.date}</p>
                </div>
                <div className="lg:col-span-9">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-xl font-semibold leading-snug group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 mt-1 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{item.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-accent font-heading text-sm font-semibold">
                    Read the article <ExternalLink size={14} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
