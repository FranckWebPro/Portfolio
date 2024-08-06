import { NextRequest, NextResponse } from "next/server";
import { GetTokenParams, getToken } from "next-auth/jwt";

export default async function middleware(req: NextRequest) {
  const secret = process.env.AUTH_SECRET as string;

  //"salt" 3rd argument bypassed as it block from accessing dashboard while logged in
  const token = await getToken({ req, secret }  as unknown as GetTokenParams<false>);

  console.log(token);
  
  if (!token && req.nextUrl.pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/api/auth/signin", req.nextUrl.origin));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
