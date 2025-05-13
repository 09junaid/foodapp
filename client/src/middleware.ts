import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  const protectedRoutes = ["/order", "/tablebooking"];
  const publicRoutesForGuestsOnly = ["/login", "/signup"];

  const { pathname } = req.nextUrl;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const isGuestOnly = publicRoutesForGuestsOnly.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isGuestOnly && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/order/:path*", "/tablebooking/:path*", "/login", "/signup"],
};
