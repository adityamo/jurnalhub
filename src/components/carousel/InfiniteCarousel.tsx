/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState, ReactNode } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Props<T> {
  items: T[];
  interval?: number;
  columns?: number; // desktop columns
  gap?: number;
  renderItem: (item: T, index: number) => ReactNode;
}

export default function InfiniteCarousel<T>({
  items,
  interval = 5000,
  columns = 3,
  gap = 24,
  renderItem,
}: Props<T>) {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(columns);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const isAnimating = useRef(false);
  const isPaused = useRef(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const duplicatedItems = [...items, ...items];

  /* =========================
     RESPONSIVE BREAKPOINT
  ========================== */
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      if (w < 640)
        setItemsPerPage(1); // mobile
      else if (w < 1024)
        setItemsPerPage(2); // tablet
      else setItemsPerPage(columns); // desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [columns]);

  /* =========================
     CONTAINER WIDTH OBSERVER
  ========================== */
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  /* =========================
     INTERSECTION OBSERVER
  ========================== */
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  /* =========================
     RESET ON BREAKPOINT CHANGE
  ========================== */
  useEffect(() => {
    controls.set({ x: 0 });
    setIndex(0);
  }, [itemsPerPage]);

  /* =========================
     AUTOPLAY
  ========================== */
  useEffect(() => {
    if (isPaused.current || !isVisible) return;

    autoplayRef.current = setInterval(next, interval);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [index, itemsPerPage, interval, isVisible]);

  /* =========================
     LOOP RESET
  ========================== */
  useEffect(() => {
    if (index >= items.length) {
      controls.set({ x: 0 });
      setIndex(0);
    }
  }, [index, items.length]);

  /* =========================
     CALCULATED WIDTH
  ========================== */
  const cardWidth =
    containerWidth > 0
      ? (containerWidth - gap * (itemsPerPage - 1)) / itemsPerPage
      : 0;

  const STEP = cardWidth + gap;

  /* =========================
     ACTIONS
  ========================== */
  const next = async () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const nextIndex = index + itemsPerPage;

    await controls.start({
      x: -nextIndex * STEP,
      transition: { duration: 0.45, ease: "easeInOut" },
    });

    setIndex(nextIndex);
    isAnimating.current = false;
  };

  const prev = async () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const prevIndex =
      index === 0 ? items.length - itemsPerPage : index - itemsPerPage;

    await controls.start({
      x: -prevIndex * STEP,
      transition: { duration: 0.45, ease: "easeInOut" },
    });

    setIndex(prevIndex);
    isAnimating.current = false;
  };

  /* =========================
     RENDER
  ========================== */
  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden mx-auto w-full"
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
    >
      <motion.div
        animate={controls}
        drag="x"
        dragElastic={0.08}
        dragConstraints={{ left: -100000, right: 0 }}
        onDragStart={() => (isPaused.current = true)}
        onDragEnd={(e, info) => {
          isPaused.current = false;

          if (info.velocity.x < -500 || info.offset.x < -80) next();
          if (info.velocity.x > 500 || info.offset.x > 80) prev();
        }}
        className="flex w-max cursor-grab active:cursor-grabbing"
        style={{ gap }}
      >
        {duplicatedItems.map((item, i) => (
          <div key={i} className="shrink-0" style={{ width: cardWidth }}>
            {renderItem(item, i)}
          </div>
        ))}
      </motion.div>

      {/* NAV DESKTOP */}
      <div className="hidden lg:block">
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-primary text-white shadow rounded-full flex items-center justify-center"
        >
          <FiChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-primary text-white shadow rounded-full flex items-center justify-center"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
