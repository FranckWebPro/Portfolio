// import { NextResponse } from "next/server";
// import { auth } from "@/app/auth";

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

// export default auth((req) => {
//   const reqUrl = new URL(req.url);
//   if (!req.auth && reqUrl.pathname === "/dashboard") {
//     return NextResponse.redirect(
//       new URL(
//         `${process.env.BASE_PATH}/signin?callbackUrl=${encodeURIComponent(reqUrl?.pathname)}`,
//         req.url
//       )
//     );
//   }
//   return NextResponse.next();
// });

console.log("middleware");

export { default } from "next-auth/middleware";

export const config = { matcher: ["/"] };
