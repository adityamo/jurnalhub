import React from "react";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { useTranslations } from "next-intl";

const Bento1 = () => {
  const t = useTranslations("Services.bento1");
  return (
    <div
      className=" relative h-full overflow-hidden rounded-2xl
        bg-gray-50 border border-gray-200
        transform-gpu will-change-transform
        transition-shadow duration-300 ease-out
        hover:-translate-y-1.5 hover:shadow-lg"
    >
      <div className="grid grid-cols-1  gap-8 px-3 py-4 lg:px-5 lg:py-4">
        <div className="z-10 lg:max-w-md">
          <h2 className="text-xl lg:text-2xl font-semibold text-slate-800">
            {t("title")}
          </h2>

          <p className="mt-4 text-gray-500 text-sm"> {t("subtitle")}</p>

          <ul className="mt-6 space-y-3 text-sm text-gray-500">
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <FiCheck />
              </span>
              Syarat Kelulusan
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <FiCheck />
              </span>
              BKD & Kenaikan Jabatan
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <FiCheck />
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
          src="/assets/illustration/illus-1.webp"
          alt="Hero Person"
          width={220}
          height={520}
          className="w-full select-none"
        />
      </div>
    </div>
  );
};

export default Bento1;
