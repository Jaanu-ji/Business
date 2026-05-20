"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Rocket, Lightbulb, Users, Clock, Award } from "lucide-react";
import GlowCard from "@/components/GlowCard";

const trustMarkers = [
  { val: "Free", label: "Consultation", desc: "No obligation, no pressure" },
  { val: "Honest", label: "Pricing", desc: "Know the cost before you commit" },
  { val: "Weekly", label: "Progress Updates", desc: "Always know where things stand" },
  { val: "Post-launch", label: "Support Included", desc: "We don't disappear after delivery" },
];

const pillars = [
  {
    icon: Rocket,
    title: "Fast, Focused Delivery",
    description:
      "We ship working software in weeks, not months. Our lean process keeps things moving without cutting corners on quality.",
    color: "indigo",
    glowRGB: "99,102,241",
  },
  {
    icon: Lightbulb,
    title: "We Think, Not Just Execute",
    description:
      "We don't just build what you describe — we ask the right questions and bring ideas that make the product better.",
    color: "violet",
    glowRGB: "139,92,246",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "Security is built in from the start, not added later. Your users' data and your business are protected at every layer.",
    color: "sky",
    glowRGB: "14,165,233",
  },
  {
    icon: Users,
    title: "Direct Access to Builders",
    description:
      "You talk to the people building your product — not account managers. That means faster decisions and fewer misunderstandings.",
    color: "teal",
    glowRGB: "20,184,166",
  },
  {
    icon: Clock,
    title: "Support After Launch",
    description:
      "Our relationship doesn't end when your project goes live. We provide ongoing support and improvements as your business grows.",
    color: "amber",
    glowRGB: "245,158,11",
  },
  {
    icon: Award,
    title: "Clean, Maintainable Code",
    description:
      "Everything we build is documented and structured so your team can maintain it, extend it, or hand it to another developer.",
    color: "rose",
    glowRGB: "244,63,94",
  },
];

const colorClass: Record<string, string> = {
  indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  sky: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  teal: "text-teal-400 bg-teal-500/10 border-teal-500/20",
  amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  rose: "text-rose-400 bg-rose-500/10 border-rose-500/20",
};

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="relative py-16 sm:py-20 md:py-28 bg-[#050508] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(99,102,241,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-zinc-600 uppercase mb-5 sm:mb-6">
            Why Work With Us
          </div>
          <h2 className="text-[clamp(1.9rem,5vw,3.8rem)] font-bold tracking-[-0.04em] mb-4 sm:mb-6">
            <span className="text-white">Software built for</span>
            <br />
            <span className="gradient-text">real businesses.</span>
          </h2>
          <p className="text-zinc-500 text-[14px] sm:text-[15px] max-w-sm sm:max-w-lg mx-auto leading-[1.75]">
            We work with startups and growing businesses that need reliable, well-built
            software — and a team that actually cares about the outcome.
          </p>
        </motion.div>

        {/* Trust markers */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] rounded-xl sm:rounded-2xl overflow-hidden mb-10 sm:mb-14 md:mb-20 border border-white/[0.04]">
          {trustMarkers.map((marker, i) => (
            <motion.div
              key={marker.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#050508] px-4 sm:px-6 md:px-8 py-7 sm:py-9 md:py-10 text-center"
            >
              <div className="text-[1.5rem] sm:text-[2rem] md:text-[2.4rem] font-bold tracking-[-0.04em] gradient-text mb-1.5 sm:mb-2">
                {marker.val}
              </div>
              <div className="text-[12px] sm:text-sm font-semibold text-white mb-0.5 sm:mb-1">{marker.label}</div>
              <div className="text-[11px] sm:text-xs text-zinc-500 hidden sm:block">{marker.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.65, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
              >
                <GlowCard
                  className="glass rounded-2xl border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden h-full"
                  glowColor={pillar.glowRGB}
                >
                  <div className="p-5 sm:p-6 md:p-7">
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border mb-4 sm:mb-5 ${colorClass[pillar.color]}`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-[15px] sm:text-base font-semibold text-white mb-2.5 sm:mb-3">{pillar.title}</h3>
                    <p className="text-[13px] sm:text-sm text-zinc-400 leading-relaxed">{pillar.description}</p>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
