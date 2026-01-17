import Container from "@/components/container";
import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/motionreveal/ScrollReveal";

const ProPersonSection = () => {
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
  ];
  return (
    <section className="relative justify-center mt-20" id="professional">
      <Container>
        <ScrollReveal effect="slide-up" delay={0.15}>
          <div className="flex w-full justify-center">
            <div className="space-y-5 text-center max-w-lg mb-5 lg:mb-8">
              <div>
                <span className="px-4 py-2.5 bg-white border border-gray-200 rounded-full text-primary font-normal text-sm lg:text-md">
                  Team Kami
                </span>
              </div>

              <h2 className="text-black font-semibold text-2xl lg:text-4xl leading-tight md:leading-snug lg:leading-normal">
                <span className="text-primary"> Tim Ahli </span>
                Dibidangnya
              </h2>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal effect="slide-down" delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
            {professional.map((item, index) => {
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="shadow-md rounded-xl overflow-hidden"
                >
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.title ?? "carousel item"}
                      height={200}
                      width={400}
                      className="object-cover h-auto w-full lg:h-70 lg:w-200"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default ProPersonSection;
