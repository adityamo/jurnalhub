import Container from "@/components/container";
import React, { useState } from "react";
import faqData from "@/data/fqa.json";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const handleToggle = (question: string) => {
    setOpenQuestion((prev) => (prev === question ? null : question));
  };
  return (
    <section className="relative justify-center mt-20" id="faq">
      <Container>
        <div className="relative z-10 grid md:grid-cols-5 gap-10 mx-auto">
          <div className="md:col-span-2">
            <div className="space-y-5 text-start max-w-lg mb-5 lg:mb-8">
              <div>
                <span className="px-4 py-2.5 bg-white border border-gray-200 rounded-full text-primary font-normal text-sm lg:text-md">
                  FAQ
                </span>
              </div>

              <h2 className="text-black font-semibold text-2xl lg:text-4xl leading-tight md:leading-snug lg:leading-normal">
                Pertanyaan dan
                <span className="text-primary mx-1">Jawaban</span>
                yang Sering Ditanyakan
              </h2>
            </div>
            <div className="mt-10">
              <div className="space-y-2">
                <p className="text-sm font-normal text-gray-500">
                  Ada Pertanyaan Lain?
                </p>
                <h1 className="text-xl lg:text-3xl font-semibold text-primary">
                  hello.cs@sentra.com
                </h1>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
              {faqData.map((item, key: React.Key) => {
                const isOpen = openQuestion === item.question;
                return (
                  <div
                    className="hs-accordion pt-6 pb-3"
                    id={item.question}
                    key={key}
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-primary dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                      onClick={() => {
                        handleToggle(item.question);
                      }}
                    >
                      {item.question}
                      {isOpen ? (
                        <FiChevronUp className="size-5 shrink-0 text-gray-600 dark:text-neutral-400" />
                      ) : (
                        <FiChevronDown className="size-5 shrink-0 text-gray-600 dark:text-neutral-400" />
                      )}
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pt-2 text-gray-600 dark:text-neutral-400">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
