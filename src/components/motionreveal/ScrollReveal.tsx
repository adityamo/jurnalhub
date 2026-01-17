"use client";

import { motion, Variants } from "framer-motion";

type Effect =
  | "fade"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "zoom-out";

export default function ScrollReveal({
  children,
  effect = "fade",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  className,
}: {
  children: React.ReactNode;
  effect?: Effect;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}) {
  const variants: Variants = {
    hidden: {
      opacity: effect === "fade" ? 0 : 0,
      y: effect === "slide-up" ? 40 : effect === "slide-down" ? -40 : 0,
      x: effect === "slide-left" ? -40 : effect === "slide-right" ? 40 : 0,
      scale: effect === "zoom-in" ? 0.9 : effect === "zoom-out" ? 1.1 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}
