import React from "react";
import LandingModule from "@/modules/landing/module";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Publikasi Jurnal SINTA & Scopus ",
  description:
    "Pendampingan publikasi jurnal nasional & internasional (SINTA, Scopus, DOAJ). Mulai dari pemilihan jurnal, editing, hingga revisi reviewer.",
  keywords: [
    "jasa publikasi jurnal",
    "jurnal sinta",
    "jurnal scopus",
    "pendampingan jurnal",
  ],
  openGraph: {
    title: "Publikasi Jurnal Tanpa Ribet",
    description:
      "Pendampingan publikasi jurnal nasional & internasional terpercaya.",
    url: "https://domainkamu.com",
    siteName: "Nama Brand",
    images: [
      {
        url: "https://domainkamu.com/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default async function LandingPage() {
  return <LandingModule />;
}
