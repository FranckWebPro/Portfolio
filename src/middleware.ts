import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

const defaultLocale = "fr";
const otherLocales = ["en"];

export async function middleware(request: NextRequest) {
  const { supabase, supabaseResponse } = await updateSession(request);

  const { pathname } = request.nextUrl;
  const otherLocalePrefix = `/${otherLocales[0]}`; // "/en"

  const isOtherLocalePath = pathname.startsWith(`${otherLocalePrefix}/`) || pathname === otherLocalePrefix;

  let currentLocale = defaultLocale;

  if (isOtherLocalePath) {
    currentLocale = otherLocales[0];
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const dashboardPath = currentLocale === defaultLocale ? "/dashboard" : `/${currentLocale}/dashboard`;
  const signinPath = currentLocale === defaultLocale ? "/signin" : `/${currentLocale}/signin`;
  const requestBaseUrl = request.nextUrl.origin;

  const isAccessingDashboard = pathname === dashboardPath || pathname.startsWith(dashboardPath + "/");
  if (!user && isAccessingDashboard && !request.url.includes("/api/auth/callback")) {
    return NextResponse.redirect(new URL(signinPath, requestBaseUrl));
  }

  const isAccessingSignin = pathname === signinPath;
  if (user && isAccessingSignin) {
    return NextResponse.redirect(new URL(dashboardPath, requestBaseUrl));
  }

  if (process.env.NODE_ENV === "production") {
    supabaseResponse.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  }
  supabaseResponse.headers.set("x-current-path", pathname);
  supabaseResponse.headers.set("X-Frame-Options", "DENY");
  supabaseResponse.headers.set("X-Content-Type-Options", "nosniff");

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - specific file extensions
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
