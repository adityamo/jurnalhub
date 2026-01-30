import InfiniteCarousel4Col from "@/components/carousel/InfiniteCarousel4Col";
import Container from "@/components/container";
import ScrollReveal from "@/components/motionreveal/ScrollReveal";
import { useTranslations } from "next-intl";
import React from "react";

const ProductSection = () => {
  const products = [
    { id: 1, image: "/assets/product/1.png", title: "Copernicus" },
    { id: 2, image: "/assets/product/2.png", title: "DOAJ" },
    {
      id: 3,
      image: "/assets/product/3.png",
      title: "Call For Paper",
    },
    { id: 4, image: "/assets/product/4.png", title: "SINTA" },
  ];

  const t = useTranslations("Product");

  return (
    <ScrollReveal effect="slide-up" delay={0.05}>
      <section
        className="relative justify-center bg-gray-100 mt-20"
        id="product"
      >
        <Container className="grid grid-cols-1  gap-10 lg:gap-18 py-10 lg:py-18 lg:items-center">
          <div className="flex w-full justify-center">
            <div className="space-y-5 text-center max-w-lg mb-5 lg:mb-2">
              <div>
                <span className="px-4 py-2.5 bg-white border border-gray-200 rounded-full text-primary font-normal text-sm lg:text-md">
                  {t("badge")}
                </span>
              </div>

              <h3 className="text-black font-semibold text-2xl lg:text-4xl leading-tight md:leading-snug lg:leading-normal gap-2">
                {t("title.line1")}
                <span className="text-primary mx-2">
                  {t("title.highlight")}
                </span>
                {t("title.line2")}
              </h3>
            </div>
          </div>

          <InfiniteCarousel4Col items={products} />
        </Container>
      </section>
    </ScrollReveal>
  );
};

export default ProductSection;
