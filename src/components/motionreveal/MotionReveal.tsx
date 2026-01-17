"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type Direction = "top" | "bottom" | "left" | "right" | "none";
type Effect = "fade" | "slide" | "zoom" | "blur";

interface MotionRevealProps {
  children: ReactNode;
  from?: Direction;
  effect?: Effect;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}

export default function MotionReveal({
  children,
  from = "bottom",
  effect = "fade",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  className,
}: MotionRevealProps) {
  const distance = 40;

  const variants: Variants = {
    hidden: {
      opacity: effect === "fade" || effect === "blur" ? 0 : 1,
      y: from === "top" ? -distance : from === "bottom" ? distance : 0,
      x: from === "left" ? -distance : from === "right" ? distance : 0,
      scale: effect === "zoom" ? 0.95 : 1,
      filter: effect === "blur" ? "blur(10px)" : "none",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
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
