import React from "react";
import LandingModule from "@/modules/landing/module";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const tHero = await getTranslations({
    locale: params.locale,
    namespace: "Hero",
  });

  const title = `${tHero("title.line1")} ${tHero("title.highlight")}`;
  const description = tHero("description");

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      type: "website",
      locale: params.locale === "id" ? "id_ID" : "en_US",
      siteName: "Nama Brand Kamu",
      url: "https://domainkamu.com",
      images: [
        {
          url: "https://domainkamu.com/og/home.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://domainkamu.com/og/home.jpg"],
    },

    alternates: {
      canonical: "https://domainkamu.com",
      languages: {
        id: "https://domainkamu.com/id",
        en: "https://domainkamu.com/en",
      },
    },

    keywords: ["Jasa Publikasi Jurnal, Jasa publis scopus, Jasa Publish sinta"],
  };
}

export default async function LandingPage() {
  return <LandingModule />;
}
