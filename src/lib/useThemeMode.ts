"use client";

import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";

const STORAGE_KEY = "zl-theme";
const THEME_EVENT = "zl-theme-change";

const getPreferredTheme = (): ThemeMode => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const useThemeMode = () => {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const update = () => setTheme(getPreferredTheme());
    update();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        update();
      }
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        update();
      }
    };

    const handleThemeEvent = () => {
      update();
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    window.addEventListener("storage", handleStorage);
    window.addEventListener(THEME_EVENT, handleThemeEvent);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(THEME_EVENT, handleThemeEvent);
    };
  }, []);

  return theme;
};
