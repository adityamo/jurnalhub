import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import ScrollReveal from "@/components/motionreveal/ScrollReveal";
import { useTranslations } from "next-intl";

const AboutSection = () => {
  const t = useTranslations("About");

  return (
    <ScrollReveal effect="slide-up" delay={0.05}>
      <section
        className="relative bg-primary justify-center mt-5 lg:mt-10"
        id="aboutus"
      >
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-18 py-10 lg:py-18 lg:items-center">
          <Image
            src="/assets/illustration/about-1.svg"
            alt="Hero Person"
            width={420}
            height={520}
            className="relative z-10 lg:w-[600px]"
            priority
          />

          <div className="flex flex-col">
            <div className="space-y-5">
              <div>
                <span className="px-4 py-2.5 bg-white rounded-full text-primary font-normal text-sm lg:text-md">
                  {t("badge")}
                </span>
              </div>

              <h3 className="text-white font-semibold text-2xl lg:text-4xl leading-tight md:leading-snug lg:leading-normal">
                {t("title")}
              </h3>
            </div>
            <p className="text-xs lg:text-sm font-normal text-white mt-2">
              {t("description")}
            </p>
          </div>
        </Container>
      </section>
    </ScrollReveal>
  );
};

export default AboutSection;
