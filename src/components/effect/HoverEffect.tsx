"use client";

import { cn } from "@/utils/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type HoverEffectProps = {
  children: React.ReactNode;
  className?: string;
  hoverClassName?: string;
  radius?: string;
};

export function HoverEffect({
  children,
  className,
  hoverClassName,
  radius = "rounded-3xl",
}: HoverEffectProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn("relative group", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            layoutId="hover-effect-bg"
            className={cn(
              "absolute inset-0 bg-neutral-200 dark:bg-slate-800/80",
              radius,
              hoverClassName
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
