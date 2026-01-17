import { defineRouting } from "next-intl/routing";

export const routing: any = defineRouting({
  locales: ["id", "en"],
  defaultLocale: "id",
  localePrefix: {
    mode: "always",
    prefixes: {
      en: "/en",
      id: "/id",
    },
  },
  pathnames: {
    "/": {
      en: "/",
      id: "/",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
export const { locales, defaultLocale, pathnames } = routing;
