import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    tag: "Financial Services",
    title: "Global Bank Threat Remediation",
    description: "Reduced attack surface by 78% and achieved SOC 2 Type II compliance within 6 months for a top-20 global bank.",
    metric: "78%",
    metricLabel: "Attack Surface Reduction",
  },
  {
    tag: "Healthcare",
    title: "Hospital Network Zero-Trust Migration",
    description: "Implemented zero-trust architecture across 40+ facilities protecting 2M+ patient records while maintaining uptime.",
    metric: "99.99%",
    metricLabel: "Uptime Maintained",
  },
  {
    tag: "Technology",
    title: "SaaS Platform Data Center Build",
    description: "Designed and deployed a Tier III+ data center with N+1 redundancy serving 50M+ active users globally.",
    metric: "50M+",
    metricLabel: "Users Served",
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Proven Results
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">
            Case <span className="gradient-text">Studies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_hsl(217,91%,60%,0.08)] flex flex-col"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary/70 mb-3">
                {c.tag}
              </span>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {c.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.description}</p>
              <div className="mt-6 pt-4 border-t border-border/50 flex items-end justify-between">
                <div>
                  <div className="text-2xl font-bold gradient-text">{c.metric}</div>
                  <div className="text-xs text-muted-foreground">{c.metricLabel}</div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
