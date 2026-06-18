"use client";

import { useRef } from "react";
import { motion, type Variants, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight, MessageCircle } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(6px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

const WHATSAPP_NUMBER = "916264263300";

const chartBars = [38, 52, 44, 68, 55, 82, 70, 91, 74, 88, 80, 100];
const activityRows = [
  { label: "Invoice sent — Apex Gym", time: "2m ago", color: "#818cf8" },
  { label: "New booking — Dr. Ahmed Clinic", time: "18m ago", color: "#34d399" },
  { label: "Q2 Report generated", time: "1h ago", color: "#a78bfa" },
  { label: "Auto-reply sent to customer", time: "2h ago", color: "#38bdf8" },
];

const kpis = [
  { label: "Active Clients", val: "14", delta: "+2 this month" },
  { label: "Open Projects", val: "6", delta: "3 in progress" },
  { label: "Tasks Done", val: "87%", delta: "↑ from last week" },
];

const heroStats = [
  { val: "Free", label: "Consultation" },
  { val: "24h", label: "Response Time" },
  { val: "NDA", label: "On Request" },
  { val: "4–12 wk", label: "Avg. Delivery" },
];

function HeroCard() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 25 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.65, ease: EASE }}
      style={{ perspective: "1200px" }}
      className="relative"
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* Glow under card */}
        <div
          aria-hidden
          className="absolute -inset-x-8 bottom-0 h-24 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 100% at 50% 100%, rgba(99,102,241,0.18) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        {/* Dashboard card */}
        <div
          className="relative rounded-xl sm:rounded-2xl border border-white/[0.08] overflow-hidden"
          style={{
            background: "rgba(10,10,18,0.9)",
            boxShadow: [
              "0 0 0 1px rgba(255,255,255,0.04)",
              "0 32px 80px rgba(0,0,0,0.6)",
              "inset 0 1px 0 rgba(255,255,255,0.06)",
            ].join(","),
          }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 border-b border-white/[0.05]">
            <div className="flex gap-1.5">
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <div key={c} className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full" style={{ background: c, opacity: 0.8 }} />
              ))}
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.05] text-[9px] sm:text-[10px] text-zinc-500 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                yourbusiness.app / dashboard
              </div>
            </div>
            <div className="w-14 sm:w-16" />
          </div>

          {/* Dashboard body */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
            {/* Sidebar — desktop only */}
            <div className="hidden md:block col-span-1 p-4 border-r border-white/[0.04]" style={{ maxWidth: 180 }}>
              <div className="text-[9px] text-zinc-600 uppercase tracking-widest mb-3 font-medium">Workspace</div>
              {["Overview", "Clients", "Projects", "Reports", "Settings"].map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg mb-0.5 text-[11px] font-medium ${i === 0 ? "bg-indigo-500/10 text-indigo-300" : "text-zinc-600"}`}
                >
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: i === 0 ? "#818cf8" : "rgba(255,255,255,0.12)" }} />
                  {item}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="col-span-2 p-4 sm:p-5">
              {/* KPIs */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
                {kpis.map((kpi) => (
                  <div key={kpi.label} className="bg-white/[0.025] rounded-lg sm:rounded-xl p-2.5 sm:p-3.5 border border-white/[0.05]">
                    <div className="text-[8px] sm:text-[9px] text-zinc-500 mb-1.5 uppercase tracking-widest truncate">{kpi.label}</div>
                    <div className="text-base sm:text-lg font-bold text-white tracking-tight leading-none mb-1">{kpi.val}</div>
                    <div className="text-[8px] sm:text-[9px] text-emerald-400 font-medium">{kpi.delta}</div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="bg-white/[0.02] rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/[0.04] mb-3 sm:mb-4">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="text-[9px] sm:text-[10px] text-zinc-400 font-medium">Project Activity — Last 12 Weeks</div>
                  <div className="text-[8px] sm:text-[9px] text-indigo-400 font-mono">↑ +23% avg</div>
                </div>
                <div className="flex items-end gap-1 sm:gap-1.5 h-10 sm:h-14">
                  {chartBars.map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        background: i === chartBars.length - 1
                          ? "linear-gradient(to top, #6366f1, #818cf8)"
                          : "rgba(99,102,241,0.28)",
                      }}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.7, delay: 0.9 + i * 0.04, ease: EASE }}
                    />
                  ))}
                </div>
              </div>

              {/* Activity */}
              <div className="space-y-0.5">
                {activityRows.map((row, i) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 + i * 0.08, duration: 0.5 }}
                    className={`flex items-center justify-between py-1.5 sm:py-2 border-b border-white/[0.03] ${i >= 2 ? "hidden sm:flex" : ""}`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: row.color }} />
                      <span className="text-[9px] sm:text-[10px] text-zinc-400">{row.label}</span>
                    </div>
                    <span className="text-[8px] sm:text-[9px] text-zinc-600 font-mono">{row.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#050508]">

      {/* Atmospheric lights */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(99,102,241,0.13) 0%, transparent 65%)",
            "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 50%)",
          ].join(","),
        }}
      />
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 120% 100% at 50% 0%, transparent 35%, #050508 90%)",
        }}
      />

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-6 pt-28 sm:pt-32 md:pt-36 pb-6 flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-8 md:mb-10 max-w-full">
          <a
            href="#services"
            className="group inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-500 text-[10px] sm:text-[11px] tracking-widest uppercase text-zinc-500 hover:text-zinc-300 font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse shrink-0" />
            <span className="hidden sm:inline">Web · Mobile · AI Automation · Dashboards</span>
            <span className="sm:hidden">Web · Mobile · AI · Dashboards</span>
            <ChevronRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
          </a>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-[clamp(2.4rem,7.5vw,8rem)] font-bold tracking-[-0.045em] leading-[0.88] mb-6 md:mb-8"
        >
          <span className="text-white">Custom Web, Mobile</span>
          <br />
          <span className="gradient-text">&amp; AI Systems</span>
          <br />
          <span className="text-white text-[clamp(1.4rem,4vw,4.5rem)] tracking-[-0.03em] font-semibold">for Modern Businesses</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-[14px] sm:text-[15px] text-zinc-500 max-w-[380px] sm:max-w-[500px] leading-[1.75] mb-10 md:mb-12 font-light"
        >
          We help businesses automate operations, improve customer experience,
          and launch modern software solutions faster.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-12 md:mb-20 w-full max-w-xs sm:max-w-none">
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 bg-white text-[#080810] rounded-full font-semibold text-[13px] tracking-[-0.01em] hover:bg-zinc-100 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_0_1px_rgba(255,255,255,0.9),0_4px_20px_rgba(0,0,0,0.5)]"
          >
            Book Free Consultation
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full font-semibold text-[13px] tracking-[-0.01em] text-zinc-300 hover:text-white border border-white/[0.09] hover:border-emerald-500/40 bg-transparent hover:bg-emerald-500/[0.06] transition-all duration-300"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Hero product preview with 3D tilt */}
        <motion.div variants={fadeIn} className="w-full max-w-[780px]">
          <HeroCard />
        </motion.div>
      </motion.div>

      {/* Stat strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-6 pb-14 md:pb-20 mt-10 md:mt-16"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.04]">
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-[#050508] px-4 sm:px-6 py-5 sm:py-4 text-center">
              <div className="text-lg sm:text-xl font-bold text-white tracking-tight">{stat.val}</div>
              <div className="text-[10px] sm:text-[11px] text-zinc-600 mt-0.5 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #050508 0%, transparent 100%)" }}
      />
    </section>
  );
}
