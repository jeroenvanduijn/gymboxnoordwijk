import "server-only";
import { Translations } from "@/config/translations";

// We need to import the translations directly or fetch them
// Since translations.ts exports a const object, we can just use it.
// However, to keep it clean and async (as per Next.js docs for future proofing), we'll simulate async.

const dictionaries = {
    nl: () => import("@/config/translations").then((module) => module.translations.nl),
    en: () => import("@/config/translations").then((module) => module.translations.en),
};

export const getDictionary = async (locale: string): Promise<Translations> => {
    // @ts-ignore
    if (dictionaries[locale]) {
        // @ts-ignore
        return dictionaries[locale]();
    }
    return dictionaries.nl();
};
