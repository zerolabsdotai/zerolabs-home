"use client";

import Image from "next/image";
import Link from "next/link";

import { getThemeAssets } from "@/lib/themeAssets";
import { useThemeMode } from "@/lib/useThemeMode";

export default function MarketingNavLogo() {
  const theme = useThemeMode();
  const assets = getThemeAssets(theme);

  return (
    <Link
      href="/"
      className="logo-wiggle glow-hover inline-flex items-center"
      aria-label="Zero Labs home"
    >
      <Image
        src={assets.logo}
        alt="Zero Labs robot logo"
        width={40}
        height={40}
        className="logo-wiggle-icon h-8 w-auto sm:h-10"
        priority
      />
    </Link>
  );
}
