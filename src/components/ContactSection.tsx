import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Get in Touch
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
              Ready to Strengthen Your{" "}
              <span className="gradient-text">Defenses?</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our security experts are standing by to assess your environment and
              design a protection strategy tailored to your needs.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Mail, text: "contact@netsei.com" },
                { icon: Phone, text: "+1 (800) NET-SEI1" },
                { icon: MapPin, text: "New York • London • Singapore" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-muted-foreground">
                  <Icon className="h-5 w-5 text-primary" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 rounded-xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="First Name"
                className="rounded-lg border border-border/50 bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
              />
              <input
                placeholder="Last Name"
                className="rounded-lg border border-border/50 bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>
            <input
              placeholder="Work Email"
              type="email"
              className="w-full rounded-lg border border-border/50 bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
            />
            <input
              placeholder="Company"
              className="w-full rounded-lg border border-border/50 bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
            />
            <textarea
              placeholder="Tell us about your security needs..."
              rows={4}
              className="w-full rounded-lg border border-border/50 bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all resize-none"
            />
            <Button variant="hero" size="lg" className="w-full group">
              Request Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
