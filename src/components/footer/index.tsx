/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Link from "next/link";

const FooterLanding = () => {
  return (
    <footer className="relative overflow-hidden px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-gray-50 bg-slate-900 pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            href=""
            className="relative  z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
          >
            <Image
              src="/assets/logo/sentrapub-white.svg"
              width={300}
              height={300}
              alt="dytama-icon"
              className="w-20 lg:w-50"
            />
          </Link>
          <p className="text-sm/7 mt-6">
            Lembaga profesional terlengkap dan terdepan satu-satunya pengelola
            jurnal terakreditasi yang menerbitkan 100 lebih artikel bereputasi
            setiap tahunnya.
          </p>
        </div>
        <div className="flex w-full lg:justify-center">
          <div className="flex flex-col space-y-2">
            <h2 className="font-semibold mb-2 text-white">Company</h2>
            {siteConfig.navItems.map((item, key) => (
              <a
                key={key}
                className="hover:text-white transition"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col lg:items-start lg:justify-center gap-5">
            <div className="inline-flex items-start gap-4">
              <FiMapPin className="text-white text-xl mt-1" />
              <div className="flex flex-col space-y-1">
                <p className="text-md font-semibold text-white">
                  Sentra Car Garage
                </p>
                <p className="text-sm font-normal text-gray-100">
                  MT Haryono St No.Kav. 8 Lantai 9, Cawang, Jatinegara, East
                  Jakarta City, Jakarta 13340
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-4">
              <FiMail className="text-white text-sm mt-1" />
              <p className="text-md font-semibold text-white">
                example.email@agrinas.co.id
              </p>
            </div>
            <div className="inline-flex items-center gap-4">
              <FiPhone className="text-white text-sm mt-1" />
              <p className="text-md font-semibold text-white">
                +62 869948457879
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-t mt-6 border-slate-200">
        <p className="text-center">
          Copyright 2026 © <a href="https://prebuiltui.com">Dytama Studio</a>{" "}
          All Right Reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterLanding;
