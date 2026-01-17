import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import createIntlMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "@/config/i18n";

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
});

export default withAuth(
  async function middleware(req) {
    const { pathname } = req.nextUrl;

    if (
      pathname.startsWith("/admin") ||
      pathname.startsWith("/auth") ||
      pathname.startsWith("/api")
    ) {
      return NextResponse.next();
    }

    const intlResponse = intlMiddleware(req);
    if (intlResponse) return intlResponse;

    const token = await getToken({ req });

    if (pathname.startsWith("/admin") && !token) {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
