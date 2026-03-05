import { NextResponse } from "next/server";

const ROLE_COOKIE = "zl-role";
const USER_COOKIE = "zl-user";
const EMAIL_COOKIE = "zl-email";

export async function GET(request: Request) {
  const response = NextResponse.redirect(new URL("/login", request.url));
  response.cookies.set(ROLE_COOKIE, "", { maxAge: 0, path: "/" });
  response.cookies.set(USER_COOKIE, "", { maxAge: 0, path: "/" });
  response.cookies.set(EMAIL_COOKIE, "", { maxAge: 0, path: "/" });
  return response;
}
