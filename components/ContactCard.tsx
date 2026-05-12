"use client";

import { AnimatePresence, motion } from "framer-motion";
import { easeIn, hoverSpring, interactiveTransition, itemReveal } from "@/lib/motion";

type ContactCardProps = {
  label: string;
  value: string;
  isToastVisible: boolean;
  onCopy: () => void;
};

export function ContactCard({
  label,
  value,
  isToastVisible,
  onCopy,
}: ContactCardProps) {
  return (
    <motion.div variants={itemReveal} className="relative">
      <AnimatePresence>
        {isToastVisible ? (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{
              y: isToastVisible ? interactiveTransition : { duration: 0.18, ease: easeIn },
              opacity: isToastVisible ? interactiveTransition : { duration: 0.18, ease: easeIn },
            }}
            className="pointer-events-none absolute inset-x-0 bottom-full z-20 mb-3 flex justify-center"
          >
            <span className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-lg">
              Copied
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.article
        whileHover={{ y: -6 }}
        transition={hoverSpring}
        className="glass-card relative flex items-center justify-between gap-4 overflow-hidden rounded-glass p-6 transition hover:-translate-y-1.5 hover:bg-white/85"
      >
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{label}</p>
          <p className="mt-3 break-words text-xl font-semibold text-ink">{value}</p>
        </div>
        <motion.button
          type="button"
          onClick={onCopy}
          aria-label={`Copy ${label}`}
          className="group shrink-0 rounded-full bg-[rgba(34,34,34,0.08)] p-3 text-ink transition hover:bg-ink hover:text-white"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          transition={hoverSpring}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="10" height="10" rx="2" />
            <path d="M5 15V7a2 2 0 0 1 2-2h8" />
          </svg>
        </motion.button>
      </motion.article>
    </motion.div>
  );
}
