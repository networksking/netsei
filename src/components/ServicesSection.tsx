import { motion } from "framer-motion";
import {
  Shield, Eye, Bug, Cloud, Monitor, FileCheck,
  Server, Network, RefreshCw,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Managed Security Operations",
    description: "Round-the-clock SOC monitoring with AI-driven threat intelligence, incident triage, and rapid response capabilities.",
  },
  {
    icon: Eye,
    title: "Threat Detection & Response",
    description: "Advanced EDR/XDR solutions with behavioral analytics to identify and neutralize threats before they escalate.",
  },
  {
    icon: Bug,
    title: "Vulnerability Assessment & Pen Testing",
    description: "Comprehensive red team operations and vulnerability scanning to expose and remediate security gaps.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Security",
    description: "Secure your multi-cloud environments with CSPM, CWPP, and zero-trust network segmentation.",
  },
  {
    icon: Monitor,
    title: "Endpoint Protection",
    description: "Next-gen endpoint security with real-time monitoring, automated response, and threat hunting.",
  },
  {
    icon: FileCheck,
    title: "Security Consulting & Compliance",
    description: "Navigate regulatory frameworks including SOC 2, ISO 27001, HIPAA, and PCI DSS with expert guidance.",
  },
  {
    icon: Server,
    title: "Data Center Infrastructure Design",
    description: "End-to-end data center architecture with redundancy planning, power optimization, and physical security.",
  },
  {
    icon: Network,
    title: "Network Architecture & Design",
    description: "Scalable, resilient network topologies with SD-WAN, microsegmentation, and performance optimization.",
  },
  {
    icon: RefreshCw,
    title: "Disaster Recovery & Business Continuity",
    description: "Comprehensive DR strategies with automated failover, RTO/RPO optimization, and crisis management.",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:bg-card/80 hover:shadow-[0_0_30px_hsl(217,91%,60%,0.1)]"
    >
      <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(217,91%,60%,0.3)]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>

      {/* Hover glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-xl bg-gradient-to-r from-transparent via-primary/0 to-transparent transition-all duration-500 group-hover:via-primary/60" />
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 section-glow">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Capabilities
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">
            Comprehensive Security &{" "}
            <span className="gradient-text">Infrastructure</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From threat detection to data center design, we deliver end-to-end solutions
            that protect and power your enterprise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
