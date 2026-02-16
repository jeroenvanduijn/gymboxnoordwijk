import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { PopupProvider } from "@/context/PopupContext";
import HighLevelPopup from "@/components/HighLevelPopup";
import { siteConfig } from "@/config/site";

const headingFont = Inter({
    subsets: ["latin"],
    variable: "--font-heading",
    weight: ["400", "500", "600", "700", "800"],
});

const bodyFont = Inter({
    subsets: ["latin"],
    variable: "--font-body",
    weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
    title: {
        default: siteConfig.gym.name,
        template: `%s | ${siteConfig.gym.name}`,
    },
    description: siteConfig.hero.subheadline,
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="nl" className="scroll-smooth">
            <body
                className={`${headingFont.variable} ${bodyFont.variable} font-sans antialiased text-gray-900 bg-background`}
            >
                <LanguageProvider lang="nl">
                    <PopupProvider>
                        <div className="flex flex-col min-h-screen">
                            <Header />
                            <main className="flex-grow">{children}</main>
                            <Footer />
                            <HighLevelPopup />
                        </div>
                    </PopupProvider>
                </LanguageProvider>
            </body>
        </html>
    );
}
