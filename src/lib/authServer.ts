type SupabaseConfig = {
  url: string;
  anonKey: string;
};

type SupabaseAuthResponse = {
  access_token: string;
  refresh_token: string;
  user: {
    id: string;
    email?: string;
  };
};

const getSupabaseConfig = (): SupabaseConfig | null => {
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "";
  const anonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    "";

  if (!url || !anonKey) {
    return null;
  }

  return { url, anonKey };
};

const handleJsonResponse = async (response: Response) => {
  const contentType = response.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await response.json()
    : null;
  return { data, ok: response.ok, status: response.status };
};

export const signInWithPassword = async (
  email: string,
  password: string
): Promise<{ data?: SupabaseAuthResponse; error?: string }> => {
  const config = getSupabaseConfig();
  if (!config) {
    return { error: "missing_config" };
  }

  const response = await fetch(
    `${config.url}/auth/v1/token?grant_type=password`,
    {
      method: "POST",
      headers: {
        apikey: config.anonKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  const { data, ok } = await handleJsonResponse(response);
  if (!ok || !data) {
    const message =
      data?.error_description || data?.message || "invalid_credentials";
    return { error: message };
  }

  return { data };
};

export const signUp = async (
  email: string,
  password: string,
  name?: string
): Promise<{ data?: SupabaseAuthResponse; error?: string }> => {
  const config = getSupabaseConfig();
  if (!config) {
    return { error: "missing_config" };
  }

  const response = await fetch(`${config.url}/auth/v1/signup`, {
    method: "POST",
    headers: {
      apikey: config.anonKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      options: {
        data: name ? { name } : undefined,
      },
    }),
  });

  const { data, ok } = await handleJsonResponse(response);
  if (!ok || !data) {
    const message =
      data?.error_description || data?.message || "signup_failed";
    return { error: message };
  }

  return { data };
};

export const getUserFromAccessToken = async (
  accessToken: string
): Promise<{ user?: { id: string; email?: string }; error?: string }> => {
  const config = getSupabaseConfig();
  if (!config) {
    return { error: "missing_config" };
  }

  if (!accessToken) {
    return { error: "missing_access_token" };
  }

  const response = await fetch(`${config.url}/auth/v1/user`, {
    headers: {
      apikey: config.anonKey,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const { data, ok } = await handleJsonResponse(response);
  if (!ok || !data) {
    return { error: "user_lookup_failed" };
  }

  return { user: { id: data.id, email: data.email } };
};

export const signOut = async (
  accessToken?: string,
  refreshToken?: string
): Promise<{ error?: string }> => {
  const config = getSupabaseConfig();
  if (!config) {
    return { error: "missing_config" };
  }

  if (!accessToken) {
    return { error: "missing_access_token" };
  }

  const response = await fetch(`${config.url}/auth/v1/logout`, {
    method: "POST",
    headers: {
      apikey: config.anonKey,
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    return { error: "logout_failed" };
  }

  return {};
};

export const fetchProfileRole = async (
  userId: string,
  accessToken: string
): Promise<{ role?: string; error?: string }> => {
  const config = getSupabaseConfig();
  if (!config) {
    return { error: "missing_config" };
  }

  const response = await fetch(
    `${config.url}/rest/v1/profiles?select=role&id=eq.${userId}&limit=1`,
    {
      headers: {
        apikey: config.anonKey,
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const { data, ok } = await handleJsonResponse(response);
  if (!ok || !Array.isArray(data)) {
    return { error: "role_lookup_failed" };
  }

  return { role: data[0]?.role };
};

export const upsertProfileRole = async (
  userId: string,
  email: string,
  role: string,
  name?: string
): Promise<{ error?: string }> => {
  const config = getSupabaseConfig();
  if (!config) {
    return { error: "missing_config" };
  }

  const response = await fetch(`${config.url}/rest/v1/profiles`, {
    method: "POST",
    headers: {
      apikey: config.anonKey,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates",
    },
    body: JSON.stringify({
      id: userId,
      email,
      role,
      name: name || null,
    }),
  });

  if (!response.ok) {
    return { error: "profile_upsert_failed" };
  }

  return {};
};
