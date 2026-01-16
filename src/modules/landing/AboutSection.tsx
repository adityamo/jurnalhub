import React from "react";
import Container from "@/components/container";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative bg-primary justify-center mt-20" id="aboutus">
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
                Tentang Kami
              </span>
            </div>

            <h2 className="text-white font-semibold text-2xl lg:text-4xl leading-tight md:leading-snug lg:leading-normal">
              Pendampingan yang Fokus pada Proses Akademik
            </h2>
          </div>
          <p className="text-xs lg:text-sm font-normal text-white mt-2">
            Proses publikasi jurnal sering kali membutuhkan waktu, ketelitian,
            dan pemahaman terhadap standar masing-masing jurnal.Di sinilah kami
            berperan sebagai pendamping, membantu Anda memahami alur publikasi
            mulai dari penyesuaian naskah, pemilihan jurnal, hingga proses
            submit dan revisi.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
