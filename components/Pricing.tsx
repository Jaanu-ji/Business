"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "916264263300";

const plans = [
  {
    name: "Starter Website",
    price: "Starting at ₹15,000",
    description: "A clean, professional website to establish your online presence.",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact & enquiry form",
      "SEO basics setup",
      "Fast loading & optimized",
      "2 revision rounds",
    ],
    cta: "Get Started",
    ctaHref: "#contact",
    popular: false,
    accent: "#6366f1",
  },
  {
    name: "Business Dashboard",
    price: "Starting at ₹40,000",
    description: "A custom admin panel or management system built for your operations.",
    features: [
      "Custom admin panel",
      "Role-based access control",
      "Data management & tables",
      "API & third-party integrations",
      "Charts & reporting",
      "Deployment & hosting setup",
    ],
    cta: "Book a Consultation",
    ctaHref: "#contact",
    popular: true,
    accent: "#8b5cf6",
  },
  {
    name: "Custom Software",
    price: "Get a Quote",
    description: "Mobile apps, complex systems, AI features — scoped to your exact needs.",
    features: [
      "Mobile app (iOS & Android)",
      "AI automation & chatbots",
      "WhatsApp integrations",
      "CRM / ERP systems",
      "Ongoing support & updates",
      "Fully custom architecture",
    ],
    cta: "Request a Quote",
    ctaHref: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20custom%20project.`,
    ctaExternal: true,
    popular: false,
    accent: "#06b6d4",
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="relative py-16 sm:py-20 md:py-28 bg-[#050508] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-zinc-600 uppercase mb-5 sm:mb-6">
            Pricing
          </div>
          <h2 className="text-[clamp(1.9rem,5vw,3.8rem)] font-bold tracking-[-0.04em] mb-4 sm:mb-6">
            <span className="text-white">Simple, honest</span>
            <br />
            <span className="gradient-text">pricing.</span>
          </h2>
          <p className="text-zinc-500 text-[14px] sm:text-[15px] max-w-sm sm:max-w-lg mx-auto leading-[1.75]">
            No hidden fees. No surprises. We give you a clear price before any work starts —
            and we stick to it.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {plan.popular && (
                <div
                  className="absolute -top-px inset-x-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${plan.accent}80, transparent)` }}
                />
              )}

              <div
                className={`glass rounded-2xl border p-6 sm:p-7 h-full flex flex-col transition-all duration-300 ${
                  plan.popular
                    ? "border-violet-500/30 bg-violet-500/[0.02]"
                    : "border-white/[0.06]"
                }`}
                style={plan.popular ? { boxShadow: `0 0 60px ${plan.accent}10` } : {}}
              >
                {plan.popular && (
                  <div
                    className="inline-flex self-start items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide mb-4"
                    style={{ background: `${plan.accent}20`, color: plan.accent }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: plan.accent }} />
                    Most Popular
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-zinc-500 text-[13px] leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.03em]">
                    {plan.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-7 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] text-zinc-400">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: plan.accent }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaHref}
                  target={plan.ctaExternal ? "_blank" : undefined}
                  rel={plan.ctaExternal ? "noopener noreferrer" : undefined}
                  className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-[13px] transition-all duration-300 ${
                    plan.popular
                      ? "bg-white text-[#080810] hover:bg-zinc-100 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                      : "border border-white/[0.08] text-zinc-300 hover:text-white hover:border-white/[0.18] hover:bg-white/[0.04]"
                  }`}
                >
                  {plan.ctaExternal && <MessageCircle className="w-4 h-4 text-emerald-400" />}
                  {plan.cta}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-[12px] sm:text-[13px] text-zinc-600 mt-8"
        >
          All prices are starting points. Final quotes depend on scope, complexity, and timeline.{" "}
          <a href="#contact" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">
            Book a free call
          </a>{" "}
          and we&apos;ll give you a clear estimate.
        </motion.p>
      </div>
    </section>
  );
}
