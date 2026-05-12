"use client";

import { motion } from "framer-motion";
import { hoverSpring } from "@/lib/motion";

type BackToTopProps = {
  label: string;
};

export function BackToTop({ label }: BackToTopProps) {
  return (
    <motion.a
      href="#home"
      className="w-fit rounded-full border border-white/80 bg-white/78 px-5 py-3 font-semibold text-ink shadow-[0_12px_24px_rgba(79,124,255,0.08)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={hoverSpring}
    >
      {label}
    </motion.a>
  );
}
