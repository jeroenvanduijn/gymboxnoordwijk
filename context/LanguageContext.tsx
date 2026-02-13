"use client";

import { createContext, useContext, ReactNode } from "react";
import { translations, Translations, Language } from "@/config/translations";

interface LanguageContextType {
    language: Language;
}

const LanguageContext = createContext<LanguageContextType>({
    language: "nl",
});

export function LanguageProvider({ children, lang }: { children: ReactNode, lang: Language }) {
    return (
        <LanguageContext.Provider value={{ language: lang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}

export function useTranslations(): Translations {
    const { language } = useLanguage();
    return translations[language];
}
