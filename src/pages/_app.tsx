import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { montserrat } from '@/styles/fonts';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={montserrat.variable}>
            <Component {...pageProps} />
        </main>
    );
}