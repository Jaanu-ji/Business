"use client";

import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowCard({ children, className = "", glowColor = "99,102,241" }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    mouseX.set(-999);
    mouseY.set(-999);
  }

  const background = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(${glowColor},0.10), transparent 70%)`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-0"
        style={{ background }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
