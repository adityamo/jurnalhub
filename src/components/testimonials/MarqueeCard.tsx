"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { SocialMediaCard } from "./SocialMediaCard";

type MarqueeCardsProps = {
  data: any[];
  reverse?: boolean;
  speed?: number;
};

export const MarqueeCards = ({
  data,
  reverse = false,
  speed = 25,
}: MarqueeCardsProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
      transition: {
        duration: speed,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls, reverse, speed]);

  return (
    <div className="relative overflow-hidden w-full max-w-5xl mx-auto">
      {/* Gradient kiri */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />

      <motion.div
        className="flex min-w-[200%] py-10"
        animate={controls}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onHoverStart={() => controls.stop()}
        onHoverEnd={() => {
          controls.start({
            x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
            transition: {
              duration: speed,
              ease: "linear",
              repeat: Infinity,
            },
          });
        }}
      >
        {[...data, ...data].map((card, index) => (
          <SocialMediaCard key={index} {...card} />
        ))}
      </motion.div>

      {/* Gradient kanan */}
      <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
};
