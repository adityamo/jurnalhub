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

const ITEMS_PER_PAGE = 4;
const CARD_WIDTH = 260;
const GAP = 24;

export default function InfiniteCarousel4Col({
  items,
  interval = 5000,
}: Props) {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);
  const isAnimating = useRef(false);

  const duplicatedItems = [...items, ...items];
  const step = CARD_WIDTH + GAP;

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, interval);

    return () => clearInterval(timer);
  }, [index]);

  useEffect(() => {
    if (index >= items.length) {
      controls.set({ x: 0 });
      setIndex(0);
    }
  }, [index, items.length, controls]);

  const next = async () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const nextIndex = index + ITEMS_PER_PAGE;

    await controls.start({
      x: -nextIndex * step,
      transition: { duration: 0.45, ease: "easeInOut" },
    });

    setIndex(nextIndex);
    isAnimating.current = false;
  };

  const prev = async () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const prevIndex =
      index === 0 ? items.length - ITEMS_PER_PAGE : index - ITEMS_PER_PAGE;

    await controls.start({
      x: -prevIndex * step,
      transition: { duration: 0.45, ease: "easeInOut" },
    });

    setIndex(prevIndex);
    isAnimating.current = false;
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => controls.stop()}
    >
      <motion.div
        animate={controls}
        drag="x"
        dragElastic={0.08}
        dragConstraints={{ left: -100000, right: 0 }}
        onDragEnd={(e, info) => {
          if (info.offset.x < -80) next();
          if (info.offset.x > 80) prev();
        }}
        className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
      >
        {duplicatedItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className="w-[260px] shrink-0">
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

      <div className="hidden lg:block">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-primary text-white shadow rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          <FiChevronLeft />
        </button>
      </div>

      <div className="hidden lg:block">
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-primary text-white shadow rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
