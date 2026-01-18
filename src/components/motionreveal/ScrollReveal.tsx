"use client";

import { motion, Variants } from "framer-motion";
import { useMemo } from "react";

export default function ScrollReveal({
  children,
  effect = "fade",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.4,
  className,
}: any) {
  const variants = useMemo<Variants>(
    () => ({
      hidden: {
        opacity: 0,
        y: effect === "slide-up" ? 40 : effect === "slide-down" ? -40 : 0,
        x: effect === "slide-left" ? -40 : effect === "slide-right" ? 40 : 0,
        scale: effect === "zoom-in" ? 0.95 : effect === "zoom-out" ? 1.05 : 1,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }),
    [effect, duration, delay]
  );

  return (
    <motion.div
      className={`${className} will-change-transform`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}
