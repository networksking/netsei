import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import CyberGrid from "./CyberGrid";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <CyberGrid />

      {/* Radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-primary backdrop-blur-sm"
          >
            <ShieldCheck className="h-4 w-4" />
            Enterprise-Grade Cybersecurity
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] text-foreground">
            Defend Your Digital
            <br />
            <span className="gradient-text">Infrastructure</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
            Netsei delivers cutting-edge cybersecurity solutions, data center design,
            and network architecture for enterprises that refuse to compromise on security.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Button variant="hero" size="lg" className="group">
              Start Your Assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="lg">
              Explore Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-8 mt-8 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
              24/7 SOC Monitoring
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              Zero Trust Architecture
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse-glow" />
              ISO 27001 Certified
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
