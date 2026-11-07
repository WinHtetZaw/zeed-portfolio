"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.3,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
