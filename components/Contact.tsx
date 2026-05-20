"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Mail, Send, ArrowRight, Loader2 } from "lucide-react";

const WHATSAPP_NUMBER = "923001234567";
const EMAIL = "hello@axiom.studio";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", budget: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-28 bg-[#050508] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-medium tracking-[0.12em] text-zinc-600 uppercase mb-5 sm:mb-6">
            Let&apos;s Talk
          </div>
          <h2 className="text-[clamp(1.9rem,5vw,3.8rem)] font-bold tracking-[-0.04em] mb-4 sm:mb-6">
            <span className="text-white">Ready to start</span>
            <br />
            <span className="gradient-text">your project?</span>
          </h2>
          <p className="text-zinc-500 text-[14px] sm:text-[15px] max-w-sm sm:max-w-lg mx-auto leading-[1.75]">
            Tell us what you&apos;re building. We&apos;ll get back to you within 24 hours
            with a clear plan and honest pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">

          {/* Left — Quick connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-4 sm:gap-5"
          >
            <div className="glass rounded-2xl p-5 sm:p-6 md:p-8 border border-white/[0.06]">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Quick Connect</h3>
              <p className="text-zinc-400 text-[13px] sm:text-sm mb-6 sm:mb-8">
                Prefer a faster conversation? We&apos;re just a message away.
              </p>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Axiom%2C%20I%27d%20like%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-white/[0.06] hover:border-emerald-500/30 bg-white/[0.02] hover:bg-emerald-500/5 transition-all duration-300 mb-3 sm:mb-4"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] sm:text-sm font-semibold text-white mb-0.5">Chat on WhatsApp</div>
                  <div className="text-[11px] sm:text-xs text-zinc-500 truncate">Fastest — usually replied within the hour</div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL}?subject=Project Inquiry`}
                className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-white/[0.06] hover:border-indigo-500/30 bg-white/[0.02] hover:bg-indigo-500/5 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] sm:text-sm font-semibold text-white mb-0.5 truncate">{EMAIL}</div>
                  <div className="text-[11px] sm:text-xs text-zinc-500">Detailed briefs and project proposals</div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
              </a>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {[
                { val: "< 24h", label: "Response" },
                { val: "NDA", label: "On Request" },
                { val: "Free", label: "Consultation" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-3 sm:p-4 border border-white/[0.05] text-center">
                  <div className="text-base sm:text-lg font-bold text-white mb-0.5">{item.val}</div>
                  <div className="text-[10px] sm:text-xs text-zinc-500">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-5 sm:p-6 md:p-8 border border-white/[0.06]">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-5 sm:mb-6">Send a Project Brief</h3>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 sm:py-16 text-center"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-5">
                    <Send className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-zinc-400 text-sm max-w-xs mx-auto">
                    Thank you! We&apos;ll review your brief and get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs text-zinc-400 mb-1.5 sm:mb-2 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-3.5 sm:px-4 py-3 text-[13px] sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] sm:text-xs text-zinc-400 mb-1.5 sm:mb-2 font-medium">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className="w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-3.5 sm:px-4 py-3 text-[13px] sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs text-zinc-400 mb-1.5 sm:mb-2 font-medium">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-3.5 sm:px-4 py-3 text-[13px] sm:text-sm text-zinc-300 focus:outline-none focus:border-indigo-500/50 transition-all duration-200 appearance-none"
                    >
                      <option value="" className="bg-zinc-900">Select a range</option>
                      <option value="under-15k" className="bg-zinc-900">Under ₹15,000</option>
                      <option value="15k-40k" className="bg-zinc-900">₹15,000 – ₹40,000</option>
                      <option value="40k-100k" className="bg-zinc-900">₹40,000 – ₹1,00,000</option>
                      <option value="100k+" className="bg-zinc-900">₹1,00,000+</option>
                      <option value="discuss" className="bg-zinc-900">Let&apos;s discuss</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs text-zinc-400 mb-1.5 sm:mb-2 font-medium">
                      Tell us about your project *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="What do you need built? What problem are you solving?"
                      className="w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-3.5 sm:px-4 py-3 text-[13px] sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="group w-full flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white rounded-xl font-semibold text-[13px] sm:text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.35)] active:scale-[0.98]"
                  >
                    {sending ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    ) : (
                      <>
                        Send Project Brief
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] sm:text-xs text-zinc-600 text-center">
                    We reply within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
