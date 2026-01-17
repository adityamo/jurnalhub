"use client";

import Image from "next/image";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20ingin%20konsultasi%20publikasi%20jurnal"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        rounded-full
        bg-white
        flex items-center justify-center
        shadow-lg
        hover:scale-105 hover:shadow-xl
        transition-all duration-300
      "
      aria-label="WhatsApp"
    >
      <Image
        src="assets/icon/social-media/whatsappcircle.svg"
        alt="WhatsApp"
        width={60}
        height={60}
        priority
      />
    </a>
  );
}
