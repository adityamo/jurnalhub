/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { handleToContact } from "@/helpers/globalHelper";
import { FiArrowRight } from "react-icons/fi";
import { useTranslations } from "next-intl";

const CTASection = () => {
  const t = useTranslations("CTA");

  return (
    <section className="py-10 lg:py-20" id="cta">
      <div className="relative max-w-6xl py-16 md:pl-10 md:w-full mx-2 md:mx-auto bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl p-10 text-white overflow-hidden">
        <div className="relative z-10 flex flex-col items-start justify-center text-left max-w-2xl">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <Image
                className="size-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&w=300&h=300&q=80"
                alt="Avatar"
                width={44}
                height={44}
              />
              <Image
                className="size-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?auto=format&w=300&h=300&q=80"
                alt="Avatar"
                width={44}
                height={44}
              />
              <Image
                className="size-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?auto=format&w=300&h=300&q=80"
                alt="Avatar"
                width={44}
                height={44}
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-1 pt-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src="/assets/icon/starticon.svg"
                    alt="star-icon"
                    width={50}
                    height={550}
                    className="relative z-10 w-4"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-100">{t("socialProof")}</p>
            </div>
          </div>

          <h3 className="text-4xl max-w-2xl md:text-[46px] md:leading-[60px] font-semibold mt-5 bg-gradient-to-r from-white to-gray-50 text-transparent bg-clip-text">
            {t("title")}
          </h3>

          <button
            onClick={handleToContact}
            className="pr-1 pl-3 py-1 inline-flex items-center gap-2 text-black bg-white hover:bg-blue-100 hover:text-primary transition-all rounded-full text-sm mt-6"
          >
            {t("button")}
            <span className="rounded-full bg-primary text-white h-8 w-8 flex items-center justify-center">
              <FiArrowRight />
            </span>
          </button>
        </div>

        <div className="absolute right-0 bottom-0 hidden lg:block w-[460px] h-[560px] pointer-events-none">
          <Image
            src="/assets/illustration/cta-1.svg"
            alt="CTA Illustration"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>

        <div className="absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full bg-white/10 blur-3xl" />
      </div>
    </section>
  );
};

export default CTASection;
