"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, LayoutTemplate, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    subtitle: "Understanding You",
    description:
      "We start by understanding your business, your users, and your goals. No assumptions — just honest, focused conversations about what you actually need.",
    details: ["Business goals & requirements", "User needs & workflow", "Technical feasibility", "Scope & timeline planning"],
    color: "#6366f1",
  },
  {
    number: "02",
    icon: LayoutTemplate,
    title: "Planning",
    subtitle: "Blueprint",
    description:
      "We map out the solution — wireframes, system design, tech stack, and a clear roadmap so you know exactly what's being built and when.",
    details: ["System architecture design", "UX wireframes & flow", "Sprint-based roadmap", "Clear milestones & deliverables"],
    color: "#8b5cf6",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    subtitle: "Build Phase",
    description:
      "We build in focused sprints with weekly updates and demos. You see real progress every week and can give feedback before it's too late.",
    details: ["Weekly demos & check-ins", "Ongoing QA testing", "Transparent progress updates", "Feedback built in at every step"],
    color: "#a78bfa",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    subtitle: "Go Live",
    description:
      "We handle deployment, performance checks, and post-launch support. Your launch day is treated with care — not a rushed handoff.",
    details: ["Staged production rollout", "Performance optimization", "Post-launch bug fixes", "Ongoing support & updates"],
    color: "#c4b5fd",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="relative py-16 sm:py-20 md:py-28 bg-[#050508] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-18 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-zinc-600 uppercase mb-5 sm:mb-6">
            Our Process
          </div>
          <h2 className="text-[clamp(1.9rem,5vw,3.8rem)] font-bold tracking-[-0.04em] mb-4 sm:mb-6">
            <span className="text-white">How we turn your idea</span>
            <br />
            <span className="gradient-text">into working software.</span>
          </h2>
          <p className="text-zinc-500 text-[14px] sm:text-[15px] max-w-sm sm:max-w-lg mx-auto leading-[1.75]">
            A clear, transparent process designed to keep you informed, reduce risk,
            and deliver results you can actually use.
          </p>
        </motion.div>

        {/* Steps — 1 col mobile, 2 col tablet, 4 col desktop */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Connector line (lg only) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[2.6rem] left-full w-full h-px z-0 pointer-events-none">
                    <motion.div
                      className="h-full origin-left"
                      style={{ background: `linear-gradient(90deg, ${step.color}40, ${steps[i + 1].color}20)` }}
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                )}

                <div className="relative z-10 glass rounded-2xl p-5 sm:p-6 md:p-7 border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 h-full flex flex-col">
                  <div className="text-[11px] font-mono font-bold tracking-widest mb-4 sm:mb-5" style={{ color: step.color }}>
                    {step.number}
                  </div>

                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-4 sm:mb-5 border"
                    style={{ background: `${step.color}15`, borderColor: `${step.color}30`, color: step.color }}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  <div className="mb-2">
                    <span className="text-[16px] sm:text-lg font-bold text-white">{step.title}</span>
                    <span className="ml-2 text-[11px] sm:text-xs text-zinc-500 font-medium">{step.subtitle}</span>
                  </div>

                  <p className="text-[13px] sm:text-sm text-zinc-400 leading-relaxed mb-5 sm:mb-6 flex-1">
                    {step.description}
                  </p>

                  <ul className="space-y-1.5 sm:space-y-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-[11px] sm:text-xs text-zinc-500">
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: step.color }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <span className="text-[13px] sm:text-sm text-zinc-600">
            Typical project timeline:{" "}
            <span className="text-zinc-300 font-semibold">3–4 weeks</span>{" "}
            depending on scope and complexity
          </span>
        </motion.div>
      </div>
    </section>
  );
}
