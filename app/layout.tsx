import "./globals.css";
import type { Metadata } from "next";
import { geistMono, inter } from "./lib/font";
import Header from '@/app/components/layout/header';
import Footer from '@/app/components/layout/footer';

export const metadata: Metadata = {
  title: {
    default: "Denton Flake",
    template: "%s | Denton Flake",
  },
  description: "Developer portfolio for Denton Flake, featuring projects, experience, and selected work.",
};

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
