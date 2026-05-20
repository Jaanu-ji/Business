"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const projects = [
  {
    tag: "DEMO PROJECT",
    label: "Clinic Management System",
    title: "Clinic Management\nSystem",
    description:
      "A full appointment and patient management system for small clinics. Handles bookings, patient records, billing, and staff schedules — all in one clean interface.",
    features: [
      "Patient appointment booking & reminders",
      "Medical records management",
      "Invoice & billing generation",
      "Staff schedule management",
    ],
    cta: "Build something like this",
    accent: "#6366f1",
    mockupType: "dashboard",
  },
  {
    tag: "CONCEPT SYSTEM",
    label: "Restaurant Ordering App",
    title: "Restaurant\nOrdering App",
    description:
      "A mobile ordering app for restaurants that lets customers order from their table, track kitchen status, and pay digitally — reducing staff workload significantly.",
    features: [
      "Table-side digital menu & ordering",
      "Real-time kitchen display system",
      "Integrated digital payments",
      "Sales reports & daily analytics",
    ],
    cta: "Build something like this",
    accent: "#8b5cf6",
    mockupType: "mobile",
  },
  {
    tag: "INTERNAL CASE STUDY",
    label: "AI Customer Support Portal",
    title: "AI Customer\nSupport Portal",
    description:
      "An intelligent helpdesk that handles common customer queries automatically, routes complex tickets to the right team, and gives management clear real-time reporting.",
    features: [
      "Auto-response to common queries",
      "Smart ticket routing & classification",
      "Human handoff when needed",
      "Management dashboard & reporting",
    ],
    cta: "Build something like this",
    accent: "#06b6d4",
    mockupType: "support",
  },
];

type Project = (typeof projects)[0];

function DashboardMockup({ accent }: { accent: string }) {
  return (
    <div className="w-full h-full bg-[#0a0a12] rounded-xl p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
        </div>
        <div className="w-24 h-2 rounded bg-white/5" />
        <div className="w-16 h-2 rounded bg-white/5" />
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[["Patients", "148"], ["Today", "12"], ["Revenue", "↑ 8%"]].map(([label, val]) => (
          <div key={label} className="bg-white/[0.03] rounded-lg p-2.5 border border-white/[0.04]">
            <div className="text-[9px] text-zinc-500 mb-1">{label}</div>
            <div className="text-xs font-bold text-white">{val}</div>
          </div>
        ))}
      </div>
      <div className="bg-white/[0.02] rounded-lg p-3 mb-3 border border-white/[0.04]">
        <div className="text-[9px] text-zinc-500 mb-3">Appointments This Week</div>
        <div className="flex items-end gap-1 h-16">
          {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm"
              style={{ background: `${accent}50` }}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.6, ease: "easeOut" }}
            />
          ))}
        </div>
      </div>
      {[
        { name: "Ali Hassan", time: "10:00 AM", status: "Confirmed" },
        { name: "Sara Khan", time: "11:30 AM", status: "Pending" },
        { name: "Ahmed Raza", time: "02:00 PM", status: "Confirmed" },
      ].map((row) => (
        <div key={row.name} className="flex items-center gap-2 py-1.5 border-b border-white/[0.03]">
          <div className="w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center text-[7px] text-zinc-400 font-bold">
            {row.name[0]}
          </div>
          <div className="flex-1 text-[9px] text-zinc-400">{row.name}</div>
          <div className="text-[8px] text-zinc-600 font-mono">{row.time}</div>
          <div
            className="text-[7px] font-semibold px-1.5 py-0.5 rounded-full"
            style={{
              background: row.status === "Confirmed" ? `${accent}20` : "rgba(245,158,11,0.15)",
              color: row.status === "Confirmed" ? accent : "#f59e0b",
            }}
          >
            {row.status}
          </div>
        </div>
      ))}
    </div>
  );
}

