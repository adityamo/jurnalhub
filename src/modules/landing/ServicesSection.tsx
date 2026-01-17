import Container from "@/components/container";
import React from "react";
import Bento1 from "./molecules/servicemolecules/Bento1";
import Bento2 from "./molecules/servicemolecules/Bento2";
import Bento3 from "./molecules/servicemolecules/Bento3";
import Bento4 from "./molecules/servicemolecules/Bento4";
import Bento5 from "./molecules/servicemolecules/Bento5";
import ScrollReveal from "@/components/motionreveal/ScrollReveal";

const ServicesSection = () => {
  return (
    <section className="relative justify-center mt-20" id="services">
      <Container>
        <ScrollReveal effect="slide-down" delay={0.15}>
          <div className="flex w-full justify-center">
            <div className="space-y-5 text-center max-w-lg mb-5 lg:mb-8">
              <div>
                <span className="px-4 py-2.5 bg-white border border-gray-200 rounded-full text-primary font-normal text-sm lg:text-md">
                  Tentang Kami
                </span>
              </div>

              <h3 className="text-black font-semibold text-2xl lg:text-4xl leading-tight md:leading-snug lg:leading-normal">
                <span className="text-primary"> Layanan Terbaik </span>
                Dari Kami
              </h3>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal effect="slide-up" delay={0.15}>
          <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-5 items-stretch">
            <div className="lg:col-span-3">
              <Bento1 />
            </div>
            <div className="lg:col-span-2">
              <Bento2 />
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal effect="slide-up" delay={0.15}>
          <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 items-stretch pt-4">
            <Bento3 />
            <Bento4 />
            <Bento5 />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default ServicesSection;
