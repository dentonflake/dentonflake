import type { Metadata } from "next";
import { Syne, Crimson_Pro, Martian_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const martianMono = Martian_Mono({
  variable: "--font-martian",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Denton Flake — Applications Developer",
  description:
    "Full-stack applications developer and software development student. Building clean, modern applications that feel intentional and easy to use.",
  openGraph: {
    title: "Denton Flake — Applications Developer",
    description: "Full-stack developer building intentional, modern applications.",
    url: "https://dentonflake.com",
    siteName: "Denton Flake",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${crimsonPro.variable} ${martianMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
