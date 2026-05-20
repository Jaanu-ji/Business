"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, Globe, Brain, MessageCircle, Zap, Database, ArrowUpRight, BarChart3 } from "lucide-react";
import GlowCard from "@/components/GlowCard";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Modern, fast websites that represent your brand professionally and convert visitors into real customers.",
    color: "indigo",
    glowRGB: "99,102,241",
    tag: "Next.js · React · Responsive",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android applications built for real users and real business workflows.",
    color: "violet",
    glowRGB: "139,92,246",
    tag: "iOS · Android · React Native",
  },
  {
    icon: BarChart3,
    title: "Admin Dashboards",
    description:
      "Custom admin panels and management systems built for your internal operations — clean, fast, and purpose-built.",
    color: "sky",
    glowRGB: "14,165,233",
    tag: "Analytics · Data · Management",
  },
  {
    icon: Brain,
    title: "AI Automation",
    description:
      "Automate repetitive tasks and customer touchpoints with practical AI-powered workflows that save real time.",
    color: "purple",
    glowRGB: "168,85,247",
    tag: "LLM · Workflows · Smart Bots",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integrations",
    description:
      "Connect WhatsApp to your business — automated replies, order notifications, and customer communication flows.",
    color: "teal",
    glowRGB: "20,184,166",
    tag: "WhatsApp API · Bots · Alerts",
  },
  {
    icon: Database,
    title: "CRM & Internal Tools",
    description:
      "Custom CRMs, inventory systems, and internal tools built exactly for the way your business actually works.",
    color: "amber",
    glowRGB: "245,158,11",
    tag: "CRM · ERP · Custom Logic",
  },
  {
    icon: Zap,
    title: "Business Automation",
    description:
      "Streamline daily operations — from invoicing to scheduling — with automated workflows that run without you.",
    color: "rose",
    glowRGB: "244,63,94",
    tag: "Pipelines · Triggers · Alerts",
  },
];

const colorMap: Record<string, string> = {
  indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  sky: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  teal: "text-teal-400 bg-teal-500/10 border-teal-500/20",
  amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  rose: "text-rose-400 bg-rose-500/10 border-rose-500/20",
};

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group h-full"
    >
      <GlowCard
        className="glass rounded-2xl border border-white/[0.06] cursor-default overflow-hidden transition-all duration-500 hover:border-white/[0.12] h-full"
        glowColor={service.glowRGB}
      >
        <div className="p-5 sm:p-6 md:p-7 flex flex-col h-full">
          <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border mb-4 sm:mb-5 ${colorMap[service.color]}`}>
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>

          <h3 className="text-base sm:text-[17px] font-semibold text-white mb-2.5 sm:mb-3 leading-snug">
            {service.title}
          </h3>
          <p className="text-[13px] sm:text-sm text-zinc-400 leading-relaxed mb-4 sm:mb-5 flex-1">
            {service.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-[11px] text-zinc-600 font-mono">{service.tag}</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-28 bg-[#050508]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-zinc-600 uppercase mb-5 sm:mb-6"
          >
            What We Build
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(1.9rem,5vw,3.8rem)] font-bold tracking-[-0.04em] mb-4 sm:mb-6"
          >
            <span className="text-white">Everything your</span>
            <br />
            <span className="gradient-text">business needs.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-zinc-500 text-[14px] sm:text-[15px] max-w-sm sm:max-w-lg mx-auto leading-[1.75]"
          >
            From a simple business website to a full AI-powered system — we handle
            every layer of your technology with care and precision.
          </motion.p>
        </div>

        {/* Cards grid — 7 cards: 3+3+1 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.slice(0, 6).map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
          {/* 7th card centered */}
          <div className="sm:col-span-2 lg:col-span-1 lg:col-start-2">
            <ServiceCard service={services[6]} index={6} />
          </div>
        </div>
      </div>
    </section>
  );
}
