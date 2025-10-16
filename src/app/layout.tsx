import "@/styles/globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import Header from '@/components/testHeader'
import Footer from '@/components/Footer'

const montserrat = Montserrat()

export const metadata: Metadata = {
  title: {
    default: 'Denton Flake',
    template: '%s | Denton Flake',
  },
  description: 'Welcome to Denton Flake\'s personal portfolio. Explore my projects, skills, and experience in web development and software engineering.',
  openGraph: {
    title: {
      default: 'Denton Flake | Portfolio',
      template: '%s | Denton Flake',
    },
    description: 'Welcome to Denton Flake\'s personal portfolio. Explore my projects, skills, and experience in web development and software engineering.',
    url: 'https://dentonflake.com',
    siteName: 'Denton Flake'
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Header></Header>
        <main>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}

export default RootLayout