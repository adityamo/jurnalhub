/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { ReactNode, useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/utils";

function splitTextToSpans(node: ReactNode): ReactNode {
  if (typeof node === "string") {
    return node.split(" ").map((word, i) => (
      <span
        key={i}
        data-word
        className="opacity-0 inline-block"
        style={{ filter: "blur(10px)" }}
      >
        {word}&nbsp;
      </span>
    ));
  }

  if (Array.isArray(node)) {
    return node.map((child, i) => (
      <React.Fragment key={i}>{splitTextToSpans(child)}</React.Fragment>
    ));
  }

  if (React.isValidElement(node)) {
    return React.cloneElement(node, {
      children: splitTextToSpans(node.props.children),
    });
  }

  return node;
}

export const TextGenerateEffect = ({
  children,
  className,
  filter = true,
  duration = 0.5,
}: {
  children: ReactNode;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "[data-word]",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.15),
      }
    );
  }, []);

  return (
    <motion.h1
      ref={scope}
      className={cn(
        "font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-snug lg:leading-normal",
        className
      )}
    >
      {splitTextToSpans(children)}
    </motion.h1>
  );
};
