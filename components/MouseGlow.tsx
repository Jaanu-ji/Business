"use client";

import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(700px circle at ${mouseX}px ${mouseY}px, rgba(99,102,241,0.06) 0%, transparent 75%)`;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      style={{ background }}
    />
  );
}
