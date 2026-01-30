import Container from "@/components/container";
import React from "react";
// import Image from "next/image";
import ScrollReveal from "@/components/motionreveal/ScrollReveal";
import { useTranslations } from "next-intl";
import InfiniteCarousel from "@/components/carousel/InfiniteCarousel";
import Image from "next/image";

const ProPersonSection = () => {
  const t = useTranslations("Professional");
  const professional = [
    {
      id: 1,
      image: "/assets/sertifikat/sertifikat-1.png",
      title: "Copernicus",
    },
    { id: 2, image: "/assets/sertifikat/sertifikat-2.png", title: "DOAJ" },
    {
      id: 3,
      image: "/assets/sertifikat/sertifikat-3.png",
      title: "Call For Paper",
    },
    {
      id: 1,
      image: "/assets/sertifikat/sertifikat-1.png",
      title: "Copernicus",
    },
  ];
  return (
    <section className="relative justify-center mt-20" id="professional">
      <Container>
        <ScrollReveal effect="slide-up" delay={0.15}>
          <div className="flex w-full justify-center">
            <div className="space-y-5 text-center max-w-xl mb-5 lg:mb-8">
              <div>
                <span className="px-4 py-2.5 bg-white border border-gray-200 rounded-full text-primary font-normal text-sm lg:text-md">
                  {t("badge")}
                </span>
              </div>

              <h3 className="text-black font-semibold text-2xl lg:text-4xl leading-tight md:leading-snug lg:leading-normal">
                <span className="text-primary me-2">
                  {t("title.highlight")}
                </span>
                {t("title.line2")}
              </h3>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal effect="slide-down" delay={0.15}>
          <InfiniteCarousel
            items={professional}
            columns={3}
            renderItem={(item) => (
              <div className="shadow-md rounded-xl bg-white p-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            )}
          />
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default ProPersonSection;
