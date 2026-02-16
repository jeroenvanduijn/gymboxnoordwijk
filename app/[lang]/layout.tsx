import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";
import { LanguageProvider } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { Language } from "@/config/translations";
import PageHistoryTracker from "@/components/PageHistoryTracker";
import { PopupProvider } from "@/context/PopupContext";
import HighLevelPopup from "@/components/HighLevelPopup";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.gym.name} | ${siteConfig.gym.tagline}`,
    template: `%s | ${siteConfig.gym.name}`
  },
  description: "Bij Gymbox in Noordwijk train je met persoonlijke begeleiding. Groepslessen, personal training en voedingscoaching. Plan een gratis intro!",
  icons: {
    icon: "/favicon.ico",
  },
};

export async function generateStaticParams() {
  return [{ lang: 'nl' }, { lang: 'en' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Language = ["nl", "en"].includes(lang) ? (lang as Language) : "nl";

  // ... existing code ...

  return (
    <html lang={validLang}>
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        <LanguageProvider lang={validLang}>
          <PopupProvider>
            <PageHistoryTracker />
            <SchemaOrg />

            <Header />
            <HighLevelPopup />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </PopupProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
