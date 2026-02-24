"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Small delay so it doesn't flash immediately on load
            const timer = setTimeout(() => setVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
            <div className="container-custom max-w-4xl mx-auto bg-gray-900 text-white rounded-2xl shadow-2xl p-6 md:flex md:items-center md:justify-between gap-6">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm md:text-base leading-relaxed">
                        🍪 Wij gebruiken cookies om je ervaring te verbeteren. Door verder te gaan ga je akkoord met ons{" "}
                        <a href="/privacy" className="text-primary underline hover:text-primary/80">
                            privacy- en cookiebeleid
                        </a>.
                    </p>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                    <button
                        onClick={handleDecline}
                        className="px-5 py-2.5 text-sm font-semibold rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors"
                    >
                        Weigeren
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-primary text-white hover:opacity-90 transition-colors"
                    >
                        Accepteren
                    </button>
                </div>
            </div>
        </div>
    );
}
