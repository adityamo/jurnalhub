import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Bento2 = () => {
  const t = useTranslations("Services.bento2");
  return (
    <div className="relative h-full rounded-2xl bg-gray-50 flex flex-col overflow-hidden border border-gray-200 hover:-translate-y-1.5 transition duration-300 hover:shadow-lg">
      <div className="px-4 py-5 lg:px-6 lg:py-6">
        <h3 className="text-xl lg:text-2xl font-semibold text-slate-800">
          {t("title")}
        </h3>

        <p className="mt-2 text-gray-500 text-sm">{t("subtitle")}</p>
      </div>

      <div className="mt-auto px-4">
        <Image
          src="/assets/illustration/illus-2.webp"
          alt="Scopus Preview"
          width={220}
          height={520}
          className="mx-auto max-h-[260px] w-auto"
        />
      </div>
    </div>
  );
};

export default Bento2;
