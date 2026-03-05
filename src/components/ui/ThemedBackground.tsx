"use client";

import { getThemeAssets } from "@/lib/themeAssets";
import { useThemeMode } from "@/lib/useThemeMode";

export default function ThemedBackground() {
  const theme = useThemeMode();
  const assets = getThemeAssets(theme);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-20 bg-cover bg-center"
      style={{ backgroundImage: `url('${assets.bg}')` }}
      aria-hidden="true"
    />
  );
}
