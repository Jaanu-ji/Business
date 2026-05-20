"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Cpu } from "lucide-react";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-20">

          {/* Story / copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug tracking-[-0.02em]">
              We got tired of overpriced agencies delivering generic results.
            </h3>
            <p className="text-zinc-400 text-[14px] sm:text-[15px] leading-[1.8] mb-5">
              So we built Axiom — a software studio where every project is treated like
              our own. We work directly with founders, business owners, and teams to build
              web apps, mobile apps, and AI-powered systems that actually solve real problems.
            </p>
            <p className="text-zinc-500 text-[14px] sm:text-[15px] leading-[1.8]">
              No corporate fluff. No layers of project managers. You talk to the people
              writing your code, and we ship things that work.
            </p>
          </motion.div>

          {/* Founder card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="glass rounded-2xl border border-white/[0.06] p-6 sm:p-8"
              style={{
                boxShadow: "0 0 60px rgba(99,102,241,0.06), 0 0 120px rgba(99,102,241,0.02)",
              }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold text-white shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    boxShadow: "0 0 20px rgba(99,102,241,0.3)",
                  }}
                >
                  SA
                </div>
                <div>
                  <div className="text-white font-semibold text-[15px]">Shahzeb Ansari</div>
                  <div className="text-zinc-500 text-[12px] mt-0.5">Founder &amp; Lead Developer</div>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[11px] text-zinc-600">Available for new projects</span>
                  </div>
                </div>
              </div>

              <blockquote className="text-zinc-400 text-[14px] leading-[1.8] border-l-2 border-indigo-500/40 pl-4 italic">
                "Every project we take on gets our full attention. We&apos;re not running a
                factory — we genuinely care about building software that helps your
                business grow."
              </blockquote>

              <div className="mt-5 pt-5 border-t border-white/[0.05] flex flex-wrap gap-2">
                {["React / Next.js", "React Native", "Node.js", "AI / LLM", "UI/UX Design"].map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-white/[0.06] text-zinc-500 bg-white/[0.02]"
                  >
                    {skill}
                  </span>
                ))}
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
