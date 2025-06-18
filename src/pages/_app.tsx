import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={montserrat.variable}>
            <Component {...pageProps} />;
        </main>
    );
}
