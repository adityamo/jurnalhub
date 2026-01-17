/* eslint-disable @next/next/no-img-element */

import Container from "@/components/container";
import ScrollReveal from "@/components/motionreveal/ScrollReveal";
import AnimatedTextWrapper from "@/components/textgenerate/AnimatedTextWrapper";
import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden" id="hero">
      <Container className="relative py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col gap-3">
            <div className="flex w-full justify-center lg:justify-start ">
              <ScrollReveal effect="slide-up" delay={0.15}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-sm text-gray-700 w-fit">
                  <Image
                    src="/assets/icon/trustedbadge.svg"
                    alt="Hero Person"
                    width={50}
                    height={550}
                    className="relative z-10 w-5"
                    priority
                  />
                  Trusted Publisher
                </div>
              </ScrollReveal>
            </div>
            <AnimatedTextWrapper>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center lg:text-start leading-tight md:leading-snug lg:leading-normal text-black">
                  Publikasi Jurnal Tanpa Ribet dan
                  <span className="ms-2 text-blue-600">Lebih Terarah</span>
                </h1>
              </div>
            </AnimatedTextWrapper>

            <ScrollReveal effect="slide-up" delay={0.15}>
              <p className="text-gray-600 max-w-xl leading-relaxed text-center lg:text-start">
                Ingin naskah Anda siap diajukan ke jurnal SINTA, Scopus, DOAJ,
                atau EBSCO dengan lebih percaya diri? Kami mendampingi proses
                dari A–Z: pemilihan jurnal, perapihan artikel, editing &
                proofreading, hingga pendampingan revisi bersama reviewer.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4 mt-4">
                <button className="inline-flex items-center gap-2 px-6 h-11 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                  Publish Sekarang <FiArrowRight />
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
                        width={50}
                        height={550}
                        className="relative z-10 w-4"
                        priority
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">4.8</span> •
                    Kepercayaan & Penulis
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <ScrollReveal effect="slide-up" delay={0.15}>
              <Image
                src="/assets/illustration/hero-1.svg"
                alt="Hero Person"
                width={420}
                height={520}
                className="relative z-10 lg:w-[500px]"
                priority
              />
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
