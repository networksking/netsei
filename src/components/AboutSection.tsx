import { motion } from "framer-motion";
import { Shield, Globe, Users, Award } from "lucide-react";

const stats = [
  { icon: Shield, value: "500+", label: "Threats Neutralized Daily" },
  { icon: Globe, value: "30+", label: "Countries Protected" },
  { icon: Users, value: "200+", label: "Enterprise Clients" },
  { icon: Award, value: "15+", label: "Years of Excellence" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              About Netsei
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
              Pioneering Cybersecurity for the{" "}
              <span className="gradient-text">Modern Enterprise</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Netsei is a global cybersecurity and infrastructure company dedicated to protecting
              organizations from evolving digital threats. Our team of elite security professionals
              combines deep expertise with cutting-edge technology to deliver unmatched protection.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From Fortune 500 companies to emerging enterprises, we architect secure environments
              that enable growth, innovation, and resilience in an increasingly hostile digital landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm text-center hover:border-primary/30 transition-all duration-300"
                >
                  <Icon className="h-6 w-6 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
