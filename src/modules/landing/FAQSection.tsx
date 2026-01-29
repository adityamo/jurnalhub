"use client";

import Container from "@/components/container";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations("FAQ");

  const items = t.raw("items") as FAQItem[];

  return (
    <section className="relative bg-gray-50" id="faq">
      <Container className="py-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="max-w-xl">
            <span className="px-4 py-2.5 bg-white border rounded-full text-primary text-sm">
              {t("badge")}
            </span>

            <h2 className="mt-4 text-2xl lg:text-4xl font-semibold">
              {t("title.line1")}
              <span className="text-primary mx-1">{t("title.highlight")}</span>
              {t("title.line2")}
            </h2>

            <div className="mt-10 space-y-2">
              <p className="text-sm text-gray-500">{t("contactLabel")}</p>
              <p className="text-xl font-semibold text-primary">
                {siteConfig.email}
              </p>
            </div>
          </div>

          <div className="">
            {items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-b py-4">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center text-left font-semibold"
                  >
                    {item.question}
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-2 text-gray-600"
                      >
                        {item.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
