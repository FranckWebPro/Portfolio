import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { supabase, supabaseResponse } = await updateSession(request);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && !request.url.includes("/api/auth/callback") && request.url.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/signin", request.url));
  } else if (user && request.url.includes("/signin")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (process.env.NODE_ENV === "production") {
    supabaseResponse.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  }

  supabaseResponse.headers.set("x-current-path", request.nextUrl.pathname);
  supabaseResponse.headers.set("X-Frame-Options", "DENY");
  supabaseResponse.headers.set("X-Content-Type-Options", "nosniff");

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
