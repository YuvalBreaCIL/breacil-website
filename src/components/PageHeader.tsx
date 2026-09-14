import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

const PageHeader = ({ eyebrow, title, description, children }: PageHeaderProps) => {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="section-container relative z-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-2 hidden lg:block pt-3">
            <div
              className="w-24 h-24 opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(hsl(var(--accent)) 1.2px, transparent 1.2px)",
                backgroundSize: "10px 10px",
              }}
              aria-hidden
            />
          </div>
          <div className="lg:col-span-10">
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-accent">
                  {eyebrow}
                </span>
              </motion.div>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading font-bold tracking-tight text-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-lg md:text-xl text-foreground/70 max-w-3xl leading-relaxed font-body"
              >
                {description}
              </motion.p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
