import type { Metadata } from "next";
import { AppProvider } from '@/context/AppContext'
import UseQueryWrapper from '@/layout/UseQueryWrapper'
import Navbar from '@/layout/Navbar'
import '@fontsource/roboto-condensed'
import "./globals.css";

export const metadata: Metadata = {
    title: "Marvel App",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>
        <AppProvider>
            <UseQueryWrapper>
                <html lang="es">
                    <body>
                        <Navbar />
                        {children}
                    </body>
                </html>
            </UseQueryWrapper>
        </AppProvider>
    </>
}