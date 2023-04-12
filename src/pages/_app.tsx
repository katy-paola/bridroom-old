import '@/styles/index.scss';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <>
            <style jsx global>{`
                * {
                    font-family: ${poppins.style.fontFamily};
                }
            `}</style>
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </>
    );
}
