"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Cpu, Globe, Bot, Database, MessageSquare } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "We write code that is readable, maintainable, and built to last — not just to demo.",
  },
  {
    icon: Palette,
    title: "Thoughtful Design",
    desc: "Every interface we build is designed to be easy for real users — not just visually impressive.",
  },
  {
    icon: Cpu,
    title: "Practical Technology",
    desc: "We use the right tool for the job — not the trendiest framework or the most complex architecture.",
  },
];

function WorkflowCard({
  icon: Icon,
  label,
}: {
  icon: any;
  label: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="w-[110px] h-[90px] rounded-2xl border border-white/[0.08] bg-white/[0.03] flex flex-col items-center justify-center gap-2"
    >
      <Icon className="w-5 h-5 text-indigo-400" />
      <span className="text-xs text-zinc-300">{label}</span>
    </motion.div>
  );
}

function AnimatedLine() {
  return (
    <motion.div
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="h-[2px] flex-1 mx-3 bg-gradient-to-r from-cyan-400 to-indigo-500"
    />
  );
}

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-28 bg-[#050508] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(139,92,246,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6" ref={ref}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-zinc-600 uppercase mb-5 sm:mb-6">
            About Us
          </div>
          <h2 className="text-[clamp(1.9rem,5vw,3.8rem)] font-bold tracking-[-0.04em] mb-4 sm:mb-6">
            <span className="text-white">Small team,</span>
            <br />
            <span className="gradient-text">serious work.</span>
          </h2>
          <p className="text-zinc-500 text-[14px] sm:text-[15px] max-w-sm sm:max-w-xl mx-auto leading-[1.75]">
            We&apos;re a small, focused team of engineers and designers who are passionate
            about building modern software systems for businesses that are ready to grow.
          </p>
        </motion.div>

        {/* Main layout: story + founder card */}
        {/* Main layout: Automation Content + Workflow Animation */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-20">

  {/* Left Content */}
  <motion.div
    initial={{ opacity: 0, x: -24 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
  >
    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug tracking-[-0.02em]">
      Automate repetitive work. Focus on growth.
    </h3>

    <p className="text-zinc-400 text-[14px] sm:text-[15px] leading-[1.8] mb-5">
      We build intelligent automation systems that connect your tools,
      eliminate manual tasks, and streamline operations across your business.
    </p>

    <p className="text-zinc-500 text-[14px] sm:text-[15px] leading-[1.8] mb-8">
      From lead generation and CRM workflows to AI chatbots, reporting,
      notifications, and business processes — we help teams work faster
      with less effort.
    </p>

    <div className="flex flex-wrap gap-2">
      {[
        "AI Agents",
        "CRM Automation",
        "WhatsApp Bots",
        "Lead Generation",
        "Business Workflows",
      ].map((item) => (
        <span
          key={item}
          className="text-[11px] px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>

  {/* Automation Workflow */}
  <motion.div
    initial={{ opacity: 0, x: 24 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="relative"
  >
    <div
      className="glass rounded-3xl border border-white/[0.06] p-8 relative overflow-hidden"
      style={{
        boxShadow:
          "0 0 60px rgba(99,102,241,0.08), 0 0 120px rgba(99,102,241,0.03)",
      }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5" />

      {/* Animated particle */}
      <motion.div
        animate={{
          x: [0, 260, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-16 left-8 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.8)]"
      />

      <div className="relative z-10 flex flex-col gap-6">

        {/* Row 1 */}
        <div className="flex items-center justify-between">
          <WorkflowCard icon={Globe} label="Website" />
          <AnimatedLine />
          <WorkflowCard icon={Bot} label="AI Agent" />
        </div>

        {/* Row 2 */}
        <div className="flex justify-center">
          <motion.div
            animate={{ height: [30, 45, 30] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[2px] bg-gradient-to-b from-cyan-400 to-indigo-500"
          />
        </div>

        {/* Row 3 */}
        <div className="flex items-center justify-between">
          <WorkflowCard icon={Database} label="CRM" />
          <AnimatedLine />
          <WorkflowCard icon={MessageSquare} label="WhatsApp" />
        </div>

        {/* Final Dashboard */}
        <div className="flex justify-center pt-2">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 rgba(99,102,241,0)",
                "0 0 25px rgba(99,102,241,0.5)",
                "0 0 0 rgba(99,102,241,0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="px-6 py-4 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 text-white font-medium"
          >
            Analytics Dashboard
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
</div>

        {/* Values row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.65, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-2xl border border-white/[0.06] p-5 sm:p-6 flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-white mb-1">{v.title}</div>
                  <div className="text-[12px] text-zinc-500 leading-relaxed">{v.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
