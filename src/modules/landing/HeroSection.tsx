/* eslint-disable @next/next/no-img-element */
"use client";

import Container from "@/components/container";
import AnimatedTextWrapper from "@/components/textgenerate/AnimatedTextWrapper";
import { handleToContact } from "@/helpers/globalHelper";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0.01,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariant = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0.01,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.25,
    },
  },
};

const HeroSection = () => {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="
        relative w-full overflow-hidden
        will-change-transform
        translate-z-0
      "
    >
      <div
        aria-hidden
        className="
          absolute inset-0 z-0 opacity-100
          will-change-transform
          translate-z-0
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
          maskImage: `
            radial-gradient(
              ellipse 80% 80% at 0% 100%,
              black 55%,
              transparent 90%
            )
          `,
          WebkitMaskImage: `
            radial-gradient(
              ellipse 80% 80% at 0% 100%,
              black 55%,
              transparent 90%
            )
          `,
        }}
      />

      <Container className="relative py-10 lg:py-2 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            className="flex flex-col gap-3"
            variants={fadeUp}
            style={{
              transform: "translateZ(0)",
            }}
          >
            <div className="flex w-full justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-sm text-gray-700 w-fit">
                <Image
                  src="/assets/icon/trustedbadge.svg"
                  alt="Trusted badge"
                  width={20}
                  height={20}
                  priority
                  className="w-5"
                />
                {t("badge")}
              </div>
            </div>

            <AnimatedTextWrapper>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center lg:text-start leading-tight md:leading-snug lg:leading-normal text-black">
                  {t("title.line1")}
                  <span className="ms-2 text-blue-600">
                    {t("title.highlight")}
                  </span>
                </h2>
              </div>
            </AnimatedTextWrapper>

            <motion.p
              variants={fadeUp}
              className="text-gray-600 max-w-2xl leading-relaxed text-center lg:text-start"
            >
              {t("description")}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center lg:justify-start gap-4 mt-4"
            >
              <button
                onClick={handleToContact}
                className="
                  inline-flex items-center gap-2 px-6 h-11
                  rounded-lg bg-blue-600 text-white font-medium
                  hover:bg-blue-700 transition
                "
              >
                {t("cta")} <FiArrowRight />
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 lg:mt-10 mt-5"
            >
              <div className="flex -space-x-2">
                {[
                  "1568602471122-7832951cc4c5",
                  "1531927557220-a9e23c1e4794",
                  "1541101767792-f9b2b1c4f127",
                ].map((id, i) => (
                  <Image
                    key={i}
                    className="size-11 rounded-full ring-2 ring-white"
                    src={`https://images.unsplash.com/photo-${id}?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80`}
                    alt="Avatar"
                    width={44}
                    height={44}
                  />
                ))}
              </div>

              <div className="flex flex-col space-y-1">
                <div className="inline-flex items-center gap-1 pt-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Image
                      key={i}
                      src="/assets/icon/starticon.svg"
                      alt="star"
                      width={16}
                      height={16}
                      className="w-4"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">
                    {t("rating.score")}
                  </span>{" "}
                  • {t("rating.label")}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={imageVariant}
            style={{
              transform: "translateZ(0)",
              willChange: "transform",
            }}
          >
            <div
              className="
                w-[280px] h-[340px]
                sm:w-[320px] sm:h-[400px]
                md:w-[380px] md:h-[480px]
                lg:w-[420px] lg:h-[520px]
                xl:w-[480px] xl:h-[580px]
              "
            >
              <Image
                src="/assets/illustration/hero-1.svg"
                alt="Hero illustration"
                width={420}
                height={520}
                priority
                fetchPriority="high"
                loading="eager"
                className="block w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
