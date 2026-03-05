import { NextResponse, type NextRequest } from "next/server";

const ADMIN_ROLES = new Set(["admin", "operator"]);
const USER_ROLES = new Set(["user", "customer"]);

const PUBLIC_PATHS = [
  "/login",
  "/signup",
  "/admin/login",
  "/logout",
  "/auth",
];

const isPublicPath = (pathname: string) =>
  PUBLIC_PATHS.some((path) =>
    path === "/auth" ? pathname.startsWith(path) : pathname === path
  );

const isStaticAsset = (pathname: string) =>
  pathname.startsWith("/_next") ||
  pathname.startsWith("/favicon") ||
  pathname.startsWith("/robots.txt") ||
  pathname.startsWith("/sitemap.xml");

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.length > 1 && pathname.endsWith("/")) {
    const normalized = request.nextUrl.clone();
    normalized.pathname = pathname.replace(/\/+$/, "");
    return NextResponse.redirect(normalized);
  }

  if (isStaticAsset(pathname) || isPublicPath(pathname)) {
    return NextResponse.next();
  }

  const role = request.cookies.get("zl-role")?.value;
  const isAdmin = role ? ADMIN_ROLES.has(role) : false;

  if (pathname.startsWith("/admin")) {
    if (!isAdmin) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = "/admin/login";
      redirectUrl.search = "?error=unauthorized";
      return NextResponse.redirect(redirectUrl);
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/app")) {
    if (!role || !USER_ROLES.has(role)) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = "/login";
      redirectUrl.search = "?error=unauthorized";
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
