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

    const walk = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent) {
        const parts = node.textContent.match(/(\s+|\S+)/g);
        if (!parts) return;

        const fragment = document.createDocumentFragment();

        parts.forEach((part) => {
          if (part.trim() === "") {
            fragment.appendChild(document.createTextNode(part));
          } else {
            const span = document.createElement("span");
            span.textContent = part;
            span.style.opacity = "0";
            span.style.filter = "blur(10px)";
            span.style.display = "inline-block";
            span.dataset.word = "true";
            fragment.appendChild(span);
          }
        });

        node.parentNode?.replaceChild(fragment, node);
        return;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        node.childNodes.forEach(walk);
      }
    };

    walk(scope.current);

    animate(
      "[data-word]",
      { opacity: 1, filter: "blur(0px)" },
      { delay: stagger(0.12), duration: 0.5 }
    );
  }, []);

  return <div ref={scope}>{children}</div>;
}
