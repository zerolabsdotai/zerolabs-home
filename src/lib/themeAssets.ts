export type ThemeMode = "light" | "dark";

type ThemeAssets = {
  bg: string;
  banner: string;
  logo: string;
};

const THEME_ASSETS: Record<ThemeMode, ThemeAssets> = {
  dark: {
    bg: "/assets/home/AI%20ROBOT%20BG%20Dark.svg",
    banner: "/assets/home/Banner.svg",
    logo: "/brand/Logos/AI%20robot%20logo%20dark.svg",
  },
  light: {
    bg: "/assets/home/AI%20ROBOT%20BG%20Light.svg",
    banner: "/assets/home/Banner%20Light.svg",
    logo: "/brand/Logos/AI%20robot%20logo%20light.svg",
  },
};

export const getThemeAssets = (theme: ThemeMode): ThemeAssets =>
  THEME_ASSETS[theme];
