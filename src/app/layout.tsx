import type { Metadata } from "next";
import {
  Bungee,
  Bungee_Hairline,
  Geist,
  Geist_Mono,
  Holtwood_One_SC,
  Lexend_Zetta,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bungeeHairline = Bungee_Hairline({
  variable: "--font-bungee-hairline",
  weight: "400",
  subsets: ["latin"],
});

const bungee = Bungee({
  variable: "--font-bungee",
  weight: "400",
  subsets: ["latin"],
});

const lexendZetta = Lexend_Zetta({
  variable: "--font-lexend-zetta",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const holtwood = Holtwood_One_SC({
  variable: "--font-holtwood",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zero Labs AI",
  description:
    "Zero Labs builds a calm control plane for reliable AI operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bungeeHairline.variable} ${bungee.variable} ${lexendZetta.variable} ${holtwood.variable}`}
    >
      <body className="antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <main id="main" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}
