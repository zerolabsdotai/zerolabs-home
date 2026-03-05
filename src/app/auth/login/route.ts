import { NextResponse } from "next/server";

import {
  fetchProfileRole,
  signInWithPassword,
} from "@/lib/authServer";

const ADMIN_ROLES = new Set(["admin", "operator"]);
const USER_ROLES = new Set(["user", "customer"]);

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
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");
  const context = String(formData.get("auth_context") || "user");
  const redirectTo = safeRedirect(
    formData.get("redirectTo")?.toString() || null,
    ""
  );

  if (!email || !password) {
    return NextResponse.redirect(
      new URL(
        context === "admin" ? "/admin/login?error=invalid_credentials" : "/login?error=invalid_credentials",
        request.url
      )
    );
  }

  const { data, error } = await signInWithPassword(email, password);
  if (!data || error) {
    const errorParam = error === "missing_config" ? "missing_config" : "invalid_credentials";
    return NextResponse.redirect(
      new URL(
        context === "admin"
          ? `/admin/login?error=${errorParam}`
          : `/login?error=${errorParam}`,
        request.url
      )
    );
  }

  const { role } = await fetchProfileRole(data.user.id, data.access_token);
  const resolvedRole = role || "user";
  const isAdmin = ADMIN_ROLES.has(resolvedRole);

  if (context === "admin" && !isAdmin) {
    const response = NextResponse.redirect(
      new URL("/admin/login?error=unauthorized", request.url)
    );
    response.cookies.set(ROLE_COOKIE, "", { maxAge: 0, path: "/" });
    response.cookies.set(USER_COOKIE, "", { maxAge: 0, path: "/" });
    response.cookies.set(EMAIL_COOKIE, "", { maxAge: 0, path: "/" });
    return response;
  }

  const target = redirectTo
    ? redirectTo
    : isAdmin
      ? "/admin"
      : USER_ROLES.has(resolvedRole)
        ? "/app"
        : "/app";

  const response = NextResponse.redirect(new URL(target, request.url));
  response.cookies.set(ROLE_COOKIE, resolvedRole, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
  });
  response.cookies.set(USER_COOKIE, data.user.id, {
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
