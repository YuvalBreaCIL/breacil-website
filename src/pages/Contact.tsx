import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch with the BREACIL Lab."
        description="Interested in collaborating, sharing data, or joining our team? We'd love to hear from you."
      />

      <section className="page-section">
        <div className="section-container grid lg:grid-cols-12 gap-12">
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-accent">
                Reach Us
              </span>
              <h2 className="mt-3 font-heading text-3xl font-semibold">Lab address</h2>
            </div>

            <div className="space-y-px bg-border rounded-xl overflow-hidden border border-border">
              <div className="bg-card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold tracking-wide uppercase text-foreground/70">
                    Location
                  </h3>
                  <p className="text-foreground mt-1.5 leading-relaxed">
                    Derech Sheba 2, Ramat Gan, Israel
                  </p>
                </div>
              </div>
              <div className="bg-card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold tracking-wide uppercase text-foreground/70">
                    Email
                  </h3>
                  <a
                    href="mailto:mribreacil@gmail.com"
                    className="text-foreground mt-1.5 inline-block hover:text-accent transition-colors"
                  >
                    mribreacil@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-card border border-border rounded-xl p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <h3 className="font-heading text-2xl font-semibold text-accent">Thank you</h3>
                  <p className="text-muted-foreground mt-3">We'll get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-heading text-2xl font-semibold mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block font-heading text-xs font-semibold tracking-wide uppercase mb-2 text-foreground/70">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition"
                      />
                    </div>
                    <div>
                      <label className="block font-heading text-xs font-semibold tracking-wide uppercase mb-2 text-foreground/70">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition"
                      />
                    </div>
                    <div>
                      <label className="block font-heading text-xs font-semibold tracking-wide uppercase mb-2 text-foreground/70">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-accent text-accent-foreground px-8 py-3 rounded-md font-heading text-sm font-semibold hover:bg-accent/90 transition-colors"
                    >
                      Send message
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>

        <div className="section-container mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-border shadow-sm"
          >
            <iframe
              title="Sheba Medical Center Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.8!2d34.8438!3d32.0447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4a0a3bffffff%3A0x2dcf00c4a9e3e0!2sSheba%20Medical%20Center!5e0!3m2!1sen!2sil!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
