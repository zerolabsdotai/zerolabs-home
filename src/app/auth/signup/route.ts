import { NextResponse } from "next/server";

import { signUp, upsertProfileRole } from "@/lib/authServer";

const ROLE_COOKIE = "zl-role";
const USER_COOKIE = "zl-user";
const EMAIL_COOKIE = "zl-email";

const safeRedirect = (value: string | null, fallback: string) => {
  if (!value) return fallback;
  if (!value.startsWith("/") || value.startsWith("//")) {
    return fallback;
  }
  return value;
};

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");
  const redirectTo = safeRedirect(
    formData.get("redirectTo")?.toString() || null,
    "/app"
  );

  if (!email || !password) {
    return NextResponse.redirect(
      new URL("/signup?error=signup_failed", request.url)
    );
  }

  const { data, error } = await signUp(email, password, name || undefined);
  if (!data || error) {
    const errorParam = error === "missing_config" ? "missing_config" : "signup_failed";
    return NextResponse.redirect(
      new URL(`/signup?error=${errorParam}`, request.url)
    );
  }

  const userId = data.user?.id;
  if (userId) {
    await upsertProfileRole(userId, email, "user", name || undefined);
  }

  const accessToken =
    (data as { session?: { access_token?: string } }).session?.access_token ??
    (data as { access_token?: string }).access_token;

  if (!accessToken || !userId) {
    return NextResponse.redirect(new URL("/login?error=check_email", request.url));
  }

  const response = NextResponse.redirect(new URL(redirectTo, request.url));
  response.cookies.set(ROLE_COOKIE, "user", {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
  });
  response.cookies.set(USER_COOKIE, userId, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
  });
  response.cookies.set(EMAIL_COOKIE, email, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
  });

  return response;
}
