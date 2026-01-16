/* eslint-disable @next/next/no-img-element */
import Container from "@/components/container";
import React from "react";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <section className="relative justify-center mt-20" id="services">
      <Container>
        <div className="flex w-full justify-center">
          <div className="space-y-5 text-center max-w-lg mb-5 lg:mb-8">
            <div>
              <span className="px-4 py-2.5 bg-white border border-gray-200 rounded-full text-primary font-normal text-sm lg:text-md">
                Tentang Kami
              </span>
            </div>

            <h2 className="text-black font-semibold text-2xl lg:text-4xl leading-tight md:leading-snug lg:leading-normal">
              <span className="text-primary"> Layanan Terbaik </span>
              Dari Kami
            </h2>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-200 lg:col-span-3">
            <div className="grid grid-cols-1  gap-8 px-6 py-8 lg:px-5 lg:py-4">
              <div className="z-10 lg:max-w-md">
                <h2 className="text-2xl lg:text-3xl font-semibold text-slate-800">
                  Pendampingan Publikasi Jurnal Nasional
                </h2>

                <p className="mt-4 text-gray-500 text-sm">
                  Pendampingan publikasi ke jurnal nasional terakreditasi,
                  termasuk jurnal SINTA dan ISSN, dengan menyesuaikan ruang
                  lingkup dan ketentuan jurnal.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-gray-500">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      ✓
                    </span>
                    Syarat Kelulusan
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      ✓
                    </span>
                    BKD & Kenaikan Jabatan
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      ✓
                    </span>
                    Laporan Penelitian
                  </li>
                </ul>
              </div>

              <div className="hidden lg:block" />
            </div>

            <div
              className="
      relative lg:absolute
      lg:right-[-20px] lg:top-1/2 lg:-translate-y-1/2
      w-full lg:w-[320px]
      px-6 lg:px-0
    "
            >
              <Image
                src="/assets/illustration/illus-1.svg"
                alt="Hero Person"
                width={220}
                height={520}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
