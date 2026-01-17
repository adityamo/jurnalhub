import Image from "next/image";

const Bento5 = () => {
  return (
    <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/assets/illustration/Illus-5.svg"
        alt="Diskusi Publikasi Jurnal"
        fill
        className="object-cover"
        priority
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-700/90 via-blue-600/70 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <h3 className="text-white text-xl lg:text-2xl font-semibold leading-snug">
          Mulai Diskusi Publikasi Jurnal Anda
        </h3>

        <button className="mt-4 inline-flex items-center gap-2 w-fit rounded-xl bg-white px-5 py-3 text-sm font-medium text-blue-700 hover:bg-blue-50 transition">
          Mulai Diskusi Sekarang
          <span className="text-lg">›</span>
        </button>
      </div>
    </div>
  );
};

export default Bento5;
