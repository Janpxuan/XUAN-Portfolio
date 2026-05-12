import type { Transition, Variants } from "framer-motion";

export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const easeIn: [number, number, number, number] = [0.4, 0, 1, 1];

export const enterTransition: Transition = {
  duration: 0.55,
  ease: easeOut,
};

export const interactiveTransition: Transition = {
  duration: 0.22,
  ease: easeOut,
};

export const exitTransition: Transition = {
  duration: 0.18,
  ease: easeIn,
};

export const hoverSpring: Transition = {
  type: "spring",
  stiffness: 360,
  damping: 28,
  mass: 0.75,
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: enterTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.03,
    },
  },
};

export const itemReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};
