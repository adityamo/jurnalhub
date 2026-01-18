/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface CarouselItem {
  id: number | string;
  image: string;
  title?: string;
}

interface Props {
  items: CarouselItem[];
  interval?: number;
}

const CARD_WIDTH = 260;
const GAP = 24;
const STEP = CARD_WIDTH + GAP;

export default function InfiniteCarousel4Col({
  items,
  interval = 5000,
}: Props) {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const isAnimating = useRef(false);
  const isPaused = useRef(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const duplicatedItems = [...items, ...items];

  /* =======================
     RESPONSIVE BREAKPOINT
  ======================== */
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* =======================
     RESET ON BREAKPOINT CHANGE
  ======================== */
  useEffect(() => {
    controls.set({ x: 0 });
    setIndex(0);
  }, [itemsPerPage]);

  /* =======================
     AUTOPLAY
  ======================== */
  useEffect(() => {
    if (isPaused.current) return;

    autoplayRef.current = setInterval(() => {
      next();
    }, interval);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [index, itemsPerPage]);

  /* =======================
     LOOP HANDLER
  ======================== */
  useEffect(() => {
    if (index >= items.length) {
      controls.set({ x: 0 });
      setIndex(0);
    }
  }, [index]);

  /* =======================
     ACTIONS
  ======================== */
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

  /* =======================
     RENDER
  ======================== */
  return (
    <div
      className="relative w-full overflow-hidden"
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

          // Velocity based swipe (mobile friendly)
          if (info.velocity.x < -500 || info.offset.x < -80) next();
          if (info.velocity.x > 500 || info.offset.x > 80) prev();
        }}
        className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
      >
        {duplicatedItems.map((item, i) => (
          <div key={`${item.id}-${i}`} className="w-[260px] shrink-0">
            <div className="shadow-md rounded-xl overflow-hidden">
              <div className="relative aspect-[3/4]">
                <Image
                  src={item.image}
                  alt={item.title ?? "carousel item"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* DESKTOP NAV */}
      <div className="hidden lg:block">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-primary text-white shadow rounded-full flex items-center justify-center hover:bg-blue-600"
        >
          <FiChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-primary text-white shadow rounded-full flex items-center justify-center hover:bg-blue-600"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
