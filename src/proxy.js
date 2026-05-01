import { NextResponse } from "next/server";

const authPaths = ["/login", "/register"];

const hasAuthSession = (request) => {
  return Boolean(
    request.cookies.get("better-auth.session_token") ||
    request.cookies.get("__Secure-better-auth.session_token")
  );
};

export const proxy = (request) => {
  const { pathname, search } = request.nextUrl;
  const isLoggedIn = hasAuthSession(request);

  // Listing stays public per assignment ("All Courses" without login).
  // Only dynamic detail routes `/courses/[id]` require authentication.
  const isCourseDetailPath = /^\/courses\/[^/]+$/.test(pathname);
  const isProtectedPath =
    pathname.startsWith("/my-profile") || isCourseDetailPath;

  const isAuthPath = authPaths.some((path) => pathname.startsWith(path));

  // This protects private routes for unauthenticated users.
  if (isProtectedPath && !isLoggedIn) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", `${pathname}${search}`);
    return NextResponse.redirect(loginUrl);
  }

  // This prevents logged-in users from visiting login/register page.
  if (isAuthPath && isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/courses",
    "/courses/:path*",
    "/my-profile/:path*",
    "/login",
    "/register",
  ],
};
