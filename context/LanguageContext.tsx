"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Translations } from "@/config/translations";

type Language = "nl" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
    language: "nl",
    setLanguage: () => { },
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("nl");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
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
