/* eslint-disable @next/next/no-img-element */
"use client";

import Container from "@/components/container";
import ScrollReveal from "@/components/motionreveal/ScrollReveal";
import AnimatedTextWrapper from "@/components/textgenerate/AnimatedTextWrapper";
import { handleToContact } from "@/helpers/globalHelper";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  const t = useTranslations("Hero");
  return (
    <section className="relative w-full overflow-hidden" id="hero">
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          opacity-0
          animate-[heroBgFade_0.9s_ease-out_0.15s_forwards]
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

      <Container className="relative py-10 lg:py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col gap-3">
            <div className="flex w-full justify-center lg:justify-start">
              <ScrollReveal effect="slide-up" delay={0.05}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-sm text-gray-700 w-fit">
                  <Image
                    src="/assets/icon/trustedbadge.svg"
                    alt="Hero Person"
                    width={20}
                    height={20}
                    className="relative z-10 w-5"
                    loading="lazy"
                    decoding="async"
                  />
                  {t("badge")}
                </div>
              </ScrollReveal>
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

            <ScrollReveal effect="slide-up" delay={0.15}>
              <p className="text-gray-600 max-w-xl leading-relaxed text-center lg:text-start">
                {t("description")}
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-4 mt-4">
                <button
                  onClick={handleToContact}
                  className="
                    inline-flex items-center gap-2 px-6 h-11
                    rounded-lg bg-blue-600 text-white font-medium
                    hover:bg-blue-700 transition
                    will-change-transform   // OPTIMIZED
                  "
                >
                  {t("cta")} <FiArrowRight />
                </button>
              </div>

              <div className="flex items-center gap-3 lg:mt-10 mt-5">
                <div className="flex -space-x-2">
                  <div className="hs-tooltip inline-block">
                    <Image
                      className="hs-tooltip-toggle relative inline-block size-11 rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                      alt="Avatar"
                      width={44}
                      height={44}
                    />
                    <span
                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                      role="tooltip"
                    >
                      James
                    </span>
                  </div>
                  <div className="hs-tooltip inline-block">
                    <Image
                      className="hs-tooltip-toggle relative inline-block size-11 rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
                      src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                      alt="Avatar"
                      width={44}
                      height={44}
                    />
                    <span
                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                      role="tooltip"
                    >
                      Maria
                    </span>
                  </div>
                  <div className="hs-tooltip inline-block">
                    <Image
                      className="hs-tooltip-toggle relative inline-block size-11 rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
                      src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                      alt="Avatar"
                      width={44}
                      height={44}
                    />
                    <span
                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                      role="tooltip"
                    >
                      Anna
                    </span>
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <div className="inline-flex items-center gap-1 pt-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Image
                        key={i}
                        src="/assets/icon/starticon.svg"
                        alt="star-icon"
                        width={16}
                        height={16}
                        loading="lazy"
                        decoding="async"
                        className="w-4"
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">
                      {t("rating.score")}
                    </span>{" "}
                    •{t("rating.label")}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <ScrollReveal effect="slide-up" delay={0.25}>
              <Image
                src="/assets/illustration/hero-1.svg"
                alt="Hero Person"
                width={420}
                height={520}
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                onLoadingComplete={(img) => {
                  img.setAttribute("data-loaded", "true");
                }}
                className="
    relative z-10 lg:w-[500px]
    transition-all duration-700 ease-out
    opacity-0 scale-95
    data-[loaded=true]:opacity-100
    data-[loaded=true]:scale-100
  "
              />
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
