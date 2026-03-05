import { NextResponse } from "next/server";

import { signOut } from "@/lib/authServer";

const ROLE_COOKIE = "zl-role";
const USER_COOKIE = "zl-user";
const EMAIL_COOKIE = "zl-email";
const ACCESS_COOKIE = "zl-access";
const REFRESH_COOKIE = "zl-refresh";

export async function GET(request: Request) {
  const cookies = request.headers.get("cookie") || "";
  const accessMatch = cookies.match(/(?:^|; )zl-access=([^;]+)/);
  const refreshMatch = cookies.match(/(?:^|; )zl-refresh=([^;]+)/);
  const accessToken = accessMatch ? decodeURIComponent(accessMatch[1]) : undefined;
  const refreshToken = refreshMatch ? decodeURIComponent(refreshMatch[1]) : undefined;
  if (accessToken) {
    await signOut(accessToken, refreshToken);
  }

  const response = NextResponse.redirect(new URL("/login", request.url));
  response.cookies.set(ROLE_COOKIE, "", { maxAge: 0, path: "/" });
  response.cookies.set(USER_COOKIE, "", { maxAge: 0, path: "/" });
  response.cookies.set(EMAIL_COOKIE, "", { maxAge: 0, path: "/" });
  response.cookies.set(ACCESS_COOKIE, "", { maxAge: 0, path: "/" });
  response.cookies.set(REFRESH_COOKIE, "", { maxAge: 0, path: "/" });
  return response;
}
