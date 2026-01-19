import { handleToContact } from "@/helpers/globalHelper";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Bento5 = () => {
  const t = useTranslations("Services.bento5");
  return (
    <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden hover:-translate-y-1.5 transition duration-300 hover:shadow-lg">
      <Image
        src="/assets/illustration/illus-5.webp"
        alt="Diskusi Publikasi Jurnal"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-blue-700/90 via-blue-600/70 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <h3 className="text-white text-xl lg:text-2xl font-semibold leading-snug">
          {t("title")}
        </h3>

        <button
          onClick={handleToContact}
          className="mt-4 inline-flex items-center gap-2 w-fit rounded-xl bg-white px-5 py-3 text-sm font-medium text-blue-700 hover:bg-blue-50 transition"
        >
          {t("btn")}
          <span className="text-lg">›</span>
        </button>
      </div>
    </div>
  );
};

export default Bento5;
