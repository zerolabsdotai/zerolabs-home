"use client";

import { useEffect } from "react";

import { useThemeMode } from "@/lib/useThemeMode";

const STORAGE_KEY = "zl-theme";
const THEME_EVENT = "zl-theme-change";

export default function ThemeToggle() {
  const theme = useThemeMode();
  const isDark = theme === "dark";

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      document.documentElement.dataset.theme = stored;
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  const handleToggle = () => {
    const nextTheme = isDark ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={handleToggle}
      className="glow-hover relative inline-flex h-5 w-9 items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] transition"
    >
      <span
        className={`inline-flex h-3 w-3 rounded-full bg-[color:var(--cta-bg)] transition-transform ${
          isDark ? "translate-x-4" : "translate-x-1"
        }`}
      />
    </button>
  );
}
