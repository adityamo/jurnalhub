export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Cakrawala Lembaga Publikasi",
  description:
    "Lembaga Publikasi Cakrawala Publisher jurnal nasional dan jurnal internasional yang terverifikasi dengan shita dan ocupus",
  ogImage: "https://nextui.org/twitter-cards/nextui.jpeg",
  author: "cakrawala",
  email: "aasisten4@gmail.com",
  whatsappNumber: "081559546191",
  whatsappMessage:
    "Halo kak, saya ingin berkonsultasi mengenai publikasi jurnal, mohon dibantu",
  siteUrl: "https://nextui.org",
  address: "Jl. Perum indah Mulyorejo Mandiri Kota Malang Blok E Nomor 13",
  imgUrl: "/assets/logo/cakrawala-full.png",
  imgUrl_white: "/assets/logo/cakrawala-white.png",
  creator: "@adityamo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextui.org",
    siteName: "NextUI",
    description: "Beautiful, fast and modern React UI Library",
    images: [
      {
        url: "https://nextui.org/twitter-cards/nextui.jpeg",
        width: 1200,
        height: 630,
        alt: "NextUI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextUI - Beautiful, fast and modern React UI Library",
    description:
      "Make beautiful websites regardless of your design experience.",
    image: "https://nextui.org/twitter-cards/nextui.jpeg",
    creator: "@getnextui",
  },
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    portfolio: "https://jrgarciadev.com",
  },
  navItems: [
    { label: "Home", href: "/", haveChild: false },
    { label: "AboutUs", href: "#aboutus", haveChild: false },
    { label: "Services", href: "#services", haveChild: false },
    { label: "Product", href: "#product", haveChild: false },
    { label: "Testimonials", href: "#testimonials", haveChild: false },
    { label: "FAQ", href: "#faq", haveChild: false },
  ],
};
