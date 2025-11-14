import { NextResponse } from "next/server";

export function middleware(req) {
  const adminAuth = req.cookies.get("admin-auth")?.value;

  // If NOT logged in and trying to open /admin/dashboard → send to /admin
  if (!adminAuth && req.nextUrl.pathname.startsWith("/admin/dashboard")) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
