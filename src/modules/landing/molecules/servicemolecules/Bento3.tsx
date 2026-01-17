import React from "react";
import Image from "next/image";

const Bento3 = () => {
  return (
    <div className="relative h-full rounded-2xl bg-gray-50 flex flex-col overflow-hidden border border-gray-200">
      <div className="px-4 py-5 lg:px-6 lg:py-6">
        <h3 className="text-xl lg:text-2xl font-semibold text-slate-800">
          Editing, Proofreading, dan Pengecekan Kemiripan
        </h3>

        <p className="mt-2 text-gray-500 text-sm">
          Pendampingan penyuntingan bahasa akademik, perapihan struktur artikel,
          serta pengecekan tingkat kemiripan sesuai standar jurnal.
        </p>
      </div>
      <div className="relative w-full min-h-[200px] lg:flex-1">
        <div className="absolute inset-x-0 bottom-[-30px] h-full px-4">
          <div className="relative w-full h-full overflow-hidden rounded-t-2xl">
            <Image
              src="/assets/illustration/Illus-3.svg"
              alt="Scopus Preview"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento3;
