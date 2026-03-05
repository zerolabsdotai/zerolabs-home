export type ThemeMode = "light" | "dark";

type ThemeAssets = {
  bg: string;
  banner: string;
  logo: string;
  featureSlides: {
    image: string;
    label: string;
    title: string;
    description: string;
  }[];
};

const THEME_ASSETS: Record<ThemeMode, ThemeAssets> = {
  dark: {
    bg: "/assets/home/AI%20ROBOT%20BG%20Dark.svg",
    banner: "/assets/home/Banner.svg",
    logo: "/brand/Logos/AI%20robot%20logo%20dark.svg",
    featureSlides: [
      {
        image: "/assets/home/Banner.svg",
        label: "Feature",
        title: "Automation that scales",
        description:
          "Deploy reliable AI workflows with structured guardrails and calm controls.",
      },
      {
        image: "/assets/home/Background%20Image.svg",
        label: "Insight",
        title: "Operational clarity",
        description:
          "Surface the signals that matter and keep leadership aligned.",
      },
      {
        image: "/assets/home/Banner.svg",
        label: "Governance",
        title: "Audit-ready coverage",
        description:
          "Capture decisions, approvals, and outcomes without slowing delivery.",
      },
      {
        image: "/assets/home/Background%20Image.svg",
        label: "Reliability",
        title: "Resilient automation",
        description:
          "Runbooks, monitoring, and safeguards for every AI system.",
      },
    ],
  },
  light: {
    bg: "/assets/home/AI%20ROBOT%20BG%20Light.svg",
    banner: "/assets/home/Banner%20Light.svg",
    logo: "/brand/Logos/AI%20robot%20logo%20light.svg",
    featureSlides: [
      {
        image: "/assets/home/Banner%20Light.svg",
        label: "Feature",
        title: "Automation that scales",
        description:
          "Deploy reliable AI workflows with structured guardrails and calm controls.",
      },
      {
        image: "/assets/home/Background%20Image%20BNW.svg",
        label: "Insight",
        title: "Operational clarity",
        description:
          "Surface the signals that matter and keep leadership aligned.",
      },
      {
        image: "/assets/home/Banner%20Light.svg",
        label: "Governance",
        title: "Audit-ready coverage",
        description:
          "Capture decisions, approvals, and outcomes without slowing delivery.",
      },
      {
        image: "/assets/home/Background%20Image%20BNW.svg",
        label: "Reliability",
        title: "Resilient automation",
        description:
          "Runbooks, monitoring, and safeguards for every AI system.",
      },
    ],
  },
};

export const getThemeAssets = (theme: ThemeMode): ThemeAssets =>
  THEME_ASSETS[theme];
