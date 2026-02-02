import Container from "@/components/container";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";

const ToolsSection = () => {
  const t = useTranslations("Tools");
  return (
    <div className="relative mt-10" id="tools">
      <Container className="py-5">
        <div className="flex w-full justify-center">
          <div className="space-y-5 text-center max-w-lg mb-5 lg:mb-2">
            <div>
              <span className="px-4 py-2.5 bg-white border border-gray-200 rounded-full text-primary font-normal text-sm lg:text-md">
                {t("badge")}
              </span>
            </div>

            <h3 className="text-black font-semibold text-2xl lg:text-4xl leading-tight md:leading-snug lg:leading-normal gap-2">
              <span className="text-primary mx-2">{t("title.highlight")}</span>
              {t("title.line2")}
            </h3>
          </div>
        </div>
        {/* Stats */}
        <div className="bg-background">
          <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
            <div className="border border-line-2 rounded-xl">
              <div className="p-4 lg:p-8 bg-linear-to-bl from-layer via-background to-background-1 rounded-xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                  {/* Stats */}
                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:h-20 before:border-s before:border-line-2 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <div className="flex justify-center items-center -space-x-5">
                      <Image
                        src="/assets/tools/grammarly.png"
                        alt="grammaryly"
                        width={800}
                        height={500}
                        priority
                        className="w-30 lg:w-100 lg:h-auto h-auto"
                      />
                    </div>
                  </div>
                  {/* End Stats */}
                  {/* Stats */}
                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:h-20 before:border-s before:border-line-2 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <div className="flex justify-center items-center -space-x-5">
                      <Image
                        src="/assets/tools/turnity.png"
                        alt="grammaryly"
                        width={800}
                        height={500}
                        priority
                        className="w-30 lg:w-100 lg:h-auto h-auto"
                      />
                    </div>
                  </div>
                  {/* End Stats */}
                  {/* Stats */}
                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:h-20 before:border-s before:border-line-2 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <div className="flex justify-center items-center -space-x-5">
                      <Image
                        src="/assets/tools/mendeley.png"
                        alt="grammaryly"
                        width={800}
                        height={500}
                        priority
                        className="w-30 lg:w-100 lg:h-auto h-auto"
                      />
                    </div>
                  </div>
                  {/* End Stats */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Stats */}
      </Container>
    </div>
  );
};

export default ToolsSection;
