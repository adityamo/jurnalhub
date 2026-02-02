"use client";

import React from "react";
import Container from "@/components/container";
import { cn } from "@/utils/utils";
import { useTranslations } from "next-intl";
import {
  FaComments,
  FaFileAlt,
  FaSearch,
  FaClipboardCheck,
  FaEdit,
  FaBolt,
  FaCheckCircle,
} from "react-icons/fa";
import { handleToContact } from "@/helpers/globalHelper";

type BenefitItem = {
  // title: string;
  // description: string;
  key: string;
  icon: React.ElementType;
  color: string;
};

const benefits: BenefitItem[] = [
  { key: "consultation", icon: FaComments, color: "text-amber-500" },
  { key: "editing", icon: FaFileAlt, color: "text-cyan-500" },
  { key: "turnitin", icon: FaSearch, color: "text-blue-500" },
  { key: "review", icon: FaClipboardCheck, color: "text-emerald-500" },
  { key: "revision", icon: FaEdit, color: "text-rose-500" },
  { key: "loa", icon: FaBolt, color: "text-yellow-300" },
];

// const benefits: BenefitItem[] = [
//   {
//     title: "Gratis Konsultasi",
//     description:
//       "Konsultasi profesional tanpa biaya untuk membantu menyelesaikan kendala publikasi Anda.",
//     key: "consultation",
//     icon: FaComments,
//     color: "text-amber-500",
//   },
//   {
//     title: "Gratis Editing Template",
//     description:
//       "Kami membantu menyempurnakan template karya ilmiah sesuai pedoman jurnal.",
//     icon: FaFileAlt,
//     color: "text-cyan-500",
//   },
//   {
//     title: "Gratis Cek Turnitin",
//     description:
//       "Pastikan orisinalitas tulisan Anda dengan layanan cek Turnitin gratis.",
//     icon: FaSearch,
//     color: "text-blue-500",
//   },
//   {
//     title: "Gratis Review Artikel",
//     description:
//       "Ulasan mendalam dan saran perbaikan untuk meningkatkan kualitas artikel.",
//     icon: FaClipboardCheck,
//     color: "text-emerald-500",
//   },
//   {
//     title: "Gratis Revisi Minor",
//     description:
//       "Revisi minor tanpa biaya tambahan hingga artikel siap terbit.",
//     icon: FaEdit,
//     color: "text-rose-500",
//   },
//   {
//     title: "LOA Fast Track",
//     description:
//       "Proses LOA lebih cepat untuk mendukung kebutuhan akademik Anda.",
//     icon: FaBolt,
//     color: "text-yellow-300",
//   },
// ];

const BenefitSection = () => {
  const t = useTranslations("Benefits");

  return (
    <section className="relative mt-10" id="faq">
      <Container className="py-10">
        {/* Header */}
        <div className="flex w-full flex-col justify-start lg:flex-row lg:justify-between lg:items-end">
          <div className="max-w-2xl">
            <span className="px-4 py-2.5 bg-white border rounded-full text-primary text-sm">
              {t("badge")}
            </span>

            <h2 className="mt-4 text-2xl lg:text-4xl font-semibold">
              <span className="text-primary mx-1">{t("title.highlight")}</span>
              {t("title.line2")}
            </h2>
          </div>

          <div className="lg:max-w-md">
            <p className="text-sm text-gray-500">{t("subtitle")}</p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="w-full px-4 py-10 sm:px-6 lg:px-0 lg:py-14 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
            {benefits.map((item, index) => (
              <Feature
                key={item.key}
                index={index}
                title={t(`items.${item.key}.title`)}
                description={t(`items.${item.key}.description`)}
                icon={item.icon}
                color={item.color}
              />
            ))}
          </div>

          {/* Banner CTA */}
          <section className="flex items-center justify-center py-20">
            <div className="relative w-full rounded-2xl border border-indigo-500 overflow-hidden">
              {/* Diagonal Grid Background */}

              <div
                className="absolute inset-0 opacity-40 pointer-events-none z-10"
                style={{
                  backgroundImage: `
          linear-gradient(45deg, transparent 49%, rgba(255,255,255,0.18) 49%, rgba(255,255,255,0.18) 51%, transparent 51%),
          linear-gradient(-45deg, transparent 49%, rgba(255,255,255,0.18) 49%, rgba(255,255,255,0.18) 51%, transparent 51%)
        `,
                  backgroundSize: "36px 36px",
                }}
              />

              {/* Gradient Base */}
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-600 to-blue-900" />

              {/* Content */}
              <div className="relative z-10 px-6 py-16 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-md rounded-full px-6 py-2 mb-6">
                  <FaCheckCircle className="text-emerald-400" />
                  <span className="text-slate-200">{t("cta.badge")}</span>
                </div>

                <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8 max-w-5xl leading-tight">
                  {t("cta.title")}
                </h1>

                <button
                  onClick={handleToContact}
                  className="bg-white text-gray-900 rounded-full px-6 py-3.5 text-sm flex items-center gap-2"
                >
                  {t("cta.button")}
                </button>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

type FeatureProps = {
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
  color: string;
};

const Feature = ({
  title,
  description,
  icon: Icon,
  index,
  color,
}: FeatureProps) => {
  const isFirstColumn = index % 3 === 0;
  const isFirstRow = index < 3;

  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature",
        "lg:border-r dark:border-neutral-800",
        isFirstColumn && "lg:border-l dark:border-neutral-800",
        isFirstRow && "lg:border-b dark:border-neutral-800"
      )}
    >
      {/* Hover Gradient */}
      <div
        className={cn(
          "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full pointer-events-none",
          isFirstRow
            ? "bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent"
            : "bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent"
        )}
      />

      {/* Icon */}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        <Icon className={`size-6 ${color}`} />
      </div>

      {/* Title */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full
          bg-neutral-300 dark:bg-neutral-700
          group-hover/feature:h-8 group-hover/feature:bg-blue-500
          transition-all duration-200 origin-center"
        />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default BenefitSection;
