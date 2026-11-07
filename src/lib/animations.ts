import type { Transition, Variants } from "motion/react";

export const transitions = {
  fast: {
    duration: 0.2,
    ease: "easeOut",
  },

  normal: {
    duration: 0.4,
    ease: "easeOut",
  },

  slow: {
    duration: 0.6,
    ease: "easeOut",
  },
} satisfies Record<string, Transition>;

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: transitions.normal,
  },
};

export const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
