import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Bento4 = () => {
  const t = useTranslations("Services.bento4");

  return (
    <div className="relative h-full rounded-2xl bg-gray-50 flex flex-col overflow-hidden border border-gray-200 hover:-translate-y-1.5 transition duration-300 hover:shadow-lg">
      <div className="px-4 py-5 lg:px-6 lg:py-6">
        <h3 className="text-xl lg:text-2xl font-semibold text-slate-800">
          {t("title")}
        </h3>

        <p className="mt-2 text-gray-500 text-sm">{t("subtitle")}</p>
      </div>
      <div className="relative w-full min-h-[200px] lg:flex-1">
        <div className="absolute inset-x-0 bottom-[10px] h-full px-4">
          <div className="relative w-full h-full overflow-hidden rounded-t-2xl">
            <Image
              src="/assets/illustration/illus-4.webp"
              alt="Scopus Preview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento4;
