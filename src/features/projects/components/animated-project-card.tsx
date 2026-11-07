"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type AnimatedProjectCardProps = {
  children: ReactNode;
  index: number;
};

export function AnimatedProjectCard({
  children,
  index,
}: AnimatedProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 20,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: "easeOut",
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -5,
            }
      }
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
