import { motion } from "framer-motion";
import { Zap, Lock, Clock, HeadphonesIcon, Target, Layers } from "lucide-react";

const reasons = [
  { icon: Zap, title: "AI-Powered Defense", description: "Machine learning models trained on billions of threat indicators for proactive protection." },
  { icon: Lock, title: "Zero Trust Framework", description: "Every access request verified, every connection authenticated, every transaction encrypted." },
  { icon: Clock, title: "< 15 Min Response", description: "Industry-leading mean time to respond with automated containment and expert-led remediation." },
  { icon: HeadphonesIcon, title: "Dedicated Security Team", description: "Named analysts assigned to your account with deep understanding of your environment." },
  { icon: Target, title: "Threat Intelligence", description: "Proprietary threat feeds and dark web monitoring for proactive threat identification." },
  { icon: Layers, title: "Defense in Depth", description: "Multi-layered security architecture with redundant controls at every level." },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-24 relative section-glow">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why Netsei
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">
            Security Without{" "}
            <span className="gradient-text">Compromise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 group"
              >
                <div className="shrink-0 mt-1">
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_12px_hsl(217,91%,60%,0.25)]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