function MobileMockup({ accent }: { accent: string }) {
  return (
    <div className="flex justify-center h-full items-center">
      <div className="w-44 h-80 bg-[#0a0a12] rounded-[28px] border border-white/10 overflow-hidden relative shadow-2xl">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-10" />
        <div className="h-full overflow-hidden pt-8 px-3 pb-3 flex flex-col gap-2">
          <div className="flex justify-between items-center mb-1">
            <div className="w-16 h-2.5 rounded bg-white/20" />
            <div className="w-6 h-6 rounded-full" style={{ background: `${accent}40` }} />
          </div>
          <div className="bg-white/[0.04] rounded-xl p-3 border border-white/[0.06]">
            <div className="text-[8px] text-zinc-500 mb-1">Table 4 — Order</div>
            <div className="text-base font-bold text-white">₹ 1,840</div>
            <div className="text-[9px] mt-0.5" style={{ color: accent }}>3 items · Kitchen: Preparing</div>
          </div>
          {["Chicken Biryani", "Cold Coffee", "Garlic Bread"].map((item) => (
            <div key={item} className="flex items-center gap-2 bg-white/[0.03] rounded-lg p-2 border border-white/[0.04]">
              <div className="w-6 h-6 rounded-lg" style={{ background: `${accent}25` }} />
              <div className="flex-1">
                <div className="text-[9px] text-white font-medium">{item}</div>
                <div className="w-12 h-1.5 rounded bg-white/10 mt-0.5" />
              </div>
            </div>
          ))}
          <div className="flex items-end gap-0.5 h-8 mt-auto">
            {[50, 70, 45, 85, 60, 95, 75].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm"
                style={{ background: `${accent}60` }}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.06, duration: 0.4 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportMockup({ accent }: { accent: string }) {
  const tickets = [
    { msg: "Where is my order?", status: "Auto-replied", ok: true },
    { msg: "I need to cancel my booking", status: "Routed to team", ok: true },
    { msg: "App not loading on iOS", status: "Pending review", ok: false },
  ];
  return (
    <div className="w-full h-full bg-[#0a0a12] rounded-xl p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[10px] text-zinc-400 font-mono">SUPPORT PORTAL — LIVE</div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] text-emerald-400">AI Active</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[["Open", "7"], ["Resolved", "42"], ["Auto-handled", "68%"]].map(([label, val]) => (
          <div key={label} className="bg-white/[0.03] rounded-lg p-2.5 border border-white/[0.04]">
            <div className="text-[9px] text-zinc-500 mb-1">{label}</div>
            <div className="text-xs font-bold text-white">{val}</div>
          </div>
        ))}
      </div>
      <div className="bg-white/[0.02] rounded-lg p-3 mb-3 border border-white/[0.04]">
        <div className="text-[9px] text-zinc-500 mb-2">Response Time (hrs)</div>
        <div className="flex items-end gap-1 h-12">
          {[80, 60, 90, 50, 75, 40, 85, 45, 70, 35, 65, 30].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm"
              style={{ background: `${accent}55` }}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.04, duration: 0.5 }}
            />
          ))}
        </div>
      </div>
      {tickets.map((t) => (
        <div key={t.msg} className="flex justify-between items-center py-1.5 border-b border-white/[0.03]">
          <span className="text-[9px] text-zinc-400 truncate max-w-[140px]">{t.msg}</span>
          <span
            className="text-[8px] font-mono font-bold shrink-0"
            style={{ color: t.ok ? "#4ade80" : "#facc15" }}
          >
            {t.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function Mockup({ type, accent }: { type: string; accent: string }) {
  if (type === "mobile") return <MobileMockup accent={accent} />;
  if (type === "support") return <SupportMockup accent={accent} />;
  return <DashboardMockup accent={accent} />;
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 w-full"
      >
        <div
          className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.06] h-60 sm:h-72 lg:h-96 glass"
          style={{
            boxShadow: `0 0 60px ${project.accent}12, 0 0 120px ${project.accent}04`,
          }}
        >
          <Mockup type={project.mockupType} accent={project.accent} />
          <div
            className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
            style={{ background: `linear-gradient(to top, ${project.accent}10, transparent)` }}
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 w-full"
      >
        <div
          className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono tracking-widest mb-4 sm:mb-6 border"
          style={{
            color: project.accent,
            borderColor: `${project.accent}30`,
            background: `${project.accent}10`,
          }}
        >
          {project.tag}
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight tracking-[-0.03em] mb-4 sm:mb-5 whitespace-pre-line">
          {project.title}
        </h3>

        <p className="text-zinc-400 text-[14px] sm:text-base leading-relaxed mb-5 sm:mb-8">
          {project.description}
        </p>

        <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-10">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 sm:gap-3 text-[13px] sm:text-sm text-zinc-300">
              <CheckCircle2
                className="w-4 h-4 mt-0.5 shrink-0"
                style={{ color: project.accent }}
              />
              {f}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-[13px] sm:text-sm font-semibold text-zinc-400 hover:text-white transition-colors duration-200"
        >
          {project.cta}
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-16 sm:py-20 md:py-28 bg-[#050508] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-zinc-600 uppercase mb-5 sm:mb-6">
            Portfolio
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-bold tracking-[-0.04em] mb-4 sm:mb-5">
            <span className="text-white">Systems we&apos;ve</span>
            <br />
            <span className="gradient-text">designed &amp; built.</span>
          </h2>
          <p className="text-zinc-500 text-[14px] sm:text-[15px] max-w-md mx-auto leading-[1.75]">
            These are demo projects and concept systems — showing the kind of work
            we build for real businesses.
          </p>
        </motion.div>

        {/* Project rows */}
        <div className="flex flex-col gap-14 sm:gap-20 md:gap-28">
          {projects.map((project, i) => (
            <ProjectRow key={project.tag} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
