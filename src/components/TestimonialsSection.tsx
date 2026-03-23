import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Netsei transformed our security posture overnight. Their SOC team caught a critical zero-day that our previous vendor missed entirely.",
    author: "Sarah Chen",
    role: "CISO, Fortune 500 FinTech",
  },
  {
    quote: "The data center design exceeded our expectations — redundant, efficient, and built to scale. Netsei thinks three steps ahead.",
    author: "Marcus Thompson",
    role: "VP Infrastructure, CloudScale Inc.",
  },
  {
    quote: "Their penetration testing uncovered vulnerabilities we didn't know existed. Netsei's team operates at an elite level.",
    author: "Dr. Amara Osei",
    role: "CTO, MedSecure Health",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative section-glow">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Client Voices
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm hover:border-primary/20 transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <div className="font-semibold text-foreground text-sm">{t.author}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
