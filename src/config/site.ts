export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Jurnal Hub",
  description: "Jurnal Agency Platform",
  ogImage: "https://nextui.org/twitter-cards/nextui.jpeg",
  author: "aditya septama",
  email: "rfadityahalim18@gmail.com",
  whatsappNumber: "62897478837884",
  whatsappMessage:
    "Hai saya membutuhkan bantuan untuk jasa publish karya ilmiah",
  siteUrl: "https://nextui.org",
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
    { label: "Tentang Kami  ", href: "#aboutus", haveChild: false },
    { label: "Layanan", href: "#services", haveChild: false },
    { label: "Produk", href: "#product", haveChild: false },
    { label: "Testimoni", href: "#testimonials", haveChild: false },
    { label: "FAQ", href: "#faq", haveChild: false },
  ],
};
