import { MarqueeCards } from "@/components/testimonials/MarqueeCard";
import React from "react";
import Container from "@/components/container";
import { useTranslations } from "next-intl";
import InfiniteCarousel4Col from "@/components/carousel/InfiniteCarousel4Col";

const cardsData = [
  {
    image: "/assets/avatar/avatar-1.png",
    name: "Rizka Prativi",
    handle: "@ahmadfzn",
    date: "20 April 2025",
    platform: "facebook",
    message:
      "Proses publikasi jurnal di CakrawalaPublisher sangat membantu. Timnya responsif dan memberikan arahan yang jelas dari awal sampai artikel saya terbit.",
  },
  {
    image: "/assets/avatar/avatar-2.png",
    name: "Aldila Radi",
    handle: "@sitinurhaliza.id",
    date: "10 Mei 2025",
    platform: "instagram",
    message:
      "Awalnya ragu karena baru pertama submit jurnal, tapi dibantu mulai dari editing sampai review. Sangat direkomendasikan untuk dosen dan mahasiswa.",
  },
  {
    image: "/assets/avatar/avatar-4.png",
    name: "Rizky Pratama",
    handle: "@rizkyprtm_",
    date: "5 Juni 2025",
    platform: "facebook",
    message:
      "Layanan cek Turnitin gratisnya sangat membantu memastikan artikel saya aman dari plagiarisme sebelum submit ke jurnal tujuan.",
  },
  {
    image: "/assets/avatar/avatar-3.png",
    name: "Dewi Lestari",
    handle: "@dewilestari_",
    date: "18 Juni 2025",
    platform: "facebook",
    message:
      "Template jurnal saya dirapikan tanpa biaya tambahan. Komunikasi cepat dan penjelasannya mudah dipahami.",
  },
  {
    image: "/assets/avatar/avatar-6.png",
    name: "Muhammad Arif",
    handle: "@arif.research",
    date: "2 Juli 2025",
    platform: "instagram",
    message:
      "Pelayanan profesional dan transparan. Sangat cocok untuk peneliti pemula yang butuh pendampingan publikasi.",
  },
  {
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
    name: "Nabil Alkatiri",
    handle: "@nabilaputrii",
    date: "15 Juli 2025",
    platform: "facebook",
    message:
      "Review dari tim sangat detail dan membantu meningkatkan kualitas artikel sebelum diterbitkan.",
  },
];
const TestimonialsSection = () => {
  const t = useTranslations("Testimonials");
  const testimonials = [
    { id: 1, image: "/assets/testimonials/1.png", title: "Copernicus" },
    { id: 2, image: "/assets/testimonials/2.png", title: "DOAJ" },
    {
      id: 3,
      image: "/assets/testimonials/3.png",
      title: "Call For Paper",
    },
    { id: 4, image: "/assets/testimonials/4.png", title: "SINTA" },
    { id: 5, image: "/assets/testimonials/5.png", title: "Copernicus" },
    { id: 6, image: "/assets/testimonials/6.png", title: "DOAJ" },
    {
      id: 7,
      image: "/assets/testimonials/7.png",
      title: "Call For Paper",
    },
    { id: 8, image: "/assets/testimonials/8.png", title: "SINTA" },
    { id: 9, image: "/assets/testimonials/9.png", title: "SINTA" },
    { id: 10, image: "/assets/testimonials/10.png", title: "SINTA" },
  ];

  return (
    <section className="py-20 space-y-10" id="testimonials">
      <Container>
        <div className="flex w-full justify-center">
          <div className="space-y-5 text-center max-w-xl mb-5 lg:mb-8">
            <div>
              <span className="px-4 py-2.5 bg-white border border-gray-200 rounded-full text-primary font-normal text-sm lg:text-md">
                {t("badge")}
              </span>
            </div>

            <h3 className="text-black font-semibold text-2xl lg:text-4xl leading-tight md:leading-snug lg:leading-normal">
              <span className="text-primary me-2">{t("title.highlight")}</span>
              {t("title.line2")}
            </h3>
          </div>
        </div>
        <MarqueeCards data={cardsData} />
        <MarqueeCards data={cardsData} reverse />
        <div className="pt-5">
          <InfiniteCarousel4Col items={testimonials} />
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
