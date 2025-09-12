import "@/app/globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat()

export const metadata: Metadata = {
  title: 'Denton Flake',
  description: 'Welcome to Denton Flake\'s personal portfolio. Explore my projects, skills, and experience in web development and software engineering.',
  openGraph: {
    title: 'Denton Flake',
    description: 'Welcome to Denton Flake\'s personal portfolio. Explore my projects, skills, and experience in web development and software engineering.',
    url: 'https://dentonflake.com',
    siteName: 'Denton Flake',
    // images: [{ url: '' }]
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
