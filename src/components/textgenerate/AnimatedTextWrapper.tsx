/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";
import { stagger, useAnimate } from "framer-motion";

export default function AnimatedTextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!scope.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const walker = document.createTreeWalker(
      scope.current,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) =>
          node.textContent?.trim()
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT,
      }
    );

    const textNodes: Text[] = [];
    let currentNode: Node | null;

    while ((currentNode = walker.nextNode())) {
      textNodes.push(currentNode as Text);
    }

    textNodes.forEach((node) => {
      const words = node.textContent!.split(/(\s+)/);
      const fragment = document.createDocumentFragment();

      words.forEach((word) => {
        if (word.trim() === "") {
          fragment.appendChild(document.createTextNode(word));
        } else {
          const span = document.createElement("span");
          span.textContent = word;
          span.dataset.word = "true";

          span.style.display = "inline-block";
          span.style.opacity = "0";
          span.style.transform = "translateY(8px)";
          span.style.willChange = "transform, opacity";

          fragment.appendChild(span);
        }
      });

      node.parentNode?.replaceChild(fragment, node);
    });

    animate(
      "[data-word]",
      { opacity: 1, transform: "translateY(0px)" },
      {
        delay: stagger(0.05),
        duration: 0.35,
        ease: "easeOut",
      }
    );
  }, []);

  return <div ref={scope}>{children}</div>;
}
