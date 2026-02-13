"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageHistoryTracker() {
    const pathname = usePathname();

    useEffect(() => {
        if (!pathname) return;

        // Get existing history from session storage
        const storageKey = "gymbox_page_history";
        const historyString = sessionStorage.getItem(storageKey);
        let history: string[] = historyString ? JSON.parse(historyString) : [];

        // Add current path if it's different from the last one to avoid duplicates on re-renders
        if (history.length === 0 || history[history.length - 1] !== pathname) {
            history.push(pathname);
            // Keep only last 10 pages to avoid cookie/storage limits if sent via other means
            if (history.length > 10) history = history.slice(-10);
            sessionStorage.setItem(storageKey, JSON.stringify(history));
        }
    }, [pathname]);

    return null;
}
